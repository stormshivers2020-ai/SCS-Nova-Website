/**
 * Public business contact — shared by marketing sections and demo CTAs.
 * No backend; mailto opens the visitor's email client.
 */
export const SCS_NOVA_BUSINESS_EMAIL = "SCSANova.Business@gmail.com";

/** Pre-filled subjects so the right thread reaches the inbox — calm, not salesy. */
export const MAILTO_SUBJECTS = {
  studioProject: "SCS Nova — Project inquiry",
  studioServices: "SCS Nova — Website & brand services",
  cauris: "Cauris — Question for the team",
  caurisAfterDemo: "Cauris — After the guided demo",
  rangeOS: "RangeOS — Range system inquiry",
  rangeOSDemoFollowUp: "RangeOS — After the product demo",
} as const;

const MAILTO_BASE = `mailto:${SCS_NOVA_BUSINESS_EMAIL}`;

export function buildBusinessMailto(options?: { subject?: string; body?: string }): string {
  const subject = options?.subject?.trim();
  const body = options?.body?.trim();
  if (!subject && !body) return MAILTO_BASE;
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  return `${MAILTO_BASE}?${params.toString()}`;
}
