"use client";

import { useScrollReveal } from "../components/ScrollReveal";

const testimonials = [
  {
    quote: "Found $840 in performance royalties I never knew existed. Within my first week.",
    name: "Marcus T.",
    role: "Hip-Hop Producer, Atlanta",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&q=80&auto=format&fit=crop&crop=faces",
    color: "#f5c518",
  },
  {
    quote: "Split sheets used to be a whole thing. Now it takes 3 minutes, everyone signs digitally.",
    name: "Priya K.",
    role: "Songwriter, Nashville",
    avatarUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&h=80&q=80&auto=format&fit=crop&crop=faces",
    color: "#8b5cf6",
  },
  {
    quote: "The Producer CRM alone is worth 10x the subscription. Never going back to spreadsheets.",
    name: "Devon R.",
    role: "Label Owner, Los Angeles",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&q=80&auto=format&fit=crop&crop=faces",
    color: "#3b82f6",
  },
  {
    quote: "Opportunity Feed led to a $3,500 Netflix sync placement. Paid for 5 years of the subscription.",
    name: "Jade M.",
    role: "Beatmaker, Miami",
    avatarUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b1e0?w=80&h=80&q=80&auto=format&fit=crop&crop=faces",
    color: "#ec4899",
  },
  {
    quote: "Gives me the same tools major label artists use. The playing field actually feels level.",
    name: "Chris W.",
    role: "Electronic Producer, Chicago",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&q=80&auto=format&fit=crop&crop=faces",
    color: "#10b981",
  },
  {
    quote: "Tax season organized. My accountant actually thanked me. First time ever.",
    name: "Nia B.",
    role: "R&B Artist, New York",
    avatarUrl: "https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?w=80&h=80&q=80&auto=format&fit=crop&crop=faces",
    color: "#f5c518",
  },
];

export default function TestimonialsSection() {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref}
      className="py-32 md:py-48 px-6 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0a0a0f 0%, #0d0a1a 50%, #0a0a0f 100%)",
      }}
    >
      <div
        className="absolute top-0 left-1/4 w-72 h-72 rounded-full pointer-events-none animate-pulse-orb"
        style={{ background: "rgba(236,72,153,0.06)", filter: "blur(70px)", animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full pointer-events-none animate-pulse-orb"
        style={{ background: "rgba(16,185,129,0.06)", filter: "blur(70px)", animationDelay: "2.5s" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14 reveal-on-scroll">
          <span className="section-tag mb-4 inline-block">Early Access Stories</span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-4"
            style={{ color: "#f0f0f0", letterSpacing: "-0.02em" }}
          >
            Artists are already{" "}
            <span className="gold-text">getting their money back.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`glass-card p-6 flex flex-col gap-4 reveal-on-scroll stagger-${i + 1}`}
            >
              <div
                className="w-6 h-px rounded-full"
                style={{ background: `linear-gradient(90deg, ${t.color}, transparent)` }}
              />
              <p
                className="text-sm leading-relaxed flex-1"
                style={{ color: "rgba(240,240,240,0.8)", lineHeight: "1.7" }}
              >
                {t.quote}
              </p>
              <div
                className="flex items-center gap-3 pt-3"
                style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
              >
                <div
                  className="w-9 h-9 rounded-full overflow-hidden shrink-0"
                  style={{ border: `1.5px solid ${t.color}44` }}
                >
                  <img
                    src={t.avatarUrl}
                    alt={t.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold" style={{ color: "#f0f0f0" }}>
                    {t.name}
                  </p>
                  <p className="text-xs" style={{ color: "#444" }}>
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 reveal-on-scroll"
        >
          {[
            { value: "2,400+", label: "Artists in Early Access", color: "#f5c518" },
            { value: "$94K+", label: "Royalties Recovered", color: "#10b981" },
            { value: "4.9/5", label: "Average Rating", color: "#8b5cf6" },
            { value: "<5%", label: "Monthly Churn", color: "#3b82f6" },
          ].map(({ value, label, color }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-1 py-5 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <span className="text-2xl sm:text-3xl font-black" style={{ color }}>
                {value}
              </span>
              <span className="text-xs text-center" style={{ color: "#444" }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
