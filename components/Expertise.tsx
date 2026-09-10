"use client";
import { useState } from "react";
const areas = [
  {
    name: "Agentic AI",
    line: "From a prompt to a purposeful action.",
    text: "Tool-calling agents, human approvals, durable conversations and voice interfaces. I build the full workflow around the model.",
    tags: ["Orchestration", "Tool calling", "Voice AI", "Human in the loop"],
    path: "Intent → Reason → Tools → Approval → Action",
    link: "/projects?q=AgentHRMS",
  },
  {
    name: "Secure systems",
    line: "Intelligence needs solid foundations.",
    text: "Tenant isolation, identity, streaming gateways and restart recovery. Dependable infrastructure for agents working in the real world.",
    tags: ["C++17 / Go", "gRPC", "OIDC / mTLS", "Distributed state"],
    path: "Identity → Policy → Runtime → Recovery",
    link: "/projects?q=Secure Agent",
  },
  {
    name: "Applied ML",
    line: "Models you can inspect. Results you can explain.",
    text: "Security-event classification, URL embeddings and interpretable deep learning. Research connected to concrete engineering problems.",
    tags: ["PyTorch", "LightGBM", "Transformers", "Explainability"],
    path: "Data → Features → Model → Explanation",
    link: "/projects?q=Phish",
  },
];
export default function Expertise() {
  const [selected, setSelected] = useState(0);
  const area = areas[selected];
  return (
    <div className="expertise-panel">
      <div
        className="expertise-tabs"
        role="tablist"
        aria-label="Areas of expertise"
      >
        {areas.map((a, i) => (
          <button
            key={a.name}
            role="tab"
            id={`area-tab-${i}`}
            aria-selected={i === selected}
            aria-controls="expertise-detail"
            tabIndex={i === selected ? 0 : -1}
            onClick={() => setSelected(i)}
            onKeyDown={(e) => {
              if (["ArrowRight", "ArrowLeft", "Home", "End"].includes(e.key)) {
                e.preventDefault();
                const n =
                  e.key === "Home"
                    ? 0
                    : e.key === "End"
                      ? 2
                      : (selected + (e.key === "ArrowRight" ? 1 : 2)) % 3;
                setSelected(n);
                document.getElementById(`area-tab-${n}`)?.focus();
              }
            }}
          >
            <span>0{i + 1}</span>
            {a.name}
            <b aria-hidden="true">↗</b>
          </button>
        ))}
      </div>
      <div
        className="expertise-detail"
        id="expertise-detail"
        role="tabpanel"
        aria-labelledby={`area-tab-${selected}`}
      >
        <div key={area.name} className="detail-enter">
          <p className="eyebrow accent">THE FOCUS</p>
          <h3>{area.line}</h3>
          <p>{area.text}</p>
          <div className="tags">
            {area.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
        <div className="expertise-path">
          <span className="eyebrow">HOW THE PIECES CONNECT</span>
          <p>{area.path}</p>
          <a href={area.link}>
            Explore related work <span>↗</span>
          </a>
        </div>
      </div>
    </div>
  );
}
