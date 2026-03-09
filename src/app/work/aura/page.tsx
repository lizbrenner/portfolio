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
            Redesigning How Design Decisions Are Produced
          </h2>
          <p className="mt-space-4 text-scale-3 text-brand-fg-muted">
            One-sentence thesis: We shifted design from a manual, document-driven process into a machine-readable system where design decisions can be generated, validated, and implemented through AI-assisted workflows.
          </p>
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
          <div className="max-w-measure">
            <h3 id="l1-inflection-heading" className="font-display text-scale-3 font-medium text-brand-fg mb-space-3">
              Inflection point & strategic bet
            </h3>
            <p className="text-scale-3 text-brand-fg-muted font-medium text-brand-fg/90 mb-space-2">Breaking point</p>
            <p className="text-scale-3 text-brand-fg-muted mb-space-4">
              Traditional design systems scaled consistency, but not decision velocity.
              Designers still spent weeks producing artifacts while engineers manually translated them into code. As AI tools began generating interfaces directly from structured inputs, it became clear that static Figma libraries and documentation were no longer the right interface for building software.
            </p>
            <p className="text-scale-3 text-brand-fg-muted font-medium text-brand-fg/90 mb-space-2">What we bet on</p>
            <p className="text-scale-3 text-brand-fg-muted mb-space-2">
              We bet on an AI-native design system where design primitives are machine-readable and usable by both humans and AI agents.
              Instead of designing individual screens, we invested in:
            </p>
            <ul className="space-y-space-1 text-scale-3 text-brand-fg-muted list-disc list-inside mb-space-2">
              <li>tokens that encode design decisions</li>
              <li>composable components with strict contracts</li>
              <li>a registry AI tools can query and generate from</li>
            </ul>
            <p className="text-scale-3 text-brand-fg-muted">
              The goal was simple: if AI is building interfaces, the design system has to be something AI can actually understand.
            </p>
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
          <p className="max-w-measure text-scale-3 text-brand-fg-muted mb-space-4">
            The architecture moved from design artifacts → documentation → implementation to a shared source of truth between design, code, and AI tools.
          </p>
          <p className="text-scale-3 text-brand-fg-muted font-medium text-brand-fg/90 mb-space-2">Key shifts included:</p>
          <ul className="max-w-measure space-y-space-2 text-scale-3 text-brand-fg-muted list-disc list-inside mb-space-4">
            <li><strong className="text-brand-fg">Tokens as the canonical design layer</strong> — Design decisions (color, spacing, typography, motion) became structured tokens rather than style guidelines.</li>
            <li><strong className="text-brand-fg">Components as programmable contracts</strong> — Components define not just visuals but allowed states, behaviors, and composition rules, which AI tools can generate safely.</li>
            <li><strong className="text-brand-fg">Registry-driven distribution</strong> — Instead of static libraries, the system exposes components through a registry so tools like Cursor or other AI builders can pull them directly.</li>
            <li><strong className="text-brand-fg">Machine-readable constraints</strong> — We enforced constraints so generated UI stays coherent.</li>
          </ul>
          <p className="max-w-measure text-scale-3 text-brand-fg-muted mb-space-2">For example:</p>
          <ul className="max-w-measure space-y-space-1 text-scale-3 text-brand-fg-muted list-disc list-inside mb-space-4">
            <li>tokens control styling boundaries</li>
            <li>components expose limited variants</li>
            <li>composition rules prevent invalid UI patterns</li>
          </ul>
          <p className="max-w-measure text-scale-3 text-brand-fg-muted mb-space-4">
            These constraints are what allow AI to generate quickly without breaking consistency.
          </p>
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
          <p className="text-scale-3 text-brand-fg font-medium mb-space-1">Impact</p>
          <p className="text-scale-3 text-brand-fg-muted mb-space-4">
            Early internal prototypes showed dramatic speed improvements: design prototypes reduced from 3+ weeks to a few hours; production delivery reduced from 3+ months to ~6 weeks.
            More importantly, teams shifted from designing screens to designing systems and primitives.
          </p>
          <p className="text-scale-3 text-brand-fg font-medium mb-space-1">Learnings</p>
          <p className="text-scale-3 text-brand-fg-muted mb-space-2">
            The biggest resistance wasn&apos;t technical. It was mental. Designers had to move from crafting interfaces to authoring systems that generate interfaces.
            We also learned that: under-specified tokens create chaos; overly flexible components break AI generation; constraints are what enable speed.
          </p>
          <p className="text-scale-3 text-brand-fg font-medium mb-space-1">Next lever</p>
          <p className="text-scale-3 text-brand-fg-muted">
            Expanding the AI surface area of the system — exposing more structured metadata so AI tools can reason about layout, workflows, and domain-specific patterns.
          </p>
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
            <p className="text-scale-3 text-brand-fg-muted font-medium text-brand-fg/90 mb-space-2">Breaking point</p>
            <p className="text-scale-3 text-brand-fg-muted mb-space-4">
              Even with a strong design system, workflows still looked like: design → review → spec → engineering → implementation. The design artifact remained the bottleneck.
            </p>
            <p className="text-scale-3 text-brand-fg-muted font-medium text-brand-fg/90 mb-space-2">What we bet on</p>
            <p className="text-scale-3 text-brand-fg-muted mb-space-4">
              We shifted toward AI-assisted interface generation using system primitives. Designers now guide AI tools using prompts, constraints, and system components rather than building everything manually.
            </p>
            <p className="text-scale-3 text-brand-fg-muted font-medium text-brand-fg/90 mb-space-2">Where AI enters the loop</p>
            <p className="text-scale-3 text-brand-fg-muted mb-space-2">AI handles:</p>
            <ul className="space-y-space-1 text-scale-3 text-brand-fg-muted list-disc list-inside mb-space-2">
              <li>initial layout generation</li>
              <li>component composition</li>
              <li>repetitive interface scaffolding</li>
              <li>rapid exploration of variations</li>
            </ul>
            <p className="text-scale-3 text-brand-fg-muted mb-space-2">Humans still own:</p>
            <ul className="space-y-space-1 text-scale-3 text-brand-fg-muted list-disc list-inside">
              <li>product intent</li>
              <li>domain understanding</li>
              <li>system rules</li>
              <li>quality and judgment</li>
            </ul>
            <p className="text-scale-3 text-brand-fg-muted mt-space-4">
              The role of design shifted from pixel production to system orchestration.
            </p>
          </div>
        </section>

        {/* 6b. Before vs after (side-by-side) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-8" aria-labelledby="l2-beforeafter-heading">
          <h3 id="l2-beforeafter-heading" className="sr-only">Before vs after</h3>
          <div className="p-space-6 rounded-lg border border-brand-border bg-brand-bg-elevated/50">
            <p className="font-display text-scale-3 font-medium text-brand-fg mb-space-2">Before</p>
            <p className="text-scale-3 text-brand-fg-muted">Design → prototype → handoff → engineering rebuilds UI</p>
            <div className="mt-space-4 aspect-[16/10] rounded bg-brand-fg-muted/10 flex items-center justify-center">
              <span className="text-scale-2 text-brand-fg-muted">[ Image ]</span>
            </div>
          </div>
          <div className="p-space-6 rounded-lg border border-brand-border bg-brand-bg-elevated/50">
            <p className="font-display text-scale-3 font-medium text-brand-fg mb-space-2">After</p>
            <p className="text-scale-3 text-brand-fg-muted">Prompt → AI generates UI using system components → designer refines → production</p>
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
            <p className="text-scale-3 text-brand-fg font-medium mb-space-1">Impact</p>
            <p className="text-scale-3 text-brand-fg-muted mb-space-4">
              Cycle time for interface exploration dropped dramatically. Designers can now explore orders of magnitude more interface variations in the same time. Engineering teams receive UI that already aligns with the component system.
            </p>
            <p className="text-scale-3 text-brand-fg font-medium mb-space-1">Learnings</p>
            <p className="text-scale-3 text-brand-fg-muted mb-space-4">
              AI is excellent at generation, but poor at judgment. The key insight was that AI doesn&apos;t replace systems — it depends on them. Without strict tokens and components, generated interfaces degrade quickly.
            </p>
            <p className="text-scale-3 text-brand-fg font-medium mb-space-1">Next workflow to redesign</p>
            <p className="text-scale-3 text-brand-fg-muted">
              Moving beyond UI generation toward AI-assisted workflow design, where AI can generate entire application flows using domain-specific patterns.
            </p>
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
          <div className="max-w-measure">
            <h3 id="l3-context-heading" className="font-display text-scale-3 font-medium text-brand-fg mb-space-3">
              Inflection, bet & how architecture supported the org
            </h3>
            <p className="text-scale-3 text-brand-fg-muted font-medium text-brand-fg/90 mb-space-2">Breaking point</p>
            <p className="text-scale-3 text-brand-fg-muted mb-space-4">
              Traditional design systems centralize authority. Every change flows through a small core team, which eventually becomes a bottleneck. As the system grew, governance slowed adoption and contributions.
            </p>
            <p className="text-scale-3 text-brand-fg-muted font-medium text-brand-fg/90 mb-space-2">What we bet on</p>
            <p className="text-scale-3 text-brand-fg-muted mb-space-4">
              We moved toward governance through structure rather than review. Instead of controlling contributions manually, we encoded rules into the system itself. Tokens, component contracts, and pipelines act as guardrails. If something passes the system constraints, it can ship.
            </p>
            <p className="text-scale-3 text-brand-fg-muted font-medium text-brand-fg/90 mb-space-2">How architecture reduced gatekeeping</p>
            <p className="text-scale-3 text-brand-fg-muted mb-space-2">The architecture enabled a more distributed model:</p>
            <ul className="space-y-space-1 text-scale-3 text-brand-fg-muted list-disc list-inside mb-space-2">
              <li>tokens enforce visual consistency automatically</li>
              <li>component contracts enforce correct usage</li>
              <li>registry pipelines validate contributions</li>
            </ul>
            <p className="text-scale-3 text-brand-fg-muted">
              This allowed teams to contribute safely without heavy central approval. The system creates leverage for the design team — instead of policing consistency, we focus on evolving the primitives.
            </p>
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
          <p className="text-scale-3 text-brand-fg font-medium mb-space-1">Impact</p>
          <p className="text-scale-3 text-brand-fg-muted mb-space-4">
            Faster adoption across teams; lower barrier to contribution; reduced dependency on the core design system team. The design system became a platform rather than a library.
          </p>
          <p className="text-scale-3 text-brand-fg font-medium mb-space-1">Learnings</p>
          <p className="text-scale-3 text-brand-fg-muted mb-space-4">
            Governance cannot be purely technical. Clear ownership and contribution guidelines are still necessary. Systems create leverage, but people still create alignment.
          </p>
          <p className="text-scale-3 text-brand-fg font-medium mb-space-1">Next organizational lever</p>
          <p className="text-scale-3 text-brand-fg-muted">
            Evolving toward AI-assisted contribution models, where AI helps teams propose components, patterns, or tokens that fit within the system automatically.
          </p>
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
