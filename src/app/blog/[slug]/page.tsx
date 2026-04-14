import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/content/blog";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Article" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <Link href="/blog" className="text-sm font-semibold text-sky-600 hover:text-sky-500 dark:text-sky-300">
        Back to insights
      </Link>
      <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
        {post.date} · {post.readMinutes} min read
      </p>
      <h1 className="mt-3 text-4xl font-bold text-slate-900 dark:text-white">{post.title}</h1>
      <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">{post.excerpt}</p>
      <div className="mt-10 space-y-4 text-slate-600 dark:text-slate-300">
        <p>
          This is placeholder body copy. Replace with MDX or CMS-driven content while keeping the same route and SEO
          helpers in <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm dark:bg-slate-800">generateMetadata</code>.
        </p>
        <p>
          For production, map <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm dark:bg-slate-800">{post.slug}</code>{" "}
          to your content source and render rich components (diagrams, calls-to-action, code samples) as needed.
        </p>
      </div>
    </article>
  );
}

