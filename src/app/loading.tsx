export default function Loading() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center bg-surface">
      <div className="flex flex-col items-center gap-4">
        <div
          className="h-12 w-12 animate-spin rounded-full border-2 border-slate-200 border-t-sky-500 dark:border-slate-700 dark:border-t-violet-400"
          role="status"
          aria-label="Loading"
        />
        <p className="text-sm text-slate-500 dark:text-slate-400">Loading experience</p>
      </div>
    </div>
  );
}


