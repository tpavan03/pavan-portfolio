import { publications, techStack } from "@/data/portfolio";
import Contact from "@/components/Contact";
import Expertise from "@/components/Expertise";
import Journey from "@/components/Journey";
import {
  PortraitCard,
  LocalTime,
  StoryPassage,
  ProductStories,
  ArtifactShelf,
  ResumeBook,
} from "@/components/HomeScenes";

export default function Home() {
  return (
    <main id="main-content" className="personal-home">
      <section
        className="personal-hero palette-zone"
        data-palette-zone="paper"
        data-theme="light"
        aria-labelledby="hero-title"
      >
        <div className="arrival-note">
          <span className="arrival-wave" aria-hidden="true">
            👋
          </span>{" "}
          Glad you found your way here. <LocalTime />
        </div>
        <div className="shell personal-intro">
          <div className="personal-intro-copy">
            <p className="intro-handwriting">
              A curious mind, a builder’s hands.
            </p>
            <h1 id="hero-title">
              Hey, I’m <strong>Pavan.</strong>
            </h1>
            <p className="intro-job">
              AI & ML Engineer at{" "}
              <a href="https://xfactr.ai" target="_blank" rel="noreferrer">
                XFactr
              </a>
            </p>
            <p className="intro-description">
              I build AI agents and the systems that make them dependable. On
              the side, I turn everyday questions into small, useful products.
            </p>
            <p className="intro-history">
              Previously Netskope. M.E. at BITS Pilani, Goa.
              <br />
              Always somewhere between learning and making.
            </p>
            <div className="intro-actions">
              <a href="#contact">
                Say hello <span aria-hidden="true">↗</span>
              </a>
              <a href="/resume.pdf" target="_blank" rel="noreferrer">
                My résumé <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
          <PortraitCard />
        </div>
        <div className="hero-postscript shell">
          <span>A LITTLE ABOUT ME, A FEW THINGS I’VE MADE.</span>
          <a href="#about">
            Scroll for the longer version <span>↓</span>
          </a>
        </div>
      </section>
      <section
        className="maker-introduction shell palette-zone"
        data-palette-zone="paper"
        data-theme="light"
        id="about"
      >
        <p className="scene-caption">A BIT OF CONTEXT</p>
        <h2>
          I like connecting things.
          <br />
          <span>
            Ideas to systems.
            <br />
            Systems to people.
          </span>
        </h2>
        <p>
          Sometimes that means an agent that knows when to ask permission.
          Sometimes it’s making an exam feel less overwhelming, or a food diary
          feel a little more familiar.
        </p>
        <p className="maker-last-line">
          Different problems. The same curiosity.
        </p>
        <ArtifactShelf />
        <p className="shelf-caption">
          A few things from my workbench. <span>Pick one up to explore.</span>
        </p>
      </section>
      <StoryPassage />
      <section
        className="home-work palette-zone"
        data-palette-zone="paper"
        data-theme="light"
        id="work"
      >
        <div className="shell">
          <div className="editorial-heading">
            <p className="scene-caption">SELECTED PERSONAL BUILDS</p>
            <h2>
              Made with intent.
              <br />
              <em>Used in the real world.</em>
            </h2>
            <p>Two questions I cared enough about to build for.</p>
          </div>
          <ProductStories />
          <a className="complete-index" href="/projects">
            <span>There’s more on the workbench.</span>
            <strong>
              Explore all 10 projects <span>↗</span>
            </strong>
          </a>
        </div>
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
              <p className="eyebrow accent">THE PEOPLE & PLACES</p>
              <h2>
                A few chapters,
                <br />
                <span className="muted">still being written.</span>
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
        className="research-story palette-zone"
        data-palette-zone="lavender"
        data-theme="light"
        id="research"
      >
        <div className="shell research-story-grid">
          <div className="research-print">
            <span>EAI BROADNETS 2024</span>
            <h2>PhishBuster</h2>
            <p>
              Understanding the threat.
              <br />
              <em>Explaining the prediction.</em>
            </p>
            <div className="research-rule" />
            <small>
              URL EMBEDDINGS · DEEP LEARNING
              <br />
              INTEGRATED GRADIENTS · EXPLAINABILITY
            </small>
            <a href="/publications">Open research notes ↗</a>
          </div>
          <div className="research-story-copy">
            <p className="scene-caption">ONE QUESTION, A LITTLE DEEPER</p>
            <h2>
              “But why did
              <br />
              <em>the model say that?”</em>
            </h2>
            <p>
              That question took me into phishing detection, language-model URL
              embeddings, and explainable deep learning. The work is published
              in EAI Broadnets 2024.
            </p>
            <p>
              It also became PhishScope: an interactive workflow that makes
              evidence and human review visible. The research results and the
              public demo are different things; the project notes explain both.
            </p>
            <div className="story-links">
              <a href={publications[0].doi} target="_blank" rel="noreferrer">
                Read the paper ↗
              </a>
              <a href="/projects?project=PhishBuster%20%2F%20PhishScope">
                Explore the project ↗
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        className="builder-gallery palette-zone"
        data-palette-zone="midnight"
        data-theme="dark"
        id="systems"
      >
        <div className="shell">
          <div className="gallery-heading">
            <p className="scene-caption">FROM THE BUILD FOLDER</p>
            <h2>
              A few more windows
              <br />
              <em>into my world.</em>
            </h2>
            <p>
              Real screens, public experiments, and a few things that kept me
              curious.
            </p>
          </div>
          <div className="build-wall">
            <a
              className="build-frame build-frame-wide"
              href="/projects?project=PhishBuster%20%2F%20PhishScope"
            >
              <img
                src="/work/phishscope.png"
                alt="PhishScope public repository demo screenshot"
                width="1440"
                height="1000"
                loading="lazy"
              />
              <span>
                <strong>PhishScope</strong>
                <small>Evidence, explained.</small>
                <b>↗</b>
              </span>
            </a>
            <a
              className="build-frame build-frame-phone"
              href="/projects?project=Saapadu"
            >
              <img
                src="/work/saapadu-fasting.png"
                alt="Saapadu’s actual optional fasting timer"
                width="390"
                height="844"
                loading="lazy"
              />
              <span>
                <strong>Your meal rhythm.</strong>
                <small>Saapadu · Flutter</small>
                <b>↗</b>
              </span>
            </a>
            <a
              className="build-frame"
              href="/projects?project=Exam%20Prep%20King"
            >
              <img
                src="/work/exam-dashboard.png"
                alt="Exam Prep King study desk"
                width="1320"
                height="920"
                loading="lazy"
              />
              <span>
                <strong>A focused study desk.</strong>
                <small>Exam Prep King · React</small>
                <b>↗</b>
              </span>
            </a>
            <a className="build-frame" href="/projects?project=BITS%20Social">
              <img
                src="/work/bits-review.png"
                alt="BITS Social’s public review desk with fictional campus fixtures"
                width="1440"
                height="1217"
                loading="lazy"
              />
              <span>
                <strong>A campus, connected.</strong>
                <small>BITS Social · seeded demo</small>
                <b>↗</b>
              </span>
            </a>
            <a
              className="build-frame"
              href="/projects?project=Image%20Trust%20Desk"
            >
              <img
                src="/work/image-trust.png"
                alt="Image Trust Desk’s public policy lab, fictional signed fixtures"
                width="1440"
                height="2210"
                loading="lazy"
              />
              <span>
                <strong>Trust, made visible.</strong>
                <small>Image Trust Desk · policy demo</small>
                <b>↗</b>
              </span>
            </a>
            <a
              className="build-frame build-frame-wellbeing"
              href="/projects?project=Digital%20Wellbeing%20%E2%80%94%20Local%20Insights"
            >
              <img
                src="/work/wellbeing.png"
                alt="Digital Wellbeing Android dashboard with illustrative sample data"
                width="1080"
                height="2400"
                loading="lazy"
              />
              <span>
                <strong>A little digital balance.</strong>
                <small>Android · illustrative sample</small>
                <b>↗</b>
              </span>
            </a>
          </div>
          <div className="systems-footnote">
            <p>
              And underneath it all? A soft spot for kernels, real-time
              scheduling, distributed state, and understanding how things work.
            </p>
            <a href="/projects?category=Systems%20%26%20research">
              Explore systems projects ↗
            </a>
          </div>
        </div>
      </section>
      <section
        className="focus-section shell palette-zone"
        data-palette-zone="paper"
        data-theme="light"
        id="focus"
      >
        <div className="editorial-heading compact-heading">
          <p className="scene-caption">IF YOU’RE HERE FOR THE TECHNICAL BIT</p>
          <h2>
            What I spend
            <br />
            <em>my time thinking about.</em>
          </h2>
        </div>
        <Expertise />
        <details className="toolbox-drawer">
          <summary>
            What’s in the toolkit? <span aria-hidden="true">+</span>
          </summary>
          <div className="stack-grid">
            {techStack.map((group, index) => (
              <details key={group.category} open={index === 0}>
                <summary>
                  <h3>{group.category}</h3>
                  <span className="stack-plus" aria-hidden="true">
                    +
                  </span>
                </summary>
                <div className="tags">
                  {group.items.map((item) => (
                    <a
                      key={item}
                      href={`/projects?q=${encodeURIComponent(item)}`}
                    >
                      {item} ↗
                    </a>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </details>
      </section>
      <section
        className="contact-scene palette-zone"
        data-palette-zone="paper"
        data-theme="light"
        id="contact"
      >
        <div className="shell">
          <div className="contact-prologue">
            <p className="scene-caption">YOU’VE MADE IT TO THE LAST PAGE</p>
            <h2>
              Every good build
              <br />
              starts with <em>a conversation.</em>
            </h2>
            <p>
              Here’s a little more about me. And an open invitation to say
              hello.
            </p>
          </div>
          <ResumeBook />
          <div className="contact-conversation">
            <div>
              <span className="intro-handwriting">Have something in mind?</span>
              <h2>Let’s talk about it.</h2>
              <p>
                A role, a research question, an idea worth trying.
                <br />
                I’m listening.
              </p>
            </div>
            <Contact />
          </div>
        </div>
      </section>
    </main>
  );
}
