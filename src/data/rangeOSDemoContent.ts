/**
 * RangeOS™ guided demo — scripted, browser-only preview. No backend.
 */

/** Progress + navigation order (index = step). */
export const rangeOSDemoStepLabels = [
  "Welcome",
  "Inventory",
  "Booking",
  "Certification",
  "Branding",
  "Ownership",
  "Request Demo",
] as const;

export const rangeOSDemoWelcome = {
  title: "RangeOS™",
  subheadline: "A customer-facing web system built for how ranges operate day to day.",
  body: "Inventory, lane booking, and class or certification paths live in one intentional experience — visitors see what you offer and know what to do next.",
  ctaStart: "Begin walkthrough",
} as const;
