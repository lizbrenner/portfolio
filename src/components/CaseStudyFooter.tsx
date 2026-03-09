"use client";

import Link from "next/link";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

export function CaseStudyFooter() {
  return (
    <footer className="col-span-12 mt-space-16 pt-space-8">
      <div className="flex flex-wrap items-center justify-between gap-space-4">
        <Link
          href="/work"
          className="inline-flex items-center gap-space-2 text-scale-3 text-brand-accent hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent focus-visible:outline-offset-2 rounded"
        >
          <IconArrowLeft size={20} stroke={1.5} aria-hidden />
          Back to work
        </Link>
        <Link
          href="/work/agent-landing"
          className="inline-flex items-center gap-space-2 text-scale-3 text-brand-accent hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent focus-visible:outline-offset-2 rounded"
        >
          Next case study
          <IconArrowRight size={20} stroke={1.5} aria-hidden />
        </Link>
      </div>
    </footer>
  );
}
