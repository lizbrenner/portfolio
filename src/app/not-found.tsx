import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-space-4">
      <h1 className="font-display text-scale-5 font-medium text-brand-fg mb-space-2">
        Page not found
      </h1>
      <p className="text-scale-3 text-brand-fg-muted mb-space-6">
        This page could not be found.
      </p>
      <Link
        href="/"
        className="text-scale-3 text-brand-accent hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent focus-visible:outline-offset-2 rounded"
      >
        Back to home
      </Link>
    </div>
  );
}
