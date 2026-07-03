"use client";

import { useScrollReveal } from "../components/ScrollReveal";

export default function WaitlistSection() {
  const ref = useScrollReveal();

  return (
    <section
      id="waitlist"
      ref={ref}
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: "#0a0a0f" }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1501386761578-eaa54b4c5f46?w=1400&q=60&auto=format"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="w-full h-full object-cover"
          style={{ opacity: 0.1 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, #0a0a0f 0%, rgba(10,10,15,0.4) 50%, #0a0a0f 100%)" }}
        />
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(108,43,217,0.12) 0%, rgba(245,197,24,0.04) 50%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(108,43,217,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(108,43,217,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none animate-float" style={{ animationDelay: "0s" }}>
        <div
          className="absolute inset-0 rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(108,43,217,0.15) 0%, transparent 70%)", filter: "blur(30px)" }}
        />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <span className="section-tag section-tag-gold mb-6 inline-block reveal-on-scroll">
          Join the Waitlist
        </span>

        <h2
          className="text-4xl sm:text-5xl md:text-6xl font-black leading-none mb-6 reveal-on-scroll stagger-1"
          style={{ color: "#f0f0f0", letterSpacing: "-0.03em" }}
        >
          Your music is worth more
          <span className="gold-text block">than you think.</span>
        </h2>

        <p
          className="text-base sm:text-lg leading-relaxed mb-10 reveal-on-scroll stagger-2"
          style={{ color: "rgba(240,240,240,0.5)" }}
        >
          Join 2,400+ artists getting early access. Free plan included — no credit card required.
        </p>

        <form
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-5 reveal-on-scroll stagger-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="your@email.com"
            required
            className="flex-1 px-4 py-4 rounded-xl text-sm outline-none transition-all"
            style={{
              background: "rgba(19,19,31,0.9)",
              border: "1px solid rgba(108,43,217,0.25)",
              color: "#f0f0f0",
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "rgba(108,43,217,0.6)";
              e.currentTarget.style.boxShadow = "0 0 0 3px rgba(108,43,217,0.12)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "rgba(108,43,217,0.25)";
              e.currentTarget.style.boxShadow = "none";
            }}
          />
          <button
            type="submit"
            className="btn-gold whitespace-nowrap"
            style={{ padding: "14px 24px", fontSize: "14px" }}
          >
            Get Early Access
          </button>
        </form>

        <p className="text-xs mb-10 reveal-on-scroll stagger-4" style={{ color: "#333" }}>
          No spam. No credit card. Early access users lock in lifetime Pro pricing at $4.99/mo.
        </p>

        <div
          className="flex flex-wrap items-center justify-center gap-5 reveal-on-scroll stagger-5"
          style={{ color: "#444", fontSize: "12px" }}
        >
          {[
            { label: "Free plan forever", color: "#10b981" },
            { label: "0% commission", color: "#f5c518" },
            { label: "Cancel anytime", color: "#8b5cf6" },
            { label: "GDPR compliant", color: "#3b82f6" },
          ].map(({ label, color }) => (
            <div key={label} className="flex items-center gap-1.5">
              <div
                className="w-3.5 h-3.5 rounded-full flex items-center justify-center"
                style={{ background: `${color}18`, border: `1px solid ${color}33` }}
              >
                <svg width="7" height="7" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5l2.5 2.5L8 3" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
