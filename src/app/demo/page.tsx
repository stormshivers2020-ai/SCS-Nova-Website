import type { Metadata } from "next";
import { CaurisDemoExperience } from "@/components/demo/CaurisDemoExperience";

export const metadata: Metadata = {
  title: "Cauris — Product Demo | SCS Nova",
  description:
    "Full-screen guided preview: Workspace through Early Access — memory, patterns, insight, guidance, and retention (illustrative, browser-only).",
};

export default function DemoPage() {
  return <CaurisDemoExperience />;
}
