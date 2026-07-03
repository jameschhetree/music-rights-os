"use client";

import { useScrollReveal } from "../components/ScrollReveal";

const problems = [
  {
    title: "Missing royalties",
    body: "Artists lose thousands from PRO registrations never filed.",
    color: "#f5c518",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "Unclear splits",
    body: "No proper split sheets means disputes, lawsuits, and lost revenue.",
    color: "#8b5cf6",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    title: "Fragmented tools",
    body: "Distribution, publishing, splits, contracts — four apps, nothing synced.",
    color: "#3b82f6",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="6" height="6" rx="1" />
        <rect x="9" y="3" width="6" height="6" rx="1" />
        <rect x="16" y="3" width="6" height="6" rx="1" />
        <rect x="2" y="15" width="6" height="6" rx="1" />
        <rect x="16" y="15" width="6" height="6" rx="1" />
        <path d="M5 9v3M12 9v6M19 9v3M5 18h14" strokeDasharray="3 3" />
      </svg>
    ),
  },
  {
    title: "Missed opportunities",
    body: "Sync placements, brand deals, playlist spots — gone before you see them.",
    color: "#ec4899",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  },
  {
    title: "Legal exposure",
    body: "Unregistered copyrights and uncleared samples are time bombs.",
    color: "#10b981",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Zero financial clarity",
    body: "Tax season arrives and nobody knows what they earned or owe.",
    color: "#f5c518",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
];

export default function ProblemsSection() {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref}
      className="py-24 px-6 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0a0a0f 0%, #0d0a1a 50%, #0a0a0f 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(108,43,217,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14 reveal-on-scroll">
          <span className="section-tag mb-4 inline-block">The Problem</span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-4"
            style={{ color: "#f0f0f0", letterSpacing: "-0.02em" }}
          >
            The industry{" "}
            <span className="purple-text">wasn&apos;t built for you.</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "rgba(240,240,240,0.45)" }}>
            Labels and publishers profit from the confusion. Time to flip the script.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map(({ title, body, color, icon }, i) => (
            <div
              key={title}
              className={`glass-card p-6 reveal-on-scroll stagger-${i + 1}`}
              style={{ borderRadius: "16px" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: `${color}14`,
                  color,
                  border: `1px solid ${color}22`,
                }}
              >
                {icon}
              </div>
              <h3 className="text-sm font-bold mb-1.5" style={{ color: "#f0f0f0" }}>
                {title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: "#666", lineHeight: "1.65" }}>
                {body}
              </p>
            </div>
          ))}
        </div>

        <div
          className="mt-12 rounded-2xl p-8 text-center reveal-on-scroll"
          style={{
            background: "linear-gradient(135deg, rgba(245,197,24,0.07) 0%, rgba(108,43,217,0.07) 100%)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <p
            className="text-xl sm:text-2xl md:text-3xl font-black mb-2"
            style={{ color: "#f0f0f0", letterSpacing: "-0.02em" }}
          >
            Artists lose an estimated{" "}
            <span className="gold-text">$2.65 billion</span>{" "}
            in unclaimed royalties every year.
          </p>
          <p className="text-xs" style={{ color: "#444" }}>
            Source: CISAC / Royalty Exchange industry estimates
          </p>
        </div>
      </div>
    </section>
  );
}
