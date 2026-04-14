"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function GlassCard({ children, className = "", delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`rounded-2xl border border-slate-200/80 bg-white/70 p-6 shadow-glass backdrop-blur-md dark:border-white/10 dark:bg-slate-900/50 ${className}`}
    >
      {children}
    </motion.div>
  );
}

