import Link from "next/link";

const pillars = [
  "AI fluency — leveraging AI-assisted design tools, guiding generative workflows, evaluating AI-driven recommendations.",
  "System thinking at scale — token architectures, component contracts, registry pipelines so the system grows cohesively.",
  "Data-informed design — usage metrics and telemetry to make decisions that benefit the ecosystem, not just individual screens.",
  "Cross-functional orchestration — collaborating with engineers, AI specialists, and product so patterns, automation, and tooling reinforce the same philosophy.",
];

export default function AboutPage() {
  return (
    <article className="max-w-measure">
      <h1 className="font-display text-scale-4 md:text-scale-5 font-medium text-brand-fg">About</h1>

        <section className="mt-space-8">
          <p className="text-scale-4 text-brand-fg leading-normal">
            I&apos;m a Principal Product Designer specializing in design systems. I lead
            systems that scale: from AI-native foundations that cut time-to-market
            by half to adoption that moves the needle (19% → 60%). I focus on
            pragmatic, system-first language, data-informed decisions, and
            cross-functional orchestration so design operates at scale—not just
            looks consistent.
          </p>
        </section>

        <section className="mt-space-10" aria-labelledby="philosophy-heading">
          <h2 id="philosophy-heading" className="font-display text-scale-4 font-medium text-brand-fg">
            Design philosophy
          </h2>
          <p className="mt-space-3 text-scale-3 text-brand-fg-muted leading-normal">
            Design systems are about a pragmatic, system-first design language
            that reduces cognitive load, prioritizes simplicity, and ensures
            every decision strengthens the system&apos;s ecosystem. I focus on scalable
            patterns, data-driven improvements, and empowering teams to contribute
            while keeping the whole system cohesive.
          </p>
        </section>

        <section className="mt-space-10" aria-labelledby="leadership-heading">
          <h2 id="leadership-heading" className="font-display text-scale-4 font-medium text-brand-fg">
            How I lead
          </h2>
          <p className="mt-space-3 text-scale-3 text-brand-fg-muted leading-normal">
            I believe in clear ownership and responsibility through action, not
            meetings. Ownership helps with task distribution and enables small
            and large teams to flourish. We lean on each other for feedback and
            support, but there&apos;s always a through-line of ownership to ensure
            completeness, quality, and consistency.
          </p>
        </section>

        <section className="mt-space-10" aria-labelledby="differentiation-heading">
          <h2 id="differentiation-heading" className="font-display text-scale-4 font-medium text-brand-fg">
            What sets me apart
          </h2>
          <ul className="mt-space-3 space-y-space-3">
            {pillars.map((pillar) => (
              <li key={pillar.slice(0, 30)} className="flex gap-space-2">
                <span className="text-brand-accent shrink-0" aria-hidden>•</span>
                <span className="text-scale-3 text-brand-fg-muted">{pillar}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-space-10">
          <p className="text-scale-3 text-brand-fg-muted">
            I write about design systems and AI-native product.{" "}
            <Link
              href="/writing"
              className="text-brand-fg hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent focus-visible:outline-offset-2 rounded transition-opacity"
            >
              Writing →
            </Link>
          </p>
        </section>

      <div className="mt-space-12">
        <a
          href="/contact"
          className="text-scale-3 text-brand-fg hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent focus-visible:outline-offset-2 rounded transition-opacity"
        >
          Contact
        </a>
      </div>
    </article>
  );
}
