"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import {
  DemoAmbient,
  DemoProgressBar,
  DemoStepNavDesktop,
  DemoStepRegion,
  useDemoArrowNavigation,
} from "@/components/demo/shared";
import { demoUi } from "@/components/demo/demoUi";
import { RangeOSBookingStep } from "@/components/demo/rangeos/RangeOSBookingStep";
import { RangeOSBrandingStep } from "@/components/demo/rangeos/RangeOSBrandingStep";
import { RangeOSOwnershipStep } from "@/components/demo/rangeos/RangeOSOwnershipStep";
import { RangeOSCertificationStep } from "@/components/demo/rangeos/RangeOSCertificationStep";
import { RangeOSInventoryStep } from "@/components/demo/rangeos/RangeOSInventoryStep";
import { RangeOSRequestDemoStep } from "@/components/demo/rangeos/RangeOSRequestDemoStep";
import { rangeOSDemoStepLabels, rangeOSDemoWelcome } from "@/data/rangeOSDemoContent";

const TOTAL_STEPS = rangeOSDemoStepLabels.length;
const EXIT_HREF = "/#range-os";

function WelcomeStep({ onStart }: { onStart: () => void }) {
  return (
    <DemoStepRegion stepKey={0} labelledBy="rangeos-welcome-title">
      <div className="mx-auto max-w-3xl text-center">
        <h1
          id="rangeos-welcome-title"
          className="text-balance text-[1.65rem] font-semibold leading-[1.12] tracking-[-0.03em] text-zinc-50 sm:text-4xl sm:leading-tight md:text-[2.65rem] md:leading-[1.08]"
        >
          {rangeOSDemoWelcome.title.endsWith("™") ? (
            <>
              {rangeOSDemoWelcome.title.slice(0, -1)}
              <span className="text-gradient-gold">™</span>
            </>
          ) : (
            rangeOSDemoWelcome.title
          )}
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-lg font-medium leading-snug text-zinc-300 sm:mt-6 sm:text-xl sm:leading-snug">
          {rangeOSDemoWelcome.subheadline}
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-sm leading-relaxed text-zinc-500 sm:mt-7 sm:text-base sm:leading-relaxed">
          {rangeOSDemoWelcome.body}
        </p>
      </div>

      <div className="relative mx-auto mt-16 max-w-2xl">
        <div
          className="pointer-events-none absolute -inset-[18%] rounded-[2rem] bg-cauris-flame/[0.09] blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -inset-[10%] rounded-[2rem] opacity-70 blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse at 40% 25%, rgba(244, 176, 66, 0.16), transparent 58%)",
          }}
          aria-hidden
        />

        <div className="demo-welcome-hero relative overflow-hidden rounded-brand-lg border border-white/[0.13] bg-gradient-to-b from-zinc-900/68 to-black/82 p-px shadow-[0_0_88px_rgba(244,176,66,0.12),inset_0_1px_0_rgba(255,255,255,0.1)] ring-1 ring-cauris-gold/[0.15] backdrop-blur-md">
          <div className="rounded-[calc(1.5rem-1px)] bg-black/38 backdrop-blur-xl">
            <div className="flex items-center gap-2 border-b border-white/[0.08] px-3 py-2.5 sm:px-4">
              <span className="flex gap-1.5" aria-hidden>
                <span className="h-2 w-2 rounded-full bg-zinc-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]" />
                <span className="h-2 w-2 rounded-full bg-zinc-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]" />
                <span className="h-2 w-2 rounded-full bg-zinc-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]" />
              </span>
              <div className="mx-auto flex min-w-0 flex-1 justify-center sm:mx-0 sm:justify-start sm:pl-2">
                <span className="truncate rounded-md border border-white/[0.09] bg-zinc-950/88 px-3 py-1 font-mono text-[10px] text-zinc-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:text-[11px]">
                  rangeos<span className="text-zinc-600">.ops</span>
                  <span className="text-cauris-flame/75"> / command</span>
                </span>
              </div>
            </div>

            <div className="grid gap-3 p-4 sm:grid-cols-[minmax(0,7rem)_1fr] sm:gap-4 sm:p-5">
              <div className="hidden flex-col gap-2 sm:flex" aria-hidden>
                {["Overview", "Inventory", "Book", "Train"].map((t, i) => (
                  <div
                    key={t}
                    className={`rounded-lg px-2 py-2 text-left font-mono text-[9px] uppercase tracking-[0.14em] ${
                      i === 1
                        ? "border border-cauris-gold/25 bg-cauris-flame/[0.08] text-cauris-dawn"
                        : "border border-transparent text-zinc-600"
                    }`}
                  >
                    {t}
                  </div>
                ))}
              </div>

              <div className="min-h-[200px] space-y-3 sm:min-h-[240px]">
                <div className="h-16 rounded-xl bg-gradient-to-br from-zinc-800/85 via-zinc-900/65 to-black shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] ring-1 ring-white/[0.07] sm:h-20">
                  <div className="flex h-full flex-col justify-end p-3 sm:p-4">
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-cauris-flame/85">
                      Range status
                    </p>
                    <p className="mt-1 text-xs font-semibold text-zinc-200 sm:text-sm">
                      Lanes open · catalog synced
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="aspect-[4/5] rounded-lg border border-white/[0.06] bg-gradient-to-b from-zinc-800/40 to-zinc-950/80 ring-1 ring-inset ring-white/[0.03]"
                    >
                      <div className="m-1.5 h-[42%] rounded-md bg-zinc-700/30 sm:m-2" />
                      <div className="mx-2 space-y-1.5 sm:mx-2.5">
                        <div className="h-1.5 w-3/4 rounded bg-zinc-700/40" />
                        <div className="h-1 w-1/2 rounded bg-zinc-800/60" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center gap-3 px-1 sm:mt-14">
        <button
          type="button"
          onClick={onStart}
          className={`inline-flex h-12 min-h-12 w-full max-w-sm items-center justify-center rounded-full bg-gradient-to-b from-cauris-flame/95 to-cauris-ember/95 px-8 text-sm font-semibold text-black shadow-glow-gold cauris-transition-interactive hover:from-cauris-dawn hover:to-cauris-flame hover:shadow-glow-gold-lg sm:w-auto sm:max-w-none sm:px-10 ${demoUi.focusRing}`}
        >
          {rangeOSDemoWelcome.ctaStart}
        </button>
        <p className="max-w-sm text-center font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600 sm:text-[11px]">
          Sample UI here · your branding & data when SCS Nova ships your build
        </p>
      </div>
    </DemoStepRegion>
  );
}

function renderStep(step: number, goNextFromWelcome: () => void) {
  if (step === 0) {
    return <WelcomeStep onStart={goNextFromWelcome} />;
  }
  if (step === 1) {
    return <RangeOSInventoryStep />;
  }
  if (step === 2) {
    return <RangeOSBookingStep />;
  }
  if (step === 3) {
    return <RangeOSCertificationStep />;
  }
  if (step === 4) {
    return <RangeOSBrandingStep />;
  }
  if (step === 5) {
    return <RangeOSOwnershipStep />;
  }
  if (step === 6) {
    return <RangeOSRequestDemoStep />;
  }
  return null;
}

export function RangeOSDemoExperience() {
  const [step, setStep] = useState(0);

  const goNextFromWelcome = useCallback(() => setStep(1), []);
  const goNext = useCallback(() => setStep((s) => Math.min(TOTAL_STEPS - 1, s + 1)), []);
  const goBack = useCallback(() => setStep((s) => Math.max(0, s - 1)), []);

  useDemoArrowNavigation(goNext, goBack, true);

  return (
    <div className="relative min-h-[100dvh] overflow-x-hidden text-zinc-100">
      <DemoAmbient />

      <header className="demo-cauris-header sticky top-0 z-20 border-b border-white/[0.08] pt-[env(safe-area-inset-top,0px)]">
        <div className="container-brand flex flex-col gap-4 py-3.5 sm:gap-6 sm:py-5">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-[13px] font-semibold tracking-[-0.02em] text-zinc-100 sm:text-sm">
                RangeOS<span className="text-gradient-gold">™</span>{" "}
                <span className="font-medium text-zinc-500">Demo</span>
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600 sm:text-[11px]">
                Sample range UI · not live data
              </p>
            </div>
            <Link
              href={EXIT_HREF}
              aria-label="Exit demo and return to RangeOS on the main site"
              className={`inline-flex min-h-12 shrink-0 items-center justify-center rounded-full border border-white/[0.11] bg-white/[0.03] px-5 text-xs font-semibold text-zinc-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] cauris-transition-interactive hover:border-cauris-gold/35 hover:bg-white/[0.05] hover:text-cauris-dawn sm:min-h-0 sm:px-4 sm:py-2 sm:text-sm ${demoUi.focusRing}`}
            >
              Exit
            </Link>
          </div>
          <DemoProgressBar
            step={step}
            labels={rangeOSDemoStepLabels}
            startMono="Start · RangeOS™ tour"
            progressAriaLabel={(label) => `RangeOS demo progress: ${label}`}
          />
          <DemoStepNavDesktop labels={rangeOSDemoStepLabels} step={step} />
        </div>
      </header>

      <main className="pb-[max(9.5rem,calc(8rem+env(safe-area-inset-bottom,0px)))] pt-3 sm:pb-32 sm:pt-6">
        <p className="sr-only" aria-live="polite" aria-atomic="true">
          Step {step + 1} of {TOTAL_STEPS}: {rangeOSDemoStepLabels[step]}
        </p>
        <div key={step} className="min-w-0">
          {renderStep(step, goNextFromWelcome)}
        </div>
      </main>

      <footer className="demo-cauris-footer fixed bottom-0 left-0 right-0 z-20 border-t border-white/[0.08] pb-[env(safe-area-inset-bottom,0px)]">
        <div className="container-brand grid w-full grid-cols-2 items-stretch gap-3 py-3.5 sm:flex sm:items-center sm:justify-between sm:gap-4 sm:py-5">
          <button
            type="button"
            onClick={goBack}
            disabled={step === 0}
            aria-label={step === 0 ? "Back" : `Back to ${rangeOSDemoStepLabels[step - 1]}`}
            className={`inline-flex min-h-12 w-full min-w-0 items-center justify-center rounded-full border border-white/[0.11] bg-white/[0.02] px-4 text-sm font-medium text-zinc-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] cauris-transition-interactive enabled:hover:border-cauris-gold/28 enabled:hover:text-zinc-50 disabled:cursor-not-allowed disabled:opacity-35 sm:w-auto sm:min-w-[5.5rem] sm:px-5 ${demoUi.focusRing}`}
          >
            Back
          </button>
          {step < TOTAL_STEPS - 1 ? (
            <button
              type="button"
              onClick={goNext}
              aria-label={`Next: ${rangeOSDemoStepLabels[step + 1]}`}
              className={`inline-flex min-h-12 w-full items-center justify-center rounded-full bg-gradient-to-b from-cauris-flame/95 to-cauris-ember/95 px-6 text-sm font-semibold text-black shadow-glow-gold cauris-transition-interactive hover:from-cauris-dawn hover:to-cauris-flame hover:shadow-glow-gold-lg sm:w-auto sm:px-8 ${demoUi.focusRing}`}
            >
              Continue
            </button>
          ) : (
            <Link
              href={EXIT_HREF}
              aria-label="Return to RangeOS section on the main site"
              className={`inline-flex min-h-12 w-full items-center justify-center rounded-full border border-cauris-gold/32 bg-cauris-flame/[0.1] px-6 text-center text-sm font-semibold leading-tight text-cauris-dawn shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] cauris-transition-interactive hover:border-cauris-gold/45 hover:bg-cauris-flame/[0.14] sm:w-auto sm:px-8 ${demoUi.focusRing}`}
            >
              Return to RangeOS™
            </Link>
          )}
        </div>
      </footer>
    </div>
  );
}
