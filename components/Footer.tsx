import { siteConfig } from "@/data/portfolio";
export default function Footer() {
  return (
    <footer className="shell site-footer">
      <span>© {new Date().getFullYear()} Pavan</span>
      <span>SIGNAL & SYSTEMS / PORTFOLIO</span>
      <div>
        <a href={siteConfig.github} target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
        <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">
          LinkedIn ↗
        </a>
        <a href="#main-content">Back to top ↑</a>
      </div>
    </footer>
  );
}
