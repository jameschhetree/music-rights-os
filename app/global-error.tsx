"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body
        style={{
          background: "#0a0a0f",
          color: "#f0f0f0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          fontFamily: "system-ui, sans-serif",
          gap: "16px",
        }}
      >
        <h2 style={{ fontSize: "24px", fontWeight: "900" }}>Something went wrong.</h2>
        <button
          onClick={() => reset()}
          style={{
            background: "linear-gradient(135deg, #f5c518, #ffd84d)",
            color: "#080808",
            fontWeight: "700",
            padding: "12px 28px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
