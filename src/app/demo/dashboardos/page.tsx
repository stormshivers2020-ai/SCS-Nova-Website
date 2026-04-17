import type { Metadata } from "next";
import { DashboardOSDemoExperience } from "@/components/demo/DashboardOSDemoExperience";

const description =
  "Full-screen guided preview for DashboardOS — employee time, clients, billable work, payroll, invoicing, management, and analytics (sample UI, browser-only).";

export const metadata: Metadata = {
  title: "DashboardOS — Product Demo",
  description,
  openGraph: {
    title: "DashboardOS — Product Demo",
    description,
  },
  twitter: {
    card: "summary",
    title: "DashboardOS — Product Demo",
    description,
  },
};

export default function DashboardOSDemoPage() {
  return <DashboardOSDemoExperience />;
}
