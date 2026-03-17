'use client'

import { useState } from "react";
import { ChevronDown, MessageSquare, Eye, Monitor, Brain, Search, Check, X, AlertTriangle, Info, Loader2 } from "lucide-react";

// ─── Helpers ────────────────────────────────────────────────────────────────

function Swatch({ hex, name, usage, border }: { hex: string; name: string; usage: string; border?: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };
  return (
    <button onClick={handleCopy} className="group text-left flex flex-col gap-2 cursor-pointer">
      <div
        className="w-full aspect-[3/2] rounded-lg transition-transform duration-200 group-hover:scale-[1.03] relative overflow-hidden"
        style={{ backgroundColor: hex, border: border || "1px solid rgba(255,255,255,0.06)" }}
      >
        {copied && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <Check size={14} className="text-[#5EEAD4]" />
          </div>
        )}
      </div>
      <div>
        <p className="text-[#E8E8ED]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6875rem" }}>{hex}</p>
        <p className="text-[#A0A0AB]" style={{ fontSize: "0.75rem", fontWeight: 500 }}>{name}</p>
        <p className="text-[#6B6B76]" style={{ fontSize: "0.625rem", lineHeight: 1.4 }}>{usage}</p>
      </div>
    </button>
  );
}

function OpacitySwatch({ base, opacity, name, cssValue }: { base: string; opacity: number; name: string; cssValue: string }) {
  return (
    <div className="flex items-center gap-3 py-1.5">
      <div
        className="w-10 h-6 rounded shrink-0"
        style={{ backgroundColor: base, opacity, border: "1px solid rgba(255,255,255,0.06)" }}
      />
      <div className="flex-1 min-w-0">
        <p className="text-[#A0A0AB] truncate" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.625rem" }}>{cssValue}</p>
      </div>
      <p className="text-[#6B6B76] shrink-0" style={{ fontSize: "0.625rem" }}>{name}</p>
    </div>
  );
}

function SectionHeader({ id, number, title, subtitle }: { id: string; number: string; title: string; subtitle: string }) {
  return (
    <div id={id} className="pt-20 pb-8 scroll-mt-20">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 rounded-full border border-[#5EEAD4]/25 flex items-center justify-center shrink-0">
          <span className="text-[#5EEAD4]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.625rem" }}>{number}</span>
        </div>
        <div className="h-px flex-1 bg-gradient-to-r from-[#5EEAD4]/20 to-transparent" />
      </div>
      <h2 className="text-[#E8E8ED] mb-2" style={{ fontSize: "1.75rem", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.15 }}>
        {title}
      </h2>
      <p className="text-[#6B6B76] max-w-2xl" style={{ fontSize: "0.875rem", lineHeight: 1.65 }}>{subtitle}</p>
    </div>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-12">
      <h3 className="text-[#A0A0AB] mb-5 pb-2 border-b border-white/[0.04]" style={{ fontSize: "0.8125rem", fontWeight: 500, letterSpacing: "0.02em" }}>
        {title}
      </h3>
      {children}
    </div>
  );
}

function TokenRow({ token, value, context }: { token: string; value: string; context: string }) {
  return (
    <div className="grid grid-cols-12 gap-4 py-2 border-b border-white/[0.03] hover:bg-white/[0.01] transition-colors">
      <div className="col-span-4">
        <code className="text-[#5EEAD4]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6875rem" }}>{token}</code>
      </div>
      <div className="col-span-3">
        <code className="text-[#E8E8ED]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6875rem" }}>{value}</code>
      </div>
      <div className="col-span-5">
        <span className="text-[#6B6B76]" style={{ fontSize: "0.6875rem" }}>{context}</span>
      </div>
    </div>
  );
}

// ─── Main Page ──────────────────────────────────────────────────────────────

export function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#E8E8ED]" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Fixed Sidebar Nav */}
      <DesignSystemNav />

      <div className="pl-0 lg:pl-64">
        <div className="max-w-5xl mx-auto px-6 pb-32">
          {/* Header */}
          <header className="pt-12 pb-16 border-b border-white/[0.06]">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-6 h-6">
                <div className="absolute inset-0 rounded-sm border border-[#5EEAD4]/50 rotate-45" />
                <div className="absolute inset-[3px] rounded-sm bg-[#5EEAD4]/30 rotate-45" />
              </div>
              <span className="text-[#5EEAD4] tracking-[0.2em]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6875rem", textTransform: "uppercase" }}>
                Design System v1.0
              </span>
            </div>
            <h1 className="text-[#E8E8ED] mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1.1 }}>
              Watchtower Design System
            </h1>
            <p className="text-[#6B6B76] max-w-2xl mb-8" style={{ fontSize: "0.9375rem", lineHeight: 1.7 }}>
              Complete specification for the Watchtower visual language. Every color, type style, spacing value,
              and interaction pattern documented with exact values so any engineer can reproduce this design
              in any framework &mdash; Tauri, Electron, web, or native.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Dark-first", "Product UI over marketing", "Engineered aesthetic", "macOS-native feel"].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full border border-white/[0.06] bg-[#141416] text-[#6B6B76]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.625rem" }}>
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* ═══════════════════════ 1. COLOR SYSTEM ═══════════════════════ */}
          <SectionHeader id="colors" number="01" title="Color System" subtitle="Every background, surface, text, accent, and semantic color with exact hex values and usage rules. Click any swatch to copy its hex." />

          <SubSection title="Backgrounds & Surfaces">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              <Swatch hex="#0A0A0B" name="Page" usage="Root background, deepest layer" />
              <Swatch hex="#08080A" name="Terminal" usage="Embedded code blocks, trace panels" />
              <Swatch hex="#0C0C0E" name="Surface Subtle" usage="Title bars, status bars, nav blur bg" />
              <Swatch hex="#0D0D0F" name="Card" usage="Primary card background, elevated panels" />
              <Swatch hex="#111113" name="Inner Card" usage="Nested elements inside cards" />
              <Swatch hex="#141416" name="Well" usage="Input fields, code blocks, recessed areas" />
              <Swatch hex="#1A1A1E" name="Muted" usage="Secondary surfaces, input backgrounds" />
              <Swatch hex="#2A2A2E" name="Elevated" usage="Avatars, switches, raised elements" />
            </div>
          </SubSection>

          <SubSection title="Text Colors">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="rounded-lg bg-[#0D0D0F] border border-white/[0.06] p-4">
                <p className="mb-2" style={{ fontSize: "1.25rem", color: "#E8E8ED", fontWeight: 500 }}>Primary Text</p>
                <code className="text-[#5EEAD4]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6875rem" }}>#E8E8ED</code>
                <p className="text-[#6B6B76] mt-1" style={{ fontSize: "0.625rem" }}>Headings, body copy, high-emphasis</p>
              </div>
              <div className="rounded-lg bg-[#0D0D0F] border border-white/[0.06] p-4">
                <p className="mb-2" style={{ fontSize: "1.25rem", color: "#A0A0AB", fontWeight: 500 }}>Secondary Text</p>
                <code className="text-[#5EEAD4]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6875rem" }}>#A0A0AB</code>
                <p className="text-[#6B6B76] mt-1" style={{ fontSize: "0.625rem" }}>Descriptions, trace text, medium-emphasis</p>
              </div>
              <div className="rounded-lg bg-[#0D0D0F] border border-white/[0.06] p-4">
                <p className="mb-2" style={{ fontSize: "1.25rem", color: "#6B6B76", fontWeight: 500 }}>Muted Text</p>
                <code className="text-[#5EEAD4]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6875rem" }}>#6B6B76</code>
                <p className="text-[#6B6B76] mt-1" style={{ fontSize: "0.625rem" }}>Captions, labels, nav links, low-emphasis</p>
              </div>
              <div className="rounded-lg bg-[#0D0D0F] border border-white/[0.06] p-4">
                <p className="mb-2" style={{ fontSize: "1.25rem", color: "#3A3A42", fontWeight: 500 }}>Disabled Text</p>
                <code className="text-[#5EEAD4]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6875rem" }}>#3A3A42</code>
                <p className="text-[#6B6B76] mt-1" style={{ fontSize: "0.625rem" }}>Timestamps, inactive items, placeholders</p>
              </div>
            </div>
          </SubSection>

          <SubSection title="Brand & Accent Colors">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              <Swatch hex="#5EEAD4" name="Accent Primary" usage="CTAs, active states, key highlights" />
              <Swatch hex="#5EEAD4" name="Accent Hover" usage="Hover glow: 0.2 opacity bg, 0.4 border" border="1px solid rgba(94,234,212,0.4)" />
              <Swatch hex="#5EEAD4" name="Accent Muted" usage="Tags, subtle bg at 0.04–0.1 opacity" border="1px solid rgba(94,234,212,0.15)" />
              <Swatch hex="#D4956B" name="Warm Accent" usage="Learning signals, secondary highlights" />
              <Swatch hex="#0A0A0B" name="On Accent" usage="Text on accent backgrounds" />
              <div className="rounded-lg border border-white/[0.06] bg-[#0D0D0F] p-3 flex flex-col justify-center">
                <p className="text-[#6B6B76] mb-2" style={{ fontSize: "0.625rem", fontWeight: 500 }}>Accent opacity scale</p>
                <div className="space-y-1">
                  {[0.04, 0.05, 0.08, 0.1, 0.15, 0.2, 0.3].map((o) => (
                    <div key={o} className="flex items-center gap-2">
                      <div className="w-6 h-3 rounded" style={{ backgroundColor: `rgba(94,234,212,${o})` }} />
                      <span className="text-[#3A3A42]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.5625rem" }}>{o}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SubSection>

          <SubSection title="Semantic Colors">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: "Success", hex: "#28C840", bg: "rgba(40,200,64,0.08)", border: "rgba(40,200,64,0.2)", text: "rgba(40,200,64,0.7)", usage: "Completed traces, connected status" },
                { name: "Error", hex: "#FF5F57", bg: "rgba(255,95,87,0.08)", border: "rgba(255,95,87,0.2)", text: "rgba(255,95,87,0.7)", usage: "Failed traces, failure doctor" },
                { name: "Warning", hex: "#FEBC2E", bg: "rgba(254,188,46,0.08)", border: "rgba(254,188,46,0.2)", text: "rgba(254,188,46,0.7)", usage: "Retriable states, attention needed" },
                { name: "Info", hex: "#5EEAD4", bg: "rgba(94,234,212,0.04)", border: "rgba(94,234,212,0.15)", text: "rgba(94,234,212,0.7)", usage: "Active items, informational highlights" },
              ].map((s) => (
                <div key={s.name} className="rounded-lg bg-[#0D0D0F] border border-white/[0.06] p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: s.hex }} />
                    <span className="text-[#E8E8ED]" style={{ fontSize: "0.8125rem", fontWeight: 500 }}>{s.name}</span>
                    <code className="text-[#6B6B76] ml-auto" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.5625rem" }}>{s.hex}</code>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <div className="w-full h-6 rounded" style={{ backgroundColor: s.bg, border: `1px solid ${s.border}` }}>
                        <span className="px-2 leading-6" style={{ color: s.text, fontFamily: "'JetBrains Mono', monospace", fontSize: "0.5625rem" }}>Background + Border</span>
                      </div>
                    </div>
                    <p className="text-[#6B6B76]" style={{ fontSize: "0.625rem" }}>{s.usage}</p>
                  </div>
                </div>
              ))}
            </div>
          </SubSection>

          <SubSection title="Border Colors">
            <div className="space-y-0">
              <OpacitySwatch base="#ffffff" opacity={0.02} name="Subtle" cssValue="rgba(255,255,255, 0.02)" />
              <OpacitySwatch base="#ffffff" opacity={0.03} name="Faint" cssValue="rgba(255,255,255, 0.03)" />
              <OpacitySwatch base="#ffffff" opacity={0.04} name="Divider" cssValue="rgba(255,255,255, 0.04)" />
              <OpacitySwatch base="#ffffff" opacity={0.06} name="Default" cssValue="rgba(255,255,255, 0.06)" />
              <OpacitySwatch base="#ffffff" opacity={0.08} name="Hover" cssValue="rgba(255,255,255, 0.08)" />
              <OpacitySwatch base="#ffffff" opacity={0.1} name="Strong" cssValue="rgba(255,255,255, 0.10)" />
              <OpacitySwatch base="#ffffff" opacity={0.2} name="Interactive Hover" cssValue="rgba(255,255,255, 0.20)" />
              <OpacitySwatch base="#ffffff" opacity={0.25} name="Focus" cssValue="rgba(255,255,255, 0.25)" />
              <div className="h-3" />
              <OpacitySwatch base="#5EEAD4" opacity={0.1} name="Accent Subtle" cssValue="rgba(94,234,212, 0.10)" />
              <OpacitySwatch base="#5EEAD4" opacity={0.15} name="Accent Default" cssValue="rgba(94,234,212, 0.15)" />
              <OpacitySwatch base="#5EEAD4" opacity={0.25} name="Accent Strong" cssValue="rgba(94,234,212, 0.25)" />
              <OpacitySwatch base="#5EEAD4" opacity={0.4} name="Accent Hover" cssValue="rgba(94,234,212, 0.40)" />
              <OpacitySwatch base="#5EEAD4" opacity={0.5} name="Accent Focus" cssValue="rgba(94,234,212, 0.50)" />
              <OpacitySwatch base="#FF5F57" opacity={0.1} name="Error Border" cssValue="rgba(255,95,87, 0.10)" />
              <OpacitySwatch base="#FF5F57" opacity={0.25} name="Error Hover" cssValue="rgba(255,95,87, 0.25)" />
            </div>
          </SubSection>

          <SubSection title="Color Usage Rules">
            <div className="rounded-lg bg-[#0D0D0F] border border-white/[0.06] overflow-hidden" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6875rem" }}>
              {[
                ["Page background", "#0A0A0B", "Always. Never pure black (#000)."],
                ["Terminal / code block bg", "#08080A", "One step darker than page for embedded panels."],
                ["Nav / status bar bg", "#0C0C0E", "Semi-transparent with backdrop-blur-2xl."],
                ["Card surface", "#0D0D0F", "Primary cards, step cards, pitch cards."],
                ["Nested well / input bg", "#141416", "Recessed areas inside cards: messages, code snippets."],
                ["Interactive hover bg", "rgba(255,255,255, 0.02–0.04)", "Subtle lightening on hover. Never a solid color shift."],
                ["Accent bg (active item)", "rgba(94,234,212, 0.04)", "Active classification rows, selected items."],
                ["CTA button fill", "#5EEAD4 solid", "Only for primary CTA buttons. Text is #0A0A0B."],
                ["Ghost button border", "rgba(255,255,255, 0.10)", "Secondary actions. Hover → 0.20 + bg 0.03."],
              ].map(([context, value, rule], i) => (
                <div key={i} className={`grid grid-cols-12 gap-4 px-4 py-2.5 ${i > 0 ? "border-t border-white/[0.03]" : ""}`}>
                  <span className="col-span-3 text-[#A0A0AB]">{context}</span>
                  <span className="col-span-3 text-[#5EEAD4]">{value}</span>
                  <span className="col-span-6 text-[#6B6B76]">{rule}</span>
                </div>
              ))}
            </div>
          </SubSection>

          {/* ═══════════════════════ 2. TYPOGRAPHY ═══════════════════════ */}
          <SectionHeader id="typography" number="02" title="Typography" subtitle="Two font families — Inter for interface text and JetBrains Mono for code, traces, and system labels. Every size, weight, and spacing value." />

          <SubSection title="Font Families">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="rounded-lg bg-[#0D0D0F] border border-white/[0.06] p-6">
                <p className="text-[#5EEAD4]/50 mb-3 tracking-[0.15em]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.625rem", textTransform: "uppercase" }}>Body / Display</p>
                <p className="text-[#E8E8ED] mb-4" style={{ fontFamily: "'Inter', sans-serif", fontSize: "2rem", fontWeight: 600, letterSpacing: "-0.03em" }}>
                  Inter
                </p>
                <p className="text-[#A0A0AB] mb-3" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", lineHeight: 1.65 }}>
                  The quick brown fox jumps over the lazy dog. 0123456789
                </p>
                <div className="flex flex-wrap gap-2">
                  {[300, 400, 500, 600, 700].map((w) => (
                    <span key={w} className="px-2 py-0.5 rounded bg-[#141416] text-[#6B6B76]" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem", fontWeight: w }}>
                      {w}
                    </span>
                  ))}
                </div>
                <p className="text-[#3A3A42] mt-3" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.5625rem" }}>
                  import: Inter wght@300;400;500;600;700
                </p>
              </div>
              <div className="rounded-lg bg-[#0D0D0F] border border-white/[0.06] p-6">
                <p className="text-[#5EEAD4]/50 mb-3 tracking-[0.15em]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.625rem", textTransform: "uppercase" }}>Code / Mono</p>
                <p className="text-[#E8E8ED] mb-4" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "2rem", fontWeight: 600, letterSpacing: "-0.03em" }}>
                  JetBrains Mono
                </p>
                <p className="text-[#A0A0AB] mb-3" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.875rem", lineHeight: 1.65 }}>
                  const run = await codex.execute(&#123; mode: &quot;guided&quot; &#125;);
                </p>
                <div className="flex flex-wrap gap-2">
                  {[400, 500, 600].map((w) => (
                    <span key={w} className="px-2 py-0.5 rounded bg-[#141416] text-[#6B6B76]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6875rem", fontWeight: w }}>
                      {w}
                    </span>
                  ))}
                </div>
                <p className="text-[#3A3A42] mt-3" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.5625rem" }}>
                  import: JetBrains Mono wght@400;500;600
                </p>
              </div>
            </div>
          </SubSection>

          <SubSection title="Type Scale">
            <div className="rounded-lg bg-[#0D0D0F] border border-white/[0.06] overflow-hidden">
              {[
                { name: "Display", family: "Inter", size: "clamp(2.25rem, 5.5vw, 4rem)", weight: 600, lh: 1.05, ls: "-0.035em", sample: "Slack is where requests appear." },
                { name: "H1", family: "Inter", size: "clamp(1.75rem, 4vw, 2.75rem)", weight: 600, lh: 1.1, ls: "-0.03em", sample: "Give your engineering org a command room." },
                { name: "H2", family: "Inter", size: "clamp(1.5rem, 3vw, 2.25rem)", weight: 600, lh: 1.15, ls: "-0.02em", sample: "Three moves. No magic act." },
                { name: "H3 / Card Title", family: "Inter", size: "0.9375rem", weight: 500, lh: 1.35, ls: "0", sample: "Slack thread becomes an intake lane." },
                { name: "Body Large", family: "Inter", size: "0.9375rem", weight: 400, lh: 1.65, ls: "0", sample: "Slack-native intake. Autonomous workflow routing." },
                { name: "Body", family: "Inter", size: "0.875rem", weight: 400, lh: 1.7, ls: "0", sample: "Not just a bot that replies in Slack." },
                { name: "Body Small", family: "Inter", size: "0.8125rem", weight: 400, lh: 1.65, ls: "0", sample: "A tighter loop between request, execution, and proof." },
                { name: "Caption", family: "Inter", size: "0.75rem", weight: 400, lh: 1.65, ls: "0", sample: "Descriptions and secondary card text." },
                { name: "Overline", family: "JetBrains Mono", size: "0.6875rem", weight: 400, lh: 1.5, ls: "0.2em", sample: "SECTION LABEL" },
                { name: "Label", family: "JetBrains Mono", size: "0.625rem", weight: 400, lh: 1.5, ls: "0.15em", sample: "SUBSECTION LABEL" },
                { name: "Code", family: "JetBrains Mono", size: "0.6875rem", weight: 400, lh: 1.8, ls: "0", sample: "intent=PR_REVIEW confidence=0.94" },
                { name: "Code Small", family: "JetBrains Mono", size: "0.625rem", weight: 400, lh: 1.6, ls: "0", sample: "routing: PR_REVIEW -> codex/review" },
                { name: "Code Tiny", family: "JetBrains Mono", size: "0.5625rem", weight: 400, lh: 1.5, ls: "0.05em", sample: "jobs: 2 active  streak: 17  chaos: low" },
                { name: "Micro", family: "JetBrains Mono", size: "0.5rem", weight: 400, lh: 1.4, ls: "0.1em", sample: "UPPERCASE METRIC LABELS" },
              ].map((t, i) => (
                <div key={t.name} className={`px-5 py-4 ${i > 0 ? "border-t border-white/[0.03]" : ""} flex flex-col sm:flex-row sm:items-center gap-3`}>
                  <div className="w-28 shrink-0">
                    <p className="text-[#5EEAD4]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.625rem" }}>{t.name}</p>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-[#E8E8ED] truncate"
                      style={{
                        fontFamily: t.family === "Inter" ? "'Inter', sans-serif" : "'JetBrains Mono', monospace",
                        fontSize: t.size.includes("clamp") ? "1.5rem" : t.size,
                        fontWeight: t.weight,
                        lineHeight: t.lh,
                        letterSpacing: t.ls,
                        textTransform: t.name === "Overline" || t.name === "Label" || t.name === "Micro" ? "uppercase" : undefined,
                      }}
                    >
                      {t.sample}
                    </p>
                  </div>
                  <div className="w-56 shrink-0 text-right">
                    <code className="text-[#3A3A42]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.5625rem" }}>
                      {t.size} / {t.weight} / {t.lh} / {t.ls}
                    </code>
                  </div>
                </div>
              ))}
            </div>
          </SubSection>

          {/* ═══════════════════════ 3. SPACING & LAYOUT ═══════════════════════ */}
          <SectionHeader id="spacing" number="03" title="Spacing & Layout" subtitle="Base unit is 4px. All spacing derives from a consistent scale. Generous whitespace is a design principle — no cramming." />

          <SubSection title="Spacing Scale">
            <div className="space-y-1">
              {[
                { name: "2xs", px: 2, rem: "0.125" },
                { name: "xs", px: 4, rem: "0.25" },
                { name: "sm", px: 6, rem: "0.375" },
                { name: "md", px: 8, rem: "0.5" },
                { name: "lg", px: 10, rem: "0.625" },
                { name: "xl", px: 12, rem: "0.75" },
                { name: "2xl", px: 16, rem: "1" },
                { name: "3xl", px: 20, rem: "1.25" },
                { name: "4xl", px: 24, rem: "1.5" },
                { name: "5xl", px: 32, rem: "2" },
                { name: "6xl", px: 40, rem: "2.5" },
                { name: "7xl", px: 48, rem: "3" },
                { name: "8xl", px: 64, rem: "4" },
                { name: "9xl", px: 80, rem: "5" },
                { name: "10xl", px: 96, rem: "6" },
              ].map((s) => (
                <div key={s.name} className="flex items-center gap-4">
                  <span className="text-[#6B6B76] w-10 shrink-0" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.625rem" }}>{s.name}</span>
                  <div className="h-3 rounded-sm bg-[#5EEAD4]/20" style={{ width: s.px * 2, minWidth: 2 }} />
                  <span className="text-[#3A3A42]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.625rem" }}>
                    {s.px}px / {s.rem}rem
                  </span>
                </div>
              ))}
            </div>
          </SubSection>

          <SubSection title="Layout Values">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Page max-width", value: "1280px", css: "max-w-7xl", note: "Primary content container" },
                { label: "Narrow max-width", value: "896px", css: "max-w-4xl", note: "Terminal, hero content" },
                { label: "Text max-width", value: "768px", css: "max-w-3xl", note: "FAQ, CTA sections" },
                { label: "Page horizontal padding", value: "24px", css: "px-6", note: "Left/right on all sections" },
                { label: "Section vertical padding", value: "80px", css: "py-20", note: "Standard section spacing" },
                { label: "CTA section vertical", value: "96px", css: "py-24", note: "Extra breathing room on CTA" },
                { label: "Card padding — large", value: "24px", css: "p-6", note: "Step cards, pitch cards" },
                { label: "Card padding — medium", value: "20px", css: "p-5", note: "Feature cards, dashboard panels" },
                { label: "Card padding — small", value: "16px", css: "p-4", note: "Nested sub-cards, failure doctor" },
                { label: "Card padding — compact", value: "12px", css: "p-3", note: "Messages, code blocks, inner wells" },
                { label: "Grid gap — card grids", value: "1px", css: "gap-px", note: "Borderless card grids (bg bleeds through)" },
                { label: "Grid gap — step cards", value: "16px", css: "gap-4", note: "Separated card grids" },
                { label: "Navbar height", value: "48px", css: "h-12", note: "Fixed top navigation" },
              ].map((item) => (
                <div key={item.label} className="rounded-lg bg-[#0D0D0F] border border-white/[0.06] p-3 flex items-start gap-3">
                  <div className="flex-1">
                    <p className="text-[#A0A0AB]" style={{ fontSize: "0.75rem", fontWeight: 500 }}>{item.label}</p>
                    <p className="text-[#6B6B76]" style={{ fontSize: "0.625rem" }}>{item.note}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-[#E8E8ED]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem" }}>{item.value}</p>
                    <p className="text-[#3A3A42]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.5625rem" }}>{item.css}</p>
                  </div>
                </div>
              ))}
            </div>
          </SubSection>

          {/* ═══════════════════════ 4. BORDER & RADIUS ═══════════════════════ */}
          <SectionHeader id="borders" number="04" title="Border & Radius" subtitle="Consistent border radii and widths. Corners follow a predictable scale from sharp to pill." />

          <SubSection title="Border Radius Scale">
            <div className="flex flex-wrap gap-4">
              {[
                { name: "none", value: "0px", size: 60 },
                { name: "sm", value: "2px", size: 60 },
                { name: "default", value: "4px", size: 60 },
                { name: "md", value: "6px", size: 60 },
                { name: "lg", value: "8px", size: 60 },
                { name: "xl", value: "12px", size: 60 },
                { name: "full", value: "9999px", size: 60 },
              ].map((r) => (
                <div key={r.name} className="flex flex-col items-center gap-2">
                  <div
                    className="w-[60px] h-[60px] border border-[#5EEAD4]/30 bg-[#5EEAD4]/[0.06]"
                    style={{ borderRadius: r.value === "9999px" ? "9999px" : r.value }}
                  />
                  <p className="text-[#A0A0AB]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.625rem" }}>{r.name}</p>
                  <p className="text-[#3A3A42]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.5625rem" }}>{r.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-lg bg-[#0D0D0F] border border-white/[0.06] overflow-hidden" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6875rem" }}>
              {[
                ["Buttons (primary, ghost)", "full (9999px)", "Pill-shaped always"],
                ["Cards, panels, dashboard", "xl (12px)", "Consistent outer containers"],
                ["Inner cards, sub-panels", "lg (8px)", "Nested card elements"],
                ["Tags, badges, code blocks", "default (4px)", "Compact inline elements"],
                ["Status dots", "full (9999px)", "Always circular"],
                ["Inputs", "lg (8px)", "Text fields, dropdowns"],
                ["Navbar container", "full (9999px)", "Floating pill nav"],
              ].map(([element, radius, note], i) => (
                <div key={i} className={`grid grid-cols-3 gap-4 px-4 py-2.5 ${i > 0 ? "border-t border-white/[0.03]" : ""}`}>
                  <span className="text-[#A0A0AB]">{element}</span>
                  <span className="text-[#5EEAD4]">{radius}</span>
                  <span className="text-[#6B6B76]">{note}</span>
                </div>
              ))}
            </div>
          </SubSection>

          <SubSection title="Border Width & Style">
            <p className="text-[#6B6B76] mb-4" style={{ fontSize: "0.8125rem", lineHeight: 1.65 }}>
              All borders are <code className="text-[#5EEAD4]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem" }}>1px solid</code>.
              No 2px or thicker borders anywhere in the system. Borders use white at varying opacity levels to create depth without visible edges.
            </p>
          </SubSection>

          {/* ═══════════════════════ 5. SHADOW & ELEVATION ═══════════════════════ */}
          <SectionHeader id="shadows" number="05" title="Shadow & Elevation" subtitle="No traditional drop shadows. Instead, colored glow effects create depth. The system uses radial gradients, box-shadow glow, and backdrop-blur." />

          <SubSection title="Box Shadow / Glow Levels">
            <div className="space-y-4">
              {[
                { name: "Ambient Glow", value: "0 0 80px rgba(94,234,212, 0.02)", usage: "Dashboard frame, terminal resting state", preview: "0 0 80px rgba(94,234,212, 0.03)" },
                { name: "Ambient Glow (warm)", value: "0 0 80px rgba(212,149,107, 0.02)", usage: "Warm-accent ambient backgrounds" },
                { name: "Hover Glow", value: "0 0 100px rgba(94,234,212, 0.06)", usage: "Terminal hover, dashboard hover", preview: "0 0 100px rgba(94,234,212, 0.06)" },
                { name: "CTA Glow", value: "0 0 24px rgba(94,234,212, 0.3)", usage: "Primary button hover state", preview: "0 0 24px rgba(94,234,212, 0.3)" },
                { name: "CTA Glow Strong", value: "0 0 30px rgba(94,234,212, 0.35)", usage: "Primary CTA button hover (Motion)", preview: "0 0 30px rgba(94,234,212, 0.35)" },
              ].map((s) => (
                <div key={s.name} className="flex items-center gap-4 px-4 py-3 rounded-lg bg-[#0D0D0F] border border-white/[0.06]">
                  <div className="w-16 h-16 rounded-xl bg-[#141416] shrink-0" style={{ boxShadow: s.preview || s.value }} />
                  <div>
                    <p className="text-[#E8E8ED]" style={{ fontSize: "0.8125rem", fontWeight: 500 }}>{s.name}</p>
                    <code className="text-[#5EEAD4]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.625rem" }}>{s.value}</code>
                    <p className="text-[#6B6B76]" style={{ fontSize: "0.625rem" }}>{s.usage}</p>
                  </div>
                </div>
              ))}
            </div>
          </SubSection>

          <SubSection title="Background Glow Effects">
            <div className="rounded-lg bg-[#0D0D0F] border border-white/[0.06] overflow-hidden" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6875rem" }}>
              {[
                ["Mouse-following glow", "radial-gradient(circle, rgba(94,234,212,0.03) 0%, transparent 60%)", "600×600px, tracks cursor with 800ms ease"],
                ["Ambient orb", "radial-gradient(circle, rgba(94,234,212,0.03) 0%, transparent 70%)", "400–600px, fixed position, breathe animation"],
                ["Section accent glow", "blur-[150px] bg-[#5EEAD4]/[0.06]", "Behind hero headline, 700×400px"],
                ["CTA section glow", "blur-[120px] bg-[#5EEAD4]/[0.04]", "Behind CTA, 600×300px, centered"],
                ["Card corner glow", "blur-[80px] bg-[#5EEAD4]/[0.03]", "48×48px, positioned top-right of cards"],
                ["GlowCard hover", "radial-gradient(circle, rgba(94,234,212,0.12), transparent 70%)", "300×300px, follows cursor within card"],
                ["GlowCard border", "radial-gradient(circle 120px at cursor, rgba(94,234,212,0.12), transparent 70%)", "Mask-composite: exclude for border-only glow"],
              ].map(([name, value, note], i) => (
                <div key={i} className={`grid grid-cols-12 gap-3 px-4 py-2.5 ${i > 0 ? "border-t border-white/[0.03]" : ""}`}>
                  <span className="col-span-3 text-[#A0A0AB]">{name}</span>
                  <span className="col-span-5 text-[#5EEAD4] break-all">{value}</span>
                  <span className="col-span-4 text-[#6B6B76]">{note}</span>
                </div>
              ))}
            </div>
          </SubSection>

          <SubSection title="Backdrop Blur">
            <div className="flex gap-4">
              <div className="rounded-lg bg-[#0D0D0F] border border-white/[0.06] p-4 flex-1">
                <p className="text-[#A0A0AB] mb-1" style={{ fontSize: "0.75rem", fontWeight: 500 }}>Navbar</p>
                <code className="text-[#5EEAD4]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6875rem" }}>backdrop-blur-2xl</code>
                <p className="text-[#3A3A42] mt-1" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.5625rem" }}>filter: blur(40px)</p>
              </div>
              <div className="rounded-lg bg-[#0D0D0F] border border-white/[0.06] p-4 flex-1">
                <p className="text-[#A0A0AB] mb-1" style={{ fontSize: "0.75rem", fontWeight: 500 }}>Mobile menu</p>
                <code className="text-[#5EEAD4]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6875rem" }}>backdrop-blur-2xl</code>
                <p className="text-[#3A3A42] mt-1" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.5625rem" }}>filter: blur(40px)</p>
              </div>
            </div>
          </SubSection>

          {/* ═══════════════════════ 6. COMPONENT PATTERNS ═══════════════════════ */}
          <SectionHeader id="components" number="06" title="Component Patterns" subtitle="Every reusable UI component with exact structure, states, and token values. These patterns should be reproduced 1:1 in any target framework." />

          <SubSection title="Buttons">
            <div className="space-y-6">
              {/* Primary */}
              <div className="rounded-lg bg-[#0D0D0F] border border-white/[0.06] p-6">
                <p className="text-[#5EEAD4]/50 mb-4 tracking-[0.15em]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.625rem", textTransform: "uppercase" }}>Primary Button</p>
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <button className="px-6 py-2.5 rounded-full bg-[#5EEAD4] text-[#0A0A0B]" style={{ fontSize: "0.875rem", fontWeight: 500 }}>Default</button>
                  <button className="px-6 py-2.5 rounded-full bg-[#5EEAD4] text-[#0A0A0B]" style={{ fontSize: "0.875rem", fontWeight: 500, boxShadow: "0 0 30px rgba(94,234,212,0.35)", transform: "scale(1.04)" }}>Hover</button>
                  <button className="px-6 py-2.5 rounded-full bg-[#5EEAD4] text-[#0A0A0B]" style={{ fontSize: "0.875rem", fontWeight: 500, transform: "scale(0.97)" }}>Active</button>
                  <button className="px-6 py-2.5 rounded-full bg-[#5EEAD4]/40 text-[#0A0A0B]/50 cursor-not-allowed" style={{ fontSize: "0.875rem", fontWeight: 500 }}>Disabled</button>
                  <button className="px-6 py-2.5 rounded-full bg-[#5EEAD4] text-[#0A0A0B] flex items-center gap-2" style={{ fontSize: "0.875rem", fontWeight: 500 }}>
                    <Loader2 size={14} className="animate-spin" /> Loading
                  </button>
                </div>
                <div className="text-[#6B6B76]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.625rem", lineHeight: 1.8 }}>
                  bg: #5EEAD4 | text: #0A0A0B | radius: full | padding: 10px 24px<br />
                  font: Inter 500 0.875rem | hover: scale(1.04) + shadow 0 0 30px rgba(94,234,212,0.35)<br />
                  active: scale(0.97) | disabled: opacity 0.4 | shimmer: linear-gradient sweep on hover
                </div>
              </div>

              {/* Ghost */}
              <div className="rounded-lg bg-[#0D0D0F] border border-white/[0.06] p-6">
                <p className="text-[#5EEAD4]/50 mb-4 tracking-[0.15em]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.625rem", textTransform: "uppercase" }}>Ghost / Secondary Button</p>
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <button className="px-6 py-2.5 rounded-full border text-[#A0A0AB]" style={{ fontSize: "0.875rem", fontWeight: 500, borderColor: "rgba(255,255,255,0.1)" }}>Default</button>
                  <button className="px-6 py-2.5 rounded-full border text-[#E8E8ED]" style={{ fontSize: "0.875rem", fontWeight: 500, borderColor: "rgba(255,255,255,0.25)", backgroundColor: "rgba(255,255,255,0.03)", transform: "scale(1.04)" }}>Hover</button>
                  <button className="px-6 py-2.5 rounded-full border text-[#E8E8ED]" style={{ fontSize: "0.875rem", fontWeight: 500, borderColor: "rgba(255,255,255,0.2)", transform: "scale(0.97)" }}>Active</button>
                  <button className="px-6 py-2.5 rounded-full border text-[#3A3A42] cursor-not-allowed" style={{ fontSize: "0.875rem", fontWeight: 500, borderColor: "rgba(255,255,255,0.04)" }}>Disabled</button>
                </div>
                <div className="text-[#6B6B76]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.625rem", lineHeight: 1.8 }}>
                  bg: transparent | border: rgba(255,255,255,0.10) | text: #A0A0AB | radius: full<br />
                  hover: text #E8E8ED, border 0.25, bg rgba(255,255,255,0.03), scale(1.04)<br />
                  active: scale(0.97) | disabled: text #3A3A42, border 0.04
                </div>
              </div>

              {/* Nav CTA */}
              <div className="rounded-lg bg-[#0D0D0F] border border-white/[0.06] p-6">
                <p className="text-[#5EEAD4]/50 mb-4 tracking-[0.15em]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.625rem", textTransform: "uppercase" }}>Nav Accent Button</p>
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <button className="px-4 py-1.5 rounded-full text-[#5EEAD4]" style={{ fontSize: "0.8125rem", fontWeight: 500, backgroundColor: "rgba(94,234,212,0.1)", border: "1px solid rgba(94,234,212,0.25)" }}>Default</button>
                  <button className="px-4 py-1.5 rounded-full text-[#5EEAD4]" style={{ fontSize: "0.8125rem", fontWeight: 500, backgroundColor: "rgba(94,234,212,0.2)", border: "1px solid rgba(94,234,212,0.5)" }}>Hover</button>
                </div>
                <div className="text-[#6B6B76]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.625rem", lineHeight: 1.8 }}>
                  bg: rgba(94,234,212,0.10) | border: rgba(94,234,212,0.25) | text: #5EEAD4<br />
                  hover: bg 0.20, border 0.50 | + shimmer sweep animation
                </div>
              </div>
            </div>
          </SubSection>

          <SubSection title="Cards">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Feature card */}
              <div className="rounded-lg bg-[#0D0D0F] border border-white/[0.06] p-6">
                <p className="text-[#5EEAD4]/50 mb-4 tracking-[0.15em]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.625rem", textTransform: "uppercase" }}>Feature Card</p>
                <div className="bg-[#0A0A0B] border border-white/[0.04] rounded-lg p-5">
                  <MessageSquare size={18} strokeWidth={1.5} className="text-[#5EEAD4]/40 mb-4" />
                  <p className="text-[#6B6B76] mb-2 tracking-[0.1em]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.5625rem", textTransform: "uppercase" }}>Feature label</p>
                  <p className="text-[#E8E8ED] mb-2" style={{ fontSize: "0.875rem", fontWeight: 500, lineHeight: 1.35 }}>Card title goes here.</p>
                  <p className="text-[#6B6B76]" style={{ fontSize: "0.75rem", lineHeight: 1.65 }}>Description text explaining the feature.</p>
                </div>
                <p className="text-[#3A3A42] mt-3" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.5625rem", lineHeight: 1.6 }}>
                  bg: #0A0A0B | border: white/0.04 | p-5 | radius: lg (8px)<br />
                  hover: mouse-tracking glow + bg shift to #0D0D0F<br />
                  Used in: gap-px grid with bg-white/0.04 bleed
                </p>
              </div>

              {/* Stat card */}
              <div className="rounded-lg bg-[#0D0D0F] border border-white/[0.06] p-6">
                <p className="text-[#5EEAD4]/50 mb-4 tracking-[0.15em]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.625rem", textTransform: "uppercase" }}>Stat / Metric Card</p>
                <div className="bg-[#0D0D0F] border border-white/[0.03] rounded-lg p-3 text-center w-24">
                  <p className="text-[#5EEAD4]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "1.25rem", fontWeight: 600 }}>17</p>
                  <p className="text-[#3A3A42]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.5rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>Streak</p>
                </div>
                <p className="text-[#3A3A42] mt-3" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.5625rem", lineHeight: 1.6 }}>
                  bg: #0D0D0F | border: white/0.03 | p-3 | radius: lg<br />
                  hover: border rgba(94,234,212,0.15), y: -2px<br />
                  value: JetBrains Mono 600 1.25rem in accent color
                </p>
              </div>

              {/* Trace row */}
              <div className="rounded-lg bg-[#0D0D0F] border border-white/[0.06] p-6">
                <p className="text-[#5EEAD4]/50 mb-4 tracking-[0.15em]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.625rem", textTransform: "uppercase" }}>Trace / Log Row</p>
                <div className="bg-[#0D0D0F] border border-white/[0.03] rounded-lg px-3 py-2 flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#5EEAD4]" />
                  <span className="text-[#6B6B76]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.625rem" }}>#2217</span>
                  <span className="px-1.5 py-0.5 rounded bg-[#5EEAD4]/8 text-[#5EEAD4]/70" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.5625rem" }}>PR_REVIEW</span>
                  <span className="flex-1" />
                  <span className="text-[#3A3A42]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.5625rem" }}>41s</span>
                  <span className="text-[#3A3A42]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.5625rem" }}>$0.08</span>
                </div>
                <p className="text-[#3A3A42] mt-3" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.5625rem", lineHeight: 1.6 }}>
                  hover: bg #0F0F11, border white/0.08, x: +3px, dot scale 1.5<br />
                  text brightens from #3A3A42 → #6B6B76 on hover
                </p>
              </div>

              {/* Step card */}
              <div className="rounded-lg bg-[#0D0D0F] border border-white/[0.06] p-6">
                <p className="text-[#5EEAD4]/50 mb-4 tracking-[0.15em]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.625rem", textTransform: "uppercase" }}>Step Card</p>
                <div className="bg-[#0D0D0F] border border-white/[0.06] rounded-xl p-5 relative overflow-hidden">
                  <span className="absolute -top-2 -right-1 text-[#5EEAD4]/[0.04] select-none" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "4rem", fontWeight: 700 }}>01</span>
                  <div className="flex items-center gap-2 mb-3 relative z-10">
                    <div className="w-7 h-7 rounded-full border border-[#5EEAD4]/25 flex items-center justify-center">
                      <span className="text-[#5EEAD4]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.625rem" }}>01</span>
                    </div>
                    <div className="h-px flex-1 bg-white/[0.04]" />
                  </div>
                  <p className="text-[#E8E8ED] relative z-10" style={{ fontSize: "0.9375rem", fontWeight: 500 }}>Step title here</p>
                </div>
                <p className="text-[#3A3A42] mt-3" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.5625rem", lineHeight: 1.6 }}>
                  bg: #0D0D0F | radius: xl | watermark number at 7rem 0.04 opacity<br />
                  hover: mouse-tracking glow, border → white/0.10
                </p>
              </div>
            </div>
          </SubSection>

          <SubSection title="Tags & Badges">
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="px-2 py-0.5 rounded bg-[#5EEAD4]/8 text-[#5EEAD4]/70" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.5625rem" }}>PR_REVIEW</span>
              <span className="px-2 py-0.5 rounded bg-[#D4956B]/8 text-[#D4956B]/70" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.5625rem" }}>BUG_FIX</span>
              <span className="px-2 py-0.5 rounded bg-white/[0.04] text-[#6B6B76]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.5625rem" }}>ASSIST</span>
              <span className="px-2 py-0.5 rounded bg-[#FF5F57]/8 text-[#FF5F57]/60" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.5625rem" }}>context_overflow</span>
              <span className="px-2 py-0.5 rounded bg-[#28C840]/8 text-[#28C840]/60" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.5625rem" }}>high trust</span>
              <span className="px-2 py-0.5 rounded bg-[#141416] border border-white/[0.04] text-[#6B6B76]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.5625rem" }}>mention</span>
            </div>
            <div className="text-[#6B6B76]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.625rem", lineHeight: 1.8 }}>
              padding: 2px 8px | radius: 4px | font: JetBrains Mono 400 0.5625rem<br />
              hover (tags): scale(1.05), y: -1px, border → accent/0.2 | spring stiffness: 500, damping: 20<br />
              intent tags: colored bg at 8% opacity, text at 70% opacity | neutral: bg white/0.04
            </div>
          </SubSection>

          <SubSection title="Navigation">
            <div className="rounded-lg bg-[#0D0D0F] border border-white/[0.06] p-6">
              <div className="flex items-center justify-between h-12 px-4 rounded-full border border-white/[0.06] bg-[#0A0A0B]/70">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-5 h-5"><div className="absolute inset-0 rounded-sm border border-[#5EEAD4]/50 rotate-45" /><div className="absolute inset-[3px] rounded-sm bg-[#5EEAD4]/30 rotate-45" /></div>
                  <span className="text-[#E8E8ED] tracking-[0.15em]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", fontWeight: 600 }}>WATCHTOWER</span>
                </div>
                <div className="flex gap-1">
                  <span className="px-3 py-1.5 rounded-full bg-white/[0.06] text-[#E8E8ED]" style={{ fontSize: "0.8125rem" }}>Active</span>
                  <span className="px-3 py-1.5 rounded-full text-[#6B6B76]" style={{ fontSize: "0.8125rem" }}>Default</span>
                </div>
              </div>
              <p className="text-[#3A3A42] mt-4" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.5625rem", lineHeight: 1.6 }}>
                height: 48px | radius: full | bg: #0A0A0B/70 + backdrop-blur-2xl | border: white/0.06<br />
                links: 0.8125rem text-[#6B6B76] | hover: text-[#E8E8ED] + layout-animated bg pill (white/0.06)<br />
                logo hover: rotate(90deg) 500ms + text → #5EEAD4 | position: fixed top-0 z-50
              </p>
            </div>
          </SubSection>

          <SubSection title="Accordion / FAQ">
            <div className="rounded-lg bg-[#0D0D0F] border border-white/[0.06] p-6">
              <div className="rounded-xl border border-white/[0.06] overflow-hidden">
                <div className="flex items-center justify-between px-5 py-4 bg-white/[0.02]">
                  <div className="flex items-center gap-3">
                    <span className="text-[#5EEAD4]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.625rem" }}>01</span>
                    <span className="text-[#E8E8ED]" style={{ fontSize: "0.875rem" }}>Open question state</span>
                  </div>
                  <ChevronDown size={14} className="text-[#5EEAD4]" style={{ transform: "rotate(180deg)" }} />
                </div>
                <div className="px-5 pb-4 pl-[52px]">
                  <p className="text-[#6B6B76]" style={{ fontSize: "0.8125rem", lineHeight: 1.7 }}>Answer content goes here with full line-height.</p>
                </div>
                <div className="border-t border-white/[0.04] flex items-center justify-between px-5 py-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[#3A3A42]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.625rem" }}>02</span>
                    <span className="text-[#A0A0AB]" style={{ fontSize: "0.875rem" }}>Closed question state</span>
                  </div>
                  <ChevronDown size={14} className="text-[#6B6B76]" />
                </div>
              </div>
              <p className="text-[#3A3A42] mt-4" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.5625rem", lineHeight: 1.6 }}>
                container: rounded-xl border white/0.06 | divider: border-t white/0.04<br />
                open: bg white/0.02, number text #5EEAD4, chevron rotated 180° in #5EEAD4<br />
                closed: number #3A3A42, text #A0A0AB | hover: bg white/0.01<br />
                animation: height auto + opacity, duration 250ms easeInOut
              </p>
            </div>
          </SubSection>

          <SubSection title="Terminal / Code Block">
            <div className="rounded-lg bg-[#0D0D0F] border border-white/[0.06] p-6">
              <div className="rounded-xl border border-white/[0.06] bg-[#08080A] overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.06] bg-[#0C0C0E]">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]/70" />
                    </div>
                    <span className="text-[#6B6B76]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6875rem" }}>title &mdash; subtitle</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#5EEAD4]" />
                    <span className="text-[#5EEAD4]/70" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.625rem" }}>LIVE</span>
                  </div>
                </div>
                <div className="px-4 py-3" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6875rem", lineHeight: 1.8 }}>
                  <div className="flex py-[3px] px-1 rounded-sm hover:bg-white/[0.03] transition-colors cursor-default">
                    <span className="text-[#3A3A42] w-[72px] shrink-0">[12:08:11]</span>
                    <span className="text-[#5EEAD4]/50 w-[72px] shrink-0">prefix</span>
                    <span className="text-[#A0A0AB]">trace content goes here</span>
                  </div>
                </div>
                <div className="flex items-center justify-between px-4 py-2 border-t border-white/[0.06] bg-[#0C0C0E]">
                  <span className="text-[#3A3A42]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.625rem" }}>status bar content</span>
                </div>
              </div>
              <p className="text-[#3A3A42] mt-4" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.5625rem", lineHeight: 1.6 }}>
                bg: #08080A | title-bar: #0C0C0E + border-b white/0.06 | radius: xl<br />
                traffic lights: 2.5×2.5 at 70% opacity, hover: scale(1.25)<br />
                lines: font 0.6875rem / 1.8 | timestamp: #3A3A42 w-72px | prefix: #5EEAD4/50 w-72px<br />
                hover: line bg white/0.03, timestamp → #6B6B76, prefix → #5EEAD4/80, text → #E8E8ED<br />
                status-bar: #0C0C0E + border-t white/0.06 | hover lift: y -4px on container
              </p>
            </div>
          </SubSection>

          {/* ═══════════════════════ 7. ICONOGRAPHY ═══════════════════════ */}
          <SectionHeader id="icons" number="07" title="Iconography" subtitle="Lucide React icons exclusively. Outlined style with consistent stroke width and color rules." />

          <SubSection title="Icon Sizes & Style">
            <div className="flex flex-wrap gap-6 items-end mb-6">
              {[
                { label: "sm", size: 14 },
                { label: "md", size: 18 },
                { label: "lg", size: 24 },
              ].map((s) => (
                <div key={s.label} className="flex flex-col items-center gap-2">
                  <MessageSquare size={s.size} strokeWidth={1.5} className="text-[#5EEAD4]/60" />
                  <p className="text-[#A0A0AB]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.625rem" }}>{s.label}</p>
                  <p className="text-[#3A3A42]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.5625rem" }}>{s.size}px</p>
                </div>
              ))}
            </div>
            <div className="rounded-lg bg-[#0D0D0F] border border-white/[0.06] overflow-hidden" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6875rem" }}>
              {[
                ["Default icon color", "#5EEAD4 at 40% opacity", "rgba(94,234,212, 0.40)", "Feature card icons, inactive states"],
                ["Hover icon color", "#5EEAD4 at 70–80% opacity", "rgba(94,234,212, 0.80)", "Feature card hover, scale 1.2 + rotate 5°"],
                ["Interactive (nav)", "#6B6B76", "#6B6B76", "Navigation icons, chevrons"],
                ["Interactive hover", "#E8E8ED", "#E8E8ED", "Nav icon hover"],
                ["Accent active", "#5EEAD4", "#5EEAD4", "Open accordion chevron, active indicators"],
                ["Stroke width", "1.5", "—", "Consistent across all icons"],
              ].map(([context, desc, value, usage], i) => (
                <div key={i} className={`grid grid-cols-4 gap-4 px-4 py-2.5 ${i > 0 ? "border-t border-white/[0.03]" : ""}`}>
                  <span className="text-[#A0A0AB]">{context}</span>
                  <span className="text-[#E8E8ED]">{desc}</span>
                  <span className="text-[#5EEAD4]">{value}</span>
                  <span className="text-[#6B6B76]">{usage}</span>
                </div>
              ))}
            </div>
          </SubSection>

          <SubSection title="Icon Set Used">
            <div className="flex flex-wrap gap-4">
              {[
                { Icon: MessageSquare, name: "MessageSquare" },
                { Icon: Eye, name: "Eye" },
                { Icon: Monitor, name: "Monitor" },
                { Icon: Brain, name: "Brain" },
                { Icon: ChevronDown, name: "ChevronDown" },
                { Icon: Search, name: "Search" },
                { Icon: Check, name: "Check" },
                { Icon: X, name: "X" },
                { Icon: AlertTriangle, name: "AlertTriangle" },
                { Icon: Info, name: "Info" },
              ].map(({ Icon, name }) => (
                <div key={name} className="flex flex-col items-center gap-1.5 p-3 rounded-lg bg-[#141416] border border-white/[0.04]">
                  <Icon size={18} strokeWidth={1.5} className="text-[#6B6B76]" />
                  <span className="text-[#3A3A42]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.5rem" }}>{name}</span>
                </div>
              ))}
            </div>
          </SubSection>

          {/* ═══════════════════════ 8. MOTION & INTERACTION ═══════════════════════ */}
          <SectionHeader id="motion" number="08" title="Motion & Interaction" subtitle="Every transition duration, easing curve, hover transform, and scroll animation with exact values for the Motion (Framer Motion) library." />

          <SubSection title="Timing & Easing">
            <div className="rounded-lg bg-[#0D0D0F] border border-white/[0.06] overflow-hidden" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6875rem" }}>
              {[
                ["Micro feedback", "150ms", "ease / default", "Color shifts, text brightening on hover"],
                ["Fast interaction", "200ms", "ease / default", "Border color change, bg change, icon transform"],
                ["Standard transition", "300ms", "ease / default", "Glow opacity, card border hover, shimmer opacity"],
                ["Smooth entrance", "500ms", "easeOut / [0.25,0.46,0.45,0.94]", "Staggered card entrance, scroll-triggered fade"],
                ["Section entrance", "600ms", "easeOut", "Section-level scroll fade-in"],
                ["Hero entrance", "700ms", "[0.25, 0.46, 0.45, 0.94]", "Hero headline and terminal entrance"],
                ["Slow ambient", "800ms", "ease-out", "Mouse-following background glow trailing"],
              ].map(([name, duration, easing, usage], i) => (
                <div key={i} className={`grid grid-cols-4 gap-4 px-4 py-2.5 ${i > 0 ? "border-t border-white/[0.03]" : ""}`}>
                  <span className="text-[#A0A0AB]">{name}</span>
                  <span className="text-[#5EEAD4]">{duration}</span>
                  <span className="text-[#E8E8ED]">{easing}</span>
                  <span className="text-[#6B6B76]">{usage}</span>
                </div>
              ))}
            </div>
          </SubSection>

          <SubSection title="Spring Physics">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { name: "Button / CTA", stiffness: 400, damping: 20, usage: "Button scale, hover lift" },
                { name: "Nav highlight", stiffness: 400, damping: 30, usage: "Layout-animated nav pill" },
                { name: "Tag / badge pop", stiffness: 500, damping: 20, usage: "Tag hover bounce, reaction pop" },
              ].map((s) => (
                <div key={s.name} className="rounded-lg bg-[#0D0D0F] border border-white/[0.06] p-4">
                  <p className="text-[#A0A0AB] mb-2" style={{ fontSize: "0.75rem", fontWeight: 500 }}>{s.name}</p>
                  <div className="flex gap-4 mb-2">
                    <div>
                      <p className="text-[#3A3A42]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.5rem" }}>STIFFNESS</p>
                      <p className="text-[#5EEAD4]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "1rem", fontWeight: 600 }}>{s.stiffness}</p>
                    </div>
                    <div>
                      <p className="text-[#3A3A42]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.5rem" }}>DAMPING</p>
                      <p className="text-[#5EEAD4]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "1rem", fontWeight: 600 }}>{s.damping}</p>
                    </div>
                  </div>
                  <p className="text-[#6B6B76]" style={{ fontSize: "0.625rem" }}>{s.usage}</p>
                </div>
              ))}
            </div>
          </SubSection>

          <SubSection title="Hover Transforms">
            <div className="rounded-lg bg-[#0D0D0F] border border-white/[0.06] overflow-hidden" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6875rem" }}>
              {[
                ["CTA button", "scale(1.04)", "Springy scale with glow"],
                ["CTA button active", "scale(0.97)", "Press-down feedback"],
                ["Badge hover", "scale(1.03)", "Gentle lift"],
                ["Tag hover", "scale(1.05) + translateY(-1px)", "Micro pop-up"],
                ["Icon hover", "scale(1.2) + rotate(5deg)", "Feature card icons"],
                ["Logo hover", "rotate(90deg)", "500ms transition, logo diamond only"],
                ["Terminal hover", "translateY(-4px)", "Lift whole container"],
                ["Metric card hover", "translateY(-2px)", "Subtle lift with border glow"],
                ["Trace row hover", "translateX(3px)", "Slide right with dot pulse"],
                ["Signal text hover", "translateX(2px)", "Subtle nudge right"],
                ["Nav link highlight", "layoutId animated pill", "Shared layout animation following cursor"],
              ].map(([element, transform, note], i) => (
                <div key={i} className={`grid grid-cols-3 gap-4 px-4 py-2.5 ${i > 0 ? "border-t border-white/[0.03]" : ""}`}>
                  <span className="text-[#A0A0AB]">{element}</span>
                  <span className="text-[#5EEAD4]">{transform}</span>
                  <span className="text-[#6B6B76]">{note}</span>
                </div>
              ))}
            </div>
          </SubSection>

          <SubSection title="Scroll-Triggered Animations">
            <div className="rounded-lg bg-[#0D0D0F] border border-white/[0.06] overflow-hidden" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6875rem" }}>
              {[
                ["Section entrance", "opacity: 0→1, y: 24→0px", "600ms easeOut", "IntersectionObserver at 10% threshold, fire-once"],
                ["Card stagger", "opacity: 0→1, y: 12→0px", "500ms, delay: i × 80ms", "Children stagger within section"],
                ["Trace row stagger", "opacity: 0→1, x: -12→0px", "300ms, delay: i × 60ms", "List items slide in from left"],
                ["Section label line", "width: 0→32px", "500ms, delay: 200ms", "Animated dash before section labels"],
                ["Step divider line", "scaleX: 0→1", "600ms, delay: 300ms + i×150ms", "Horizontal rule inside step cards"],
                ["Confidence bar fill", "width: 0→N%", "800ms easeOut, delay: 300ms", "Animated bar fill on scroll into view"],
                ["Activity bars", "height: 0→N%", "400ms easeOut, delay: i×20ms", "Bars grow from bottom"],
                ["Terminal lines", "Interval: 350ms per line", "fadeSlide 300ms", "Sequential line appearance"],
              ].map(([name, anim, timing, note], i) => (
                <div key={i} className={`grid grid-cols-4 gap-3 px-4 py-2.5 ${i > 0 ? "border-t border-white/[0.03]" : ""}`}>
                  <span className="text-[#A0A0AB]">{name}</span>
                  <span className="text-[#5EEAD4]">{anim}</span>
                  <span className="text-[#E8E8ED]">{timing}</span>
                  <span className="text-[#6B6B76]">{note}</span>
                </div>
              ))}
            </div>
          </SubSection>

          <SubSection title="Ambient Animations">
            <div className="rounded-lg bg-[#0D0D0F] border border-white/[0.06] overflow-hidden" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6875rem" }}>
              {[
                ["Status dot ping", "scale + fade out", "CSS animate-ping", "LIVE indicator, CONNECTED status"],
                ["Cursor blink", "opacity: 1→0.2→1", "1s repeat", "Terminal cursor while typing"],
                ["Text glow pulse", "textShadow: 0→20px blur→0", "3s repeat easeInOut", "'Watchtower' headline glow"],
                ["Orb breathe", "opacity: 1→0.5, scale: 1→1.05", "8–12s easeInOut", "Background glow orbs"],
                ["Scan line", "top: -2px → 100%", "10s linear infinite", "Horizontal scan line across grid"],
                ["Shimmer sweep", "translateX: -100% → 100%", "1.5–1.8s infinite", "CTA button shine on hover"],
                ["Failure dot pulse", "opacity: 1→0.4→1", "2s repeat", "Failure doctor indicator"],
                ["Success dot scale", "scale: 1→1.3→1", "2s repeat", "Success status in execute panel"],
              ].map(([name, anim, timing, note], i) => (
                <div key={i} className={`grid grid-cols-4 gap-3 px-4 py-2.5 ${i > 0 ? "border-t border-white/[0.03]" : ""}`}>
                  <span className="text-[#A0A0AB]">{name}</span>
                  <span className="text-[#5EEAD4]">{anim}</span>
                  <span className="text-[#E8E8ED]">{timing}</span>
                  <span className="text-[#6B6B76]">{note}</span>
                </div>
              ))}
            </div>
          </SubSection>

          {/* ═══════════════════════ 9. BACKGROUND & TEXTURE ═══════════════════════ */}
          <SectionHeader id="background" number="09" title="Background & Texture" subtitle="The page uses a layered background system: solid dark base, SVG grid, floating glow orbs, a scanning line, and a mouse-following spotlight." />

          <SubSection title="Layer Stack (bottom to top)">
            <div className="space-y-2">
              {[
                { z: 0, name: "Solid base", desc: "bg-[#0A0A0B] on root div", value: "#0A0A0B" },
                { z: 1, name: "SVG grid", desc: "64×64 pattern, stroke #5EEAD4 at 0.5px, full-screen, opacity: 0.035", value: "opacity: 3.5%" },
                { z: 2, name: "Glow orbs", desc: "3 fixed-position radial gradients, 400–600px, breathe animation 8–12s", value: "rgba(94,234,212, 0.02–0.03)" },
                { z: 3, name: "Scan line", desc: "Full-width 1px, gradient from transparent→accent/8→transparent, 10s top-to-bottom", value: "rgba(94,234,212, 0.08)" },
                { z: 4, name: "Mouse glow", desc: "600×600px radial, follows cursor with 800ms ease-out delay", value: "rgba(94,234,212, 0.03)" },
                { z: 10, name: "Content", desc: "All page content sits above background layers", value: "z-10 relative" },
              ].map((layer) => (
                <div key={layer.name} className="flex items-center gap-4 px-4 py-3 rounded-lg bg-[#0D0D0F] border border-white/[0.06]">
                  <span className="w-8 h-8 rounded-lg bg-[#141416] flex items-center justify-center shrink-0">
                    <span className="text-[#5EEAD4]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.625rem" }}>{layer.z}</span>
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[#E8E8ED]" style={{ fontSize: "0.8125rem", fontWeight: 500 }}>{layer.name}</p>
                    <p className="text-[#6B6B76]" style={{ fontSize: "0.6875rem" }}>{layer.desc}</p>
                  </div>
                  <code className="text-[#3A3A42] shrink-0" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.5625rem" }}>{layer.value}</code>
                </div>
              ))}
            </div>
          </SubSection>

          <SubSection title="Section Dividers">
            <div className="space-y-4">
              <div className="text-center">
                <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-2" />
                <code className="text-[#3A3A42]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.5625rem" }}>
                  h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent
                </code>
              </div>
              <p className="text-[#6B6B76]" style={{ fontSize: "0.75rem" }}>
                Placed between every section inside a max-w-7xl px-6 container. Fades to transparent on both ends.
              </p>
            </div>
          </SubSection>

          {/* ═══════════════════════ 10. DESIGN TOKENS SUMMARY ═══════════════════════ */}
          <SectionHeader id="tokens" number="10" title="Design Tokens Summary" subtitle="Complete exportable token reference. Copy this entire table into your Tauri/React project as your single source of truth." />

          <div className="rounded-xl border border-white/[0.06] bg-[#08080A] overflow-hidden">
            <div className="grid grid-cols-12 gap-4 px-5 py-3 border-b border-white/[0.06] bg-[#0C0C0E]">
              <span className="col-span-4 text-[#5EEAD4]/60 tracking-[0.1em]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.5625rem", textTransform: "uppercase" }}>Token</span>
              <span className="col-span-3 text-[#5EEAD4]/60 tracking-[0.1em]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.5625rem", textTransform: "uppercase" }}>Value</span>
              <span className="col-span-5 text-[#5EEAD4]/60 tracking-[0.1em]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.5625rem", textTransform: "uppercase" }}>Context</span>
            </div>

            <div className="px-5 py-2">
              <p className="text-[#3A3A42] py-2" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.5625rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>Colors — Backgrounds</p>
              <TokenRow token="color.bg.page" value="#0A0A0B" context="Root page background" />
              <TokenRow token="color.bg.terminal" value="#08080A" context="Code blocks, trace panels" />
              <TokenRow token="color.bg.surface" value="#0C0C0E" context="Title bars, status bars, nav" />
              <TokenRow token="color.bg.card" value="#0D0D0F" context="Primary card surface" />
              <TokenRow token="color.bg.inner" value="#111113" context="Nested cards inside cards" />
              <TokenRow token="color.bg.well" value="#141416" context="Inputs, recessed code areas" />
              <TokenRow token="color.bg.muted" value="#1A1A1E" context="Secondary surfaces, input bg" />
              <TokenRow token="color.bg.elevated" value="#2A2A2E" context="Avatars, switches" />

              <p className="text-[#3A3A42] py-2 mt-2" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.5625rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>Colors — Text</p>
              <TokenRow token="color.text.primary" value="#E8E8ED" context="Headings, body, high-emphasis" />
              <TokenRow token="color.text.secondary" value="#A0A0AB" context="Descriptions, medium-emphasis" />
              <TokenRow token="color.text.muted" value="#6B6B76" context="Captions, labels, low-emphasis" />
              <TokenRow token="color.text.disabled" value="#3A3A42" context="Timestamps, placeholders, inactive" />

              <p className="text-[#3A3A42] py-2 mt-2" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.5625rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>Colors — Accent</p>
              <TokenRow token="color.accent.default" value="#5EEAD4" context="Primary accent, CTA fills" />
              <TokenRow token="color.accent.warm" value="#D4956B" context="Learning signals, secondary accent" />
              <TokenRow token="color.accent.on" value="#0A0A0B" context="Text on accent backgrounds" />

              <p className="text-[#3A3A42] py-2 mt-2" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.5625rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>Colors — Semantic</p>
              <TokenRow token="color.success" value="#28C840" context="Success states, connected" />
              <TokenRow token="color.error" value="#FF5F57" context="Failed traces, errors" />
              <TokenRow token="color.warning" value="#FEBC2E" context="Warning, retriable states" />

              <p className="text-[#3A3A42] py-2 mt-2" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.5625rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>Colors — Borders</p>
              <TokenRow token="color.border.subtle" value="rgba(255,255,255,0.04)" context="Dividers, inner cards" />
              <TokenRow token="color.border.default" value="rgba(255,255,255,0.06)" context="Standard card borders" />
              <TokenRow token="color.border.hover" value="rgba(255,255,255,0.08)" context="Interactive hover" />
              <TokenRow token="color.border.strong" value="rgba(255,255,255,0.10)" context="Ghost buttons, emphasis" />
              <TokenRow token="color.border.focus" value="rgba(255,255,255,0.25)" context="Focus rings, active" />
              <TokenRow token="color.border.accent" value="rgba(94,234,212,0.25)" context="Accent button borders" />

              <p className="text-[#3A3A42] py-2 mt-2" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.5625rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>Typography</p>
              <TokenRow token="font.family.body" value="Inter" context="All UI text" />
              <TokenRow token="font.family.mono" value="JetBrains Mono" context="Code, traces, labels" />
              <TokenRow token="font.size.display" value="clamp(2.25rem, 5.5vw, 4rem)" context="Hero headline" />
              <TokenRow token="font.size.h1" value="clamp(1.75rem, 4vw, 2.75rem)" context="CTA heading" />
              <TokenRow token="font.size.h2" value="clamp(1.5rem, 3vw, 2.25rem)" context="Section headings" />
              <TokenRow token="font.size.h3" value="0.9375rem" context="Card titles" />
              <TokenRow token="font.size.body-lg" value="0.9375rem" context="Large body text" />
              <TokenRow token="font.size.body" value="0.875rem" context="Standard body" />
              <TokenRow token="font.size.body-sm" value="0.8125rem" context="Small body, descriptions" />
              <TokenRow token="font.size.caption" value="0.75rem" context="Card descriptions" />
              <TokenRow token="font.size.overline" value="0.6875rem" context="Section labels (mono)" />
              <TokenRow token="font.size.label" value="0.625rem" context="Sub-labels (mono)" />
              <TokenRow token="font.size.code" value="0.6875rem" context="Trace lines (mono)" />
              <TokenRow token="font.size.code-sm" value="0.625rem" context="Status bar, routing (mono)" />
              <TokenRow token="font.size.code-xs" value="0.5625rem" context="Tags, timestamps (mono)" />
              <TokenRow token="font.size.micro" value="0.5rem" context="Metric labels (mono)" />

              <p className="text-[#3A3A42] py-2 mt-2" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.5625rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>Spacing</p>
              <TokenRow token="spacing.section" value="80px (py-20)" context="Section vertical padding" />
              <TokenRow token="spacing.section-lg" value="96px (py-24)" context="CTA section padding" />
              <TokenRow token="spacing.page-x" value="24px (px-6)" context="Horizontal page margin" />
              <TokenRow token="spacing.card-lg" value="24px (p-6)" context="Large card internal" />
              <TokenRow token="spacing.card-md" value="20px (p-5)" context="Medium card internal" />
              <TokenRow token="spacing.card-sm" value="16px (p-4)" context="Small card internal" />
              <TokenRow token="spacing.card-xs" value="12px (p-3)" context="Compact card internal" />
              <TokenRow token="spacing.max-width" value="1280px" context="max-w-7xl page container" />

              <p className="text-[#3A3A42] py-2 mt-2" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.5625rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>Radius</p>
              <TokenRow token="radius.full" value="9999px" context="Buttons, nav, badges, dots" />
              <TokenRow token="radius.xl" value="12px" context="Cards, panels, dashboard" />
              <TokenRow token="radius.lg" value="8px" context="Inner cards, inputs" />
              <TokenRow token="radius.md" value="6px" context="Accent highlight behind text" />
              <TokenRow token="radius.default" value="4px" context="Tags, code blocks" />
              <TokenRow token="radius.sm" value="2px" context="Activity bars, cursor" />

              <p className="text-[#3A3A42] py-2 mt-2" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.5625rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>Motion</p>
              <TokenRow token="motion.duration.micro" value="150ms" context="Color shifts, text brightening" />
              <TokenRow token="motion.duration.fast" value="200ms" context="Border change, bg change" />
              <TokenRow token="motion.duration.normal" value="300ms" context="Glow opacity, card borders" />
              <TokenRow token="motion.duration.entrance" value="500–700ms" context="Scroll-triggered fade-in" />
              <TokenRow token="motion.ease.default" value="ease" context="CSS transitions" />
              <TokenRow token="motion.ease.entrance" value="[0.25, 0.46, 0.45, 0.94]" context="Hero entrance cubic-bezier" />
              <TokenRow token="motion.spring.button" value="stiffness:400, damping:20" context="Button hover/press" />
              <TokenRow token="motion.spring.nav" value="stiffness:400, damping:30" context="Nav highlight pill" />
              <TokenRow token="motion.spring.tag" value="stiffness:500, damping:20" context="Tag/badge pop" />
              <TokenRow token="motion.stagger.cards" value="80ms" context="Card entrance delay between items" />
              <TokenRow token="motion.stagger.rows" value="60ms" context="List row entrance delay" />

              <p className="text-[#3A3A42] py-2 mt-2" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.5625rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>Shadows & Glow</p>
              <TokenRow token="shadow.ambient" value="0 0 80px rgba(94,234,212,0.02)" context="Resting terminal, dashboard" />
              <TokenRow token="shadow.hover" value="0 0 100px rgba(94,234,212,0.06)" context="Container hover state" />
              <TokenRow token="shadow.cta" value="0 0 30px rgba(94,234,212,0.35)" context="Primary CTA hover" />
              <TokenRow token="glow.card" value="rgba(94,234,212,0.12)" context="GlowCard mouse radial" />
              <TokenRow token="glow.card-subtle" value="rgba(94,234,212,0.06–0.08)" context="Feature/step card variant" />
              <TokenRow token="blur.backdrop" value="40px (blur-2xl)" context="Navbar, mobile menu" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// ─── Sidebar Navigation ─────────────────────────────────────────────────────

function DesignSystemNav() {
  const sections = [
    { id: "colors", label: "01 Color System" },
    { id: "typography", label: "02 Typography" },
    { id: "spacing", label: "03 Spacing & Layout" },
    { id: "borders", label: "04 Border & Radius" },
    { id: "shadows", label: "05 Shadow & Elevation" },
    { id: "components", label: "06 Components" },
    { id: "icons", label: "07 Iconography" },
    { id: "motion", label: "08 Motion" },
    { id: "background", label: "09 Background" },
    { id: "tokens", label: "10 Tokens" },
  ];

  return (
    <nav className="hidden lg:block fixed left-0 top-0 bottom-0 w-64 border-r border-white/[0.06] bg-[#0A0A0B] overflow-y-auto z-50">
      <div className="p-6">
        <a href="/" className="flex items-center gap-2.5 mb-8 group">
          <div className="relative w-5 h-5 transition-transform duration-500 group-hover:rotate-90">
            <div className="absolute inset-0 rounded-sm border border-[#5EEAD4]/50 rotate-45" />
            <div className="absolute inset-[3px] rounded-sm bg-[#5EEAD4]/30 rotate-45" />
          </div>
          <span className="text-[#6B6B76] tracking-[0.15em] group-hover:text-[#E8E8ED] transition-colors" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.625rem", fontWeight: 600 }}>
            BACK TO SITE
          </span>
        </a>

        <p className="text-[#3A3A42] mb-4 tracking-[0.15em]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.5625rem", textTransform: "uppercase" }}>
          Sections
        </p>

        <div className="space-y-0.5">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="block px-3 py-2 rounded-lg text-[#6B6B76] hover:text-[#E8E8ED] hover:bg-white/[0.04] transition-all"
              style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6875rem" }}
            >
              {section.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
