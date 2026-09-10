import type { Metadata } from "next";
import SelectedWork from "@/components/SelectedWork";
export const metadata: Metadata = {
  title: "Project index",
  description:
    "AI, security, backend engineering, and computational research by Pavan.",
};
export default function ProjectsPage() {
  return (
    <main id="main-content" className="shell section inner-page">
      <p className="eyebrow accent">THE COMPLETE INDEX / 01—08</p>
      <h1>
        Ideas.
        <br />
        <em>Put to work.</em>
      </h1>
      <p className="page-intro">
        Search by project or technology. Open an entry to explore the
        engineering, the decisions, and the details.
      </p>
      <SelectedWork />
    </main>
  );
}
