import type { MetadataRoute } from "next";
import { blogPosts } from "@/content/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://anna-ai-automation.vercel.app";
  const posts = blogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
  }));
  return [{ url: base, lastModified: new Date() }, { url: `${base}/blog`, lastModified: new Date() }, ...posts];
}

