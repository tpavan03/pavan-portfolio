import Image from "next/image";
import {
  education,
  publications,
  siteConfig,
  techStack,
} from "@/data/portfolio";
import SelectedWork from "@/components/SelectedWork";
import Contact from "@/components/Contact";
import Expertise from "@/components/Expertise";
import Journey from "@/components/Journey";
const systems = [
  ["Real-time scheduling", "C / FreeRTOS / EDF", "rtos-edf-laedf-scheduler"],
  [
    "Kernel-to-userspace audio",
    "Linux / Netlink / ALSA",
    "linux-kernel-syscall-audio-controller-main",
  ],
  [
    "NFS protocol simulation",
    "File handles / Durable state",
    "nfs-protocol-sim",
  ],
  [
    "Disk scheduling analysis",
    "DiskSim / SSTF / Traces",
    "distributed-systems-disk-scheduling",
  ],
];
export default function Home() {
  return (
    <main id="main-content">
      <section
        className="shell hero notebook-hero palette-zone"
        data-palette-zone="paper"
        data-theme="light"
        aria-labelledby="hero-title"
      >
        <div className="hero-copy">
          <p className="hero-greeting">
            <span className="hello-dot" /> Hello, I’m Pavan.
          </p>
          <h1 id="hero-title">
            Engineering
            <br />
            with a{" "}
            <span className="human-word">
              human touch
              <svg viewBox="0 0 420 20" aria-hidden="true">
                <path d="M4 13C104 1 238 2 415 10M48 19C168 7 293 8 377 14" />
              </svg>
            </span>
          </h1>
          <p className="hero-description">
            I build AI agents, dependable systems, and thoughtful digital
            products. The interesting part? Making the complicated feel simple.
          </p>
          <div className="hero-role">
            <span>AI & ML Engineer</span>
            <span className="role-divider" />
            <span>
              Currently at <strong>XFactr</strong>
            </span>
          </div>
          <div className="hero-actions">
            <a className="button-primary" href="#work">
              Explore the work <span>↗</span>
            </a>
            <a
              className="button-outline"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              My résumé <span>↓</span>
            </a>
          </div>
          <div className="hero-socials">
            <a href={siteConfig.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a href={`mailto:${siteConfig.email}`}>Say hello ↗</a>
          </div>
        </div>
        <div className="portrait-composition">
          <div className="portrait-backdrop" aria-hidden="true">
            <span>CURIOUS BY DEFAULT.</span>
            <svg viewBox="0 0 400 400">
              <path d="M40 210C-30 90 280-20 330 100S190 400 80 310 260 100 380 230" />
            </svg>
          </div>
          <figure className="portrait-frame">
            <Image
              src="/pavan-portrait.jpg"
              alt="Pavan"
              width={460}
              height={460}
              preload
              sizes="(max-width: 700px) 75vw, 350px"
            />
            <figcaption>
              <span className="portrait-signature">Pavan</span>
              <span>
                Engineer. Researcher.
                <br />
                Always a work in progress.
              </span>
            </figcaption>
          </figure>
          <div className="portrait-sticker">
            <span>✳</span> A little curiosity
            <br />
            goes a long way.
          </div>
        </div>
        <div className="hero-bottom">
          <span>GOOD SYSTEMS BEGIN WITH GOOD QUESTIONS.</span>
          <a href="#focus">
            A few things I care about <span>↓</span>
          </a>
        </div>
      </section>
      <section
        className="focus-section shell palette-zone"
        data-palette-zone="paper"
        data-theme="light"
        id="focus"
      >
        <div className="section-kicker">
          <span className="eyebrow">THE INTERSECTION</span>
          <p>Three disciplines. One connected approach.</p>
        </div>
        <Expertise />
      </section>
      <section
        className="statement-zone palette-zone"
        id="approach"
        data-palette-zone="midnight"
        data-theme="dark"
        aria-labelledby="approach-title"
      >
        <div className="shell statement-grid">
          <div>
            <p className="eyebrow">THE ENGINEERING AROUND INTELLIGENCE</p>
            <h2 id="approach-title">
              The model is
              <br />
              <span>only the beginning.</span>
            </h2>
            <p className="statement-copy">
              A useful agent needs more than a good answer. It needs context,
              the right tools, a way to ask permission, and a way to recover.
              That’s the part I love building.
            </p>
            <a className="button-text" href="#work">
              See how it comes together <span>↓</span>
            </a>
          </div>
          <div className="system-art" aria-hidden="true">
            <div className="system-art-orbit orbit-one" />
            <div className="system-art-orbit orbit-two" />
            <div className="system-core">
              intent<span>→</span>action
            </div>
            <span className="system-node node-context">Context</span>
            <span className="system-node node-tools">Tools</span>
            <span className="system-node node-human">Human approval</span>
            <span className="system-node node-state">Durable state</span>
            <span className="system-node node-recovery">Recovery</span>
          </div>
        </div>
      </section>
      <section
        className="section shell palette-zone"
        data-palette-zone="paper"
        data-theme="light"
        id="work"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow accent">01 / THE WORK</p>
            <h2>
              Ideas, brought
              <br />
              <span className="muted">into the world.</span>
            </h2>
          </div>
          <p>
            Professional systems, independent projects,
            <br />
            and research that asks better questions.
            <br />
            <span className="subtle-note">
              Open a project to get under the hood.
            </span>
          </p>
        </div>
        <SelectedWork featuredOnly />
      </section>
      <section
        className="experience-section palette-zone"
        data-palette-zone="moss"
        data-theme="light"
        id="experience"
      >
        <div className="shell section">
          <div className="section-heading">
            <div>
              <p className="eyebrow accent">02 / THE TRAJECTORY</p>
              <h2>
                Built through
                <br />
                <span className="muted">experience.</span>
              </h2>
            </div>
            <a className="button-text" href="/experience">
              Read the full story ↗
            </a>
          </div>
          <Journey />
          <div className="metrics">
            <div>
              <span className="eyebrow">SECURITY / NETSKOPE</span>
              <strong>
                4.25<span>M</span>
              </strong>
              <p>IPS events in the ML pipeline</p>
            </div>
            <div>
              <span className="eyebrow">IMPACT / NETSKOPE</span>
              <strong>
                80<span>%</span>
              </strong>
              <p>Reported reduction in manual triage</p>
            </div>
            <div>
              <span className="eyebrow">TEACHING / BITS DIGITAL</span>
              <strong>
                500<span>+</span>
              </strong>
              <p>Students supported each trimester</p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="shell section about-section palette-zone"
        data-palette-zone="paper"
        data-theme="light"
        id="about"
      >
        <div className="about-title">
          <p className="eyebrow accent">03 / BEHIND THE WORK</p>
          <h2>
            An engineer.
            <br />A researcher.
            <br />
            <em>Always curious.</em>
          </h2>
          <a className="button-text" href="/resume.pdf" download>
            Download résumé ↓
          </a>
        </div>
        <div className="about-copy">
          <p className="large-copy">
            I’m {siteConfig.name}. I like the difficult bit between “what if”
            and “it works.”
          </p>
          <p>{siteConfig.bio}</p>
          <p>
            My interests go deep: learning how a model sees a URL, how an agent
            recovers mid-conversation, and how a kernel talks to the world.
            Teaching keeps me asking the simple questions.
          </p>
          <div className="education">
            {education.map((e) => (
              <article key={e.degree}>
                <span className="eyebrow">{e.duration}</span>
                <h3>{e.degree}</h3>
                <p>{e.institution}</p>
                <strong>{e.score}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section
        className="shell toolkit palette-zone"
        data-palette-zone="paper"
        data-theme="light"
      >
        <div className="section-kicker">
          <p className="eyebrow">THE TOOLKIT</p>
          <p>Chosen for the problem. Never the other way around.</p>
        </div>
        <div className="stack-grid">
          {techStack.map((s, i) => (
            <details key={s.category} open={i === 0}>
              <summary>
                <span className="eyebrow">0{i + 1}</span>
                <h3>{s.category}</h3>
                <span className="stack-plus" aria-hidden="true">
                  +
                </span>
              </summary>
              <div className="tags">
                {s.items.map((t) => (
                  <a key={t} href={`/projects?q=${encodeURIComponent(t)}`}>
                    {t} ↗
                  </a>
                ))}
              </div>
            </details>
          ))}
        </div>
      </section>
      <section
        className="shell section research palette-zone"
        data-palette-zone="lavender"
        data-theme="light"
        id="research"
      >
        <div className="research-label">
          <p className="eyebrow accent">PEER-REVIEWED / PUBLISHED</p>
          <span className="research-mark" aria-hidden="true">
            [ P ]
          </span>
          <p className="eyebrow">
            EAI BROADNETS 2024
            <br />
            PUBLISHED JAN 2026
          </p>
        </div>
        <div>
          <p className="eyebrow">EXPLAINABLE INTELLIGENCE</p>
          <h2>
            PhishBuster<span className="accent">.</span>
          </h2>
          <p className="large-copy">
            Understanding the threat.
            <br />
            Explaining the prediction.
          </p>
          <p>
            URL embeddings meet deep learning and Integrated Gradients. Research
            into phishing detection that makes room for the question: why?
          </p>
          <div className="research-links">
            <a
              className="button-primary"
              href={publications[0].doi}
              target="_blank"
              rel="noreferrer"
            >
              Read the paper ↗
            </a>
            <a className="button-text" href="/publications">
              Research & education ↗
            </a>
          </div>
        </div>
      </section>
      <section
        className="shell systems-section palette-zone"
        data-palette-zone="midnight"
        data-theme="dark"
        id="systems"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow accent">BENEATH THE SURFACE</p>
            <h2>Down to the system.</h2>
          </div>
          <p>
            The lower-level explorations
            <br />
            behind the higher-level thinking.
          </p>
        </div>
        <div className="systems-list">
          {systems.map(([title, tech, repo], i) => (
            <a
              key={repo}
              href={`https://github.com/tpavan03/${repo}`}
              target="_blank"
              rel="noreferrer"
            >
              <span className="eyebrow">0{i + 1}</span>
              <h3>{title}</h3>
              <small>{tech}</small>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>
      <section
        className="contact-section palette-zone"
        data-palette-zone="cobalt"
        data-theme="dark"
        id="contact"
      >
        <div className="shell contact-grid">
          <div>
            <p className="eyebrow">04 / THE NEXT CONVERSATION</p>
            <h2>
              Something <br />
              on your <br />
              <em>mind?</em>
              <span aria-hidden="true">↗</span>
            </h2>
            <p>
              Let’s turn a good question
              <br />
              into something worth building.
            </p>
          </div>
          <Contact />
        </div>
      </section>
    </main>
  );
}
