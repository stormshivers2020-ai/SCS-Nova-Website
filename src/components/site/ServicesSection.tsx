import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionShell } from "@/components/section-shell";

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

/** Exact filenames from `public/` — do not guess. */
const LMG_FILES = ["L.M.G Site 1.png", "L.M.G Site 2.png", "L.M.G Site 3.png"] as const;
const BLACK_DRAGON_FILES = [
  "Black Dragon Site 1.png",
  "Black Dragon Site 2.png",
  "Black Dragon Site 3.png",
] as const;

function imageSrc(file: string) {
  return `/${encodeURIComponent(file)}`;
}

function ShowcaseGroup({
  title,
  microLabels,
  files,
  baseDelayMs,
}: {
  title: string;
  microLabels: readonly string[];
  files: readonly [string, string, string];
  baseDelayMs: number;
}) {
  const [featured, ...supporting] = files;

  return (
    <ScrollReveal delayMs={baseDelayMs}>
      <div className="rounded-2xl border border-white/[0.1] bg-gradient-to-b from-white/[0.035] to-white/[0.008] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_28px_56px_rgba(0,0,0,0.42)] ring-1 ring-cauris-gold/[0.08] sm:p-6 md:p-7">
        <h3 className="text-lg font-semibold tracking-tight text-zinc-50 sm:text-xl">{title}</h3>
        <p className="mt-3 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-cauris-flame/75 sm:text-[11px]">
          {microLabels.join(" · ")}
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:gap-4">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/[0.08] bg-zinc-950/55">
            <Image
              src={imageSrc(featured)}
              alt={`${title} — primary page preview`}
              fill
              sizes="(max-width: 768px) 100vw, 90vw"
              className="object-contain object-center p-3 brightness-[1.05] contrast-[1.03] sm:p-4 md:p-5"
              priority={false}
            />
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            {supporting.map((file, i) => (
              <div
                key={file}
                className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/[0.08] bg-zinc-950/55"
              >
                <Image
                  src={imageSrc(file)}
                  alt={`${title} — supporting view ${i + 2}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 45vw"
                  className="object-contain object-center p-2 brightness-[1.05] contrast-[1.03] sm:p-3 md:p-4"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

function PricingTierCard({ tier, delayMs }: { tier: PricingTier; delayMs: number }) {
  const shell =
    "flex h-full flex-col rounded-2xl border bg-gradient-to-b p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_24px_48px_rgba(0,0,0,0.38)] transition-[border-color,box-shadow] duration-500 sm:p-7";
  const idle =
    "border-white/[0.1] from-white/[0.035] to-white/[0.01] ring-1 ring-white/[0.04] hover:border-white/[0.14] hover:ring-white/[0.06]";
  const spotlight =
    "border-cauris-gold/25 from-white/[0.05] to-white/[0.015] ring-1 ring-cauris-gold/[0.12] shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_28px_56px_rgba(0,0,0,0.45)]";

  return (
    <ScrollReveal
      delayMs={delayMs}
      className={`relative overflow-hidden ${shell} ${tier.featured ? spotlight : idle}`}
    >
      {tier.featured ? (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cauris-gold/45 to-transparent"
          aria-hidden
        />
      ) : null}
      <div className="flex flex-1 flex-col">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-zinc-50 sm:text-xl">{tier.name}</h3>
          <p className="mt-1 text-sm font-medium text-zinc-400">{tier.tagline}</p>
        </div>

        <p className="mt-6 text-2xl font-semibold tracking-tight text-zinc-50 sm:text-[1.65rem]">
          {tier.price}
        </p>

        <p className="mt-4 text-sm leading-relaxed text-zinc-300 sm:text-[15px]">{tier.bestFor}</p>

        <ul className="mt-6 flex flex-col gap-2.5 border-t border-white/[0.08] pt-6">
          {tier.features.map((f) => (
            <li key={f} className="flex gap-2.5 text-sm leading-snug text-zinc-200">
              <span
                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cauris-flame/55"
                aria-hidden
              />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-8">
          {tier.turnaround ? (
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500 sm:text-[11px]">
              Turnaround · <span className="text-zinc-300">{tier.turnaround}</span>
            </p>
          ) : null}
          {tier.footnote ? (
            <p className="mt-3 text-xs leading-relaxed text-zinc-400 sm:text-[13px]">{tier.footnote}</p>
          ) : null}
        </div>
      </div>
    </ScrollReveal>
  );
}

export function ServicesSection() {
  return (
    <SectionShell
      id="services"
      aria-labelledby="services-heading"
      className="relative border-t border-white/[0.06] bg-gradient-to-b from-black via-zinc-950/32 to-black !py-24 md:!py-32 lg:!py-36"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_45%_at_20%_10%,rgba(232,148,58,0.06),transparent_55%)]"
        aria-hidden
      />

      <div className="relative">
        <ScrollReveal>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.26em] text-zinc-500 sm:text-sm sm:tracking-[0.22em]">
            Services
          </p>
          <h2
            id="services-heading"
            className="mt-4 max-w-4xl text-pretty text-3xl font-semibold tracking-tight text-zinc-100 sm:mt-5 sm:text-4xl md:text-[2.5rem] md:leading-tight"
          >
            Digital presence, brand identity, and{" "}
            <span className="text-gradient-gold">website refinement.</span>
          </h2>
          <p className="mt-8 max-w-3xl text-pretty text-base font-medium leading-relaxed text-zinc-300 sm:text-lg sm:leading-relaxed">
            SCS Nova partners with teams on the work clients actually need: new websites, brand
            identity programs, and careful updates to existing sites. Every engagement is scoped for
            clarity — sharper presentation, stronger trust, less noise.
          </p>
        </ScrollReveal>

        <div className="mt-14 flex flex-col gap-10 sm:mt-16 sm:gap-12 md:gap-14">
          <ShowcaseGroup
            title="L.M.G. — web presence"
            microLabels={["New build", "Brand-forward layout"]}
            files={LMG_FILES}
            baseDelayMs={40}
          />
          <ShowcaseGroup
            title="Black Dragon Transporters — refinement"
            microLabels={["Site update", "Visual & structure pass"]}
            files={BLACK_DRAGON_FILES}
            baseDelayMs={120}
          />
        </div>

        <div className="mt-14 grid gap-5 sm:mt-16 md:grid-cols-3 md:gap-6">
          {services.map((s, i) => (
            <ScrollReveal
              key={s.title}
              delayMs={200 + i * 80}
              className="flex flex-col rounded-2xl border border-white/[0.1] bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_24px_48px_rgba(0,0,0,0.38)] ring-1 ring-cauris-gold/[0.08] transition-[border-color,box-shadow] duration-500 hover:border-cauris-gold/18 hover:shadow-[0_0_40px_rgba(244,176,66,0.05)] sm:p-8"
            >
              <div className="h-px w-12 bg-gradient-to-r from-cauris-flame/60 to-transparent" />
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-zinc-50 sm:text-xl">
                {s.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-zinc-500 sm:text-[15px] sm:leading-relaxed">
                {s.body}
              </p>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-20 border-t border-white/[0.06] pt-16 sm:mt-24 sm:pt-20 md:mt-28 md:pt-24">
          <ScrollReveal delayMs={60}>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.26em] text-zinc-500 sm:text-sm sm:tracking-[0.22em]">
              Pricing
            </p>
            <h3 className="mt-4 max-w-3xl text-pretty text-2xl font-semibold tracking-tight text-zinc-100 sm:mt-5 sm:text-3xl md:text-[2rem] md:leading-tight">
              Website &amp; Brand Development
            </h3>
            <p className="mt-6 max-w-3xl text-pretty text-base font-medium leading-relaxed text-zinc-300 sm:text-lg sm:leading-relaxed">
              SCS Nova builds websites and brand systems for companies at different stages — from fast
              launch sites to fully custom systems.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
            {pricingTiers.map((tier, i) => (
              <PricingTierCard key={tier.name} tier={tier} delayMs={100 + i * 70} />
            ))}
          </div>

          <ScrollReveal delayMs={420} className="mt-16 sm:mt-20">
            <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.03] to-white/[0.008] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_20px_48px_rgba(0,0,0,0.35)] sm:p-8 md:p-9">
              <h4 className="text-lg font-semibold tracking-tight text-zinc-50 sm:text-xl">Add-Ons</h4>
              <ul className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
                {addOns.map((a) => (
                  <li
                    key={a.label}
                    className="flex flex-col gap-1 border-b border-white/[0.06] pb-5 last:border-b-0 sm:border-b-0 sm:pb-0"
                  >
                    <span className="text-sm font-medium text-zinc-200">{a.label}</span>
                    <span className="font-mono text-xs tracking-wide text-cauris-flame/85 sm:text-[13px]">
                      {a.range}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delayMs={340} className="mt-12 md:mt-14">
          <p className="max-w-2xl text-pretty text-base font-medium leading-relaxed text-zinc-300 sm:text-lg">
            If you need a new site, a brand reset, or a disciplined pass on what you already ship —
            start with an email. We reply to real inquiries directly.
          </p>
        </ScrollReveal>
      </div>
    </SectionShell>
  );
}
