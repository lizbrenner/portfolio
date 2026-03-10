"use client";

import React from "react";

/**
 * Catches chunk load errors from the dynamic Agentation import
 * (e.g. failed to load node_modules_agentation_...) so the rest of the app still works.
 */
export class AgentationErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[Agentation] Failed to load; dev toolbar disabled.", error);
    }
  }

  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}
