import dynamic from "next/dynamic";

const CaseStudyFooter = dynamic(
  () => import("@/components/CaseStudyFooter").then((m) => ({ default: m.CaseStudyFooter })),
  { ssr: false }
);

export default function AuraCaseStudyPage() {
  return (
    <article className="grid grid-cols-12 gap-x-4 md:gap-x-6">
      {/* 1. Hero strip: title + role/scope line */}
      <header className="col-span-12 max-w-measure mb-space-6 text-brand-fg">
        <p className="text-scale-2">Case study</p>
        <h1 className="font-display mt-space-2 text-scale-5 font-medium">
          Aura — AI-native design system
        </h1>
        <p className="mt-space-2 text-scale-3 opacity-90">
          Principal design lead | AI-native system transformation | Org-wide impact
        </p>
      </header>

      {/* 2. TL;DR — 3 columns × 2 rows */}
      <section className="col-span-12 mt-space-12" aria-labelledby="tldr-heading">
        <h2 id="tldr-heading" className="font-display text-scale-4 font-medium text-brand-fg mb-space-6">
          TL;DR
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <div className="rounded-lg border border-brand-border bg-brand-bg-elevated/50 p-space-5 flex flex-col">
            <p className="font-display text-scale-2 font-medium text-brand-fg mb-space-2">One-line impact summary</p>
            <p className="text-scale-3 text-brand-fg-muted flex-1">Aura is an AI-native design system that dramatically accelerates product development while ensuring consistent, high-quality user experiences across Cognite applications.</p>
          </div>
          <div className="rounded-lg border border-brand-border bg-brand-bg-elevated/50 p-space-5 flex flex-col">
            <p className="font-display text-scale-2 font-medium text-brand-fg mb-space-2">Scope (teams / surface area)</p>
            <p className="text-scale-3 text-brand-fg-muted flex-1">Used across Cognite product teams for internal applications and partner-built solutions.</p>
          </div>
          <div className="rounded-lg border border-brand-border bg-brand-bg-elevated/50 p-space-5 flex flex-col">
            <p className="font-display text-scale-2 font-medium text-brand-fg mb-space-2">Strategic bet in 5 words</p>
            <p className="text-scale-3 text-brand-fg-muted flex-1">AI-native system for faster product development lifecycle.</p>
          </div>
          <div className="rounded-lg border border-brand-border bg-brand-bg-elevated/50 p-space-5 flex flex-col">
            <p className="font-display text-scale-2 font-medium text-brand-fg mb-space-2">Key constraint we imposed</p>
            <p className="text-scale-3 text-brand-fg-muted flex-1">Rebuild the design system for an AI-native future while maintaining production parity and risk approval so every internal application could migrate within six months.</p>
          </div>
          <div className="rounded-lg border border-brand-border bg-brand-bg-elevated/50 p-space-5 flex flex-col">
            <p className="font-display text-scale-2 font-medium text-brand-fg mb-space-2">Outcome in numbers</p>
            <p className="text-scale-3 text-brand-fg-muted flex-1">Design prototypes dropped from 3+ weeks to ~3 hours, and production application delivery decreased from 3+ months to 6 weeks.</p>
          </div>
          <div className="rounded-lg border border-brand-border bg-brand-bg-elevated/50 p-space-5 flex flex-col">
            <p className="font-display text-scale-2 font-medium text-brand-fg mb-space-2">What we&apos;d do next</p>
            <p className="text-scale-3 text-brand-fg-muted flex-1">Expand Aura&apos;s component registry, deepen AI tooling integration, with agent automations and improve governance based on feedback.</p>
          </div>
        </div>
      </section>

      {/* 3. Thesis + hero (two-column) */}
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
        <aside className="max-w-measure border-l-4 border-brand-highlight pl-space-6 py-space-4 bg-brand-bg-elevated/30 rounded-r-lg" aria-labelledby="l1-impact-heading">
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
        <aside className="max-w-measure border-l-4 border-brand-highlight pl-space-6 py-space-4 bg-brand-bg-elevated/30 rounded-r-lg" aria-labelledby="l3-impact-heading">
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

      <CaseStudyFooter />
    </article>
  );
}
