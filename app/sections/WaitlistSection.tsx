"use client";

import { useScrollReveal } from "../components/ScrollReveal";

export default function WaitlistSection() {
  const ref = useScrollReveal();

  return (
    <section
      id="waitlist"
      ref={ref}
      className="py-32 md:py-48 px-6 relative overflow-hidden"
      style={{ background: "#0a0a0f" }}
    >
      {/* Full-bleed editorial image */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1501386761578-eaa54b4c5f46?w=1920&q=70&auto=format"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="w-full h-full object-cover"
          style={{
            filter: "grayscale(100%) contrast(1.2)",
            mixBlendMode: "luminosity",
            opacity: 0.09,
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, #0a0a0f 0%, rgba(10,10,15,0.35) 50%, #0a0a0f 100%)" }}
        />
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(108,43,217,0.14) 0%, rgba(245,197,24,0.04) 50%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(108,43,217,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(108,43,217,0.035) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* Floating orbs */}
      <div
        className="absolute pointer-events-none orb-drift"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "350px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(108,43,217,0.18) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2
          className="font-black leading-none mb-8 reveal-on-scroll"
          style={{
            fontFamily: "'Outfit', system-ui, sans-serif",
            fontSize: "clamp(2.8rem, 5.5vw, 6rem)",
            letterSpacing: "-0.04em",
            lineHeight: 0.95,
            color: "#f0f0f0",
          }}
        >
          Your music is worth
          <span className="gold-text block mt-1">more than you think.</span>
        </h2>

        <p
          className="text-lg leading-relaxed mb-12 reveal-on-scroll stagger-1"
          style={{
            fontFamily: "'Outfit', system-ui, sans-serif",
            color: "rgba(240,240,240,0.45)",
            maxWidth: "520px",
            margin: "0 auto 3rem",
          }}
        >
          Join 2,400+ artists getting early access. Free plan included — no credit card required.
        </p>

        <form
          className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-6 reveal-on-scroll stagger-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="your@email.com"
            required
            className="flex-1 px-5 py-4 rounded-xl text-sm outline-none transition-all"
            style={{
              fontFamily: "'Outfit', system-ui, sans-serif",
              background: "rgba(17,17,30,0.95)",
              border: "1px solid rgba(108,43,217,0.22)",
              color: "#f0f0f0",
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "rgba(108,43,217,0.6)";
              e.currentTarget.style.boxShadow = "0 0 0 3px rgba(108,43,217,0.1)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "rgba(108,43,217,0.22)";
              e.currentTarget.style.boxShadow = "none";
            }}
          />
          <button
            type="submit"
            className="btn-gold whitespace-nowrap"
            style={{
              fontFamily: "'Outfit', system-ui, sans-serif",
              padding: "16px 28px",
              fontSize: "15px",
              fontWeight: 700,
            }}
          >
            Get Early Access
          </button>
        </form>

        <p
          className="text-xs mb-14 reveal-on-scroll stagger-3"
          style={{ fontFamily: "'Outfit', system-ui, sans-serif", color: "#2a2a2a" }}
        >
          No spam. No credit card. Early access users lock in lifetime Pro pricing at $4.99/mo.
        </p>

        <div
          className="flex flex-wrap items-center justify-center gap-6 reveal-on-scroll stagger-4"
          style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontSize: "12px", color: "#3a3a3a" }}
        >
          {[
            { label: "Free plan forever", color: "#10b981" },
            { label: "0% commission", color: "#f5c518" },
            { label: "Cancel anytime", color: "#8b5cf6" },
            { label: "GDPR compliant", color: "#3b82f6" },
          ].map(({ label, color }) => (
            <div key={label} className="flex items-center gap-2">
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
