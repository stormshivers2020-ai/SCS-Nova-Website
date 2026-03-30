import { LightDemoContainer } from "./LightDemoContainer";
import { LightDemoSection } from "./LightDemoSection";
import { ldSectionLead, ldSectionKicker, ldSectionTitle } from "./lightDemoUi";

const benefits = [
  "High-speed connectivity & backup paths",
  "Coffee, kitchens, and quiet zones that respect focus",
  "Front-desk presence that greets visitors professionally",
  "Flexible terms that scale with your season",
  "Parking, transit, and wayfinding explained clearly online",
] as const;

export function LightDemoBenefitsTestimonial() {
  return (
    <>
      <LightDemoSection
        id="benefits"
        aria-labelledby="ld-benefits-heading"
        className="border-t border-neutral-100/80 bg-neutral-50/90"
      >
        <LightDemoContainer>
          <div className="mx-auto max-w-2xl text-center">
            <p className={ldSectionKicker}>Benefits</p>
            <h2 id="ld-benefits-heading" className={`${ldSectionTitle} mt-3`}>
              Member benefits
            </h2>
            <p className={ldSectionLead}>
              The details people skim before they book a tour—stated plainly so trust lands faster.
              Presented in a calmer grid than a typical legacy marketing page.
            </p>
          </div>

          <ul className="mx-auto mt-10 grid max-w-4xl list-none gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {benefits.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-neutral-200/80 bg-white px-5 py-4 text-left text-sm font-medium leading-snug text-neutral-800 shadow-sm sm:px-6 sm:py-5 sm:text-[15px]"
              >
                {item}
              </li>
            ))}
          </ul>
        </LightDemoContainer>
      </LightDemoSection>

      <LightDemoSection
        id="location"
        aria-labelledby="ld-location-heading"
        className="border-t border-neutral-100/80 bg-white"
      >
        <LightDemoContainer>
          <div className="relative mx-auto max-w-2xl overflow-hidden rounded-3xl border border-neutral-200/70 bg-gradient-to-b from-sky-50/50 via-white to-neutral-50/30 p-8 shadow-[0_20px_50px_-24px_rgba(15,23,42,0.12)] sm:p-10 md:p-12">
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(14,165,233,0.08)_0%,transparent_100%)]"
              aria-hidden
            />
            <p className={`${ldSectionKicker} relative`}>Location</p>
            <h2
              id="ld-location-heading"
              className={`${ldSectionTitle} relative mt-3 text-left sm:text-center`}
            >
              Location &amp; access
            </h2>
            <p className="relative mt-5 text-pretty text-left text-base leading-relaxed text-neutral-600 sm:text-center sm:text-lg">
              Sample copy for a “visit us” block—clear commute story, parking notes, and what to expect
              at the door. Placeholder only; no real operator address or phone appears on this concept
              page.
            </p>
            <dl className="relative mt-10 space-y-6 border-t border-neutral-200/80 pt-10 text-left text-sm sm:text-base">
              <div className="sm:grid sm:grid-cols-[8rem_1fr] sm:gap-4">
                <dt className="font-semibold text-neutral-900">Neighborhood</dt>
                <dd className="mt-1 text-neutral-600 sm:mt-0">
                  Metro business district · walkable lunch &amp; coffee
                </dd>
              </div>
              <div className="sm:grid sm:grid-cols-[8rem_1fr] sm:gap-4">
                <dt className="font-semibold text-neutral-900">Hours (example)</dt>
                <dd className="mt-1 text-neutral-600 sm:mt-0">
                  Member access 7am–8pm weekdays · extended for dedicated suites
                </dd>
              </div>
            </dl>
          </div>
        </LightDemoContainer>
      </LightDemoSection>

      <LightDemoSection
        id="testimonial"
        aria-labelledby="ld-quote-heading"
        className="border-t border-neutral-100/80 bg-neutral-50/90"
      >
        <LightDemoContainer>
          <figure className="mx-auto max-w-2xl text-center">
            <blockquote>
              <p
                id="ld-quote-heading"
                className="text-pretty text-xl font-medium leading-snug text-neutral-900 sm:text-2xl sm:leading-snug"
              >
                “When the website finally matches the quality of the space, visitors trust the brand
                before they ever open the door.”
              </p>
            </blockquote>
            <figcaption className="mt-6 text-sm font-medium text-neutral-600 sm:text-base">
              — Illustrative quote · SCS Nova redesign concept
            </figcaption>
          </figure>
        </LightDemoContainer>
      </LightDemoSection>
    </>
  );
}
