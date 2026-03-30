import { LightDemoContainer } from "./LightDemoContainer";
import { LightDemoSection } from "./LightDemoSection";

const steps = [
  {
    n: "01",
    title: "We Learn Your Business",
    line: "We start with your goals, customers, and how you operate—so what we build actually fits.",
  },
  {
    n: "02",
    title: "We Build Your System",
    line: "Clear scope, steady milestones, and a build you can follow—no mystery, no unnecessary noise.",
  },
  {
    n: "03",
    title: "You Grow With It",
    line: "Launch, refine, and expand as you grow—your digital layer stays useful, not static.",
  },
] as const;

export function LightDemoHowItWorks() {
  return (
    <LightDemoSection
      id="how-it-works"
      aria-labelledby="ld-how-heading"
      className="bg-neutral-50"
    >
      <LightDemoContainer>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="ld-how-heading"
            className="text-3xl font-semibold tracking-[-0.02em] text-neutral-900 sm:text-4xl"
          >
            How It Works
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-neutral-600 sm:text-lg">
            A simple path from first conversation to something you can run with.
          </p>
        </div>

        <ol className="mx-auto mt-16 grid max-w-5xl list-none gap-16 md:mt-20 md:grid-cols-3 md:gap-8 lg:gap-12">
          {steps.map((step) => (
            <li key={step.n} className="flex flex-col text-center md:text-left">
              <span
                className="font-mono text-sm font-medium tabular-nums tracking-widest text-neutral-400"
                aria-hidden
              >
                {step.n}
              </span>
              <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em] text-neutral-900">
                {step.title}
              </h3>
              <p className="mt-4 text-pretty text-base leading-relaxed text-neutral-600">
                {step.line}
              </p>
            </li>
          ))}
        </ol>
      </LightDemoContainer>
    </LightDemoSection>
  );
}
