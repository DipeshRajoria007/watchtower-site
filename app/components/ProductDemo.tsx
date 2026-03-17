'use client'

import { useState } from "react";
import { motion } from "motion/react";
import { useInView } from "./useInView";
import { GlowCard } from "./GlowCard";

export function ProductDemo() {
  const [ref, inView] = useInView(0.1);
  const [activePanel, setActivePanel] = useState<number | null>(null);

  return (
    <section className="relative px-6 py-20" id="demo">
      <div className="mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
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
              The Loop
            </p>
          </div>

          {/* Three-panel flow */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/[0.04] rounded-xl overflow-hidden border border-white/[0.06]">
            {/* Slack intake */}
            <GlowCard
              className={`bg-[#0A0A0B] transition-all duration-300 ${activePanel === 0 ? "bg-[#0C0C0E]" : ""}`}
              glowColor="rgba(94,234,212,0.08)"
            >
              <div
                className="p-6"
                onMouseEnter={() => setActivePanel(0)}
                onMouseLeave={() => setActivePanel(null)}
              >
                <div className="flex items-center justify-between mb-5">
                  <motion.span
                    className="text-[#5EEAD4]/60 tracking-[0.15em]"
                    style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: "0.625rem", textTransform: "uppercase" }}
                    animate={activePanel === 0 ? { color: "rgba(94,234,212,0.9)" } : { color: "rgba(94,234,212,0.6)" }}
                  >
                    01 &middot; Intake
                  </motion.span>
                  <div className="flex items-center gap-1.5">
                    <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${activePanel === 0 ? "bg-[#5EEAD4]" : "bg-[#5EEAD4]/40"}`} />
                    <span className="text-[#3A3A42]" style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: "0.5625rem" }}>
                      #release-ops
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <motion.div
                    className="rounded-lg bg-[#141416] border border-white/[0.04] p-3"
                    whileHover={{ borderColor: "rgba(255,255,255,0.08)", x: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-5 h-5 rounded-md bg-[#2A2A2E] flex items-center justify-center">
                        <span style={{ fontSize: "0.5rem" }}>JK</span>
                      </div>
                      <span className="text-[#6B6B76]" style={{ fontSize: "0.6875rem" }}>jake</span>
                      <span className="text-[#3A3A42]" style={{ fontSize: "0.5625rem" }}>12:08</span>
                    </div>
                    <p className="text-[#A0A0AB]" style={{ fontSize: "0.8125rem", lineHeight: 1.5 }}>
                      <span className="text-[#5EEAD4]">@watchtower</span> can you review this PR before lunch? Also the toast bug if it is obvious.
                    </p>
                  </motion.div>

                  <motion.div
                    className="rounded-lg bg-[#5EEAD4]/[0.04] border border-[#5EEAD4]/10 p-3"
                    whileHover={{ borderColor: "rgba(94,234,212,0.25)", x: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-5 h-5 rounded-md bg-[#5EEAD4]/10 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-sm border border-[#5EEAD4]/50 rotate-45" />
                      </div>
                      <span className="text-[#5EEAD4]/70" style={{ fontSize: "0.6875rem" }}>watchtower</span>
                      <span className="text-[#3A3A42]" style={{ fontSize: "0.5625rem" }}>12:08</span>
                    </div>
                    <p className="text-[#5EEAD4]/80" style={{ fontSize: "0.8125rem", lineHeight: 1.5 }}>
                      Got it. Starting PR review on newton-web. Forking a bug-fix lane for the toast issue.
                    </p>
                  </motion.div>

                  <div className="flex items-center gap-2">
                    {[
                      { emoji: "eyes", bg: "bg-[#141416]", border: "border-white/[0.04]", text: "text-[#6B6B76]" },
                      { emoji: "zap", bg: "bg-[#5EEAD4]/5", border: "border-[#5EEAD4]/10", text: "text-[#5EEAD4]/60" },
                    ].map((r) => (
                      <motion.span
                        key={r.emoji}
                        className={`px-2 py-0.5 rounded-full ${r.bg} border ${r.border} ${r.text} cursor-default`}
                        style={{ fontSize: "0.6875rem" }}
                        whileHover={{ scale: 1.1, y: -1 }}
                        transition={{ type: "spring", stiffness: 500, damping: 20 }}
                      >
                        {r.emoji} 1
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </GlowCard>

            {/* Classification */}
            <GlowCard
              className={`bg-[#0A0A0B] transition-all duration-300 ${activePanel === 1 ? "bg-[#0C0C0E]" : ""}`}
              glowColor="rgba(94,234,212,0.08)"
            >
              <div
                className="p-6"
                onMouseEnter={() => setActivePanel(1)}
                onMouseLeave={() => setActivePanel(null)}
              >
                <div className="flex items-center justify-between mb-5">
                  <motion.span
                    className="text-[#5EEAD4]/60 tracking-[0.15em]"
                    style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: "0.625rem", textTransform: "uppercase" }}
                    animate={activePanel === 1 ? { color: "rgba(94,234,212,0.9)" } : { color: "rgba(94,234,212,0.6)" }}
                  >
                    02 &middot; Classify
                  </motion.span>
                  <span className="text-[#3A3A42]" style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: "0.5625rem" }}>
                    2 intents
                  </span>
                </div>

                <div className="space-y-2">
                  {[
                    { label: "PR_REVIEW", confidence: 0.94, active: true },
                    { label: "BUG_FIX", confidence: 0.87, active: true },
                    { label: "OWNER_AUTOPILOT", confidence: 0.12, active: false },
                    { label: "UNKNOWN", confidence: 0.04, active: false },
                  ].map((item) => (
                    <motion.div
                      key={item.label}
                      className={`rounded-lg px-3 py-2.5 flex items-center gap-3 cursor-default ${
                        item.active
                          ? "bg-[#5EEAD4]/[0.04] border border-[#5EEAD4]/15"
                          : "bg-[#141416]/50 border border-white/[0.02]"
                      }`}
                      whileHover={{
                        borderColor: item.active ? "rgba(94,234,212,0.3)" : "rgba(255,255,255,0.06)",
                        x: item.active ? 3 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full ${item.active ? "bg-[#5EEAD4]" : "bg-[#3A3A42]"}`} />
                      <span
                        className={`flex-1 ${item.active ? "text-[#E8E8ED]" : "text-[#3A3A42]"}`}
                        style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: "0.75rem" }}
                      >
                        {item.label}
                      </span>
                      <div className="w-16 h-1 rounded-full bg-[#1A1A1E] overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full ${item.active ? "bg-[#5EEAD4]" : "bg-[#2A2A2E]"}`}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${item.confidence * 100}%` } : {}}
                          transition={{ duration: 0.8, delay: 0.3 + item.confidence * 0.2, ease: "easeOut" }}
                        />
                      </div>
                      <span
                        className={item.active ? "text-[#5EEAD4]" : "text-[#3A3A42]"}
                        style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: "0.625rem" }}
                      >
                        {item.confidence.toFixed(2)}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-4 rounded-lg bg-[#141416] border border-white/[0.04] p-3">
                  <p className="text-[#6B6B76]" style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: "0.625rem", lineHeight: 1.6 }}>
                    routing: PR_REVIEW -&gt; codex/review
                    <br />
                    routing: BUG_FIX -&gt; codex/fix (forked)
                    <br />
                    guardrails: allowlist=pass channel=pass
                  </p>
                </div>
              </div>
            </GlowCard>

            {/* Execution Trace */}
            <GlowCard
              className={`bg-[#0A0A0B] transition-all duration-300 ${activePanel === 2 ? "bg-[#0C0C0E]" : ""}`}
              glowColor="rgba(94,234,212,0.08)"
            >
              <div
                className="p-6"
                onMouseEnter={() => setActivePanel(2)}
                onMouseLeave={() => setActivePanel(null)}
              >
                <div className="flex items-center justify-between mb-5">
                  <motion.span
                    className="text-[#5EEAD4]/60 tracking-[0.15em]"
                    style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: "0.625rem", textTransform: "uppercase" }}
                    animate={activePanel === 2 ? { color: "rgba(94,234,212,0.9)" } : { color: "rgba(94,234,212,0.6)" }}
                  >
                    03 &middot; Execute
                  </motion.span>
                  <div className="flex items-center gap-1.5">
                    <motion.div
                      className="w-1.5 h-1.5 rounded-full bg-[#28C840]"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-[#28C840]/70" style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: "0.5625rem" }}>
                      success
                    </span>
                  </div>
                </div>

                <TraceLines inView={inView} />

                <div className="mt-4 flex gap-2">
                  {[
                    { label: "41s", sub: "duration" },
                    { label: "$0.08", sub: "cost" },
                    { label: "2", sub: "files" },
                  ].map((stat) => (
                    <motion.div
                      key={stat.sub}
                      className="flex-1 rounded-lg bg-[#141416] border border-white/[0.04] p-2.5 text-center cursor-default"
                      whileHover={{ borderColor: "rgba(94,234,212,0.15)", y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="text-[#E8E8ED]" style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: "0.875rem", fontWeight: 500 }}>
                        {stat.label}
                      </p>
                      <p className="text-[#3A3A42]" style={{ fontSize: "0.5625rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                        {stat.sub}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </GlowCard>
          </div>

          {/* Connector labels */}
          <div className="hidden lg:flex items-center justify-center mt-6 gap-2">
            {["SLACK MENTION", "INTENT DETECTION", "AUTONOMOUS EXECUTION", "OBSERVABLE TRACE"].map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <motion.span
                  className="text-[#3A3A42] cursor-default"
                  style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: "0.5625rem", letterSpacing: "0.1em" }}
                  whileHover={{ color: "#6B6B76", y: -1 }}
                  transition={{ duration: 0.2 }}
                >
                  {step}
                </motion.span>
                {i < 3 && (
                  <svg width="20" height="8" viewBox="0 0 20 8" className="text-[#3A3A42]">
                    <path d="M0 4H16M16 4L13 1M16 4L13 7" stroke="currentColor" strokeWidth="0.5" fill="none" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TraceLines({ inView }: { inView: boolean }) {
  const [hoveredLine, setHoveredLine] = useState<number | null>(null);
  const traceData = [
    { t: "12:08:14", text: "codex.run mode=guided", dim: false },
    { t: "12:08:21", text: "git.branch created", dim: false },
    { t: "12:08:33", text: "diff +42 -8 files=2", dim: false },
    { t: "12:08:36", text: "lint=pass tests=pass", dim: false },
    { t: "12:08:41", text: "pr.opened #1847", dim: false },
    { t: "12:08:47", text: "learn.signal saved", dim: true },
    { t: "12:08:52", text: "done duration=41s", dim: false },
  ];

  return (
    <div className="space-y-0" style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: "0.6875rem" }}>
      {traceData.map((line, i) => (
        <motion.div
          key={i}
          className={`flex gap-0 py-[2px] rounded-sm px-1 -mx-1 cursor-default transition-colors duration-150 ${
            hoveredLine === i ? "bg-white/[0.03]" : ""
          }`}
          style={{ lineHeight: 1.8 }}
          initial={{ opacity: 0, x: -8 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.3, delay: i * 0.06 }}
          onMouseEnter={() => setHoveredLine(i)}
          onMouseLeave={() => setHoveredLine(null)}
        >
          <span className={`w-[68px] shrink-0 transition-colors duration-150 ${hoveredLine === i ? "text-[#6B6B76]" : "text-[#3A3A42]"}`}>
            {line.t}
          </span>
          <span className={`transition-colors duration-150 ${
            line.dim
              ? hoveredLine === i ? "text-[#D4956B]" : "text-[#D4956B]/60"
              : hoveredLine === i ? "text-[#E8E8ED]" : "text-[#A0A0AB]"
          }`}>
            {line.text}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
