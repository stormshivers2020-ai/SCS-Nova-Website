import { LightDemoContainer } from "./LightDemoContainer";
import { LightDemoSection } from "./LightDemoSection";

const bullets = [
  "attract more customers",
  "streamline operations",
  "improve professionalism",
  "scalable systems",
] as const;

export function LightDemoWhyNova() {
  return (
    <LightDemoSection
      id="why"
      aria-labelledby="ld-why-heading"
      className="bg-neutral-50"
    >
      <LightDemoContainer>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="ld-why-heading"
            className="text-3xl font-semibold tracking-[-0.02em] text-neutral-900 sm:text-4xl"
          >
            Why SCS Nova
          </h2>
          <p className="mt-6 text-pretty text-base leading-relaxed text-neutral-600 sm:text-lg sm:leading-relaxed">
            We focus on outcomes you can feel: clearer presence, smoother day-to-day operations, and
            systems that keep working as you grow.
          </p>
          <ul className="mx-auto mt-10 max-w-lg list-disc space-y-4 pl-6 text-left text-base leading-relaxed text-neutral-700 marker:text-neutral-400 sm:pl-7 sm:text-[17px]">
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
