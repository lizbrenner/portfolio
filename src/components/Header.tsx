import Link from "next/link";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

const mainNav = [
  { href: "/", label: "Work" },
  { href: "/about", label: "About" },
];

export function Header() {
  return (
    <header
      className="py-space-6 md:py-space-8"
      role="banner"
    >
      <nav
        className="flex flex-wrap items-center justify-between gap-space-4"
        aria-label="Main"
      >
        <Link
          href="/"
          className="font-display text-scale-3 text-brand-fg hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent focus-visible:outline-offset-2 rounded transition-opacity"
        >
          Liz Brenner
        </Link>
        <div className="flex items-center gap-space-6 md:gap-space-8">
          <ul className="flex items-center gap-space-6 md:gap-space-8">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-display text-scale-3 text-brand-fg hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent focus-visible:outline-offset-2 rounded transition-opacity"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
}
