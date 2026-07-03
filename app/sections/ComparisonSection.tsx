const competitors = [
  {
    name: "DistroKid",
    cost: "$24.99–$89.99/yr",
    commission: "0% (add-ons extra)",
    rightsMgmt: false,
    crm: false,
    businessOs: false,
    aiTools: false,
    contracts: false,
    weakness: "Music removed on cancel",
  },
  {
    name: "TuneCore",
    cost: "$14.99–$49.99/yr",
    commission: "20% publishing",
    rightsMgmt: false,
    crm: false,
    businessOs: false,
    aiTools: false,
    contracts: false,
    weakness: "Hidden revenue cuts",
  },
  {
    name: "CD Baby",
    cost: "$9.99–$14.99 once",
    commission: "9% forever",
    rightsMgmt: false,
    crm: false,
    businessOs: false,
    aiTools: false,
    contracts: false,
    weakness: "Owned by UMG, 9% forever",
  },
  {
    name: "Songtrust",
    cost: "$100 setup",
    commission: "15–20%",
    rightsMgmt: true,
    crm: false,
    businessOs: false,
    aiTools: false,
    contracts: false,
    weakness: "Publishing only",
  },
  {
    name: "UnitedMasters",
    cost: "Free–$59.99/yr",
    commission: "10% (free tier)",
    rightsMgmt: false,
    crm: false,
    businessOs: false,
    aiTools: false,
    contracts: false,
    weakness: "Limited rights mgmt",
  },
];

const features = [
  { key: "rightsMgmt", label: "Rights Management" },
  { key: "crm", label: "Producer CRM" },
  { key: "businessOs", label: "Business OS" },
  { key: "aiTools", label: "AI Tools" },
  { key: "contracts", label: "License Generator" },
];

type CompetitorKey = "rightsMgmt" | "crm" | "businessOs" | "aiTools" | "contracts";

function Check({ has }: { has: boolean }) {
  return has ? (
    <span style={{ color: "#f5c518", fontSize: "16px" }}>✓</span>
  ) : (
    <span style={{ color: "#444", fontSize: "16px" }}>✗</span>
  );
}

export default function ComparisonSection() {
  return (
    <section className="py-24 px-6" style={{ background: "#0a0a0a" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="section-tag mb-4 inline-block">The Competition</span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-5"
            style={{ color: "#f0f0f0", letterSpacing: "-0.02em" }}
          >
            One platform.{" "}
            <span className="gold-text">Everything they can&apos;t do.</span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(240,240,240,0.5)" }}
          >
            Every competitor solves one piece of the puzzle. We built the whole board.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
          <table className="w-full min-w-[700px]">
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(10,10,10,0.8)" }}>
                <th className="text-left py-4 px-6 text-xs font-bold uppercase tracking-widest" style={{ color: "#555" }}>
                  Platform
                </th>
                <th className="text-left py-4 px-4 text-xs font-bold uppercase tracking-widest" style={{ color: "#555" }}>
                  Annual Cost
                </th>
                <th className="text-left py-4 px-4 text-xs font-bold uppercase tracking-widest" style={{ color: "#555" }}>
                  Commission
                </th>
                {features.map((f) => (
                  <th key={f.key} className="text-center py-4 px-3 text-xs font-bold uppercase tracking-widest" style={{ color: "#555" }}>
                    {f.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {competitors.map((c, i) => (
                <tr
                  key={c.name}
                  style={{
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                    background: i % 2 === 0 ? "rgba(12,12,12,0.6)" : "rgba(8,8,8,0.6)",
                  }}
                >
                  <td className="py-4 px-6">
                    <div className="font-semibold text-sm" style={{ color: "#f0f0f0" }}>
                      {c.name}
                    </div>
                    <div className="text-xs mt-0.5" style={{ color: "#555" }}>
                      {c.weakness}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm" style={{ color: "#777" }}>
                    {c.cost}
                  </td>
                  <td className="py-4 px-4 text-sm" style={{ color: "#777" }}>
                    {c.commission}
                  </td>
                  {features.map((f) => (
                    <td key={f.key} className="py-4 px-3 text-center">
                      <Check has={c[f.key as CompetitorKey] as boolean} />
                    </td>
                  ))}
                </tr>
              ))}

              <tr
                style={{
                  borderTop: "2px solid rgba(245,197,24,0.3)",
                  background: "linear-gradient(90deg, rgba(245,197,24,0.08) 0%, rgba(245,197,24,0.03) 100%)",
                }}
              >
                <td className="py-5 px-6">
                  <div className="font-black text-base" style={{ color: "#f5c518" }}>
                    Music Rights OS
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: "rgba(245,197,24,0.6)" }}>
                    All-in-one platform
                  </div>
                </td>
                <td className="py-5 px-4 font-bold text-sm" style={{ color: "#f5c518" }}>
                  From $0/mo
                </td>
                <td className="py-5 px-4 font-bold text-sm" style={{ color: "#f5c518" }}>
                  0% always
                </td>
                {features.map((f) => (
                  <td key={f.key} className="py-5 px-3 text-center">
                    <span style={{ color: "#f5c518", fontSize: "18px", fontWeight: "bold" }}>✓</span>
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
