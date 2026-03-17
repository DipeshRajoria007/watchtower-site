'use client'

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Product", href: "#demo" },
  { label: "Why", href: "#why" },
  { label: "How", href: "#how" },
  { label: "Proof", href: "#proof" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4">
        <div className="flex items-center justify-between h-12 px-4 rounded-full border border-white/[0.06] bg-[#0A0A0B]/70 backdrop-blur-2xl">
          {/* Logo with hover rotation */}
          <a href="#" className="group flex items-center gap-2.5 text-[#E8E8ED]">
            <div className="relative w-5 h-5 transition-transform duration-500 group-hover:rotate-90">
              <div className="absolute inset-0 rounded-sm border border-[#5EEAD4]/50 rotate-45 transition-all duration-500 group-hover:border-[#5EEAD4]/80" />
              <div className="absolute inset-[3px] rounded-sm bg-[#5EEAD4]/30 rotate-45 transition-all duration-500 group-hover:bg-[#5EEAD4]/50" />
            </div>
            <span
              className="tracking-[0.15em] transition-colors duration-300 group-hover:text-[#5EEAD4]"
              style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: "0.75rem", fontWeight: 600 }}
            >
              WATCHTOWER
            </span>
          </a>

          {/* Nav links with sliding highlight */}
          <div className="hidden md:flex items-center gap-0 relative">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-3 py-1.5 rounded-full text-[#6B6B76] hover:text-[#E8E8ED] transition-colors duration-200 z-10"
                style={{ fontSize: "0.8125rem" }}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {hoveredIdx === i && (
                  <motion.div
                    layoutId="nav-highlight"
                    className="absolute inset-0 rounded-full bg-white/[0.06]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://github.com/DipeshRajoria007/watchtower"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 rounded-full text-[#6B6B76] hover:text-[#E8E8ED] transition-all duration-200 hover:bg-white/[0.04]"
              style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: "0.6875rem" }}
            >
              GitHub
            </a>
            {/* CTA with shimmer */}
            <a
              href="https://calendly.com/dipeshrajoria"
              target="_blank"
              rel="noreferrer"
              className="group relative px-4 py-1.5 rounded-full bg-[#5EEAD4]/10 border border-[#5EEAD4]/25 text-[#5EEAD4] hover:bg-[#5EEAD4]/20 hover:border-[#5EEAD4]/50 transition-all duration-300 overflow-hidden"
              style={{ fontSize: "0.8125rem", fontWeight: 500 }}
            >
              <span className="relative z-10">Request demo</span>
              {/* Shimmer sweep */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(105deg, transparent 40%, rgba(94,234,212,0.15) 50%, transparent 60%)",
                  animation: "shimmer 1.5s ease-in-out infinite",
                }}
              />
            </a>
          </div>

          <button
            className="md:hidden text-[#6B6B76] hover:text-[#E8E8ED] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <motion.div
              animate={{ rotate: mobileOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </motion.div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mx-4 mt-2 rounded-xl border border-white/[0.06] bg-[#0A0A0B]/95 backdrop-blur-2xl px-5 py-4 flex flex-col gap-1"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                className="px-3 py-2 rounded-lg text-[#6B6B76] hover:text-[#E8E8ED] hover:bg-white/[0.04] transition-all"
                style={{ fontSize: "0.875rem" }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
            <a
              href="https://calendly.com/dipeshrajoria"
              target="_blank"
              rel="noreferrer"
              className="mt-2 px-4 py-2 rounded-full bg-[#5EEAD4]/10 border border-[#5EEAD4]/25 text-[#5EEAD4] text-center"
              style={{ fontSize: "0.875rem" }}
              onClick={() => setMobileOpen(false)}
            >
              Request demo
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </nav>
  );
}
