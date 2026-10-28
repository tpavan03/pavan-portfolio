import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollAtmosphere from "@/components/ScrollAtmosphere";
import { siteConfig } from "@/data/portfolio";
export const metadata: Metadata = {
  title: {
    default: "Pavan — AI Engineer, Systems Builder & Curious Human",
    template: "%s — Pavan",
  },
  description: siteConfig.heroTagline,
  openGraph: {
    title: "Pavan — A curious mind, a builder’s hands",
    description: siteConfig.heroTagline,
    type: "website",
  },
};
export const viewport: Viewport = {
  themeColor: "#f7f8fc",
  colorScheme: "light dark",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="/fonts/space-grotesk.ttf"
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
        <ScrollAtmosphere />
      </body>
    </html>
  );
}
