import { LightDemoContainer } from "./LightDemoContainer";
import { LightDemoSection } from "./LightDemoSection";

const benefits = [
  "More customers",
  "Better organization",
  "Faster operations",
  "Professional presence",
  "Easy to manage",
] as const;

export function LightDemoBenefitsTestimonial() {
  return (
    <LightDemoSection
      id="benefits"
      aria-labelledby="ld-benefits-heading"
      className="bg-neutral-100/70"
    >
      <LightDemoContainer>
        <p className="text-center font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500 sm:text-[11px]">
          Built for real businesses in Harford County
        </p>

        <h2
          id="ld-benefits-heading"
          className="mx-auto mt-6 max-w-xl text-center text-3xl font-semibold tracking-[-0.02em] text-neutral-900 sm:mt-8 sm:text-4xl"
        >
          Benefits
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-center text-base leading-relaxed text-neutral-600 sm:text-lg">
          What clients typically gain when we build together.
        </p>

        <ul className="mx-auto mt-12 grid max-w-4xl list-none gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-6 lg:grid-cols-3 lg:gap-x-12">
          {benefits.map((item) => (
            <li
              key={item}
              className="rounded-xl border border-neutral-200/80 bg-white/80 px-5 py-4 text-center text-base font-medium leading-snug text-neutral-800 shadow-sm sm:px-6 sm:py-5 sm:text-left"
            >
              {item}
            </li>
          ))}
        </ul>

        <figure
          id="testimonial"
          className="mx-auto mt-20 max-w-2xl border-t border-neutral-200/90 pt-16 sm:mt-24 sm:pt-20"
        >
          <blockquote className="text-center">
            <p className="text-pretty text-xl font-medium leading-snug text-neutral-900 sm:text-2xl sm:leading-snug">
              “Working with SCS Nova completely changed how we operate.”
            </p>
          </blockquote>
          <figcaption className="mt-6 text-center text-sm font-medium text-neutral-600 sm:text-base">
            — Local Business Owner
          </figcaption>
        </figure>
      </LightDemoContainer>
    </LightDemoSection>
  );
}
