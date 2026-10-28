"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function useMotionPreference() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(preference.matches);
    sync();
    preference.addEventListener("change", sync);
    return () => preference.removeEventListener("change", sync);
  }, []);
  return reduced;
}

export function LocalTime() {
  const [time, setTime] = useState("Bengaluru, India");
  useEffect(() => {
    const update = () =>
      setTime(
        new Intl.DateTimeFormat("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date()) + " IST",
      );
    update();
    const timer = setInterval(update, 60000);
    return () => clearInterval(timer);
  }, []);
  return (
    <span className="local-time">
      <i />
      {time}
    </span>
  );
}

export function PortraitCard() {
  const reduced = useMotionPreference();
  const [turned, setTurned] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  return (
    <div className="personal-portrait">
      <div className="portrait-underlay underlay-one" aria-hidden="true">
        <span>NOTE TO SELF</span>
        <p>
          Keep asking
          <br />
          better questions.
        </p>
      </div>
      <div className="portrait-underlay underlay-two" aria-hidden="true">
        <span>currently building</span>
        <strong>Something useful.</strong>
        <div className="underlay-line" />
      </div>
      <button
        className={`portrait-object ${turned ? "is-turned" : ""}`}
        aria-label={
          turned ? "Show Pavan’s portrait" : "Turn Pavan’s portrait card"
        }
        aria-pressed={turned}
        onPointerMove={(event) => {
          if (reduced || event.pointerType !== "mouse") return;
          const r = event.currentTarget.getBoundingClientRect();
          setTilt({
            x: ((event.clientX - r.left) / r.width - 0.5) * 12,
            y: ((event.clientY - r.top) / r.height - 0.5) * -12,
          });
        }}
        onPointerLeave={() => setTilt({ x: 0, y: 0 })}
        onClick={() => setTurned(!turned)}
        style={{
          transform: reduced
            ? undefined
            : `perspective(1100px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) rotateZ(${turned ? -3 : 5}deg)`,
        }}
      >
        <span className="portrait-front" hidden={turned}>
          <Image
            src="/pavan-portrait.jpg"
            alt="Pavan"
            width={460}
            height={460}
            preload
            sizes="(max-width:760px) 72vw, 320px"
          />
          <span className="photo-caption">pavan, between builds.</span>
        </span>
        <span className="portrait-reverse" hidden={!turned}>
          <span className="postcard-to">a small introduction</span>
          <strong>Hi again.</strong>
          <span>
            I’m an AI & ML engineer at XFactr, a BITS Pilani Goa graduate, and a
            builder who likes connecting the dots.
          </span>
          <span>
            These days: agents, dependable systems, and two personal products.
          </span>
          <span className="postcard-signature">Pavan</span>
        </span>
      </button>
      <span className="portrait-annotation" aria-hidden="true">
        <svg viewBox="0 0 90 60">
          <path d="M8 50C60 60 77 30 65 8M65 8 56 22M65 8 80 19" />
        </svg>
        go on, turn it over
      </span>
    </div>
  );
}

export function StoryPassage() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useMotionPreference();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const [later, setLater] = useState(false);
  useEffect(
    () => scrollYProgress.on("change", (value) => setLater(value >= 0.62)),
    [scrollYProgress],
  );
  const firstOpacity = useTransform(scrollYProgress, [0, 0.25, 0.4], [1, 1, 0]);
  const secondOpacity = useTransform(
    scrollYProgress,
    [0.45, 0.62, 0.9],
    [0, 1, 1],
  );
  const paperY = useTransform(scrollYProgress, [0, 1], [140, -60]);
  const paperRotate = useTransform(scrollYProgress, [0, 1], [-14, -5]);
  const screenY = useTransform(scrollYProgress, [0, 1], [270, 0]);
  const screenRotate = useTransform(scrollYProgress, [0, 1], [14, 3]);
  return (
    <section
      ref={ref}
      id="approach"
      className={`story-passage palette-zone day-chapter ${reduced ? "is-reduced" : ""}`}
      data-palette-zone="morning"
      data-day-phase="morning"
      data-theme="light"
      aria-labelledby="approach-title"
    >
      <div className="passage-sticky">
        <div className="passage-stars" aria-hidden="true" />
        <svg
          className="passage-trails"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <path d="M-80 780C300 400 500 880 880 400S1280 50 1530 100" />
          <path d="M-80 820C300 440 500 920 880 440S1280 90 1530 140" />
          <path d="M-80 860C300 480 500 960 880 480S1280 130 1530 180" />
        </svg>
        <div className="passage-copy shell">
          <motion.div
            className="passage-first"
            style={reduced ? undefined : { opacity: firstOpacity }}
          >
            <p className="scene-caption">A THOUGHT THAT KEEPS ME BUILDING</p>
            <h2 id="approach-title">
              An idea is
              <br />
              <em>just the beginning.</em>
            </h2>
            <p>
              The interesting part lives between
              <br />
              “what if?” and “it works.”
            </p>
          </motion.div>
          <motion.div
            className="passage-second"
            style={reduced ? undefined : { opacity: secondOpacity }}
          >
            <span className="handwritten">so, I make things.</span>
            <h2>
              From a little thought.
              <br />
              To something
              <br />
              <em>you can actually use.</em>
            </h2>
            <a
              href="#work"
              className="scene-link"
              tabIndex={reduced || later ? 0 : -1}
            >
              Take a closer look <span>↓</span>
            </a>
          </motion.div>
        </div>
        <div className="passage-objects" aria-hidden="true">
          <motion.div
            className="idea-paper"
            style={reduced ? undefined : { y: paperY, rotate: paperRotate }}
          >
            <span>A SMALL QUESTION</span>
            <p>
              What if exam prep
              <br />
              felt a little
              <br />
              <em>less scattered?</em>
            </p>
            <svg viewBox="0 0 200 50">
              <path d="M5 35Q80 4 185 22M173 10 185 22 168 30" />
            </svg>
            <small>sketch → build → try → improve</small>
          </motion.div>
          <motion.div
            className="passage-screen"
            style={reduced ? undefined : { y: screenY, rotate: screenRotate }}
          >
            <div className="screen-top">
              <i />
              <i />
              <i />
              <span>exam-prep-king</span>
            </div>
            <Image
              src="/work/exam-dashboard.png"
              alt=""
              width={1320}
              height={920}
              sizes="500px"
            />
          </motion.div>
        </div>
        <span className="passage-scroll">
          KEEP SCROLLING <span>↓</span>
        </span>
      </div>
    </section>
  );
}

const stories = [
  {
    id: "exam",
    name: "Exam Prep King",
    note: "A calmer place for a big ambition.",
    type: "PERSONAL PRODUCT · WEB + ANDROID",
    text: "AP SI and NICL AO preparation brought together in one focused study desk. Real source papers, exam-shaped practice, and progress that stays with you.",
    details: [
      "Original paper companions & clear provenance",
      "Custom tests with the right pattern and time limits",
      "Revision, explanations & optional cloud progress",
    ],
    url: "https://lakshya-ap-si-prep.vercel.app",
    source: "https://github.com/tpavan03/lakshya-ap-si-prep",
    images: [
      {
        label: "Study desk",
        src: "/work/exam-dashboard.png",
        width: 1320,
        height: 920,
      },
      {
        label: "Welcome",
        src: "/work/exam-prep.png",
        width: 1320,
        height: 900,
      },
    ],
  },
  {
    id: "saapadu",
    name: "Saapadu",
    note: "Built around the way we eat.",
    type: "PERSONAL PRODUCT · FLUTTER + SUPABASE",
    text: "A food diary that feels familiar. South Indian meals, everyday nutrition and optional fasting windows, with a little more care and a little less noise.",
    details: [
      "Familiar foods, custom portions & macro tracking",
      "A personal fasting timer that survives closing the app",
      "Water, movement, weight trends & account backups",
    ],
    url: "https://saapadu-tracker.vercel.app",
    source: "https://github.com/tpavan03/saapadu-tracker",
    images: [
      {
        label: "Daily overview",
        src: "/work/saapadu-dashboard.png",
        width: 1440,
        height: 1000,
      },
      {
        label: "Fasting",
        src: "/work/saapadu-fasting.png",
        width: 390,
        height: 844,
      },
    ],
  },
];

export function ProductStories() {
  const [views, setViews] = useState<Record<string, number>>({});
  return (
    <div className="product-stories">
      {stories.map((story) => {
        const image = story.images[views[story.id] ?? 0];
        return (
          <article
            className={`product-story product-story-${story.id} day-chapter`}
            data-day-phase={story.id === "exam" ? "rain" : "clearing"}
            data-palette-zone={story.id === "exam" ? "rain" : "clearing"}
            data-theme="light"
            key={story.id}
          >
            <div className="product-stage" data-reveal="visual">
              <div className="stage-word" aria-hidden="true">
                {story.id === "exam" ? "a little focus." : "a little balance."}
              </div>
              <div
                className={`product-device ${(views[story.id] ?? 0) === 1 && story.id === "saapadu" ? "phone-device" : ""}`}
              >
                <div className="device-chrome" aria-hidden="true">
                  <span>
                    <i />
                    <i />
                    <i />
                  </span>
                  <small>{story.url.replace("https://", "")}</small>
                  <b>↗</b>
                </div>
                <Image
                  src={image.src}
                  alt={`${story.name} — ${image.label}, actual product screenshot${story.id === "saapadu" ? " with a sample profile" : ""}`}
                  width={image.width}
                  height={image.height}
                  sizes="(max-width:760px) 90vw, 750px"
                />
              </div>
              <div
                className="product-view-switch"
                aria-label={`${story.name} screenshots`}
              >
                {story.images.map((v, i) => (
                  <button
                    key={v.label}
                    aria-pressed={(views[story.id] ?? 0) === i}
                    onClick={() => setViews({ ...views, [story.id]: i })}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
              <span className="product-photo-note">
                Actual product screens
                {story.id === "saapadu" ? " · sample profile" : ""}
              </span>
            </div>
            <div className="product-story-copy" data-reveal="copy">
              <p className="scene-caption">{story.type}</p>
              <h3>
                {story.name}
                <span>{story.note}</span>
              </h3>
              <p>{story.text}</p>
              <ul>
                {story.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              <div className="story-links">
                <a href={story.url} target="_blank" rel="noreferrer">
                  Try the product <span>↗</span>
                </a>
                <a href={`/projects?project=${encodeURIComponent(story.name)}`}>
                  The build story <span>↗</span>
                </a>
                <a
                  href={story.source}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${story.name} source on GitHub`}
                >
                  Source
                </a>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export function ArtifactShelf() {
  return (
    <div className="artifact-shelf" aria-label="A few things from my workbench">
      <a
        href="https://github.com/tpavan03/rtos-edf-laedf-scheduler"
        target="_blank"
        rel="noreferrer"
        className="artifact artifact-terminal"
      >
        <div className="artifact-window">
          <i />
          <i />
          <i />
        </div>
        <span className="terminal-prompt">from the public source archive</span>
        <img
          className="artifact-source-image"
          src="/work/edf-output.jpg"
          alt="Historical EDF scheduler output committed to Pavan’s public repository"
          width="1280"
          height="659"
          loading="lazy"
        />
        <strong>Under the hood.</strong>
        <small>Real-time scheduling. Actual committed output.</small>
      </a>
      <a href="/publications" className="artifact artifact-paper">
        <span className="paper-venue">EAI BROADNETS 2024</span>
        <h3>
          Can a model
          <br />
          explain why
          <br />
          <em>it’s suspicious?</em>
        </h3>
        <div className="paper-highlight">
          Phishing detection & explainability
        </div>
        <div className="paper-lines" aria-hidden="true" />
        <span className="paper-authorship">A question from my research.</span>
      </a>
      <a
        href="/projects?project=BITS%20Social"
        className="artifact artifact-campus"
      >
        <div className="campus-sun" aria-hidden="true" />
        <span className="campus-word">
          BITS
          <br />
          <em>Social.</em>
        </span>
        <p>
          Campus conversations,
          <br />
          connected by systems.
        </p>
        <span className="campus-footer">
          REACT / EVENTS / DISTRIBUTED FEEDS
        </span>
      </a>
    </div>
  );
}

export function ResumeBook() {
  return (
    <a
      className="resume-book"
      href="/resume.pdf"
      target="_blank"
      rel="noreferrer"
      aria-label="Open Pavan’s résumé PDF"
    >
      <div className="book-shadow" />
      <div className="book-left">
        <span className="book-edition">A SHORT INTRODUCTION</span>
        <p>
          One part
          <br />
          <em>curiosity.</em>
          <br />
          One part
          <br />
          <em>follow-through.</em>
        </p>
        <span className="book-signature">Pavan</span>
        <small>
          AI & ML ENGINEER
          <br />
          BITS PILANI, GOA
        </small>
      </div>
      <div className="book-right">
        <Image
          src="/work/resume-preview.png"
          alt="First page of Pavan’s résumé"
          width={773}
          height={1000}
          sizes="(max-width:760px) 40vw, 330px"
        />
        <span>Open the full résumé ↗</span>
      </div>
    </a>
  );
}
