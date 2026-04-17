import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionShell } from "@/components/section-shell";

/**
 * Homepage bridge to the isolated /light-demo route — dark-shell styling, light preview panel only.
 */
export function LightDemoPromoSection() {
  return (
    <SectionShell
      id="light-style-demo"
      aria-labelledby="light-demo-promo-heading"
      className="relative scroll-mt-[5.5rem] overflow-hidden border-t border-white/[0.08] bg-gradient-to-b from-black/42 via-zinc-950/[0.14] to-black/40 !py-28 md:!py-36 lg:!py-40"
    >
      {/* Slightly richer wash + soft gold lift — distinct from adjacent bands */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-15%,rgba(232,148,58,0.07),transparent_52%),radial-gradient(ellipse_55%_45%_at_12%_75%,rgba(88,60,180,0.07),transparent_58%),radial-gradient(ellipse_50%_40%_at_92%_60%,rgba(244,176,66,0.05),transparent_50%)]"
        aria-hidden
      />

      <div className="relative">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cauris-gold/35 to-transparent"
          aria-hidden
        />

        <div className="relative grid items-center gap-16 pt-6 sm:gap-20 sm:pt-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-14 lg:pt-6 xl:gap-20">
          <ScrollReveal>
            <p className="cauris-kicker">Design option · SCS Nova</p>

            <div
              className="mt-6 h-px w-11 max-w-full bg-gradient-to-r from-cauris-flame/45 via-cauris-gold/30 to-transparent sm:mt-7 sm:w-12"
              aria-hidden
            />

            <h2
              id="light-demo-promo-heading"
              className="mt-7 max-w-4xl text-pretty text-3xl font-semibold tracking-[-0.028em] text-zinc-100 sm:mt-8 sm:text-4xl md:mt-9 md:text-[2.85rem] md:leading-[1.06] lg:text-[2.95rem] lg:leading-[1.05]"
            >
              Clean Business Style <span className="text-gradient-gold">Demo</span>
            </h2>

            <p className="mt-7 max-w-3xl text-pretty text-lg font-medium leading-relaxed text-zinc-200 sm:mt-8 sm:text-xl sm:leading-relaxed">
              Not every brand needs a dark cinematic look.
            </p>
            <p className="mt-5 max-w-3xl text-pretty text-base font-medium leading-relaxed text-zinc-300 sm:mt-6 sm:text-lg sm:leading-relaxed">
              Explore a clean, modern design option built for professional businesses, coworking
              spaces, consultants, and local service brands.
            </p>

            <div className="relative mt-12 overflow-hidden rounded-brand-lg border border-white/[0.11] bg-gradient-to-b from-white/[0.085] to-white/[0.02] p-6 shadow-cauris-elevate-sm ring-1 ring-cauris-gold/[0.12] backdrop-blur-md sm:mt-14 sm:max-w-xl sm:p-7 md:p-8">
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cauris-gold/45 to-transparent"
                aria-hidden
              />
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-300 sm:text-[11px]">
                Next step
              </p>
              <div className="mt-5 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-stretch">
                <Link
                  href="/light-demo"
                  className="cauris-btn-primary-card w-full min-h-12 shrink-0 justify-center sm:w-auto sm:min-w-[12.5rem]"
                >
                  View Light Demo
                </Link>
                <Link
                  href="/#scs-nova"
                  className="cauris-btn-tertiary-card w-full min-h-12 shrink-0 justify-center sm:w-auto sm:min-w-[12.5rem]"
                >
                  Start a Project
                </Link>
              </div>
            </div>

            <p className="mt-8 max-w-md text-pretty font-mono text-[10px] uppercase leading-relaxed tracking-[0.18em] text-zinc-300 sm:mt-10 sm:text-[11px] sm:tracking-[0.16em]">
              This is one of multiple design styles we offer.
            </p>
          </ScrollReveal>

          <ScrollReveal
            delayMs={90}
            className="relative mx-auto w-full max-w-[min(100%,24.5rem)] justify-self-center lg:mx-0 lg:max-w-none lg:justify-self-end"
          >
            <div
              className="pointer-events-none absolute -inset-[10%] rounded-[2rem] bg-cauris-flame/[0.06] blur-3xl"
              aria-hidden
            />
            <div
              className="relative overflow-hidden rounded-[1.125rem] border border-white/[0.13] bg-zinc-950/50 p-[3px] shadow-[0_32px_96px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.06)] ring-1 ring-cauris-gold/[0.14] backdrop-blur-md"
              aria-hidden
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cauris-gold/40 to-transparent" />

              <div className="rounded-[0.9rem] bg-black/25 p-2 sm:p-2.5">
                <div className="flex items-center gap-2 border-b border-white/[0.09] px-3 pb-2.5 pt-1 sm:px-3.5 sm:pb-3">
                  <span className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/50 shadow-inner" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-300/42 shadow-inner" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/48 shadow-inner" />
                  </span>
                  <div className="ml-1 flex min-h-[2rem] flex-1 items-center rounded-lg border border-white/[0.1] bg-white/[0.07] px-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:min-h-[2.125rem]">
                    <span className="truncate font-mono text-[10px] text-zinc-300 sm:text-[11px]">
                      /<span className="text-zinc-300">light-demo</span>
                    </span>
                  </div>
                </div>

                <div className="mt-2 overflow-hidden rounded-xl border border-neutral-200/70 bg-gradient-to-b from-white via-neutral-50 to-neutral-100 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_18px_48px_rgba(15,23,42,0.08)] sm:p-6">
                  <div className="flex items-center justify-between gap-3 border-b border-neutral-200/60 pb-4">
                    <div className="h-2 w-16 rounded-md bg-neutral-900/18 sm:w-20" />
                    <div className="h-7 w-7 rounded-lg bg-neutral-900/8" />
                  </div>
                  <div className="mt-5 space-y-2.5">
                    <div className="h-3 w-full max-w-[88%] rounded-md bg-neutral-900/12" />
                    <div className="h-3 w-full max-w-[72%] rounded-md bg-neutral-900/10" />
                    <div className="h-3 w-full max-w-[80%] rounded-md bg-neutral-900/9" />
                  </div>
                  <div className="mt-6 h-24 w-full rounded-xl bg-gradient-to-br from-sky-50/95 via-white to-neutral-100/90 ring-1 ring-sky-100/70 sm:h-28">
                    <div className="h-full w-full bg-[linear-gradient(180deg,rgba(14,165,233,0.06)_0%,transparent_45%)]" />
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-2.5 sm:gap-3">
                    <div className="aspect-[4/3] rounded-lg bg-white shadow-[0_2px_8px_rgba(15,23,42,0.06)] ring-1 ring-neutral-200/85" />
                    <div className="aspect-[4/3] rounded-lg bg-neutral-50/98 shadow-[0_2px_8px_rgba(15,23,42,0.05)] ring-1 ring-neutral-200/65" />
                    <div className="aspect-[4/3] rounded-lg bg-neutral-100 shadow-[0_2px_8px_rgba(15,23,42,0.04)] ring-1 ring-neutral-200/50" />
                  </div>
                  <div className="mx-auto mt-6 flex h-10 max-w-[8.5rem] items-center justify-center rounded-full bg-gradient-to-b from-sky-500 to-sky-600 text-[11px] font-semibold text-white shadow-[0_4px_14px_rgba(14,165,233,0.35),inset_0_1px_0_rgba(255,255,255,0.2)] sm:h-11 sm:max-w-[9rem] sm:text-xs">
                    Get started
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </SectionShell>
  );
}
