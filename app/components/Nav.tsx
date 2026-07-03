"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(10,10,15,0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(108,43,217,0.15)"
          : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-black font-black text-sm"
            style={{ background: "linear-gradient(135deg, #f5c518, #ffd84d)" }}
          >
            M
          </div>
          <span
            className="font-bold text-base tracking-tight"
            style={{ color: "#f0f0f0" }}
          >
            Music Rights OS
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "Features", href: "/#features" },
            { label: "Pricing", href: "/#pricing" },
            { label: "Ecosystem", href: "/ecosystem" },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-sm font-medium transition-colors no-underline"
              style={{
                color:
                  pathname === href ? "#f5c518" : "rgba(240,240,240,0.7)",
              }}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link href="#waitlist" className="btn-ghost text-sm" style={{ padding: "9px 20px" }}>
            Log In
          </Link>
          <Link href="#waitlist" className="btn-gold text-sm" style={{ padding: "10px 20px" }}>
            Get Early Access
          </Link>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer border-0 bg-transparent"
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
            style={{
              background: "#f0f0f0",
              opacity: menuOpen ? 0 : 1,
            }}
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

      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
          style={{ background: "rgba(8,8,8,0.98)" }}
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
          <Link href="#waitlist" className="btn-gold text-sm text-center justify-center" onClick={() => setMenuOpen(false)}>
            Get Early Access
          </Link>
        </div>
      )}
    </header>
  );
}
