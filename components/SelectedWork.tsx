"use client";
import { useState } from "react";
import ScreenshotPreview from "@/components/ScreenshotPreview";
import { projects } from "@/data/portfolio";
const categories = ["All work", "AI & security", "Systems & research"];
const artIndex = { social: 0, security: 1, chip: 2, agents: 3 };
export default function SelectedWork({
  featuredOnly = false,
}: {
  featuredOnly?: boolean;
}) {
  const [filter, setFilter] = useState("All work");
  const available = projects.filter((p) => !featuredOnly || p.featured);
  return (
    <>
      <div className="work-filters" aria-label="Filter projects">
        {categories.map((c) => (
          <button
            key={c}
            aria-pressed={filter === c}
            className={filter === c ? "active" : ""}
            onClick={() => setFilter(c)}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {available
          .filter((p) => filter === "All work" || p.category === filter)
          .map((p, i) => (
            <article className="project" key={p.title}>
              <div
                className={`project-art art-${artIndex[p.art]}`}
                aria-hidden="true"
              >
                {p.image ? (
                  <img
                    className="project-screenshot"
                    src={p.image}
                    alt=""
                    loading="lazy"
                  />
                ) : (
                  <>
                    <span className="art-label">
                      {p.category.toUpperCase()}
                    </span>
                    {p.art === "social" ? (
                      <div className="social-diagram">
                        <div className="social-node">
                          B<span>social</span>
                        </div>
                        <div className="diagram-line" />
                        <div className="mini-nodes">
                          <span>API</span>
                          <span>STREAM</span>
                          <span>CACHE</span>
                        </div>
                      </div>
                    ) : p.art === "security" ? (
                      <div className="shield">
                        <span>✳</span>
                        <small>
                          {p.title.includes("Phishing")
                            ? "PhishBuster"
                            : "TRUST / VERIFY"}
                        </small>
                        <div className="scan-line" />
                      </div>
                    ) : p.art === "chip" ? (
                      <div className="chip-grid">
                        {Array.from({ length: 25 }, (_, n) => (
                          <i key={n} />
                        ))}
                      </div>
                    ) : (
                      <div className="agent-diagram">
                        <span>OBSERVE</span>
                        <b>✳</b>
                        <span>REASON → ACT</span>
                      </div>
                    )}
                    <span className="art-index">
                      {String(i + 1).padStart(2, "0")} /{" "}
                      {p.context.toUpperCase()}
                    </span>
                  </>
                )}
              </div>
              <div className="project-heading">
                <div>
                  <p className="eyebrow">{p.subtitle}</p>
                  <h3>{p.title}</h3>
                </div>
                <span className="project-arrow">↗</span>
              </div>
              <p className="project-context">{p.context}</p>
              <p className="project-description">{p.description}</p>
              <div className="tags">
                {p.tech.slice(0, 5).map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <details>
                <summary>
                  Explore the project <span>+</span>
                </summary>
                <ul>
                  {p.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </details>
              <div className="project-links">
                {p.image && <ScreenshotPreview src={p.image} title={p.title} />}
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer">
                    Source code ↗
                  </a>
                )}
                {p.download && <a href={p.download}>Download debug APK ↓</a>}
                {p.release && (
                  <a href={p.release} target="_blank" rel="noreferrer">
                    Release ↗
                  </a>
                )}
                {p.publication && (
                  <a href="/publications">Read publication ↗</a>
                )}
              </div>
            </article>
          ))}
      </div>
      {featuredOnly && (
        <a className="button-text all-projects" href="/projects">
          Explore the full project collection ↗
        </a>
      )}
    </>
  );
}
