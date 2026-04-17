/**
 * Shared Tailwind class strings for the Cauris demo — one visual system across steps.
 */

export const demoUi = {
  /** Outer region for every step + welcome (scrollable main). */
  region:
    "demo-step-enter mx-auto w-full max-w-6xl px-4 py-9 sm:px-6 sm:py-11 md:px-10 md:py-12",
  introMax: "max-w-3xl",
  /** Mono label track only — add your own `text-*` color. */
  kickerTrack: "cauris-kicker",
  kicker: "cauris-kicker",
  /** Phase line under eyebrow — product chapter, not “Guided preview”. */
  phaseEyebrow:
    "font-mono text-[10px] font-medium uppercase leading-relaxed tracking-[0.2em] text-cauris-flame/78 sm:text-[11px] sm:tracking-[0.22em]",
  stepTitle:
    "mt-4 text-[1.5rem] font-semibold leading-[1.12] tracking-[-0.03em] text-zinc-50 sm:text-3xl sm:leading-[1.08] md:text-[2.05rem]",
  lead: "mt-4 text-pretty text-sm font-medium leading-relaxed text-zinc-300 sm:text-base sm:leading-relaxed",
  leadDim:
    "mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-zinc-400 sm:text-base sm:leading-relaxed",
  footnote: "mt-3 max-w-xl text-[11px] leading-relaxed text-zinc-400",
  /** Primary product surface — main canvas (thread, timeline, helix, etc.). */
  productMain:
    "rounded-brand border border-white/[0.12] bg-gradient-to-b from-white/[0.095] to-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_28px_72px_rgba(0,0,0,0.26)] ring-1 ring-cauris-gold/[0.1] backdrop-blur-md",
  /** Secondary column — metadata, summaries, “system” readouts. */
  productAside:
    "rounded-brand border border-white/[0.11] bg-gradient-to-b from-white/[0.078] to-black/[0.14] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_20px_56px_rgba(0,0,0,0.22)] ring-1 ring-white/[0.06] backdrop-blur-md",
  /** Space below intro before main two-column layout. */
  sectionY: "mt-10 sm:mt-12",
  /** Slightly looser top spacing (e.g. Early Access after dense headline). */
  sectionYLoose: "mt-12 sm:mt-14",
  /** Main + aside; standard aside width. */
  gridSplit:
    "grid gap-7 sm:gap-9 md:gap-11 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)] lg:items-start lg:gap-14 xl:grid-cols-[minmax(0,1fr)_minmax(0,360px)]",
  /** Helix / Workspace-style slightly wider aside on xl. */
  gridSplitWide:
    "grid gap-7 sm:gap-9 md:gap-11 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)] lg:items-start lg:gap-14 xl:grid-cols-[minmax(0,1fr)_minmax(0,380px)]",
  stickyAside: "flex flex-col gap-6 lg:sticky lg:top-[7.5rem]",
  panelInset: "shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
  borderHairline: "border-white/[0.09]",
  roundedPanel: "rounded-brand",
  /** Primary / ghost control ring (matches site gold focus). */
  focusRing:
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-cauris-flame focus-visible:ring-offset-2 focus-visible:ring-offset-black",
  focusRingSubtle: "focus:outline-none focus-visible:ring-2 focus-visible:ring-cauris-flame",
} as const;
