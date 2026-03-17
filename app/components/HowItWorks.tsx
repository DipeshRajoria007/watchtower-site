'use client'

import { motion } from "motion/react";
import { useInView } from "./useInView";
import { GlowCard } from "./GlowCard";

const steps = [
  {
    number: "01",
    title: "Slack thread becomes an intake lane.",
    description: "A mention lands. Watchtower parses the ask, detects intent, and frames the job before chaos can spread.",
    detail: "INPUT: REAL TEAM LANGUAGE, NOT CEREMONY.",
    tags: ["mention", "DM", "slash-cmd", "thread"],
  },
  {
    number: "02",
    title: "The right autonomous path takes the wheel.",
    description: "PR review, bug fixing, owner autopilot treated like different instruments, not one giant hammer.",
    detail: "OUTPUT: ACTION MATCHED TO INTENT.",
    tags: ["PR_REVIEW", "BUG_FIX", "AUTOPILOT", "ASSIST"],
  },
  {
    number: "03",
    title: "Every outcome leaves evidence behind.",
    description: "Runs stream into traces, recommendations, and learning signals so leadership can inspect the system.",
    detail: "PROOF: OBSERVABLE AUTOMATION.",
    tags: ["trace", "metrics", "failure-dx", "learn"],
  },
];

export function HowItWorks() {
  const [ref, inView] = useInView(0.1);

  return (
    <section className="relative px-6 py-20" id="how">
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
              How It Works
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0 mb-6">
            <div className="lg:col-span-2">
              <h2
                className="text-[#E8E8ED] mb-2"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", lineHeight: 1.15, fontWeight: 600, letterSpacing: "-0.02em" }}
              >
                Three moves. No magic act.
              </h2>
              <p className="text-[#6B6B76] max-w-xl" style={{ fontSize: "0.875rem", lineHeight: 1.7 }}>
                Inputs are captured, the right workflow acts, and the whole system leaves enough exhaust
                for supervision and trust.
              </p>
            </div>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <GlowCard className="rounded-xl border border-white/[0.06] bg-[#0D0D0F] h-full" glowColor="rgba(94,234,212,0.08)">
                  <div className="p-6 relative overflow-hidden h-full">
                    {/* Step number background */}
                    <span
                      className="absolute -top-3 -right-2 text-[#5EEAD4]/[0.04] select-none pointer-events-none"
                      style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: "7rem", fontWeight: 700, lineHeight: 1 }}
                    >
                      {step.number}
                    </span>

                    <div className="relative z-10">
                      {/* Step number */}
                      <div className="flex items-center gap-2 mb-5">
                        <motion.div
                          className="w-7 h-7 rounded-full border border-[#5EEAD4]/25 flex items-center justify-center"
                          whileHover={{ borderColor: "rgba(94,234,212,0.6)", scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <span
                            className="text-[#5EEAD4]"
                            style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: "0.625rem", fontWeight: 500 }}
                          >
                            {step.number}
                          </span>
                        </motion.div>
                        <motion.div
                          className="h-px flex-1 bg-white/[0.04]"
                          initial={{ scaleX: 0, transformOrigin: "left" }}
                          animate={inView ? { scaleX: 1 } : {}}
                          transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                        />
                      </div>

                      <h3
                        className="text-[#E8E8ED] mb-3"
                        style={{ fontSize: "0.9375rem", fontWeight: 500, lineHeight: 1.35 }}
                      >
                        {step.title}
                      </h3>

                      <p className="text-[#6B6B76] mb-4" style={{ fontSize: "0.8125rem", lineHeight: 1.65 }}>
                        {step.description}
                      </p>

                      {/* Tags with hover pop */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {step.tags.map((tag) => (
                          <motion.span
                            key={tag}
                            className="px-2 py-0.5 rounded bg-[#141416] border border-white/[0.04] text-[#6B6B76] cursor-default"
                            style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: "0.5625rem" }}
                            whileHover={{
                              borderColor: "rgba(94,234,212,0.2)",
                              color: "#A0A0AB",
                              y: -1,
                              scale: 1.05,
                            }}
                            transition={{ type: "spring", stiffness: 500, damping: 20 }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>

                      <p
                        className="text-[#5EEAD4]/40"
                        style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: "0.5625rem", letterSpacing: "0.05em" }}
                      >
                        {step.detail}
                      </p>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
