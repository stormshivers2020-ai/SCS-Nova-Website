import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionShell } from "@/components/section-shell";

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
    description:
      "Cinematic web presence built to introduce the SCS Nova ecosystem.",
  },
  {
    kind: "single",
    file: "Cauris-hero.png",
    alt: "Cauris brand and hero visual direction",
    category: "Brand Identity",
    title: "Cauris Brand Direction",
    description:
      "Brand and visual language for a memory-driven intelligence system.",
  },
  {
    kind: "single",
    file: "B-Cauris Hero.png",
    alt: "B-Cauris visual identity preview",
    category: "Visual Direction",
    title: "B-Cauris Visual Identity",
    description:
      "Operational intelligence identity work for the business side of the platform.",
  },
  {
    kind: "dual-apparel",
    category: "Apparel Concepts",
    title: "Apparel Preview",
    description: "Early apparel visuals extending the brand into physical form.",
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
      "Layered product storytelling, build status, and ecosystem framing — engineered for clarity and motion.",
  },
];

function imageSrc(file: string) {
  return `/${encodeURIComponent(file)}`;
}

export function SelectedWorkSection() {
  return (
    <SectionShell
      id="selected-work"
      aria-labelledby="selected-work-heading"
      className="relative border-t border-white/[0.06] bg-gradient-to-b from-black via-zinc-950/38 to-black !py-24 md:!py-32 lg:!py-36"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_50%_at_50%_0%,rgba(232,148,58,0.07),transparent_58%)]"
        aria-hidden
      />

      <div className="relative">
        <ScrollReveal>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.26em] text-zinc-500 sm:text-sm sm:tracking-[0.22em]">
            Selected Work
          </p>
          <h2
            id="selected-work-heading"
            className="mt-4 max-w-4xl text-pretty text-3xl font-semibold tracking-tight text-zinc-100 sm:mt-5 sm:text-4xl md:text-[2.5rem] md:leading-tight"
          >
            What we&apos;re building and shaping now
          </h2>
          <p className="mt-8 max-w-3xl text-pretty text-base font-medium leading-relaxed text-zinc-400 sm:text-lg sm:leading-relaxed">
            SCS Nova is actively developing digital systems, brand identity, and visual direction
            across multiple fronts — from cinematic websites and product ecosystems to logos,
            apparel, and future-facing intelligence platforms.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {WORK_ITEMS.map((item, i) => (
            <ScrollReveal
              key={item.title}
              delayMs={i * 70}
              className={`flex flex-col overflow-hidden rounded-2xl border border-white/[0.1] bg-gradient-to-b from-white/[0.045] to-white/[0.012] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_28px_56px_rgba(0,0,0,0.4)] ring-1 ring-cauris-gold/[0.08] transition-[border-color,box-shadow] duration-500 hover:border-cauris-gold/20 hover:shadow-[0_0_48px_rgba(244,176,66,0.06)] ${
                item.kind === "dual-apparel" ? "sm:col-span-2 lg:col-span-2" : ""
              }`}
            >
              {item.kind === "single" && (
                <div className="relative aspect-[16/10] w-full border-b border-white/[0.08] bg-zinc-950/50">
                  <Image
                    src={imageSrc(item.file)}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain object-center p-4 brightness-[1.06] contrast-[1.04]"
                  />
                </div>
              )}

              {item.kind === "dual-apparel" && (
                <div className="grid grid-cols-2 border-b border-white/[0.08] bg-zinc-950/50">
                  {item.files.map(({ file, alt }) => (
                    <div key={file} className="relative aspect-square border-r border-white/[0.06] last:border-r-0">
                      <Image
                        src={imageSrc(file)}
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
                    <p className="text-center font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-500 sm:text-[11px]">
                      In motion
                    </p>
                  </div>
                </div>
              )}

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-cauris-flame/85 sm:text-[11px]">
                  {item.category}
                </p>
                <h3 className="mt-3 text-lg font-semibold tracking-tight text-zinc-50 sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500 sm:text-[15px] sm:leading-relaxed">
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
