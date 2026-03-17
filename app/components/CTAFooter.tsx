'use client'

import { motion } from "motion/react";
import { useInView } from "./useInView";

export function CTAFooter() {
  const [ref, inView] = useInView(0.2);

  return (
    <>
      {/* CTA Section */}
      <section className="relative px-6 py-24" id="cta">
        {/* Background glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[300px] rounded-full bg-[#5EEAD4]/[0.04] blur-[120px]" />
        </div>

        <div className="mx-auto max-w-3xl text-center relative z-10">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4956B]/15 bg-[#D4956B]/5 mb-6"
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <span
                className="text-[#D4956B]/80 tracking-wider"
                style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: "0.625rem", textTransform: "uppercase" }}
              >
                Ready?
              </span>
            </motion.div>

            <h2
              className="text-[#E8E8ED] mb-5"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", lineHeight: 1.1, fontWeight: 600, letterSpacing: "-0.03em" }}
            >
              Give your engineering org a command room instead of one more bot.
            </h2>

            <p className="text-[#6B6B76] mb-8 max-w-lg mx-auto" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
              For leaders who want autonomous developer workflows without giving up
              inspection, intentionality, or taste.
            </p>

            <div className="flex items-center justify-center gap-3 flex-wrap">
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
                <span className="relative z-10">Request demo</span>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.25) 50%, transparent 65%)",
                    animation: "shimmerCTA 1.8s ease-in-out infinite",
                  }}
                />
              </motion.a>
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
                Explore the repo
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] px-6 py-6">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <motion.a
              href="#"
              className="group flex items-center gap-2"
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative w-4 h-4 transition-transform duration-500 group-hover:rotate-90">
                <div className="absolute inset-0 rounded-sm border border-[#5EEAD4]/50 rotate-45 transition-all group-hover:border-[#5EEAD4]/80" />
                <div className="absolute inset-[2px] rounded-sm bg-[#5EEAD4]/30 rotate-45 transition-all group-hover:bg-[#5EEAD4]/50" />
              </div>
              <span
                className="text-[#6B6B76] tracking-[0.15em] transition-colors group-hover:text-[#A0A0AB]"
                style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: "0.625rem", fontWeight: 600 }}
              >
                WATCHTOWER
              </span>
            </motion.a>
            <span className="text-[#3A3A42]" style={{ fontSize: "0.6875rem" }}>
              Autonomous engineering ops for macOS.
            </span>
          </div>
          <div className="flex items-center gap-1">
            {[
              { label: "GITHUB", href: "https://github.com/DipeshRajoria007/watchtower" },
              { label: "LINKEDIN", href: "https://www.linkedin.com/in/dipeshrajoria/" },
            ].map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative px-3 py-1 rounded-full text-[#3A3A42] hover:text-[#6B6B76] transition-colors overflow-hidden"
                style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: "0.625rem" }}
                whileHover={{ y: -1 }}
                transition={{ duration: 0.15 }}
              >
                {link.label}
                {/* Underline reveal */}
                <motion.div
                  className="absolute bottom-1 left-3 right-3 h-px bg-[#6B6B76]/40"
                  initial={{ scaleX: 0, transformOrigin: "left" }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes shimmerCTA {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </>
  );
}
