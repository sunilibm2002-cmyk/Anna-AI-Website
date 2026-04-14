import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/content/blog";

export const metadata: Metadata = {
  title: "Insights",
  description: "Articles on DSPS, enterprise AI agents, and integration patterns. CMS-ready structure.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-widest text-sky-600 dark:text-sky-300">Blog</p>
      <h1 className="mt-3 text-4xl font-bold text-slate-900 dark:text-white">Insights for operators and CIOs</h1>
      <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
        Content is sourced from <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-slate-800">src/content/blog.ts</code>{" "}
        so you can swap in a headless CMS without changing page layout.
      </p>
      <ul className="mt-12 space-y-6">
        {blogPosts.map((post) => (
          <li
            key={post.slug}
            className="rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur-md transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-slate-900/60"
          >
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
              <time dateTime={post.date}>{post.date}</time>
              <span>{post.readMinutes} min read</span>
              <span className="rounded-full bg-sky-500/10 px-2 py-0.5 font-medium text-sky-700 dark:text-sky-200">
                {post.tags.join(" · ")}
              </span>
            </div>
            <h2 className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">
              <Link href={`/blog/${post.slug}`} className="hover:text-sky-600 dark:hover:text-sky-300">
                {post.title}
              </Link>
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">{post.excerpt}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-4 inline-flex text-sm font-semibold text-violet-600 hover:text-violet-500 dark:text-violet-300"
            >
              Read article
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

