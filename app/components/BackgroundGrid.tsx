'use client'

import { useEffect, useRef, useState } from "react";

export function BackgroundGrid() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
      });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Grid pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.035]">
        <defs>
          <pattern id="grid" width="64" height="64" patternUnits="userSpaceOnUse">
            <path d="M 64 0 L 0 0 0 64" fill="none" stroke="#5EEAD4" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Mouse-following glow */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full transition-all duration-[800ms] ease-out"
        style={{
          left: mousePos.x - 300,
          top: mousePos.y - 300,
          background: "radial-gradient(circle, rgba(94,234,212,0.03) 0%, transparent 60%)",
        }}
      />

      {/* Static glow orbs */}
      <div
        className="absolute top-[10%] left-[15%] w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(94,234,212,0.03) 0%, transparent 70%)",
          animation: "breathe 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute top-[50%] right-[10%] w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(94,234,212,0.02) 0%, transparent 70%)",
          animation: "breathe 12s ease-in-out infinite 4s",
        }}
      />
      <div
        className="absolute bottom-[20%] left-[30%] w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(212,149,107,0.015) 0%, transparent 70%)",
          animation: "breathe 10s ease-in-out infinite 2s",
        }}
      />

      {/* Scan line */}
      <div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#5EEAD4]/8 to-transparent"
        style={{ animation: "scanDown 10s linear infinite" }}
      />

      <style>{`
        @keyframes scanDown {
          0% { top: -2px; }
          100% { top: 100%; }
        }
        @keyframes breathe {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
}
