"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200/60 dark:border-white/10">
      <div
        className="pointer-events-none absolute inset-0 bg-grid-fade bg-grid opacity-90 dark:opacity-60"
        aria-hidden
      />
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl dark:bg-sky-500/25" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-violet-600/20 blur-3xl dark:bg-violet-500/25" />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-28 lg:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-sky-700 dark:text-sky-200">
            Enterprise AI automation
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            Transform Your Business with AI Automation
          </h1>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 sm:text-xl">
            Anna AI Automation delivers governed agents, demand and supply planning systems, and deep ERP
            integrations so your teams move faster with confidence.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <PrimaryButton
              className="w-full sm:w-auto"
              onClick={() => (window.location.href = "/contact")}
            >
              Contact
              <ArrowRight className="h-4 w-4" />
            </PrimaryButton>
            <PrimaryButton
              variant="secondary"
              className="w-full sm:w-auto"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              <PlayCircle className="h-4 w-4" />
              Explore Solutions
            </PrimaryButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-16 grid gap-4 sm:grid-cols-3"
        >
          {[
            { k: "DSPS", v: "Unified demand and supply intelligence" },
            { k: "Agents", v: "Sales, support, and ops copilots" },
            { k: "Integrations", v: "SAP, Oracle, Dynamics ready" },
          ].map((item) => (
            <motion.div
              key={item.k}
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 320, damping: 22 }}
              className="rounded-2xl border border-slate-200/80 bg-white/60 p-5 shadow-glass backdrop-blur-md dark:border-white/10 dark:bg-slate-900/50"
            >
              <p className="text-sm font-semibold text-sky-600 dark:text-sky-300">{item.k}</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.v}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

