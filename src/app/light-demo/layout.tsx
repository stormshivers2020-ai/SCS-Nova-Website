import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Light demo",
  description: "SCS Nova — light theme business design option (demo).",
};

export default function LightDemoLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative z-10 min-h-screen w-full bg-white font-sans text-neutral-800 antialiased">
      {children}
    </div>
  );
}
