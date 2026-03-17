'use client'

import { useRef, useState, type ReactNode, type CSSProperties } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  style?: CSSProperties;
}

export function GlowCard({ children, className = "", glowColor = "rgba(94,234,212,0.12)", style }: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setGlowPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      style={style}
    >
      {/* Mouse-following glow */}
      <div
        className="absolute pointer-events-none transition-opacity duration-300"
        style={{
          width: 300,
          height: 300,
          left: glowPos.x - 150,
          top: glowPos.y - 150,
          background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
          opacity: hovering ? 1 : 0,
        }}
      />
      {/* Mouse-following border glow */}
      <div
        className="absolute inset-0 pointer-events-none rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: hovering ? 1 : 0,
          background: `radial-gradient(circle 120px at ${glowPos.x}px ${glowPos.y}px, ${glowColor}, transparent 70%)`,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: 1,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
