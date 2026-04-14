"use client";

import { Activity, Gauge, Link2, Puzzle, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

const features = [
  {
    icon: Sparkles,
    title: "Predictive Analytics",
    text: "Models and monitoring that surface risk early and recommend next best actions.",
  },
  {
    icon: Activity,
    title: "Real-time dashboards",
    text: "Role-based views for planners, operators, and executives with drill-down clarity.",
  },
  {
    icon: Link2,
    title: "API integrations",
    text: "Stable contracts, versioning, and observability for mission-critical connections.",
  },
  {
    icon: Puzzle,
    title: "No-code automation",
    text: "Empower business teams while IT retains policy, secrets, and deployment control.",
  },
  {
    icon: Gauge,
    title: "Scalability",
    text: "Architected for multi-region workloads and seasonal peaks without rework.",
  },
];

export function Features() {
  return (
    <section id="features" className="scroll-mt-24 border-b border-slate-200/60 py-20 dark:border-white/10 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Platform"
          title="Capabilities enterprises expect"
          subtitle="Performance, security, and clarity are not add-ons. They are baked into every engagement."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <GlassCard key={f.title} delay={i * 0.04}>
              <f.icon className="h-9 w-9 text-violet-500 dark:text-violet-300" />
              <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{f.text}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

