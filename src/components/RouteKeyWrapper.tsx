"use client";

import { usePathname } from "next/navigation";

/**
 * Wraps page content with a key derived from the pathname so that each route
 * gets a fresh mount. This prevents client-side navigation from leaving the
 * app in a broken state when one page fails to render (e.g. content disappears
 * and persists when navigating back).
 */
export function RouteKeyWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return <div key={pathname ?? "default"} className="min-h-0 w-full">{children}</div>;
}
