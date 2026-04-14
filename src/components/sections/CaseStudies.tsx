"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const cases = [
  {
    title: "Global manufacturer",
    impact: "18% forecast error reduction in 90 days",
    detail: "DSPS rollout across 4 plants with SAP-backed reconciliation and planner copilots.",
  },
  {
    title: "Retail network",
    impact: "32% faster replenishment cycles",
    detail: "Agent-assisted exception handling plus n8n orchestration for store clusters.",
  },
  {
    title: "Logistics operator",
    impact: "24/7 ops coverage without headcount spike",
    detail: "Support agents integrated with ticketing, telematics APIs, and human escalation paths.",
  },
  {
    title: "FMCG brand",
    impact: "2.4M annual hours saved in manual reporting",
    detail: "Unified analytics SaaS with governed self-serve dashboards for commercial teams.",
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="scroll-mt-24 border-b border-slate-200/60 py-20 dark:border-white/10 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Proof"
          title="Use cases with measurable impact"
          subtitle="Representative outcomes from engagements with mid-market and global enterprises."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white/90 via-white/70 to-sky-50/60 p-6 shadow-glass backdrop-blur-md dark:border-white/10 dark:from-slate-900/80 dark:via-slate-900/60 dark:to-violet-950/40"
            >
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white dark:bg-white/10">
                  <TrendingUp className="h-5 w-5 text-emerald-400" />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-sky-700 dark:text-sky-300">
                    Case study
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-slate-900 dark:text-white">{c.title}</h3>
                  <p className="mt-2 text-base font-semibold text-emerald-600 dark:text-emerald-400">{c.impact}</p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{c.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

