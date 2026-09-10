"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
export default function ScrollReveal() {
  const pathname = usePathname();
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.animate(
            [
              { opacity: 0.35, transform: "translateY(20px)" },
              { opacity: 1, transform: "translateY(0)" },
            ],
            { duration: 550, easing: "cubic-bezier(.2,.7,.2,1)" },
          );
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 },
    );
    document
      .querySelectorAll(
        ".section-heading,.about-title,.research,.metrics,.section-kicker",
      )
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);
  return null;
}
