"use client";

import { useEffect, useRef } from "react";

const STATEMENT =
  "Independent artists lose billions every year — not from bad music, but from bad systems. No registrations filed. No splits documented. No contracts signed. Music Rights OS changes that. One platform. Every tool. Zero commission. Your music is worth more than you think.";

export default function DesireSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);

  const words = STATEMENT.split(" ");

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = wordsRef.current.length;

      const progress = Math.max(0, Math.min(1, (vh - rect.top) / (rect.height + vh * 0.4)));

      wordsRef.current.forEach((span, i) => {
        if (!span) return;
        const threshold = i / total;
        const wordProgress = Math.max(0, Math.min(1, (progress - threshold * 0.6) / 0.18));
        span.style.opacity = String(0.08 + wordProgress * 0.92);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-40 md:py-56 px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #080810 0%, #0d0a1a 50%, #080810 100%)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(108,43,217,0.1) 0%, transparent 65%)",
        }}
      />

      {/* Floating orbs */}
      <div
        className="absolute pointer-events-none orb-drift"
        style={{
          top: "20%",
          left: "-8%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "rgba(245,197,24,0.07)",
          filter: "blur(100px)",
          animationDelay: "2s",
        }}
      />
      <div
        className="absolute pointer-events-none orb-drift-slow"
        style={{
          bottom: "15%",
          right: "-5%",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "rgba(59,130,246,0.08)",
          filter: "blur(90px)",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <p
          className="font-black leading-tight"
          style={{
            fontFamily: "'Outfit', system-ui, sans-serif",
            fontSize: "clamp(1.8rem, 3.5vw, 3.8rem)",
            letterSpacing: "-0.03em",
            lineHeight: 1.2,
          }}
        >
          {words.map((word, i) => (
            <span
              key={i}
              ref={(el) => { wordsRef.current[i] = el; }}
              className="text-reveal-word"
              style={{ marginRight: "0.28em", color: "#f0f0f0" }}
            >
              {word}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
