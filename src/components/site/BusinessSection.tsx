import { BcaurisOperationalVisual } from "@/components/bcauris-operational-visual";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionShell } from "@/components/section-shell";

export function BusinessSection() {
  return (
    <SectionShell
      id="b-cauris"
      aria-labelledby="b-cauris-heading"
      className="border-t border-white/[0.05] bg-gradient-to-b from-black via-zinc-950/30 to-black"
    >
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <ScrollReveal className="order-2 lg:order-1">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-zinc-600">
            B-Cauris
          </p>
          <h2
            id="b-cauris-heading"
            className="mt-4 text-balance text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl"
          >
            Not a notes page.{" "}
            <span className="text-gradient-gold">Operational memory.</span>
          </h2>
          <p className="mt-8 text-pretty text-base leading-relaxed text-zinc-400 sm:text-[17px] sm:leading-relaxed">
            B-Cauris is the business branch of Cauris — a{" "}
            <span className="text-zinc-200">structured operational memory system</span> that keeps
            what actually runs the company: workflows, recurring exceptions, client patterns, and
            the trail from invoice to outcome.
          </p>
          <p className="mt-6 text-pretty text-base leading-relaxed text-zinc-500 sm:text-[17px] sm:leading-relaxed">
            PMIX, variance, reporting, and decision support stop living in scattered sheets and
            screenshots. They settle into one field you can query, trust, and reuse — so leadership
            isn&apos;t reconstructing reality from fragments.
          </p>
          <p className="mt-8 border-l border-cauris-gold/25 pl-5 text-pretty text-sm leading-relaxed text-zinc-400 sm:text-base sm:leading-relaxed">
            Everyday business work becomes{" "}
            <span className="font-medium text-zinc-200">reusable intelligence</span> — the same
            cinematic clarity as personal Cauris, extended into operations.
          </p>
          <p className="mt-10 font-mono text-[10px] uppercase leading-relaxed tracking-[0.2em] text-zinc-600 sm:text-[11px] sm:tracking-[0.24em]">
            One continuity · personal memory · operational memory
          </p>
        </ScrollReveal>

        <ScrollReveal delayMs={100} className="order-1 justify-self-center lg:order-2 lg:justify-self-end">
          <BcaurisOperationalVisual />
        </ScrollReveal>
      </div>
    </SectionShell>
  );
}
