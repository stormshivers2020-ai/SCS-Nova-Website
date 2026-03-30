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
      className="relative overflow-hidden border-t border-white/[0.08] bg-gradient-to-b from-black via-zinc-950/32 to-black !py-28 md:!py-36 lg:!py-40"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_50%_at_80%_20%,rgba(244,176,66,0.08),transparent_58%)]"
        aria-hidden
      />
      <div className="relative grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start lg:gap-20">
        <ScrollReveal>
          <p className="cauris-kicker">
            Apparel
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-7">
            <h2
              id="apparel-heading"
              className="text-balance text-3xl font-semibold tracking-[-0.025em] text-zinc-100 sm:text-4xl md:text-[2.9rem] md:leading-[1.06]"
            >
              SCS Nova <span className="text-gradient-gold">Apparel</span>
            </h2>
            <span className="rounded-full border border-cauris-gold/25 bg-cauris-flame/[0.08] px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-cauris-dawn">
              In design · coming soon
            </span>
          </div>
          <p className="mt-10 max-w-lg text-pretty text-base font-medium leading-relaxed text-zinc-200 sm:mt-11 sm:text-lg">
            Apparel is a future branch of the same SCS Nova world as Cauris and B-Cauris — physical
            craft, not generic merch. Design is in progress; drops will follow when the line is
            ready.
          </p>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 sm:gap-7">
          {IMAGES.map(({ file, alt }, i) => (
            <ScrollReveal key={file} delayMs={i * 80}>
              <div className="relative overflow-hidden rounded-brand-lg border border-white/[0.12] bg-zinc-950/34 ring-1 ring-cauris-gold/[0.12] shadow-cauris-elevate-md backdrop-blur-md">
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
