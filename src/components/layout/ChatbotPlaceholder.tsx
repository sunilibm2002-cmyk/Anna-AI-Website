"use client";

import { MessageCircle, Sparkles, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

/**
 * Floating assistant shell. Replace content with your chat SDK or API stream.
 */
export function ChatbotPlaceholder() {
  const [open, setOpen] = useState(false);

  return (
    <div className="pointer-events-none fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3 sm:bottom-8 sm:right-8">
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            className="pointer-events-auto w-[min(100vw-2rem,380px)] overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 shadow-2xl shadow-sky-500/10 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/90"
          >
            <div className="flex items-center justify-between border-b border-slate-200/80 px-4 py-3 dark:border-white/10">
              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-violet-600 text-white">
                  <Sparkles className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">Anna Assistant</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">AI concierge (placeholder)</p>
                </div>
              </div>
              <button
                type="button"
                aria-label="Close chat"
                onClick={() => setOpen(false)}
                className="rounded-lg p-1 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-3 px-4 py-4 text-sm text-slate-600 dark:text-slate-300">
              <p>Hi! I am a UI placeholder for your enterprise assistant. Connect me to your LLM or support bot.</p>
              <ul className="list-inside list-disc text-xs text-slate-500 dark:text-slate-400">
                <li>Book a demo</li>
                <li>Explain DSPS</li>
                <li>Route to human SDR</li>
              </ul>
            </div>
            <div className="border-t border-slate-200/80 bg-slate-50/80 px-4 py-3 text-xs text-slate-500 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-500">
              Tip: mount your widget SDK here without blocking main thread.
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.button
        type="button"
        layout
        onClick={() => setOpen((v) => !v)}
        className="pointer-events-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-violet-600 text-white shadow-lg shadow-sky-500/30 ring-4 ring-white/30 dark:ring-slate-900/40"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        aria-label={open ? "Close assistant" : "Open assistant"}
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </motion.button>
    </div>
  );
}

