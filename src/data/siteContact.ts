/**
 * Public business contact — shared by marketing sections and demo CTAs.
 * No backend; mailto opens the visitor's email client.
 */
export const SCS_NOVA_BUSINESS_EMAIL = "SCSANova.Business@gmail.com";

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
