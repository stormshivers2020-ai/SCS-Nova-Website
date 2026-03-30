"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const LERP = 0.048;
const LOGO_PARALLAX_PX = 12;
const DEPTH_PARALLAX_PX = 18;

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
      className="relative flex min-h-[100dvh] flex-col overflow-hidden"
      aria-labelledby="cauris-heading"
    >
      {/* Cinematic stage wash — depth behind parallax stars */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_95%_75%_at_50%_-5%,rgba(88,60,180,0.1),transparent_58%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_72%_48%_at_50%_18%,rgba(244,176,66,0.09),transparent_60%)]" />
        <div className="absolute inset-x-[-15%] bottom-0 h-[min(48vh,380px)] bg-gradient-to-t from-black/28 via-black/8 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_65%_at_50%_45%,transparent_32%,rgba(0,0,0,0.14)_100%)]" />
      </div>

      <div
        ref={depthRef}
        className="cauris-depth-layer pointer-events-none absolute inset-0 z-[1] opacity-[0.38] will-change-transform"
        aria-hidden
      />

      <div className="relative z-10 flex min-h-0 flex-1 flex-col items-center justify-center px-4 pb-[max(7.25rem,calc(5.75rem+env(safe-area-inset-bottom,0px)))] pt-24 sm:px-10 sm:pb-32 sm:pt-32 md:pt-36">
        <div className="mx-auto flex w-full max-w-[min(100%,40rem)] flex-col items-center">
          <div ref={logoRef} className="relative flex justify-center will-change-transform">
            <div
              className="pointer-events-none absolute left-1/2 top-[46%] h-[min(118vw,480px)] w-[min(118vw,480px)] max-h-[min(92vh,560px)] max-w-[min(92vh,560px)] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(244,176,66,0.14)_0%,rgba(232,148,58,0.04)_38%,transparent_68%)] blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute left-1/2 top-[46%] h-[min(90vw,380px)] w-[min(90vw,380px)] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(88,60,180,0.09)_0%,transparent_62%)] blur-[56px]"
              aria-hidden
            />

            <div className="cauris-logo-breathe relative mx-auto">
              <div
                className="pointer-events-none absolute inset-[-24%] rounded-full bg-cauris-flame/[0.14] blur-3xl"
                aria-hidden
              />
              <Image
                src="/logo.png"
                alt="Cauris"
                width={320}
                height={320}
                className="relative z-[1] mx-auto h-auto w-[min(288px,58vw)] max-w-full object-contain brightness-[1.08] contrast-[1.06] drop-shadow-[0_0_52px_rgba(244,176,66,0.22),0_0_100px_rgba(232,148,58,0.08),0_36px_72px_rgba(0,0,0,0.48)] sm:w-[min(318px,48vw)] md:w-[min(336px,40vw)]"
                sizes="(max-width: 640px) 58vw, (max-width: 1024px) 48vw, 336px"
                priority
              />
            </div>
          </div>

          <div className="mt-16 flex w-full flex-col items-center text-center sm:mt-[4.5rem] md:mt-24">
            <p
              className="hero-reveal cauris-kicker text-zinc-500 [animation-delay:0.14s]"
            >
              Intelligence <span className="text-zinc-600">•</span> Memory{" "}
              <span className="text-zinc-600">•</span> Clarity
            </p>

            <div
              className="hero-reveal mx-auto mt-7 h-px w-11 max-w-[88%] bg-gradient-to-r from-transparent via-cauris-gold/35 to-transparent sm:mt-8 sm:w-12 md:via-cauris-flame/40 [animation-delay:0.2s]"
              aria-hidden
            />

            <h1
              id="cauris-heading"
              className="hero-reveal mt-7 max-w-[14ch] text-balance text-[clamp(3rem,9vw,5.35rem)] font-semibold leading-[0.96] tracking-[-0.038em] text-zinc-50 sm:mt-8 sm:max-w-none md:tracking-[-0.042em] [animation-delay:0.26s]"
            >
              <span className="text-gradient-gold">Cauris</span>
            </h1>

            <p className="hero-reveal mt-6 max-w-lg text-lg font-medium leading-snug tracking-[-0.015em] text-zinc-100 sm:mt-7 sm:text-xl md:text-2xl md:leading-tight [animation-delay:0.34s]">
              Intelligence for your life.
            </p>

            <p className="hero-reveal mx-auto mt-8 max-w-lg text-pretty text-sm leading-relaxed text-zinc-400 sm:mt-9 sm:max-w-xl sm:text-[15px] sm:leading-relaxed [animation-delay:0.42s]">
              In active development — a personal intelligence layer that turns everyday capture into
              memory, insight, and calmer next steps.
            </p>

            <div className="hero-reveal mt-14 flex w-full max-w-2xl flex-col gap-4 sm:mt-[4.25rem] sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 [animation-delay:0.52s]">
              <Link href="/demo" className="cauris-btn-primary sm:min-w-[200px]">
                Open the Cauris demo
              </Link>
              <Link href="/#memory" className="cauris-btn-secondary sm:min-w-[160px]">
                How the system works
              </Link>
              <Link href="/#scs-nova" className="cauris-btn-tertiary">
                Studio &amp; contact
              </Link>
            </div>

            <p className="hero-reveal mx-auto mt-10 max-w-lg text-pretty text-center text-[13px] leading-relaxed text-zinc-500 sm:mt-11 sm:text-sm [animation-delay:0.58s]">
              Gun range operator? Explore{" "}
              <Link
                href="/#range-os"
                className="font-medium text-zinc-400 underline decoration-white/[0.14] underline-offset-[5px] transition-colors duration-[var(--cauris-duration-hover)] ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-cauris-dawn hover:decoration-cauris-gold/40"
              >
                RangeOS™
              </Link>{" "}
              or{" "}
              <Link
                href="/rangeos-demo"
                className="font-medium text-zinc-400 underline decoration-white/[0.14] underline-offset-[5px] transition-colors duration-[var(--cauris-duration-hover)] ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-cauris-dawn hover:decoration-cauris-gold/40"
              >
                its product demo
              </Link>
              .
            </p>
          </div>
        </div>
      </div>

      <p className="pointer-events-none absolute bottom-[max(1.25rem,calc(0.5rem+env(safe-area-inset-bottom,0px)))] left-0 right-0 z-10 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-600 sm:bottom-8 sm:text-[11px] sm:tracking-[0.26em]">
        © {new Date().getFullYear()} SCS Nova / Cauris
      </p>
    </section>
  );
}
