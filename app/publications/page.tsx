import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { education, publications } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Publications | Pavan",
  description: "Publications and academic background of T M V S G Pavan.",
};

export default function PublicationsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <AnimatedSection>
        <p className="text-sm uppercase tracking-[0.25em] text-blue-200/80">
          Publications
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Research with an applied AI and security lens.
        </h1>
        <p className="section-copy">
          I enjoy research that translates into deployable systems — especially
          in AI security, explainability, and efficient decision-making.
        </p>
      </AnimatedSection>

      <AnimatedSection className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[1.15fr,0.85fr]">
          <div className="card-surface rounded-3xl p-8">
            {publications.map((publication) => (
              <div key={publication.title}>
                <p className="text-sm uppercase tracking-[0.25em] text-blue-200/80">
                  {publication.venue}
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-white">
                  {publication.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/65">
                  Published: {publication.published}
                </p>
                <p className="mt-2 text-sm leading-7 text-white/65">
                  Focused on phishing detection using AI agents, deep learning,
                  and interpretable security intelligence.
                </p>
                <Link
                  href={publication.doi}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex text-sm font-medium text-blue-200 hover:text-white"
                >
                  Open DOI →
                </Link>
              </div>
            ))}
          </div>

          <div className="card-surface rounded-3xl p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-blue-200/80">
              Education
            </p>
            <div className="mt-6 space-y-5">
              {education.map((item) => (
                <div
                  key={item.degree}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {item.degree}
                  </h3>
                  <p className="mt-2 text-sm text-white/70">
                    {item.institution}
                  </p>
                  <div className="mt-4 flex items-center justify-between gap-4 text-sm text-white/50">
                    <span>{item.duration}</span>
                    <span>{item.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
