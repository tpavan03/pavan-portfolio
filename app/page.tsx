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
      <section className="shell hero" aria-labelledby="hero-title">
        <div className="hero-topline">
          <p className="eyebrow">
            <span className="status-dot" /> AI & ML ENGINEER · XFACTR
          </p>
          <span className="eyebrow">SELECTED WORK / 2026</span>
        </div>
        <p className="hero-intro">Hi, I’m Pavan. I turn complex ideas into</p>
        <h1 id="hero-title">
          Intelligence
          <span className="hero-line">
            with <em>intent.</em>
            <span className="hero-asterisk" aria-hidden="true">
              ✳
            </span>
          </span>
        </h1>
        <div className="hero-lower">
          <span className="hero-margin-note">
            01 — THINK
            <br />
            02 — BUILD
            <br />
            03 — REFINE
          </span>
          <p>
            AI agents that act. Systems that hold up.
            <br />
            From voice interfaces to secure runtimes,
            <br />I build the engineering around intelligence.
          </p>
          <div className="hero-actions">
            <a className="button-primary" href="#work">
              Explore my work <span>↘</span>
            </a>
            <a
              className="button-text"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              The résumé <span>↗</span>
            </a>
          </div>
        </div>
        <div className="hero-bottom">
          <span>
            BANGALORE, INDIA <span className="muted">/ 12.97° N, 77.59° E</span>
          </span>
          <a href="#focus">A LITTLE FURTHER DOWN ↓</a>
        </div>
      </section>
      <section className="focus-section shell" id="focus">
        <div className="section-kicker">
          <span className="eyebrow">THE INTERSECTION</span>
          <p>Three disciplines. One connected approach.</p>
        </div>
        <Expertise />
      </section>
      <section className="section shell" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow accent">01 / THE WORK</p>
            <h2>
              Less noise.
              <br />
              <span className="muted">More substance.</span>
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
      <section className="experience-section" id="experience">
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
      <section className="shell section about-section" id="about">
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
      <section className="shell toolkit">
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
      <section className="shell section research" id="research">
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
      <section className="shell systems-section" id="systems">
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
      <section className="contact-section" id="contact">
        <div className="shell contact-grid">
          <div>
            <p className="eyebrow">04 / THE NEXT CONVERSATION</p>
            <h2>
              Something
              <br />
              on your
              <br />
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
