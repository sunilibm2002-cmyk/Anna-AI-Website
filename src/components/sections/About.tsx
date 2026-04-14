"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Target, Zap } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const pillars = [
  {
    icon: Target,
    title: "Vision",
    body: "Make enterprise automation feel inevitable: precise, observable, and human-aligned.",
  },
  {
    icon: ShieldCheck,
    title: "Mission",
    body: "Ship AI systems that earn trust through governance, measurable ROI, and resilient operations.",
  },
  {
    icon: Zap,
    title: "Why Anna",
    body: "We blend agentic AI with classical planning and integration depth your CIO expects.",
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-b border-slate-200/60 py-20 dark:border-white/10 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About us"
          title="Who we are"
          subtitle="Anna AI Automation partners with supply chain leaders, operations heads, and technology executives to modernize planning and execution."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-slate-200/80 bg-white/70 p-6 shadow-glass backdrop-blur-md dark:border-white/10 dark:bg-slate-900/50"
            >
              <p.icon className="h-8 w-8 text-sky-500 dark:text-sky-300" />
              <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

