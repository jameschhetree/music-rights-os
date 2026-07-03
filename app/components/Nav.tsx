"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-4">
        <div
          className="nav-pill flex items-center justify-between gap-8 px-5 py-3 w-full max-w-3xl transition-all duration-500"
          style={{
            boxShadow: scrolled
              ? "0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(108,43,217,0.15)"
              : "0 4px 24px rgba(0,0,0,0.3)",
            transform: scrolled ? "translateY(2px)" : "translateY(0)",
          }}
        >
          <Link href="/" className="flex items-center gap-2 no-underline shrink-0">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center text-black font-black text-xs"
              style={{ background: "linear-gradient(135deg, #f5c518, #ffd84d)" }}
            >
              M
            </div>
            <span className="font-bold text-sm tracking-tight hidden sm:block" style={{ color: "#f0f0f0", fontFamily: "'Outfit', system-ui, sans-serif" }}>
              Music Rights OS
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {[
              { label: "Features", href: "/#features" },
              { label: "Pricing", href: "/#pricing" },
              { label: "Ecosystem", href: "/ecosystem" },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-sm font-medium transition-colors no-underline"
                style={{ color: "rgba(240,240,240,0.6)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#f0f0f0"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(240,240,240,0.6)"; }}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Link
              href="#waitlist"
              className="text-sm font-medium transition-all no-underline px-4 py-2 rounded-full"
              style={{ color: "rgba(240,240,240,0.6)" }}
            >
              Log in
            </Link>
            <Link
              href="#waitlist"
              className="btn-gold text-sm"
              style={{ padding: "9px 18px", borderRadius: "100px", fontSize: "13px" }}
            >
              Get access
            </Link>
          </div>

          <button
            className="md:hidden flex flex-col gap-1.5 p-1 cursor-pointer border-0 bg-transparent"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className="block w-5 h-0.5 transition-all duration-300"
              style={{
                background: "#f0f0f0",
                transform: menuOpen ? "rotate(45deg) translateY(5px)" : "none",
              }}
            />
            <span
              className="block w-5 h-0.5 transition-all duration-300"
              style={{ background: "#f0f0f0", opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-5 h-0.5 transition-all duration-300"
              style={{
                background: "#f0f0f0",
                transform: menuOpen ? "rotate(-45deg) translateY(-5px)" : "none",
              }}
            />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div
          className="fixed top-20 left-4 right-4 z-40 rounded-2xl p-5 flex flex-col gap-4"
          style={{ background: "rgba(10,10,20,0.97)", border: "1px solid rgba(255,255,255,0.07)", backdropFilter: "blur(24px)" }}
        >
          {[
            { label: "Features", href: "/#features" },
            { label: "Pricing", href: "/#pricing" },
            { label: "Ecosystem", href: "/ecosystem" },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium no-underline"
              style={{ color: "rgba(240,240,240,0.8)" }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="#waitlist"
            className="btn-gold text-sm text-center justify-center"
            onClick={() => setMenuOpen(false)}
            style={{ borderRadius: "100px" }}
          >
            Get access
          </Link>
        </div>
      )}
    </>
  );
}
