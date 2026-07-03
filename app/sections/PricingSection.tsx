"use client";

import { useState } from "react";
import Link from "next/link";
import { useScrollReveal } from "../components/ScrollReveal";

const tiers = [
  {
    name: "Free",
    monthly: "$0",
    annual: "$0",
    period: "forever",
    description: "Protect your first project.",
    cta: "Start Free",
    ctaVariant: "ghost" as const,
    color: "#8b5cf6",
    colorRgb: "139,92,246",
    features: [
      "Rights Dashboard (1 project)",
      "Split Sheets (3/month)",
      "Basic Royalty Pocket",
      "Copyright Checker (5/month)",
      "Community access",
    ],
    locked: ["Producer CRM", "License Generator", "Opportunity Feed", "Business OS"],
  },
  {
    name: "Pro",
    monthly: "$4.99",
    annual: "$3.99",
    period: "/mo",
    description: "Full control. Every tool. No limits.",
    cta: "Get Early Access",
    ctaVariant: "gold" as const,
    highlighted: true,
    badge: "Most Popular",
    color: "#f5c518",
    colorRgb: "245,197,24",
    features: [
      "Unlimited projects",
      "Full Rights Dashboard",
      "Unlimited Split Sheets + eSign",
      "Producer CRM (unlimited)",
      "Royalty Pocket (all platforms)",
      "Copyright Checker (unlimited)",
      "License Generator",
      "Opportunity Feed (daily)",
      "Business OS + invoicing",
      "Release Calendar + AI Planner",
      "Priority support",
    ],
    locked: [],
  },
  {
    name: "Studio",
    monthly: "$49.99",
    annual: "$39.99",
    period: "/mo",
    description: "For labels and management teams.",
    cta: "Contact Us",
    ctaVariant: "ghost" as const,
    color: "#3b82f6",
    colorRgb: "59,130,246",
    features: [
      "Everything in Pro",
      "Team accounts (20 members)",
      "White-label options",
      "Advanced analytics",
      "Sync licensing marketplace",
      "Copyright filing assistance",
      "Dedicated account manager",
      "API access",
    ],
    locked: [],
  },
];

export default function PricingSection() {
  const [annual, setAnnual] = useState(false);
  const ref = useScrollReveal();

  return (
    <section
      id="pricing"
      ref={ref}
      className="py-32 md:py-48 px-6 relative overflow-hidden"
      style={{ background: "#080810" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(108,43,217,0.07) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ opacity: 0.07 }}
      >
        <img
          src="https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=1400&q=60&auto=format"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="w-full h-full object-cover"
          style={{
            filter: "grayscale(100%) contrast(1.1)",
            mixBlendMode: "luminosity",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, #080810 0%, rgba(8,8,16,0.4) 50%, #080810 100%)" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2
            className="font-black leading-none mb-6"
            style={{
              fontFamily: "'Outfit', system-ui, sans-serif",
              fontSize: "clamp(2.4rem, 4.2vw, 4.8rem)",
              letterSpacing: "-0.04em",
              lineHeight: 0.97,
              color: "#f0f0f0",
            }}
          >
            Start free.{" "}
            <span className="gold-text">Scale when ready.</span>
          </h2>

          <div
            className="inline-flex items-center gap-1 p-1 rounded-full mt-4"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <button
              onClick={() => setAnnual(false)}
              className="px-5 py-2 rounded-full text-xs font-bold transition-all duration-300"
              style={{
                fontFamily: "'Outfit', system-ui, sans-serif",
                background: !annual ? "rgba(108,43,217,0.5)" : "transparent",
                color: !annual ? "#fff" : "rgba(240,240,240,0.4)",
              }}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className="px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-2"
              style={{
                fontFamily: "'Outfit', system-ui, sans-serif",
                background: annual ? "rgba(108,43,217,0.5)" : "transparent",
                color: annual ? "#fff" : "rgba(240,240,240,0.4)",
              }}
            >
              Annual
              <span
                className="text-xs px-2 py-0.5 rounded-full"
                style={{ background: "rgba(16,185,129,0.18)", color: "#10b981", fontSize: "10px" }}
              >
                -20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {tiers.map((tier, i) => (
            <div
              key={tier.name}
              className={`relative flex flex-col pricing-card-hover reveal-on-scroll stagger-${i + 1}`}
              style={{
                borderRadius: "24px",
                background: tier.highlighted
                  ? `linear-gradient(160deg, rgba(${tier.colorRgb},0.1) 0%, rgba(10,10,20,0.98) 40%)`
                  : "rgba(11,11,22,0.9)",
                border: tier.highlighted
                  ? `1.5px solid rgba(${tier.colorRgb},0.35)`
                  : `1px solid rgba(${tier.colorRgb},0.14)`,
                boxShadow: tier.highlighted
                  ? `0 0 0 1px rgba(${tier.colorRgb},0.08), 0 40px 120px rgba(${tier.colorRgb},0.12)`
                  : "none",
                transform: tier.highlighted ? "scale(1.025)" : "none",
              }}
            >
              {tier.badge && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs font-black px-4 py-1.5 rounded-full whitespace-nowrap"
                  style={{
                    fontFamily: "'Outfit', system-ui, sans-serif",
                    background: "linear-gradient(135deg, #f5c518, #ffd84d)",
                    color: "#080808",
                    letterSpacing: "0.06em",
                  }}
                >
                  {tier.badge}
                </div>
              )}

              <div className="p-7 flex-1 flex flex-col">
                <div className="mb-7">
                  <div
                    className="w-8 h-8 rounded-xl mb-5 flex items-center justify-center"
                    style={{ background: `rgba(${tier.colorRgb},0.12)`, border: `1px solid rgba(${tier.colorRgb},0.25)` }}
                  >
                    <div className="w-2 h-2 rounded-full" style={{ background: tier.color }} />
                  </div>
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-3"
                    style={{ fontFamily: "'Outfit', system-ui, sans-serif", color: tier.color }}
                  >
                    {tier.name}
                  </p>
                  <div className="flex items-baseline gap-1.5 mb-1">
                    <span
                      className="font-black"
                      style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontSize: "2.5rem", color: "#f0f0f0", letterSpacing: "-0.04em" }}
                    >
                      {annual ? tier.annual : tier.monthly}
                    </span>
                    <span className="text-sm" style={{ color: "#444" }}>
                      {tier.period}
                    </span>
                  </div>
                  <p className="text-xs" style={{ fontFamily: "'Outfit', system-ui, sans-serif", color: "#555" }}>
                    {tier.description}
                  </p>
                </div>

                <Link
                  href="#waitlist"
                  className={`${tier.ctaVariant === "gold" ? "btn-gold" : "btn-ghost"} text-center justify-center mb-7`}
                  style={{ width: "100%", fontFamily: "'Outfit', system-ui, sans-serif" }}
                >
                  {tier.cta}
                </Link>

                <div className="w-full h-px mb-6" style={{ background: "rgba(255,255,255,0.05)" }} />

                <ul className="flex flex-col gap-2.5 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: `rgba(${tier.colorRgb},0.1)`, border: `1px solid rgba(${tier.colorRgb},0.25)` }}
                      >
                        <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5l2.5 2.5L8 3" stroke={tier.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span
                        className="text-xs"
                        style={{ fontFamily: "'Outfit', system-ui, sans-serif", color: "rgba(240,240,240,0.65)", lineHeight: "1.55" }}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                  {tier.locked.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                      >
                        <div className="w-1 h-1 rounded-full" style={{ background: "#2a2a2a" }} />
                      </div>
                      <span className="text-xs" style={{ fontFamily: "'Outfit', system-ui, sans-serif", color: "#2a2a2a" }}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div
          className="rounded-2xl p-6 reveal-on-scroll"
          style={{ background: "rgba(11,11,22,0.85)", border: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p
            className="text-xs font-bold uppercase tracking-widest mb-5"
            style={{ fontFamily: "'Outfit', system-ui, sans-serif", color: "#444" }}
          >
            A la carte add-ons
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { name: "Sync Licensing Tools", price: "$9.99/mo" },
              { name: "Copyright Filing Assistance", price: "$29.99/filing" },
              { name: "Beatmaker Contract Pack", price: "$19.99 once" },
            ].map(({ name, price }) => (
              <div
                key={name}
                className="flex items-center justify-between px-4 py-3.5 rounded-xl"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}
              >
                <span
                  className="text-xs"
                  style={{ fontFamily: "'Outfit', system-ui, sans-serif", color: "rgba(240,240,240,0.5)" }}
                >
                  {name}
                </span>
                <span
                  className="text-xs font-bold"
                  style={{ fontFamily: "'Outfit', system-ui, sans-serif", color: "#f5c518" }}
                >
                  {price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
