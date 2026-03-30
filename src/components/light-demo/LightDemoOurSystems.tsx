import Link from "next/link";
import { LightDemoContainer } from "./LightDemoContainer";
import { LightDemoSection } from "./LightDemoSection";

const baseCard =
  "flex h-full min-h-0 flex-col rounded-2xl border bg-white p-8 sm:p-9 lg:p-10";

const quietCard = `${baseCard} border-neutral-100 shadow-sm`;

const featuredCard = `${baseCard} relative border-blue-200/90 shadow-md shadow-blue-900/5 ring-1 ring-blue-100/60 lg:z-[1] lg:-my-1 lg:scale-[1.02]`;

const btnPrimary =
  "mt-10 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-blue-600 px-6 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 lg:mt-auto";

const btnSecondary =
  "mt-10 inline-flex min-h-12 w-full items-center justify-center rounded-lg border border-neutral-200 bg-white px-6 text-sm font-semibold text-neutral-800 shadow-sm transition-colors hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 lg:mt-auto";

const tiers = [
  {
    title: "Starter Website",
    description: "A focused online presence for businesses getting started or refreshing essentials.",
    features: [
      "1–3 core pages tailored to your offer",
      "Mobile-friendly layout and clear calls-to-action",
      "Contact path and deployment you can own",
    ],
    price: "Starting at $300",
    cta: "Discuss Starter",
    featured: false,
  },
  {
    title: "Growth System",
    description: "Stronger structure for teams that need credibility, clarity, and room to expand.",
    features: [
      "Deeper site architecture (4–7 pages or equivalent)",
      "Brand-aligned visuals, typography, and tone",
      "Performance-minded front end and SEO basics",
      "Conversion-oriented section flow",
    ],
    price: "Starting at $2,000",
    cta: "Explore Growth",
    featured: true,
  },
  {
    title: "Full Business System",
    description: "Custom build for operators who want tools—not just pages—behind their brand.",
    features: [
      "Fully scoped UX and bespoke layout",
      "Backend or workflow logic where the job requires it",
      "Dashboards, integrations, or demos when in scope",
      "Ongoing alignment through delivery and launch",
    ],
    price: "Starting at $5,000",
    cta: "Plan a Full Build",
    featured: false,
  },
] as const;

export function LightDemoOurSystems() {
  return (
    <LightDemoSection
      id="our-systems"
      aria-labelledby="ld-our-systems-heading"
      className="bg-white"
    >
      <LightDemoContainer>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="ld-our-systems-heading"
            className="text-3xl font-semibold tracking-[-0.02em] text-neutral-900 sm:text-4xl"
          >
            Our Systems
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-neutral-600 sm:text-lg">
            Three clear paths—pick what matches your stage. Every engagement is scoped in writing
            before we build.
          </p>
        </div>

        <ul className="mx-auto mt-14 grid max-w-6xl list-none gap-8 lg:mt-20 lg:grid-cols-3 lg:items-stretch lg:gap-6 xl:gap-8">
          {tiers.map((tier) => (
            <li key={tier.title} className="flex min-h-0 lg:min-h-0">
              <article
                className={tier.featured ? featuredCard : quietCard}
                aria-label={`${tier.title}${tier.featured ? ", recommended option" : ""}`}
              >
                {tier.featured ? (
                  <p className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-700 sm:text-[11px]">
                    Most businesses start here
                  </p>
                ) : null}
                <h3 className="text-xl font-semibold tracking-[-0.02em] text-neutral-900 sm:text-2xl">
                  {tier.title}
                </h3>
                <p className="mt-4 text-pretty text-base leading-relaxed text-neutral-600">
                  {tier.description}
                </p>
                <ul className="mt-8 space-y-3 border-t border-neutral-100 pt-8 text-left text-sm leading-relaxed text-neutral-700 sm:text-[15px]">
                  {tier.features.map((f) => (
                    <li key={f} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-400/80" aria-hidden />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                {tier.price ? (
                  <p className="mt-8 font-medium text-neutral-900">{tier.price}</p>
                ) : null}
                <p className="mt-1 text-xs leading-relaxed text-neutral-500">
                  Final investment depends on scope—we quote after intake.
                </p>
                <Link href="#contact" className={tier.featured ? btnPrimary : btnSecondary}>
                  {tier.cta}
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </LightDemoContainer>
    </LightDemoSection>
  );
}
