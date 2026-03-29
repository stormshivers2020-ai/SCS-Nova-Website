/**
 * RangeOS™ ownership models — demo copy; aligns with public RangeOS pricing on the main site.
 */

export const rangeOSOwnershipIntro = {
  title: "Ownership",
  lead: "Choose ongoing support or full handoff — two clear models so the range picks how much of the stack it wants to run.",
} as const;

export const rangeOSOwnershipSupportLine =
  "Same product either way; the difference is who holds hosting, updates, and day-to-day changes." as const;

export type RangeOSOwnershipModel = {
  id: string;
  title: string;
  price: string;
  /** Managed System is highlighted as the supported path. */
  featured: boolean;
  tagline: string;
  bullets: readonly string[];
};

export const rangeOSDemoOwnershipModels: readonly RangeOSOwnershipModel[] = [
  {
    id: "managed",
    title: "Managed System",
    price: "$1,400 + $300/mo",
    featured: true,
    tagline: "We host, ship updates, and help keep inventory media current — you run the range.",
    bullets: [
      "Full build + setup",
      "Hosting + maintenance",
      "Inventory updates",
      "Ongoing support",
    ],
  },
  {
    id: "ownership",
    title: "Full Ownership",
    price: "$3,250",
    featured: false,
    tagline: "Repos and deployment in your account — training included so your team steers the stack.",
    bullets: [
      "Full system delivery",
      "GitHub + Vercel setup",
      "Training included",
      "Complete ownership",
    ],
  },
] as const;
