/**
 * Simulated RangeOS™ inventory — demo-only, no live data.
 */

export const rangeOSInventoryIntro = {
  title: "Inventory",
  lead: "Photo-led cards show rental and retail lines clearly — so customers understand what’s on the range before they pick up the phone.",
} as const;

export const rangeOSInventoryStructuredPanel = {
  title: "Structured updates",
  body: "Staff maintain one photo library; the public site stays accurate and visitors self-serve availability at a glance.",
  tags: ["Photo-based", "Structured", "Availability-ready"] as const,
} as const;

export const rangeOSInventoryMediaLabels = {
  kicker: "Product image",
  line: "Your photography lands in this frame — same layout on every item.",
} as const;

export type RangeOSDemoInventoryItem = {
  id: string;
  name: string;
  type: string;
  caliber: string;
  status: string;
  tag: string;
  /** Visual accent for placeholder media block (demo only). */
  accent: "ember" | "flame" | "dawn" | "neutral" | "deep";
};

export const rangeOSDemoInventoryItems: readonly RangeOSDemoInventoryItem[] = [
  {
    id: "ar15",
    name: "AR-15 Platform Rifle",
    type: "Semi-automatic rifle",
    caliber: "5.56 NATO / .223 Rem",
    status: "On the range",
    tag: "Rifle lane",
    accent: "neutral",
  },
  {
    id: "g19",
    name: "Glock 19",
    type: "Compact handgun",
    caliber: "9mm",
    status: "On the range",
    tag: "Handgun",
    accent: "flame",
  },
  {
    id: "m590",
    name: "Mossberg 590",
    type: "Pump shotgun",
    caliber: "12 gauge",
    status: "On the range",
    tag: "Shotgun",
    accent: "deep",
  },
  {
    id: "p320",
    name: "Sig Sauer P320",
    type: "Striker handgun",
    caliber: "9mm",
    status: "Ask front desk",
    tag: "Handgun",
    accent: "ember",
  },
  {
    id: "mp15",
    name: "Smith & Wesson M&P 15",
    type: "Sporting rifle",
    caliber: "5.56 NATO",
    status: "In rotation",
    tag: "Rifle lane",
    accent: "dawn",
  },
];
