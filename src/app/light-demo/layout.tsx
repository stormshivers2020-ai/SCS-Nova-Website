import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Think Tank–inspired coworking redesign — SCS Nova concept",
  description:
    "How SCS Nova would elevate a coworking site: cleaner layout and flow inspired by Think Tank Co-Works’ structure—not a copy, not live venue contact info.",
};

export default function LightDemoLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative z-10 min-h-screen w-full bg-white font-sans text-neutral-800 antialiased">
      <header className="border-b border-neutral-200/90 bg-white">
        <div className="mx-auto flex max-w-[75rem] flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <p className="text-xs font-medium text-neutral-500 sm:text-sm">
            Upgraded coworking site concept · <span className="text-neutral-700">SCS Nova</span>
            <span className="hidden sm:inline"> · Think Tank–inspired structure</span>
          </p>
          <Link
            href="/"
            className="text-sm font-semibold text-blue-700 underline-offset-4 transition-colors hover:text-blue-900 hover:underline"
          >
            Main site
          </Link>
        </div>
      </header>
      {children}
    </div>
  );
}
