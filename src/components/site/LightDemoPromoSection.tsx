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
      className="relative scroll-mt-[5.5rem] overflow-hidden border-t border-white/[0.08] bg-gradient-to-b from-black/38 via-zinc-950/12 to-black/38 !py-28 md:!py-36 lg:!py-40"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_20%_20%,rgba(88,60,180,0.08),transparent_55%),radial-gradient(ellipse_60%_45%_at_90%_80%,rgba(232,148,58,0.07),transparent_52%)]"
        aria-hidden
      />

      <div className="relative grid items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 xl:gap-20">
        <ScrollReveal>
          <p className="cauris-kicker text-zinc-500">Design option · SCS Nova</p>
          <h2
            id="light-demo-promo-heading"
            className="mt-6 max-w-xl text-pretty text-3xl font-semibold tracking-[-0.02em] text-zinc-100 sm:mt-7 sm:text-4xl md:text-[2.65rem] md:leading-[1.08]"
          >
            Clean Business Style Demo
          </h2>
          <p className="mt-7 max-w-xl text-pretty text-base font-medium leading-relaxed text-zinc-300 sm:mt-8 sm:text-lg sm:leading-relaxed">
            Not every brand needs a dark cinematic look. Explore a clean, modern design option built
            for professional businesses, coworking spaces, consultants, and local service brands.
          </p>

          <div className="mt-10 flex w-full max-w-lg flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:items-center">
            <Link href="/light-demo" className="cauris-btn-primary sm:min-w-[10.5rem]">
              View Light Demo
            </Link>
            <Link href="/#scs-nova" className="cauris-btn-secondary sm:min-w-[10.5rem]">
              Start a Project
            </Link>
          </div>

          <p className="mt-8 max-w-md text-pretty font-mono text-[10px] uppercase leading-relaxed tracking-[0.18em] text-zinc-600 sm:text-[11px] sm:tracking-[0.16em]">
            This is one of multiple design styles we offer.
          </p>
        </ScrollReveal>

        <ScrollReveal delayMs={90} className="relative mx-auto w-full max-w-[min(100%,28rem)] justify-self-center lg:justify-self-end">
          <div
            className="rounded-[1.05rem] border border-white/[0.12] bg-zinc-950/35 p-2 shadow-[0_28px_80px_rgba(0,0,0,0.45)] ring-1 ring-white/[0.06] backdrop-blur-md sm:p-2.5"
            aria-hidden
          >
            <div className="flex items-center gap-2 border-b border-white/[0.08] px-3 py-2.5 sm:px-4">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-red-400/55" />
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-amber-300/45" />
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400/45" />
              <div className="ml-2 min-h-[1.65rem] flex-1 rounded-md border border-white/[0.08] bg-white/[0.06] px-3 text-[10px] leading-[1.65rem] text-zinc-500 sm:text-[11px]">
                scsnova.com/light-demo
              </div>
            </div>
            <div className="mt-2 rounded-xl bg-gradient-to-b from-white to-neutral-100 p-5 shadow-inner sm:p-6">
              <div className="h-2.5 w-20 rounded-md bg-neutral-800/22 sm:w-24" />
              <div className="mt-5 space-y-3">
                <div className="h-2 w-full max-w-[92%] rounded bg-neutral-900/12" />
                <div className="h-2 w-full max-w-[78%] rounded bg-neutral-900/10" />
                <div className="h-2 w-full max-w-[85%] rounded bg-neutral-900/10" />
              </div>
              <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-3">
                <div className="aspect-[4/3] rounded-lg bg-white shadow-sm ring-1 ring-neutral-200/80" />
                <div className="aspect-[4/3] rounded-lg bg-neutral-50 shadow-sm ring-1 ring-neutral-200/60" />
                <div className="aspect-[4/3] rounded-lg bg-neutral-100/90 shadow-sm ring-1 ring-neutral-200/50" />
              </div>
              <div className="mx-auto mt-6 h-9 max-w-[7.5rem] rounded-full bg-sky-600/90 shadow-sm sm:h-10" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </SectionShell>
  );
}
