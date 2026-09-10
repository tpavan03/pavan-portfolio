import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { siteConfig } from "@/data/portfolio";
export const metadata: Metadata = {
  title: {
    default: "Pavan — AI & ML Engineer / Signal & Systems",
    template: "%s — Pavan",
  },
  description: siteConfig.heroTagline,
  openGraph: {
    title: "Pavan — Signal & Systems",
    description: siteConfig.heroTagline,
    type: "website",
  },
};
export const viewport: Viewport = {
  themeColor: "#10110f",
  colorScheme: "dark",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link
          rel="preload"
          href="/fonts/manrope-extra-bold.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Navbar />
        {children}
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
