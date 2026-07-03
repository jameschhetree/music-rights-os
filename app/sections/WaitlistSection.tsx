"use client";

export default function WaitlistSection() {
  return (
    <section
      id="waitlist"
      className="py-24 px-6 relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(245,197,24,0.08) 0%, transparent 70%), #080808",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,197,24,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(245,197,24,0.03) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <span className="section-tag mb-6 inline-block">Join the Waitlist</span>

        <h2
          className="text-4xl sm:text-5xl md:text-6xl font-black leading-none mb-6"
          style={{ color: "#f0f0f0", letterSpacing: "-0.03em" }}
        >
          Your music is worth more
          <span className="gold-text block">than you think.</span>
        </h2>

        <p
          className="text-lg sm:text-xl leading-relaxed mb-10"
          style={{ color: "rgba(240,240,240,0.55)" }}
        >
          Join 2,400+ independent artists and producers getting early access
          to Music Rights OS. Free forever plan included — no credit card required.
        </p>

        <form
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="your@email.com"
            required
            className="flex-1 px-4 py-4 rounded-lg text-sm outline-none transition-all"
            style={{
              background: "rgba(22,22,22,0.9)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#f0f0f0",
            }}
          />
          <button
            type="submit"
            className="btn-gold text-sm whitespace-nowrap"
            style={{ padding: "14px 24px" }}
          >
            Get Early Access
          </button>
        </form>

        <p className="text-xs mb-12" style={{ color: "#444" }}>
          No spam. No credit card. Early access users lock in lifetime Pro pricing at $4.99/mo.
        </p>

        <div
          className="flex flex-wrap items-center justify-center gap-6"
          style={{ color: "#555", fontSize: "13px" }}
        >
          {[
            "Free plan forever",
            "0% commission taken",
            "Cancel anytime",
            "GDPR compliant",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <span style={{ color: "#f5c518" }}>✓</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
