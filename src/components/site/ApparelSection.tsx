import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionShell } from "@/components/section-shell";

const IMAGES = [
  { file: "Apparel copy.png", alt: "SCS Nova apparel preview" },
  { file: "Apparel 2 copy.png", alt: "SCS Nova apparel preview" },
] as const;

export function ApparelSection() {
  return (
    <SectionShell
      id="apparel"
      aria-labelledby="apparel-heading"
      className="border-t border-white/[0.06] bg-gradient-to-b from-black via-zinc-950/40 to-black !py-24 md:!py-32 lg:!py-36"
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start lg:gap-14">
        <ScrollReveal>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.26em] text-zinc-500 sm:text-sm">
            Apparel
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <h2
              id="apparel-heading"
              className="text-balance text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl"
            >
              SCS Nova <span className="text-gradient-gold">Apparel</span>
            </h2>
            <span className="rounded-full border border-cauris-gold/25 bg-cauris-flame/[0.08] px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-cauris-dawn">
              Coming soon
            </span>
          </div>
          <p className="mt-8 max-w-lg text-pretty text-base font-medium leading-relaxed text-zinc-400 sm:text-lg">
            A premium extension of the SCS Nova brand — visual direction in preview.
          </p>
        </ScrollReveal>

        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
          {IMAGES.map(({ file, alt }, i) => (
            <ScrollReveal key={file} delayMs={i * 80}>
              <div className="relative overflow-hidden rounded-2xl border border-white/[0.12] bg-zinc-950/50 ring-1 ring-cauris-gold/[0.1] shadow-[0_32px_64px_rgba(0,0,0,0.4),0_0_48px_rgba(244,176,66,0.06)]">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={`/${encodeURIComponent(file)}`}
                    alt={alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                    className="object-contain object-center p-3 brightness-[1.06] contrast-[1.05] sm:p-4"
                    priority={i === 0}
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
