"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import WaveformBg from "../components/WaveformBg";

export default function HeroSection() {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const bgImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = h1Ref.current;
    if (!el) return;
    const spans = el.querySelectorAll<HTMLSpanElement>("[data-word]");
    spans.forEach((s, i) => {
      s.style.opacity = "0";
      s.style.transform = "translateY(36px)";
      s.style.transition = `opacity 0.8s cubic-bezier(0.4,0,0.2,1) ${0.15 + i * 0.08}s, transform 0.8s cubic-bezier(0.4,0,0.2,1) ${0.15 + i * 0.08}s`;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          s.style.opacity = "1";
          s.style.transform = "translateY(0)";
        });
      });
    });
  }, []);

  useEffect(() => {
    const img = bgImgRef.current;
    if (!img) return;
    const onScroll = () => {
      const y = window.scrollY;
      img.style.transform = `translateY(${y * 0.28}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden grain-overlay"
      style={{ background: "#080810" }}
    >
      {/* Full-bleed parallax background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          ref={bgImgRef}
          src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1920&q=70&auto=format"
          alt=""
          aria-hidden="true"
          className="parallax-hero-img w-full h-[120%] object-cover -top-[10%] absolute"
          style={{
            filter: "grayscale(100%) contrast(1.25)",
            mixBlendMode: "luminosity",
            opacity: 0.14,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(108,43,217,0.22) 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 80% 80%, rgba(245,197,24,0.07) 0%, transparent 60%), linear-gradient(to bottom, rgba(8,8,16,0.55) 0%, rgba(8,8,16,0.82) 60%, rgba(8,8,16,1) 100%)",
          }}
        />
      </div>

      {/* Grid texture */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(108,43,217,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(108,43,217,0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Ambient orbs */}
      <div
        className="absolute pointer-events-none orb-drift"
        style={{
          top: "-8%",
          left: "-5%",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "rgba(108,43,217,0.18)",
          filter: "blur(140px)",
        }}
      />
      <div
        className="absolute pointer-events-none orb-drift-slow"
        style={{
          bottom: "-12%",
          right: "0%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "rgba(245,197,24,0.1)",
          filter: "blur(120px)",
        }}
      />
      <div
        className="absolute pointer-events-none orb-drift"
        style={{
          top: "30%",
          right: "-10%",
          width: "380px",
          height: "380px",
          borderRadius: "50%",
          background: "rgba(59,130,246,0.08)",
          filter: "blur(100px)",
          animationDelay: "6s",
        }}
      />

      {/* WaveformBg canvas */}
      <WaveformBg />

      {/* Cinematic centered content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-32 pb-24 flex flex-col items-center text-center">

        {/* H1: Outfit, max-w-6xl, clamp font, guaranteed 2-3 lines */}
        <h1
          ref={h1Ref}
          className="font-black leading-none mb-8 w-full"
          style={{
            fontFamily: "'Outfit', system-ui, sans-serif",
            fontSize: "clamp(3rem, 6vw, 6rem)",
            letterSpacing: "-0.04em",
            lineHeight: 0.95,
          }}
        >
          <span className="block overflow-hidden">
            <span data-word style={{ display: "inline-block" }}>
              Own your music.
            </span>
          </span>
          <span className="block overflow-hidden mt-2">
            <span data-word style={{ display: "inline-block" }}>
              Protect{" "}
              <span
                className="inline-block rounded-xl overflow-hidden align-middle"
                style={{
                  width: "clamp(2.8rem, 5.5vw, 5.8rem)",
                  height: "clamp(2rem, 3.8vw, 4rem)",
                  marginBottom: "0.1em",
                  verticalAlign: "middle",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&q=80&auto=format"
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-cover"
                  style={{ filter: "grayscale(40%) contrast(1.15)", opacity: 0.9 }}
                />
              </span>{" "}
              your rights.
            </span>
          </span>
          <span className="block overflow-hidden mt-2">
            <span data-word className="gold-text" style={{ display: "inline-block" }}>
              Maximize your income.
            </span>
          </span>
        </h1>

        <p
          className="text-xl leading-relaxed mb-12 max-w-2xl"
          style={{
            fontFamily: "'Outfit', system-ui, sans-serif",
            color: "rgba(240,240,240,0.5)",
            animation: "reveal-up 0.7s cubic-bezier(0.4,0,0.2,1) 1s both",
          }}
        >
          Rights, royalties, splits, contracts, CRM — one platform. Zero commission. Built for artists who run a real business.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center gap-4"
          style={{ animation: "reveal-up 0.7s cubic-bezier(0.4,0,0.2,1) 1.2s both" }}
        >
          <Link
            href="#waitlist"
            className="btn-gold"
            style={{
              fontFamily: "'Outfit', system-ui, sans-serif",
              padding: "18px 44px",
              fontSize: "16px",
              borderRadius: "14px",
              fontWeight: 700,
            }}
          >
            Start free — no card
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link
            href="/ecosystem"
            className="btn-ghost"
            style={{
              fontFamily: "'Outfit', system-ui, sans-serif",
              padding: "17px 40px",
              fontSize: "16px",
              borderRadius: "14px",
            }}
          >
            See the ecosystem
          </Link>
        </div>

        {/* Trusted by count */}
        <div
          className="mt-16 flex items-center gap-3"
          style={{
            animation: "reveal-up 0.7s cubic-bezier(0.4,0,0.2,1) 1.5s both",
            color: "rgba(240,240,240,0.25)",
            fontSize: "12px",
            fontFamily: "'Outfit', system-ui, sans-serif",
            letterSpacing: "0.04em",
          }}
        >
          <div className="flex -space-x-2">
            {[
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&q=80&auto=format&fit=crop&crop=faces",
              "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=40&h=40&q=80&auto=format&fit=crop&crop=faces",
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&q=80&auto=format&fit=crop&crop=faces",
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&q=80&auto=format&fit=crop&crop=faces",
            ].map((url, i) => (
              <div
                key={i}
                className="w-7 h-7 rounded-full overflow-hidden border-2"
                style={{ borderColor: "#080810" }}
              >
                <img src={url} alt="" aria-hidden="true" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <span>2,400+ artists in early access</span>
          <div className="w-1.5 h-1.5 rounded-full animate-pulse-gold" style={{ background: "#10b981" }} />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
        <div className="w-px h-10" style={{ background: "linear-gradient(to bottom, rgba(108,43,217,0.6), transparent)" }} />
        <div className="w-1.5 h-1.5 rounded-full animate-scroll-hint" style={{ background: "rgba(108,43,217,0.6)" }} />
      </div>
    </section>
  );
}
