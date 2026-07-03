"use client";

import { useScrollReveal } from "../components/ScrollReveal";

const competitors = [
  { name: "DistroKid", cost: "$24–$90/yr", commission: "0% (add-ons)", weakness: "Music removed on cancel", has: [false, false, false, false, false] },
  { name: "TuneCore", cost: "$15–$50/yr", commission: "20% publishing", weakness: "Hidden revenue cuts", has: [false, false, false, false, false] },
  { name: "CD Baby", cost: "$10–$15 once", commission: "9% forever", weakness: "Owned by UMG", has: [false, false, false, false, false] },
  { name: "Songtrust", cost: "$100 setup", commission: "15–20%", weakness: "Publishing only", has: [true, false, false, false, false] },
  { name: "UnitedMasters", cost: "Free–$60/yr", commission: "10% free tier", weakness: "Limited rights mgmt", has: [false, false, false, false, false] },
];

const features = ["Rights Mgmt", "Producer CRM", "Business OS", "AI Tools", "Licenses"];

function Dot({ yes }: { yes: boolean }) {
  return (
    <div className="flex justify-center">
      <div
        className="w-4 h-4 rounded-full flex items-center justify-center"
        style={yes
          ? { background: "rgba(245,197,24,0.15)", border: "1px solid rgba(245,197,24,0.4)" }
          : { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }
        }
      >
        {yes ? (
          <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
            <path d="M2 5l2.5 2.5L8 3" stroke="#f5c518" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <div className="w-1 h-1 rounded-full" style={{ background: "#333" }} />
        )}
      </div>
    </div>
  );
}

export default function ComparisonSection() {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref}
      className="py-24 px-6 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0a0a0f 0%, #0d0a1a 60%, #0a0a0f 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 80% 50%, rgba(59,130,246,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-14 reveal-on-scroll">
          <span className="section-tag mb-4 inline-block">The Competition</span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-4"
            style={{ color: "#f0f0f0", letterSpacing: "-0.02em" }}
          >
            One platform.{" "}
            <span className="gradient-text-multi">Everything they can&apos;t do.</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "rgba(240,240,240,0.45)" }}>
            Every competitor solves one piece. We built the whole board.
          </p>
        </div>

        <div className="reveal-on-scroll overflow-x-auto rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
          <table className="w-full min-w-[600px]">
            <thead>
              <tr
                style={{
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  background: "rgba(10,10,15,0.9)",
                }}
              >
                <th className="text-left py-4 px-5 text-xs font-bold uppercase tracking-widest" style={{ color: "#444" }}>
                  Platform
                </th>
                <th className="text-left py-4 px-4 text-xs font-bold uppercase tracking-widest" style={{ color: "#444" }}>
                  Cost
                </th>
                <th className="text-left py-4 px-4 text-xs font-bold uppercase tracking-widest" style={{ color: "#444" }}>
                  Commission
                </th>
                {features.map((f) => (
                  <th key={f} className="text-center py-4 px-3 text-xs font-bold uppercase tracking-widest" style={{ color: "#444" }}>
                    {f}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {competitors.map((c, i) => (
                <tr
                  key={c.name}
                  style={{
                    borderBottom: "1px solid rgba(255,255,255,0.03)",
                    background: i % 2 === 0 ? "rgba(12,12,20,0.7)" : "rgba(10,10,15,0.7)",
                  }}
                >
                  <td className="py-4 px-5">
                    <div className="text-sm font-semibold" style={{ color: "#c0c0c0" }}>
                      {c.name}
                    </div>
                    <div className="text-xs mt-0.5" style={{ color: "#444" }}>
                      {c.weakness}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-xs" style={{ color: "#666" }}>
                    {c.cost}
                  </td>
                  <td className="py-4 px-4 text-xs" style={{ color: "#666" }}>
                    {c.commission}
                  </td>
                  {c.has.map((has, j) => (
                    <td key={j} className="py-4 px-3">
                      <Dot yes={has} />
                    </td>
                  ))}
                </tr>
              ))}

              <tr
                style={{
                  borderTop: "1px solid rgba(108,43,217,0.3)",
                  background: "linear-gradient(90deg, rgba(108,43,217,0.1) 0%, rgba(245,197,24,0.05) 100%)",
                }}
              >
                <td className="py-5 px-5">
                  <div className="text-sm font-black" style={{ color: "#f5c518" }}>
                    Music Rights OS
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: "rgba(245,197,24,0.5)" }}>
                    All-in-one
                  </div>
                </td>
                <td className="py-5 px-4 text-sm font-bold" style={{ color: "#f5c518" }}>
                  From $0/mo
                </td>
                <td className="py-5 px-4 text-sm font-bold" style={{ color: "#10b981" }}>
                  0% always
                </td>
                {features.map((f) => (
                  <td key={f} className="py-5 px-3">
                    <div className="flex justify-center">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ background: "rgba(245,197,24,0.15)", border: "1px solid rgba(245,197,24,0.4)" }}
                      >
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5l2.5 2.5L8 3" stroke="#f5c518" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
