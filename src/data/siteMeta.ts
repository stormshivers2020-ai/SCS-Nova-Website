/**
 * Canonical site strings + URL resolution for metadata, OG tags, and structured data.
 */

export const SITE_TITLE = "SCS Nova / Cauris";

export const SITE_DESCRIPTION =
  "Maryland studio: websites, brand, and disciplined updates — plus Cauris and B-Cauris (in active development) and RangeOS™ for ranges. Guided browser demos; direct email to the team.";

/** Public site origin for absolute URLs (set NEXT_PUBLIC_SITE_URL in production). */
export function siteMetadataBase(): URL {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return new URL(`${fromEnv}/`);
  if (process.env.VERCEL_URL) return new URL(`https://${process.env.VERCEL_URL}/`);
  return new URL("http://localhost:3000/");
}
