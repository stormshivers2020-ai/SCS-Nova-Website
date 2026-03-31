import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionShell } from "@/components/section-shell";
import { buildBusinessMailto } from "@/data/siteContact";

type DemoItem = {
  name: string;
  explainer: string;
  status: string;
  cta: string;
  href?: string;
  inactive?: boolean;
};

const demoItems: readonly DemoItem[] = [
  {
    name: "Cauris Demo",
    explainer:
      "A life-intelligence system that transforms everyday input into memory, structure, and insight.",
    status: "Live demo",
    cta: "View Demo",
    href: "/demo",
  },
  {
    name: "RangeOS Demo",
    explainer: "A complete website, inventory, and booking system designed for gun ranges.",
    status: "Live demo",
    cta: "View Demo",
    href: "/rangeos-demo",
  },
  {
    name: "Management DashboardOS Demo",
    explainer:
      "A multi-client operating system for managing work, clients, tasks, files, and daily control.",
    status: "Coming into view",
    cta: "Explore Product",
    href: "/dashboardos",
  },
  {
    name: "B-Cauris Demo",
    explainer:
      "An operational intelligence and workflow memory system for work and business use.",
    status: "In development",
    cta: "Coming Soon",
    inactive: true,
  },
] as const;

export default function DemosPage() {
  const mailto = buildBusinessMailto({ subject: "SCS Nova — Demo walkthrough request" });

  return (
    <div className="relative min-h-[100dvh] overflow-x-hidden">
      <div className="cauris-ambient" aria-hidden>
        <div className="cauris-grid" />
        <div className="cauris-starfield animate-twinkle" />
        <div className="cauris-vignette" />
        <div className="cauris-grain" />
      </div>

      <SectionShell
        id="demos-hero"
        aria-labelledby="demos-hero-heading"
        className="relative overflow-hidden bg-gradient-to-b from-black/46 via-zinc-950/14 to-black/36 !py-20 md:!py-32 lg:!py-36"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_82%_50%_at_50%_0%,rgba(232,148,58,0.1),transparent_58%)]"
          aria-hidden
        />
        <ScrollReveal className="relative">
          <p className="cauris-kicker text-zinc-500">Product Demos</p>
          <h1
            id="demos-hero-heading"
            className="mt-5 max-w-4xl text-pretty text-3xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-4xl md:text-[3rem] md:leading-[1.05]"
          >
            Explore the systems in motion.
          </h1>
          <p className="mt-8 max-w-3xl text-pretty text-base font-medium leading-relaxed text-zinc-200 sm:text-lg">
            Each demo is a guided preview of how SCS Nova systems are designed to work in the real
            world.
          </p>
        </ScrollReveal>
      </SectionShell>

      <SectionShell
        id="demos-about"
        aria-labelledby="demos-about-heading"
        className="relative overflow-hidden border-t border-white/[0.08] bg-gradient-to-b from-black/34 via-zinc-950/10 to-black/34 !py-20 md:!py-24 lg:!py-28"
      >
        <ScrollReveal>
          <h2 id="demos-about-heading" className="text-2xl font-semibold tracking-[-0.02em] text-zinc-100 sm:text-3xl">
            What this page is
          </h2>
          <p className="mt-5 max-w-3xl text-pretty text-sm leading-relaxed text-zinc-400 sm:text-base sm:leading-relaxed">
            This is the demo hub: one organized place to understand what each system does before you
            click into a walkthrough. Live demos open directly. Systems still in progress are shown
            clearly so expectations stay clean.
          </p>
        </ScrollReveal>
      </SectionShell>

      <SectionShell
        id="demos-grid"
        aria-labelledby="demos-grid-heading"
        className="relative overflow-hidden border-t border-white/[0.08] bg-gradient-to-b from-black/36 via-zinc-950/12 to-black/36 !py-24 md:!py-30 lg:!py-34"
      >
        <ScrollReveal>
          <h2 id="demos-grid-heading" className="text-3xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-4xl">
            Demo directory
          </h2>
        </ScrollReveal>
        <div className="mt-12 grid gap-6 sm:mt-14 md:grid-cols-2 md:gap-7">
          {demoItems.map((item, i) => (
            <ScrollReveal
              key={item.name}
              delayMs={70 + i * 70}
              className="flex h-full flex-col rounded-brand border border-white/[0.12] bg-gradient-to-b from-white/[0.09] to-white/[0.022] p-7 shadow-cauris-elevate-sm ring-1 ring-cauris-gold/[0.1] backdrop-blur-md sm:p-8"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3">
                <h3 className="text-xl font-semibold tracking-[-0.02em] text-zinc-50">{item.name}</h3>
                <span
                  className={`font-mono text-[10px] uppercase tracking-[0.18em] sm:shrink-0 sm:text-[11px] ${
                    item.inactive ? "text-zinc-500" : "text-cauris-dawn/90"
                  }`}
                >
                  {item.status}
                </span>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-300 sm:text-[15px] sm:leading-relaxed">
                {item.explainer}
              </p>
              {item.href ? (
                <Link href={item.href} className="cauris-btn-primary-card !mt-7 !w-full !px-6 !py-3.5 sm:!w-auto">
                  {item.cta}
                </Link>
              ) : (
                <span
                  aria-disabled="true"
                  className="mt-7 inline-flex min-h-11 items-center justify-center rounded-brand-sm border border-white/[0.12] bg-white/[0.03] px-5 text-sm font-medium text-zinc-500"
                >
                  {item.cta}
                </span>
              )}
            </ScrollReveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        id="demos-cta"
        aria-labelledby="demos-cta-heading"
        className="relative overflow-hidden border-t border-white/[0.08] bg-gradient-to-b from-black/40 via-zinc-950/12 to-black/44 !py-24 md:!py-30 lg:!py-34"
      >
        <ScrollReveal className="rounded-brand-lg border border-white/[0.12] bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-8 text-center shadow-cauris-elevate-md ring-1 ring-cauris-gold/[0.11] sm:p-10 md:p-12">
          <h2 id="demos-cta-heading" className="text-3xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-4xl">
            Want a guided walkthrough?
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-pretty text-base leading-relaxed text-zinc-300 sm:text-lg">
            If you want help choosing the right system for your use case, contact SCS Nova and we will
            point you to the best next step.
          </p>
          <div className="mx-auto mt-10 flex w-full max-w-md flex-col gap-3.5 sm:flex-row sm:justify-center sm:gap-4">
            <a href={mailto} className="cauris-btn-primary-card">
              Request walkthrough
            </a>
            <Link href="/services" className="cauris-btn-tertiary-card">
              View services
            </Link>
          </div>
        </ScrollReveal>
      </SectionShell>
    </div>
  );
}
