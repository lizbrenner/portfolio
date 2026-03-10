"use client";

import dynamic from "next/dynamic";

/**
 * Agentation toolbar — dev only. Loaded via AgentationLoader (dynamic, ssr: false)
 * so the server never bundles agentation. See https://agentation.dev/install
 * If the agentation chunk fails to load (e.g. Turbopack chunk path issues), we
 * return a no-op component so the app still runs.
 */
const Agentation = dynamic(
  () =>
    import("agentation")
      .then((m) => ({ default: m.Agentation }))
      .catch(() => {
        if (typeof window !== "undefined") {
          console.warn("[Agentation] Chunk failed to load; toolbar disabled.");
        }
        return { default: () => null };
      }),
  { ssr: false }
);

export function AgentationDev() {
  if (process.env.NODE_ENV !== "development") return null;
  return <Agentation />;
}
