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
    features: [
      "Unlimited projects",
      "Full Rights Dashboard",
      "Unlimited Split Sheets + eSign",
      "Producer CRM (unlimited)",
      "Royalty Pocket (all platforms)",
      "Copyright Checker (unlimited)",
      "License Generator",
      "Opportunity Feed (daily)",
      "Business OS",
      "Release Calendar",
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
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: "#0a0a0f" }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=1400&q=60&auto=format"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="w-full h-full object-cover"
          style={{ opacity: 0.07 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, #0a0a0f 0%, rgba(10,10,15,0.5) 50%, #0a0a0f 100%)" }}
        />
      </div>

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none animate-pulse-orb"
        style={{
          background: "radial-gradient(circle, rgba(108,43,217,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 reveal-on-scroll">
          <span className="section-tag mb-4 inline-block">Pricing</span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-4"
            style={{ color: "#f0f0f0", letterSpacing: "-0.02em" }}
          >
            Start free.{" "}
            <span className="gold-text">Scale when ready.</span>
          </h2>

          <div
            className="inline-flex items-center gap-1 p-1 rounded-full mt-2"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <button
              onClick={() => setAnnual(false)}
              className="px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200"
              style={{
                background: !annual ? "rgba(108,43,217,0.5)" : "transparent",
                color: !annual ? "#fff" : "#666",
              }}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className="px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-1.5"
              style={{
                background: annual ? "rgba(108,43,217,0.5)" : "transparent",
                color: annual ? "#fff" : "#666",
              }}
            >
              Annual
              <span
                className="text-xs px-1.5 py-0.5 rounded-full"
                style={{ background: "rgba(16,185,129,0.2)", color: "#10b981", fontSize: "10px" }}
              >
                -20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {tiers.map((tier, i) => (
            <div
              key={tier.name}
              className={`relative flex flex-col reveal-on-scroll stagger-${i + 1}`}
              style={{
                borderRadius: "20px",
                background: tier.highlighted
                  ? "linear-gradient(160deg, rgba(245,197,24,0.08) 0%, rgba(13,13,25,0.98) 50%)"
                  : "rgba(13,13,25,0.9)",
                border: tier.highlighted
                  ? `1.5px solid rgba(245,197,24,0.3)`
                  : `1px solid rgba(${tier.color === "#8b5cf6" ? "139,92,246" : "59,130,246"},0.15)`,
                boxShadow: tier.highlighted
                  ? "0 24px 80px rgba(245,197,24,0.1), 0 0 0 1px rgba(245,197,24,0.08)"
                  : "none",
                transform: tier.highlighted ? "scale(1.02)" : "none",
              }}
            >
              {tier.badge && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs font-black px-4 py-1 rounded-full"
                  style={{
                    background: "linear-gradient(135deg, #f5c518, #ffd84d)",
                    color: "#080808",
                    letterSpacing: "0.05em",
                    whiteSpace: "nowrap",
                  }}
                >
                  {tier.badge}
                </div>
              )}

              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-6">
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-3"
                    style={{ color: tier.color }}
                  >
                    {tier.name}
                  </p>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl font-black" style={{ color: "#f0f0f0" }}>
                      {annual ? tier.annual : tier.monthly}
                    </span>
                    <span className="text-sm" style={{ color: "#555" }}>
                      {tier.period}
                    </span>
                  </div>
                  <p className="text-xs" style={{ color: "#555" }}>
                    {tier.description}
                  </p>
                </div>

                <Link
                  href="#waitlist"
                  className={`${tier.ctaVariant === "gold" ? "btn-gold" : "btn-ghost"} text-center justify-center mb-6`}
                  style={{ width: "100%" }}
                >
                  {tier.cta}
                </Link>

                <div className="w-full h-px mb-5" style={{ background: "rgba(255,255,255,0.05)" }} />

                <ul className="flex flex-col gap-2.5 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: `${tier.color}18`, border: `1px solid ${tier.color}33` }}
                      >
                        <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5l2.5 2.5L8 3" stroke={tier.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span className="text-xs" style={{ color: "rgba(240,240,240,0.7)", lineHeight: "1.5" }}>
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
                        <div className="w-1 h-1 rounded-full" style={{ background: "#333" }} />
                      </div>
                      <span className="text-xs" style={{ color: "#333" }}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div
          className="rounded-2xl p-6 reveal-on-scroll"
          style={{ background: "rgba(13,13,25,0.8)", border: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#555" }}>
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
                className="flex items-center justify-between px-4 py-3 rounded-xl"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}
              >
                <span className="text-xs" style={{ color: "rgba(240,240,240,0.6)" }}>
                  {name}
                </span>
                <span className="text-xs font-bold" style={{ color: "#f5c518" }}>
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
