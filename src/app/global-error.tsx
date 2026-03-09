"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui", padding: "2rem", background: "#fafafa", color: "#1a1a1a" }}>
        <h1 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>Something went wrong</h1>
        <p style={{ marginBottom: "1rem", color: "#5c5c5c" }}>{error.message}</p>
        <button
          type="button"
          onClick={() => reset()}
          style={{
            padding: "0.5rem 1rem",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
