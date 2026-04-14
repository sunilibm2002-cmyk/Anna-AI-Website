import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-lg flex-col items-center justify-center px-4 py-20 text-center">
      <p className="text-sm font-semibold text-sky-600 dark:text-sky-300">404</p>
      <h1 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">Page not found</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-300">
        The page you are looking for does not exist or was moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-2xl bg-gradient-to-r from-sky-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-glow"
      >
        Back home
      </Link>
    </div>
  );
}


