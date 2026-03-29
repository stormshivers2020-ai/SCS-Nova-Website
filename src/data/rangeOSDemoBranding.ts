/**
 * RangeOS™ branding preview — demo-only illustrative content.
 */

export const rangeOSBrandingIntro = {
  title: "Branding",
  lead: "The system stays functional — and your range reads as deliberate: identity, color, and type aligned with how you present on the line.",
} as const;

export const rangeOSBrandingSupportPanel = {
  title: "Presentation",
  body: "Customers infer quality from what they see first. Cohesive branding signals a range that invests in the experience.",
} as const;

export const rangeOSDemoBrandSwatches = [
  {
    id: "primary",
    label: "Primary",
    note: "Primary accent — CTAs, focus, key actions",
    swatchClass:
      "bg-gradient-to-br from-cauris-flame via-cauris-ember to-amber-700/90 ring-1 ring-white/10",
  },
  {
    id: "surface",
    label: "Surface",
    note: "Charcoal bases and panels",
    swatchClass: "bg-gradient-to-br from-zinc-800 to-zinc-950 ring-1 ring-white/10",
  },
  {
    id: "ink",
    label: "Ink",
    note: "True black for depth & contrast",
    swatchClass: "bg-black ring-1 ring-white/10",
  },
  {
    id: "muted",
    label: "Muted",
    note: "Supporting copy & labels",
    swatchClass: "bg-zinc-600/40 ring-1 ring-white/10",
  },
] as const;

export const rangeOSBrandingTypeSamples = [
  {
    role: "Display",
    sample: "Train with confidence.",
    className: "text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl",
  },
  {
    role: "Body",
    sample: "Lane availability, class schedules, and range policies stay easy to scan.",
    className: "text-sm leading-relaxed text-zinc-400 sm:text-base",
  },
  {
    role: "Meta",
    sample: "Safety · Supervision · Respect for the line",
    className: "font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500 sm:text-[11px]",
  },
] as const;

export const rangeOSBrandingConsistencyItems = [
  "Logo lockup & clear space on every template",
  "Palette wired through buttons, rules, and highlights",
  "Type scale tuned for mobile and desktop hierarchy",
  "Imagery framing that matches the range’s tone",
] as const;

/** Identity block label — illustrative lockup only. */
export const rangeOSBrandingIdentityKicker = "Identity · sample lockup" as const;
