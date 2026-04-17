import Link from "next/link";
import { LightDemoContainer } from "./LightDemoContainer";
import { LightDemoSection } from "./LightDemoSection";
import { ldBtnPrimary, ldBtnSecondary, ldSectionKicker } from "./lightDemoUi";

export function LightDemoHero() {
  return (
    <LightDemoSection id="hero" aria-labelledby="ld-hero-heading" className="border-b border-neutral-100/90">
      <LightDemoContainer>
        <div className="text-center sm:text-left">
          <p className={ldSectionKicker}>SCS Nova redesign · Think Tank Co-Works–inspired structure</p>
          <div className="mx-auto mt-3 h-px w-12 max-w-full bg-gradient-to-r from-blue-500/50 to-transparent sm:mx-0" aria-hidden />
        </div>
        <div className="mt-8 grid gap-10 sm:gap-12 lg:mt-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="max-w-xl text-center sm:text-left lg:max-w-none">
            <p className="text-sm font-medium text-neutral-700 sm:text-base">
              How we would elevate a coworking hub site—cleaner spacing, stronger type, and a flow
              visitors already understand.
            </p>
            <h1
              id="ld-hero-heading"
              className="mt-4 text-balance text-[2.125rem] font-semibold leading-[1.08] tracking-[-0.035em] text-neutral-900 sm:mt-5 sm:text-5xl lg:text-[3.35rem] lg:leading-[1.05]"
            >
              A better place to work, connect, and grow
            </h1>
            <p className="mt-6 text-pretty text-lg font-medium leading-relaxed text-neutral-800 sm:text-xl sm:leading-relaxed">
              Flexible workspace for professionals, entrepreneurs, and growing businesses—built for
              productivity, meetings, networking, and momentum.
            </p>
            <p className="mt-4 text-pretty text-base leading-relaxed text-neutral-700">
              A cleaner, more modern upgraded version of a coworking and local business website: calm
              layout, clear membership paths, and room for community—rebuilt as an SCS Nova concept, not
              a venue clone.
            </p>
            <div className="mt-9 flex w-full flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
              <Link href="#membership" className={ldBtnPrimary}>
                View membership
              </Link>
              <Link href="#contact" className={ldBtnSecondary}>
                Contact SCS Nova
              </Link>
            </div>
          </div>

          <div
            className="relative flex min-h-[240px] w-full flex-col justify-between rounded-2xl border border-neutral-100 bg-gradient-to-br from-white via-neutral-50 to-sky-50/40 p-6 shadow-[0_20px_50px_-12px_rgba(15,23,42,0.12)] sm:min-h-[300px] sm:p-8 lg:min-h-[340px]"
            aria-hidden
          >
            <div className="flex items-center justify-between gap-3 border-b border-neutral-200/80 pb-4">
              <div className="h-2.5 w-24 rounded-md bg-neutral-900/15 sm:w-28" />
              <div className="h-8 w-8 rounded-lg bg-white/90 shadow-sm ring-1 ring-neutral-200/80" />
            </div>
            <div className="mt-6 space-y-3">
              <div className="h-3 w-full max-w-[90%] rounded-md bg-neutral-900/10" />
              <div className="h-3 w-full max-w-[72%] rounded-md bg-neutral-900/8" />
            </div>
            <div className="mt-6 grid grid-cols-3 gap-2">
              <div className="aspect-[5/4] rounded-xl bg-white shadow-sm ring-1 ring-neutral-200/90" />
              <div className="aspect-[5/4] rounded-xl bg-neutral-50 shadow-sm ring-1 ring-neutral-200/70" />
              <div className="aspect-[5/4] rounded-xl bg-sky-50/80 shadow-sm ring-1 ring-sky-100/80" />
            </div>
            <div className="mx-auto mt-6 h-10 w-full max-w-[10rem] rounded-full bg-gradient-to-b from-blue-600 to-blue-700 shadow-md shadow-blue-900/10" />
          </div>
        </div>
      </LightDemoContainer>
    </LightDemoSection>
  );
}
