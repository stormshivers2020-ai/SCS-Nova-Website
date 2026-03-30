import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionShell } from "@/components/section-shell";
import { publicImagePath } from "@/lib/publicImagePath";

type WorkItem =
  | {
      title: string;
      category: string;
      description: string;
      kind: "single";
      file: string;
      alt: string;
    }
  | {
      title: string;
      category: string;
      description: string;
      kind: "dual-apparel";
      files: readonly { file: string; alt: string }[];
    }
  | {
      title: string;
      category: string;
      description: string;
      kind: "text";
    };

/** Exact filenames from `public/` — do not guess. */
const WORK_ITEMS: WorkItem[] = [
  {
    kind: "single",
    file: "logo.png",
    alt: "SCS Nova mark — live site identity",
    category: "Website Design",
    title: "SCS Nova Website",
    description: "Flagship site introducing the SCS Nova / Cauris ecosystem with cinematic depth.",
  },
  {
    kind: "single",
    file: "Cauris-hero.png",
    alt: "Cauris brand and hero visual direction",
    category: "Brand Identity",
    title: "Cauris Brand Direction",
    description: "Identity and hero language for Cauris — memory-first, calm, premium.",
  },
  {
    kind: "single",
    file: "B-Cauris Hero.png",
    alt: "B-Cauris visual identity preview",
    category: "Visual Direction",
    title: "B-Cauris Visual Identity",
    description: "Operational-side visual system — in development, shown as direction only.",
  },
  {
    kind: "dual-apparel",
    category: "Apparel Concepts",
    title: "Apparel Preview",
    description: "Early concepts for SCS Nova apparel — same universe as the digital brand.",
    files: [
      { file: "Apparel copy.png", alt: "SCS Nova apparel preview one" },
      { file: "Apparel 2 copy.png", alt: "SCS Nova apparel preview two" },
    ],
  },
  {
    kind: "text",
    category: "System Builds",
    title: "Homepage System Build",
    description:
      "This homepage: layered storytelling, build transparency, and motion — built as a system, not a template.",
  },
];

export function SelectedWorkSection() {
  return (
    <SectionShell
      id="selected-work"
      aria-labelledby="selected-work-heading"
      className="relative overflow-hidden border-t border-white/[0.08] bg-gradient-to-b from-black via-zinc-950/32 to-black !py-28 md:!py-36 lg:!py-40"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_50%_at_50%_0%,rgba(232,148,58,0.09),transparent_58%)]"
        aria-hidden
      />

      <div className="relative">
        <ScrollReveal>
          <p className="cauris-kicker">
            Selected Work
          </p>
          <h2
            id="selected-work-heading"
            className="mt-5 max-w-4xl text-pretty text-3xl font-semibold tracking-[-0.02em] text-zinc-100 sm:mt-6 sm:text-4xl md:text-[2.85rem] md:leading-[1.06]"
          >
            Product, web, and brand — in parallel
          </h2>
          <p className="mt-10 max-w-3xl text-pretty text-base font-medium leading-relaxed text-zinc-200 sm:mt-11 sm:text-lg sm:leading-relaxed">
            Shipped web work, in-development product identity, and early apparel concepts — not a full
            portfolio, but real output from the studio.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {WORK_ITEMS.map((item, i) => (
            <ScrollReveal
              key={item.title}
              delayMs={i * 70}
              className={`flex flex-col overflow-hidden rounded-brand border border-white/[0.11] bg-gradient-to-b from-white/[0.085] to-white/[0.024] shadow-cauris-elevate-sm ring-1 ring-cauris-gold/[0.1] backdrop-blur-md transition-[border-color,box-shadow,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-cauris-gold/22 hover:shadow-[0_0_56px_rgba(244,176,66,0.08)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${
                item.kind === "dual-apparel" ? "sm:col-span-2 lg:col-span-2" : ""
              }`}
            >
              {item.kind === "single" && (
                <div className="relative aspect-[16/10] w-full border-b border-white/[0.09] bg-zinc-950/36 backdrop-blur-sm">
                  <Image
                    src={publicImagePath(item.file)}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain object-center p-4 brightness-[1.06] contrast-[1.04]"
                  />
                </div>
              )}

              {item.kind === "dual-apparel" && (
                <div className="grid grid-cols-2 border-b border-white/[0.09] bg-zinc-950/36 backdrop-blur-sm">
                  {item.files.map(({ file, alt }) => (
                    <div key={file} className="relative aspect-square border-r border-white/[0.06] last:border-r-0">
                      <Image
                        src={publicImagePath(file)}
                        alt={alt}
                        fill
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-contain object-center p-3 brightness-[1.06] contrast-[1.04] sm:p-4"
                      />
                    </div>
                  ))}
                </div>
              )}

              {item.kind === "text" && (
                <div className="relative aspect-[16/10] w-full border-b border-white/[0.08] bg-gradient-to-br from-zinc-950/80 via-black to-zinc-950/60">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(244,176,66,0.12),transparent_62%)]" />
                  <div className="relative flex h-full items-center justify-center px-6">
                    <p className="text-center font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-400 sm:text-[11px]">
                      Iterating in public
                    </p>
                  </div>
                </div>
              )}

              <div className="flex flex-1 flex-col p-7 sm:p-8">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-cauris-flame/88 sm:text-[11px]">
                  {item.category}
                </p>
                <h3 className="mt-4 text-lg font-semibold tracking-[-0.02em] text-zinc-50 sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3.5 text-sm leading-relaxed text-zinc-500 sm:text-[15px] sm:leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
