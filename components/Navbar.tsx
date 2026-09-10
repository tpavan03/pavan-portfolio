"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { siteConfig, projects } from "@/data/portfolio";
const links = [
  ["Work", "/#work"],
  ["Experience", "/#experience"],
  ["About", "/#about"],
  ["Contact", "/#contact"],
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("");
  const [progress, setProgress] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const commands = [
    ...links,
    ["All projects", "/projects"],
    ["Download résumé", "/resume.pdf"],
    ["GitHub", siteConfig.github],
    ["LinkedIn", siteConfig.linkedin],
    ...projects.map((p) => [
      p.title,
      `/projects?q=${encodeURIComponent(p.title)}`,
    ]),
  ];
  function closeCommand() {
    dialog.current?.close();
    setQuery("");
    trigger.current?.focus();
  }
  function openCommand() {
    dialog.current?.showModal();
    dialog.current?.querySelector<HTMLInputElement>("input")?.focus();
  }
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (dialog.current?.open) closeCommand();
        else openCommand();
      }
      if (e.key === "Escape") setOpen(false);
    };
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - innerHeight;
      setProgress(height > 0 ? scrollY / height : 0);
      const current = links
        .map(([, href]) => href.split("#")[1])
        .filter(
          (id) =>
            (document.getElementById(id)?.getBoundingClientRect().top ??
              Infinity) < 180,
        )
        .at(-1);
      setActive(current || "");
    };
    document.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return (
    <>
      <header className="site-header">
        <nav className="shell navigation" aria-label="Main navigation">
          <Link href="/" className="wordmark" aria-label="Pavan home">
            pavan
            <span className="brand-mark" aria-hidden="true">
              ✳
            </span>
            <span className="brand-note">
              AI ENGINEER
              <br />
              BANGALORE, IN
            </span>
          </Link>
          <div
            className={`nav-links ${open ? "is-open" : ""}`}
            id="navigation-links"
          >
            {links.map(([name, href], i) => (
              <Link
                key={name}
                href={href}
                onClick={() => setOpen(false)}
                aria-current={
                  pathname === "/" && active === href.split("#")[1]
                    ? "location"
                    : undefined
                }
              >
                {name}
                <span className="nav-number">0{i + 1}</span>
              </Link>
            ))}
          </div>
          <div className="nav-actions">
            <button
              ref={trigger}
              className="command-trigger"
              onClick={openCommand}
              aria-label="Open command menu"
            >
              Navigate <kbd>⌘ K</kbd>
            </button>
            <button
              className="menu-toggle"
              aria-expanded={open}
              aria-controls="navigation-links"
              onClick={() => setOpen(!open)}
            >
              {open ? "Close −" : "Menu +"}
            </button>
          </div>
        </nav>
        <div
          className="reading-progress"
          style={{ transform: `scaleX(${progress})` }}
        />
      </header>
      <dialog
        ref={dialog}
        className="command-dialog"
        aria-labelledby="command-title"
        onCancel={() => {
          setQuery("");
          trigger.current?.focus();
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeCommand();
        }}
      >
        <div className="command-head">
          <span id="command-title" className="eyebrow">
            GO SOMEWHERE INTERESTING
          </span>
          <button onClick={closeCommand} aria-label="Close command menu">
            Esc ×
          </button>
        </div>
        <input
          name="command-search"
          aria-label="Search navigation and projects"
          placeholder="A project, a page, a possibility…"
          autoComplete="off"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault();
              dialog.current
                ?.querySelector<HTMLAnchorElement>(".command-results a")
                ?.focus();
            }
          }}
        />
        <div className="command-results">
          {commands
            .filter(([name]) =>
              name.toLowerCase().includes(query.toLowerCase()),
            )
            .map(([name, href]) => (
              <a
                key={name}
                href={href}
                onClick={closeCommand}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown" || e.key === "ArrowUp") {
                    e.preventDefault();
                    const next =
                      e.key === "ArrowDown"
                        ? e.currentTarget.nextElementSibling
                        : e.currentTarget.previousElementSibling;
                    (next as HTMLElement)?.focus();
                  }
                }}
              >
                <span>{name}</span>
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          {!commands.some(([name]) =>
            name.toLowerCase().includes(query.toLowerCase()),
          ) && (
            <p className="empty-state">
              No matches. Try “research” or “PhishScope”.
            </p>
          )}
        </div>
        <p className="command-foot">
          ↑ ↓ to navigate <span>Enter to open · Esc to close</span>
        </p>
      </dialog>
    </>
  );
}
