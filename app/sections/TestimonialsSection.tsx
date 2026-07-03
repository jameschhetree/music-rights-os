const testimonials = [
  {
    quote:
      "I didn't even know I had unclaimed royalties sitting there. Within my first week on Music Rights OS I found $840 in performance royalties I never knew existed.",
    name: "Marcus T.",
    role: "Independent Hip-Hop Producer",
    location: "Atlanta, GA",
    avatar: "MT",
  },
  {
    quote:
      "Split sheets used to be a whole thing — now it takes me 3 minutes, everyone signs digitally, and I've never had a dispute since. Should've had this years ago.",
    name: "Priya K.",
    role: "Songwriter / Session Artist",
    location: "Nashville, TN",
    avatar: "PK",
  },
  {
    quote:
      "I run a small label with 12 artists. The Producer CRM alone is worth 10x the subscription. I used to manage everything in spreadsheets. Never going back.",
    name: "Devon R.",
    role: "Independent Label Owner",
    location: "Los Angeles, CA",
    avatar: "DR",
  },
  {
    quote:
      "The Opportunity Feed sent me a sync brief that led to a $3,500 placement in a Netflix show. Paid for 5 years of the subscription in one shot.",
    name: "Jade M.",
    role: "Producer & Beatmaker",
    location: "Miami, FL",
    avatar: "JM",
  },
  {
    quote:
      "As a bedroom producer, I always felt like a small fish. Music Rights OS gives me the same tools major label artists use. The playing field actually feels level.",
    name: "Chris W.",
    role: "Electronic Music Producer",
    location: "Chicago, IL",
    avatar: "CW",
  },
  {
    quote:
      "Tax season used to send me into a spiral. Now everything's organized in the Business OS — expenses, invoices, payouts. My accountant actually thanked me.",
    name: "Nia B.",
    role: "R&B Artist & Songwriter",
    location: "New York, NY",
    avatar: "NB",
  },
];

function AvatarCircle({ initials, index }: { initials: string; index: number }) {
  const gradients = [
    "linear-gradient(135deg, #f5c518, #b8960f)",
    "linear-gradient(135deg, #7c3aed, #4f46e5)",
    "linear-gradient(135deg, #059669, #047857)",
    "linear-gradient(135deg, #dc2626, #991b1b)",
    "linear-gradient(135deg, #2563eb, #1d4ed8)",
    "linear-gradient(135deg, #d97706, #b45309)",
  ];
  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black shrink-0"
      style={{
        background: gradients[index % gradients.length],
        color: "#fff",
      }}
    >
      {initials}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-6" style={{ background: "#0a0a0a" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="section-tag mb-4 inline-block">Early Access Stories</span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-5"
            style={{ color: "#f0f0f0", letterSpacing: "-0.02em" }}
          >
            Artists are already{" "}
            <span className="gold-text">getting their money back.</span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(240,240,240,0.5)" }}
          >
            From bedroom producers to independent label owners — here&apos;s what happens
            when you stop leaving money on the table.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div key={t.name} className="glass-card p-6 flex flex-col gap-4">
              <div
                className="text-3xl"
                style={{ color: "rgba(245,197,24,0.3)", fontFamily: "Georgia, serif", lineHeight: 1 }}
              >
                &ldquo;
              </div>
              <p
                className="text-sm leading-relaxed flex-1"
                style={{ color: "rgba(240,240,240,0.75)" }}
              >
                {t.quote}
              </p>
              <div className="flex items-center gap-3 pt-2 border-t" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                <AvatarCircle initials={t.avatar} index={i} />
                <div>
                  <p className="text-sm font-bold" style={{ color: "#f0f0f0" }}>
                    {t.name}
                  </p>
                  <p className="text-xs" style={{ color: "#555" }}>
                    {t.role} · {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-12 rounded-2xl p-8 text-center"
          style={{
            background: "rgba(14,14,14,0.8)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="flex flex-wrap items-center justify-center gap-10">
            {[
              { value: "2,400+", label: "Artists in Early Access" },
              { value: "$94K+", label: "Royalties Recovered" },
              { value: "4.9 / 5", label: "Average Rating" },
              { value: "&lt;5%", label: "Monthly Churn" },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <span
                  className="text-3xl font-black"
                  style={{ color: "#f5c518" }}
                  dangerouslySetInnerHTML={{ __html: value }}
                />
                <span className="text-xs" style={{ color: "#555" }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
