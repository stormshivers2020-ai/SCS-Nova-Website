/**
 * RangeOS™ demo closing step — mailto CTAs via shared site contact helper.
 */

import { MAILTO_SUBJECTS } from "@/data/siteContact";

export const rangeOSRequestDemoIntro = {
  title: "See what RangeOS™ could look like for your range.",
  lead: "The screens you toured — inventory, booking, programs, branding — built and scoped for your lanes, rules, and brand when you engage SCS Nova.",
} as const;

export const rangeOSRequestDemoSupportLine =
  "Use a clear subject line; add city, lane count, and what isn’t working today — replies come from the studio with scope, timeline, and a cost band." as const;

export const rangeOSRequestDemoSubjects = {
  projectInquiry: MAILTO_SUBJECTS.rangeOS,
  demoRequest: MAILTO_SUBJECTS.rangeOSDemoFollowUp,
} as const;

export const rangeOSRequestDemoCtas = [
  {
    id: "get-started",
    label: "Discuss your range",
    subjectKey: "projectInquiry" as const,
  },
  {
    id: "request-demo",
    label: "Continue from this demo",
    subjectKey: "demoRequest" as const,
  },
  {
    id: "email",
    label: "Email SCS Nova",
    subjectKey: null,
  },
] as const;
