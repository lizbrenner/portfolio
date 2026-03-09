"use client";

export default function AuraError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="py-space-12">
      <p className="text-scale-3 text-brand-fg-muted mb-space-4">
        Something went wrong loading this page.
      </p>
      <p className="text-scale-2 text-brand-fg-muted mb-space-6">{error.message}</p>
      <button
        type="button"
        onClick={() => reset()}
        className="text-scale-3 text-brand-accent hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent focus-visible:outline-offset-2 rounded px-space-4 py-space-2"
      >
        Try again
      </button>
    </div>
  );
}
