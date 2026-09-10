import type { Metadata } from "next";
import { experiences } from "@/data/portfolio";
export const metadata: Metadata = {
  title: "Experience",
  description:
    "Pavan's work in agentic AI, security engineering, and technical education.",
};
export default function ExperiencePage() {
  return (
    <main id="main-content" className="shell section inner-page">
      <p className="eyebrow accent">THE TRAJECTORY / EXPERIENCE</p>
      <h1>
        Learning.
        <br />
        Building.
        <br />
        <em>Moving forward.</em>
      </h1>
      <p className="page-intro">
        From graduate-level teaching to production AI platforms.
      </p>
      <div className="full-journey">
        {experiences.map((e, i) => (
          <article key={e.company}>
            <div>
              <p className="eyebrow accent">
                0{i + 1} / {e.duration}
              </p>
              <h2>{e.company}</h2>
              <p>{e.location}</p>
            </div>
            <div>
              <h3>{e.role}</h3>
              <ul>
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <div className="tags">
                {e.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
