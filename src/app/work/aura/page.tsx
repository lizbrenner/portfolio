import Link from "next/link";

export default function AuraCaseStudyPage() {
  return (
    <article className="grid grid-cols-12 gap-x-4 md:gap-x-6">
      {/* 1. Hero strip: title + role/scope line */}
      <header className="col-span-12 max-w-measure mb-space-6">
        <p className="text-scale-2 text-brand-fg-muted">Case study</p>
        <h1 className="font-display mt-space-2 text-scale-5 font-medium text-brand-fg">
          Aura — AI-native design system
        </h1>
        <p className="mt-space-2 text-scale-3 text-brand-fg-muted">
          Principal design lead | AI-native system transformation | Org-wide impact
        </p>
      </header>

      {/* 2. Impact metrics strip */}
      <div className="col-span-12 py-space-6 border-y border-brand-border">
        <div className="flex flex-wrap gap-space-4 max-w-content">
          <span className="px-space-4 py-space-2 rounded-lg bg-brand-bg-elevated border border-brand-border text-scale-2 text-brand-fg-muted">
            [ Time to market ]
          </span>
          <span className="px-space-4 py-space-2 rounded-lg bg-brand-bg-elevated border border-brand-border text-scale-2 text-brand-fg-muted">
            [ Adoption % ]
          </span>
          <span className="px-space-4 py-space-2 rounded-lg bg-brand-bg-elevated border border-brand-border text-scale-2 text-brand-fg-muted">
            [ Quality / SUS ]
          </span>
          <span className="px-space-4 py-space-2 rounded-lg bg-brand-bg-elevated border border-brand-border text-scale-2 text-brand-fg-muted">
            [ Scope ]
          </span>
        </div>
      </div>

      {/* 3. TL;DR */}
      <section className="col-span-12 mt-space-12" aria-labelledby="tldr-heading">
        <div className="max-w-measure bg-brand-bg-elevated border border-brand-border rounded-lg p-space-6">
          <h2 id="tldr-heading" className="font-display text-scale-4 font-medium text-brand-fg mb-space-4">
            TL;DR
          </h2>
          <ul className="space-y-space-2 text-scale-3 text-brand-fg-muted list-disc list-inside">
            <li>One-line impact summary</li>
            <li>Scope (teams / surface area)</li>
            <li>Strategic bet in 5 words</li>
            <li>Key constraint we imposed</li>
            <li>Outcome in numbers</li>
            <li>What we&apos;d do next</li>
          </ul>
        </div>
      </section>

      {/* 4. Thesis + hero (two-column) */}
      <section className="col-span-12 mt-space-16 grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-8 gap-y-space-6" aria-labelledby="thesis-heading">
        <div className="max-w-measure">
          <h2 id="thesis-heading" className="font-display text-scale-4 font-medium text-brand-fg">
            Redesigning How Design Decisions Are Produced.
          </h2>
          <ul className="mt-space-4 space-y-space-2 text-scale-3 text-brand-fg-muted list-disc list-inside">
            <li>What is the one-sentence thesis? (How did we change the way design decisions are made, not just the outputs?)</li>
          </ul>
        </div>
        <figure>
          <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden bg-brand-fg-muted/10 flex items-center justify-center border border-brand-border">
            <span className="text-scale-2 text-brand-fg-muted text-center px-space-4">[ Hero: Aura in context — product or system overview ]</span>
          </div>
          <figcaption className="sr-only">Placeholder for hero or system overview image</figcaption>
        </figure>
      </section>

      {/* 5. Lens 1: System redesign */}
      <div className="col-span-12 mt-space-16 space-y-space-16">
        <h2 id="lens-system-heading" className="font-display text-scale-4 font-medium text-brand-fg">
          Lens 1: System redesign
        </h2>

        {/* 5a. Inflection + bet (two-column) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-8 gap-y-space-6" aria-labelledby="l1-inflection-heading">
          <div className="max-w-[28rem]">
            <h3 id="l1-inflection-heading" className="font-display text-scale-3 font-medium text-brand-fg mb-space-3">
              Inflection point & strategic bet
            </h3>
            <ul className="space-y-space-2 text-scale-3 text-brand-fg-muted list-disc list-inside">
              <li>What was the breaking point? When did &quot;the way we build&quot; stop scaling?</li>
              <li>What did we bet on? (e.g. AI-native primitives, governance by default, token-first.)</li>
            </ul>
          </div>
          <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden bg-brand-fg-muted/10 flex items-center justify-center border border-brand-border">
            <span className="text-scale-2 text-brand-fg-muted text-center px-space-4">[ Architecture: tokens → components → registry ]</span>
          </div>
        </section>

        {/* 5b. Architecture shift (full-width) */}
        <section className="col-span-12" aria-labelledby="l1-arch-heading">
          <h3 id="l1-arch-heading" className="font-display text-scale-3 font-medium text-brand-fg mb-space-3">
            System architecture shift
          </h3>
          <ul className="max-w-measure space-y-space-1 text-scale-3 text-brand-fg-muted list-disc list-inside mb-space-4">
            <li>How did the architecture change? (Tokens, components, registry, contracts—what moved and why?)</li>
            <li>What constraints did we impose so the system stayed coherent?</li>
          </ul>
          <figure>
            <div className="relative w-full aspect-[2/1] rounded-lg overflow-hidden bg-brand-fg-muted/10 flex items-center justify-center border border-brand-border">
              <span className="text-scale-2 text-brand-fg-muted text-center px-space-4">[ Full-width: architecture diagram ]</span>
            </div>
            <figcaption className="sr-only">Placeholder for system architecture diagram</figcaption>
          </figure>
        </section>

        {/* 5c. Impact + learnings (callout) */}
        <aside className="max-w-measure border-l-4 border-brand-accent pl-space-6 py-space-4 bg-brand-bg-elevated/30 rounded-r-lg" aria-labelledby="l1-impact-heading">
          <h3 id="l1-impact-heading" className="font-display text-scale-3 font-medium text-brand-fg mb-space-3">
            Impact & learnings
          </h3>
          <ul className="space-y-space-2 text-scale-3 text-brand-fg-muted list-disc list-inside">
            <li><strong className="text-brand-fg">Impact:</strong> What did we measure? What moved and by how much?</li>
            <li><strong className="text-brand-fg">Learnings:</strong> Where did the system resist? What did we over- or under-invest in?</li>
            <li><strong className="text-brand-fg">Next:</strong> Next lever to pull (e.g. governance, contribution model, AI surface area).</li>
          </ul>
        </aside>
      </div>

      {/* 6. Lens 2: Workflow redesign */}
      <div className="col-span-12 mt-space-20 pt-space-12 border-t border-brand-border space-y-space-16">
        <h2 id="lens-workflow-heading" className="font-display text-scale-4 font-medium text-brand-fg">
          Lens 2: Workflow redesign
        </h2>

        {/* 6a. Image-first + caption */}
        <section aria-labelledby="l2-context-heading">
          <figure className="mb-space-6">
            <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden bg-brand-fg-muted/10 flex items-center justify-center border border-brand-border">
              <span className="text-scale-2 text-brand-fg-muted text-center px-space-4">[ Workflow: AI-assisted flow or human–AI handoff ]</span>
            </div>
            <figcaption className="sr-only">Placeholder for workflow or AI integration image</figcaption>
          </figure>
          <div className="max-w-measure">
            <h3 id="l2-context-heading" className="font-display text-scale-3 font-medium text-brand-fg mb-space-3">
              Inflection, bet & how AI changed workflows
            </h3>
            <ul className="space-y-space-2 text-scale-3 text-brand-fg-muted list-disc list-inside">
              <li>When did existing workflows become the bottleneck?</li>
              <li>What did we bet on? (e.g. AI-assisted generation, machine-readable contracts.)</li>
              <li>Where did AI enter the loop? What did humans keep owning vs. delegate?</li>
            </ul>
          </div>
        </section>

        {/* 6b. Before vs after (side-by-side) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-8" aria-labelledby="l2-beforeafter-heading">
          <h3 id="l2-beforeafter-heading" className="sr-only">Before vs after</h3>
          <div className="p-space-6 rounded-lg border border-brand-border bg-brand-bg-elevated/50">
            <p className="font-display text-scale-3 font-medium text-brand-fg mb-space-2">Before</p>
            <ul className="space-y-space-1 text-scale-3 text-brand-fg-muted list-disc list-inside">
              <li>[ Workflow state before ]</li>
            </ul>
            <div className="mt-space-4 aspect-[16/10] rounded bg-brand-fg-muted/10 flex items-center justify-center">
              <span className="text-scale-2 text-brand-fg-muted">[ Image ]</span>
            </div>
          </div>
          <div className="p-space-6 rounded-lg border border-brand-border bg-brand-bg-elevated/50">
            <p className="font-display text-scale-3 font-medium text-brand-fg mb-space-2">After</p>
            <ul className="space-y-space-1 text-scale-3 text-brand-fg-muted list-disc list-inside">
              <li>[ Workflow state after ]</li>
            </ul>
            <div className="mt-space-4 aspect-[16/10] rounded bg-brand-fg-muted/10 flex items-center justify-center">
              <span className="text-scale-2 text-brand-fg-muted">[ Image ]</span>
            </div>
          </div>
        </section>

        {/* 6c. Impact + learnings (two-column) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-8 gap-y-space-6" aria-labelledby="l2-impact-heading">
          <div className="max-w-measure">
            <h3 id="l2-impact-heading" className="font-display text-scale-3 font-medium text-brand-fg mb-space-3">
              Impact & learnings
            </h3>
            <ul className="space-y-space-2 text-scale-3 text-brand-fg-muted list-disc list-inside">
              <li>How did cycle time or throughput change?</li>
              <li>Where did workflows break or push back? Human–AI collaboration learnings?</li>
              <li>Next workflow to redesign or automate?</li>
            </ul>
          </div>
          <div className="relative w-full aspect-[2/1] rounded-lg overflow-hidden bg-brand-fg-muted/10 flex items-center justify-center border border-brand-border">
            <span className="text-scale-2 text-brand-fg-muted text-center px-space-4">[ Workflow redesign: tool UI, pipeline, or impact ]</span>
          </div>
        </section>
      </div>

      {/* 7. Lens 3: Organizational redesign */}
      <div className="col-span-12 mt-space-20 pt-space-12 border-t border-brand-border space-y-space-16">
        <h2 id="lens-org-heading" className="font-display text-scale-4 font-medium text-brand-fg">
          Lens 3: Organizational redesign
        </h2>

        {/* 7a. Inflection + bet + architecture support (two-column) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-8 gap-y-space-6" aria-labelledby="l3-context-heading">
          <div className="max-w-[28rem]">
            <h3 id="l3-context-heading" className="font-display text-scale-3 font-medium text-brand-fg mb-space-3">
              Inflection, bet & how architecture supported the org
            </h3>
            <ul className="space-y-space-2 text-scale-3 text-brand-fg-muted list-disc list-inside">
              <li>When did structure (ownership, governance, contribution) become the constraint?</li>
              <li>What did we bet on? (e.g. ownership through action, governance by default.)</li>
              <li>How did tokens, contracts, and pipelines reduce central gatekeeping? What leverage did we create?</li>
            </ul>
          </div>
          <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden bg-brand-fg-muted/10 flex items-center justify-center border border-brand-border">
            <span className="text-scale-2 text-brand-fg-muted text-center px-space-4">[ Org: governance model, contribution, or adoption ]</span>
          </div>
        </section>

        {/* 7b. Impact + learnings (callout) */}
        <aside className="max-w-measure border-l-4 border-brand-accent pl-space-6 py-space-4 bg-brand-bg-elevated/30 rounded-r-lg" aria-labelledby="l3-impact-heading">
          <h3 id="l3-impact-heading" className="font-display text-scale-3 font-medium text-brand-fg mb-space-3">
            Impact & learnings
          </h3>
          <ul className="space-y-space-2 text-scale-3 text-brand-fg-muted list-disc list-inside">
            <li><strong className="text-brand-fg">Impact:</strong> Adoption, contribution rate, time to first contribution—what moved?</li>
            <li><strong className="text-brand-fg">Learnings:</strong> Where did governance or ownership create friction? Over-centralize or under-specify?</li>
            <li><strong className="text-brand-fg">Next:</strong> Next organizational lever (contribution model, ownership boundaries).</li>
          </ul>
        </aside>

        {/* 7c. Closing visual (full-width) */}
        <figure className="col-span-12">
          <div className="relative w-full aspect-[2/1] rounded-lg overflow-hidden bg-brand-fg-muted/10 flex items-center justify-center border border-brand-border">
            <span className="text-scale-2 text-brand-fg-muted text-center px-space-4">[ Organizational redesign: impact or summary ]</span>
          </div>
          <figcaption className="sr-only">Placeholder for org impact or summary image</figcaption>
        </figure>
      </div>

      <footer className="col-span-12 mt-space-16 pt-space-8 border-t border-brand-border">
        <Link
          href="/"
          className="text-scale-3 text-brand-accent hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent focus-visible:outline-offset-2 rounded"
        >
          ← Back to work
        </Link>
      </footer>
    </article>
  );
}
