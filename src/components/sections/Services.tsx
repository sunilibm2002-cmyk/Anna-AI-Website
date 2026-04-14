"use client";

import {
  Bot,
  GitBranch,
  Layers,
  LineChart,
  Puzzle,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

const services = [
  {
    icon: Bot,
    title: "AI Agents",
    description: "Sales, support, and operations copilots with guardrails, tool use, and audit trails.",
  },
  {
    icon: LineChart,
    title: "Demand & Supply Planning (DSPS)",
    description: "Forecasting, S&OP workflows, and scenario planning tuned for volatility and scale.",
  },
  {
    icon: GitBranch,
    title: "Workflow Automation",
    description: "n8n, APIs, and event-driven orchestration connecting people, data, and systems.",
  },
  {
    icon: Puzzle,
    title: "Enterprise Integrations",
    description: "SAP, Oracle, Dynamics, and bespoke stacks with resilient pipelines and monitoring.",
  },
  {
    icon: Layers,
    title: "SaaS Platforms",
    description: "Planning and analytics products your teams can adopt without compromising IT standards.",
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 border-b border-slate-200/60 py-20 dark:border-white/10 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Capabilities"
          title="Services built for enterprise velocity"
          subtitle="Composable modules that meet you where you are and scale as adoption grows."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <GlassCard key={s.title} delay={i * 0.05} className="group h-full">
              <s.icon className="h-10 w-10 text-sky-500 transition group-hover:scale-105 group-hover:text-violet-500 dark:text-sky-300 dark:group-hover:text-violet-300" />
              <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{s.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

