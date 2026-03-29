"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
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
        {rangeOSDemoStepLabels.map((label, i) => (
          <span
            key={label}
            role="listitem"
            title={label}
            className={`h-1.5 shrink-0 rounded-full transition-all duration-[450ms] ease-out motion-reduce:transition-none ${
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

function StepRegion({
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

function WelcomeStep({ onStart }: { onStart: () => void }) {
  return (
    <StepRegion stepKey={0} labelledBy="rangeos-welcome-title">
      <div className="mx-auto max-w-3xl text-center">
        <h1
          id="rangeos-welcome-title"
          className="text-balance text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl md:text-5xl"
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
        <p className="mx-auto mt-4 max-w-xl text-pretty text-lg font-medium text-zinc-300 sm:text-xl">
          {rangeOSDemoWelcome.subheadline}
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-sm leading-relaxed text-zinc-400 sm:text-base">
          {rangeOSDemoWelcome.body}
        </p>
      </div>

      <div className="relative mx-auto mt-14 max-w-2xl">
        <div
          className="pointer-events-none absolute -inset-[18%] rounded-[2rem] bg-cauris-flame/[0.08] blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -inset-[10%] rounded-[2rem] opacity-70 blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse at 40% 25%, rgba(244, 176, 66, 0.14), transparent 58%)",
          }}
          aria-hidden
        />

        <div className="relative overflow-hidden rounded-[1.35rem] border border-white/[0.12] bg-gradient-to-b from-zinc-900/90 to-black p-1 shadow-[0_0_72px_rgba(244,176,66,0.1),inset_0_1px_0_rgba(255,255,255,0.08)] ring-1 ring-cauris-gold/[0.14]">
          <div className="rounded-[1.15rem] bg-black/90">
            <div className="flex items-center gap-2 border-b border-white/[0.06] px-3 py-2.5 sm:px-4">
              <span className="flex gap-1" aria-hidden>
                <span className="h-2 w-2 rounded-full bg-zinc-700" />
                <span className="h-2 w-2 rounded-full bg-zinc-700" />
                <span className="h-2 w-2 rounded-full bg-zinc-700" />
              </span>
              <div className="mx-auto flex min-w-0 flex-1 justify-center sm:mx-0 sm:justify-start sm:pl-2">
                <span className="truncate rounded-md border border-white/[0.06] bg-zinc-950/80 px-3 py-1 font-mono text-[10px] text-zinc-500 sm:text-[11px]">
                  rangeos<span className="text-zinc-600">.preview</span>
                  <span className="text-cauris-flame/70"> / dashboard</span>
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
                <div className="h-16 rounded-xl bg-gradient-to-br from-zinc-800/80 via-zinc-900/60 to-black ring-1 ring-white/[0.05] sm:h-20">
                  <div className="flex h-full flex-col justify-end p-3 sm:p-4">
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-cauris-flame/80">
                      Range status
                    </p>
                    <p className="mt-1 text-xs font-medium text-zinc-300 sm:text-sm">
                      Open lanes · inventory live
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

      <div className="mt-12 flex justify-center">
        <button
          type="button"
          onClick={onStart}
          className={`inline-flex h-12 min-h-11 items-center justify-center rounded-full bg-gradient-to-b from-cauris-flame/95 to-cauris-ember/95 px-10 text-sm font-semibold text-black shadow-glow-gold transition duration-200 motion-reduce:transition-none hover:from-cauris-dawn hover:to-cauris-flame hover:shadow-glow-gold-lg ${demoUi.focusRing}`}
        >
          {rangeOSDemoWelcome.ctaStart}
        </button>
      </div>
    </StepRegion>
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

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target;
      if (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement) return;
      if (t instanceof HTMLElement && t.isContentEditable) return;
      if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goBack();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goBack]);

  return (
    <div className="relative min-h-[100dvh] overflow-x-hidden text-zinc-100">
      <DemoAmbient />

      <header className="sticky top-0 z-20 border-b border-white/[0.06] bg-glass-header pt-[env(safe-area-inset-top,0px)]">
        <div className="container-brand flex flex-col gap-4 py-4 sm:py-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm font-semibold tracking-tight text-zinc-100">
              RangeOS<span className="text-gradient-gold">™</span>{" "}
              <span className="text-zinc-500">Demo</span>
            </p>
            <Link
              href={EXIT_HREF}
              aria-label="Exit demo and return to RangeOS on the main site"
              className={`shrink-0 rounded-full border border-white/[0.1] px-4 py-2.5 text-xs font-semibold text-zinc-300 transition duration-200 motion-reduce:transition-none hover:border-cauris-gold/30 hover:text-cauris-dawn sm:py-2 sm:text-sm ${demoUi.focusRing}`}
            >
              Exit Demo
            </Link>
          </div>
          <ProgressBar step={step} />
          <nav
            className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600 xl:block"
            aria-label="All demo steps"
          >
            {rangeOSDemoStepLabels.map((l, i) => (
              <span key={l} className={i === step ? "text-cauris-dawn" : undefined}>
                {i + 1}. {l}
                {i < rangeOSDemoStepLabels.length - 1 ? " · " : ""}
              </span>
            ))}
          </nav>
        </div>
      </header>

      <main className="pb-[max(8.5rem,calc(7.5rem+env(safe-area-inset-bottom,0px)))] pt-2 sm:pb-32">
        <p className="sr-only" aria-live="polite" aria-atomic="true">
          Step {step + 1} of {TOTAL_STEPS}: {rangeOSDemoStepLabels[step]}
        </p>
        <div key={step} className="min-w-0">
          {renderStep(step, goNextFromWelcome)}
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 z-20 border-t border-white/[0.06] bg-black/85 pb-[env(safe-area-inset-bottom,0px)] backdrop-blur-md">
        <div className="container-brand grid w-full grid-cols-2 items-center gap-3 py-4 sm:flex sm:justify-between sm:gap-4">
          <button
            type="button"
            onClick={goBack}
            disabled={step === 0}
            aria-label={step === 0 ? "Back" : `Back to ${rangeOSDemoStepLabels[step - 1]}`}
            className={`inline-flex min-h-11 w-full min-w-0 items-center justify-center rounded-full border border-white/[0.1] px-4 text-sm font-medium text-zinc-300 transition enabled:hover:border-cauris-gold/30 enabled:hover:text-zinc-50 disabled:cursor-not-allowed disabled:opacity-35 sm:w-auto sm:min-w-[5.5rem] sm:px-5 ${demoUi.focusRing}`}
          >
            Back
          </button>
          {step < TOTAL_STEPS - 1 ? (
            <button
              type="button"
              onClick={goNext}
              aria-label={`Next: ${rangeOSDemoStepLabels[step + 1]}`}
              className={`inline-flex min-h-11 w-full items-center justify-center rounded-full bg-gradient-to-b from-cauris-flame/95 to-cauris-ember/95 px-6 text-sm font-semibold text-black shadow-glow-gold transition duration-200 motion-reduce:transition-none hover:from-cauris-dawn hover:to-cauris-flame sm:w-auto sm:px-8 ${demoUi.focusRing}`}
            >
              Next
            </button>
          ) : (
            <Link
              href={EXIT_HREF}
              aria-label="Return to RangeOS section on the main site"
              className={`inline-flex min-h-11 w-full items-center justify-center rounded-full border border-cauris-gold/30 bg-cauris-flame/[0.08] px-6 text-center text-sm font-semibold leading-tight text-cauris-dawn transition duration-200 motion-reduce:transition-none hover:bg-cauris-flame/[0.12] sm:w-auto sm:px-8 ${demoUi.focusRing}`}
            >
              Return to RangeOS™
            </Link>
          )}
        </div>
      </footer>
    </div>
  );
}
