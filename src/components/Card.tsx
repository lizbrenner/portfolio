import Link from "next/link";

interface CardProps {
  title: string;
  description?: string;
  href: string;
  outcome?: string;
  role?: string;
  primary?: boolean;
  placeholder?: boolean;
  children?: React.ReactNode;
}

export function Card({
  title,
  description,
  href,
  outcome,
  role,
  primary,
  placeholder,
  children,
}: CardProps) {
  const content = (
    <>
      {children}
      <div className="p-space-4 md:p-space-6">
        <h3 className={`font-display font-medium text-brand-fg ${primary ? "text-scale-4" : "text-scale-3"}`}>
          {title}
        </h3>
        {outcome && (
          <p className="mt-space-2 text-scale-2 text-brand-fg-muted">{outcome}</p>
        )}
        {role && (
          <p className="mt-space-1 text-scale-2 text-brand-fg-muted">{role}</p>
        )}
        {description && (
          <p className="mt-space-2 text-scale-3 text-brand-fg-muted">
            {description}
          </p>
        )}
        {placeholder ? (
          <span className="mt-space-3 inline-block text-scale-2 text-brand-fg-muted">
            Coming soon
          </span>
        ) : (
          <span className="mt-space-3 inline-block text-scale-2 text-brand-accent hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent focus-visible:outline-offset-2 rounded">
            Read case study →
          </span>
        )}
      </div>
    </>
  );

  const articleClass = `bg-brand-bg-elevated border border-brand-border rounded-lg overflow-hidden transition-all ${!placeholder ? "hover:border-brand-fg-muted hover:shadow-sm" : ""}`;

  if (placeholder) {
    return (
      <article className={articleClass}>
        <div className="block h-full">{content}</div>
      </article>
    );
  }

  return (
    <article className={articleClass}>
      <Link
        href={href}
        className="block h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent focus-visible:outline-offset-2 rounded-lg"
      >
        {content}
      </Link>
    </article>
  );
}
