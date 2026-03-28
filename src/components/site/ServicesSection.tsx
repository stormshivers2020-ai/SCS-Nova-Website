import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionShell } from "@/components/section-shell";

const services = [
  {
    title: "Website Design",
    body: "Custom website design and build work for companies that need a stronger, more intentional digital presence.",
  },
  {
    title: "Brand Identity",
    body: "Visual identity direction including logo presence, brand tone, design language, and overall presentation consistency.",
  },
  {
    title: "Website Updates",
    body: "Refining current websites through layout improvements, visual upgrades, cleaner structure, and stronger brand alignment.",
  },
] as const;

export function ServicesSection() {
  return (
    <SectionShell
      id="services"
      aria-labelledby="services-heading"
      className="relative border-t border-white/[0.06] bg-gradient-to-b from-black via-zinc-950/32 to-black !py-24 md:!py-32 lg:!py-36"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_45%_at_20%_10%,rgba(232,148,58,0.06),transparent_55%)]"
        aria-hidden
      />

      <div className="relative">
        <ScrollReveal>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.26em] text-zinc-500 sm:text-sm sm:tracking-[0.22em]">
            Services
          </p>
          <h2
            id="services-heading"
            className="mt-4 max-w-4xl text-pretty text-3xl font-semibold tracking-tight text-zinc-100 sm:mt-5 sm:text-4xl md:text-[2.5rem] md:leading-tight"
          >
            Digital presence, brand identity, and{" "}
            <span className="text-gradient-gold">website refinement.</span>
          </h2>
          <p className="mt-8 max-w-3xl text-pretty text-base font-medium leading-relaxed text-zinc-400 sm:text-lg sm:leading-relaxed">
            SCS Nova works with companies to design and refine their digital presence through website
            creation, brand identity development, and strategic visual updates. Whether building from
            the ground up or improving what already exists, the goal is to create a stronger, cleaner,
            more intentional brand experience.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-5 sm:mt-16 md:grid-cols-3 md:gap-6">
          {services.map((s, i) => (
            <ScrollReveal
              key={s.title}
              delayMs={i * 80}
              className="flex flex-col rounded-2xl border border-white/[0.1] bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_24px_48px_rgba(0,0,0,0.38)] ring-1 ring-cauris-gold/[0.08] transition-[border-color,box-shadow] duration-500 hover:border-cauris-gold/18 hover:shadow-[0_0_40px_rgba(244,176,66,0.05)] sm:p-8"
            >
              <div className="h-px w-12 bg-gradient-to-r from-cauris-flame/60 to-transparent" />
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-zinc-50 sm:text-xl">
                {s.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-zinc-500 sm:text-[15px] sm:leading-relaxed">
                {s.body}
              </p>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delayMs={260} className="mt-12 md:mt-14">
          <p className="max-w-2xl text-pretty text-base font-medium leading-relaxed text-zinc-400 sm:text-lg">
            Built to help brands look sharper, feel stronger, and present with clarity.
          </p>
        </ScrollReveal>
      </div>
    </SectionShell>
  );
}
