'use client'

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useInView } from "./useInView";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is Watchtower another cloud dashboard?",
    answer:
      "No. Watchtower runs as a macOS desktop application with a local Node sidecar. Your repos, auth, and execution stay on the machine. There is no cloud service between your Slack workspace and your code.",
  },
  {
    question: "What kind of work can it handle?",
    answer:
      "PR review, bug fixes, owner autopilot, and dev-assist tasks that originate as Slack mentions or DMs. Each intent maps to a distinct workflow with its own guardrails — not a single monolithic prompt.",
  },
  {
    question: "How does a leader stay in control once autonomy starts?",
    answer:
      "Every run produces a trace. The desktop app shows active jobs, success streaks, failure diagnostics, and learning signals in real time. Allowlists, routing rules, and owner overrides give you the knobs.",
  },
  {
    question: "Why market a Mac-only product?",
    answer:
      "Because shipping local-first on one platform well is more honest than pretending cross-platform is ready. Real repos, GitHub auth, and developer toolchains already live on macOS for most of the teams we work with.",
  },
];

export function FAQ() {
  const [ref, inView] = useInView(0.1);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative px-6 py-20" id="faq">
      <div className="mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              className="h-px bg-[#5EEAD4]/30"
              initial={{ width: 0 }}
              animate={inView ? { width: 32 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <p
              className="text-[#5EEAD4] tracking-[0.2em]"
              style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: "0.6875rem", textTransform: "uppercase" }}
            >
              FAQ
            </p>
          </div>

          <h2
            className="text-[#E8E8ED] mb-10"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", lineHeight: 1.15, fontWeight: 600, letterSpacing: "-0.02em" }}
          >
            The practical questions.
          </h2>

          <div className="rounded-xl border border-white/[0.06] overflow-hidden">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className={`${i > 0 ? "border-t border-white/[0.04]" : ""} transition-colors duration-200 ${
                  openIndex === i ? "bg-white/[0.02]" : hoveredIndex === i ? "bg-white/[0.01]" : ""
                }`}
                initial={{ opacity: 0, y: 8 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <button
                  className="w-full flex items-center justify-between px-5 py-4 text-left group"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <div className="flex items-center gap-3 pr-6">
                    {/* Question number */}
                    <span
                      className={`transition-colors duration-200 ${openIndex === i ? "text-[#5EEAD4]" : "text-[#3A3A42]"}`}
                      style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: "0.625rem", fontWeight: 500 }}
                    >
                      0{i + 1}
                    </span>
                    <span
                      className={`transition-colors duration-200 ${openIndex === i ? "text-[#E8E8ED]" : hoveredIndex === i ? "text-[#E8E8ED]" : "text-[#A0A0AB]"}`}
                      style={{ fontSize: "0.875rem" }}
                    >
                      {faq.question}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="shrink-0"
                  >
                    <ChevronDown
                      size={14}
                      className={`transition-colors duration-200 ${openIndex === i ? "text-[#5EEAD4]" : "text-[#6B6B76]"}`}
                    />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-4 pl-[52px]">
                        <p className="text-[#6B6B76]" style={{ fontSize: "0.8125rem", lineHeight: 1.7 }}>
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
