"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollAtmosphere() {
  const pathname = usePathname();
  useEffect(() => {
    let frame = 0;
    const sync = () => {
      frame = 0;
      const sections = [
        ...document.querySelectorAll<HTMLElement>("[data-palette-zone]"),
      ];
      const atBottom =
        scrollY + innerHeight >= document.documentElement.scrollHeight - 2;
      const current = atBottom
        ? sections.at(-1)
        : (sections
            .filter(
              (section) =>
                section.getBoundingClientRect().top <= innerHeight * 0.32,
            )
            .at(-1) ?? sections[0]);
      const palette = current?.dataset.paletteZone ?? "paper";
      const theme = current?.dataset.theme ?? "light";
      document
        .querySelectorAll<HTMLElement>("[data-follow-atmosphere]")
        .forEach((target) => {
          target.dataset.palette = palette;
          target.dataset.theme = theme;
        });
      document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute(
          "content",
          palette === "cobalt"
            ? "#213f91"
            : theme === "dark"
              ? "#101827"
              : palette === "moss"
                ? "#eef5f0"
                : palette === "lavender"
                  ? "#f2eefb"
                  : "#f7f8fc",
        );
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(sync);
    };
    sync();
    addEventListener("scroll", schedule, { passive: true });
    addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      removeEventListener("scroll", schedule);
      removeEventListener("resize", schedule);
    };
  }, [pathname]);
  return null;
}
