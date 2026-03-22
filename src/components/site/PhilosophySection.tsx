import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionShell } from "@/components/section-shell";
import { SectionHeader } from "./SectionHeader";

export function PhilosophySection() {
  return (
    <SectionShell
      aria-labelledby="philosophy-heading"
      className="border-t border-white/[0.04] bg-black !py-28 md:!py-36 lg:!py-44"
    >
      <div className="mx-auto max-w-2xl text-center">
        <ScrollReveal slow>
          <SectionHeader
            eyebrow="Philosophy"
            headingId="philosophy-heading"
            title="Our Philosophy"
            eyebrowClassName="font-mono text-[11px] uppercase tracking-[0.32em] text-zinc-600"
            titleClassName="mt-6 text-balance text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl md:text-[2.5rem] md:leading-tight"
          />
        </ScrollReveal>

        <ScrollReveal slow delayMs={140} className="mt-14 space-y-10 text-pretty sm:mt-16">
          <p className="text-lg leading-relaxed text-zinc-400 sm:text-xl sm:leading-relaxed">
            Life is not random.
            <br />
            <span className="text-zinc-200">It is data waiting to be understood.</span>
          </p>

          <div className="space-y-4 text-base leading-[1.85] text-zinc-500 sm:text-lg sm:leading-[1.9]">
            <p>Every experience holds meaning.</p>
            <p>Every pattern can be revealed.</p>
            <p>Every decision can be improved.</p>
          </div>

          <p className="pt-4 text-base text-zinc-400 sm:text-lg">
            Cauris exists to bring clarity to complexity.
          </p>
        </ScrollReveal>

        <div
          className="mx-auto mt-16 h-px max-w-xs bg-gradient-to-r from-transparent via-cauris-flame/25 to-transparent sm:mt-20"
          aria-hidden
        />
      </div>
    </SectionShell>
  );
}
