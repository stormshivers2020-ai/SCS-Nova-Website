import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionShell } from "@/components/section-shell";
import { publicImagePath } from "@/lib/publicImagePath";

const services = [
  {
    title: "Website design & build",
    body: "New sites from concept to launch — structure, visuals, and narrative aligned so your company reads clearly online.",
  },
  {
    title: "Brand identity",
    body: "Logo, typography, color, and voice-of-design guidance so every touchpoint feels like one intentional brand.",
  },
  {
    title: "Website updates & refinement",
    body: "Improve what you already have: layout, performance, visuals, and messaging — without starting from zero.",
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
  /** Full-width horizontal layout — reserved for the top-tier engagement. */
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

const addOnMid = Math.ceil(addOns.length / 2);
const addOnsLeft = addOns.slice(0, addOnMid);
const addOnsRight = addOns.slice(addOnMid);

/** Exact filenames from `public/` — do not guess. */
const LMG_FILES = ["L.M.G Site 1.png", "L.M.G Site 2.png", "L.M.G Site 3.png"] as const;
const BLACK_DRAGON_FILES = [
  "Black Dragon Site 1.png",
  "Black Dragon Site 2.png",
  "Black Dragon Site 3.png",
] as const;

type CaseStudyFrame = {
  file: string;
  /** Short curatorial line — appears beside figure index. */
  caption: string;
};

type CaseStudyConfig = {
  client: string;
  /** One-line project descriptor (displayed under client). */
  descriptor: string;
  /** Engagement type — mono, upper. */
  engagement: string;
  /** Trust / context copy — editorial, not salesy. */
  narrative: string;
  /** Three views: primary hero, then two supporting figures. */
  frames: readonly [CaseStudyFrame, CaseStudyFrame, CaseStudyFrame];
  /** `rail-start` = text column left; `rail-end` = text column right (gallery alternation). */
  layout: "rail-start" | "rail-end";
};

const CASE_STUDIES: readonly CaseStudyConfig[] = [
  {
    client: "L.M.G.",
    descriptor: "Web presence — new build",
    engagement: "Design & build · brand-forward layout",
    narrative:
      "A from-scratch site where structure, typography, and first-read clarity carry the brand. Frames from the shipped property.",
    frames: [
      {
        file: LMG_FILES[0],
        caption: "Primary landing — hierarchy, hero, and first impression.",
      },
      {
        file: LMG_FILES[1],
        caption: "Interior view — navigation, rhythm, and page logic.",
      },
      {
        file: LMG_FILES[2],
        caption: "Supporting surface — continuity and detail across sections.",
      },
    ],
    layout: "rail-start",
  },
  {
    client: "Black Dragon Transporters",
    descriptor: "Site refinement & visual pass",
    engagement: "Update · structure, visuals, and polish",
    narrative:
      "A disciplined pass on an existing property: stronger layout, clearer story flow, and a more confident visual frame — without starting over.",
    frames: [
      {
        file: BLACK_DRAGON_FILES[0],
        caption: "Refined entry — hero treatment and primary narrative.",
      },
      {
        file: BLACK_DRAGON_FILES[1],
        caption: "Layout discipline — spacing, contrast, and scan path.",
      },
      {
        file: BLACK_DRAGON_FILES[2],
        caption: "Section continuity — tone and components across views.",
      },
    ],
    layout: "rail-end",
  },
];

function FigureFrame({
  frame,
  figureIndex,
  clientLabel,
  sizes,
  priority,
  aspectClassName,
}: {
  frame: CaseStudyFrame;
  figureIndex: number;
  clientLabel: string;
  sizes: string;
  priority?: boolean;
  aspectClassName?: string;
}) {
  const aspect = aspectClassName ?? "aspect-[16/10]";

  return (
    <figure className="group/fig m-0">
      <div
        className={`relative ${aspect} w-full overflow-hidden rounded-brand border border-white/[0.1] bg-zinc-950/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),inset_0_0_0_1px_rgba(0,0,0,0.35),0_24px_56px_rgba(0,0,0,0.35)] ring-1 ring-white/[0.06] transition-[box-shadow,transform] duration-[var(--cauris-duration-surface)] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none sm:rounded-brand-lg`}
      >
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_70%_55%_at_50%_45%,transparent_40%,rgba(0,0,0,0.22)_100%)]"
          aria-hidden
        />
        <div className="absolute inset-0 z-0 p-3 sm:p-4 md:p-5">
          <div className="relative h-full w-full overflow-hidden rounded-md bg-black/40 ring-1 ring-inset ring-white/[0.07]">
            <Image
              src={publicImagePath(frame.file)}
              alt={`${clientLabel} — ${frame.caption}`}
              fill
              sizes={sizes}
              priority={priority}
              className="object-contain object-center p-1.5 brightness-[1.04] contrast-[1.04] transition-transform duration-[var(--cauris-duration-surface)] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none sm:p-2 md:p-2.5 group-hover/fig:scale-[1.012] motion-reduce:group-hover/fig:scale-100"
            />
          </div>
        </div>
      </div>
      <figcaption className="mt-4 flex flex-col gap-2 border-t border-white/[0.08] pt-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <span className="shrink-0 font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-cauris-flame/75 sm:text-[11px]">
          Fig. {String(figureIndex).padStart(2, "0")}
        </span>
        <p className="max-w-xl text-pretty text-sm leading-relaxed text-zinc-400 sm:text-[15px] sm:leading-relaxed">
          {frame.caption}
        </p>
      </figcaption>
    </figure>
  );
}

function CaseStudyPlate({ study, delayMs }: { study: CaseStudyConfig; delayMs: number }) {
  const [hero, detailA, detailB] = study.frames;
  const textRail = (
    <header
      className={`flex flex-col justify-between gap-10 border-white/[0.09] pb-10 lg:pb-0 ${
        study.layout === "rail-start"
          ? "border-b lg:col-span-4 lg:border-b-0 lg:border-r lg:pr-10 xl:pr-12"
          : "border-b lg:col-span-4 lg:order-2 lg:border-b-0 lg:border-l lg:pl-10 xl:pl-12"
      }`}
    >
      <div>
        <p className="font-mono text-[10px] font-medium uppercase tracking-[0.26em] text-zinc-500 sm:text-[11px]">
          Case study
        </p>
        <h3 className="mt-4 text-balance text-2xl font-semibold tracking-[-0.03em] text-zinc-50 sm:text-3xl">
          {study.client}
        </h3>
        <p className="mt-2 text-sm font-medium text-zinc-400 sm:text-[15px]">{study.descriptor}</p>
        <p className="mt-5 font-mono text-[10px] font-medium uppercase leading-relaxed tracking-[0.18em] text-cauris-flame/70 sm:text-[11px] sm:tracking-[0.2em]">
          {study.engagement}
        </p>
        <p className="mt-8 max-w-md text-pretty text-sm leading-relaxed text-zinc-500 sm:text-[15px] sm:leading-relaxed">
          {study.narrative}
        </p>
      </div>
      <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-600 sm:text-[11px]">
        SCS Nova · Representative views · Shipped work
      </p>
    </header>
  );

  const gallery = (
    <div
      className={`flex flex-col gap-10 lg:col-span-8 lg:gap-12 ${
        study.layout === "rail-end" ? "lg:order-1" : ""
      }`}
    >
      <FigureFrame
        frame={hero}
        figureIndex={1}
        clientLabel={study.client}
        sizes="(max-width: 1024px) 100vw, 58vw"
        priority={study.layout === "rail-start"}
      />
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8 lg:gap-10">
        <FigureFrame
          frame={detailA}
          figureIndex={2}
          clientLabel={study.client}
          sizes="(max-width: 768px) 100vw, 28vw"
        />
        <FigureFrame
          frame={detailB}
          figureIndex={3}
          clientLabel={study.client}
          sizes="(max-width: 768px) 100vw, 28vw"
        />
      </div>
    </div>
  );

  return (
    <ScrollReveal delayMs={delayMs}>
      <article className="relative overflow-hidden rounded-brand-lg border border-white/[0.12] bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-white/[0.012] p-5 shadow-cauris-elevate-md ring-1 ring-cauris-gold/[0.1] backdrop-blur-md sm:p-9 md:p-10 lg:p-11">
        <div
          className="pointer-events-none absolute -right-32 top-0 h-72 w-72 rounded-full bg-cauris-gold/[0.05] blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.14] to-transparent"
          aria-hidden
        />
        <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-x-10 xl:gap-x-12">
          {textRail}
          {gallery}
        </div>
      </article>
    </ScrollReveal>
  );
}

const TIER_ROMAN = ["I", "II", "III", "IV"] as const;

function PricingTierCard({
  tier,
  delayMs,
  tierIndex,
  gridClassName,
}: {
  tier: PricingTier;
  delayMs: number;
  tierIndex: number;
  gridClassName?: string;
}) {
  const roman = TIER_ROMAN[tierIndex] ?? String(tierIndex + 1);
  const isFlagship = tier.flagship === true;

  const shellBase =
    "relative overflow-hidden rounded-brand border bg-gradient-to-b shadow-cauris-elevate-sm ring-1 backdrop-blur-md transition-[border-color,box-shadow,transform] duration-[var(--cauris-duration-surface)] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:hover:translate-y-0";
  const idle =
    "border-white/[0.12] from-white/[0.07] to-white/[0.018] ring-white/[0.06] hover:-translate-y-0.5 hover:border-white/[0.18] hover:shadow-cauris-elevate-md hover:ring-white/[0.09]";
  const spotlight =
    "border-cauris-gold/28 from-white/[0.11] to-white/[0.03] ring-cauris-gold/[0.16] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_32px_64px_rgba(0,0,0,0.32)] hover:-translate-y-0.5 hover:border-cauris-gold/35 hover:shadow-cauris-glow-floor motion-reduce:hover:translate-y-0";

  const padding = tier.featured
    ? "p-7 sm:p-9 lg:p-10"
    : isFlagship
      ? "p-7 sm:p-9 lg:p-10 xl:p-12"
      : "p-6 sm:p-8";

  const scopeHeading = (
    <p className="font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-zinc-500 sm:text-[11px]">
      Included scope
    </p>
  );

  const featureList = (
    <ul className="mt-4 flex flex-col gap-3 sm:gap-3.5">
      {tier.features.map((f) => (
        <li
          key={f}
          className="flex gap-3 border-l border-cauris-gold/[0.14] pl-4 text-sm leading-relaxed text-zinc-200 sm:text-[15px]"
        >
          <span>{f}</span>
        </li>
      ))}
    </ul>
  );

  const investmentBlock = (
    <div className={tier.featured || isFlagship ? "mt-8" : "mt-7"}>
      <p className="font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-500 sm:text-[11px]">
        Typical investment
      </p>
      <p
        className={
          tier.featured
            ? "mt-2 text-[1.65rem] font-medium tracking-[-0.03em] text-zinc-50 sm:text-[1.85rem]"
            : isFlagship
              ? "mt-2 text-[1.5rem] font-medium tracking-[-0.03em] text-zinc-50 sm:text-[1.7rem]"
              : "mt-2 text-xl font-medium tracking-[-0.02em] text-zinc-50 sm:text-2xl"
        }
      >
        {tier.price}
      </p>
    </div>
  );

  const metaBlock = (
    <div className={isFlagship ? "mt-8 lg:mt-10" : "mt-auto pt-8"}>
      {tier.turnaround ? (
        <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500 sm:text-[11px]">
          Timeline · <span className="text-zinc-300">{tier.turnaround}</span>
        </p>
      ) : null}
      {tier.footnote ? (
        <p className="mt-3 max-w-prose text-xs leading-relaxed text-zinc-400 sm:text-[13px]">
          {tier.footnote}
        </p>
      ) : null}
    </div>
  );

  return (
    <ScrollReveal
      delayMs={delayMs}
      className={`${gridClassName ?? ""} h-full`.trim()}
    >
      <div
        className={`${shellBase} ${padding} ${tier.featured ? spotlight : idle} ${
          isFlagship ? "flex h-full flex-col lg:flex-row lg:items-stretch lg:gap-0" : "flex h-full flex-col"
        }`}
      >
        {tier.featured ? (
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cauris-gold/50 to-transparent"
            aria-hidden
          />
        ) : isFlagship ? (
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent"
            aria-hidden
          />
        ) : null}
        {tier.featured ? (
          <div
            className="pointer-events-none absolute -right-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-cauris-gold/[0.06] blur-3xl"
            aria-hidden
          />
        ) : null}
        {isFlagship ? (
          <div
            className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-cauris-flame/[0.05] blur-3xl"
            aria-hidden
          />
        ) : null}

        {isFlagship ? (
          <>
            <div className="relative flex flex-1 flex-col lg:w-[min(100%,26rem)] lg:shrink-0 lg:pr-10 xl:pr-14">
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.26em] text-cauris-flame/70 sm:text-[11px]">
                Engagement {roman}
              </p>
              <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-zinc-50 sm:text-2xl">
                {tier.name}
              </h3>
              <p className="mt-2 text-sm font-medium leading-snug text-zinc-400 sm:text-[15px]">
                {tier.tagline}
              </p>
              {investmentBlock}
              <p className="mt-6 text-sm leading-relaxed text-zinc-500 sm:text-[15px]">
                <span className="font-medium text-zinc-400">Best suited for · </span>
                {tier.bestFor}
              </p>
              {metaBlock}
            </div>
            <div className="relative mt-10 border-t border-white/[0.09] pt-10 lg:mt-0 lg:flex-1 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-3 xl:pl-14">
              {scopeHeading}
              <ul
                aria-label={`${tier.name} included scope`}
                className="mt-4 grid grid-cols-1 gap-3 sm:gap-3.5 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-3"
              >
                {tier.features.map((f) => (
                  <li
                    key={f}
                    className="border-l border-cauris-gold/[0.14] pl-4 text-sm leading-relaxed text-zinc-200 sm:text-[15px]"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <div className="relative flex flex-1 flex-col">
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.26em] text-cauris-flame/65 sm:text-[11px]">
              Engagement {roman}
            </p>
            <h3
              className={
                tier.featured
                  ? "mt-4 text-xl font-semibold tracking-[-0.03em] text-zinc-50 sm:text-2xl"
                  : "mt-4 text-lg font-semibold tracking-[-0.02em] text-zinc-50 sm:text-xl"
              }
            >
              {tier.name}
            </h3>
            <p className="mt-2 text-sm font-medium leading-snug text-zinc-400 sm:text-[15px]">
              {tier.tagline}
            </p>
            {investmentBlock}
            <p className="mt-5 text-sm leading-relaxed text-zinc-500 sm:text-[15px]">
              <span className="font-medium text-zinc-400">Best suited for · </span>
              {tier.bestFor}
            </p>
            <div className="mt-8 border-t border-white/[0.09] pt-7">
              {scopeHeading}
              {featureList}
            </div>
            {metaBlock}
          </div>
        )}
      </div>
    </ScrollReveal>
  );
}

export function ServicesSection() {
  return (
    <SectionShell
      id="services"
      aria-labelledby="services-heading"
      className="relative overflow-hidden border-t border-white/[0.08] bg-gradient-to-b from-black/38 via-zinc-950/10 to-black/38 !py-28 md:!py-36 lg:!py-40"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_45%_at_20%_10%,rgba(232,148,58,0.085),transparent_55%)]"
        aria-hidden
      />

      <div className="relative">
        <ScrollReveal>
          <p className="cauris-kicker">
            Services
          </p>
          <h2
            id="services-heading"
            className="mt-5 max-w-4xl text-pretty text-3xl font-semibold tracking-[-0.02em] text-zinc-100 sm:mt-6 sm:text-4xl md:text-[2.85rem] md:leading-[1.06]"
          >
            Digital presence, brand identity, and{" "}
            <span className="text-gradient-gold">website refinement.</span>
          </h2>
          <p className="mt-10 max-w-3xl text-pretty text-base font-medium leading-relaxed text-zinc-200 sm:mt-11 sm:text-lg sm:leading-relaxed">
            SCS Nova is the studio: new sites, identity programs, inventory and booking systems, and
            tight updates to what you already run. Engagements are scoped in writing — clearer
            presentation, less noise, no agency theater.
          </p>
          <div className="mt-10 sm:mt-11">
            <Link
              href="/#scs-nova"
              className="cauris-btn-primary inline-flex w-full min-h-12 items-center justify-center sm:w-auto sm:min-w-[220px]"
            >
              Build My System
            </Link>
            <p className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-zinc-500">
              Tell us what you&apos;re building — we&apos;ll reply with a clear next step.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-16 sm:mt-20">
          <ScrollReveal delayMs={20}>
            <p className="cauris-kicker text-zinc-500">Selected client work</p>
            <h3 className="mt-5 max-w-3xl text-balance text-2xl font-semibold tracking-[-0.03em] text-zinc-100 sm:mt-6 sm:text-3xl md:text-[2.15rem] md:leading-[1.08]">
              A small gallery —{" "}
              <span className="text-gradient-gold">real builds,</span>{" "}
              framed with intention.
            </h3>
            <p className="mt-6 max-w-2xl text-pretty text-sm font-medium leading-relaxed text-zinc-400 sm:mt-7 sm:text-base sm:leading-relaxed">
              Two real engagements: a hero frame each, then supporting views — how we document shipped
              work internally.
            </p>
          </ScrollReveal>

          <div className="mt-12 flex flex-col gap-14 sm:mt-14 sm:gap-16 lg:mt-16 lg:gap-20">
            {CASE_STUDIES.map((study, i) => (
              <CaseStudyPlate key={study.client} study={study} delayMs={40 + i * 100} />
            ))}
          </div>
        </div>

        <div className="mt-20 sm:mt-24">
          <ScrollReveal delayMs={160}>
            <p className="cauris-kicker text-zinc-500">Capabilities</p>
            <p className="mt-5 max-w-2xl text-pretty text-sm font-medium leading-relaxed text-zinc-400 sm:text-base">
              Three ways we typically partner — each scoped as a private engagement, not a checkout
              flow.
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-12 grid gap-6 sm:mt-14 md:grid-cols-3 md:gap-7">
          {services.map((s, i) => (
            <ScrollReveal
              key={s.title}
              delayMs={200 + i * 80}
              className="flex flex-col rounded-brand border border-white/[0.11] bg-gradient-to-b from-white/[0.08] to-white/[0.022] p-7 shadow-cauris-elevate-sm ring-1 ring-cauris-gold/[0.1] backdrop-blur-md transition-[border-color,box-shadow,transform] duration-[var(--cauris-duration-surface)] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-cauris-gold/20 hover:shadow-[0_0_48px_rgba(244,176,66,0.07)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-8"
            >
              <div className="h-px w-12 bg-gradient-to-r from-cauris-flame/60 to-transparent" />
              <h3 className="mt-6 text-lg font-semibold tracking-[-0.02em] text-zinc-50 sm:text-xl">
                {s.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-zinc-500 sm:text-[15px] sm:leading-relaxed">
                {s.body}
              </p>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-24 border-t border-white/[0.09] pt-20 sm:mt-28 sm:pt-24 md:mt-32 md:pt-28">
          <ScrollReveal delayMs={60}>
            <p className="cauris-kicker text-zinc-500">Engagement &amp; investment</p>
            <h3 className="mt-5 max-w-3xl text-pretty text-2xl font-semibold tracking-[-0.03em] text-zinc-100 sm:mt-6 sm:text-3xl md:text-[2.2rem] md:leading-[1.08]">
              Website &amp; brand —{" "}
              <span className="text-gradient-gold">scoped like a studio,</span>{" "}
              priced with clarity.
            </h3>
            <p className="mt-7 max-w-3xl text-pretty text-base font-medium leading-relaxed text-zinc-300 sm:mt-8 sm:text-lg sm:leading-relaxed">
              Ranges match work we have actually shipped — from fast launches to full custom systems. You
              deal with the studio directly; every proposal is written for the job, not copied from a
              menu.
            </p>
            <p className="mt-6 max-w-3xl font-mono text-[10px] font-medium uppercase leading-relaxed tracking-[0.22em] text-zinc-500 sm:text-[11px]">
              Expertise · design, front-end build, brand systems, and refinement — end to end, under one
              roof.
            </p>
          </ScrollReveal>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:mt-16 lg:grid-cols-12 lg:gap-5 xl:gap-6">
            {pricingTiers.map((tier, i) => {
              const gridClassName = tier.flagship
                ? "lg:col-span-12"
                : i === 0
                  ? "lg:col-span-3"
                  : i === 1
                    ? "lg:col-span-5"
                    : "lg:col-span-4";
              return (
                <PricingTierCard
                  key={tier.name}
                  tier={tier}
                  tierIndex={i}
                  delayMs={100 + i * 70}
                  gridClassName={gridClassName}
                />
              );
            })}
          </div>

          <ScrollReveal delayMs={420} className="mt-16 sm:mt-20">
            <div className="rounded-brand-lg border border-white/[0.12] bg-gradient-to-b from-white/[0.06] to-white/[0.015] p-8 shadow-cauris-elevate-md ring-1 ring-cauris-gold/[0.1] backdrop-blur-md sm:p-10 md:p-11">
              <div className="flex flex-col gap-3 border-b border-white/[0.08] pb-8 sm:flex-row sm:items-end sm:justify-between sm:pb-9">
                <div>
                  <p className="font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-zinc-500 sm:text-[11px]">
                    Optional extensions
                  </p>
                  <h4 className="mt-3 text-xl font-semibold tracking-[-0.02em] text-zinc-50 sm:text-2xl">
                    Enhancements
                  </h4>
                </div>
                <p className="max-w-md text-sm leading-relaxed text-zinc-500 sm:text-[15px]">
                  Quoted alongside your engagement when they strengthen the outcome — never bundled as
                  anonymous upsells.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-x-14 lg:gap-x-20">
                {[addOnsLeft, addOnsRight].map((column, ci) => (
                  <ul key={ci} className="divide-y divide-white/[0.07]">
                    {column.map((a) => (
                      <li
                        key={a.label}
                        className="flex flex-row items-baseline justify-between gap-6 py-4"
                      >
                        <span className="text-sm font-medium text-zinc-200 sm:text-[15px]">{a.label}</span>
                        <span className="shrink-0 font-mono text-xs tabular-nums tracking-wide text-cauris-flame/90 sm:text-[13px]">
                          {a.range}
                        </span>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delayMs={340} className="mt-12 md:mt-14">
          <p className="max-w-2xl text-pretty text-base font-medium leading-relaxed text-zinc-300 sm:text-lg">
            Ready to move?{" "}
            <Link
              href="/#scs-nova"
              className="text-cauris-dawn underline decoration-cauris-gold/30 underline-offset-[5px] transition-colors duration-[var(--cauris-duration-hover)] ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-zinc-50 hover:decoration-cauris-flame/55"
            >
              Start Your Project
            </Link>
            — one clear subject line under SCS Nova, a human reply.
          </p>
        </ScrollReveal>
      </div>
    </SectionShell>
  );
}
