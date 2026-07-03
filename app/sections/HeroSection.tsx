"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import ParticleField from "../components/ParticleField";
import WaveformBg from "../components/WaveformBg";

function FloatingOrb({
  color,
  size,
  top,
  left,
  delay,
  blur,
}: {
  color: string;
  size: number;
  top: string;
  left: string;
  delay: string;
  blur: number;
}) {
  return (
    <div
      className="absolute rounded-full pointer-events-none animate-pulse-orb"
      style={{
        width: size,
        height: size,
        top,
        left,
        background: color,
        filter: `blur(${blur}px)`,
        animationDelay: delay,
      }}
    />
  );
}

const words = ["Own", "Your", "Music."];
const wordsTwo = ["Maximize", "Your", "Income."];

export default function HeroSection() {
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    wordRefs.current.forEach((el, i) => {
      if (!el) return;
      el.style.animation = `word-appear 0.5s cubic-bezier(0.4,0,0.2,1) forwards`;
      el.style.animationDelay = `${0.4 + i * 0.12}s`;
      el.style.opacity = "0";
    });
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
      style={{ background: "#0a0a0f" }}
    >
      <div className="grid-glow absolute inset-0 opacity-30" />
      <WaveformBg />
      <ParticleField />

      <FloatingOrb color="rgba(108,43,217,0.35)" size={500} top="-10%" left="-10%" delay="0s" blur={100} />
      <FloatingOrb color="rgba(245,197,24,0.2)" size={380} top="60%" left="75%" delay="1.5s" blur={90} />
      <FloatingOrb color="rgba(59,130,246,0.25)" size={320} top="30%" left="80%" delay="0.8s" blur={80} />
      <FloatingOrb color="rgba(236,72,153,0.2)" size={280} top="70%" left="-5%" delay="2s" blur={80} />
      <FloatingOrb color="rgba(16,185,129,0.15)" size={240} top="10%" left="60%" delay="1.2s" blur={70} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-16">
        <div
          className="flex justify-center mb-8"
          style={{ animation: "reveal-up 0.6s cubic-bezier(0.4,0,0.2,1) 0.1s both" }}
        >
          <span className="section-tag section-tag-gold">
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse-gold"
              style={{ background: "#f5c518" }}
            />
            Early Access — 2,400+ Artists
          </span>
        </div>

        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight mb-8"
          style={{ letterSpacing: "-0.03em" }}
        >
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-0 mb-3">
            {words.map((w, i) => (
              <span
                key={w}
                ref={(el) => { wordRefs.current[i] = el; }}
                style={{ color: "#f0f0f0", opacity: 0, display: "inline-block" }}
              >
                {w}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-0">
            {wordsTwo.map((w, i) => (
              <span
                key={w}
                ref={(el) => { wordRefs.current[words.length + i] = el; }}
                className="gradient-text-multi"
                style={{ opacity: 0, display: "inline-block" }}
              >
                {w}
              </span>
            ))}
          </div>
        </h1>

        <p
          className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
          style={{
            color: "rgba(240,240,240,0.55)",
            animation: "reveal-up 0.6s cubic-bezier(0.4,0,0.2,1) 1.2s both",
          }}
        >
          The all-in-one OS for independent artists. Manage rights, royalties, contracts — nothing slips through.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          style={{ animation: "reveal-up 0.6s cubic-bezier(0.4,0,0.2,1) 1.4s both" }}
        >
          <Link href="#waitlist" className="btn-gold" style={{ padding: "16px 36px", fontSize: "16px" }}>
            Get Early Access — Free
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link href="/ecosystem" className="btn-ghost" style={{ padding: "15px 32px", fontSize: "16px" }}>
            See the Ecosystem
          </Link>
        </div>

        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto"
          style={{ animation: "reveal-up 0.6s cubic-bezier(0.4,0,0.2,1) 1.6s both" }}
        >
          {[
            { value: "$29.6B", label: "Market Size", color: "#f5c518" },
            { value: "10M+", label: "Independent Artists", color: "#8b5cf6" },
            { value: "10", label: "Integrated Modules", color: "#3b82f6" },
            { value: "0%", label: "Commission Taken", color: "#10b981" },
          ].map(({ value, label, color }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-1 py-4 px-3 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <span className="text-2xl sm:text-3xl font-black" style={{ color }}>
                {value}
              </span>
              <span className="text-xs text-center" style={{ color: "#555", maxWidth: "90px" }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <div
          className="w-px h-10"
          style={{
            background: "linear-gradient(to bottom, rgba(108,43,217,0.8), transparent)",
          }}
        />
        <div
          className="w-1 h-1 rounded-full"
          style={{ background: "rgba(108,43,217,0.6)" }}
        />
      </div>
    </section>
  );
}
