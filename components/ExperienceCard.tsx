import type { Experience } from "@/data/portfolio";

export default function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  return (
    <article className="relative pl-8 sm:pl-10">
      <span className="absolute left-0 top-3 h-3 w-3 rounded-full bg-gradient-to-r from-blue-400 to-violet-500 shadow-[0_0_20px_rgba(96,165,250,0.8)]" />
      <span className="absolute left-[5px] top-6 h-full w-px bg-gradient-to-b from-white/20 to-transparent sm:left-[6px]" />

      <div className="card-surface rounded-3xl p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-blue-200/80">
              {experience.company}
            </p>
            <h3 className="mt-2 text-xl font-semibold text-white">
              {experience.role}
            </h3>
            <p className="mt-1 text-sm text-white/50">{experience.location}</p>
          </div>
          <span className="text-sm font-medium text-white/55">
            {experience.duration}
          </span>
        </div>

        <ul className="mt-6 space-y-3 text-sm leading-7 text-white/70 sm:text-base">
          {experience.points.map((point) => (
            <li key={point} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-300" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {experience.tech.map((item) => (
            <span key={item} className="tag-chip">
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
