/**
 * DashboardOS guided tour — sample consulting operations UI in the browser; no live data or backend.
 */

/** Progress + navigation order (index = step). */
export const dashboardOSDemoStepLabels = [
  "Welcome",
  "Employee Work",
  "Client + Location Tracking",
  "Tool + Work Type",
  "Billable Work",
  "Payroll & Hours",
  "Invoicing",
  "Management View",
  "Analytics",
  "Early Access",
] as const;

export const dashboardOSDemoWelcome = {
  title: "DashboardOS Demo",
  subheadline: "Consulting operations, structured.",
  body: "DashboardOS connects employee work, client activity, and billable hours into one system.",
  ctaStart: "Start Demo",
} as const;

/** Short chapter labels for each step (mono eyebrow in the tour). */
export const dashboardOSPhaseEyebrows = [
  "Session · read-only preview",
  "Time & delivery · employees",
  "Rollups · clients & sites",
  "Context · platforms & work types",
  "Commercial · billable vs internal",
  "Payroll · hours that match reality",
  "Billing · invoices from work",
  "Leadership · management view",
  "Insight · performance signals",
  "Next step · early access",
] as const;

export type DashboardOSTourCopy = {
  title: string;
  lead: string;
  supporting?: string;
};

/** Body copy for steps 1–8 after welcome (index 0 = Employee Work; step 9 is Early Access). */
export const dashboardOSTourSteps: readonly DashboardOSTourCopy[] = [
  {
    title: "Employee work",
    lead: "Track employee work as it happens.",
    supporting:
      "Clock events carry client, location, tool, and work type — structured at capture so payroll and billing see the same truth.",
  },
  {
    title: "How work is organized",
    lead: "Every task is tied to a client and location.",
    supporting:
      "Hours roll up by account first, then by store or site — so load, billing, and follow-ups stay aligned with where work actually happened.",
  },
  {
    title: "Tracking inside tools",
    lead: "Track the work your team performs inside real systems.",
    supporting:
      "Each log ties delivery to the platform where it happened and the work type it represents — DashboardOS records the layer; it does not replace your accounting or BOH stack.",
  },
  {
    title: "Billable vs non-billable",
    lead: "Know what work generates revenue.",
    supporting:
      "Tag delivery as billable or non-billable at capture — finance sees the same story operations does before invoices go out.",
  },
  {
    title: "Employee hours",
    lead: "Track payroll and productivity together.",
    supporting:
      "Worked hours, billable mix, and payroll-ready totals stay in one view — fewer corrections and less back-and-forth between ops and HR.",
  },
  {
    title: "Invoice generation",
    lead: "Turn tracked work into invoices.",
    supporting:
      "Approved billable time rolls into a draft line — finance starts from delivery, not from memory or side spreadsheets.",
  },
  {
    title: "Admin dashboard",
    lead: "See your operation in real time.",
    supporting:
      "Headcount, client coverage, open delivery, and exceptions — one surface for partners and ops leads without living in chat threads.",
  },
  {
    title: "Performance insights",
    lead: "Understand performance across your business.",
    supporting:
      "Client concentration, who is carrying load, how billable you actually are, and where work stalls — signals grounded in time, not vanity charts.",
  },
] as const;

export const dashboardOSDemoEarlyAccess = {
  title: "Run your operation with clarity.",
  body: "DashboardOS is built for consulting firms that need control over work, time, and billing.",
  mailRequestDemoSubject: "SCS Nova — DashboardOS demo request",
  mailStartSystemSubject: "SCS Nova — DashboardOS — start your system",
  mailEmailNovaSubject: "SCS Nova — DashboardOS",
} as const;
