import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
}

export function Button({ href, children, primary }: ButtonProps) {
  const base =
    "inline-block px-space-4 py-space-2 text-scale-3 font-medium rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent focus-visible:outline-offset-2 transition-colors";
  const styles = primary
    ? "bg-brand-accent text-white hover:opacity-90"
    : "border border-brand-border text-brand-fg hover:border-brand-fg-muted";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}
