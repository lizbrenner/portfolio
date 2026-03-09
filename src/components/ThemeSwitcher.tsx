"use client";

import { useEffect, useState } from "react";
import { IconSunFilled, IconMoonFilled } from "@tabler/icons-react";

const THEME_KEY = "portfolio-theme";
type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem(THEME_KEY) as Theme | null;
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initial = getInitialTheme();
    setTheme(initial);
    applyTheme(initial);
    setMounted(true);
  }, []);

  function toggle() {
    const next: Theme = theme === "light" ? "dark" : "light";
    setTheme(next);
    applyTheme(next);
    localStorage.setItem(THEME_KEY, next);
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={mounted ? toggle : undefined}
      className="flex items-center justify-center rounded p-1 text-brand-fg bg-brand-border/40 hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent focus-visible:outline-offset-2 transition-opacity h-9 w-9"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <IconSunFilled size={22} stroke={1.5} aria-hidden />
      ) : (
        <IconMoonFilled size={22} stroke={1.5} aria-hidden />
      )}
    </button>
  );
}
