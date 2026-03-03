import Link from "next/link";
import {
  IconMailFilled,
  IconBrandLinkedinFilled,
  IconFileCvFilled,
} from "@tabler/icons-react";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/writing", label: "Hobby projects" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "mailto:liz.m.brenner@gmail.com",
    label: "Email",
    icon: IconMailFilled,
  },
  {
    href: "https://www.linkedin.com/in/elizabethmbrenner/",
    label: "LinkedIn",
    icon: IconBrandLinkedinFilled,
    external: true,
  },
  {
    href: "#",
    label: "CV / Resume",
    icon: IconFileCvFilled,
  },
];

export function Footer() {
  return (
    <footer
      className="mt-auto py-space-10 md:py-space-12"
      role="contentinfo"
    >
      <div className="flex flex-wrap items-center justify-between gap-x-space-6 gap-y-space-4 text-scale-2 text-brand-fg-muted">
        <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-x-space-6 gap-y-space-2">
          {footerLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-brand-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent focus-visible:outline-offset-2 rounded transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <nav aria-label="Social and contact" className="flex items-center gap-space-4">
          {socialLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                {...(item.external && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                className="text-brand-fg-muted hover:text-brand-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent focus-visible:outline-offset-2 rounded transition-colors"
                aria-label={item.label}
              >
                <Icon size={24} stroke={1.5} aria-hidden />
              </a>
            );
          })}
        </nav>
      </div>
    </footer>
  );
}
