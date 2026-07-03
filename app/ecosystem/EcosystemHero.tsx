import Link from "next/link";

export default function EcosystemHero() {
  return (
    <section
      className="relative pt-32 pb-20 px-6 overflow-hidden text-center"
      style={{
        background:
          "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(245,197,24,0.1) 0%, transparent 60%), #080808",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,197,24,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(245,197,24,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          <Link href="/" className="section-tag no-underline">
            ← Back to Home
          </Link>
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-black leading-none mb-6"
          style={{ color: "#f0f0f0", letterSpacing: "-0.03em" }}
        >
          The Music Rights OS{" "}
          <span className="gold-text block sm:inline">Ecosystem</span>
        </h1>

        <p
          className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-8"
          style={{ color: "rgba(240,240,240,0.55)" }}
        >
          Ten integrated modules. One platform. See exactly how your creative
          work flows from upload to royalty check — and every touchpoint in between.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {[
            "Rights Registration",
            "Split Sheets",
            "Royalty Tracking",
            "CRM",
            "Contracts",
            "Business OS",
            "Opportunity Feed",
            "AI Scheduling",
          ].map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-3 py-1.5 rounded-full"
              style={{
                background: "rgba(245,197,24,0.06)",
                color: "rgba(245,197,24,0.8)",
                border: "1px solid rgba(245,197,24,0.12)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
