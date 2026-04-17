import { LightDemoContainer } from "./LightDemoContainer";
import { LightDemoSection } from "./LightDemoSection";
import { ldSectionLead, ldSectionKicker, ldSectionTitle } from "./lightDemoUi";

const cards = [
  {
    title: "Member network",
    description:
      "Curated mix of consultants, founders, and remote teams—designed so chance encounters turn into useful collaborations.",
  },
  {
    title: "Events & roundtables",
    description:
      "Workshops and hosted evenings that build reputation and give newcomers a natural way to plug in.",
  },
  {
    title: "Shared wins",
    description:
      "Visible wins—from launches to hires—celebrated in-channel so momentum stays high without noise.",
  },
] as const;

export function LightDemoServicesCards() {
  return (
    <LightDemoSection
      id="community"
      aria-labelledby="ld-community-heading"
      className="border-t border-neutral-100/80 bg-white"
    >
      <LightDemoContainer>
        <div className="mx-auto max-w-2xl text-center">
          <p className={ldSectionKicker}>Networking</p>
          <h2 id="ld-community-heading" className={`${ldSectionTitle} mt-3`}>
            Community &amp; networking
          </h2>
          <p className={ldSectionLead}>
            Built for productivity, meetings, networking, and momentum—so the brand feels alive the
            moment someone lands on the page. Same storytelling priority as a strong hub site, with
            calmer cards and more breathing room.
          </p>
        </div>

        <ul className="mt-10 grid list-none gap-6 sm:mt-14 md:grid-cols-3 md:gap-8">
          {cards.map((card) => (
            <li key={card.title} className="flex min-h-0">
              <article className="flex h-full w-full flex-col rounded-2xl border border-neutral-100 bg-neutral-50/40 p-7 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-9">
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-neutral-900 sm:text-xl">
                  {card.title}
                </h3>
                <p className="mt-4 flex-1 text-pretty text-base leading-relaxed text-neutral-700">
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
