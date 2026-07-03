const flowSteps = [
  {
    stage: "INPUT",
    label: "Artist Creates Music",
    items: ["Record / produce track", "Write lyrics / composition", "Collaborate with co-writers"],
    color: "rgba(245,197,24,0.15)",
    borderColor: "rgba(245,197,24,0.3)",
    textColor: "#f5c518",
  },
  {
    stage: "REGISTER",
    label: "Protect Your Rights",
    items: ["Register copyright ownership", "Create digital split sheets", "Set ownership percentages"],
    color: "rgba(139,92,246,0.1)",
    borderColor: "rgba(139,92,246,0.25)",
    textColor: "#a78bfa",
  },
  {
    stage: "DISTRIBUTE",
    label: "Release to the World",
    items: ["Sync to all platforms", "AI-optimized release timing", "Press + social campaign"],
    color: "rgba(59,130,246,0.1)",
    borderColor: "rgba(59,130,246,0.25)",
    textColor: "#60a5fa",
  },
  {
    stage: "COLLECT",
    label: "Track Every Dollar",
    items: ["Monitor streams + sales", "Collect PRO royalties", "Track sync placements"],
    color: "rgba(16,185,129,0.1)",
    borderColor: "rgba(16,185,129,0.25)",
    textColor: "#34d399",
  },
  {
    stage: "GROW",
    label: "Build Your Business",
    items: ["Analyze revenue streams", "Expand your network", "License your catalog"],
    color: "rgba(245,197,24,0.12)",
    borderColor: "rgba(245,197,24,0.3)",
    textColor: "#f5c518",
  },
];

function Arrow() {
  return (
    <div className="flex items-center justify-center px-2 shrink-0">
      <div className="hidden md:flex flex-col items-center">
        <div
          className="w-10 h-px"
          style={{ background: "linear-gradient(90deg, rgba(245,197,24,0.4), rgba(245,197,24,0.1))" }}
        />
        <div
          className="w-0 h-0"
          style={{
            borderLeft: "6px solid rgba(245,197,24,0.4)",
            borderTop: "4px solid transparent",
            borderBottom: "4px solid transparent",
          }}
        />
      </div>
      <div className="flex md:hidden flex-col items-center">
        <div
          className="w-px h-6"
          style={{ background: "linear-gradient(180deg, rgba(245,197,24,0.4), rgba(245,197,24,0.1))" }}
        />
        <div
          className="w-0 h-0"
          style={{
            borderTop: "6px solid rgba(245,197,24,0.4)",
            borderLeft: "4px solid transparent",
            borderRight: "4px solid transparent",
          }}
        />
      </div>
    </div>
  );
}

export default function FlowDiagram() {
  return (
    <section className="py-20 px-6" style={{ background: "#0a0a0a" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="section-tag mb-4 inline-block">How It Works</span>
          <h2
            className="text-3xl sm:text-4xl font-black leading-tight mb-4"
            style={{ color: "#f0f0f0", letterSpacing: "-0.02em" }}
          >
            From track to royalty check — in one platform
          </h2>
          <p className="text-base" style={{ color: "rgba(240,240,240,0.45)" }}>
            Every step of your music business flows through Music Rights OS
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-stretch justify-center gap-0">
          {flowSteps.map((step, i) => (
            <div key={step.stage} className="flex flex-col md:flex-row items-center flex-1">
              <div
                className="flex-1 rounded-2xl p-5 flex flex-col h-full"
                style={{
                  background: step.color,
                  border: `1px solid ${step.borderColor}`,
                  minWidth: 0,
                }}
              >
                <div
                  className="text-xs font-black tracking-widest uppercase mb-2"
                  style={{ color: step.textColor }}
                >
                  {step.stage}
                </div>
                <div
                  className="text-base font-bold mb-3"
                  style={{ color: "#f0f0f0" }}
                >
                  {step.label}
                </div>
                <ul className="flex flex-col gap-2">
                  {step.items.map((item) => (
                    <li
                      key={item}
                      className="text-xs flex items-start gap-2"
                      style={{ color: "rgba(240,240,240,0.55)" }}
                    >
                      <span style={{ color: step.textColor, marginTop: "2px" }}>▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {i < flowSteps.length - 1 && <Arrow />}
            </div>
          ))}
        </div>

        <div
          className="mt-10 text-center py-5 rounded-2xl"
          style={{
            background: "rgba(245,197,24,0.05)",
            border: "1px solid rgba(245,197,24,0.15)",
          }}
        >
          <p className="text-sm font-medium" style={{ color: "rgba(245,197,24,0.8)" }}>
            All 5 stages connect in real time. Change a split, update a registration,
            add a collaborator — every module reflects it instantly.
          </p>
        </div>
      </div>
    </section>
  );
}
