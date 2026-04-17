import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionShell } from "@/components/section-shell";
import { buildBusinessMailto, MAILTO_SUBJECTS } from "@/data/siteContact";

const pillars = [
  {
    title: "Websites",
    body: "Modern digital presence designed to communicate clearly and convert with confidence.",
  },
  {
    title: "Inventory Systems",
    body: "Structured product and stock experiences that keep teams and customers aligned.",
  },
  {
    title: "Booking Systems",
    body: "Clear scheduling and inquiry pathways built for real customer flow.",
  },
  {
    title: "Business Growth Tools",
    body: "Operational layers that improve execution, visibility, and follow-through.",
  },
] as const;

type PricingOffering = {
  title: string;
  description: string;
  priceLines: readonly string[];
  features: readonly string[];
  notes?: readonly string[];
  positioning?: string;
  emphasized?: boolean;
};

const pricingOfferings: readonly PricingOffering[] = [
  {
    title: "One-Time Website Builds",
    description:
      "For businesses that want a high-quality, professional online presence without ongoing management.",
    priceLines: ["$2,000 – $3,000"],
    features: [
      "Premium 3–4 page website",
      "Custom design and layout",
      "Mobile responsive experience",
      "Business structure and content setup",
      "Deployment and handoff",
    ],
    notes: [
      "This is a one-time build. Ongoing updates are not included.",
      "On-demand updates are available at $250 per session depending on scope.",
    ],
  },
  {
    title: "Premium Business Systems",
    description:
      "For businesses that want more than a website — a complete system designed for growth, bookings, operations, and customer flow.",
    priceLines: ["$2,500 – $4,000 setup", "$200 – $300/month management"],
    features: [
      "Custom-built website + system integration",
      "Booking and scheduling systems",
      "Inventory or service management setup",
      "Branding integration (structure, flow, identity)",
      "Ongoing updates and improvements (2× per month)",
    ],
    positioning: "This is a fully managed system designed to grow and evolve with your business.",
    emphasized: true,
  },
  {
    title: "Custom Business Software",
    description:
      "For businesses that want to run their operations through a structured system instead of relying on manual processes.",
    priceLines: ["$3,000 – $5,000 setup", "$300/month license"],
    features: [
      "Business-specific dashboard system",
      "Job tracking, scheduling, and workflow management",
      "Custom configuration based on operations",
      "Onboarding and training",
    ],
    positioning: "You operate the system — we build and support the foundation.",
  },
] as const;

const systems = [
  {
    name: "RangeOS™",
    summary: "Website + inventory + booking system for gun ranges, designed for customer flow and operational clarity.",
    note: "Starting points available",
    href: "/rangeos",
    cta: "Explore RangeOS",
  },
  {
    name: "Management DashboardOS",
    summary:
      "Consulting operations system for tracking employee work, billable hours, payroll time, and client delivery across tools like MarginEdge, Restaurant365, and QuickBooks.",
    note: "Custom scope",
    href: "/dashboardos",
    cta: "Explore DashboardOS",
  },
  {
    name: "Cauris",
    summary: "Life-intelligence system for memory, structure, and insight — designed for calmer decisions over time.",
    note: "In active development",
    href: "/cauris",
    cta: "Explore Cauris",
  },
  {
    name: "B-Cauris",
    summary: "Work intelligence and operational memory system for teams that need context continuity and execution focus.",
    note: "Custom scope",
    href: "/b-cauris",
    cta: "Explore B-Cauris",
  },
] as const;

function PricingOfferingCard({
  offering,
  delayMs,
}: {
  offering: PricingOffering;
  delayMs: number;
}) {
  const isPrimary = Boolean(offering.emphasized);
  return (
    <ScrollReveal
      delayMs={delayMs}
      className={`flex h-full flex-col rounded-brand border bg-gradient-to-b p-6 shadow-cauris-elevate-sm ring-1 backdrop-blur-sm sm:p-8 ${
        isPrimary
          ? "relative border-cauris-gold/45 from-white/[0.18] via-white/[0.1] to-white/[0.06] shadow-[0_0_0_1px_rgba(244,176,66,0.12),0_24px_64px_-12px_rgba(0,0,0,0.45)] ring-cauris-gold/[0.28] lg:-my-1 lg:py-9"
          : "border-white/[0.14] from-white/[0.12] to-white/[0.06] ring-white/[0.08]"
      }`}
    >
      {isPrimary ? (
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-cauris-dawn sm:text-[11px]">
          Recommended
        </p>
      ) : null}
      <h3
        className={`text-balance font-semibold leading-tight tracking-[-0.03em] text-zinc-50 ${
          isPrimary ? "mt-3 text-[1.7rem] sm:text-[1.85rem]" : "mt-0 text-[1.65rem] sm:text-[1.75rem]"
        }`}
      >
        {offering.title}
      </h3>
      <p className="mt-4 text-sm font-medium leading-relaxed text-zinc-300 sm:text-base">{offering.description}</p>
      <div className="mt-7 space-y-2 border-t border-white/[0.12] pt-7">
        {offering.priceLines.map((line) => (
          <p
            key={line}
            className={`font-semibold tracking-[-0.03em] text-zinc-50 ${
              isPrimary ? "text-[1.35rem] sm:text-[1.5rem]" : "text-[1.25rem] sm:text-[1.35rem]"
            }`}
          >
            {line}
          </p>
        ))}
      </div>
      <ul className="mt-8 flex flex-col gap-3.5">
        {offering.features.map((f) => (
          <li key={f} className="flex gap-3 text-sm leading-relaxed text-zinc-100 sm:text-[15px] sm:leading-relaxed">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cauris-flame/65" aria-hidden />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      {offering.positioning ? (
        <p className="mt-8 border-t border-white/[0.1] pt-6 text-sm font-medium leading-relaxed text-zinc-200 sm:text-[15px]">
          {offering.positioning}
        </p>
      ) : null}
      {offering.notes?.length ? (
        <div className="mt-6 space-y-3 text-xs leading-relaxed text-zinc-300 sm:text-[13px] sm:leading-relaxed">
          {offering.notes.map((n) => (
            <p key={n}>{n}</p>
          ))}
        </div>
      ) : null}
      <div className="mt-auto pt-8">
        <a
          href="#request-services"
          className="inline-flex min-h-11 w-full items-center justify-center rounded-brand-sm border border-cauris-gold/25 bg-cauris-flame/[0.06] px-4 text-sm font-medium text-zinc-100 transition-colors hover:border-cauris-gold/40 hover:text-cauris-dawn sm:w-auto"
        >
          Discuss this option
        </a>
      </div>
    </ScrollReveal>
  );
}

export default function ServicesPage() {
  const mailto = buildBusinessMailto({ subject: MAILTO_SUBJECTS.studioServices });

  return (
    <div className="relative min-h-[100dvh] overflow-x-hidden">
      <div className="cauris-ambient" aria-hidden>
        <div className="cauris-grid" />
        <div className="cauris-starfield animate-twinkle" />
        <div className="cauris-vignette" />
        <div className="cauris-grain" />
      </div>

      <SectionShell
        id="services-hero"
        aria-labelledby="services-hero-heading"
        className="relative overflow-hidden bg-gradient-to-b from-black/46 via-zinc-950/14 to-black/36 !py-20 md:!py-32 lg:!py-36"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_82%_50%_at_50%_0%,rgba(232,148,58,0.1),transparent_58%)]" />

        <ScrollReveal className="relative">
          <p className="cauris-kicker">Services</p>
          <h1
            id="services-hero-heading"
            className="mt-5 max-w-5xl text-pretty text-3xl font-semibold tracking-[-0.025em] text-zinc-100 sm:text-4xl md:text-[3rem] md:leading-[1.05]"
          >
            Systems, websites, and digital presence built for real business growth.
          </h1>
          <p className="mt-8 max-w-3xl text-pretty text-base font-medium leading-relaxed text-zinc-200 sm:text-lg">
            SCS Nova builds websites, branded systems, and operational tools designed to help businesses
            present clearly, work smarter, and grow with more control.
          </p>
          <p className="mt-5 max-w-3xl text-pretty text-sm leading-relaxed text-zinc-300 sm:text-base">
            This page is the full offer architecture: capabilities, pricing, productized systems, and clear
            next steps.
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            <a href="#website-pricing" className="inline-flex min-h-10 items-center rounded-full border border-white/[0.14] bg-white/[0.03] px-4 py-2 text-xs font-medium text-zinc-300 ring-1 ring-white/[0.06] sm:text-sm">
              Pricing
            </a>
            <a href="#product-systems" className="inline-flex min-h-10 items-center rounded-full border border-white/[0.14] bg-white/[0.03] px-4 py-2 text-xs font-medium text-zinc-300 ring-1 ring-white/[0.06] sm:text-sm">
              Product systems
            </a>
            <a href="#request-services" className="inline-flex min-h-10 items-center rounded-full border border-white/[0.14] bg-white/[0.03] px-4 py-2 text-xs font-medium text-zinc-300 ring-1 ring-white/[0.06] sm:text-sm">
              Start project
            </a>
          </div>
          <div className="mt-10 flex max-w-md flex-col gap-3.5 sm:flex-row sm:gap-4">
            <a href={mailto} className="cauris-btn-primary-card">
              Start Your Project
            </a>
            <a href={mailto} className="cauris-btn-tertiary-card">
              Email SCS Nova
            </a>
          </div>
        </ScrollReveal>
      </SectionShell>

      <SectionShell
        id="what-we-do-services"
        aria-labelledby="what-we-do-services-heading"
        className="relative overflow-hidden border-t border-white/[0.08] bg-gradient-to-b from-black/34 via-zinc-950/10 to-black/34 !py-24 md:!py-30 lg:!py-34"
      >
        <ScrollReveal>
          <h2
            id="what-we-do-services-heading"
            className="text-3xl font-semibold tracking-[-0.02em] text-zinc-100 sm:text-4xl md:text-[2.6rem]"
          >
            What We Do
          </h2>
          <p className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-zinc-300 sm:text-lg">
            We build systems that help businesses attract customers, manage inventory, and grow.
          </p>
          <p className="mt-4 max-w-3xl text-pretty text-sm leading-relaxed text-zinc-300 sm:text-base">
            Engagements are scoped directly with the studio. No generic package theater, no copy-paste
            proposals.
          </p>
        </ScrollReveal>
        <div className="mt-12 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {pillars.map((pillar, i) => (
            <ScrollReveal
              key={pillar.title}
              delayMs={60 + i * 70}
              className="rounded-brand border border-white/[0.12] bg-gradient-to-b from-white/[0.09] to-white/[0.022] p-7 shadow-cauris-elevate-sm ring-1 ring-cauris-gold/[0.1] sm:p-8"
            >
              <h3 className="text-lg font-semibold tracking-[-0.02em] text-zinc-50">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:text-[15px]">{pillar.body}</p>
            </ScrollReveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        id="website-pricing"
        aria-labelledby="website-pricing-heading"
        className="relative overflow-hidden border-t border-white/[0.08] bg-gradient-to-b from-black/36 via-zinc-950/10 to-black/36 !py-24 md:!py-32 lg:!py-36"
      >
        <ScrollReveal>
          <p className="cauris-kicker">Pricing</p>
          <h2
            id="website-pricing-heading"
            className="mt-5 max-w-4xl text-pretty text-3xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-4xl md:text-[2.65rem] md:leading-[1.08]"
          >
            Flexible Systems Built Around Your Business
          </h2>
          <p className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-zinc-300 sm:text-lg sm:leading-relaxed">
            We offer one-time builds, fully managed systems, and custom software solutions depending on your
            business needs.
          </p>
        </ScrollReveal>
        <div className="mx-auto mt-14 w-full max-w-7xl px-1 sm:mt-16 sm:px-2">
          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-3 lg:gap-10 lg:py-2">
            {pricingOfferings.map((offering, i) => (
              <PricingOfferingCard key={offering.title} offering={offering} delayMs={80 + i * 70} />
            ))}
          </div>
        </div>
        <ScrollReveal delayMs={320} className="mx-auto mt-14 max-w-3xl px-1 text-center sm:mt-16">
          <p className="text-pretty text-sm font-medium leading-relaxed text-zinc-300 sm:text-base sm:leading-relaxed">
            We structure every project based on your business goals — whether you need a premium website, a
            fully managed system, or custom-built software.
          </p>
        </ScrollReveal>
      </SectionShell>

      <SectionShell
        id="product-systems"
        aria-labelledby="product-systems-heading"
        className="relative overflow-hidden border-t border-white/[0.08] bg-gradient-to-b from-black/36 via-zinc-950/12 to-black/36 !py-24 md:!py-32 lg:!py-36"
      >
        <ScrollReveal>
          <h2 id="product-systems-heading" className="text-3xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-4xl">
            Product Systems
          </h2>
          <p className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-zinc-300 sm:text-lg">
            Productized systems with dedicated pages and demo paths when available.
          </p>
        </ScrollReveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {systems.map((system, i) => (
            <ScrollReveal
              key={system.name}
              delayMs={90 + i * 70}
              className="rounded-brand border border-white/[0.12] bg-gradient-to-b from-white/[0.09] to-white/[0.022] p-7 shadow-cauris-elevate-sm ring-1 ring-cauris-gold/[0.1] sm:p-8"
            >
              <h3 className="text-xl font-semibold tracking-[-0.03em] text-zinc-50">{system.name}</h3>
              <p className="mt-4 text-sm leading-relaxed text-zinc-300 sm:text-[15px]">{system.summary}</p>
              <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-300 sm:text-[11px]">
                {system.note}
              </p>
              <Link
                href={system.href}
                className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-brand-sm border border-white/[0.16] bg-white/[0.03] px-4 text-sm font-medium text-zinc-100 transition-colors hover:border-cauris-gold/35 hover:text-cauris-dawn sm:w-auto"
              >
                {system.cta}
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        id="request-services"
        aria-labelledby="request-services-heading"
        className="relative overflow-hidden border-t border-white/[0.08] bg-gradient-to-b from-black/40 via-zinc-950/12 to-black/44 !py-24 md:!py-30 lg:!py-34"
      >
        <ScrollReveal className="rounded-brand-lg border border-white/[0.12] bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-8 text-center shadow-cauris-elevate-md ring-1 ring-cauris-gold/[0.11] sm:p-10 md:p-12">
          <h2 id="request-services-heading" className="text-3xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-4xl">
            Build your system
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-pretty text-base leading-relaxed text-zinc-300 sm:text-lg">
            Whether you need a website, a branded client system, or a more advanced digital workflow,
            SCS Nova is built to help you move with more clarity and control.
          </p>
          <div className="mx-auto mt-10 flex w-full max-w-md flex-col gap-3.5 sm:flex-row sm:justify-center sm:gap-4">
            <a href={mailto} className="cauris-btn-primary-card">
              Start Your Project
            </a>
            <a href={mailto} className="cauris-btn-tertiary-card">
              Email SCS Nova
            </a>
            <Link href="/demos" className="cauris-btn-tertiary-card">
              View demos
            </Link>
          </div>
        </ScrollReveal>
      </SectionShell>
    </div>
  );
}
