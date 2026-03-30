/**
 * Shared visual tokens for RangeOS™ demo steps — spacing, panels, motion prefs.
 */

export const rangeOSDemoUi = {
  /** Sticky support column — clears premium demo header */
  supportAsideSticky: "lg:sticky lg:top-[7.5rem]",
  supportAsidePanel:
    "rounded-brand border border-white/[0.12] bg-gradient-to-b from-white/[0.09] to-white/[0.022] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.078),0_28px_68px_rgba(0,0,0,0.3)] ring-1 ring-cauris-gold/[0.11] backdrop-blur-md sm:p-8",
  accentRule: "h-px w-12 bg-gradient-to-r from-cauris-flame/65 to-transparent",
  asideTitle: "mt-5 text-lg font-semibold tracking-[-0.02em] text-zinc-50 sm:text-xl",
  asideBody:
    "mt-4 text-sm font-medium leading-relaxed text-zinc-500 sm:text-[15px] sm:leading-relaxed",

  /** Booking schedule + certification funnel — “console” weight */
  darkFeaturePanel:
    "rounded-brand border border-white/[0.12] bg-gradient-to-b from-zinc-950/75 to-black/82 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.065),0_32px_76px_rgba(0,0,0,0.36)] ring-1 ring-cauris-gold/[0.13] backdrop-blur-md sm:p-8",

  /** Inventory cards, certification stage cards — lift on hover, respects reduced motion */
  interactiveSurfaceCard:
    "rounded-brand border border-white/[0.11] bg-gradient-to-b from-white/[0.085] to-white/[0.02] shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_22px_56px_rgba(0,0,0,0.28)] ring-1 ring-white/[0.06] backdrop-blur-md transition-[border-color,box-shadow,transform] duration-[var(--cauris-duration-surface)] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none hover:-translate-y-0.5 hover:border-cauris-gold/24 hover:shadow-[0_0_48px_rgba(244,176,66,0.08)] motion-reduce:hover:translate-y-0",

  /** Ownership / pricing-style cards */
  ownershipShell:
    "flex h-full flex-col rounded-brand border bg-gradient-to-b p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.065),0_26px_60px_rgba(0,0,0,0.3)] backdrop-blur-md transition-[border-color,box-shadow,transform] duration-[var(--cauris-duration-surface)] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-8",
  ownershipIdle:
    "border-white/[0.11] from-white/[0.065] to-white/[0.02] ring-1 ring-white/[0.05] hover:-translate-y-0.5 hover:border-white/[0.16] hover:ring-white/[0.07] motion-reduce:hover:translate-y-0",
  ownershipSpotlight:
    "border-cauris-gold/25 from-white/[0.09] to-white/[0.028] ring-1 ring-cauris-gold/[0.13] shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_28px_56px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 motion-reduce:hover:translate-y-0",

  /** Booking chip / pill */
  bookingChipBase:
    "inline-flex min-h-12 items-center justify-center rounded-xl border px-4 py-2 text-sm font-medium transition-colors duration-[var(--cauris-duration-hover)] ease-[cubic-bezier(0.22,1,0.36,1)]",
} as const;
