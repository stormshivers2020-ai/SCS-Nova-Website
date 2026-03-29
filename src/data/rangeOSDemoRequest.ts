/**
 * RangeOS™ demo closing step — mailto CTAs via shared site contact helper.
 */

export const rangeOSRequestDemoIntro = {
  title: "See what RangeOS™ could look like for your range.",
  lead: "Inventory, bookings, classes, and presentation — one scoped system for how your range serves customers online.",
} as const;

export const rangeOSRequestDemoSupportLine =
  "Direct email to SCS Nova — share your range context and we’ll reply with next steps." as const;

export const rangeOSRequestDemoKicker = "Contact" as const;

export const rangeOSRequestDemoSubjects = {
  projectInquiry: "RangeOS Project Inquiry",
  demoRequest: "RangeOS Demo Request",
} as const;

export const rangeOSRequestDemoCtas = [
  {
    id: "get-started",
    label: "Discuss your range",
    subjectKey: "projectInquiry" as const,
  },
  {
    id: "request-demo",
    label: "Request a walkthrough",
    subjectKey: "demoRequest" as const,
  },
  {
    id: "email",
    label: "Email SCS Nova",
    subjectKey: null,
  },
] as const;
