import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Music Rights OS — Own Your Music. Maximize Your Income.",
  description:
    "The all-in-one operating system for independent artists, producers, and songwriters. Manage rights, royalties, contracts, and business operations in one place.",
  keywords: "music rights, royalties, split sheets, music publishing, independent artists",
  openGraph: {
    title: "Music Rights OS",
    description:
      "Own your music. Maximize your income. Protect your rights.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
