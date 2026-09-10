"use client";
import { useEffect, useState } from "react";
import { projects } from "@/data/portfolio";
const categories = ["All work", "AI & security", "Systems & research"];
export default function SelectedWork({
  featuredOnly = false,
}: {
  featuredOnly?: boolean;
}) {
  const [filter, setFilter] = useState("All work");
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState("");
  const [copied, setCopied] = useState("");
  const available = projects.filter((p) => !featuredOnly || p.featured);
  useEffect(() => {
    const sync = () => {
      const p = new URLSearchParams(location.search);
      setQuery(p.get("q") || "");
      setFilter(
        categories.includes(p.get("category") || "")
          ? p.get("category")!
          : "All work",
      );
      setExpanded(p.get("project") || "");
    };
    sync();
    window.addEventListener("popstate", sync);
    return () => window.removeEventListener("popstate", sync);
  }, []);
  function update(q: string, category: string, project = expanded) {
    setQuery(q);
    setFilter(category);
    setExpanded(project);
    const url = new URL(location.href);
    for (const [key, val] of [
      ["q", q],
      ["category", category === "All work" ? "" : category],
      ["project", project],
    ]) {
      if (val) url.searchParams.set(key, val);
      else url.searchParams.delete(key);
    }
    window.history.replaceState(null, "", url);
  }
  const visible = available.filter(
    (p) =>
      (filter === "All work" || p.category === filter) &&
      [p.title, p.subtitle, p.description, ...p.tech]
        .join(" ")
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  );
  return (
    <div className="work-index">
      <div className="work-toolbar">
        <div className="work-filters" aria-label="Filter projects">
          {categories.map((c) => (
            <button
              key={c}
              aria-pressed={filter === c}
              onClick={() => update(query, c)}
            >
              {c}
            </button>
          ))}
        </div>
        <label className="project-search">
          <span className="sr-only">Search projects</span>
          <span aria-hidden="true">⌕</span>
          <input
            name="project-search"
            placeholder="Search a project or technology…"
            autoComplete="off"
            value={query}
            onChange={(e) => update(e.target.value, filter)}
          />
        </label>
      </div>
      <div className="index-caption">
        <span>PROJECT / FOCUS</span>
        <span role="status">
          {String(visible.length).padStart(2, "0")} ENTRIES
        </span>
      </div>
      <div className="project-list">
        {visible.map((p, i) => (
          <article className="project" key={p.title}>
            <details open={expanded === p.title}>
              <summary
                onClick={(e) => {
                  e.preventDefault();
                  update(query, filter, expanded === p.title ? "" : p.title);
                }}
              >
                <span className="project-number">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="project-heading">
                  <p className="eyebrow">{p.subtitle}</p>
                  <h3>{p.title}</h3>
                  <p className="project-description">{p.description}</p>
                </div>
                <div className="project-context">
                  <span>{p.context.split(" · ")[0]}</span>
                  <span>{p.tech.slice(0, 2).join(" / ")}</span>
                </div>
                <span className="project-expand" aria-hidden="true">
                  {expanded === p.title ? "−" : "+"}
                </span>
              </summary>
              <div className="project-detail">
                <div>
                  <p className="eyebrow accent">ENGINEERING NOTES</p>
                  <ul>
                    {p.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
                <aside>
                  <p className="eyebrow">BUILT WITH</p>
                  <div className="tags">
                    {p.tech.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer">
                        Explore source & documentation ↗
                      </a>
                    )}
                    {p.download && (
                      <a href={p.download}>Download Android APK ↓</a>
                    )}
                    {p.release && (
                      <a href={p.release} target="_blank" rel="noreferrer">
                        Release notes ↗
                      </a>
                    )}
                    {p.publication && (
                      <a href="/publications">Read the publication ↗</a>
                    )}
                    {!p.github && (
                      <p className="project-private">
                        Professional / research work
                        <br />
                        Described in my résumé.
                      </p>
                    )}
                    <button
                      onClick={async () => {
                        try {
                          await navigator.clipboard.writeText(location.href);
                          setCopied(p.title);
                          setTimeout(() => setCopied(""), 2500);
                        } catch {
                          setCopied("Copy the URL from your address bar.");
                        }
                      }}
                    >
                      {copied === p.title
                        ? "Link copied ✓"
                        : "Copy project link ↗"}
                    </button>
                  </div>
                </aside>
              </div>
            </details>
          </article>
        ))}
      </div>
      {visible.length === 0 && (
        <div className="empty-state">
          <h3>No matches. A different angle?</h3>
          <p>Try Python, agents, security, or a project name.</p>
          <button
            className="button-text"
            onClick={() => update("", "All work", "")}
          >
            Clear filters ↗
          </button>
        </div>
      )}
      <span className="sr-only" role="status">
        {copied === ""
          ? ""
          : copied === "Copy the URL from your address bar."
            ? copied
            : "Project link copied"}
      </span>
      {featuredOnly && (
        <a className="all-projects" href="/projects">
          <span>There’s more beneath the surface.</span>View the complete
          project index <b>↗</b>
        </a>
      )}
    </div>
  );
}
