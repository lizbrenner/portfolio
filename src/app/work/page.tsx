import Link from "next/link";

const studies = [
  {
    slug: "aura",
    title: "Aura",
    context: "Cognite",
    description: "AI-native design system that cut time to market from 3+ months to 6 weeks",
  },
  {
    slug: "agent-landing",
    title: "Agent chat & landing",
    context: "Cognite",
    description: "Unified AI-driven experience for industrial workflows",
  },
  {
    slug: "placeholder",
    title: "Case study",
    context: "",
    description: "Coming soon",
    placeholder: true,
  },
];

export default function WorkPage() {
  return (
    <div>
      <h1 className="font-display text-scale-4 md:text-scale-5 font-medium text-brand-fg">
        Work
      </h1>
      <ul className="mt-space-12 md:mt-space-16 space-y-space-10 md:space-y-space-12" aria-label="Case studies">
        {studies.map((s) => (
          <li key={s.slug}>
            {s.placeholder ? (
              <div>
                <span className="font-display text-scale-4 md:text-scale-5 font-medium text-brand-fg">
                  {s.title}
                </span>
                <p className="mt-space-1 text-scale-3 text-brand-fg-muted">
                  {s.description}
                </p>
              </div>
            ) : (
              <Link
                href={`/work/${s.slug}`}
                className="block group focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent focus-visible:outline-offset-2 rounded"
              >
                <span className="font-display text-scale-4 md:text-scale-5 font-medium text-brand-fg group-hover:opacity-70 transition-opacity">
                  {s.title}
                </span>
                {s.context && (
                  <span className="font-display text-scale-4 md:text-scale-5 font-medium text-brand-fg opacity-70">
                    {" "}
                    · {s.context}
                  </span>
                )}
                <p className="mt-space-1 text-scale-3 text-brand-fg-muted group-hover:text-brand-fg transition-colors">
                  {s.description}
                </p>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
