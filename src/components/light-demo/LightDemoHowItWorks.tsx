import { LightDemoContainer } from "./LightDemoContainer";
import { LightDemoSection } from "./LightDemoSection";
import { ldSectionLead, ldSectionKicker, ldSectionTitle } from "./lightDemoUi";

const pillars = [
  {
    n: "01",
    title: "Turnkey workspace",
    line: "Furnished desks, reliable Wi‑Fi, printing, and daily rhythm—arrive and work without setup friction.",
  },
  {
    n: "02",
    title: "Meeting-ready",
    line: "Reservable rooms with clear booking flow—so hosts look sharp and guests know where to go.",
  },
  {
    n: "03",
    title: "Support when it matters",
    line: "Staff and member systems that handle the small things—so energy stays on the work that moves the needle.",
  },
] as const;

export function LightDemoHowItWorks() {
  return (
    <LightDemoSection
      id="workspace"
      aria-labelledby="ld-workspace-heading"
      className="border-y border-neutral-100/90 bg-gradient-to-b from-neutral-50/95 via-neutral-50/90 to-white"
    >
      <LightDemoContainer>
        <div className="mx-auto max-w-2xl text-center">
          <p className={ldSectionKicker}>Turnkey</p>
          <h2 id="ld-workspace-heading" className={`${ldSectionTitle} mt-3`}>
            Ready-to-use workspace
          </h2>
          <p className={ldSectionLead}>
            The clarity guests expect from a premium coworking brand—simple paths, honest detail, and
            no mystery fees buried three clicks deep. A modern upgrade to the “what you get” story.
          </p>
        </div>

        <ol className="mx-auto mt-12 grid max-w-5xl list-none gap-10 sm:mt-16 md:grid-cols-3 md:gap-8 md:gap-y-0 lg:gap-10">
          {pillars.map((pillar, i) => (
            <li
              key={pillar.n}
              className={`relative flex flex-col border-t border-neutral-200/90 pt-7 text-center md:border-t-0 md:pt-0 md:text-left ${
                i > 0 ? "md:border-l md:border-neutral-200/90 md:pl-8" : ""
              }`}
            >
              <span
                className="font-mono text-sm font-medium tabular-nums tracking-widest text-blue-600/80"
                aria-hidden
              >
                {pillar.n}
              </span>
              <h3 className="mt-3 text-lg font-semibold tracking-[-0.02em] text-neutral-900 sm:text-xl">
                {pillar.title}
              </h3>
              <p className="mt-3 text-pretty text-base leading-relaxed text-neutral-700">
                {pillar.line}
              </p>
            </li>
          ))}
        </ol>
      </LightDemoContainer>
    </LightDemoSection>
  );
}
