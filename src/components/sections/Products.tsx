"use client";

import { motion } from "framer-motion";
import { Boxes, Cpu, Wand2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const items = [
  {
    icon: Boxes,
    name: "DSPS Platform",
    copy: "End-to-end demand and supply planning with real-time signals, collaborative workflows, and executive-ready views.",
    badge: "Flagship",
  },
  {
    icon: Cpu,
    name: "AI Automation Suite",
    copy: "Agent templates, workflow packs, and observability so teams launch automations in days, not quarters.",
    badge: "Suite",
  },
  {
    icon: Wand2,
    name: "Custom AI Solutions",
    copy: "Co-designed programs for unique constraints: regulated industries, complex data estates, global rollouts.",
    badge: "Bespoke",
  },
];

export function Products() {
  return (
    <section id="products" className="scroll-mt-24 border-b border-slate-200/60 py-20 dark:border-white/10 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Products"
          title="Solutions your stakeholders can explain"
          subtitle="Clear packaging for pilots and enterprise expansion, with integration paths that IT can approve."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {items.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-b from-white/90 to-slate-50/90 p-6 shadow-glass backdrop-blur-md dark:border-white/10 dark:from-slate-900/80 dark:to-slate-950/80"
            >
              <span className="inline-flex rounded-full bg-violet-500/15 px-3 py-1 text-xs font-semibold text-violet-700 dark:text-violet-200">
                {p.badge}
              </span>
              <p.icon className="mt-5 h-10 w-10 text-sky-500 dark:text-sky-300" />
              <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">{p.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{p.copy}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

