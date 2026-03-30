type DemoProgressBarProps = {
  step: number;
  labels: readonly string[];
  /** Mono line when `step === 0` (e.g. "Start · product tour"). */
  startMono: string;
  /** Accessible name for the progressbar, e.g. (label) => \`Demo progress: ${label}\`. */
  progressAriaLabel: (currentLabel: string) => string;
};

export function DemoProgressBar({
  step,
  labels,
  startMono,
  progressAriaLabel,
}: DemoProgressBarProps) {
  const total = labels.length;
  const pct = ((step + 1) / total) * 100;
  const currentLabel = labels[step];

  return (
    <div className="flex flex-col gap-3 sm:gap-4">
      <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-2 sm:items-end">
        <div className="min-w-0 flex-1 pr-1">
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-500 sm:text-[11px]">
            {step === 0 ? startMono : `Tour · step ${step + 1} of ${total}`}
          </p>
          <p className="mt-2 line-clamp-2 text-base font-semibold leading-snug tracking-[-0.02em] text-zinc-100 sm:line-clamp-none sm:text-xl sm:leading-tight">
            {currentLabel}
          </p>
        </div>
        <p
          className="shrink-0 font-mono text-xs tabular-nums text-zinc-500 sm:text-sm"
          aria-hidden
        >
          {step + 1}/{total}
        </p>
      </div>
      <div
        className="relative h-2.5 overflow-hidden rounded-full bg-white/[0.06] ring-1 ring-inset ring-white/[0.05] sm:h-2"
        role="progressbar"
        aria-valuenow={step + 1}
        aria-valuemin={1}
        aria-valuemax={total}
        aria-label={progressAriaLabel(currentLabel)}
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-cauris-flame via-cauris-ember to-cauris-gold shadow-[0_0_24px_rgba(244,176,66,0.28)] transition-[width] duration-[var(--cauris-duration-step)] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
          style={{ width: `${pct}%` }}
        />
      </div>
      <div
        className="flex min-w-0 flex-nowrap items-center gap-1 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-1.5 [&::-webkit-scrollbar]:hidden"
        role="list"
        aria-label="Steps in this tour"
      >
        {labels.map((label, i) => (
          <span
            key={label}
            role="listitem"
            title={label}
            className={`h-1 shrink-0 rounded-full transition-all duration-[var(--cauris-duration-surface)] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
              i === step
                ? "w-6 bg-cauris-flame shadow-[0_0_12px_rgba(244,176,66,0.4)]"
                : i < step
                  ? "w-1.5 bg-cauris-gold/45"
                  : "w-1.5 bg-white/[0.07]"
            }`}
            aria-current={i === step ? "step" : undefined}
          />
        ))}
      </div>
    </div>
  );
}
