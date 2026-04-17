import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionShell } from "@/components/section-shell";

const systems = [
  {
    name: "Cauris",
    line: "Life-intelligence system for memory, structure, and personal clarity.",
    href: "/demo",
    cta: "Explore Cauris demo",
  },
  {
    name: "B-Cauris",
    line: "Business/work intelligence branch focused on operational memory and execution.",
    href: "/b-cauris",
    cta: "Explore B-Cauris",
  },
  {
    name: "RangeOS™",
    line: "Productized range platform for website, inventory, booking, and growth flow.",
    href: "/rangeos",
    cta: "Explore RangeOS",
  },
  {
    name: "DashboardOS",
    line: "Consulting operations system for employee time, billable work, clients, payroll hours, and billing.",
    href: "/dashboardos",
    cta: "Explore DashboardOS",
  },
] as const;

export function ProductsOverviewSection() {
  return (
    <SectionShell
      id="products-overview"
      aria-labelledby="products-overview-heading"
      className="relative overflow-hidden border-t border-white/[0.08] bg-gradient-to-b from-black/36 via-zinc-950/10 to-black/36 !py-24 md:!py-30 lg:!py-34"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_86%_50%_at_50%_0%,rgba(232,148,58,0.08),transparent_58%)]"
        aria-hidden
      />
      <div className="relative">
        <ScrollReveal>
          <p className="cauris-kicker text-zinc-400">Products &amp; systems</p>
          <h2
            id="products-overview-heading"
            className="mt-5 max-w-4xl text-pretty text-3xl font-semibold tracking-[-0.025em] text-zinc-100 sm:text-4xl md:text-[2.7rem] md:leading-[1.07]"
          >
            One company. Multiple systems.
          </h2>
          <p className="mt-7 max-w-3xl text-pretty text-base leading-relaxed text-zinc-300 sm:text-lg">
            SCS Nova builds and evolves product systems in parallel. The homepage stays concise; each
            system has its own deeper path.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {systems.map((system, i) => (
            <ScrollReveal
              key={system.name}
              delayMs={70 + i * 70}
              className="flex h-full flex-col rounded-brand border border-white/[0.12] bg-gradient-to-b from-white/[0.09] to-white/[0.022] p-7 shadow-cauris-elevate-sm ring-1 ring-cauris-gold/[0.1] backdrop-blur-md sm:p-8"
            >
              <h3 className="text-lg font-semibold tracking-[-0.02em] text-zinc-50 sm:text-xl">
                {system.name}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-300 sm:text-[15px] sm:leading-relaxed">
                {system.line}
              </p>
              <Link
                href={system.href}
                className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-brand-sm border border-white/[0.14] bg-white/[0.03] px-4 text-sm font-medium text-zinc-200 transition-colors hover:border-cauris-gold/35 hover:text-cauris-dawn sm:w-fit sm:justify-start sm:rounded-none sm:border-0 sm:bg-transparent sm:px-0 sm:underline sm:decoration-white/[0.14] sm:underline-offset-4 sm:hover:decoration-cauris-gold/35"
              >
                {system.cta}
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
