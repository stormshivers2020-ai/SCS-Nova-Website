import type { Metadata } from "next";
import { CaurisDemoExperience } from "@/components/demo/CaurisDemoExperience";

const description =
  "Full-screen guided preview: Workspace through Early Access — memory, patterns, insight, guidance, and retention (illustrative, browser-only).";

export const metadata: Metadata = {
  title: "Cauris — Product Demo",
  description,
  openGraph: {
    title: "Cauris — Product Demo",
    description,
  },
  twitter: {
    card: "summary",
    title: "Cauris — Product Demo",
    description,
  },
};

export default function DemoPage() {
  return <CaurisDemoExperience />;
}
