'use client'

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string;
  className?: string;
  style?: React.CSSProperties;
}

export function AnimatedCounter({ value, className, style }: AnimatedCounterProps) {
  const [displayed, setDisplayed] = useState(value);
  const [animating, setAnimating] = useState(false);
  const prevValue = useRef(value);

  useEffect(() => {
    if (prevValue.current !== value) {
      setAnimating(true);
      setTimeout(() => {
        setDisplayed(value);
        setAnimating(false);
      }, 150);
      prevValue.current = value;
    }
  }, [value]);

  // Animate numbers on mount
  const isNumeric = /^\d+$/.test(value.replace(/[%$.,]/g, ""));
  const [mounted, setMounted] = useState(false);
  const [countUp, setCountUp] = useState(isNumeric ? "0" : value);

  useEffect(() => {
    if (!isNumeric) {
      setMounted(true);
      return;
    }
    const numericPart = parseInt(value.replace(/[^0-9]/g, ""), 10);
    const prefix = value.match(/^[^0-9]*/)?.[0] || "";
    const suffix = value.match(/[^0-9]*$/)?.[0] || "";
    const duration = 800;
    const steps = 20;
    const stepTime = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += Math.ceil(numericPart / steps);
      if (current >= numericPart) {
        current = numericPart;
        clearInterval(timer);
        setMounted(true);
      }
      setCountUp(`${prefix}${String(current).padStart(value.replace(/[^0-9]/g, "").length >= 2 ? 2 : 1, "0")}${suffix}`);
    }, stepTime);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span
      className={`inline-block transition-all duration-150 ${animating ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"} ${className || ""}`}
      style={style}
    >
      {mounted ? displayed : countUp}
    </span>
  );
}
