import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionShell } from "@/components/section-shell";

const demos = [
  {
    title: "Cauris demo",
    line: "Guided browser walkthrough of the life-intelligence direction.",
    href: "/demo",
  },
  {
    title: "RangeOS demo",
    line: "Interactive look at the range-facing inventory and booking system.",
    href: "/rangeos-demo",
  },
  {
    title: "Light style demo",
    line: "Alternative brand style example for cleaner business presentation.",
    href: "/light-demo",
  },
] as const;

export function DemosPreviewSection() {
  return (
    <SectionShell
      id="demos-preview"
      aria-labelledby="demos-preview-heading"
      className="relative overflow-hidden border-t border-white/[0.08] bg-gradient-to-b from-black/38 via-zinc-950/12 to-black/38 !py-24 md:!py-30 lg:!py-34"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_50%_at_50%_0%,rgba(232,148,58,0.07),transparent_58%)]"
        aria-hidden
      />
      <div className="relative">
        <ScrollReveal>
          <p className="cauris-kicker text-zinc-400">Demos</p>
          <h2
            id="demos-preview-heading"
            className="mt-5 max-w-4xl text-pretty text-3xl font-semibold tracking-[-0.025em] text-zinc-100 sm:text-4xl md:text-[2.6rem] md:leading-[1.08]"
          >
            See how the systems work
          </h2>
          <p className="mt-7 max-w-3xl text-pretty text-base leading-relaxed text-zinc-300 sm:text-lg">
            Short guided previews for visitors who want product feel before a deeper conversation.
          </p>
          <Link
            href="/demos"
            className="mt-7 inline-flex w-fit items-center text-sm font-medium text-zinc-300 underline decoration-white/[0.14] underline-offset-4 transition-colors hover:text-cauris-dawn hover:decoration-cauris-gold/35"
          >
            View all demos
          </Link>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {demos.map((demo, i) => (
            <ScrollReveal
              key={demo.title}
              delayMs={80 + i * 70}
              className="flex h-full flex-col rounded-brand border border-white/[0.12] bg-gradient-to-b from-white/[0.09] to-white/[0.022] p-7 shadow-cauris-elevate-sm ring-1 ring-cauris-gold/[0.1] backdrop-blur-md sm:p-8"
            >
              <h3 className="text-lg font-semibold tracking-[-0.02em] text-zinc-50 sm:text-xl">
                {demo.title}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-300 sm:text-[15px] sm:leading-relaxed">
                {demo.line}
              </p>
              <Link
                href={demo.href}
                className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-brand-sm border border-white/[0.14] bg-white/[0.03] px-4 text-sm font-medium text-zinc-200 transition-colors hover:border-cauris-gold/35 hover:text-cauris-dawn sm:w-fit sm:justify-start sm:rounded-none sm:border-0 sm:bg-transparent sm:px-0 sm:underline sm:decoration-white/[0.14] sm:underline-offset-4 sm:hover:decoration-cauris-gold/35"
              >
                Open demo
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
