import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionShell } from "@/components/section-shell";
import { SectionHeader } from "./SectionHeader";

export function PhilosophySection() {
  return (
    <SectionShell
      aria-labelledby="philosophy-heading"
      className="border-t border-white/[0.08] bg-black/35 !py-32 md:!py-40 lg:!py-48"
    >
      <div className="mx-auto max-w-2xl text-center">
        <ScrollReveal slow>
          <SectionHeader
            eyebrow="Philosophy"
            headingId="philosophy-heading"
            title="Our Philosophy"
            eyebrowClassName="cauris-kicker text-zinc-500"
            titleClassName="mt-6 text-balance text-3xl font-semibold tracking-[-0.02em] text-zinc-100 sm:text-4xl md:text-[2.85rem] md:leading-[1.06]"
          />
        </ScrollReveal>

        <ScrollReveal slow delayMs={140} className="mt-16 space-y-12 text-pretty sm:mt-20">
          <p className="text-lg font-medium leading-relaxed text-zinc-300 sm:text-xl sm:leading-relaxed">
            Life is not random.
            <br />
            <span className="text-zinc-200">It is data waiting to be understood.</span>
          </p>

          <div className="space-y-5 text-base leading-[1.88] text-zinc-500 sm:text-lg sm:leading-[1.92]">
            <p>Every experience holds meaning.</p>
            <p>Every pattern can be revealed.</p>
            <p>Every decision can be improved.</p>
          </div>

          <p className="pt-2 text-base font-medium text-zinc-400 sm:text-lg">
            Cauris exists to bring clarity to complexity.
          </p>
        </ScrollReveal>

        <div
          className="mx-auto mt-20 h-px max-w-sm bg-gradient-to-r from-transparent via-cauris-flame/30 to-transparent sm:mt-24"
          aria-hidden
        />
      </div>
    </SectionShell>
  );
}
