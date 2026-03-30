/**
 * /light-demo — SCS Nova redesign concept (coworking / local hub).
 * Contact on this route is the builder (SCS Nova) only — not any sample venue brand.
 */

/** Shown in UI and used for display; matches tel below. */
export const LIGHT_DEMO_BUILDER_PHONE_DISPLAY = "667-437-5067";

/** E.164 for `tel:` (US). */
export const LIGHT_DEMO_BUILDER_PHONE_TEL = "+16674375067";

/** Builder inbox for this demo page — mailto targets this address only on /light-demo. */
export const LIGHT_DEMO_BUILDER_EMAIL = "SCSNova.Business@gmail.com";

const LIGHT_DEMO_MAILTO_BASE = `mailto:${LIGHT_DEMO_BUILDER_EMAIL}`;

export function buildLightDemoMailto(options?: { subject?: string; body?: string }): string {
  const subject = options?.subject?.trim();
  const body = options?.body?.trim();
  if (!subject && !body) return LIGHT_DEMO_MAILTO_BASE;
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  return `${LIGHT_DEMO_MAILTO_BASE}?${params.toString()}`;
}

export const LIGHT_DEMO_CONCEPT_NOTE =
  "This concept page shows one possible upgraded direction for a modern coworking brand.";
