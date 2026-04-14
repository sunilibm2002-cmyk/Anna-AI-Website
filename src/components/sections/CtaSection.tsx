"use client";

import { motion } from "framer-motion";
import { CalendarCheck } from "lucide-react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export function CtaSection() {
  return (
    <section id="next-step" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-r from-slate-900 via-slate-900 to-sky-900 px-8 py-12 text-center shadow-2xl dark:border-white/10"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),transparent_55%)]" />
          <div className="relative mx-auto max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-200">Next step</p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Contact us</h2>
            <p className="mt-4 text-slate-200">
              See DSPS, agent automations, and integration patterns on your data estate. We will tailor the walkthrough
              to your stakeholders.
            </p>
            <PrimaryButton
              variant="inverted"
              className="mt-8"
              onClick={() => (window.location.href = "/contact")}
            >
              <CalendarCheck className="h-4 w-4" />
              Go to Contact
            </PrimaryButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

