"use client";

import { useState } from "react";

const modules = [
  {
    id: "01",
    name: "Music Rights Dashboard",
    stage: "REGISTER",
    stageColor: "#a78bfa",
    description:
      "The central hub. See every project, every ownership stake, every registration status in one place. Color-coded alerts tell you what needs attention before deadlines pass.",
    connects: ["Split Sheet Generator", "Royalty Pocket", "Copyright Checker"],
    inputs: ["Track uploads", "Collaborator info", "PRO data"],
    outputs: ["Registration status", "Ownership map", "Rights alerts"],
    icon: "◉",
  },
  {
    id: "02",
    name: "Split Sheet Generator",
    stage: "REGISTER",
    stageColor: "#a78bfa",
    description:
      "Generate professional split sheets with defined roles (producer, songwriter, vocalist) and exact percentages. DocuSign-style digital signatures make them legally binding.",
    connects: ["Music Rights Dashboard", "License Generator", "Business OS"],
    inputs: ["Collaborator names", "Role assignments", "Ownership %"],
    outputs: ["Signed split sheets", "PDF export", "Legal record"],
    icon: "◈",
  },
  {
    id: "03",
    name: "Producer CRM",
    stage: "GROW",
    stageColor: "#f5c518",
    description:
      "Your complete professional network. Track artists, A&R reps, managers, publishers, and collaborators. Log every meeting, email, and deal. Set follow-up reminders that actually fire.",
    connects: ["License Generator", "Opportunity Feed", "Business OS"],
    inputs: ["Contacts", "Meeting notes", "Deal status"],
    outputs: ["Pipeline view", "Follow-up alerts", "Relationship history"],
    icon: "◎",
  },
  {
    id: "04",
    name: "Release Calendar",
    stage: "DISTRIBUTE",
    stageColor: "#60a5fa",
    description:
      "Map out your entire release campaign — pre-save launch, social drops, press outreach, playlist pitching, and ad campaigns. Sync it to your team and never miss a step.",
    connects: ["AI Release Planner", "Opportunity Feed", "Royalty Pocket"],
    inputs: ["Release date", "Platforms", "Marketing budget"],
    outputs: ["Campaign timeline", "Social schedule", "Press checklist"],
    icon: "◫",
  },
  {
    id: "05",
    name: "Royalty Pocket",
    stage: "COLLECT",
    stageColor: "#34d399",
    description:
      "Connect your distributor, PRO, and publishing admin. See every stream, every sale, every mechanical and performance royalty in one unified view with full transaction history.",
    connects: ["Music Rights Dashboard", "Business OS", "Release Calendar"],
    inputs: ["Distributor connection", "PRO membership", "Platform data"],
    outputs: ["Revenue dashboard", "Payout history", "Unclaimed alerts"],
    icon: "◆",
  },
  {
    id: "06",
    name: "Copyright Checker",
    stage: "REGISTER",
    stageColor: "#a78bfa",
    description:
      "Run pre-release scans to identify sample conflicts, similar melodies, and master ownership issues. Avoid takedowns and lawsuits before your track is live.",
    connects: ["Music Rights Dashboard", "License Generator"],
    inputs: ["Audio file", "Lyrics", "Sample list"],
    outputs: ["Risk report", "Clearance status", "Legal recommendations"],
    icon: "◇",
  },
  {
    id: "07",
    name: "Music Business OS",
    stage: "GROW",
    stageColor: "#f5c518",
    description:
      "Full financial stack: create invoices for session work and sync deals, track business expenses, and generate tax-ready reports. Integrates with Royalty Pocket so income is auto-categorized.",
    connects: ["Royalty Pocket", "Producer CRM", "License Generator"],
    inputs: ["Expenses", "Invoice details", "Royalty data"],
    outputs: ["P&L report", "Tax summary", "Invoice history"],
    icon: "◑",
  },
  {
    id: "08",
    name: "Opportunity Feed",
    stage: "GROW",
    stageColor: "#f5c518",
    description:
      "AI-curated daily briefing of sync opportunities, playlist submission calls, brand partnerships, and music contests filtered by your genre, sound, and career stage.",
    connects: ["Producer CRM", "Release Calendar", "License Generator"],
    inputs: ["Genre preferences", "Career level", "Sound profile"],
    outputs: ["Daily brief", "Application links", "Deadline alerts"],
    icon: "◐",
  },
  {
    id: "09",
    name: "License Generator",
    stage: "GROW",
    stageColor: "#f5c518",
    description:
      "Build custom licensing agreements in minutes. Beat leases, sync licenses, master use agreements, co-writer splits — select the parameters, and the system builds the contract.",
    connects: ["Music Rights Dashboard", "Producer CRM", "Business OS"],
    inputs: ["License type", "Terms", "Parties involved"],
    outputs: ["Signed contract", "Payment terms", "License archive"],
    icon: "◍",
  },
  {
    id: "10",
    name: "AI Release Planner",
    stage: "DISTRIBUTE",
    stageColor: "#60a5fa",
    description:
      "AI analyzes your audience, streaming patterns, platform algorithms, and seasonal trends to recommend the optimal date, time, and strategy for your next drop.",
    connects: ["Release Calendar", "Royalty Pocket", "Opportunity Feed"],
    inputs: ["Past releases", "Audience data", "Platform analytics"],
    outputs: ["Release recommendation", "Strategy report", "A/B test options"],
    icon: "◈",
  },
];

export default function ModuleGrid() {
  const [active, setActive] = useState<string | null>(null);

  const activeModule = modules.find((m) => m.id === active);

  return (
    <section className="py-20 px-6" style={{ background: "#080808" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="section-tag mb-4 inline-block">Module Map</span>
          <h2
            className="text-3xl sm:text-4xl font-black leading-tight mb-4"
            style={{ color: "#f0f0f0", letterSpacing: "-0.02em" }}
          >
            Click any module to see how it connects
          </h2>
          <p className="text-base" style={{ color: "rgba(240,240,240,0.45)" }}>
            Every module passes data to the others — no silos, no copy-paste, no re-entry.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {modules.map((mod) => (
            <button
              key={mod.id}
              onClick={() => setActive(active === mod.id ? null : mod.id)}
              className="flex flex-col items-start gap-2 p-4 rounded-xl text-left cursor-pointer border transition-all duration-300"
              style={{
                background:
                  active === mod.id
                    ? "rgba(245,197,24,0.1)"
                    : "rgba(14,14,14,0.9)",
                borderColor:
                  active === mod.id
                    ? "rgba(245,197,24,0.4)"
                    : "rgba(255,255,255,0.06)",
                transform: active === mod.id ? "translateY(-2px)" : "none",
                boxShadow:
                  active === mod.id
                    ? "0 12px 32px rgba(245,197,24,0.1)"
                    : "none",
              }}
            >
              <div className="flex items-center justify-between w-full">
                <span style={{ fontSize: "18px", color: mod.stageColor }}>
                  {mod.icon}
                </span>
                <span
                  className="text-xs font-black"
                  style={{ color: "rgba(255,255,255,0.2)" }}
                >
                  {mod.id}
                </span>
              </div>
              <p
                className="text-xs font-bold leading-tight"
                style={{
                  color: active === mod.id ? "#f0f0f0" : "rgba(240,240,240,0.6)",
                }}
              >
                {mod.name}
              </p>
              <span
                className="text-xs px-2 py-0.5 rounded-full"
                style={{
                  background: `${mod.stageColor}15`,
                  color: mod.stageColor,
                  border: `1px solid ${mod.stageColor}30`,
                }}
              >
                {mod.stage}
              </span>
            </button>
          ))}
        </div>

        {activeModule && (
          <div
            className="rounded-2xl p-6 sm:p-8 transition-all duration-300"
            style={{
              background: "rgba(14,14,14,0.95)",
              border: "1px solid rgba(245,197,24,0.2)",
              boxShadow: "0 24px 64px rgba(245,197,24,0.06)",
            }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                style={{ background: "rgba(245,197,24,0.1)" }}
              >
                {activeModule.icon}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl font-black" style={{ color: "#f0f0f0" }}>
                    {activeModule.name}
                  </h3>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{
                      background: `${activeModule.stageColor}15`,
                      color: activeModule.stageColor,
                      border: `1px solid ${activeModule.stageColor}30`,
                    }}
                  >
                    {activeModule.stage}
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(240,240,240,0.6)" }}>
                  {activeModule.description}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div
                className="rounded-xl p-4"
                style={{
                  background: "rgba(245,197,24,0.04)",
                  border: "1px solid rgba(245,197,24,0.1)",
                }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: "rgba(245,197,24,0.6)" }}
                >
                  Inputs
                </p>
                <ul className="flex flex-col gap-2">
                  {activeModule.inputs.map((inp) => (
                    <li
                      key={inp}
                      className="text-sm flex items-center gap-2"
                      style={{ color: "rgba(240,240,240,0.6)" }}
                    >
                      <span style={{ color: "rgba(245,197,24,0.5)", fontSize: "10px" }}>▶</span>
                      {inp}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="rounded-xl p-4"
                style={{
                  background: "rgba(245,197,24,0.04)",
                  border: "1px solid rgba(245,197,24,0.1)",
                }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: "rgba(245,197,24,0.6)" }}
                >
                  Outputs
                </p>
                <ul className="flex flex-col gap-2">
                  {activeModule.outputs.map((out) => (
                    <li
                      key={out}
                      className="text-sm flex items-center gap-2"
                      style={{ color: "rgba(240,240,240,0.6)" }}
                    >
                      <span style={{ color: "#34d399", fontSize: "10px" }}>▶</span>
                      {out}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="rounded-xl p-4"
                style={{
                  background: "rgba(245,197,24,0.04)",
                  border: "1px solid rgba(245,197,24,0.1)",
                }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: "rgba(245,197,24,0.6)" }}
                >
                  Connects To
                </p>
                <ul className="flex flex-col gap-2">
                  {activeModule.connects.map((conn) => (
                    <li
                      key={conn}
                      className="text-sm flex items-center gap-2"
                      style={{ color: "rgba(240,240,240,0.6)" }}
                    >
                      <span style={{ color: "#60a5fa", fontSize: "10px" }}>⟷</span>
                      {conn}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {!activeModule && (
          <div
            className="rounded-2xl p-6 text-center"
            style={{
              background: "rgba(14,14,14,0.5)",
              border: "1px dashed rgba(255,255,255,0.08)",
            }}
          >
            <p className="text-sm" style={{ color: "#444" }}>
              Select a module above to see its inputs, outputs, and connections
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
