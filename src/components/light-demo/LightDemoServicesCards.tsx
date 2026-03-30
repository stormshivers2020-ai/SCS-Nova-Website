import { LightDemoContainer } from "./LightDemoContainer";
import { LightDemoSection } from "./LightDemoSection";

const cards = [
  {
    title: "Websites",
    description:
      "Clear, modern sites that present your business with confidence and guide visitors toward action.",
  },
  {
    title: "Business Systems",
    description:
      "Structured tools for inventory, booking, and day-to-day operations—so nothing important slips through the cracks.",
  },
  {
    title: "Growth Tools",
    description:
      "Digital touchpoints and workflows built to improve visibility, efficiency, and how customers engage with you.",
  },
] as const;

export function LightDemoServicesCards() {
  return (
    <LightDemoSection id="what-we-do" aria-labelledby="ld-services-heading">
      <LightDemoContainer>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="ld-services-heading"
            className="text-3xl font-semibold tracking-[-0.02em] text-neutral-900 sm:text-4xl"
          >
            What We Do
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-neutral-600 sm:text-lg">
            Three ways we help your business show up clearly and run smoothly.
          </p>
        </div>

        <ul className="mt-12 grid list-none gap-6 sm:mt-14 md:grid-cols-3 md:gap-8">
          {cards.map((card) => (
            <li key={card.title} className="flex min-h-0">
              <article className="flex h-full w-full flex-col rounded-2xl border border-neutral-100 bg-white p-8 shadow-sm sm:p-9">
                <h3 className="text-xl font-semibold tracking-[-0.02em] text-neutral-900">
                  {card.title}
                </h3>
                <p className="mt-4 flex-1 text-pretty text-base leading-relaxed text-neutral-600">
                  {card.description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </LightDemoContainer>
    </LightDemoSection>
  );
}
