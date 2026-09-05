"use client";
import Link from "next/link";
import { useState } from "react";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <nav className="navigation">
        <Link href="/" className="wordmark" aria-label="Pavan home">
          pavan<span>®</span>
        </Link>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="navigation-links"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close −" : "Menu +"}
        </button>
        <div
          id="navigation-links"
          className={`nav-links ${open ? "is-open" : ""}`}
        >
          {[
            ["Work", "/#work"],
            ["Experience", "/#experience"],
            ["About", "/#about"],
          ].map(([name, href]) => (
            <Link onClick={() => setOpen(false)} key={name} href={href}>
              {name}
            </Link>
          ))}
          <a
            className="nav-contact"
            onClick={() => setOpen(false)}
            href="/#contact"
          >
            Let’s talk <span>↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
