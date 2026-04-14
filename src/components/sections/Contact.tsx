"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { trackEvent } from "@/lib/analytics";

const CONTACT_EMAIL = "annaaiautomation@outlook.com";

type FormValues = {
  full_name: string;
  email: string;
  subject: string;
  message: string;
};

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ mode: "onBlur" });

  async function onSubmit(data: FormValues) {
    trackEvent("lead_form_submit", { subject: data.subject });
    setSubmitError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const json = await res.json().catch(() => null);
        throw new Error(json?.error ?? "Error submitting form");
      }
    } catch (err: any) {
      setSubmitError(err?.message ?? "Error submitting form");
      return;
    }
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 6000);
  }

  return (
    <section id="contact" className="scroll-mt-24 border-t border-slate-200/60 bg-slate-50/50 py-20 dark:border-white/10 dark:bg-slate-950/40 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Tell us about your automation roadmap"
          subtitle="We respond within one business day. Share context on systems, regions, and success metrics."
        />
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-slate-600 dark:text-slate-300">
          Prefer email?{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-medium text-slate-900 underline decoration-slate-300 underline-offset-4 transition hover:decoration-sky-400 dark:text-white dark:decoration-white/20 dark:hover:decoration-violet-400"
          >
            {CONTACT_EMAIL}
          </a>
        </p>
        <div className="mx-auto max-w-2xl rounded-2xl border border-slate-200/80 bg-white/80 p-8 shadow-glass backdrop-blur-md dark:border-white/10 dark:bg-slate-900/60">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="flex flex-col items-center gap-3 py-10 text-center"
              >
                <CheckCircle2 className="h-12 w-12 text-emerald-500" />
                <p className="text-lg font-semibold text-slate-900 dark:text-white">Thank you</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Your message is received. Our team will reach out shortly.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
              >
                <div>
                  <label htmlFor="full_name" className="text-sm font-medium text-slate-700 dark:text-slate-200">
                    Full Name
                  </label>
                  <input
                    id="full_name"
                    className="mt-1 w-full rounded-xl border border-slate-200 bg-white/90 px-4 py-3 text-sm text-slate-900 outline-none ring-sky-500/40 transition focus:ring-2 dark:border-white/10 dark:bg-slate-950/60 dark:text-white"
                    {...register("full_name", {
                      required: "Full name is required",
                      minLength: { value: 2, message: "Too short" },
                    })}
                  />
                  {errors.full_name ? <p className="mt-1 text-xs text-red-500">{errors.full_name.message}</p> : null}
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-200">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="mt-1 w-full rounded-xl border border-slate-200 bg-white/90 px-4 py-3 text-sm text-slate-900 outline-none ring-sky-500/40 transition focus:ring-2 dark:border-white/10 dark:bg-slate-950/60 dark:text-white"
                    {...register("email", {
                      required: "Email is required",
                      pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                    })}
                  />
                  {errors.email ? <p className="mt-1 text-xs text-red-500">{errors.email.message}</p> : null}
                </div>
                <div>
                  <label htmlFor="subject" className="text-sm font-medium text-slate-700 dark:text-slate-200">
                    Subject
                  </label>
                  <input
                    id="subject"
                    className="mt-1 w-full rounded-xl border border-slate-200 bg-white/90 px-4 py-3 text-sm text-slate-900 outline-none ring-sky-500/40 transition focus:ring-2 dark:border-white/10 dark:bg-slate-950/60 dark:text-white"
                    {...register("subject")}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-200">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 w-full rounded-xl border border-slate-200 bg-white/90 px-4 py-3 text-sm text-slate-900 outline-none ring-sky-500/40 transition focus:ring-2 dark:border-white/10 dark:bg-slate-950/60 dark:text-white"
                    {...register("message", {
                      required: "Message is required",
                      minLength: { value: 10, message: "Please add a bit more detail" },
                    })}
                  />
                  {errors.message ? <p className="mt-1 text-xs text-red-500">{errors.message.message}</p> : null}
                </div>
                <PrimaryButton type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send message
                    </>
                  )}
                </PrimaryButton>

                {submitError ? <p className="text-sm text-red-500">{submitError}</p> : null}
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

