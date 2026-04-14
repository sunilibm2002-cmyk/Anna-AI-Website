"use client";

import { Factory, Pill, ShoppingBag, Truck, UtensilsCrossed } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const industries = [
  { icon: Factory, label: "Manufacturing", detail: "Capacity, materials, and OTIF aligned to demand." },
  { icon: ShoppingBag, label: "Retail", detail: "Omnichannel allocation and promo-aware forecasting." },
  { icon: Truck, label: "Logistics", detail: "Network optimization with exception handling agents." },
  { icon: Pill, label: "Pharma", detail: "Validated workflows and traceability by design." },
  { icon: UtensilsCrossed, label: "FMCG", detail: "High-velocity SKU planning with resilient data." },
];

export function Industries() {
  return (
    <section id="industries" className="scroll-mt-24 border-b border-slate-200/60 py-20 dark:border-white/10 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industries"
          title="Where we deliver impact"
          subtitle="Vertical playbooks accelerate time-to-value while staying compliant with sector norms."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.label}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="flex gap-4 rounded-2xl border border-slate-200/80 bg-white/70 p-5 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-slate-900/50"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-white dark:bg-gradient-to-br dark:from-sky-500 dark:to-violet-600">
                <ind.icon className="h-6 w-6" />
              </span>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">{ind.label}</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{ind.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

