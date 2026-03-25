/**
 * Conceptual companion surface: context strip, thread, workflow cards, memory tags — not a dashboard.
 */
export function BcaurisOperationalVisual() {
  return (
    <div
      className="relative mx-auto w-full max-w-[460px] overflow-hidden rounded-[1.35rem] border border-white/[0.14] bg-gradient-to-br from-zinc-900/95 via-zinc-950/90 to-black p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_52px_100px_rgba(0,0,0,0.5),0_0_100px_rgba(244,176,66,0.09)] ring-1 ring-cauris-gold/[0.18] sm:max-w-[480px] sm:p-7"
      aria-hidden
    >
      <div className="pointer-events-none absolute -right-14 top-0 h-56 w-56 rounded-full bg-cauris-ember/[0.11] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 -left-10 h-44 w-44 rounded-full bg-cauris-flame/[0.09] blur-3xl" />

      {/* Context strip */}
      <div className="relative flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.1] pb-3">
        <div className="flex min-w-0 flex-col gap-0.5">
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-400">
            Workspace
          </span>
          <span className="truncate font-mono text-[8px] uppercase tracking-[0.14em] text-zinc-500">
            context · memory · flow
          </span>
        </div>
        <span className="shrink-0 rounded-full border border-cauris-gold/30 bg-cauris-flame/[0.12] px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.12em] text-cauris-dawn">
          Workflow detected
        </span>
      </div>

      {/* Thread-like exchange */}
      <div className="relative mt-4 space-y-2.5">
        <div className="rounded-lg border border-white/[0.1] bg-white/[0.05] px-3 py-2.5 backdrop-blur-sm">
          <div className="flex items-center justify-between gap-2">
            <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-zinc-500">
              Input
            </span>
            <span className="font-mono text-[7px] text-zinc-500">file + note</span>
          </div>
          <p className="mt-1.5 text-[11px] leading-snug text-zinc-400">
            Screenshot and spreadsheet attached…
          </p>
        </div>
        <div className="ml-2 rounded-lg border border-cauris-gold/28 bg-black/55 px-3 py-2.5 shadow-[0_0_32px_rgba(244,176,66,0.12)] backdrop-blur-sm">
          <div className="flex items-center justify-between gap-2">
            <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-cauris-flame">
              Companion
            </span>
            <span className="h-1 w-1 shrink-0 rounded-full bg-cauris-flame motion-reduce:animate-none bcauris-pulse-dot" />
          </div>
          <p className="mt-1.5 text-[11px] leading-snug text-zinc-300">
            Related context found
          </p>
        </div>
        <div className="rounded-lg border border-white/[0.08] bg-white/[0.04] px-3 py-2 backdrop-blur-sm">
          <p className="font-mono text-[9px] leading-relaxed text-zinc-500">
            Prior fix available · same pattern as last week
          </p>
        </div>
      </div>

      {/* Workflow cards */}
      <div className="relative mt-5 space-y-2">
        <div className="flex items-center justify-between rounded-lg border border-white/[0.1] bg-zinc-950/70 px-3 py-2">
          <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-zinc-400">
            Invoice Review
          </span>
          <span className="font-mono text-[8px] text-zinc-500">3 similar tasks</span>
        </div>
        <div className="flex items-center justify-between rounded-lg border border-white/[0.08] bg-zinc-950/40 px-3 py-2">
          <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-zinc-500">
            Monthly reporting pattern
          </span>
          <span className="font-mono text-[7px] uppercase tracking-[0.1em] text-cauris-flame/90">
            remembered
          </span>
        </div>
      </div>

      {/* Memory tags */}
      <div className="relative mt-4 flex flex-wrap items-center gap-1.5">
        {["workflow memory", "screenshot", "files"].map((tag) => (
          <span
            key={tag}
            className="rounded border border-white/[0.1] bg-white/[0.04] px-2 py-0.5 font-mono text-[7px] uppercase tracking-[0.12em] text-zinc-500"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="relative mt-4 flex items-center gap-2">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cauris-flame/45 to-transparent" />
        <svg
          viewBox="0 0 120 24"
          className="h-5 w-[120px] shrink-0 opacity-90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 12h24M44 12h32M92 12h24"
            stroke="rgba(244,176,66,0.38)"
            strokeWidth={0.55}
            strokeLinecap="round"
          />
          <circle cx="16" cy="12" r="2" fill="rgba(244,176,66,0.55)" />
          <circle cx="60" cy="12" r="2.5" fill="rgba(253,230,138,0.45)" />
          <circle cx="104" cy="12" r="2" fill="rgba(212,212,216,0.45)" />
        </svg>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cauris-flame/45 to-transparent" />
      </div>
    </div>
  );
}
