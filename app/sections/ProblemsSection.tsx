const problems = [
  {
    icon: "💸",
    title: "Missing royalty checks",
    description:
      "Artists lose thousands annually from PRO registrations they never filed and royalties they never claimed.",
  },
  {
    icon: "📋",
    title: "Unclear ownership splits",
    description:
      "No proper split sheets means disputes, lawsuits, and split revenue — sometimes years after the record drops.",
  },
  {
    icon: "🗂️",
    title: "Fragmented tools",
    description:
      "One app for distribution, another for publishing, spreadsheets for splits, email for contracts. Nothing talks.",
  },
  {
    icon: "📉",
    title: "Missed business opportunities",
    description:
      "Sync placements, brand deals, and contest wins pass you by because no system tracks or alerts you.",
  },
  {
    icon: "⚖️",
    title: "Legal exposure",
    description:
      "Unregistered copyrights and uncleared samples are ticking clocks. Most artists don't know until it's too late.",
  },
  {
    icon: "🧾",
    title: "No financial clarity",
    description:
      "Tax season arrives and nobody knows what they earned, what they spent, or what they owe.",
  },
];

export default function ProblemsSection() {
  return (
    <section
      className="py-24 px-6"
      style={{ background: "#0a0a0a" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-tag mb-4 inline-block">The Problem</span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-5"
            style={{ color: "#f0f0f0", letterSpacing: "-0.02em" }}
          >
            The music industry wasn&apos;t built{" "}
            <span className="gold-text">for artists</span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "rgba(240,240,240,0.5)" }}
          >
            The systems are complicated on purpose. Labels and publishers profit
            from the confusion. It&apos;s time to flip the script.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map(({ icon, title, description }) => (
            <div
              key={title}
              className="glass-card p-6"
              style={{ borderRadius: "14px" }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4"
                style={{ background: "rgba(245,197,24,0.08)" }}
              >
                {icon}
              </div>
              <h3
                className="text-base font-bold mb-2"
                style={{ color: "#f0f0f0" }}
              >
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#666" }}>
                {description}
              </p>
            </div>
          ))}
        </div>

        <div
          className="mt-14 rounded-2xl p-8 sm:p-10 text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(245,197,24,0.08) 0%, rgba(245,197,24,0.03) 100%)",
            border: "1px solid rgba(245,197,24,0.2)",
          }}
        >
          <p
            className="text-2xl sm:text-3xl font-black mb-3"
            style={{ color: "#f0f0f0" }}
          >
            Artists lose an estimated{" "}
            <span className="gold-text">$2.65 billion</span> in unclaimed
            royalties every year.
          </p>
          <p className="text-sm" style={{ color: "#666" }}>
            Source: CISAC / Royalty Exchange industry estimates
          </p>
        </div>
      </div>
    </section>
  );
}
