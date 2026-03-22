import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionShell } from "@/components/section-shell";
import { SectionHeader } from "./SectionHeader";

const features = [
  "A unified life operating system",
  "Memory-driven intelligence",
  "AI that evolves with you",
  "A global network of human timelines",
] as const;

export function TheFutureSection() {
  return (
    <SectionShell
      id="future"
      aria-labelledby="future-heading"
      className="border-t border-white/[0.06] bg-gradient-to-b from-black via-zinc-950/50 to-black"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_50%_at_50%_0%,rgba(232,148,58,0.07),transparent_55%)]" />

      <div className="relative">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Horizon"
            headingId="future-heading"
            title={
              <>
                What We&apos;re <span className="text-gradient-gold">Building</span>
              </>
            }
          />
        </ScrollReveal>

        <ScrollReveal delayMs={80} className="mt-14 sm:mt-16">
          <ul className="space-y-0 divide-y divide-white/[0.06] border-y border-white/[0.08]">
            {features.map((item) => (
              <li
                key={item}
                className="flex items-start gap-4 py-5 text-[15px] leading-snug text-zinc-300 sm:py-6 sm:text-lg"
              >
                <span
                  className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cauris-flame/70"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <ScrollReveal delayMs={180} className="mt-14 max-w-2xl sm:mt-16">
          <p className="text-pretty text-base leading-relaxed text-zinc-500 sm:text-lg">
            This is the beginning of a new way to live with intelligence.
          </p>
        </ScrollReveal>
      </div>
    </SectionShell>
  );
}
