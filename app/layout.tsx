import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/data/portfolio";
export const metadata: Metadata = {
  title: "Pavan — AI & ML Engineer | Agentic Systems",
  description: siteConfig.heroTagline,
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t;try{t=localStorage.getItem("portfolio-theme")}catch(e){}document.documentElement.dataset.theme=t==="dark"||t==="light"?t:"light"})()`,
          }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
