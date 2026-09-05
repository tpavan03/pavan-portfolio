import {
  education,
  experiences,
  publications,
  siteConfig,
  techStack,
} from "@/data/portfolio";
import SelectedWork from "@/components/SelectedWork";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <main id="main-content">
      <section className="hero shell">
        <div className="hero-meta">
          <span>
            <i className="status-dot" /> AI / ML ENGINEER
          </span>
          <span>BANGALORE, INDIA · IST</span>
        </div>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-intro">Hi, I’m Pavan.</p>
            <h1>
              Intelligence.
              <br />
              Engineered<span className="orange">.</span>
            </h1>
            <p className="hero-description">
              I turn complex problems into intelligent systems.
              <br className="desktop-break" /> Applied AI, thoughtful
              infrastructure, and code
              <br className="desktop-break" /> that works beyond the notebook.
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
                View résumé <span>↗</span>
              </a>
            </div>
          </div>
          <div
            className="hero-visual"
            aria-label="Abstract connected intelligence sculpture"
          >
            <div className="visual-grid" />
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />
            <div className="core">✳</div>
            <span className="visual-coordinate coordinate-top">
              SYSTEM_01
              <br />
              HUMAN × MACHINE
            </span>
            <span className="visual-coordinate coordinate-bottom">
              IDEA → MODEL → IMPACT
            </span>
            <div className="visual-badge">
              <span className="status-dot" /> Building with purpose
            </div>
          </div>
        </div>
        <div className="hero-bottom">
          <span>SCROLL TO EXPLORE ↓</span>
          <span>
            AI ENGINEERING &nbsp; / &nbsp; BACKEND SYSTEMS &nbsp; / &nbsp;
            RESEARCH
          </span>
        </div>
      </section>
      <div className="marquee" aria-label="Specialties">
        <div>
          APPLIED AI <span>✳</span> DISTRIBUTED SYSTEMS <span>✳</span> MACHINE
          LEARNING <span>✳</span> INTELLIGENT SECURITY <span>✳</span>
        </div>
      </div>
      <section className="shell section" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / SELECTED WORK</p>
            <h2>
              Built to solve.
              <br />
              <span className="muted">Designed to scale.</span>
            </h2>
          </div>
          <p>
            A selection of systems at the intersection of
            <br />
            machine intelligence and real-world impact.
          </p>
        </div>
        <SelectedWork />
      </section>
      <section className="experience-section" id="experience">
        <div className="shell section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / EXPERIENCE</p>
              <h2>
                From experiments
                <br />
                to production.
              </h2>
            </div>
            <span className="outline-label">THE JOURNEY SO FAR ↙</span>
          </div>
          {experiences.map((e) => (
            <article className="experience-row" key={e.company + e.role}>
              <div>
                <p className="eyebrow">{e.duration}</p>
                <h3>
                  {e.company}
                  <span className="orange">.</span>
                </h3>
                <p>{e.location}</p>
              </div>
              <div>
                <h4>{e.role}</h4>
                <ul>
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <div className="tags">
                  {e.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
          <div className="stats">
            <div>
              <strong>
                4.25M<span>+</span>
              </strong>
              <p>Security events processed</p>
            </div>
            <div>
              <strong>
                99.9<span>%</span>
              </strong>
              <p>Reported phishing research accuracy</p>
            </div>
            <div>
              <strong>
                10<span>×</span>
              </strong>
              <p>Thesis optimization runtime reduction</p>
            </div>
          </div>
        </div>
      </section>
      <section className="shell section about-section" id="about">
        <div>
          <p className="eyebrow">03 / A LITTLE ABOUT ME</p>
          <h2>
            Curiosity is
            <br />
            the constant<span className="orange">.</span>
          </h2>
          <div className="about-stamp" aria-hidden="true">
            p<span>✳</span>
          </div>
        </div>
        <div className="about-copy">
          <p className="large-copy">
            I’m {siteConfig.name}, an engineer drawn to the space where research
            becomes something useful.
          </p>
          <p>{siteConfig.bio}</p>
          <p>
            From understanding security signals to optimizing chip networks, I
            enjoy turning difficult questions into clear, dependable systems.
          </p>
          <div className="education">
            {education.map((e) => (
              <div key={e.degree}>
                <span>{e.duration}</span>
                <h4>{e.degree}</h4>
                <p>
                  {e.institution} <b>{e.score}</b>
                </p>
              </div>
            ))}
          </div>
          <a className="button-text" href="/resume.pdf" download>
            Download full résumé ↓
          </a>
        </div>
      </section>
      <section className="shell stack-section">
        <p className="eyebrow">THE TOOLKIT / CHOSEN FOR THE PROBLEM</p>
        <div className="stack-grid">
          {techStack.map((s) => (
            <div key={s.category}>
              <h3>{s.category}</h3>
              <p>{s.items.join(" · ")}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="shell section research">
        <p className="eyebrow">04 / PUBLISHED RESEARCH</p>
        {publications.map((p) => (
          <a href={p.doi} target="_blank" rel="noreferrer" key={p.title}>
            <div>
              <p>
                {p.venue} <span>· {p.published}</span>
              </p>
              <h2>{p.title}</h2>
              <p>Deep learning meets intelligent security.</p>
            </div>
            <span className="research-arrow">↗</span>
          </a>
        ))}
      </section>
      <section id="contact" className="contact-section">
        <div className="shell">
          <p className="eyebrow">HAVE AN INTERESTING CHALLENGE?</p>
          <h2>
            Let’s build
            <br />
            what’s next<span>↗</span>
          </h2>
          <div className="contact-bottom">
            <p>
              AI products, scalable systems, or a good conversation.
              <br />
              I’d love to hear what you’re working on.
            </p>
            <Contact />
          </div>
        </div>
      </section>
    </main>
  );
}
