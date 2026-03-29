/**
 * Shared visual tokens for RangeOS™ demo steps — spacing, panels, motion prefs.
 */

export const rangeOSDemoUi = {
  /** Sticky support column — clears ~sticky header + padding */
  supportAsideSticky: "lg:sticky lg:top-[5.75rem]",
  supportAsidePanel:
    "rounded-2xl border border-white/[0.1] bg-gradient-to-b from-white/[0.05] to-white/[0.015] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_24px_48px_rgba(0,0,0,0.38)] ring-1 ring-cauris-gold/[0.1] sm:p-7",
  accentRule: "h-px w-10 bg-gradient-to-r from-cauris-flame/60 to-transparent",
  asideTitle: "mt-4 text-lg font-semibold tracking-tight text-zinc-50",
  asideBody: "mt-4 text-sm leading-relaxed text-zinc-500 sm:text-[15px] sm:leading-relaxed",

  /** Booking schedule + certification funnel shell */
  darkFeaturePanel:
    "rounded-2xl border border-white/[0.1] bg-gradient-to-b from-zinc-950/85 to-black/92 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_28px_64px_rgba(0,0,0,0.45)] ring-1 ring-cauris-gold/[0.1] sm:p-8",

  /** Inventory cards, certification stage cards — lift on hover, respects reduced motion */
  interactiveSurfaceCard:
    "rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.01] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_20px_48px_rgba(0,0,0,0.35)] ring-1 ring-white/[0.04] transition-[border-color,box-shadow,transform] duration-300 ease-out motion-reduce:transition-none hover:-translate-y-0.5 hover:border-cauris-gold/22 hover:shadow-[0_0_40px_rgba(244,176,66,0.06)] motion-reduce:hover:translate-y-0",

  /** Ownership / pricing-style cards */
  ownershipShell:
    "flex h-full flex-col rounded-2xl border bg-gradient-to-b p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_24px_48px_rgba(0,0,0,0.38)] transition-[border-color,box-shadow,transform] duration-300 ease-out motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-7",
  ownershipIdle:
    "border-white/[0.1] from-white/[0.035] to-white/[0.01] ring-1 ring-white/[0.04] hover:-translate-y-0.5 hover:border-white/[0.14] hover:ring-white/[0.06] motion-reduce:hover:translate-y-0",
  ownershipSpotlight:
    "border-cauris-gold/25 from-white/[0.05] to-white/[0.015] ring-1 ring-cauris-gold/[0.12] shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_28px_56px_rgba(0,0,0,0.45)] hover:-translate-y-0.5 motion-reduce:hover:translate-y-0",

  /** Booking chip / pill */
  bookingChipBase:
    "rounded-xl border px-4 py-2.5 text-sm font-medium transition-colors duration-200 ease-out",
} as const;
