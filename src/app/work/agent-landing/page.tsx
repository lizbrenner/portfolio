import Link from "next/link";

export default function AgentLandingCaseStudyPage() {
  return (
    <article className="grid grid-cols-12 gap-x-4 md:gap-x-6">
      <header className="col-span-12 max-w-measure mb-space-12">
        <p className="text-scale-2 text-brand-fg-muted">Case study</p>
        <h1 className="font-display mt-space-2 text-scale-5 font-medium text-brand-fg">
          Agent chat & landing experience
        </h1>
        <p className="mt-space-3 text-scale-4 text-brand-fg-muted leading-normal">
          Landing page and agent chat design with agent branding and motion
          design—transforming fragmented, manual industrial workflows into a
          unified, AI-driven experience that proactively delivers the right
          data, insights, and actions in context so operators move faster and
          unlock the full value of their CDF data.
        </p>
        <p className="mt-space-2 text-scale-2 text-brand-fg-muted">
          Design lead / contributor · Worked closely with designer · Cognite
        </p>
      </header>

      <div className="col-span-12 max-w-measure space-y-space-16">
        {/* 1. Context & stakes */}
        <section aria-labelledby="context-heading">
          <h2 id="context-heading" className="font-display text-scale-4 font-medium text-brand-fg">
            Context & stakes
          </h2>
          <p className="mt-space-3 text-scale-3 text-brand-fg-muted leading-normal">
            Industrial operators were juggling multiple tools and manual
            workflows to get value from Cognite Data Fusion (CDF). The product
            bet was an AI-driven agent experience—landing and chat—that would
            put the right data, insights, and actions in context. The design
            challenge was to make this feel unified and trustworthy: clear
            agent branding, coherent motion, and a single experience that
            reduced friction and helped operators move faster.
          </p>
        </section>

        {/* 2. My role & scope */}
        <section aria-labelledby="role-heading">
          <h2 id="role-heading" className="font-display text-scale-4 font-medium text-brand-fg">
            My role & scope
          </h2>
          <p className="mt-space-3 text-scale-3 text-brand-fg-muted leading-normal">
            As design lead and contributor, I owned key parts of the landing
            and agent chat experience and worked closely with another designer
            to align on vision and execution. I focused on agent branding,
            motion design, and the transition from fragmented workflows to a
            single, proactive AI-driven flow—ensuring the experience felt
            cohesive and intentional rather than a collection of screens.
          </p>
        </section>

        {/* 3. Organizational complexity */}
        <section aria-labelledby="complexity-heading">
          <h2 id="complexity-heading" className="font-display text-scale-4 font-medium text-brand-fg">
            Organizational complexity
          </h2>
          <p className="mt-space-3 text-scale-3 text-brand-fg-muted leading-normal">
            Multiple stakeholders (product, engineering, AI/ML) had different
            expectations for the agent experience. Legacy workflows and
            existing tools meant we had to design a path from “many manual
            steps” to “one contextual experience” without dismissing current
            user habits. Agent branding and motion needed to feel consistent
            with the rest of the product while establishing a clear identity
            for the AI-driven layer.
          </p>
        </section>

        {/* Artifacts — emphasized for this case study */}
        <section aria-labelledby="artifacts-heading">
          <h2 id="artifacts-heading" className="font-display text-scale-4 font-medium text-brand-fg">
            Artifacts
          </h2>
          <p className="mt-space-3 text-scale-3 text-brand-fg-muted leading-normal">
            Selected outputs: landing page structure and hierarchy; agent chat
            UI with clear information architecture; agent branding and visual
            language; motion design that supports clarity and trust. Each
            artifact demonstrates how we unified the experience and reduced
            friction for operators.
          </p>
          <div className="mt-space-6 flex flex-wrap gap-space-4">
            <div className="w-full sm:w-64 h-40 bg-brand-bg border border-brand-border rounded-lg flex items-center justify-center text-scale-2 text-brand-fg-muted">
              [ Landing page ]
            </div>
            <div className="w-full sm:w-64 h-40 bg-brand-bg border border-brand-border rounded-lg flex items-center justify-center text-scale-2 text-brand-fg-muted">
              [ Agent chat ]
            </div>
            <div className="w-full sm:w-64 h-40 bg-brand-bg border border-brand-border rounded-lg flex items-center justify-center text-scale-2 text-brand-fg-muted">
              [ Agent branding / motion ]
            </div>
          </div>
        </section>
      </div>

      <footer className="col-span-12 mt-space-16 pt-space-8 border-t border-brand-border">
        <Link
          href="/work"
          className="text-scale-3 text-brand-accent hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent focus-visible:outline-offset-2 rounded"
        >
          ← Back to work
        </Link>
      </footer>
    </article>
  );
}
