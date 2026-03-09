import type { Config } from "tailwindcss";

const config: Config = {
  safelist: [
    "bg-brand-highlight",
    "border-brand-highlight",
  ],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          fg: "var(--color-fg)",
          "fg-muted": "var(--color-fg-muted)",
          bg: "var(--color-bg)",
          "bg-elevated": "var(--color-bg-elevated)",
          border: "var(--color-border)",
          accent: "var(--color-accent)",
          highlight: "var(--color-highlight)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "scale-1": ["var(--text-1)", { lineHeight: "var(--leading-tight)" }],
        "scale-2": ["var(--text-2)", { lineHeight: "var(--leading-tight)" }],
        "scale-3": ["var(--text-3)", { lineHeight: "var(--leading-snug)" }],
        "scale-4": ["var(--text-4)", { lineHeight: "var(--leading-snug)" }],
        "scale-5": ["var(--text-5)", { lineHeight: "var(--leading-normal)" }],
        "scale-6": ["var(--text-6)", { lineHeight: "var(--leading-normal)" }],
      },
      spacing: {
        "space-1": "var(--space-1)",
        "space-2": "var(--space-2)",
        "space-3": "var(--space-3)",
        "space-4": "var(--space-4)",
        "space-5": "var(--space-5)",
        "space-6": "var(--space-6)",
        "space-8": "var(--space-8)",
        "space-10": "var(--space-10)",
        "space-12": "var(--space-12)",
        "space-16": "var(--space-16)",
        "space-20": "var(--space-20)",
        "space-24": "var(--space-24)",
      },
      maxWidth: {
        measure: "var(--measure)",
        content: "var(--content-width)",
      },
    },
  },
  plugins: [],
};

export default config;
