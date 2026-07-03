import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#0a0a0f",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <style>{`
        .footer-link { color: #555; text-decoration: none; font-size: 12px; transition: color 0.2s; font-family: 'Outfit', system-ui, sans-serif; }
        .footer-link:hover { color: #f0f0f0; }
        .footer-social { color: #333; text-decoration: none; font-size: 12px; transition: color 0.2s; font-family: 'Outfit', system-ui, sans-serif; }
        .footer-social:hover { color: #8b5cf6; }
      `}</style>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center text-black font-black text-xs"
                style={{ background: "linear-gradient(135deg, #f5c518, #ffd84d)" }}
              >
                M
              </div>
              <span className="font-bold text-sm" style={{ color: "#f0f0f0" }}>
                Music Rights OS
              </span>
            </div>
            <p className="text-xs leading-relaxed mb-3" style={{ color: "#444" }}>
              The all-in-one OS for independent artists, producers, and songwriters.
            </p>
            <p className="text-xs" style={{ color: "#333" }}>
              &copy; {new Date().getFullYear()} Music Rights OS
            </p>
          </div>

          {[
            {
              title: "Product",
              links: [
                { label: "Features", href: "/#features" },
                { label: "Pricing", href: "/#pricing" },
                { label: "Ecosystem", href: "/ecosystem" },
              ],
            },
            {
              title: "Resources",
              links: [
                { label: "Blog", href: "#" },
                { label: "Help Center", href: "#" },
                { label: "Music Rights Guide", href: "#" },
              ],
            },
            {
              title: "Company",
              links: [
                { label: "About", href: "#" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
              ],
            },
          ].map(({ title, links }) => (
            <div key={title}>
              <p
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: "#8b5cf6" }}
              >
                {title}
              </p>
              <ul className="flex flex-col gap-2">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="footer-link">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
        >
          <p className="text-xs" style={{ color: "#333" }}>
            Built for the 10M+ independent artists who deserve better tools.
          </p>
          <div className="flex items-center gap-4">
            {["TikTok", "Instagram", "YouTube", "Twitter"].map((s) => (
              <Link key={s} href="#" className="footer-social">
                {s}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
