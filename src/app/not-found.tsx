import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--color-deep-black)] text-white flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-8xl font-bold text-gradient mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
      <p className="text-gray-400 mb-8 max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-8 py-3 rounded-full bg-gradient-neon text-white font-semibold glow-purple hover:scale-105 transition-transform duration-300"
      >
        Go Home
      </Link>
    </div>
  );
}
