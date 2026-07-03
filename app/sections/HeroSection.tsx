import ParticleField from "../components/ParticleField";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(245,197,24,0.12) 0%, transparent 60%), #080808",
      }}
    >
      <div className="grid-glow absolute inset-0 opacity-40" />
      <ParticleField />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle 600px at 50% 40%, rgba(245,197,24,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-16">
        <div className="flex justify-center mb-6">
          <span className="section-tag">
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse-gold"
              style={{ background: "#f5c518" }}
            />
            Now in Early Access — Join 2,400+ Artists
          </span>
        </div>

        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight mb-8"
          style={{ color: "#f0f0f0", letterSpacing: "-0.03em" }}
        >
          Own Your Music.{" "}
          <span className="gold-text block sm:inline">
            Maximize Your Income.
          </span>
        </h1>

        <p
          className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-10"
          style={{ color: "rgba(240,240,240,0.6)" }}
        >
          Independent artists lose thousands in royalties every year due to missed registrations,
          unclear ownership, and fragmented tools. Music Rights OS puts your entire music business
          in one place.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link href="#waitlist" className="btn-gold text-base" style={{ padding: "16px 36px", fontSize: "16px" }}>
            Get Early Access — Free
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link href="/ecosystem" className="btn-ghost text-base" style={{ padding: "15px 32px", fontSize: "16px" }}>
            See How It Works
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {[
            { value: "10M+", label: "Independent Artists Globally" },
            { value: "$29.6B", label: "Music Industry (2024)" },
            { value: "10", label: "Integrated Modules" },
            { value: "0%", label: "Commission Taken" },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <span
                className="text-2xl sm:text-3xl font-black"
                style={{ color: "#f5c518" }}
              >
                {value}
              </span>
              <span
                className="text-xs font-medium text-center"
                style={{ color: "#666", maxWidth: "100px" }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-xs uppercase tracking-widest" style={{ color: "#444" }}>
          Scroll
        </span>
        <div
          className="w-px h-10"
          style={{
            background:
              "linear-gradient(to bottom, rgba(245,197,24,0.6), transparent)",
          }}
        />
      </div>
    </section>
  );
}
