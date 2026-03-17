'use client'

import { useState } from "react";
import { motion } from "motion/react";
import { useInView } from "./useInView";
import { AnimatedCounter } from "./AnimatedCounter";

export function Proof() {
  const [ref, inView] = useInView(0.1);
  const [hoveredTrace, setHoveredTrace] = useState<number | null>(null);

  const traces = [
    { id: "#2217", type: "PR_REVIEW", status: "success", dur: "41s", cost: "$0.08" },
    { id: "#2216", type: "BUG_FIX", status: "success", dur: "2m12s", cost: "$0.14" },
    { id: "#2215", type: "ASSIST", status: "success", dur: "8s", cost: "$0.02" },
    { id: "#2214", type: "PR_REVIEW", status: "failed", dur: "1m47s", cost: "$0.11" },
    { id: "#2213", type: "BUG_FIX", status: "success", dur: "3m04s", cost: "$0.19" },
    { id: "#2212", type: "AUTOPILOT", status: "success", dur: "56s", cost: "$0.06" },
  ];

  return (
    <section className="relative px-6 py-20" id="proof">
      <div className="mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              className="h-px bg-[#D4956B]/30"
              initial={{ width: 0 }}
              animate={inView ? { width: 32 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <p
              className="text-[#D4956B] tracking-[0.2em]"
              style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: "0.6875rem", textTransform: "uppercase" }}
            >
              Observability
            </p>
          </div>

          <h2
            className="text-[#E8E8ED] mb-3 max-w-3xl"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", lineHeight: 1.15, fontWeight: 600, letterSpacing: "-0.02em" }}
          >
            The real differentiator is not that it acts. It is that you can see it think.
          </h2>

          <p className="text-[#6B6B76] max-w-2xl mb-10" style={{ fontSize: "0.875rem", lineHeight: 1.7 }}>
            Traces, live sidecar output, recommendations, heat signals, and learned corrections.
          </p>

          {/* Dashboard fragment */}
          <motion.div
            className="rounded-xl border border-white/[0.06] bg-[#08080A] overflow-hidden transition-shadow duration-500 hover:shadow-[0_0_100px_rgba(94,234,212,0.04)]"
            whileHover={{ borderColor: "rgba(255,255,255,0.08)" }}
            transition={{ duration: 0.3 }}
            style={{ boxShadow: "0 0 80px rgba(94,234,212,0.02)" }}
          >
            {/* Dashboard title bar */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06] bg-[#0C0C0E]">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  {["#FF5F57", "#FEBC2E", "#28C840"].map((c) => (
                    <motion.div
                      key={c}
                      className="w-2.5 h-2.5 rounded-full cursor-default"
                      style={{ backgroundColor: `${c}B3` }}
                      whileHover={{ scale: 1.3 }}
                      transition={{ type: "spring", stiffness: 500, damping: 20 }}
                    />
                  ))}
                </div>
                <span className="text-[#6B6B76]" style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: "0.6875rem" }}>
                  watchtower &mdash; operator dashboard
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#3A3A42]" style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: "0.5625rem" }}>
                  Tue Mar 17 12:09
                </span>
                <div className="flex items-center gap-1.5">
                  <div className="relative">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#28C840]" />
                    <div className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-[#28C840] animate-ping opacity-30" />
                  </div>
                  <span className="text-[#28C840]/70" style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: "0.5625rem" }}>
                    CONNECTED
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/[0.03]">
              {/* Execution trace panel */}
              <div className="lg:col-span-5 bg-[#0A0A0B] p-5">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#6B6B76] tracking-[0.1em]" style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: "0.625rem", textTransform: "uppercase" }}>
                    Recent Traces
                  </span>
                  <span className="text-[#3A3A42]" style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: "0.5625rem" }}>
                    last 6
                  </span>
                </div>

                <div className="space-y-1.5">
                  {traces.map((trace, idx) => (
                    <motion.div
                      key={trace.id}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg border cursor-default transition-colors duration-150 ${
                        hoveredTrace === idx
                          ? "bg-[#0F0F11] border-white/[0.08]"
                          : "bg-[#0D0D0F] border-white/[0.03]"
                      }`}
                      initial={{ opacity: 0, x: -12 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: idx * 0.06 }}
                      onMouseEnter={() => setHoveredTrace(idx)}
                      onMouseLeave={() => setHoveredTrace(null)}
                      whileHover={{ x: 3 }}
                    >
                      <motion.div
                        className={`w-1.5 h-1.5 rounded-full ${trace.status === "success" ? "bg-[#5EEAD4]" : "bg-[#FF5F57]"}`}
                        animate={hoveredTrace === idx ? { scale: [1, 1.5, 1] } : {}}
                        transition={{ duration: 0.3 }}
                      />
                      <span
                        className={`w-12 shrink-0 transition-colors duration-150 ${hoveredTrace === idx ? "text-[#A0A0AB]" : "text-[#6B6B76]"}`}
                        style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: "0.625rem" }}
                      >
                        {trace.id}
                      </span>
                      <span
                        className={`px-1.5 py-0.5 rounded text-[0.5625rem] ${
                          trace.type === "PR_REVIEW"
                            ? "bg-[#5EEAD4]/8 text-[#5EEAD4]/70"
                            : trace.type === "BUG_FIX"
                            ? "bg-[#D4956B]/8 text-[#D4956B]/70"
                            : "bg-white/[0.04] text-[#6B6B76]"
                        }`}
                        style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace" }}
                      >
                        {trace.type}
                      </span>
                      <span className="flex-1" />
                      <span
                        className={`transition-colors duration-150 ${hoveredTrace === idx ? "text-[#6B6B76]" : "text-[#3A3A42]"}`}
                        style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: "0.5625rem" }}
                      >
                        {trace.dur}
                      </span>
                      <span
                        className={`transition-colors duration-150 ${hoveredTrace === idx ? "text-[#6B6B76]" : "text-[#3A3A42]"}`}
                        style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: "0.5625rem" }}
                      >
                        {trace.cost}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Ops Pulse + Stats */}
              <div className="lg:col-span-3 bg-[#0A0A0B] p-5 flex flex-col gap-4">
                <div>
                  <span className="text-[#6B6B76] tracking-[0.1em]" style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: "0.625rem", textTransform: "uppercase" }}>
                    Ops Pulse
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: "02", label: "Active", color: "#5EEAD4" },
                    { value: "17", label: "Streak", color: "#5EEAD4" },
                    { value: "low", label: "Chaos", color: "#28C840" },
                    { value: "94%", label: "Success", color: "#5EEAD4" },
                  ].map((m) => (
                    <motion.div
                      key={m.label}
                      className="rounded-lg bg-[#0D0D0F] border border-white/[0.03] p-3 text-center cursor-default"
                      whileHover={{ borderColor: "rgba(94,234,212,0.15)", y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      {inView ? (
                        <AnimatedCounter
                          value={m.value}
                          style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: "1.25rem", fontWeight: 600, color: m.color }}
                        />
                      ) : (
                        <span style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: "1.25rem", fontWeight: 600, color: m.color }}>
                          {m.value}
                        </span>
                      )}
                      <p className="text-[#3A3A42]" style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: "0.5rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                        {m.label}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Activity bars with hover */}
                <div>
                  <span className="text-[#3A3A42] mb-2 block" style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: "0.5625rem" }}>
                    activity (24h)
                  </span>
                  <div className="flex gap-[2px] items-end h-8">
                    {[3, 5, 2, 7, 4, 8, 6, 3, 5, 9, 4, 2, 6, 7, 3, 5, 8, 4, 6, 3, 7, 5, 2, 4].map((v, i) => (
                      <ActivityBar key={i} value={v} index={i} inView={inView} />
                    ))}
                  </div>
                </div>

                {/* Learning signals */}
                <div className="mt-auto">
                  <span className="text-[#3A3A42] mb-2 block" style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: "0.5625rem" }}>
                    recent signals
                  </span>
                  <div className="space-y-1">
                    {[
                      "intent_correction: BUG_FIX reclassified",
                      "tone_feedback: less formal in #eng",
                      "trust_update: autopilot granted #deploy",
                    ].map((s, i) => (
                      <motion.p
                        key={i}
                        className="text-[#6B6B76] cursor-default"
                        style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: "0.5625rem", lineHeight: 1.5 }}
                        whileHover={{ color: "#A0A0AB", x: 2 }}
                        transition={{ duration: 0.15 }}
                      >
                        {s}
                      </motion.p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Failure Doctor + Learning */}
              <div className="lg:col-span-4 bg-[#0A0A0B] p-5 flex flex-col gap-4">
                {/* Failure Doctor */}
                <motion.div
                  className="rounded-lg bg-[#0D0D0F] border border-[#FF5F57]/10 p-4 flex-1 cursor-default"
                  whileHover={{ borderColor: "rgba(255,95,87,0.25)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <motion.div
                      className="w-1.5 h-1.5 rounded-full bg-[#FF5F57]"
                      animate={{ opacity: [1, 0.4, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-[#FF5F57]/70 tracking-[0.1em]" style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: "0.5625rem", textTransform: "uppercase" }}>
                      Failure Doctor &middot; #2214
                    </span>
                  </div>
                  <p className="text-[#E8E8ED] mb-2" style={{ fontSize: "0.8125rem", fontWeight: 500, lineHeight: 1.35 }}>
                    Codex exit code 1 &mdash; context window exceeded
                  </p>
                  <div className="space-y-1 mb-3" style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: "0.625rem" }}>
                    <p className="text-[#6B6B76]">cause: repo too large for single-pass review</p>
                    <p className="text-[#6B6B76]">suggestion: split into file-scoped passes</p>
                    <p className="text-[#D4956B]">action: auto-retry with chunked strategy</p>
                  </div>
                  <div className="flex gap-2">
                    {[
                      { text: "context_overflow", bg: "bg-[#FF5F57]/8", color: "text-[#FF5F57]/60" },
                      { text: "retriable", bg: "bg-[#D4956B]/8", color: "text-[#D4956B]/60" },
                    ].map((tag) => (
                      <motion.span
                        key={tag.text}
                        className={`px-2 py-0.5 rounded ${tag.bg} ${tag.color} cursor-default`}
                        style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: "0.5625rem" }}
                        whileHover={{ scale: 1.05, y: -1 }}
                        transition={{ type: "spring", stiffness: 500, damping: 20 }}
                      >
                        {tag.text}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Personality Memory */}
                <div className="rounded-lg bg-[#0D0D0F] border border-white/[0.03] p-4 flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#5EEAD4]/60" />
                    <span className="text-[#6B6B76] tracking-[0.1em]" style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: "0.5625rem", textTransform: "uppercase" }}>
                      Personality Memory
                    </span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { channel: "#release-ops", tone: "concise, serious", trust: "high" },
                      { channel: "#eng-general", tone: "casual, brief", trust: "medium" },
                      { channel: "DM:jake", tone: "direct, technical", trust: "full" },
                    ].map((row) => (
                      <motion.div
                        key={row.channel}
                        className="flex items-center gap-3 px-2.5 py-1.5 rounded bg-[#111113] cursor-default"
                        whileHover={{ backgroundColor: "rgba(94,234,212,0.03)", x: 2 }}
                        transition={{ duration: 0.15 }}
                      >
                        <span className="text-[#A0A0AB]" style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: "0.625rem" }}>
                          {row.channel}
                        </span>
                        <span className="flex-1" />
                        <span className="text-[#6B6B76]" style={{ fontSize: "0.5625rem" }}>{row.tone}</span>
                        <span
                          className={`px-1.5 py-0.5 rounded text-[0.5rem] ${
                            row.trust === "full"
                              ? "bg-[#5EEAD4]/8 text-[#5EEAD4]/60"
                              : row.trust === "high"
                              ? "bg-[#28C840]/8 text-[#28C840]/60"
                              : "bg-white/[0.04] text-[#6B6B76]"
                          }`}
                          style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace" }}
                        >
                          {row.trust}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ActivityBar({ value, index, inView }: { value: number; index: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className={`flex-1 rounded-sm cursor-default transition-colors duration-150 ${hovered ? "bg-[#5EEAD4]/50" : "bg-[#5EEAD4]/20"}`}
      initial={{ height: 0 }}
      animate={inView ? { height: `${(value / 9) * 100}%` } : {}}
      transition={{ duration: 0.4, delay: index * 0.02, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scaleY: 1.15, transformOrigin: "bottom" }}
    />
  );
}
