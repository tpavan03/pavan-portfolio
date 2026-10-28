"use client";

import { useEffect, useRef } from "react";

export const dayPhases = [
  {
    key: "firstlight",
    label: "First light",
    time: "05:40",
    sky: "#e9e9f1",
    sunX: 7,
    sunY: 69,
    sea: 25,
    rain: 0,
    moon: 0,
  },
  {
    key: "sunrise",
    label: "Sunrise · the shore",
    time: "06:30",
    sky: "#ffead7",
    sunX: 12,
    sunY: 56,
    sea: 32,
    rain: 0,
    moon: 0,
  },
  {
    key: "morning",
    label: "Morning",
    time: "08:15",
    sky: "#e4f2f6",
    sunX: 35,
    sunY: 26,
    sea: 23,
    rain: 0,
    moon: 0,
  },
  {
    key: "noon",
    label: "High noon",
    time: "12:00",
    sky: "#dceef8",
    sunX: 55,
    sunY: 13,
    sea: 28,
    rain: 0,
    moon: 0,
  },
  {
    key: "rain",
    label: "A passing shower",
    time: "14:10",
    sky: "#bccbd4",
    sunX: 64,
    sunY: 25,
    sea: 39,
    rain: 1,
    moon: 0,
  },
  {
    key: "clearing",
    label: "After the rain",
    time: "15:40",
    sky: "#e2ebdb",
    sunX: 73,
    sunY: 34,
    sea: 31,
    rain: 0,
    moon: 0,
  },
  {
    key: "goldenhour",
    label: "Golden hour",
    time: "17:00",
    sky: "#f6dfb8",
    sunX: 79,
    sunY: 47,
    sea: 37,
    rain: 0,
    moon: 0,
  },
  {
    key: "sunset",
    label: "The last warm light",
    time: "18:20",
    sky: "#edc2b3",
    sunX: 84,
    sunY: 61,
    sea: 45,
    rain: 0,
    moon: 0,
  },
  {
    key: "bluehour",
    label: "Blue hour",
    time: "19:10",
    sky: "#101b30",
    sunX: 93,
    sunY: 85,
    sea: 50,
    rain: 0,
    moon: 0.5,
  },
  {
    key: "night",
    label: "Nightfall",
    time: "21:00",
    sky: "#050914",
    sunX: 100,
    sunY: 110,
    sea: 57,
    rain: 0,
    moon: 1,
  },
  {
    key: "midnight",
    label: "Midnight · open water",
    time: "00:00",
    sky: "#03050a",
    sunX: 110,
    sunY: 120,
    sea: 64,
    rain: 0,
    moon: 1,
  },
] as const;

export default function DayWorld() {
  const world = useRef<HTMLDivElement>(null);
  const caption = useRef<HTMLSpanElement>(null);
  const gateway = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = world.current;
    if (!node) return;
    const chapters = [
      ...document.querySelectorAll<HTMLElement>(".day-chapter[data-day-phase]"),
    ];
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let lastPhase = "";
    const depthTargets = new Map(
      chapters.map((chapter) => [
        chapter,
        chapter.id === "work"
          ? null
          : chapter.querySelector<HTMLElement>(":scope > .chapter-depth"),
      ]),
    );
    const lastTransforms = new Map<HTMLElement, string>();
    const sync = () => {
      frame = 0;
      const height = innerHeight;
      const positions = chapters.map((chapter) => ({
        chapter,
        rect: chapter.getBoundingClientRect(),
      }));
      const atBottom =
        scrollY + height >= document.documentElement.scrollHeight - 2;
      const active =
        (atBottom
          ? positions.at(-1)
          : positions
              .filter((item) => item.rect.top <= height * 0.32)
              .at(-1)) ?? positions[0];
      const index = Math.max(
        0,
        dayPhases.findIndex(
          (phase) => phase.key === active?.chapter.dataset.dayPhase,
        ),
      );
      const phase = dayPhases[index];
      const next = positions[positions.indexOf(active) + 1];
      const entry = next
        ? Math.max(
            0,
            Math.min(1, (height * 0.85 - next.rect.top) / (height * 0.53)),
          )
        : 0;
      const portal = media.matches ? 0 : Math.sin(entry * Math.PI);
      const local = Math.max(
        0,
        Math.min(
          1,
          -(active?.rect.top ?? 0) /
            Math.max(1, (active?.rect.height ?? height) - height * 0.3),
        ),
      );

      if (lastPhase !== phase.key) {
        lastPhase = phase.key;
        document.body.dataset.daySky = phase.key;
        node.dataset.activePhase = phase.key;
        node.dataset.rain = phase.rain ? "true" : "false";
        node.dataset.moon = phase.moon ? "true" : "false";
        node.dataset.ocean = index >= 8 ? "deep" : "shore";
        node.dataset.reducedMotion = String(media.matches);
        node.style.setProperty("--sun-x", `${phase.sunX}%`);
        node.style.setProperty("--sun-y", `${phase.sunY}%`);
        node.style.setProperty("--sea-level", `${phase.sea}%`);
        node.style.setProperty("--moon-opacity", String(phase.moon));
        if (caption.current)
          caption.current.textContent = `${phase.label} · ${phase.time}`;
      }
      node.dataset.reducedMotion = String(media.matches);
      node.style.setProperty(
        "--world-drift",
        `${media.matches ? 0 : local * 28}px`,
      );
      if (gateway.current) {
        gateway.current.dataset.activePhase = phase.key;
        gateway.current.style.opacity = media.matches
          ? "0"
          : String(portal * 0.9);
        gateway.current.style.transform = `scale(${1.22 - portal * 0.22})`;
        gateway.current.style.setProperty(
          "--gateway-color",
          index >= 8 ? "#24354a" : phase.sky,
        );
      }
      positions.forEach(({ chapter, rect }) => {
        const target = depthTargets.get(chapter);
        if (!target) return;
        if (!media.matches && (rect.bottom < 0 || rect.top > height * 1.2))
          return;
        const entry = Math.max(
          0,
          Math.min(1, (height * 0.9 - rect.top) / (height * 0.75)),
        );
        const transform = media.matches
          ? "none"
          : `translate3d(0,${((1 - entry) * 55).toFixed(1)}px,0) scale(${(0.92 + entry * 0.08).toFixed(4)})`;
        if (lastTransforms.get(target) !== transform) {
          target.style.transform = transform;
          lastTransforms.set(target, transform);
        }
      });
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(sync);
    };
    const resize = new ResizeObserver(schedule);
    const main = document.querySelector(".personal-home");
    if (main) resize.observe(main);
    document.body.dataset.dayJourney = "true";
    sync();
    addEventListener("scroll", schedule, { passive: true });
    addEventListener("resize", schedule);
    media.addEventListener("change", schedule);
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      removeEventListener("scroll", schedule);
      removeEventListener("resize", schedule);
      media.removeEventListener("change", schedule);
      delete document.body.dataset.dayJourney;
      delete document.body.dataset.daySky;
    };
  }, []);

  return (
    <>
      <div
        ref={world}
        id="day-world"
        className="day-world"
        data-active-phase="firstlight"
        data-rain="false"
        data-moon="false"
        data-ocean="shore"
        aria-hidden="true"
      >
        <div className="world-sky" />
        <div className="world-stars">
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="world-sun">
          <div />
        </div>
        <svg className="world-moon" viewBox="0 0 100 100">
          <defs>
            <mask id="coastal-moon">
              <rect width="100" height="100" fill="white" />
              <circle cx="67" cy="30" r="34" fill="black" />
            </mask>
          </defs>
          <circle
            cx="50"
            cy="50"
            r="36"
            fill="#f1f0db"
            mask="url(#coastal-moon)"
          />
          <circle cx="35" cy="57" r="4" fill="#b8bdc3" opacity=".3" />
        </svg>
        <svg className="world-cloud cloud-far" viewBox="0 0 800 260">
          <path d="M-30 210Q-10 130 95 147Q120 40 240 91Q280 2 390 45Q450 15 515 90Q640 55 665 145Q790 130 830 210Z" />
        </svg>
        <svg className="world-cloud cloud-middle" viewBox="0 0 800 260">
          <path d="M-30 210Q-10 130 95 147Q120 40 240 91Q280 2 390 45Q450 15 515 90Q640 55 665 145Q790 130 830 210Z" />
        </svg>
        <svg className="world-cloud cloud-near" viewBox="0 0 800 260">
          <path d="M-30 210Q-10 130 95 147Q120 40 240 91Q280 2 390 45Q450 15 515 90Q640 55 665 145Q790 130 830 210Z" />
        </svg>
        <svg className="world-birds" viewBox="0 0 300 100">
          <path d="M10 45Q25 30 40 45Q55 30 70 45M110 20Q120 10 130 20Q140 10 150 20M205 65Q215 55 225 65Q235 55 245 65" />
        </svg>
        <div className="world-sea">
          <div className="water-path" />
          <div className="water-lines" />
          <svg
            className="sea-wave wave-far"
            viewBox="0 0 1440 180"
            preserveAspectRatio="none"
          >
            <path d="M0 55Q180 5 360 55T720 55T1080 55T1440 55V180H0Z" />
          </svg>
          <svg
            className="sea-wave wave-middle"
            viewBox="0 0 1440 180"
            preserveAspectRatio="none"
          >
            <path d="M0 65Q180 10 360 65T720 65T1080 65T1440 65V180H0Z" />
          </svg>
          <svg
            className="sea-wave wave-near"
            viewBox="0 0 1440 180"
            preserveAspectRatio="none"
          >
            <path d="M0 70Q180 20 360 70T720 70T1080 70T1440 70V180H0Z" />
          </svg>
        </div>
        <svg
          className="world-beach"
          viewBox="0 0 1440 300"
          preserveAspectRatio="none"
        >
          <path
            className="beach-sand"
            d="M0 70Q250 215 550 115T1100 155T1440 60V300H0Z"
          />
          <path
            className="beach-dune"
            d="M0 155Q220 55 420 180T920 205T1440 160V300H0Z"
          />
          <path
            className="beach-grass"
            d="M100 235q-5-65-20-85m20 85q8-80 25-100m-25 100q-1-55-32-63M1240 250q-12-80-32-90m32 90q6-100 20-128m-20 128q20-70 45-85"
          />
        </svg>
        <div className="world-rain">
          {Array.from({ length: 36 }, (_, index) => (
            <i
              key={index}
              style={{
                left: `${(index * 37) % 103}%`,
                animationDelay: `-${(index % 9) * 0.19}s`,
                animationDuration: `${0.7 + (index % 5) * 0.12}s`,
              }}
            />
          ))}
        </div>
      </div>
      <div ref={gateway} className="world-gateway" aria-hidden="true">
        <svg
          className="gateway-left"
          viewBox="0 0 350 1000"
          preserveAspectRatio="none"
        >
          <path d="M0 0H300Q100 100 180 260Q50 360 150 500Q30 640 180 780Q100 910 300 1000H0Z" />
          <path d="M0 0H180Q40 180 90 300Q-20 480 70 640Q0 800 170 1000H0Z" />
        </svg>
        <svg
          className="gateway-right"
          viewBox="0 0 350 1000"
          preserveAspectRatio="none"
        >
          <path d="M0 0H300Q100 100 180 260Q50 360 150 500Q30 640 180 780Q100 910 300 1000H0Z" />
          <path d="M0 0H180Q40 180 90 300Q-20 480 70 640Q0 800 170 1000H0Z" />
        </svg>
        <div className="gateway-rim" />
      </div>
      <div className="day-caption">
        <span>A DAY OF MAKING</span>
        <span ref={caption}>First light · 05:40</span>
      </div>
    </>
  );
}
