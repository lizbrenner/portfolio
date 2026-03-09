import { type ReactNode } from "react";

export interface BadgeProps {
  children: ReactNode;
  className?: string;
}

/**
 * Badge for impact metrics and labels. Uses neon yellow-green background with no border.
 */
export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex px-space-4 py-space-2 rounded-lg bg-brand-highlight text-scale-2 text-white ${className}`}
    >
      {children}
    </span>
  );
}
