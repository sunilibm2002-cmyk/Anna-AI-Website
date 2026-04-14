"use client";

import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type Props = Omit<HTMLMotionProps<"button">, "ref"> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "inverted";
};

export function PrimaryButton({
  children,
  className = "",
  variant = "primary",
  type = "button",
  ...rest
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-60";

  const variants: Record<NonNullable<Props["variant"]>, string> = {
    primary:
      "bg-gradient-to-r from-sky-500 to-violet-500 text-white shadow-glow hover:from-sky-400 hover:to-violet-400",
    secondary:
      "border border-slate-300 bg-white/80 text-slate-900 backdrop-blur hover:bg-white dark:border-slate-600 dark:bg-slate-800/80 dark:text-white dark:hover:bg-slate-800",
    ghost: "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800/80",
    inverted: "bg-white text-slate-900 shadow-lg hover:bg-slate-100",
  };

  return (
    <motion.button
      type={type}
      whileTap={{ scale: 0.98 }}
      className={`${base} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </motion.button>
  );
}

