'use client'

import { motion } from "motion/react";
import { useInView } from "./useInView";
import { GlowCard } from "./GlowCard";
import { MessageSquare, Eye, Monitor, Brain } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    label: "Slack-native intake",
    title: "Work arrives where your team already coordinates.",
    description: "Mentions become missions. Intent detection routes the right workflow without forcing people into another dashboard.",
  },
  {
    icon: Eye,
    label: "Visible autonomy",
    title: "Automation with receipts, not mystery smoke.",
    description: "Traces, sidecar output, and failure diagnostics stay inspectable. Leaders see evidence, not a black box.",
  },
  {
    icon: Monitor,
    label: "Mac-local control",
    title: "Desktop operator, not another cloud tab.",
    description: "Watchtower sits on a Mac, supervises locally, and keeps the control plane close to the people shipping code.",
  },
  {
    icon: Brain,
    label: "Learning loop",
    title: "The system sharpens from real team usage.",
    description: "Corrections, personality memory, and failure patterns feed back so the next run is less noisy and more aligned.",
  },
];

export function WhyWatchtower() {
  const [ref, inView] = useInView(0.1);

  return (
    <section className="relative px-6 py-20" id="why">
      <div className="mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-10">
            <div className="lg:col-span-2">
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
                  Why Watchtower
                </p>
              </div>
              <h2
                className="text-[#E8E8ED] mb-4"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", lineHeight: 1.15, fontWeight: 600, letterSpacing: "-0.02em" }}
              >
                Most tools automate the action. Watchtower automates the operating model.
              </h2>
              <p className="text-[#6B6B76]" style={{ fontSize: "0.875rem", lineHeight: 1.7 }}>
                Not just a bot that replies in Slack. A system for turning fast-moving engineering
                requests into visible, governed work.
              </p>
            </div>

            {/* Pitch card with glow */}
            <GlowCard className="lg:col-span-3 rounded-xl border border-white/[0.06] bg-[#0D0D0F]">
              <div className="p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#5EEAD4]/[0.03] rounded-full blur-[80px]" />
                <p
                  className="text-[#5EEAD4]/50 mb-3 tracking-[0.15em]"
                  style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: "0.625rem", textTransform: "uppercase" }}
                >
                  The thesis
                </p>
                <p
                  className="text-[#E8E8ED] relative z-10 mb-3"
                  style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", lineHeight: 1.4, fontWeight: 500 }}
                >
                  If Slack is where work arrives, Watchtower is the calm machine that catches it,
                  chooses the right move, and leaves the lights on so leadership can inspect what happened.
                </p>
                <p className="text-[#6B6B76] relative z-10" style={{ fontSize: "0.8125rem", lineHeight: 1.7 }}>
                  A tighter loop between request, execution, and proof &mdash; without asking the team
                  to learn a brand-new ritual just to get help.
                </p>
              </div>
            </GlowCard>
          </div>

          {/* Feature cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.04] rounded-xl overflow-hidden border border-white/[0.06]">
            {features.map((feature, i) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <GlowCard className="bg-[#0A0A0B] h-full" glowColor="rgba(94,234,212,0.06)">
                  <div className="p-5 group cursor-default h-full">
                    <motion.div
                      className="mb-4 text-[#5EEAD4]/40"
                      whileHover={{ scale: 1.2, rotate: 5, color: "rgba(94,234,212,0.8)" }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                      <feature.icon size={18} strokeWidth={1.5} />
                    </motion.div>
                    <p
                      className="text-[#6B6B76] mb-2 tracking-[0.1em]"
                      style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: "0.5625rem", textTransform: "uppercase" }}
                    >
                      {feature.label}
                    </p>
                    <h3
                      className="text-[#E8E8ED] mb-2"
                      style={{ fontSize: "0.875rem", fontWeight: 500, lineHeight: 1.35 }}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-[#6B6B76]" style={{ fontSize: "0.75rem", lineHeight: 1.65 }}>
                      {feature.description}
                    </p>
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
