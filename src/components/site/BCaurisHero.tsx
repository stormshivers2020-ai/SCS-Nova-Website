import Image from "next/image";
import Link from "next/link";
import { BcaurisOperationalVisual } from "@/components/bcauris-operational-visual";

export function BCaurisHero() {
  return (
    <section
      id="b-cauris"
      className="relative flex min-h-[100dvh] scroll-mt-[4.75rem] flex-col border-t border-white/[0.06] bg-black"
      aria-labelledby="bcauris-hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_65%_at_65%_25%,rgba(232,148,58,0.13),transparent_58%),radial-gradient(ellipse_70%_45%_at_15%_75%,rgba(26,16,48,0.38),transparent_55%)]"
        aria-hidden
      />
      <div
        className="cauris-depth-layer pointer-events-none absolute inset-0 opacity-[0.34]"
        aria-hidden
      />

      <div className="relative z-10 flex flex-1 items-center px-6 py-24 sm:px-8 sm:py-28 lg:py-32">
        <div className="container-brand w-full">
          <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 xl:gap-24">
            <div className="order-2 lg:order-1">
              <div className="animate-fade-up flex flex-wrap items-center gap-3 opacity-0 [animation-delay:0.08s] [animation-duration:1s] [animation-fill-mode:forwards]">
                <p className="font-mono text-xs font-medium uppercase tracking-[0.24em] text-zinc-500 sm:text-sm sm:tracking-[0.22em]">
                  B-Cauris
                </p>
                <span className="rounded-full border border-cauris-gold/22 bg-cauris-flame/[0.07] px-2.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-cauris-dawn sm:text-[10px]">
                  In active development
                </span>
              </div>
              <h2
                id="bcauris-hero-heading"
                className="animate-fade-up mt-5 max-w-[22rem] text-pretty text-5xl font-semibold leading-[1.08] tracking-tight text-zinc-100 opacity-0 [animation-delay:0.14s] [animation-duration:1s] [animation-fill-mode:forwards] sm:mt-6 sm:max-w-4xl sm:text-6xl md:text-7xl md:leading-[1.05]"
              >
                <span className="text-gradient-gold">Operational intelligence</span> for the way you
                work.
              </h2>

              <p className="animate-fade-up mt-8 max-w-xl text-pretty text-base font-medium leading-relaxed text-zinc-300 opacity-0 [animation-delay:0.22s] [animation-duration:1s] [animation-fill-mode:forwards] sm:mt-10 sm:text-lg sm:leading-relaxed lg:max-w-2xl">
                B-Cauris is the work-side companion to Cauris: it learns from real activity — messages,
                files, screenshots, recurring tasks — and turns it into operational memory, patterns,
                and calmer guidance. The product is in active development; this section shows the
                direction.
              </p>
              <p className="animate-fade-up mt-6 max-w-xl text-pretty text-base leading-relaxed text-zinc-400 opacity-0 [animation-delay:0.3s] [animation-duration:1s] [animation-fill-mode:forwards] sm:mt-7 sm:text-[17px] sm:leading-relaxed lg:max-w-2xl">
                It starts simple on day one. As usage compounds, it begins to recognize workflows,
                preserve context, reduce repeated explanation, and support better execution across
                recurring work.
              </p>

              <div className="animate-fade-up mt-12 flex w-full max-w-md flex-col gap-3 opacity-0 [animation-delay:0.38s] [animation-duration:1s] [animation-fill-mode:forwards] sm:mt-14 sm:max-w-none sm:flex-row sm:flex-wrap sm:gap-4">
                <Link
                  href="#future"
                  className="inline-flex h-12 min-h-11 items-center justify-center rounded-full bg-gradient-to-b from-cauris-flame/95 to-cauris-ember/95 px-8 text-sm font-semibold text-black shadow-glow-gold transition duration-300 hover:from-cauris-dawn hover:to-cauris-flame hover:shadow-glow-gold-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-cauris-flame focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  See the roadmap
                </Link>
                <Link
                  href="#insight"
                  className="inline-flex h-12 min-h-11 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.03] px-8 text-sm font-medium text-zinc-200 ring-1 ring-white/[0.04] transition duration-300 hover:border-gold-fade hover:bg-white/[0.05] hover:text-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-cauris-flame focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  View the ecosystem
                </Link>
              </div>
            </div>

            <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
              <div className="animate-fade-up w-full max-w-[min(100%,520px)] opacity-0 [animation-delay:0.2s] [animation-duration:1s] [animation-fill-mode:forwards]">
                <div className="relative overflow-hidden rounded-2xl border border-white/[0.12] bg-zinc-950/70 ring-1 ring-cauris-gold/[0.16] shadow-[0_36px_72px_rgba(0,0,0,0.46),0_0_72px_rgba(244,176,66,0.1)]">
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-cauris-flame/[0.06]" />
                  <div className="relative aspect-[4/5] w-full">
                    <Image
                      src={`/${encodeURIComponent("B-Cauris Hero.png")}`}
                      alt="B-Cauris visual identity preview"
                      fill
                      sizes="(max-width: 1024px) 90vw, 42vw"
                      className="object-contain object-center p-3 brightness-[1.08] contrast-[1.05] sm:p-4"
                      priority
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <BcaurisOperationalVisual />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
