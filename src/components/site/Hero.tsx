"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const LERP = 0.055;
const LOGO_PARALLAX_PX = 14;
const DEPTH_PARALLAX_PX = 22;

export function Hero() {
  const logoRef = useRef<HTMLDivElement>(null);
  const depthRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotionRef.current) return;

    const onMove = (e: MouseEvent) => {
      const w = window.innerWidth || 1;
      const h = window.innerHeight || 1;
      targetRef.current.x = (e.clientX / w) * 2 - 1;
      targetRef.current.y = (e.clientY / h) * 2 - 1;
    };

    const tick = () => {
      const t = targetRef.current;
      const c = currentRef.current;
      c.x += (t.x - c.x) * LERP;
      c.y += (t.y - c.y) * LERP;

      const lx = c.x * LOGO_PARALLAX_PX;
      const ly = c.y * LOGO_PARALLAX_PX * 0.78;
      const dx = -c.x * DEPTH_PARALLAX_PX;
      const dy = -c.y * DEPTH_PARALLAX_PX * 0.72;

      logoRef.current?.style.setProperty(
        "transform",
        `translate3d(${lx.toFixed(2)}px, ${ly.toFixed(2)}px, 0)`
      );
      depthRef.current?.style.setProperty(
        "transform",
        `translate3d(${dx.toFixed(2)}px, ${dy.toFixed(2)}px, 0)`
      );

      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] flex-col"
      aria-labelledby="cauris-heading"
    >
      <div
        ref={depthRef}
        className="cauris-depth-layer pointer-events-none absolute inset-0 will-change-transform"
        aria-hidden
      />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-16 pt-6 sm:px-8 sm:pb-20">
        <div ref={logoRef} className="will-change-transform">
          <div className="cauris-logo-breathe relative mx-auto">
            <div
              className="pointer-events-none absolute inset-[-18%] rounded-full bg-cauris-flame/10 blur-3xl"
              aria-hidden
            />
            <Image
              src="/logo.png"
              alt="Cauris"
              width={280}
              height={280}
              className="relative z-[1] mx-auto h-auto w-[min(220px,48vw)] max-w-full object-contain sm:w-[min(260px,44vw)]"
              priority
            />
          </div>
        </div>

        <p className="animate-fade-up mt-12 text-center text-[11px] font-medium uppercase tracking-[0.42em] text-zinc-500 opacity-0 [animation-delay:0.12s] [animation-duration:1s] [animation-fill-mode:forwards] sm:text-xs sm:tracking-[0.38em]">
          Intelligence <span className="text-zinc-600">•</span> Memory{" "}
          <span className="text-zinc-600">•</span> Clarity
        </p>

        <h1
          id="cauris-heading"
          className="animate-fade-up mt-5 text-center text-5xl font-semibold tracking-[0.02em] text-zinc-50 opacity-0 [animation-delay:0.2s] [animation-duration:1s] [animation-fill-mode:forwards] sm:text-6xl md:text-7xl md:tracking-tight"
        >
          <span className="text-gradient-gold">Cauris</span>
        </h1>

        <p className="animate-fade-up mt-4 text-center text-lg font-medium text-zinc-300 opacity-0 [animation-delay:0.28s] [animation-duration:1s] [animation-fill-mode:forwards] sm:text-xl">
          Intelligence for your life.
        </p>

        <p className="animate-fade-up mx-auto mt-8 max-w-md text-pretty text-center text-sm leading-relaxed text-zinc-500 opacity-0 [animation-delay:0.36s] [animation-duration:1s] [animation-fill-mode:forwards] sm:text-base sm:leading-relaxed">
          A personal intelligence system designed to help you capture, understand, and evolve your
          life through memory, insight, and action.
        </p>

        <div className="animate-fade-up mt-12 flex w-full max-w-md flex-col gap-3 opacity-0 [animation-delay:0.44s] [animation-duration:1s] [animation-fill-mode:forwards] sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
          <Link
            href="#memory"
            className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-b from-cauris-flame/95 to-cauris-ember/95 px-8 text-sm font-semibold text-black shadow-glow-gold transition duration-300 hover:from-cauris-dawn hover:to-cauris-flame hover:shadow-glow-gold-lg"
          >
            Enter Cauris
          </Link>
          <Link
            href="#scs-nova"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.03] px-8 text-sm font-medium text-zinc-200 ring-1 ring-white/[0.04] transition duration-300 hover:border-gold-fade hover:bg-white/[0.05] hover:text-zinc-50"
          >
            Explore SCS Nova
          </Link>
        </div>
      </div>

      <p className="pointer-events-none absolute bottom-6 left-0 right-0 text-center font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-700">
        © {new Date().getFullYear()} SCS Nova / Cauris
      </p>
    </section>
  );
}
