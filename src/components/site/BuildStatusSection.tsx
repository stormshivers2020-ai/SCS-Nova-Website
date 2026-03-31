import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionShell } from "@/components/section-shell";

const items = [
  {
    name: "Cauris",
    status: "Origin point",
    statusVariant: "development" as const,
    description:
      "Started as a life-intelligence idea: capture, structure, and clearer personal decisions.",
  },
  {
    name: "B-Cauris",
    status: "Expansion",
    statusVariant: "development" as const,
    description:
      "Expanded the concept into business-side memory, workflow clarity, and operational guidance.",
  },
  {
    name: "Studio products",
    status: "Now active",
    statusVariant: "soon" as const,
    description:
      "From product ideas to client systems, SCS Nova now builds multiple tracks in one ecosystem.",
  },
] as const;

export function BuildStatusSection() {
  return (
    <SectionShell
      id="build-status"
      aria-labelledby="build-status-heading"
      className="relative overflow-hidden border-t border-white/[0.08] bg-gradient-to-b from-black/38 via-zinc-950/12 to-black/38 !py-28 md:!py-36 lg:!py-40"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_0%,rgba(232,148,58,0.095),transparent_60%)]"
        aria-hidden
      />

      <div className="relative">
        <ScrollReveal>
          <p className="cauris-kicker">
            Company story · SCS Nova
          </p>
          <h2
            id="build-status-heading"
            className="mt-6 max-w-3xl text-pretty text-3xl font-semibold tracking-[-0.02em] text-zinc-100 sm:mt-7 sm:text-4xl md:text-[2.9rem] md:leading-[1.06]"
          >
            How we started
          </h2>
          <p className="mt-6 max-w-2xl text-pretty text-sm font-medium leading-relaxed text-zinc-500 sm:mt-7 sm:text-base">
            SCS Nova began with a core intelligence direction, then expanded into products, demos, and
            business-facing systems.
          </p>
          <p className="mt-10 max-w-3xl text-pretty text-base font-medium leading-relaxed text-zinc-200 sm:mt-11 sm:text-lg sm:leading-relaxed">
            This is the progression: origin idea, expansion into work systems, then a full company layer
            that now ships services and productized tools in parallel.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 sm:mt-20 md:grid-cols-3 md:gap-7 lg:mt-24">
          {items.map((item, i) => (
            <ScrollReveal
              key={item.name}
              delayMs={i * 90}
              className="group relative overflow-hidden rounded-brand border border-white/[0.11] bg-gradient-to-b from-white/[0.09] to-white/[0.024] p-7 shadow-cauris-elevate-sm ring-1 ring-white/[0.04] backdrop-blur-md transition-[border-color,box-shadow,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-cauris-gold/28 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_32px_64px_rgba(0,0,0,0.32),0_0_52px_rgba(244,176,66,0.07)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-8"
            >
              <div className="pointer-events-none absolute -right-6 top-0 h-24 w-24 rounded-full bg-cauris-flame/[0.06] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative flex flex-col gap-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2 gap-y-1">
                  <h3 className="text-xl font-semibold tracking-[-0.02em] text-zinc-50 sm:text-2xl">
                    {item.name}
                  </h3>
                  <span
                    className={`shrink-0 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] sm:text-[11px] ${
                      item.statusVariant === "development"
                        ? "text-cauris-dawn"
                        : "text-zinc-300"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
                <div className="h-px w-full bg-gradient-to-r from-cauris-flame/35 via-cauris-gold/20 to-transparent" />
                <p className="text-sm leading-relaxed text-zinc-400 sm:text-[15px] sm:leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delayMs={280} className="mt-16 border-t border-white/[0.07] pt-12 sm:mt-20 sm:pt-14">
          <p className="text-center text-sm font-medium leading-relaxed text-zinc-500">
            <Link
              href="/demo"
              className="text-zinc-400 underline decoration-white/[0.12] underline-offset-4 transition-colors hover:text-cauris-dawn hover:decoration-cauris-gold/35"
            >
              Cauris demo
            </Link>
            <span className="mx-2 text-zinc-700" aria-hidden>
              ·
            </span>
            <Link
              href="/rangeos-demo"
              className="text-zinc-400 underline decoration-white/[0.12] underline-offset-4 transition-colors hover:text-cauris-dawn hover:decoration-cauris-gold/35"
            >
              RangeOS demo
            </Link>
            <span className="mx-2 text-zinc-700" aria-hidden>
              ·
            </span>
            <Link
              href="/#scs-nova"
              className="text-zinc-400 underline decoration-white/[0.12] underline-offset-4 transition-colors hover:text-cauris-dawn hover:decoration-cauris-gold/35"
            >
              Contact &amp; requests
            </Link>
          </p>
        </ScrollReveal>
      </div>
    </SectionShell>
  );
}
