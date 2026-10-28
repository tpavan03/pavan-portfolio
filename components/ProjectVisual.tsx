import type { Project } from "@/data/portfolio";

export default function ProjectVisual({ project }: { project: Project }) {
  return (
    <div className={`project-visual visual-${project.art}`} aria-hidden="true">
      <div className="visual-window">
        <div className="visual-window-bar">
          <span />
          <span />
          <span />
          <small>
            {project.art === "exam"
              ? "exam prep king"
              : project.art === "wellness"
                ? "saapadu."
                : project.art === "agents"
                  ? "intent → action"
                  : project.art === "security"
                    ? "trust, by design"
                    : project.art === "social"
                      ? "a connected campus"
                      : "below the surface"}
          </small>
        </div>
        {project.art === "exam" ? (
          <div className="exam-illustration">
            <span className="visual-label">ONE GOAL. A CLEARER ROUTE.</span>
            <strong>
              Prepare with
              <br />a little more purpose.
            </strong>
            <div>
              <b>AP SI</b>
              <b>NICL AO</b>
            </div>
            <p>
              PRELIMS <span>→</span> MAINS <span>→</span> YOUR NEXT STEP
            </p>
          </div>
        ) : project.art === "wellness" ? (
          <div className="wellness-illustration">
            <div className="plate">
              <span>saapadu.</span>
              <svg viewBox="0 0 80 80">
                <path d="M18 44h44c0 18-44 18-44 0Z" />
                <path
                  d="M26 30c-7-8 7-9 0-17M40 30c-7-8 7-9 0-17M54 30c-7-8 7-9 0-17"
                  fill="none"
                />
              </svg>
            </div>
            <div>
              <strong>
                Your plate.
                <br />
                Your pace.
              </strong>
              <p>Food · Wellness · Fasting</p>
              <span className="wellness-bars">
                <i />
                <i />
                <i />
              </span>
            </div>
          </div>
        ) : project.art === "agents" ? (
          <div className="agent-illustration">
            <div className="agent-orbit">
              <i />
              <i />
              <i />
              <span>AI</span>
            </div>
            <div className="flow-pills">
              <b>Understand</b>
              <span>↓</span>
              <b>Approve</b>
              <span>↓</span>
              <b>Act</b>
            </div>
            <span className="visual-note">HUMAN IN THE LOOP</span>
          </div>
        ) : project.art === "security" ? (
          <div className="security-illustration">
            <div className="shield-art">
              <svg viewBox="0 0 100 110">
                <path d="M50 8 86 22v30c0 23-17 39-36 49C31 91 14 75 14 52V22Z" />
                <path d="m31 54 13 13 26-28" />
              </svg>
            </div>
            <div>
              <strong>
                Evidence.
                <br />
                Then confidence.
              </strong>
              <p>Inspect → Explain → Decide</p>
            </div>
          </div>
        ) : project.art === "social" ? (
          <div className="social-illustration">
            <div className="social-people">
              <i>P</i>
              <i>B</i>
              <i>S</i>
            </div>
            <strong>
              Small campus.
              <br />
              Connected stories.
            </strong>
            <div className="social-lines">
              <i />
              <i />
              <i />
            </div>
          </div>
        ) : (
          <div className="chip-illustration">
            <span>RESEARCH / SYSTEMS</span>
            <div className="chip-grid">
              {Array.from({ length: 16 }, (_, i) => (
                <i key={i} />
              ))}
            </div>
            <strong>Think deeper.</strong>
          </div>
        )}
      </div>
      <span className="visual-caption">
        {project.context.split(" · ")[0]} <span>↗</span>
      </span>
    </div>
  );
}
