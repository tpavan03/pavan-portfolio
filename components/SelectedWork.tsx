"use client";
import { useState } from "react";
import { projects } from "@/data/portfolio";
const categories = ["All work", "AI & security", "Systems & research"];
export default function SelectedWork() {
  const [filter, setFilter] = useState("All work");
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
        {projects
          .map((p, i) => ({ p, i }))
          .filter(
            ({ i }) =>
              filter === "All work" ||
              (filter === "AI & security"
                ? [1, 3].includes(i)
                : [0, 2].includes(i)),
          )
          .map(({ p, i }) => (
            <article className="project" key={p.title}>
              <div className={`project-art art-${i}`} aria-hidden="true">
                <span className="art-label">
                  {
                    [
                      "DISTRIBUTED SYSTEMS",
                      "INTELLIGENT SECURITY",
                      "COMPUTATIONAL RESEARCH",
                      "AGENTIC AI",
                    ][i]
                  }
                </span>
                {i === 0 ? (
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
                ) : i === 1 ? (
                  <div className="shield">
                    <span>✳</span>
                    <small>PhishBuster</small>
                    <div className="scan-line" />
                  </div>
                ) : i === 2 ? (
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
                <span className="art-index">0{i + 1} / SELECTED WORK</span>
              </div>
              <div className="project-heading">
                <div>
                  <p className="eyebrow">{p.subtitle}</p>
                  <h3>{p.title}</h3>
                </div>
                <span className="project-arrow">↗</span>
              </div>
              <p className="project-description">{p.description}</p>
              <div className="tags">
                {p.tech.slice(0, 4).map((t) => (
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
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer">
                    GitHub profile ↗
                  </a>
                )}
                {p.publication && (
                  <a href="/publications">Read publication ↗</a>
                )}
              </details>
            </article>
          ))}
      </div>
    </>
  );
}
