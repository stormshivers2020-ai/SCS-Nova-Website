import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionShell } from "@/components/section-shell";
import { SectionHeader } from "./SectionHeader";

const features = [
  "A calmer life operating layer",
  "Memory-first intelligence",
  "Systems that deepen as you use them",
  "Human timelines, structured with care",
] as const;

export function TheFutureSection() {
  return (
    <SectionShell
      id="future"
      aria-labelledby="future-heading"
      className="relative overflow-hidden border-t border-white/[0.08] bg-gradient-to-b from-black/38 via-zinc-950/12 to-black/38"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_50%_at_50%_0%,rgba(232,148,58,0.09),transparent_55%)]" />

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

        <ScrollReveal delayMs={80} className="mt-16 sm:mt-20">
          <ul className="space-y-0 divide-y divide-white/[0.07] border-y border-white/[0.09]">
            {features.map((item) => (
              <li
                key={item}
                className="flex items-start gap-5 py-6 text-[15px] font-medium leading-snug text-zinc-200 sm:py-7 sm:text-lg"
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

        <ScrollReveal delayMs={180} className="mt-16 max-w-2xl sm:mt-20">
          <p className="text-pretty text-base leading-relaxed text-zinc-500 sm:text-lg">
            The roadmap is long; the commitment is to ship carefully — premium, human-centered, and
            built to last.
          </p>
        </ScrollReveal>
      </div>
    </SectionShell>
  );
}
