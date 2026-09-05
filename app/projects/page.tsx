import type { Metadata } from "next";
import SelectedWork from "@/components/SelectedWork";
export const metadata: Metadata = {
  title: "Selected work — Pavan",
  description:
    "AI, security, backend engineering, and computational research by Pavan.",
};
export default function ProjectsPage() {
  return (
    <main id="main-content" className="shell section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">THE PROJECT INDEX</p>
          <h1 className="project-page-title">
            Ideas, put to work<span className="orange">.</span>
          </h1>
        </div>
      </div>
      <p className="section-copy">
        Explore the engineering decisions, tools, and results behind each
        project.
      </p>
      <SelectedWork />
    </main>
  );
}
