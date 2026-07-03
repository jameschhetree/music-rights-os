import Link from "next/link";

const journey = [
  {
    step: "1",
    action: "Upload a track",
    module: "Music Rights Dashboard",
    detail:
      "Add your track to Music Rights OS. Define all creators, their roles, and initial ownership splits.",
    color: "#f5c518",
  },
  {
    step: "2",
    action: "Register your rights",
    module: "Copyright Checker + Split Sheet Generator",
    detail:
      "Run a pre-clearance scan. Then generate and sign a split sheet with every collaborator — legally binding, instantly.",
    color: "#a78bfa",
  },
  {
    step: "3",
    action: "Track your splits",
    module: "Split Sheet Generator",
    detail:
      "Ownership percentages are locked in and shared with all co-writers. No confusion, no disputes, no handshake deals.",
    color: "#60a5fa",
  },
  {
    step: "4",
    action: "Plan your release",
    module: "AI Release Planner + Release Calendar",
    detail:
      "AI picks the optimal release date. Your campaign timeline is auto-built: pre-save, social posts, press outreach.",
    color: "#34d399",
  },
  {
    step: "5",
    action: "Collect every dollar",
    module: "Royalty Pocket",
    detail:
      "Streams, downloads, sync fees, performance royalties — all tracked in one dashboard. Alerts fire when new money arrives.",
    color: "#fb923c",
  },
  {
    step: "6",
    action: "Grow your business",
    module: "Business OS + Opportunity Feed",
    detail:
      "Revenue auto-flows into your Business OS. Meanwhile the Opportunity Feed is surfacing your next sync deal.",
    color: "#f5c518",
  },
];

export default function DataFlow() {
  return (
    <section className="py-24 px-6" style={{ background: "#0a0a0a" }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span className="section-tag mb-4 inline-block">The Full Journey</span>
          <h2
            className="text-3xl sm:text-4xl font-black leading-tight mb-4"
            style={{ color: "#f0f0f0", letterSpacing: "-0.02em" }}
          >
            Upload a track.{" "}
            <span className="gold-text">Get paid for life.</span>
          </h2>
          <p className="text-base" style={{ color: "rgba(240,240,240,0.45)" }}>
            This is what the full Music Rights OS workflow looks like from day one.
          </p>
        </div>

        <div className="relative">
          <div
            className="absolute left-6 sm:left-8 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(180deg, rgba(245,197,24,0.4) 0%, rgba(245,197,24,0.05) 100%)" }}
          />

          <div className="flex flex-col gap-0">
            {journey.map((item, i) => (
              <div key={item.step} className="flex gap-6 sm:gap-8 relative pb-8">
                <div
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-base sm:text-lg font-black shrink-0 relative z-10"
                  style={{
                    background: `${item.color}15`,
                    border: `2px solid ${item.color}40`,
                    color: item.color,
                  }}
                >
                  {item.step}
                </div>

                <div
                  className="flex-1 rounded-2xl p-5 sm:p-6 mb-1"
                  style={{
                    background: "rgba(14,14,14,0.9)",
                    border: `1px solid ${item.color}18`,
                  }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h3
                      className="text-base sm:text-lg font-black"
                      style={{ color: "#f0f0f0" }}
                    >
                      {item.action}
                    </h3>
                    <span
                      className="text-xs px-2.5 py-1 rounded-full font-medium shrink-0"
                      style={{
                        background: `${item.color}10`,
                        color: item.color,
                        border: `1px solid ${item.color}25`,
                      }}
                    >
                      {item.module}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(240,240,240,0.55)" }}>
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="mt-8 rounded-2xl p-8 sm:p-10 text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(245,197,24,0.1) 0%, rgba(14,14,14,0.98) 100%)",
            border: "1px solid rgba(245,197,24,0.25)",
          }}
        >
          <h3
            className="text-2xl sm:text-3xl font-black mb-3"
            style={{ color: "#f0f0f0", letterSpacing: "-0.02em" }}
          >
            Ready to run your music like a business?
          </h3>
          <p
            className="text-base mb-7"
            style={{ color: "rgba(240,240,240,0.5)" }}
          >
            Join 2,400+ independent artists who stopped leaving money on the table.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/#waitlist" className="btn-gold text-base" style={{ padding: "14px 32px" }}>
              Get Early Access — Free
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/" className="btn-ghost text-base" style={{ padding: "13px 28px" }}>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
