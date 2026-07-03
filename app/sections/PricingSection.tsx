import Link from "next/link";

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get started, protect your first project.",
    cta: "Start Free",
    ctaVariant: "ghost" as const,
    features: [
      "Music Rights Dashboard (1 project)",
      "Split Sheet Generator (3/month)",
      "Basic Royalty Pocket",
      "Community access",
      "Copyright Checker (5 checks/month)",
    ],
    notIncluded: [
      "Producer CRM",
      "License Generator",
      "Opportunity Feed",
      "Business OS",
      "AI Release Planner",
    ],
  },
  {
    name: "Pro",
    price: "$4.99",
    period: "/mo",
    description: "Full control. Every tool unlocked. No limits.",
    cta: "Get Early Access",
    ctaVariant: "gold" as const,
    highlighted: true,
    badge: "Most Popular",
    features: [
      "Unlimited projects",
      "Full Rights Dashboard",
      "Unlimited Split Sheets + eSign",
      "Producer CRM (unlimited contacts)",
      "Royalty Pocket (all platforms)",
      "Copyright Checker (unlimited)",
      "License Generator",
      "Opportunity Feed (daily)",
      "Business OS (expenses + invoices)",
      "Release Calendar",
      "Priority support",
    ],
    annualNote: "Save 20% with annual billing — $47.90/yr",
  },
  {
    name: "Studio",
    price: "$49.99",
    period: "/mo",
    description: "For labels, management companies, and teams.",
    cta: "Contact Us",
    ctaVariant: "ghost" as const,
    features: [
      "Everything in Pro",
      "Team accounts (up to 20 members)",
      "White-label options",
      "Advanced analytics dashboard",
      "Sync licensing marketplace access",
      "Copyright filing assistance",
      "Beatmaker contract template library",
      "Dedicated account manager",
      "API access",
      "Custom integrations",
    ],
    annualNote: "Save 20% with annual billing — $479.90/yr",
  },
];

const addons = [
  { name: "Sync Licensing Tools", price: "$9.99/mo" },
  { name: "Copyright Filing Assistance", price: "$29.99/filing" },
  { name: "Beatmaker Contract Pack", price: "$19.99 once" },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-6" style={{ background: "#080808" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="section-tag mb-4 inline-block">Pricing</span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-5"
            style={{ color: "#f0f0f0", letterSpacing: "-0.02em" }}
          >
            Start free.{" "}
            <span className="gold-text">Scale when you&apos;re ready.</span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(240,240,240,0.5)" }}
          >
            No contracts. No hidden fees. No commission on your royalties — ever.
            Cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="relative flex flex-col"
              style={{
                borderRadius: "20px",
                background: tier.highlighted
                  ? "linear-gradient(160deg, rgba(245,197,24,0.12) 0%, rgba(18,18,18,0.98) 50%)"
                  : "rgba(14,14,14,0.9)",
                border: tier.highlighted
                  ? "1.5px solid rgba(245,197,24,0.4)"
                  : "1px solid rgba(255,255,255,0.06)",
                boxShadow: tier.highlighted
                  ? "0 24px 64px rgba(245,197,24,0.12), 0 0 0 1px rgba(245,197,24,0.1)"
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
                  }}
                >
                  {tier.badge}
                </div>
              )}

              <div className="p-7 flex-1 flex flex-col">
                <div className="mb-6">
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-3"
                    style={{ color: tier.highlighted ? "#f5c518" : "#666" }}
                  >
                    {tier.name}
                  </p>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span
                      className="text-4xl font-black"
                      style={{ color: "#f0f0f0" }}
                    >
                      {tier.price}
                    </span>
                    <span className="text-sm" style={{ color: "#666" }}>
                      {tier.period}
                    </span>
                  </div>
                  <p className="text-sm" style={{ color: "#666" }}>
                    {tier.description}
                  </p>
                </div>

                <Link
                  href="#waitlist"
                  className={tier.ctaVariant === "gold" ? "btn-gold text-center justify-center mb-6" : "btn-ghost text-center justify-center mb-6"}
                  style={{ width: "100%" }}
                >
                  {tier.cta}
                </Link>

                <div
                  className="w-full h-px mb-5"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                />

                <ul className="flex flex-col gap-3 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <span
                        className="text-xs mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                        style={{
                          background: "rgba(245,197,24,0.12)",
                          color: "#f5c518",
                          fontSize: "10px",
                        }}
                      >
                        ✓
                      </span>
                      <span className="text-sm" style={{ color: "rgba(240,240,240,0.7)" }}>
                        {f}
                      </span>
                    </li>
                  ))}
                  {"notIncluded" in tier &&
                    tier.notIncluded?.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <span
                          className="text-xs mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                          style={{
                            background: "rgba(255,255,255,0.04)",
                            color: "#444",
                            fontSize: "10px",
                          }}
                        >
                          ✗
                        </span>
                        <span className="text-sm" style={{ color: "#444" }}>
                          {f}
                        </span>
                      </li>
                    ))}
                </ul>

                {tier.annualNote && (
                  <p
                    className="text-xs mt-5 text-center"
                    style={{ color: "rgba(245,197,24,0.6)" }}
                  >
                    {tier.annualNote}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div
          className="rounded-2xl p-8"
          style={{
            background: "rgba(14,14,14,0.8)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <h3
            className="text-base font-bold mb-5"
            style={{ color: "#f0f0f0" }}
          >
            A la carte add-ons
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {addons.map(({ name, price }) => (
              <div
                key={name}
                className="flex items-center justify-between px-4 py-3 rounded-xl"
                style={{
                  background: "rgba(22,22,22,0.8)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <span className="text-sm" style={{ color: "rgba(240,240,240,0.7)" }}>
                  {name}
                </span>
                <span className="text-sm font-bold" style={{ color: "#f5c518" }}>
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
