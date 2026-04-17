"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { DemoCompassStep } from "@/components/demo/DemoCompassStep";
import { DemoEarlyAccessStep } from "@/components/demo/DemoEarlyAccessStep";
import { DemoHelixStep } from "@/components/demo/DemoHelixStep";
import { DemoInsightStep } from "@/components/demo/DemoInsightStep";
import { DemoTimelineStep } from "@/components/demo/DemoTimelineStep";
import { DemoVaultStep } from "@/components/demo/DemoVaultStep";
import { DemoWorkspaceStep } from "@/components/demo/DemoWorkspaceStep";
import {
  DemoAmbient,
  DemoProgressBar,
  DemoStepNavDesktop,
  DemoStepRegion,
  useDemoArrowNavigation,
} from "@/components/demo/shared";
import { demoUi } from "@/components/demo/demoUi";
import { demoStepLabels, demoWelcome } from "@/data/caurisDemoContent";

const TOTAL_STEPS = demoStepLabels.length;

function WelcomeStep({ onStart }: { onStart: () => void }) {
  return (
    <DemoStepRegion stepKey={0} labelledBy="demo-welcome-title">
      <div className="text-center">
        <h1
          id="demo-welcome-title"
          className="text-balance text-[1.65rem] font-semibold leading-[1.12] tracking-[-0.03em] text-zinc-50 sm:text-4xl sm:leading-tight md:text-[2.65rem] md:leading-[1.08]"
        >
          <span className="text-gradient-gold">{demoWelcome.title}</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-lg font-medium leading-snug text-zinc-300 sm:mt-6 sm:text-xl sm:leading-snug">
          {demoWelcome.subheadline}
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-sm leading-relaxed text-zinc-400 sm:mt-7 sm:text-base sm:leading-relaxed">
          {demoWelcome.body}
        </p>
      </div>

      <div className="relative mx-auto mt-16 max-w-lg">
        <div
          className="pointer-events-none absolute -inset-[20%] rounded-[2rem] bg-cauris-flame/[0.08] blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -inset-[12%] rounded-[2rem] opacity-60 blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse at 30% 20%, rgba(88, 60, 180, 0.24), transparent 55%)",
          }}
          aria-hidden
        />
        <div className="demo-welcome-hero relative overflow-hidden rounded-brand-lg border border-white/[0.13] bg-gradient-to-b from-white/[0.1] to-white/[0.025] p-px shadow-[0_0_88px_rgba(88,60,180,0.14),inset_0_1px_0_rgba(255,255,255,0.1)] ring-1 ring-cauris-gold/[0.14] backdrop-blur-md">
          <div className="rounded-[calc(1.5rem-1px)] bg-black/38 p-7 backdrop-blur-xl sm:p-11">
            <div className="flex flex-col items-center">
              <div className="relative">
                <div
                  className="pointer-events-none absolute inset-[-35%] rounded-full bg-cauris-flame/[0.14] blur-2xl"
                  aria-hidden
                />
                <Image
                  src="/logo.png"
                  alt="Cauris mark"
                  width={120}
                  height={120}
                  className="relative h-24 w-24 object-contain opacity-[0.97] drop-shadow-[0_0_28px_rgba(244,176,66,0.18)] sm:h-[7.25rem] sm:w-[7.25rem]"
                />
              </div>
              <p className={`mt-7 ${demoUi.phaseEyebrow} text-center text-cauris-dawn/85`}>
                Sample walkthrough · no data leaves this tab
              </p>
              <p className="mt-4 max-w-sm text-pretty text-center text-sm font-medium leading-relaxed text-zinc-300 sm:text-[15px]">
                Capture → timeline → patterns → insight → guidance → vault — one thread, the arc the
                product is being built around.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-center px-1 sm:mt-12">
        <button
          type="button"
          onClick={onStart}
          className={`inline-flex h-12 min-h-12 w-full max-w-sm items-center justify-center rounded-full bg-gradient-to-b from-cauris-flame/95 to-cauris-ember/95 px-8 text-sm font-semibold text-black shadow-glow-gold cauris-transition-interactive hover:from-cauris-dawn hover:to-cauris-flame hover:shadow-glow-gold-lg sm:w-auto sm:max-w-none sm:px-10 ${demoUi.focusRing}`}
        >
          {demoWelcome.ctaStart}
        </button>
      </div>
    </DemoStepRegion>
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

  useDemoArrowNavigation(goNext, goBack);

  return (
    <div className="relative min-h-[100dvh] text-zinc-100">
      <DemoAmbient />

      <header className="demo-cauris-header sticky top-0 z-20 border-b border-white/[0.08] pt-[env(safe-area-inset-top,0px)]">
        <div className="container-brand flex flex-col gap-4 py-3.5 sm:gap-6 sm:py-5">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-[13px] font-semibold tracking-[-0.02em] text-zinc-100 sm:text-sm">
                Cauris <span className="font-medium text-zinc-400">Demo</span>
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400 sm:text-[11px]">
                Sample UI · product in development
              </p>
            </div>
            <Link
              href="/"
              className={`inline-flex min-h-12 shrink-0 items-center justify-center rounded-full border border-white/[0.11] bg-white/[0.03] px-5 text-xs font-semibold text-zinc-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] cauris-transition-interactive hover:border-cauris-gold/35 hover:bg-white/[0.05] hover:text-cauris-dawn sm:min-h-0 sm:px-4 sm:py-2 sm:text-sm ${demoUi.focusRing}`}
            >
              Exit
            </Link>
          </div>
          <DemoProgressBar
            step={step}
            labels={demoStepLabels}
            startMono="Start · product tour"
            progressAriaLabel={(label) => `Demo progress: ${label}`}
          />
          <DemoStepNavDesktop labels={demoStepLabels} step={step} />
        </div>
      </header>

      <main className="pb-[max(9.5rem,calc(8rem+env(safe-area-inset-bottom,0px)))] pt-3 sm:pb-32 sm:pt-6">
        <p className="sr-only" aria-live="polite" aria-atomic="true">
          Step {step + 1} of {TOTAL_STEPS}: {demoStepLabels[step]}
        </p>
        {renderStep(step, goToWorkspace)}
      </main>

      <footer className="demo-cauris-footer fixed bottom-0 left-0 right-0 z-20 border-t border-white/[0.08] pb-[env(safe-area-inset-bottom,0px)]">
        <div className="container-brand grid w-full grid-cols-2 items-stretch gap-3 py-3.5 sm:flex sm:items-center sm:justify-between sm:gap-4 sm:py-5">
          <button
            type="button"
            onClick={goBack}
            disabled={step === 0}
            className={`inline-flex min-h-12 w-full min-w-0 items-center justify-center rounded-full border border-white/[0.11] bg-white/[0.02] px-4 text-sm font-medium text-zinc-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] cauris-transition-interactive enabled:hover:border-cauris-gold/28 enabled:hover:text-zinc-50 disabled:cursor-not-allowed disabled:opacity-35 sm:w-auto sm:min-w-[5.5rem] sm:px-5 ${demoUi.focusRing}`}
          >
            Back
          </button>
          {step < TOTAL_STEPS - 1 ? (
            <button
              type="button"
              onClick={goNext}
              className={`inline-flex min-h-12 w-full items-center justify-center rounded-full bg-gradient-to-b from-cauris-flame/95 to-cauris-ember/95 px-6 text-sm font-semibold text-black shadow-glow-gold cauris-transition-interactive hover:from-cauris-dawn hover:to-cauris-flame hover:shadow-glow-gold-lg sm:w-auto sm:px-8 ${demoUi.focusRing}`}
            >
              Continue
            </button>
          ) : (
            <Link
              href="/"
              className={`inline-flex min-h-12 w-full items-center justify-center rounded-full border border-cauris-gold/32 bg-cauris-flame/[0.1] px-6 text-center text-sm font-semibold leading-tight text-cauris-dawn shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] cauris-transition-interactive hover:border-cauris-gold/45 hover:bg-cauris-flame/[0.14] sm:w-auto sm:px-8 ${demoUi.focusRing}`}
            >
              Return home
            </Link>
          )}
        </div>
      </footer>
    </div>
  );
}
