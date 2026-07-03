# Music Rights OS - Backend Architecture Plan

## Stack

| Layer | Technology | Why |
|-------|-----------|-----|
| Frontend | Next.js 15+ (App Router) | Already built, SSR + static, Vercel-native |
| Backend API | Next.js API Routes + tRPC | Type-safe, co-located, no separate server |
| Database | Supabase (PostgreSQL) | Auth, realtime, row-level security, free tier |
| Auth | Supabase Auth | OAuth (Google, Apple), magic link, session management |
| Payments | Stripe | Subscriptions, metered billing, customer portal |
| File Storage | Supabase Storage | Contract PDFs, split sheets, exports |
| Search | PostgreSQL full-text | Good enough for catalog search at scale |
| Background Jobs | Vercel Cron + Inngest | Royalty sync, report generation, email digests |
| Email | Resend | Transactional emails, waitlist, onboarding drip |
| Analytics | PostHog | Product analytics, feature flags, session replay |
| Monitoring | Sentry | Error tracking, performance monitoring |

## Database Schema

### Core Tables

```
users
  id              UUID PRIMARY KEY (Supabase auth.users)
  email           TEXT UNIQUE NOT NULL
  full_name       TEXT
  avatar_url      TEXT
  plan            ENUM('free','starter','pro','manager','enterprise')
  stripe_customer TEXT
  stripe_sub      TEXT
  created_at      TIMESTAMPTZ
  updated_at      TIMESTAMPTZ

artists
  id              UUID PRIMARY KEY
  user_id         UUID REFERENCES users (owner/manager)
  name            TEXT NOT NULL
  stage_name      TEXT
  pro_affiliation TEXT (ASCAP, BMI, SESAC, etc)
  ipi_number      TEXT
  isni            TEXT
  created_at      TIMESTAMPTZ

songs
  id              UUID PRIMARY KEY
  title           TEXT NOT NULL
  isrc            TEXT
  iswc            TEXT
  release_date    DATE
  genre           TEXT
  status          ENUM('draft','registered','released','archived')
  created_at      TIMESTAMPTZ

song_artists
  song_id         UUID REFERENCES songs
  artist_id       UUID REFERENCES artists
  role            ENUM('primary','featured','producer','writer','composer')
  PRIMARY KEY (song_id, artist_id, role)

splits
  id              UUID PRIMARY KEY
  song_id         UUID REFERENCES songs
  artist_id       UUID REFERENCES artists
  percentage      DECIMAL(5,2) NOT NULL CHECK (>= 0 AND <= 100)
  split_type      ENUM('master','publishing','performance','mechanical')
  agreed_at       TIMESTAMPTZ
  signed          BOOLEAN DEFAULT FALSE

split_sheets
  id              UUID PRIMARY KEY
  song_id         UUID REFERENCES songs
  created_by      UUID REFERENCES users
  pdf_url         TEXT
  status          ENUM('draft','sent','signed','expired')
  created_at      TIMESTAMPTZ

royalties
  id              UUID PRIMARY KEY
  song_id         UUID REFERENCES songs
  artist_id       UUID REFERENCES artists
  source          TEXT (Spotify, Apple Music, YouTube, etc)
  period          TEXT (Q1 2026, etc)
  gross_amount    DECIMAL(10,2)
  net_amount      DECIMAL(10,2)
  currency        TEXT DEFAULT 'USD'
  reported_at     TIMESTAMPTZ

contracts
  id              UUID PRIMARY KEY
  title           TEXT
  parties         JSONB
  contract_type   ENUM('license','sync','distribution','management','work_for_hire')
  start_date      DATE
  end_date        DATE
  pdf_url         TEXT
  status          ENUM('draft','active','expired','terminated')
  created_by      UUID REFERENCES users

releases
  id              UUID PRIMARY KEY
  title           TEXT NOT NULL
  release_type    ENUM('single','ep','album','compilation')
  release_date    DATE
  cover_art_url   TEXT
  status          ENUM('planned','submitted','live','taken_down')
  distributor     TEXT
  upc             TEXT

release_songs
  release_id      UUID REFERENCES releases
  song_id         UUID REFERENCES songs
  track_number    INTEGER
  PRIMARY KEY (release_id, song_id)

opportunities
  id              UUID PRIMARY KEY
  title           TEXT NOT NULL
  type            ENUM('sync','playlist','contest','brand_deal','collaboration')
  description     TEXT
  deadline        DATE
  url             TEXT
  source          TEXT
  created_at      TIMESTAMPTZ

team_members
  id              UUID PRIMARY KEY
  org_user_id     UUID REFERENCES users (the manager/label account)
  member_user_id  UUID REFERENCES users (the team member)
  role            ENUM('admin','editor','viewer')
  invited_at      TIMESTAMPTZ
  accepted_at     TIMESTAMPTZ
```

### Indexes

```
CREATE INDEX idx_songs_status ON songs(status);
CREATE INDEX idx_splits_song ON splits(song_id);
CREATE INDEX idx_royalties_song ON royalties(song_id);
CREATE INDEX idx_royalties_artist ON royalties(artist_id);
CREATE INDEX idx_artists_user ON artists(user_id);
CREATE INDEX idx_contracts_status ON contracts(status);
CREATE INDEX idx_releases_date ON releases(release_date);
```

### Row-Level Security (RLS)

All tables have RLS enabled. Policy pattern:
- Users can only read/write their own data
- Team members inherit access from the org owner based on their role
- Split participants can view (not edit) songs they're split on
- Supabase service role bypasses RLS for background jobs

## API Structure

```
/api/
  auth/
    callback        -- OAuth callback
    signup          -- Email signup + plan selection
  songs/
    GET    /        -- List user's songs (paginated)
    POST   /        -- Create song
    GET    /:id     -- Get song details + splits + royalties
    PATCH  /:id     -- Update song
    DELETE /:id     -- Archive song
  splits/
    POST   /        -- Create/update splits for a song
    GET    /sheet/:songId  -- Generate split sheet PDF
    POST   /sign/:id      -- Sign a split sheet
  royalties/
    GET    /        -- Dashboard summary (total, by source, by period)
    GET    /song/:id      -- Royalties for specific song
    POST   /import        -- Bulk import from CSV/distributor
  artists/
    GET    /        -- List managed artists
    POST   /        -- Add artist to roster
    PATCH  /:id     -- Update artist
  contracts/
    GET    /        -- List contracts
    POST   /        -- Create contract from template
    GET    /:id/pdf -- Generate contract PDF
  releases/
    GET    /        -- List releases
    POST   /        -- Plan a release
    PATCH  /:id     -- Update release
  billing/
    POST   /checkout       -- Create Stripe checkout session
    POST   /portal         -- Create Stripe customer portal session
    POST   /webhook        -- Stripe webhook handler
  opportunities/
    GET    /        -- List opportunities (filtered by genre/type)
```

## Authentication Flow

```
User arrives -> Landing page
  |
  v
Sign up (Google OAuth / Magic Link / Email+Password)
  |
  v
Supabase Auth creates user -> webhook fires -> create users row
  |
  v
Onboarding wizard:
  1. Add first artist (yourself or client)
  2. Add first song
  3. Create first split sheet
  |
  v
Dashboard (plan-gated features)
```

## Subscription / Billing Flow

```
Free user hits plan limit -> upgrade prompt
  |
  v
Stripe Checkout (monthly or annual)
  |
  v
Stripe webhook -> update users.plan + stripe_sub
  |
  v
Plan-gated middleware checks users.plan on each API call
  |
  v
Stripe Customer Portal for plan changes, cancellation, invoices
```

## Background Jobs (Vercel Cron + Inngest)

| Job | Frequency | What it does |
|-----|-----------|-------------|
| Royalty sync | Daily | Pull latest royalty data from connected distributors |
| Opportunity feed | Daily | Scrape/aggregate sync and playlist opportunities |
| Weekly digest | Weekly | Email summary: new royalties, expiring contracts, upcoming releases |
| Split sheet reminders | Daily | Nudge unsigned split sheet participants |
| Subscription check | Daily | Flag past-due subscriptions, send dunning emails |
| Copyright scan | On-demand | Check new songs against existing registrations |

## Security

- All API routes require Supabase JWT
- RLS on every table
- Stripe webhooks verified with signing secret
- File uploads scanned for type (PDF, images only)
- Rate limiting on auth endpoints (Vercel Edge)
- HIPAA not required (no health data) but PII handling follows best practices
- Audit log table for all write operations on songs, splits, contracts

## Deployment

```
Vercel (Frontend + API)
  |-- Next.js App Router
  |-- API Routes (serverless functions)
  |-- Cron jobs (vercel.json)
  |
Supabase (Database + Auth + Storage)
  |-- PostgreSQL
  |-- Auth (OAuth, magic link)
  |-- Storage (PDFs, images)
  |-- Realtime (optional, for live split negotiation)
  |
Stripe (Payments)
  |-- Subscriptions
  |-- Customer Portal
  |-- Webhooks -> /api/billing/webhook
  |
Resend (Email)
  |-- Transactional
  |-- Onboarding drip
  |-- Weekly digest
```

## Phase 1 Build Priority (MVP)

1. Auth (Supabase Google OAuth + magic link)
2. Artist + Song CRUD
3. Split sheet generator (create, PDF export, share link)
4. Basic royalty dashboard (manual CSV import)
5. Stripe subscriptions (Free -> Starter -> Pro)
6. Waitlist -> onboarding email flow

Everything else is Phase 2+.
