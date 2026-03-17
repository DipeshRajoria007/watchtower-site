'use client'

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-8 overflow-hidden">
      {/* Accent glow behind headline */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#5EEAD4]/[0.06] blur-[150px]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative z-10 max-w-[64rem] text-center mb-10"
      >
        {/* Badge with pulse ring */}
        <motion.div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#5EEAD4]/15 bg-[#5EEAD4]/5 mb-8 relative"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <div className="relative">
            <div className="w-1.5 h-1.5 rounded-full bg-[#5EEAD4]" />
            <div className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-[#5EEAD4] animate-ping opacity-40" />
          </div>
          <span
            className="text-[#5EEAD4]/80 tracking-wider"
            style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: "0.625rem", textTransform: "uppercase" }}
          >
            Autonomous engineering ops for macOS
          </span>
        </motion.div>

        <h1
          className="text-[#E8E8ED] mb-5"
          style={{
            fontSize: "clamp(2.25rem, 5.5vw, 4rem)",
            lineHeight: 1.05,
            fontWeight: 600,
            letterSpacing: "-0.035em",
          }}
        >
          Slack is where requests appear.
          <br />
          <span className="relative inline-block group">
            <motion.span
              className="relative z-10 text-[#5EEAD4]"
              animate={{ textShadow: ["0 0 20px rgba(94,234,212,0)", "0 0 20px rgba(94,234,212,0.3)", "0 0 20px rgba(94,234,212,0)"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Watchtower
            </motion.span>
            <span className="absolute -inset-x-2 -inset-y-1 bg-[#5EEAD4]/[0.08] rounded-md blur-sm" />
          </span>{" "}
          is where they
          <br />
          stop becoming chaos.
        </h1>

        <p
          className="text-[#6B6B76] max-w-xl mx-auto mb-8"
          style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
        >
          Slack-native intake. Autonomous workflow routing. Every run observable
          on a Mac your team actually controls.
        </p>

        <div className="flex items-center justify-center gap-3 flex-wrap">
          {/* Primary CTA with shimmer + scale */}
          <motion.a
            href="https://calendly.com/dipeshrajoria"
            target="_blank"
            rel="noreferrer"
            className="group relative px-6 py-2.5 rounded-full bg-[#5EEAD4] text-[#0A0A0B] overflow-hidden"
            style={{ fontSize: "0.875rem", fontWeight: 500 }}
            whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(94,234,212,0.35)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <span className="relative z-10">Request Demo</span>
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                background: "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.25) 50%, transparent 65%)",
                animation: "shimmer 1.8s ease-in-out infinite",
              }}
            />
          </motion.a>
          {/* Ghost CTA with border reveal */}
          <motion.a
            href="https://github.com/DipeshRajoria007/watchtower"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full border border-white/[0.1] text-[#A0A0AB] hover:text-[#E8E8ED] hover:border-white/[0.25] hover:bg-white/[0.03] transition-all duration-300"
            style={{ fontSize: "0.875rem", fontWeight: 500 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            View on GitHub
          </motion.a>
        </div>
      </motion.div>

      {/* Terminal with hover lift */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        whileHover={{ y: -4, transition: { duration: 0.3 } }}
        className="relative z-10 w-full max-w-4xl"
      >
        <TerminalAnimation />
      </motion.div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}

function TerminalAnimation() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [hoveredLine, setHoveredLine] = useState<number | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const lines: { time: string; prefix: string; text: string; color?: string }[] = [
    { time: "12:08:11", prefix: "intake", text: "mention.detected owner=eng-lead channel=#release-ops" },
    { time: "12:08:12", prefix: "classify", text: "intent=PR_REVIEW confidence=0.94 repo=newton-web", color: "#5EEAD4" },
    { time: "12:08:12", prefix: "classify", text: "intent=BUG_FIX confidence=0.87 repo=newton-web (forked)", color: "#5EEAD4" },
    { time: "12:08:14", prefix: "codex", text: "run.start mode=guided workspace=/repos/newton-web" },
    { time: "12:08:21", prefix: "git", text: "branch codex/hotfix-thread-2217 created" },
    { time: "12:08:33", prefix: "codex", text: "diff +42 -8 files=2 lint=pass tests=pass" },
    { time: "12:08:36", prefix: "slack", text: "reply posted thread=release-ops/2217 status=in_progress" },
    { time: "12:08:41", prefix: "review", text: "pr.opened newton-web#1847 reviewers=auto-assigned" },
    { time: "12:08:47", prefix: "learn", text: "signal persisted type=intent_correction source=operator", color: "#D4956B" },
    { time: "12:08:52", prefix: "complete", text: "run.done status=success duration=41s cost=$0.08", color: "#5EEAD4" },
  ];

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= lines.length) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          return prev;
        }
        return prev + 1;
      });
    }, 350);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="rounded-xl border border-white/[0.06] bg-[#08080A] overflow-hidden shadow-[0_0_80px_rgba(94,234,212,0.03)] transition-shadow duration-500 hover:shadow-[0_0_100px_rgba(94,234,212,0.06)]">
      {/* Title bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.06] bg-[#0C0C0E]">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            {["#FF5F57", "#FEBC2E", "#28C840"].map((c) => (
              <div
                key={c}
                className="w-2.5 h-2.5 rounded-full transition-transform duration-200 hover:scale-125 cursor-default"
                style={{ backgroundColor: `${c}B3` }}
              />
            ))}
          </div>
          <span className="text-[#6B6B76]" style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: "0.6875rem" }}>
            watchtower &mdash; execution trace
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5">
            <div className="relative">
              <div className="w-1.5 h-1.5 rounded-full bg-[#5EEAD4]" />
              <div className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-[#5EEAD4] animate-ping opacity-30" />
            </div>
            <span className="text-[#5EEAD4]/70" style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: "0.625rem" }}>
              LIVE
            </span>
          </span>
        </div>
      </div>

      {/* Lines with hover highlight */}
      <div className="px-4 py-3 space-y-0 min-h-[280px]" style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace" }}>
        {lines.slice(0, visibleLines).map((line, i) => (
          <div
            key={i}
            className={`flex gap-0 py-[3px] rounded-sm px-1 -mx-1 transition-all duration-200 cursor-default ${
              hoveredLine === i ? "bg-white/[0.03]" : ""
            }`}
            style={{ fontSize: "0.6875rem", lineHeight: 1.8, animation: "fadeSlide 0.3s ease forwards" }}
            onMouseEnter={() => setHoveredLine(i)}
            onMouseLeave={() => setHoveredLine(null)}
          >
            <span className={`w-[72px] shrink-0 transition-colors duration-200 ${hoveredLine === i ? "text-[#6B6B76]" : "text-[#3A3A42]"}`}>
              [{line.time}]
            </span>
            <span className={`w-[72px] shrink-0 transition-colors duration-200 ${hoveredLine === i ? "text-[#5EEAD4]/80" : "text-[#5EEAD4]/50"}`}>
              {line.prefix}
            </span>
            <span
              className={`transition-colors duration-200 ${!line.color && hoveredLine === i ? "text-[#E8E8ED]" : !line.color ? "text-[#A0A0AB]" : ""}`}
              style={line.color ? { color: hoveredLine === i ? line.color : `${line.color}BB` } : {}}
            >
              {line.text}
            </span>
          </div>
        ))}
        {visibleLines < lines.length && (
          <div className="flex items-center gap-1 py-1">
            <motion.span
              className="w-2 h-4 bg-[#5EEAD4]/60 rounded-[1px]"
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </div>
        )}
      </div>

      {/* Status bar */}
      <div className="flex items-center justify-between px-4 py-2 border-t border-white/[0.06] bg-[#0C0C0E]">
        <div className="flex items-center gap-4">
          {["jobs: 2 active", "streak: 17", "chaos: low"].map((t) => (
            <span key={t} className="text-[#3A3A42] hover:text-[#6B6B76] transition-colors duration-200 cursor-default" style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: "0.625rem" }}>
              {t}
            </span>
          ))}
        </div>
        <span className="text-[#3A3A42]" style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: "0.625rem" }}>
          v0.9.2-beta
        </span>
      </div>

      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
