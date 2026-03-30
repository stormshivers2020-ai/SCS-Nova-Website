import type { Metadata } from "next";
import { RangeOSDemoExperience } from "@/components/demo/RangeOSDemoExperience";

const description =
  "Guided product preview for RangeOS™ — website, inventory, booking, certification, and branding for gun ranges (sample UI, browser-only).";

export const metadata: Metadata = {
  title: "RangeOS™ Demo",
  description,
  openGraph: {
    title: "RangeOS™ Demo",
    description,
  },
  twitter: {
    card: "summary",
    title: "RangeOS™ Demo",
    description,
  },
};

export default function RangeOSDemoPage() {
  return <RangeOSDemoExperience />;
}
