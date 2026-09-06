"use client";

import { useLayoutEffect, useRef, useState } from "react";

type Theme = "light" | "dark";
const storageKey = "portfolio-theme";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const preference = useRef<Theme | null>(null);

  useLayoutEffect(() => {
    const apply = () => {
      const theme = preference.current ?? "light";
      document.documentElement.dataset.theme = theme;
      setDark(theme === "dark");
    };
    const readPreference = () => {
      try {
        const stored = localStorage.getItem(storageKey);
        preference.current =
          stored === "dark" || stored === "light" ? stored : null;
      } catch {
        // Browsers can disable storage; the switch still works for this visit.
      }
      apply();
    };
    const sync = (event: StorageEvent) => {
      if (event.key === storageKey || event.key === null) readPreference();
    };
    readPreference();
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("storage", sync);
    };
  }, []);

  function toggle() {
    const next =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    preference.current = next;
    document.documentElement.dataset.theme = next;
    setDark(next === "dark");
    try {
      localStorage.setItem(storageKey, next);
    } catch {
      // Keep the selected theme even when persistence is unavailable.
    }
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label="Night mode"
      aria-pressed={dark}
      title="Toggle night mode"
      onClick={toggle}
    >
      <svg
        className="theme-moon"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        aria-hidden="true"
      >
        <path d="M20.8 13.3A9 9 0 0 1 10.7 3.2a9 9 0 1 0 10.1 10.1Z" />
      </svg>
      <svg
        className="theme-sun"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    </button>
  );
}
