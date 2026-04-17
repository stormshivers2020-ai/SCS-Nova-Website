import Link from "next/link";
import { LightDemoContainer } from "./LightDemoContainer";
import { LightDemoSection } from "./LightDemoSection";
import {
  ldBtnPrimaryCompact,
  ldBtnSecondaryCompact,
  ldSectionDeck,
  ldSectionLead,
  ldSectionKicker,
  ldSectionTitle,
} from "./lightDemoUi";

const baseCard =
  "flex h-full min-h-0 flex-col rounded-2xl border bg-white p-7 sm:p-9 lg:p-10";

const quietCard = `${baseCard} border-neutral-200/80 shadow-[0_1px_0_rgba(15,23,42,0.04)]`;

const featuredCard = `${baseCard} relative border-blue-200/90 bg-gradient-to-b from-sky-50/60 via-white to-white shadow-[0_8px_30px_-8px_rgba(37,99,235,0.12)] ring-1 ring-blue-100/80 lg:z-[1] lg:-my-0.5 lg:scale-[1.02]`;

const plans = [
  {
    title: "Flex membership",
    description: "Ideal for travelers and hybrid teams who need quality space a few times a month.",
    features: [
      "Shared workspace access on scheduled days",
      "Member rates on meeting rooms",
      "Community events included",
    ],
    price: "From $149 / mo · concept pricing",
    cta: "Request details",
    featured: false,
  },
  {
    title: "Dedicated desk",
    description: "Your home base—lockable storage, consistent neighbors, and room to settle in.",
    features: [
      "Reserved desk in a bright open studio",
      "24/7 access where available",
      "Mail & package handling options",
      "Priority booking for collaboration rooms",
    ],
    price: "From $349 / mo · concept pricing",
    cta: "Join waitlist",
    featured: true,
  },
  {
    title: "Private office suite",
    description: "For teams that need a door, signage, and a predictable place for clients to visit.",
    features: [
      "Enclosed suite with meeting table",
      "Branded entry options",
      "Scales with headcount",
    ],
    price: "Custom · concept pricing",
    cta: "Talk with us",
    featured: false,
  },
] as const;

export function LightDemoOurSystems() {
  return (
    <LightDemoSection
      id="membership"
      aria-labelledby="ld-membership-heading"
      className="border-t border-neutral-100/80 bg-white"
    >
      <LightDemoContainer>
        <div className="mx-auto max-w-2xl text-center">
          <p className={ldSectionKicker}>Plans</p>
          <h2 id="ld-membership-heading" className={`${ldSectionTitle} mt-3`}>
            Membership
          </h2>
          <p className={ldSectionLead}>
            Three clear tiers—a decision-friendly layout that echoes familiar coworking pricing pages,
            then refines hierarchy and spacing so scanning feels effortless.
          </p>
          <p className={ldSectionDeck}>
            Figures are illustrative for this SCS Nova concept only—not an offer from any real venue.
          </p>
        </div>

        <ul className="mx-auto mt-12 grid max-w-6xl list-none gap-6 sm:mt-16 sm:gap-8 lg:mt-20 lg:grid-cols-3 lg:items-stretch lg:gap-6 xl:gap-8">
          {plans.map((plan) => (
            <li key={plan.title} className="flex min-h-0">
              <article
                className={plan.featured ? featuredCard : quietCard}
                aria-label={`${plan.title}${plan.featured ? ", popular option" : ""}`}
              >
                {plan.featured ? (
                  <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-700 sm:mb-4 sm:text-[11px]">
                    Most teams start here
                  </p>
                ) : null}
                <h3 className="text-xl font-semibold tracking-[-0.02em] text-neutral-900 sm:text-2xl">
                  {plan.title}
                </h3>
                <p className="mt-4 text-pretty text-base leading-relaxed text-neutral-700">
                  {plan.description}
                </p>
                <ul className="mt-7 space-y-2.5 border-t border-neutral-100 pt-7 text-left text-sm leading-relaxed text-neutral-700 sm:space-y-3 sm:text-[15px]">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-500/80" aria-hidden />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                {plan.price ? (
                  <p className="mt-7 text-base font-semibold tracking-tight text-neutral-900">{plan.price}</p>
                ) : null}
                <Link href="#contact" className={`mt-8 ${plan.featured ? ldBtnPrimaryCompact : ldBtnSecondaryCompact}`}>
                  {plan.cta}
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </LightDemoContainer>
    </LightDemoSection>
  );
}
