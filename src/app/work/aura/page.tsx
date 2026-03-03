import Link from "next/link";

export default function AuraCaseStudyPage() {
  return (
    <article className="grid grid-cols-12 gap-x-4 md:gap-x-6">
      <header className="col-span-12 max-w-measure mb-space-12">
        <p className="text-scale-2 text-brand-fg-muted">Case study</p>
        <h1 className="font-display mt-space-2 text-scale-5 font-medium text-brand-fg">
          Aura — AI-native design system
        </h1>
        <p className="mt-space-3 text-scale-4 text-brand-fg-muted leading-normal">
          An AI-native design system that enabled Dune (custom app building) to
          deliver on its GA promise—cutting time to market from 3+ months to 6
          weeks while driving adoption from 19% to 60% and SUS from 62 to 75.
        </p>
        <p className="mt-space-2 text-scale-2 text-brand-fg-muted">
          Principal Product Design System Lead · Cognite
        </p>
      </header>

      <div className="col-span-12 max-w-measure space-y-space-16">
        {/* 1. Context & stakes */}
        <section aria-labelledby="context-heading">
          <h2 id="context-heading" className="font-display text-scale-4 font-medium text-brand-fg">
            Context & stakes
          </h2>
          <p className="mt-space-3 text-scale-3 text-brand-fg-muted leading-normal">
            Cognite needed Dune—a platform for building custom industrial
            applications—to reach general availability with a reliable, consistent
            experience. Without a shared design and development foundation, teams
            were shipping in 3+ months with fragmented UI and no governance. The
            business bet was on an AI-native design system (Aura) that would
            standardize design and development, enforce consistency and governance
            by default, and let teams ship production-ready applications in weeks
            without deep platform or UI expertise—scaling the product offering and
            significantly cutting time to market.
          </p>
        </section>

        {/* 2. My role & scope */}
        <section aria-labelledby="role-heading">
          <h2 id="role-heading" className="font-display text-scale-4 font-medium text-brand-fg">
            My role & scope
          </h2>
          <p className="mt-space-3 text-scale-3 text-brand-fg-muted leading-normal">
            As Principal Product Design System Lead, I owned the strategy,
            architecture, and execution of Aura. I worked directly with product
            (Dune roadmap and GA timeline), engineering (component library,
            tokens, and AI-assisted generation pipelines), and AI/ML teams to
            ensure the system was built for AI-assisted app creation from the
            start—not retrofitted. My scope included token architecture,
            component contracts, documentation, governance model, and adoption
            strategy.
          </p>
        </section>

        {/* 3. Organizational complexity */}
        <section aria-labelledby="complexity-heading">
          <h2 id="complexity-heading" className="font-display text-scale-4 font-medium text-brand-fg">
            Organizational complexity
          </h2>
          <ul className="mt-space-3 space-y-space-2 text-scale-3 text-brand-fg-muted">
            <li>Multiple product teams depending on Dune with different timelines and legacy UI patterns.</li>
            <li>AI-assisted creation workflows that required the system to be machine-readable and generative-friendly.</li>
            <li>Governance and contribution needed to scale without a single bottleneck.</li>
            <li>Existing design system adoption at 19%—required a clear path to 60%+ without forcing a big-bang migration.</li>
          </ul>
        </section>

        {/* 4. Alignment challenges */}
        <section aria-labelledby="alignment-heading">
          <h2 id="alignment-heading" className="font-display text-scale-4 font-medium text-brand-fg">
            Alignment challenges
          </h2>
          <p className="mt-space-3 text-scale-3 text-brand-fg-muted leading-normal">
            Getting buy-in meant showing impact in language each stakeholder cared
            about: product needed GA delivery; engineering needed less custom UI
            code; leadership needed adoption and quality metrics. I used shared
            metrics (time-to-market, adoption %, SUS), pilot teams for early
            validation, and clear storytelling to execs so the investment in
            Aura was tied to business outcomes, not just “design consistency.”
          </p>
        </section>

        {/* 5. System architecture decisions */}
        <section aria-labelledby="architecture-heading">
          <h2 id="architecture-heading" className="font-display text-scale-4 font-medium text-brand-fg">
            System architecture decisions
          </h2>
          <p className="mt-space-3 text-scale-3 text-brand-fg-muted leading-normal">
            Key decisions: (1) AI-native primitives—tokens and components
            designed for both human and AI consumption, with clear contracts and
            registry pipelines. (2) Governance by default—documentation and
            contribution rules built into the pipeline so consistency wasn’t
            optional. (3) Token-first architecture so theming and scaling stayed
            predictable. (4) Component contracts that worked for hand-off and
            AI-assisted generation.
          </p>
          <figure className="mt-space-6 p-space-6 bg-brand-bg border border-brand-border rounded-lg" aria-hidden>
            <p className="text-scale-2 text-brand-fg-muted text-center">
              [ Architecture diagram: tokens → components → registry → Dune / AI ]
            </p>
          </figure>
        </section>

        {/* 6. Governance & contribution */}
        <section aria-labelledby="governance-heading">
          <h2 id="governance-heading" className="font-display text-scale-4 font-medium text-brand-fg">
            Governance & contribution
          </h2>
          <ul className="mt-space-3 space-y-space-2 text-scale-3 text-brand-fg-muted">
            <li>Clear ownership per domain (tokens, components, docs)—ownership through action, not committees.</li>
            <li>Contribution model with review process and quality gates so the system stayed cohesive.</li>
            <li>Teams could contribute back with feedback loops and support, while one through-line of ownership ensured completeness and consistency.</li>
          </ul>
        </section>

        {/* 7. Adoption strategy */}
        <section aria-labelledby="adoption-heading">
          <h2 id="adoption-heading" className="font-display text-scale-4 font-medium text-brand-fg">
            Adoption strategy
          </h2>
          <p className="mt-space-3 text-scale-3 text-brand-fg-muted leading-normal">
            Rollout was phased: pilot teams first, then broader Dune builders.
            Documentation and tooling (component explorer, token reference,
            codegen) reduced friction. Support and office hours helped teams
            unblock. Tracking adoption and SUS gave us data to iterate. The
            result was a move from 19% to 60% adoption with measurable
            satisfaction improvement (SUS 62 → 75).
          </p>
          <figure className="mt-space-6 p-space-6 bg-brand-bg border border-brand-border rounded-lg" aria-hidden>
            <p className="text-scale-2 text-brand-fg-muted text-center">
              [ Adoption over time or impact visual ]
            </p>
          </figure>
        </section>

        {/* 8. Business impact */}
        <section aria-labelledby="impact-heading">
          <h2 id="impact-heading" className="font-display text-scale-4 font-medium text-brand-fg">
            Business impact
          </h2>
          <p className="mt-space-3 text-scale-3 text-brand-fg-muted leading-normal">
            Time to market for Dune-built applications dropped from 3+ months to
            ~6 weeks. Design system adoption increased from 19% to 60%. System
            Usability Scale (SUS) for the design system improved from 62 to 75.
            Together, this let Cognite scale its product offering and ship
            reliable, production-ready applications faster.
          </p>
          <dl className="mt-space-6 grid grid-cols-1 sm:grid-cols-3 gap-space-4">
            <div className="p-space-4 bg-brand-bg-elevated border border-brand-border rounded-lg">
              <dt className="text-scale-2 text-brand-fg-muted">Time to market</dt>
              <dd className="font-display mt-space-1 text-scale-4 font-medium text-brand-fg">3+ months → 6 weeks</dd>
            </div>
            <div className="p-space-4 bg-brand-bg-elevated border border-brand-border rounded-lg">
              <dt className="text-scale-2 text-brand-fg-muted">Adoption</dt>
              <dd className="font-display mt-space-1 text-scale-4 font-medium text-brand-fg">19% → 60%</dd>
            </div>
            <div className="p-space-4 bg-brand-bg-elevated border border-brand-border rounded-lg">
              <dt className="text-scale-2 text-brand-fg-muted">SUS</dt>
              <dd className="font-display mt-space-1 text-scale-4 font-medium text-brand-fg">62 → 75</dd>
            </div>
          </dl>
        </section>

        {/* 9. Long-term evolution */}
        <section aria-labelledby="evolution-heading">
          <h2 id="evolution-heading" className="font-display text-scale-4 font-medium text-brand-fg">
            Long-term evolution
          </h2>
          <p className="mt-space-3 text-scale-3 text-brand-fg-muted leading-normal">
            Next steps include scaling adoption to more teams, deepening
            AI-assisted design and code generation, and tightening design–dev
            handoff so the system continues to reduce friction and support
            Cognite’s product growth.
          </p>
        </section>

        {/* 10. Artifacts */}
        <section aria-labelledby="artifacts-heading">
<h2 id="artifacts-heading" className="font-display text-scale-4 font-medium text-brand-fg">
          Artifacts
          </h2>
          <p className="mt-space-3 text-scale-3 text-brand-fg-muted leading-normal">
            Selected outputs: token system and scale; core component set; Dune
            builder experience in context; documentation and contribution
            guidelines. Each artifact demonstrates how the system supports both
            human designers and AI-assisted workflows.
          </p>
          <div className="mt-space-6 flex flex-wrap gap-space-4">
            <div className="w-full sm:w-64 h-40 bg-brand-bg border border-brand-border rounded-lg flex items-center justify-center text-scale-2 text-brand-fg-muted">
              [ Token table ]
            </div>
            <div className="w-full sm:w-64 h-40 bg-brand-bg border border-brand-border rounded-lg flex items-center justify-center text-scale-2 text-brand-fg-muted">
              [ Core components ]
            </div>
            <div className="w-full sm:w-64 h-40 bg-brand-bg border border-brand-border rounded-lg flex items-center justify-center text-scale-2 text-brand-fg-muted">
              [ Dune in context ]
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
