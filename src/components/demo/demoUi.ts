/**
 * Shared Tailwind class strings for the Cauris demo — one visual system across steps.
 */

export const demoUi = {
  /** Outer region for every step + welcome (scrollable main). */
  region:
    "demo-step-enter mx-auto w-full max-w-5xl px-5 py-8 sm:px-6 sm:py-10 md:px-8",
  introMax: "max-w-3xl",
  /** Mono label track only — add your own `text-*` color. */
  kickerTrack: "font-mono text-[10px] uppercase tracking-[0.28em]",
  kicker: "font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-600",
  stepTitle: "mt-2 text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl",
  lead: "mt-3 text-pretty text-sm leading-relaxed text-zinc-500 sm:text-base",
  leadDim: "mt-2 max-w-2xl text-pretty text-sm leading-relaxed text-zinc-600 sm:text-base",
  footnote: "mt-2 max-w-xl text-[11px] leading-relaxed text-zinc-600",
  /** Space below intro before main two-column layout. */
  sectionY: "mt-10",
  /** Slightly looser top spacing (e.g. Early Access after dense headline). */
  sectionYLoose: "mt-12",
  /** Main + aside; standard aside width. */
  gridSplit:
    "grid gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)] lg:items-start lg:gap-12 xl:grid-cols-[minmax(0,1fr)_minmax(0,360px)]",
  /** Helix / Workspace-style slightly wider aside on xl. */
  gridSplitWide:
    "grid gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)] lg:items-start lg:gap-12 xl:grid-cols-[minmax(0,1fr)_minmax(0,380px)]",
  stickyAside: "flex flex-col gap-5 lg:sticky lg:top-28",
  panelInset: "shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]",
  borderHairline: "border-white/[0.08]",
  roundedPanel: "rounded-2xl",
  /** Primary / ghost control ring (matches site gold focus). */
  focusRing:
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-cauris-flame focus-visible:ring-offset-2 focus-visible:ring-offset-black",
  focusRingSubtle: "focus:outline-none focus-visible:ring-2 focus-visible:ring-cauris-flame",
} as const;
