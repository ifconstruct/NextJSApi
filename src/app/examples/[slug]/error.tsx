'use client';

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="page-intro">
      <span className="eyebrow">ERROR BOUNDARY</span>
      <h1>Something went sideways.</h1>
      <p>
        The segment boundary caught the error. The shared layout and navigation
        remain available.
      </p>
      <button className="button primary" onClick={reset}>
        Try again ↻
      </button>
    </div>
  );
}
