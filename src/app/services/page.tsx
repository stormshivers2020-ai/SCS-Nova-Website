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

type PricingTier = {
  name: string;
  tagline: string;
  price: string;
  bestFor: string;
  features: readonly string[];
  turnaround: string | null;
  featured: boolean;
  footnote: string | null;
  flagship?: boolean;
};

const pricingTiers: readonly PricingTier[] = [
  {
    name: "Starter",
    tagline: "Get Online Fast",
    price: "$300 – $600",
    bestFor: "Small businesses and personal brands needing a clean online presence.",
    features: [
      "1–3 pages (Home, About, Contact)",
      "Mobile responsive",
      "Clean modern design",
      "Contact form",
      "Deployed live (Vercel)",
    ],
    turnaround: "1–3 days",
    featured: false,
    footnote: null,
  },
  {
    name: "Standard",
    tagline: "Professional Presence",
    price: "$800 – $1,500",
    bestFor: "Established businesses and service providers.",
    features: [
      "4–7 pages",
      "Custom layout (non-template)",
      "Strong hero sections",
      "Brand consistency (colors, fonts, tone)",
      "SEO basics",
      "Performance optimized",
    ],
    turnaround: "3–7 days",
    featured: true,
    footnote: null,
  },
  {
    name: "Premium",
    tagline: "High Impact",
    price: "$2,000 – $4,000",
    bestFor: "Brands that want a strong visual presence.",
    features: [
      "Fully custom design",
      "Cinematic UI / motion effects",
      "Advanced sections",
      "Multiple hero layouts",
      "Conversion-focused structure",
      "Optional product/apparel integration",
    ],
    turnaround: "1–2 weeks",
    featured: false,
    footnote: null,
  },
  {
    name: "Elite",
    tagline: "System Build",
    price: "$5,000 – $10,000+",
    bestFor: "Businesses that want systems, not just websites.",
    features: [
      "Full custom build",
      "Backend logic (if needed)",
      "Client dashboards / tools",
      "Demo or AI integration (Cauris-ready)",
      "Workflow/system design",
    ],
    turnaround: null,
    featured: false,
    footnote: "Custom scoped depending on project",
    flagship: true,
  },
];

const addOns = [
  { label: "Logo Design", range: "$100–$300" },
  { label: "Copywriting", range: "$100–$400" },
  { label: "SEO Setup", range: "$150–$500" },
  { label: "Monthly Maintenance", range: "$50–$150/mo" },
  { label: "Hosting / Deployment Setup", range: "$50–$100" },
  { label: "Apparel Integration", range: "$200–$500" },
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
      "Multi-client operating system for managing work, clients, files, workflows, messages, and daily control.",
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

function PricingTierCard({
  tier,
  delayMs,
}: {
  tier: PricingTier;
  delayMs: number;
}) {
  return (
    <ScrollReveal
      delayMs={delayMs}
      className={`h-full rounded-brand border bg-gradient-to-b p-6 shadow-cauris-elevate-sm ring-1 backdrop-blur-sm sm:p-8 ${
        tier.featured
          ? "border-cauris-gold/28 from-white/[0.16] to-white/[0.08] ring-cauris-gold/[0.2]"
          : "border-white/[0.14] from-white/[0.12] to-white/[0.06] ring-white/[0.08]"
      }`}
    >
      <h3 className="text-balance text-[1.65rem] font-semibold leading-tight tracking-[-0.03em] text-zinc-50 sm:text-[1.75rem]">
        {tier.name}
      </h3>
      <p className="mt-2 text-sm font-medium leading-relaxed text-zinc-300 sm:text-base">{tier.tagline}</p>
      <p className="mt-6 text-[2rem] font-semibold leading-none tracking-[-0.03em] text-zinc-100 sm:text-[2.1rem]">
        {tier.price}
      </p>
      <p className="mt-5 text-sm leading-relaxed text-zinc-300 sm:text-[15px] sm:leading-relaxed">
        <span className="text-zinc-100/90">Best for · </span>
        {tier.bestFor}
      </p>
      <ul className="mt-8 flex flex-col gap-3 border-t border-white/[0.12] pt-7">
        {tier.features.map((f) => (
          <li key={f} className="flex gap-3 text-sm leading-relaxed text-zinc-100 sm:text-[15px] sm:leading-relaxed">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cauris-flame/65" aria-hidden />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8 border-t border-white/[0.12] pt-6">
        {tier.turnaround ? (
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-400 sm:text-[11px]">
            Timeline · <span className="text-zinc-200">{tier.turnaround}</span>
          </p>
        ) : null}
        {tier.footnote ? (
          <p className="mt-3 text-xs leading-relaxed text-zinc-300 sm:text-[13px]">{tier.footnote}</p>
        ) : null}
        <a
          href="#request-services"
          className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-brand-sm border border-cauris-gold/25 bg-cauris-flame/[0.06] px-4 text-sm font-medium text-zinc-100 transition-colors hover:border-cauris-gold/40 hover:text-cauris-dawn sm:w-auto"
        >
          Choose this tier
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
          <p className="mt-5 max-w-3xl text-pretty text-sm leading-relaxed text-zinc-400 sm:text-base">
            This page is the full offer architecture: capabilities, engagement tiers, productized
            systems, and clear next steps.
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            <a href="#website-pricing" className="inline-flex min-h-10 items-center rounded-full border border-white/[0.14] bg-white/[0.03] px-4 py-2 text-xs font-medium text-zinc-300 ring-1 ring-white/[0.06] sm:text-sm">
              Website pricing
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
          <p className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg">
            We build systems that help businesses attract customers, manage inventory, and grow.
          </p>
          <p className="mt-4 max-w-3xl text-pretty text-sm leading-relaxed text-zinc-500 sm:text-base">
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
              <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-[15px]">{pillar.body}</p>
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
          <p className="cauris-kicker text-zinc-500">Website pricing</p>
          <h2
            id="website-pricing-heading"
            className="mt-5 max-w-4xl text-3xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-4xl md:text-[2.7rem]"
          >
            Studio pricing architecture
          </h2>
        </ScrollReveal>
        <div className="mx-auto mt-12 w-full max-w-7xl px-1 sm:mt-14 sm:px-2">
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {pricingTiers.map((tier, i) => (
              <PricingTierCard key={tier.name} tier={tier} delayMs={80 + i * 70} />
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell
        id="service-addons"
        aria-labelledby="service-addons-heading"
        className="relative overflow-hidden border-t border-white/[0.08] bg-gradient-to-b from-black/34 via-zinc-950/10 to-black/34 !py-24 md:!py-30 lg:!py-34"
      >
        <ScrollReveal>
          <h2 id="service-addons-heading" className="text-3xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-4xl">
            Add-ons
          </h2>
        </ScrollReveal>
        <ScrollReveal delayMs={80} className="mt-10 rounded-brand-lg border border-white/[0.12] bg-gradient-to-b from-white/[0.06] to-white/[0.015] p-7 ring-1 ring-cauris-gold/[0.1] sm:p-10">
          <ul className="divide-y divide-white/[0.08]">
            {addOns.map((addOn) => (
              <li key={addOn.label} className="flex items-baseline justify-between gap-6 py-4">
                <span className="text-sm font-medium text-zinc-200 sm:text-[15px]">{addOn.label}</span>
                <span className="font-mono text-xs tracking-wide text-cauris-flame/90 sm:text-[13px]">
                  {addOn.range}
                </span>
              </li>
            ))}
          </ul>
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
          <p className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg">
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
              <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500 sm:text-[11px]">
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
