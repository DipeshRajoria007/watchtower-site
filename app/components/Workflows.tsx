'use client'

import { motion } from "motion/react";
import { useInView } from "./useInView";
import { GlowCard } from "./GlowCard";
import { GitPullRequestArrow, Bug, Zap, Terminal, MessageCircleQuestion } from "lucide-react";

const workflows = [
  {
    icon: GitPullRequestArrow,
    title: "PR Review",
    description: "Someone drops a review request in Slack. Watchtower pulls the diff, runs a multi-agent review pipeline, and posts findings back to the same thread.",
    tag: "PR_REVIEW",
  },
  {
    icon: Bug,
    title: "Bug Fix",
    description: "A bug report lands in a configured channel. Watchtower classifies the repo, attempts a fix, runs tests, and opens a PR when confident enough.",
    tag: "BUG_FIX",
  },
  {
    icon: Zap,
    title: "Owner Autopilot",
    description: "Trusted operators bypass normal guardrails. Tag the bot directly and it executes broader tasks across your workspace without the usual restrictions.",
    tag: "AUTOPILOT",
  },
  {
    icon: Terminal,
    title: "Dev Assist",
    description: "Type wt commands in Slack and it becomes an operator console. Status checks, failure diagnosis, job replays, mission tracking — all from the thread.",
    tag: "ASSIST",
  },
  {
    icon: MessageCircleQuestion,
    title: "Graceful Fallback",
    description: "Requests that don't map to a workflow still get a personality-aware reply, a thread reaction, and a desktop ping. Nothing silently disappears.",
    tag: "UNKNOWN",
  },
];

export function Workflows() {
  const [ref, inView] = useInView(0.1);

  return (
    <section className="relative px-6 py-20" id="workflows">
      <div className="mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section label */}
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
              Workflows
            </p>
          </div>

          {/* Heading */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0 mb-6">
            <div className="lg:col-span-2">
              <h2
                className="text-[#E8E8ED] mb-2"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", lineHeight: 1.15, fontWeight: 600, letterSpacing: "-0.02em" }}
              >
                One mention. Five possible paths.
              </h2>
              <p className="text-[#6B6B76] max-w-xl" style={{ fontSize: "0.875rem", lineHeight: 1.7 }}>
                Watchtower detects what you&apos;re asking and routes it to the right workflow automatically.
                Each one built for a specific kind of engineering work.
              </p>
            </div>
          </div>

          {/* Workflow cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {workflows.map((wf, i) => {
              const Icon = wf.icon;
              return (
                <motion.div
                  key={wf.tag}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <GlowCard className="rounded-xl border border-white/[0.06] bg-[#0D0D0F] h-full" glowColor="rgba(94,234,212,0.08)">
                    <div className="p-6 h-full flex flex-col">
                      {/* Icon + tag row */}
                      <div className="flex items-center justify-between mb-4">
                        <motion.div
                          className="w-9 h-9 rounded-lg border border-[#5EEAD4]/20 bg-[#5EEAD4]/[0.04] flex items-center justify-center"
                          whileHover={{ borderColor: "rgba(94,234,212,0.5)", scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        >
                          <Icon size={16} className="text-[#5EEAD4]" />
                        </motion.div>
                        <span
                          className="px-2 py-0.5 rounded bg-[#141416] border border-white/[0.04] text-[#6B6B76]"
                          style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: "0.5625rem" }}
                        >
                          {wf.tag}
                        </span>
                      </div>

                      {/* Title */}
                      <h3
                        className="text-[#E8E8ED] mb-2"
                        style={{ fontSize: "0.9375rem", fontWeight: 500, lineHeight: 1.35 }}
                      >
                        {wf.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[#6B6B76] flex-1" style={{ fontSize: "0.8125rem", lineHeight: 1.65 }}>
                        {wf.description}
                      </p>
                    </div>
                  </GlowCard>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
