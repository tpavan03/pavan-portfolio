import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import ExperienceCard from "@/components/ExperienceCard";
import { experiences } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Experience | Pavan",
  description:
    "Professional experience of T M V S G Pavan in AI/ML engineering and teaching.",
};

export default function ExperiencePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <AnimatedSection>
        <p className="text-sm uppercase tracking-[0.25em] text-blue-200/80">
          Experience
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Building systems that turn data into action.
        </h1>
        <p className="section-copy">
          From security alert triage to graduate-level instruction, my work is
          centered on practical ML systems, measurable impact, and scalable
          engineering.
        </p>
      </AnimatedSection>

      <AnimatedSection className="section-shell">
        <div className="space-y-8">
          {experiences.map((experience) => (
            <ExperienceCard
              key={`${experience.company}-${experience.role}`}
              experience={experience}
            />
          ))}
        </div>
      </AnimatedSection>
    </main>
  );
}
