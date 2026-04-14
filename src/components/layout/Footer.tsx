import Link from "next/link";
import { Linkedin, Twitter, Youtube } from "lucide-react";

const CONTACT_EMAIL = "annaaiautomation@outlook.com";

const footerLinks = [
  {
    title: "Company",
    items: [
      { href: "#about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/blog", label: "Blog" },
    ],
  },
  {
    title: "Solutions",
    items: [
      { href: "#services", label: "Services" },
      { href: "#products", label: "Products" },
      { href: "#case-studies", label: "Case Studies" },
    ],
  },
  {
    title: "Legal",
    items: [
      { href: "#", label: "Privacy" },
      { href: "#", label: "Terms" },
      { href: "#", label: "Security" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-slate-50/80 dark:border-white/10 dark:bg-slate-950/80">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-violet-600 text-sm font-bold text-white">
                AA
              </span>
              <div>
                <p className="font-bold text-slate-900 dark:text-white">Anna AI Automation</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">Enterprise AI partner</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
              Futuristic automation for planning, agents, and integrations. Built for scale, governed for enterprise.
            </p>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
              Email{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-medium text-slate-900 underline decoration-slate-300 underline-offset-4 transition hover:decoration-sky-400 dark:text-white dark:decoration-white/20 dark:hover:decoration-violet-400"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:border-sky-400 hover:text-sky-600 dark:border-white/10 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-violet-400"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:border-sky-400 hover:text-sky-600 dark:border-white/10 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-violet-400"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                aria-label="YouTube"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:border-sky-400 hover:text-sky-600 dark:border-white/10 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-violet-400"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {footerLinks.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-900 dark:text-white">{col.title}</p>
              <ul className="mt-4 space-y-2">
                {col.items.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-slate-600 transition hover:text-sky-600 dark:text-slate-400 dark:hover:text-violet-300"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-12 border-t border-slate-200/80 pt-8 text-center text-xs text-slate-500 dark:border-white/10 dark:text-slate-500">
          {new Date().getFullYear()} Anna AI Automation. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

