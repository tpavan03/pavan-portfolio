"use client";
import { useState } from "react";
import { experiences } from "@/data/portfolio";
export default function Journey() {
  const [active, setActive] = useState(0);
  const e = experiences[active];
  return (
    <div className="journey">
      <div className="journey-selector" aria-label="Choose experience">
        {experiences.map((x, i) => (
          <button
            key={x.company}
            aria-pressed={active === i}
            onClick={() => setActive(i)}
          >
            <span className="eyebrow">{x.duration}</span>
            <strong>{i === 0 ? "XFactr" : x.company}</strong>
            <small>
              {i === 0
                ? "AI & ML Engineer"
                : i === 1
                  ? "AI Intern · IPS"
                  : "Content Developer & TA"}
            </small>
            <span className="journey-indicator" aria-hidden="true">
              ↗
            </span>
          </button>
        ))}
      </div>
      <article className="journey-content" key={e.company}>
        <div className="journey-content-top">
          <p className="eyebrow accent">{e.location}</p>
          <span className="eyebrow">0{active + 1} / 03</span>
        </div>
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
      </article>
    </div>
  );
}
