
const experience = [
  {
    role: "Principal Product Design System Lead",
    company: "Cognite",
    period: "Present",
    bullets: [
      "Led AI-native design system (Aura) enabling Dune to ship in ~6 weeks instead of 3+ months.",
      "Drove design system adoption from 19% to 60% and SUS from 62 to 75.",
      "Established governance, contribution model, and cross-functional alignment with product, engineering, and AI teams.",
    ],
  },
  {
    role: "Design Lead / Contributor",
    company: "Cognite",
    period: "—",
    bullets: [
      "Landing page and agent chat design with agent branding and motion; unified AI-driven experience for industrial workflows.",
    ],
  },
];

const skills = [
  "Design systems",
  "AI-assisted design",
  "Governance & contribution",
  "Cross-functional leadership",
  "Data-informed design",
];

export default function ResumePage() {
  return (
    <article className="max-w-measure">
      <h1 className="font-display text-scale-4 md:text-scale-5 font-medium text-brand-fg">Resume</h1>
        <p className="mt-space-3 text-scale-3 text-brand-fg-muted leading-normal">
          Principal Design Systems. AI-native foundations, measurable adoption
          (19% → 60%), and clear ownership so teams deliver in weeks instead of
          months.
        </p>

        <section className="mt-space-10" aria-labelledby="experience-heading">
          <h2 id="experience-heading" className="font-display text-scale-4 font-medium text-brand-fg">
            Experience
          </h2>
          <ul className="mt-space-6 space-y-space-8">
            {experience.map((job) => (
              <li key={job.role + job.company}>
                <div className="flex flex-wrap justify-between gap-space-2">
                  <h3 className="font-display text-scale-3 font-medium text-brand-fg">
                    {job.role}
                  </h3>
                  <span className="text-scale-2 text-brand-fg-muted">
                    {job.company} · {job.period}
                  </span>
                </div>
                <ul className="mt-space-2 space-y-space-1">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet.slice(0, 40)}
                      className="text-scale-3 text-brand-fg-muted flex gap-space-2"
                    >
                      <span className="shrink-0" aria-hidden>·</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-space-10" aria-labelledby="skills-heading">
          <h2 id="skills-heading" className="font-display text-scale-4 font-medium text-brand-fg">
            Skills
          </h2>
          <p className="mt-space-3 text-scale-3 text-brand-fg-muted">
            {skills.join(" · ")}
          </p>
        </section>

        <section className="mt-space-10">
          <p className="text-scale-2 text-brand-fg-muted">
            Education and other details — add as needed.
          </p>
        </section>

      <div className="mt-space-12 text-scale-3">
        <a
          href="/resume.pdf"
          download
          className="text-brand-fg hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent focus-visible:outline-offset-2 rounded transition-opacity"
          aria-label="Download resume as PDF (add public/resume.pdf)"
        >
          Download PDF
        </a>
        {" · "}
        <a
          href="/contact"
          className="text-brand-fg hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent focus-visible:outline-offset-2 rounded transition-opacity"
        >
          Contact
        </a>
      </div>
    </article>
  );
}
