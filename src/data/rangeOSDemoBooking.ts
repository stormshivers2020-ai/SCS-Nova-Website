/**
 * Simulated RangeOS™ booking flow — demo-only, no backend.
 */

export const rangeOSBookingIntro = {
  title: "Booking",
  lead: "Turn browsers into lane time and qualified inquiries — a clear path instead of voicemail tag.",
} as const;

export const rangeOSBookingFlowPanel = {
  title: "Customer flow",
  body: "When the next step is obvious, more visitors complete it. Your team still confirms the details that matter.",
} as const;

/** Schedule panel disclaimer — sets expectations without sounding like a toy. */
export const rangeOSBookingScheduleNote =
  "Sample schedule · production ties to how your range runs the desk." as const;

export type RangeOSDemoBookingOption = {
  id: string;
  title: string;
  description: string;
  /** Small label on the option card */
  tag: string;
  /** Whether lane chips appear in the scheduling panel for this path */
  showLanePicker: boolean;
};

export const rangeOSDemoBookingOptions: readonly RangeOSDemoBookingOption[] = [
  {
    id: "lane",
    title: "Lane Reservation",
    description: "Standard lane time with equipment check-in at arrival.",
    tag: "Same-day",
    showLanePicker: true,
  },
  {
    id: "private",
    title: "Private Session Inquiry",
    description: "Dedicated coaching or closed-bay time — staff confirms details.",
    tag: "Staff follow-up",
    showLanePicker: false,
  },
  {
    id: "group",
    title: "Group Range Time",
    description: "Parties, teams, or classes — capacity and safety briefing coordinated.",
    tag: "Groups",
    showLanePicker: true,
  },
  {
    id: "first",
    title: "First-Time Shooter Inquiry",
    description: "Orientation path with range rules and supervised start.",
    tag: "New shooters",
    showLanePicker: false,
  },
];

/** Display-only date chips (not a live calendar). */
export const rangeOSDemoBookingDates = [
  "Sat, Mar 29",
  "Sun, Mar 30",
  "Wed, Apr 2",
  "Sat, Apr 5",
] as const;

/** Display-only time slots. */
export const rangeOSDemoBookingTimes = ["10:00 AM", "12:30 PM", "2:00 PM", "4:30 PM"] as const;

export const rangeOSDemoBookingLanes = ["Lane 1", "Lane 2", "Lane 3", "Lane 4"] as const;

export const rangeOSBookingCtaLabels = {
  primaryIdle: "Submit request",
  primarySent: "Request logged",
  secondary: "Reset form",
} as const;
