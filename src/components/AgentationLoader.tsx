"use client";

import dynamic from "next/dynamic";

/**
 * Loads Agentation only on the client so the server never bundles agentation
 * (avoids Turbopack/Next 15+ issues with serverExternalPackages for this package).
 */
const AgentationDev = dynamic(
  () => import("@/components/AgentationDev").then((m) => ({ default: m.AgentationDev })),
  { ssr: false }
);

export function AgentationLoader() {
  return <AgentationDev />;
}
