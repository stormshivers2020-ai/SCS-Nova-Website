"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { DemoCompassStep } from "@/components/demo/DemoCompassStep";
import { DemoEarlyAccessStep } from "@/components/demo/DemoEarlyAccessStep";
import { DemoHelixStep } from "@/components/demo/DemoHelixStep";
import { DemoInsightStep } from "@/components/demo/DemoInsightStep";
import { DemoTimelineStep } from "@/components/demo/DemoTimelineStep";
import { DemoVaultStep } from "@/components/demo/DemoVaultStep";
import { DemoWorkspaceStep } from "@/components/demo/DemoWorkspaceStep";
import { demoUi } from "@/components/demo/demoUi";
import { demoStepLabels, demoWelcome } from "@/data/caurisDemoContent";

const TOTAL_STEPS = demoStepLabels.length;

function DemoAmbient() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden>
      <div className="cauris-ambient absolute inset-0">
        <div className="cauris-grid" />
        <div className="cauris-starfield animate-twinkle" />
        <div className="cauris-vignette" />
        <div className="cauris-grain" />
      </div>
    </div>
  );
}

function StepShell({
  children,
  stepKey,
  labelledBy,
}: {
  children: React.ReactNode;
  stepKey: number;
  labelledBy?: string;
}) {
  return (
    <div
      key={stepKey}
      className={demoUi.region}
      role="region"
      aria-labelledby={labelledBy}
    >
      {children}
    </div>
  );
}

function ProgressBar({ step }: { step: number }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
      <p className={`shrink-0 ${demoUi.kicker}`}>
        Step {step + 1} of {TOTAL_STEPS}
      </p>
      <div
        className="flex min-w-0 flex-1 flex-nowrap items-center gap-1.5 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] sm:flex-wrap sm:justify-end sm:overflow-visible sm:pb-0 [&::-webkit-scrollbar]:hidden"
        role="list"
        aria-label="Demo progress"
      >
        {demoStepLabels.map((label, i) => (
          <span
            key={label}
            role="listitem"
            title={label}
            className={`h-1.5 rounded-full transition-all duration-[450ms] ease-out motion-reduce:transition-none ${
              i === step
                ? "w-8 bg-gradient-to-r from-cauris-flame to-cauris-ember shadow-glow-gold"
                : i < step
                  ? "w-2 bg-cauris-gold/50"
                  : "w-2 bg-white/[0.08]"
            }`}
            aria-current={i === step ? "step" : undefined}
          />
        ))}
      </div>
    </div>
  );
}

function WelcomeStep({ onStart }: { onStart: () => void }) {
  return (
    <StepShell stepKey={0} labelledBy="demo-welcome-title">
      <div className="text-center">
        <h1
          id="demo-welcome-title"
          className="text-balance text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl md:text-5xl"
        >
          <span className="text-gradient-gold">{demoWelcome.title}</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-lg font-medium text-zinc-300 sm:text-xl">
          {demoWelcome.subheadline}
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-sm leading-relaxed text-zinc-400 sm:text-base">
          {demoWelcome.body}
        </p>
      </div>

      <div className="relative mx-auto mt-14 max-w-lg">
        <div
          className="pointer-events-none absolute -inset-[20%] rounded-[2rem] bg-cauris-flame/[0.07] blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -inset-[12%] rounded-[2rem] opacity-60 blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse at 30% 20%, rgba(88, 60, 180, 0.22), transparent 55%)",
          }}
          aria-hidden
        />
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.1] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-1 shadow-[0_0_80px_rgba(88,60,180,0.12),inset_0_1px_0_rgba(255,255,255,0.08)] ring-1 ring-cauris-gold/[0.12]">
          <div className="rounded-[1.35rem] bg-black/80 p-8 sm:p-10">
            <div className="flex flex-col items-center">
              <div className="relative">
                <div
                  className="pointer-events-none absolute inset-[-30%] rounded-full bg-cauris-flame/[0.12] blur-2xl"
                  aria-hidden
                />
                <Image
                  src="/logo.png"
                  alt="Cauris mark"
                  width={120}
                  height={120}
                  className="relative h-24 w-24 object-contain opacity-95 sm:h-28 sm:w-28"
                />
              </div>
              <p className={`mt-6 ${demoUi.kicker}`}>Guided product preview</p>
              <p className="mt-3 max-w-sm text-pretty text-center text-sm leading-relaxed text-zinc-300">
                Capture → timeline → patterns → insight → guidance → vault — one thread, end to end.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <button
          type="button"
          onClick={onStart}
          className={`inline-flex h-12 min-h-11 items-center justify-center rounded-full bg-gradient-to-b from-cauris-flame/95 to-cauris-ember/95 px-10 text-sm font-semibold text-black shadow-glow-gold transition duration-300 hover:from-cauris-dawn hover:to-cauris-flame hover:shadow-glow-gold-lg ${demoUi.focusRing}`}
        >
          {demoWelcome.ctaStart}
        </button>
      </div>
    </StepShell>
  );
}

function renderStep(step: number, goToWorkspace: () => void) {
  if (step === 0) {
    return <WelcomeStep onStart={goToWorkspace} />;
  }
  if (step === 1) {
    return <DemoWorkspaceStep />;
  }
  if (step === 2) {
    return <DemoTimelineStep />;
  }
  if (step === 3) {
    return <DemoHelixStep />;
  }
  if (step === 4) {
    return <DemoInsightStep />;
  }
  if (step === 5) {
    return <DemoCompassStep />;
  }
  if (step === 6) {
    return <DemoVaultStep />;
  }
  if (step === 7) {
    return <DemoEarlyAccessStep />;
  }
  return null;
}

export function CaurisDemoExperience() {
  const [step, setStep] = useState(0);

  const goToWorkspace = useCallback(() => setStep(1), []);
  const goNext = useCallback(() => setStep((s) => Math.min(TOTAL_STEPS - 1, s + 1)), []);
  const goBack = useCallback(() => setStep((s) => Math.max(0, s - 1)), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target;
      if (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement) return;
      if (t instanceof HTMLElement && t.isContentEditable) return;
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goBack();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goBack]);

  return (
    <div className="relative min-h-[100dvh] text-zinc-100">
      <DemoAmbient />

      <header className="sticky top-0 z-20 border-b border-white/[0.06] bg-glass-header pt-[env(safe-area-inset-top,0px)]">
        <div className="container-brand flex flex-col gap-4 py-4 sm:py-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm font-semibold tracking-tight text-zinc-100">
              Cauris <span className="text-zinc-500">Demo</span>
            </p>
            <Link
              href="/"
              className={`shrink-0 rounded-full border border-white/[0.1] px-4 py-2.5 text-xs font-semibold text-zinc-300 transition hover:border-cauris-gold/30 hover:text-cauris-dawn sm:py-2 sm:text-sm ${demoUi.focusRing}`}
            >
              Exit Demo
            </Link>
          </div>
          <ProgressBar step={step} />
          <nav
            className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600 xl:block"
            aria-label="All demo steps"
          >
            {demoStepLabels.map((l, i) => (
              <span key={l} className={i === step ? "text-cauris-dawn" : undefined}>
                {i + 1}. {l}
                {i < demoStepLabels.length - 1 ? " · " : ""}
              </span>
            ))}
          </nav>
        </div>
      </header>

      <main className="pb-[max(8.5rem,calc(7.5rem+env(safe-area-inset-bottom,0px)))] pt-2 sm:pb-32">
        <p className="sr-only" aria-live="polite" aria-atomic="true">
          Step {step + 1} of {TOTAL_STEPS}: {demoStepLabels[step]}
        </p>
        {renderStep(step, goToWorkspace)}
      </main>

      <footer className="fixed bottom-0 left-0 right-0 z-20 border-t border-white/[0.06] bg-black/85 pb-[env(safe-area-inset-bottom,0px)] backdrop-blur-md">
        <div className="container-brand flex items-center justify-between gap-4 py-4">
          <button
            type="button"
            onClick={goBack}
            disabled={step === 0}
            className={`inline-flex min-h-11 min-w-[5.5rem] items-center justify-center rounded-full border border-white/[0.1] px-5 text-sm font-medium text-zinc-300 transition enabled:hover:border-cauris-gold/30 enabled:hover:text-zinc-50 disabled:cursor-not-allowed disabled:opacity-35 ${demoUi.focusRing}`}
          >
            Back
          </button>
          {step < TOTAL_STEPS - 1 ? (
            <button
              type="button"
              onClick={goNext}
              className={`inline-flex min-h-11 items-center justify-center rounded-full bg-gradient-to-b from-cauris-flame/95 to-cauris-ember/95 px-8 text-sm font-semibold text-black shadow-glow-gold transition hover:from-cauris-dawn hover:to-cauris-flame ${demoUi.focusRing}`}
            >
              Next
            </button>
          ) : (
            <Link
              href="/"
              className={`inline-flex min-h-11 items-center justify-center rounded-full border border-cauris-gold/30 bg-cauris-flame/[0.08] px-8 text-sm font-semibold text-cauris-dawn transition hover:bg-cauris-flame/[0.12] ${demoUi.focusRing}`}
            >
              Return home
            </Link>
          )}
        </div>
      </footer>
    </div>
  );
}
