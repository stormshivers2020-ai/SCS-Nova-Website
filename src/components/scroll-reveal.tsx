"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  visibleClassName?: string;
  delayMs?: number;
  rootMargin?: string;
  threshold?: number;
  /** Longer, calmer reveal (e.g. philosophy / editorial) */
  slow?: boolean;
};

export function ScrollReveal({
  children,
  className = "",
  visibleClassName = "",
  delayMs = 0,
  rootMargin = "0px 0px -10% 0px",
  threshold = 0.1,
  slow = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { rootMargin, threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [rootMargin, threshold]);

  return (
    <div
      ref={ref}
      className={`${className} ${
        shown
          ? `opacity-100 translate-y-0 ${visibleClassName}`
          : "opacity-0 translate-y-8"
      } transition-[opacity,transform] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
        slow ? "duration-[1200ms]" : "duration-[950ms]"
      }`}
      style={{
        transitionDelay: shown ? `${delayMs}ms` : "0ms",
      }}
    >
      {children}
    </div>
  );
}
