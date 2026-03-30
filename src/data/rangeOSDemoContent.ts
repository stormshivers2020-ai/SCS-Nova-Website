/**
 * RangeOS™ guided tour — sample screens in the browser; no live range data or backend.
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
  subheadline: "The customer-facing layer for a modern range — inventory, lanes, and programs in one system.",
  body: "Sample walkthrough in your browser — no login, no connection to a real range. Shows how RangeOS™ is meant to present inventory, booking, and programs so visitors see a serious operation and your desk gets cleaner handoffs.",
  ctaStart: "Begin walkthrough",
} as const;

/** Step eyebrows — range operations context; UI is illustrative. */
export const rangeOSPhaseEyebrows = {
  inventory: "Floor & retail · catalog (sample)",
  booking: "Lanes & desk · booking flow (sample)",
  certification: "Training · class & cert (sample)",
  branding: "Brand system · on-site presentation",
  ownership: "Commercial · how ranges buy in",
  requestDemo: "Next step · email the studio",
} as const;
