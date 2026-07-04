"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const bentoCards = [
  {
    id: "A",
    title: "Rights & Royalties",
    body: "Every registration, split, and stream — tracked in real time.",
    modules: ["Rights Dashboard", "Royalty Pocket", "Copyright Checker"],
    color: "#f5c518",
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=900&q=70&auto=format",
    accent: "rgba(245,197,24,0.12)",
    border: "rgba(245,197,24,0.22)",
  },
  {
    id: "B",
    title: "Business & Legal",
    body: "Contracts, licenses, and invoices — professional documents in seconds.",
    modules: ["License Generator", "Business OS", "Split Sheets"],
    color: "#8b5cf6",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=700&q=70&auto=format",
    accent: "rgba(139,92,246,0.1)",
    border: "rgba(139,92,246,0.2)",
  },
  {
    id: "C",
    title: "Growth & Opportunities",
    body: "Sync deals and playlists matched to your sound — delivered daily.",
    modules: ["Opportunity Feed", "AI Release Planner"],
    color: "#3b82f6",
    img: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=700&q=70&auto=format",
    accent: "rgba(59,130,246,0.1)",
    border: "rgba(59,130,246,0.2)",
  },
  {
    id: "D",
    title: "Network & Releases",
    body: "CRM for every collaborator. Calendar that keeps every drop on time.",
    modules: ["Producer CRM", "Release Calendar"],
    color: "#ec4899",
    img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=700&q=70&auto=format",
    accent: "rgba(236,72,153,0.1)",
    border: "rgba(236,72,153,0.2)",
  },
];

export default function BentoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, scale: 0.93, y: 48 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.95,
          ease: "power3.out",
          delay: i * 0.07,
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );

      const img = card.querySelector<HTMLImageElement>(".gsap-img");
      if (img) {
        gsap.fromTo(
          img,
          { scale: 0.88, opacity: 0.4 },
          {
            scale: 1.0,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: img,
              start: "top 90%",
              end: "bottom 25%",
              scrub: 1.4,
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-32 md:py-48 px-6 relative overflow-hidden"
      style={{ background: "#080810" }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "900px",
          height: "450px",
          background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(108,43,217,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="mb-20 max-w-5xl">
          <h2
            className="font-black leading-none mb-6"
            style={{
              fontFamily: "'Outfit', system-ui, sans-serif",
              fontSize: "clamp(2.6rem, 4.8vw, 5.2rem)",
              letterSpacing: "-0.04em",
              lineHeight: 0.97,
              color: "#f0f0f0",
            }}
          >
            Everything your{" "}
            <span
              className="inline-block rounded-xl overflow-hidden align-middle mx-1"
              style={{
                width: "clamp(2.4rem, 4.2vw, 4.8rem)",
                height: "clamp(1.8rem, 3.2vw, 3.5rem)",
                verticalAlign: "middle",
                marginBottom: "0.12em",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=200&q=80&auto=format"
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover gsap-img"
                style={{ filter: "grayscale(40%) contrast(1.15)" }}
              />
            </span>
            <br />
            music business <span className="gold-text">needs.</span>
          </h2>
          <p
            className="text-lg max-w-xl"
            style={{
              fontFamily: "'Outfit', system-ui, sans-serif",
              color: "rgba(240,240,240,0.4)",
            }}
          >
            10 modules. 4 pillars. No commission. No bloat.
          </p>
        </div>

        {/*
          Bento math: 3 cols × 2 rows = 6 cells
          A = col-span-2, row-span-1 → 2 cells (row 1, cols 1-2)
          B = col-span-1, row-span-2 → 2 cells (rows 1-2, col 3)
          C = col-span-1, row-span-1 → 1 cell (row 2, col 1)
          D = col-span-1, row-span-1 → 1 cell (row 2, col 2)
          Total: 2+2+1+1 = 6 = 3×2. Zero voids. grid-flow-dense applied.
        */}
        <div className="bento-grid">
          {bentoCards.map((card, i) => (
            <div
              key={card.id}
              ref={(el) => { cardsRef.current[i] = el; }}
              className={`card-stack-item relative overflow-hidden group cursor-pointer ${card.id === "A" ? "md:col-span-2" : ""} ${card.id === "B" ? "md:row-span-2" : ""}`}
              style={{
                background: "rgba(11,11,22,0.95)",
                minHeight: card.id === "B" ? "540px" : "290px",
              }}
            >
              {/* Hover border glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20"
                style={{ boxShadow: `inset 0 0 0 1px ${card.border}` }}
              />

              {/* Background image */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={card.img}
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-cover gsap-img transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{
                    filter: "grayscale(80%) contrast(1.15)",
                    mixBlendMode: "luminosity",
                    opacity: 0.1,
                  }}
                />
              </div>

              {/* Color accent radial */}
              <div
                className="absolute inset-0 z-0 pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(ellipse 65% 55% at 25% 75%, ${card.accent} 0%, transparent 65%)` }}
              />

              {/* Content */}
              <div className="relative z-10 p-9 h-full flex flex-col justify-between">
                <div>
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center mb-7"
                    style={{ background: card.accent, border: `1px solid ${card.border}` }}
                  >
                    <div className="w-2 h-2 rounded-full" style={{ background: card.color }} />
                  </div>

                  <h3
                    className="font-black mb-3 leading-tight"
                    style={{
                      fontFamily: "'Outfit', system-ui, sans-serif",
                      fontSize: card.id === "A" ? "clamp(1.7rem, 2.8vw, 2.6rem)" : "clamp(1.4rem, 2vw, 1.9rem)",
                      color: "#f0f0f0",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Outfit', system-ui, sans-serif",
                      fontSize: "0.875rem",
                      color: "rgba(240,240,240,0.42)",
                      lineHeight: "1.65",
                      maxWidth: "320px",
                    }}
                  >
                    {card.body}
                  </p>
                </div>

                <div className="mt-8">
                  <div className="flex flex-wrap gap-2">
                    {card.modules.map((m) => (
                      <span
                        key={m}
                        className="text-xs px-3 py-1 rounded-md font-medium"
                        style={{
                          fontFamily: "'Outfit', system-ui, sans-serif",
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.07)",
                          color: "rgba(240,240,240,0.45)",
                        }}
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom accent line on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"
                style={{ background: `linear-gradient(90deg, ${card.color}, transparent)` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
