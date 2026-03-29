/**
 * Simulated RangeOS™ certification funnel — demo-only, no enrollment or government systems.
 */

export const rangeOSCertificationIntro = {
  title: "Certification",
  lead: "Move class and permit interest toward enrolled seats — clear for visitors, operated start-to-finish by your range.",
} as const;

export const rangeOSCertificationSupportPanel = {
  title: "Path clarity",
  body: "First-time visitors see the sequence before they commit; your range still controls enrollment, compliance, and instruction.",
} as const;

export type RangeOSCertFunnelStage = {
  id: string;
  order: number;
  title: string;
  description: string;
  /** Broad context labels — illustrative, not a guarantee of outcomes. */
  contextTags: readonly string[];
};

export const rangeOSCertificationFunnelStages: readonly RangeOSCertFunnelStage[] = [
  {
    id: "learn",
    order: 1,
    title: "Learn About the Class",
    description:
      "Customers review what the session covers, timing, and what to expect on the range — so interest stays informed, not confused.",
    contextTags: ["Concealed carry coursework", "HQL-aligned prep", "Safety & fundamentals"],
  },
  {
    id: "interest",
    order: 2,
    title: "Submit Interest",
    description:
      "A simple interest step captures how they want to follow up — without forcing a heavy form on the first visit.",
    contextTags: ["Preferred contact window", "Class type", "Experience level"],
  },
  {
    id: "session",
    order: 3,
    title: "Choose Session",
    description:
      "Published dates and seats are shown in plain language so customers can pick a time that fits — still managed by your staff in real life.",
    contextTags: ["Published schedule", "Open seats", "Reminders"],
  },
  {
    id: "next",
    order: 4,
    title: "Complete Next Steps",
    description:
      "A short checklist-style summary covers arrival time, what to bring, and any range-specific notes — fewer surprises at check-in.",
    contextTags: ["Arrival & parking", "ID & paperwork reminders", "Range rules recap"],
  },
] as const;

/** Panel eyebrow above the funnel list. */
export const rangeOSCertificationFunnelKicker = "Funnel overview" as const;

/** Footer note on the funnel panel — sets expectations. */
export const rangeOSCertificationDemoNote =
  "Preview sequence — enrollment, compliance, and instruction stay with your range and your policies." as const;
