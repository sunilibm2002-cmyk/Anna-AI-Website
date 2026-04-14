"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Testimonial = {
  name: string;
  role: string;
  company: string;
  body: string;
};

const testimonials: Testimonial[] = [];

export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="scroll-mt-24 border-b border-slate-200/60 py-20 dark:border-white/10 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by operations and technology leaders"
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((q, i) => (
            <motion.figure
              key={q.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-slate-900/60"
            >
              <Quote className="h-8 w-8 text-violet-500/80 dark:text-violet-300/80" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                &ldquo;{q.body}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-slate-200/80 pt-4 text-sm dark:border-white/10">
                <p className="font-semibold text-slate-900 dark:text-white">{q.name}</p>
                <p className="text-slate-500 dark:text-slate-400">
                  {q.role} · {q.company}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

