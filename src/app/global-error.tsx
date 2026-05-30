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
      <body className="min-h-screen bg-[var(--color-deep-black)] text-white flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-6xl font-bold text-gradient mb-4">Something went wrong!</h1>
        <p className="text-gray-400 mb-8 max-w-md">
          A critical error occurred. Please try reloading the page.
        </p>
        <button
          onClick={() => reset()}
          className="px-8 py-3 rounded-full bg-gradient-neon text-white font-semibold glow-purple hover:scale-105 transition-transform duration-300"
        >
          Try again
        </button>
      </body>
    </html>
  );
}
