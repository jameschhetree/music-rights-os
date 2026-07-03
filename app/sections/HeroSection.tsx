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

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: copy */}
          <div className="flex-1 text-center lg:text-left">
            <div
              className="flex justify-center lg:justify-start mb-8"
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
              className="text-5xl sm:text-6xl md:text-7xl font-black leading-none tracking-tight mb-8"
              style={{ letterSpacing: "-0.03em" }}
            >
              <div className="flex flex-wrap justify-center lg:justify-start gap-x-4 gap-y-0 mb-3">
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
              <div className="flex flex-wrap justify-center lg:justify-start gap-x-4 gap-y-0">
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
              className="text-lg sm:text-xl max-w-xl leading-relaxed mb-10 mx-auto lg:mx-0"
              style={{
                color: "rgba(240,240,240,0.55)",
                animation: "reveal-up 0.6s cubic-bezier(0.4,0,0.2,1) 1.2s both",
              }}
            >
              The all-in-one OS for independent artists. Manage rights, royalties, contracts — nothing slips through.
            </p>

            <div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-14"
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
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl mx-auto lg:mx-0"
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

          {/* Equalizer bars decoration */}
          <div
            className="flex items-end gap-1 mt-6 justify-center lg:justify-start"
            style={{ height: "40px", animation: "reveal-up 0.6s cubic-bezier(0.4,0,0.2,1) 1.8s both" }}
          >
            {[
              { cls: "eq-bar-1", color: "#f5c518" },
              { cls: "eq-bar-2", color: "#8b5cf6" },
              { cls: "eq-bar-3", color: "#3b82f6" },
              { cls: "eq-bar-4", color: "#ec4899" },
              { cls: "eq-bar-5", color: "#10b981" },
              { cls: "eq-bar-1", color: "#f5c518" },
              { cls: "eq-bar-3", color: "#8b5cf6" },
              { cls: "eq-bar-2", color: "#3b82f6" },
              { cls: "eq-bar-5", color: "#f5c518" },
              { cls: "eq-bar-4", color: "#10b981" },
            ].map(({ cls, color }, i) => (
              <div
                key={i}
                className={`rounded-full ${cls}`}
                style={{ width: "4px", background: color, opacity: 0.7 }}
              />
            ))}
            <span className="text-xs ml-3 self-center" style={{ color: "#444" }}>Live royalty tracking</span>
          </div>

          {/* Right: studio photo */}
          <div
            className="relative flex-shrink-0 w-full lg:w-[460px] xl:w-[520px]"
            style={{ animation: "reveal-up 0.7s cubic-bezier(0.4,0,0.2,1) 0.3s both" }}
          >
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                boxShadow: "0 0 0 1px rgba(108,43,217,0.25), 0 40px 100px rgba(0,0,0,0.6), 0 0 80px rgba(108,43,217,0.15)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=900&q=80&auto=format"
                alt="Music producer in a recording studio at night"
                loading="lazy"
                className="w-full object-cover"
                style={{ height: "520px", display: "block" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, rgba(108,43,217,0.35) 0%, rgba(0,0,0,0.2) 50%, rgba(245,197,24,0.15) 100%)",
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(10,10,15,0.85) 0%, transparent 50%)",
                }}
              />
              <div className="absolute bottom-5 left-5 right-5">
                <div
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl"
                  style={{
                    background: "rgba(10,10,15,0.85)",
                    border: "1px solid rgba(108,43,217,0.3)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(245,197,24,0.15)", border: "1px solid rgba(245,197,24,0.3)" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f5c518" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="1" x2="12" y2="23" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold" style={{ color: "#f5c518" }}>$840 recovered</p>
                    <p className="text-xs" style={{ color: "rgba(240,240,240,0.45)" }}>Performance royalties — BMI Q3</p>
                  </div>
                  <div className="ml-auto">
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#10b981" }} />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute -top-6 -right-6 w-40 h-40 rounded-full pointer-events-none"
              style={{ background: "rgba(245,197,24,0.12)", filter: "blur(50px)" }}
            />
            <div
              className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full pointer-events-none"
              style={{ background: "rgba(108,43,217,0.2)", filter: "blur(40px)" }}
            />
          </div>
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
