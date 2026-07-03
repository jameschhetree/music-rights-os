const modules = [
  {
    id: "01",
    name: "Music Rights Dashboard",
    description:
      "Track all registrations, ownership percentages, and rights status across every project in one unified view. Never miss a registration deadline again.",
    tags: ["Registrations", "Ownership", "Rights Status"],
    color: "from-amber-500/20 to-yellow-600/5",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f5c518" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    id: "02",
    name: "Split Sheet Generator",
    description:
      "Create professional split sheets with exact percentages, defined roles, and legally-binding digital signatures. No more handshake deals.",
    tags: ["Digital Signatures", "Percentages", "Legal"],
    color: "from-purple-500/15 to-purple-900/5",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f5c518" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    id: "03",
    name: "Producer CRM",
    description:
      "Your full rolodex. Manage artists, labels, managers, A&R reps, and collaborators. Log every interaction, track deal status, and never drop a follow-up.",
    tags: ["Contacts", "Deal Tracking", "Follow-ups"],
    color: "from-blue-500/15 to-blue-900/5",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f5c518" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: "04",
    name: "Release Calendar",
    description:
      "Automated content calendar to plan and promote your releases. Pre-save campaigns, social scheduling, press push timelines — all synced to your drop date.",
    tags: ["Pre-save", "Social Schedule", "Press"],
    color: "from-green-500/15 to-green-900/5",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f5c518" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    id: "05",
    name: "Royalty Pocket",
    description:
      "Search your music across all platforms and track royalties and distributions in real time. One dashboard, every dollar.",
    tags: ["Multi-platform", "Real-time", "Payouts"],
    color: "from-yellow-500/15 to-yellow-900/5",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f5c518" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    id: "06",
    name: "Copyright Checker",
    description:
      "Check for sample clearance issues, existing master conflicts, and legal risks before you release. Avoid the lawsuit, not just the takedown.",
    tags: ["Sample Clearance", "Legal Check", "Risk Scan"],
    color: "from-red-500/15 to-red-900/5",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f5c518" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    id: "07",
    name: "Music Business OS",
    description:
      "Your entire financial operation: expenses, invoices, and tax prep all in one place. Know exactly what you made, what you spent, and what you owe.",
    tags: ["Invoices", "Expenses", "Tax Prep"],
    color: "from-indigo-500/15 to-indigo-900/5",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f5c518" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    id: "08",
    name: "Opportunity Feed",
    description:
      "Daily curated updates on sync placements, playlist submissions, songwriting contests, brand deals, and licensing opportunities matched to your sound.",
    tags: ["Sync Deals", "Playlists", "Brand Deals"],
    color: "from-teal-500/15 to-teal-900/5",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f5c518" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  },
  {
    id: "09",
    name: "License Generator",
    description:
      "Generate custom music licenses and contract terms for sync, beat leases, co-writing, and master use — without a $400/hour entertainment lawyer.",
    tags: ["Sync License", "Beat Lease", "Co-write"],
    color: "from-pink-500/15 to-pink-900/5",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f5c518" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
      </svg>
    ),
  },
  {
    id: "10",
    name: "AI Release Planner",
    description:
      "AI-powered scheduling that analyzes your audience, past performance, and platform algorithms to recommend the optimal release strategy for every drop.",
    tags: ["AI-powered", "Algorithm-aware", "Strategy"],
    color: "from-orange-500/15 to-orange-900/5",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f5c518" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4M12 18v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M2 12h4M18 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6" style={{ background: "#080808" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-tag mb-4 inline-block">10 Modules</span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-5"
            style={{ color: "#f0f0f0", letterSpacing: "-0.02em" }}
          >
            Everything your music business needs.{" "}
            <span className="gold-text">Nothing it doesn&apos;t.</span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "rgba(240,240,240,0.5)" }}
          >
            Built specifically for independent artists, producers, and songwriters.
            No bloat. No confusing enterprise features. Just the tools you need to
            run your music like a business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {modules.slice(0, 8).map((mod) => (
            <div key={mod.id} className="glass-card p-6">
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(245,197,24,0.08)" }}
                >
                  {mod.icon}
                </div>
                <span
                  className="text-xs font-black"
                  style={{ color: "rgba(245,197,24,0.4)" }}
                >
                  {mod.id}
                </span>
              </div>
              <h3
                className="text-sm font-bold mb-2 leading-tight"
                style={{ color: "#f0f0f0" }}
              >
                {mod.name}
              </h3>
              <p
                className="text-xs leading-relaxed mb-4"
                style={{ color: "#666", lineHeight: "1.6" }}
              >
                {mod.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {mod.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{
                      background: "rgba(245,197,24,0.06)",
                      color: "rgba(245,197,24,0.7)",
                      border: "1px solid rgba(245,197,24,0.12)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}

          <div
            className="glass-card p-6 sm:col-span-2"
            style={{ borderRadius: "14px" }}
          >
            <div className="flex items-start justify-between mb-4">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(245,197,24,0.08)" }}
              >
                {modules[8].icon}
              </div>
              <span
                className="text-xs font-black"
                style={{ color: "rgba(245,197,24,0.4)" }}
              >
                {modules[8].id}
              </span>
            </div>
            <h3
              className="text-base font-bold mb-2"
              style={{ color: "#f0f0f0" }}
            >
              {modules[8].name}
            </h3>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "#666" }}
            >
              {modules[8].description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {modules[8].tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{
                    background: "rgba(245,197,24,0.06)",
                    color: "rgba(245,197,24,0.7)",
                    border: "1px solid rgba(245,197,24,0.12)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div
            className="glass-card p-6 sm:col-span-2"
            style={{
              borderRadius: "14px",
              background:
                "linear-gradient(135deg, rgba(245,197,24,0.1) 0%, rgba(18,18,18,0.95) 60%)",
              borderColor: "rgba(245,197,24,0.2)",
            }}
          >
            <div className="flex items-start justify-between mb-4">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(245,197,24,0.15)" }}
              >
                {modules[9].icon}
              </div>
              <span
                className="text-xs font-black px-2 py-0.5 rounded-full"
                style={{
                  background: "rgba(245,197,24,0.15)",
                  color: "#f5c518",
                  border: "1px solid rgba(245,197,24,0.3)",
                }}
              >
                AI-Powered
              </span>
            </div>
            <h3
              className="text-base font-bold mb-2"
              style={{ color: "#f5c518" }}
            >
              {modules[9].name}
            </h3>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "rgba(240,240,240,0.6)" }}
            >
              {modules[9].description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {modules[9].tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{
                    background: "rgba(245,197,24,0.12)",
                    color: "#f5c518",
                    border: "1px solid rgba(245,197,24,0.25)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
