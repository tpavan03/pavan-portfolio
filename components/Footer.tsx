import { siteConfig } from "@/data/portfolio";
export default function Footer() {
  return (
    <footer className="site-footer">
      <span>© {new Date().getFullYear()} Pavan</span>
      <span>Built with curiosity. Engineered with intent.</span>
      <a href={siteConfig.github} target="_blank" rel="noreferrer">
        GitHub ↗
      </a>
      <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">
        LinkedIn ↗
      </a>
      <a href="#">Back to top ↑</a>
    </footer>
  );
}
