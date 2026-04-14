"use client";

import { useEffect, useMemo, useState } from "react";

type Submission = {
  id: string;
  created_at: string;
  full_name: string;
  email: string;
  subject: string;
  message: string;
  is_read?: boolean | null;
};

export default function AdminPage() {
  const [token, setToken] = useState("");
  const [items, setItems] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [updating, setUpdating] = useState<Record<string, boolean>>({});

  const hasToken = useMemo(() => token.trim().length > 0, [token]);

  async function load() {
    if (!hasToken) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/contact-submissions", {
        headers: { "x-admin-token": token.trim() },
        cache: "no-store",
      });
      const json = await res.json();
      if (!res.ok || !json?.ok) throw new Error(json?.error ?? "Failed to load");
      setItems((json.items ?? []) as Submission[]);
    } catch (e: any) {
      setError(e?.message ?? "Failed to load");
      setItems([]);
    } finally {
      setLoading(false);
    }
  }

  async function markAsRead(id: string) {
    if (!hasToken) return;
    setUpdating((s) => ({ ...s, [id]: true }));
    try {
      const res = await fetch(`/api/admin/contact-submissions/${id}`, {
        method: "PATCH",
        headers: { "x-admin-token": token.trim() },
      });
      const json = await res.json().catch(() => null);
      if (!res.ok || !json?.ok) throw new Error(json?.error ?? "Failed to update");
      setItems((prev) => prev.map((x) => (x.id === id ? { ...x, is_read: true } : x)));
    } catch (e: any) {
      setError(e?.message ?? "Failed to update");
    } finally {
      setUpdating((s) => {
        const next = { ...s };
        delete next[id];
        return next;
      });
    }
  }

  useEffect(() => {
    void load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasToken]);

  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Admin</h1>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          View Contact form submissions. Set an <span className="font-mono">ADMIN_TOKEN</span> environment variable to
          protect this page.
        </p>
      </div>

      <div className="mt-8 rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-glass backdrop-blur-md dark:border-white/10 dark:bg-slate-900/60">
        <label className="text-sm font-medium text-slate-700 dark:text-slate-200">Admin token</label>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
          <input
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="Enter ADMIN_TOKEN"
            className="w-full rounded-xl border border-slate-200 bg-white/90 px-4 py-3 text-sm text-slate-900 outline-none ring-sky-500/40 transition focus:ring-2 dark:border-white/10 dark:bg-slate-950/60 dark:text-white"
            type="password"
            autoComplete="off"
          />
          <button
            type="button"
            onClick={load}
            disabled={!hasToken || loading}
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
          >
            {loading ? "Loading…" : "Refresh"}
          </button>
        </div>
        {error ? <p className="mt-3 text-sm text-red-500">{error}</p> : null}
      </div>

      <div className="mt-10 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Submissions</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">{items.length} total</p>
      </div>

      <div className="mt-4 grid gap-4">
        {items.map((s) => (
          <article
            key={s.id}
            className={[
              "rounded-2xl border bg-white/70 p-6 shadow-sm backdrop-blur-md dark:bg-slate-900/50",
              s.is_read
                ? "border-emerald-200/70 opacity-70 dark:border-emerald-500/20"
                : "border-slate-200/80 dark:border-white/10",
            ].join(" ")}
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <p className="font-semibold text-slate-900 dark:text-white">
                {s.full_name} <span className="text-slate-500 dark:text-slate-400">({s.subject})</span>
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{new Date(s.created_at).toLocaleString()}</p>
            </div>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{s.email}</p>
            <p className="mt-4 whitespace-pre-wrap text-sm leading-relaxed text-slate-700 dark:text-slate-200">
              {s.message}
            </p>
            <div className="mt-5 flex items-center justify-between">
              {s.is_read ? <span className="text-xs font-medium text-emerald-600 dark:text-emerald-300">✔ Read</span> : <span />}
              <button
                type="button"
                disabled={Boolean(s.is_read) || Boolean(updating[s.id])}
                onClick={() => markAsRead(s.id)}
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {updating[s.id] ? "Updating…" : "Mark as Read"}
              </button>
            </div>
          </article>
        ))}

        {!loading && items.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300/70 p-10 text-center dark:border-white/20">
            <p className="text-sm text-slate-600 dark:text-slate-300">No submissions yet.</p>
          </div>
        ) : null}
      </div>
    </main>
  );
}

