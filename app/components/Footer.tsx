import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        background: "#080808",
        borderColor: "rgba(255,255,255,0.06)",
      }}
    >
      <style>{`
        .footer-link { color: #666; text-decoration: none; font-size: 14px; transition: color 0.2s; }
        .footer-link:hover { color: #f0f0f0; }
        .footer-social { color: #444; text-decoration: none; font-size: 12px; transition: color 0.2s; }
        .footer-social:hover { color: #f5c518; }
      `}</style>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-black font-black text-sm"
                style={{ background: "linear-gradient(135deg, #f5c518, #ffd84d)" }}
              >
                M
              </div>
              <span className="font-bold text-base" style={{ color: "#f0f0f0" }}>
                Music Rights OS
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#666" }}>
              The all-in-one operating system for independent artists, producers, and songwriters.
            </p>
            <p className="text-xs" style={{ color: "#444" }}>
              &copy; {new Date().getFullYear()} Music Rights OS. All rights reserved.
            </p>
          </div>

          {[
            {
              title: "Product",
              links: [
                { label: "Features", href: "/#features" },
                { label: "Pricing", href: "/#pricing" },
                { label: "Ecosystem", href: "/ecosystem" },
                { label: "Roadmap", href: "#" },
              ],
            },
            {
              title: "Resources",
              links: [
                { label: "Blog", href: "#" },
                { label: "Help Center", href: "#" },
                { label: "Music Rights Guide", href: "#" },
                { label: "Split Sheet Templates", href: "#" },
              ],
            },
            {
              title: "Company",
              links: [
                { label: "About", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
              ],
            },
          ].map(({ title, links }) => (
            <div key={title}>
              <p
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: "#f5c518" }}
              >
                {title}
              </p>
              <ul className="flex flex-col gap-2.5">
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
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t"
          style={{ borderColor: "rgba(255,255,255,0.05)" }}
        >
          <p className="text-xs" style={{ color: "#444" }}>
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
