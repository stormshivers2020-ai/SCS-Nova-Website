import { LightDemoContainer } from "./LightDemoContainer";
import { LightDemoSection } from "./LightDemoSection";
import { ldSectionLead, ldSectionKicker, ldSectionTitle } from "./lightDemoUi";

const bullets = [
  "Flexible options for solo focus days and collaborative weeks",
  "Meeting-ready rooms without the overhead of a long lease",
  "A professional first impression for clients and partners",
  "Community programming that turns introductions into real relationships",
] as const;

export function LightDemoWhyNova() {
  return (
    <LightDemoSection
      id="why-space"
      aria-labelledby="ld-why-heading"
      className="border-t border-neutral-100/80 bg-neutral-50/90"
    >
      <LightDemoContainer>
        <div className="mx-auto max-w-2xl text-center">
          <p className={ldSectionKicker}>Why this space</p>
          <h2 id="ld-why-heading" className={`${ldSectionTitle} mt-3`}>
            Why choose this space
          </h2>
          <p className={ldSectionLead}>
            Members stay when the environment matches how work really happens—focused blocks, real
            conversations, and infrastructure that stays out of the way. This section mirrors the
            “why us” beat you see on leading coworking sites, tightened for clarity.
          </p>
          <ul className="mx-auto mt-10 max-w-lg list-disc space-y-4 pl-6 text-left text-base leading-relaxed text-neutral-700 marker:text-blue-500/70 sm:mt-12 sm:pl-7 sm:text-[17px]">
            {bullets.map((item) => (
              <li key={item} className="pl-1">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </LightDemoContainer>
    </LightDemoSection>
  );
}
