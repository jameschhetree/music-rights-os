"use client";

import { useScrollReveal } from "../components/ScrollReveal";

const modules = [
  {
    id: "01",
    name: "Rights Dashboard",
    blurb: "All registrations, ownership %, and status in one view.",
    color: "#f5c518",
    hoverClass: "glass-card-gold",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
    blurb: "Exact percentages. Defined roles. Digital signatures.",
    color: "#8b5cf6",
    hoverClass: "",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    id: "03",
    name: "Producer CRM",
    blurb: "Artists, labels, A&Rs. Every interaction tracked.",
    color: "#3b82f6",
    hoverClass: "glass-card-blue",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
    blurb: "Pre-save campaigns, social schedules, press pushes.",
    color: "#ec4899",
    hoverClass: "glass-card-rose",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
    blurb: "Every platform, every dollar, in real time.",
    color: "#10b981",
    hoverClass: "glass-card-emerald",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    id: "06",
    name: "Copyright Checker",
    blurb: "Sample clearance and legal risk scan before release.",
    color: "#f5c518",
    hoverClass: "glass-card-gold",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    id: "07",
    name: "Business OS",
    blurb: "Expenses, invoices, tax prep — all in one place.",
    color: "#8b5cf6",
    hoverClass: "",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    id: "08",
    name: "Opportunity Feed",
    blurb: "Sync, playlists, brand deals — matched to your sound daily.",
    color: "#3b82f6",
    hoverClass: "glass-card-blue",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  },
  {
    id: "09",
    name: "License Generator",
    blurb: "Custom sync, beat lease, and co-write contracts — instantly.",
    color: "#ec4899",
    hoverClass: "glass-card-rose",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
      </svg>
    ),
  },
  {
    id: "10",
    name: "AI Release Planner",
    blurb: "Algorithm-aware strategy for every drop.",
    color: "#10b981",
    hoverClass: "glass-card-emerald",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4M12 18v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M2 12h4M18 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
  },
];

export default function FeaturesSection() {
  const ref = useScrollReveal();

  return (
    <section
      id="features"
      ref={ref}
      className="py-32 md:py-48 px-6 relative overflow-hidden"
      style={{ background: "#0a0a0f" }}
    >
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none animate-pulse-orb"
        style={{
          background: "rgba(59,130,246,0.08)",
          filter: "blur(80px)",
          animationDelay: "1s",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none animate-pulse-orb"
        style={{
          background: "rgba(236,72,153,0.07)",
          filter: "blur(70px)",
          animationDelay: "2.5s",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14 reveal-on-scroll">
          <span className="section-tag mb-4 inline-block">10 Modules</span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-4"
            style={{ color: "#f0f0f0", letterSpacing: "-0.02em" }}
          >
            Everything your music business needs.{" "}
            <span className="gold-text">Nothing it doesn&apos;t.</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "rgba(240,240,240,0.45)" }}>
            Built for independent artists, producers, and songwriters. No bloat.
          </p>
        </div>

        {/* Dashboard mockup */}
        <div
          className="mb-12 rounded-2xl overflow-hidden reveal-on-scroll"
          style={{
            background: "rgba(10,10,18,0.95)",
            border: "1px solid rgba(108,43,217,0.25)",
            boxShadow: "0 0 0 1px rgba(108,43,217,0.1), 0 40px 120px rgba(0,0,0,0.7), 0 0 60px rgba(108,43,217,0.08)",
          }}
        >
          {/* Window chrome */}
          <div
            className="flex items-center gap-2 px-4 py-3"
            style={{ background: "rgba(15,15,26,1)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
          >
            <div className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
            <div className="w-3 h-3 rounded-full" style={{ background: "#febc2e" }} />
            <div className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
            <div className="flex-1 mx-4">
              <div
                className="mx-auto px-3 py-1 rounded-md text-xs"
                style={{ background: "rgba(255,255,255,0.04)", color: "#444", maxWidth: "280px", textAlign: "center" }}
              >
                app.musicrightsos.com/dashboard
              </div>
            </div>
          </div>

          <div className="flex" style={{ minHeight: "380px" }}>
            {/* Sidebar */}
            <div
              className="flex-shrink-0 w-14 sm:w-52 flex flex-col py-4 gap-1"
              style={{ background: "rgba(10,10,16,0.9)", borderRight: "1px solid rgba(255,255,255,0.04)" }}
            >
              <div className="px-3 mb-3 hidden sm:block">
                <span className="text-xs font-black" style={{ color: "#f5c518", letterSpacing: "0.1em" }}>MROS</span>
              </div>
              {[
                { label: "Rights Dashboard", icon: "▣", color: "#f5c518", active: true },
                { label: "Royalty Pocket", icon: "$", color: "#10b981", active: false },
                { label: "Split Sheets", icon: "⊘", color: "#8b5cf6", active: false },
                { label: "Opportunity Feed", icon: "◈", color: "#3b82f6", active: false },
                { label: "Business OS", icon: "≈", color: "#ec4899", active: false },
              ].map(({ label, icon, color, active }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg mx-1.5 cursor-pointer"
                  style={{
                    background: active ? `${color}14` : "transparent",
                    borderLeft: active ? `2px solid ${color}` : "2px solid transparent",
                  }}
                >
                  <span className="text-sm w-5 text-center" style={{ color: active ? color : "#333" }}>{icon}</span>
                  <span className="text-xs hidden sm:block" style={{ color: active ? "#f0f0f0" : "#444" }}>{label}</span>
                </div>
              ))}
            </div>

            {/* Main content */}
            <div className="flex-1 p-5 overflow-hidden">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-xs" style={{ color: "#555" }}>Rights Dashboard</p>
                  <p className="text-sm font-bold" style={{ color: "#f0f0f0" }}>Your Music Catalog</p>
                </div>
                <div
                  className="px-3 py-1.5 rounded-lg text-xs font-bold"
                  style={{ background: "rgba(245,197,24,0.12)", color: "#f5c518", border: "1px solid rgba(245,197,24,0.2)" }}
                >
                  + Register New Work
                </div>
              </div>

              {/* KPI row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
                {[
                  { label: "Total Works", value: "47", color: "#f5c518", delta: "+3 this month" },
                  { label: "Royalties YTD", value: "$12,840", color: "#10b981", delta: "+$2,100 vs last yr" },
                  { label: "Pending Splits", value: "2", color: "#ec4899", delta: "Action needed" },
                ].map(({ label, value, color, delta }) => (
                  <div
                    key={label}
                    className="p-3 rounded-xl"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}
                  >
                    <p className="text-xs mb-1" style={{ color: "#444" }}>{label}</p>
                    <p className="text-lg font-black" style={{ color }}>{value}</p>
                    <p className="text-xs mt-0.5" style={{ color: "#333" }}>{delta}</p>
                  </div>
                ))}
              </div>

              {/* Royalty bar chart */}
              <div className="mb-5">
                <p className="text-xs font-bold mb-3" style={{ color: "#555" }}>Monthly Royalties — Last 6 Months</p>
                <div className="flex items-end gap-2" style={{ height: "72px" }}>
                  {[40, 55, 38, 70, 62, 88].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        className="w-full rounded-t-md"
                        style={{
                          height: `${h}%`,
                          background: i === 5
                            ? "linear-gradient(180deg, #f5c518, #b8960f)"
                            : "rgba(108,43,217,0.35)",
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 mt-1">
                  {["Feb", "Mar", "Apr", "May", "Jun", "Jul"].map((m) => (
                    <div key={m} className="flex-1 text-center text-xs" style={{ color: "#333" }}>{m}</div>
                  ))}
                </div>
              </div>

              {/* Song list */}
              <div>
                <p className="text-xs font-bold mb-2" style={{ color: "#555" }}>Recent Works</p>
                <div className="flex flex-col gap-1.5">
                  {[
                    { title: "Late Nights (feat. Nia B.)", split: "60%", status: "Registered", statusColor: "#10b981" },
                    { title: "Gold Rush", split: "100%", status: "Registered", statusColor: "#10b981" },
                    { title: "Frequency (collab)", split: "40%", status: "Pending Split", statusColor: "#f5c518" },
                  ].map(({ title, split, status, statusColor }) => (
                    <div
                      key={title}
                      className="flex items-center justify-between px-3 py-2 rounded-lg"
                      style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)" }}
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <div className="w-6 h-6 rounded-md flex-shrink-0" style={{ background: "rgba(108,43,217,0.25)" }} />
                        <p className="text-xs truncate" style={{ color: "#ccc" }}>{title}</p>
                      </div>
                      <div className="flex items-center gap-4 flex-shrink-0 ml-3">
                        <span className="text-xs hidden sm:block" style={{ color: "#555" }}>{split} ownership</span>
                        <span
                          className="text-xs px-2 py-0.5 rounded-full"
                          style={{ background: `${statusColor}14`, color: statusColor, border: `1px solid ${statusColor}22` }}
                        >
                          {status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
          {modules.map((mod, i) => (
            <div
              key={mod.id}
              className={`glass-card ${mod.hoverClass} p-5 flex flex-col gap-3 reveal-on-scroll stagger-${Math.min(i + 1, 6)}`}
            >
              <div className="flex items-center justify-between">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: `${mod.color}14`, color: mod.color }}
                >
                  {mod.icon}
                </div>
                <span
                  className="text-xs font-black tabular-nums"
                  style={{ color: `${mod.color}55` }}
                >
                  {mod.id}
                </span>
              </div>
              <div>
                <h3 className="text-sm font-bold mb-1" style={{ color: "#f0f0f0" }}>
                  {mod.name}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "#555", lineHeight: "1.6" }}>
                  {mod.blurb}
                </p>
              </div>
              <div
                className="h-0.5 w-8 rounded-full mt-auto"
                style={{ background: `linear-gradient(90deg, ${mod.color}, transparent)` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
