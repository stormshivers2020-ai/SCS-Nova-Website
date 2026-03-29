import type { Metadata } from "next";
import { RangeOSDemoExperience } from "@/components/demo/RangeOSDemoExperience";

export const metadata: Metadata = {
  title: "RangeOS™ Demo | SCS Nova",
  description:
    "Guided product preview for RangeOS — website, inventory, booking, certification, and branding for gun ranges (simulated, browser-only).",
};

export default function RangeOSDemoPage() {
  return <RangeOSDemoExperience />;
}
