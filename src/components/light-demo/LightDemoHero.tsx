import Link from "next/link";
import { LightDemoContainer } from "./LightDemoContainer";
import { LightDemoSection } from "./LightDemoSection";

const primaryBtn =
  "inline-flex w-full min-h-12 items-center justify-center rounded-lg bg-blue-600 px-7 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 sm:w-auto sm:min-w-[11rem]";

const secondaryBtn =
  "inline-flex w-full min-h-12 items-center justify-center rounded-lg border border-neutral-200 bg-white px-7 text-sm font-semibold text-neutral-800 shadow-sm transition-colors hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 sm:w-auto sm:min-w-[11rem]";

export function LightDemoHero() {
  return (
    <LightDemoSection id="hero" aria-labelledby="ld-hero-heading">
      <LightDemoContainer>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="max-w-xl lg:max-w-none">
            <h1
              id="ld-hero-heading"
              className="text-balance text-4xl font-semibold tracking-[-0.03em] text-neutral-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]"
            >
              Build a Better System for Your Business
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-neutral-600 sm:text-xl sm:leading-relaxed">
              We design websites and systems that help you attract customers, stay organized, and grow.
            </p>
            <div className="mt-10 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="#contact" className={primaryBtn}>
                Start Your Project
              </Link>
              <Link href="/#selected-work" className={secondaryBtn}>
                View Our Work
              </Link>
            </div>
          </div>

          <div
            className="flex min-h-[220px] w-full items-center justify-center rounded-2xl border border-neutral-100 bg-gradient-to-br from-neutral-50 via-white to-neutral-100/90 shadow-sm sm:min-h-[280px] lg:min-h-[320px]"
            aria-hidden
          >
            <p className="text-sm font-medium text-neutral-400">Visual placeholder</p>
          </div>
        </div>
      </LightDemoContainer>
    </LightDemoSection>
  );
}
