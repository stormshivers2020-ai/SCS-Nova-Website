import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionShell } from "@/components/section-shell";
import { SectionHeader } from "./SectionHeader";

const pillars = [
  {
    title: "Websites",
    body: "Modern digital presence built to convert and present your business clearly.",
  },
  {
    title: "Inventory Systems",
    body: "Structured inventory experiences that help customers see what you actually offer.",
  },
  {
    title: "Booking Systems",
    body: "Clear customer pathways for appointments, sessions, and inquiry flow.",
  },
  {
    title: "Business Growth Tools",
    body: "Digital systems designed to support visibility, efficiency, and customer action.",
  },
] as const;

export function WhatWeDoSection() {
  return (
    <SectionShell
      id="what-we-do"
      aria-labelledby="what-we-do-heading"
      className="relative overflow-hidden border-t border-white/[0.08] bg-gradient-to-b from-black/36 via-zinc-950/10 to-black/36 !py-24 md:!py-32 lg:!py-36"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_50%_at_50%_0%,rgba(232,148,58,0.07),transparent_58%)]"
        aria-hidden
      />

      <div className="relative">
        <ScrollReveal>
          <SectionHeader
            eyebrow="What We Do"
            headingId="what-we-do-heading"
            title="Systems built for real business growth."
          />
          <p className="mt-10 max-w-3xl text-pretty text-base font-medium leading-relaxed text-zinc-300 sm:mt-11 sm:text-lg sm:leading-relaxed">
            We build systems that help businesses:
          </p>
          <ul className="mt-6 max-w-3xl list-none space-y-3 text-pretty text-base leading-relaxed text-zinc-300 sm:text-lg">
            <li className="flex gap-3">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cauris-flame/65" aria-hidden />
              <span>Track work across teams, clients, and tools</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cauris-flame/65" aria-hidden />
              <span>Manage clients and delivery with clear structure</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cauris-flame/65" aria-hidden />
              <span>Monitor operations and workload in one place</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cauris-flame/65" aria-hidden />
              <span>Understand performance with honest operational signals</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cauris-flame/65" aria-hidden />
              <span>Stay organized at scale as the business grows</span>
            </li>
          </ul>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 sm:mt-16 sm:grid-cols-2 sm:gap-7 lg:mt-20">
          {pillars.map((pillar, i) => (
            <ScrollReveal
              key={pillar.title}
              delayMs={60 + i * 70}
              className="flex flex-col rounded-brand border border-white/[0.11] bg-gradient-to-b from-white/[0.07] to-white/[0.018] p-7 shadow-cauris-elevate-sm ring-1 ring-cauris-gold/[0.09] backdrop-blur-md transition-[border-color,box-shadow,transform] duration-[var(--cauris-duration-surface)] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-cauris-gold/18 hover:shadow-[0_0_40px_rgba(244,176,66,0.06)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-8"
            >
              <div className="h-px w-10 bg-gradient-to-r from-cauris-flame/55 to-transparent" aria-hidden />
              <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-zinc-50 sm:text-xl">
                {pillar.title}
              </h3>
              <p className="mt-4 text-pretty text-sm leading-relaxed text-zinc-300 sm:text-[15px] sm:leading-relaxed">
                {pillar.body}
              </p>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delayMs={380} className="mt-14 flex flex-col gap-4 sm:mt-16 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
          <Link href="/services#request-services" className="cauris-btn-primary w-full sm:w-auto sm:min-w-[220px]">
            Start Your Project
          </Link>
          <Link href="/services" className="cauris-btn-secondary w-full sm:w-auto sm:min-w-[200px]">
            Services &amp; investment
          </Link>
        </ScrollReveal>
      </div>
    </SectionShell>
  );
}
