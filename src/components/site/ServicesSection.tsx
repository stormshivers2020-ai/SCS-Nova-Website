import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionShell } from "@/components/section-shell";
const services = [
  {
    title: "Websites",
    body: "Modern digital presence built to communicate clearly and convert with confidence.",
  },
  {
    title: "Inventory & booking systems",
    body: "Operational tools that keep product visibility and customer pathways organized.",
  },
  {
    title: "Brand systems",
    body: "Identity, structure, and consistency carried across pages, products, and workflows.",
  },
  {
    title: "Productized systems",
    body: "RangeOS, DashboardOS for consulting operations, and intelligence products scoped for real business use.",
  },
] as const;

export function ServicesSection() {
  return (
    <SectionShell
      id="services"
      aria-labelledby="services-heading"
      className="relative overflow-hidden border-t border-white/[0.08] bg-gradient-to-b from-black/38 via-zinc-950/10 to-black/38 !py-28 md:!py-36 lg:!py-40"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_45%_at_20%_10%,rgba(232,148,58,0.085),transparent_55%)]"
        aria-hidden
      />

      <div className="relative">
        <ScrollReveal>
          <p className="cauris-kicker">
            Services
          </p>
          <h2
            id="services-heading"
            className="mt-5 max-w-4xl text-pretty text-3xl font-semibold tracking-[-0.02em] text-zinc-100 sm:mt-6 sm:text-4xl md:text-[2.85rem] md:leading-[1.06]"
          >
            Services, systems, and pricing —{" "}
            <span className="text-gradient-gold">in one focused page.</span>
          </h2>
          <p className="mt-10 max-w-3xl text-pretty text-base font-medium leading-relaxed text-zinc-200 sm:mt-11 sm:text-lg sm:leading-relaxed">
            The homepage stays focused on brand and product direction. Full service architecture, pricing,
            and productized offerings now live on a dedicated Services route.
          </p>
          <div className="mt-10 flex w-full max-w-xl flex-col gap-3.5 sm:mt-11 sm:flex-row sm:gap-4">
            <Link
              href="/services"
              className="cauris-btn-primary-card inline-flex w-full min-h-12 items-center justify-center sm:w-auto sm:min-w-[220px]"
            >
              Open full services page
            </Link>
            <Link
              href="/services#request-services"
              className="cauris-btn-tertiary-card inline-flex w-full min-h-12 items-center justify-center sm:w-auto sm:min-w-[220px]"
            >
              Start Your Project
            </Link>
          </div>
          <p className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-zinc-500">
            Tell us what you&apos;re building — we&apos;ll reply with a clear next step.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:mt-18 lg:grid-cols-4 lg:gap-5">
          {services.map((s, i) => (
            <ScrollReveal
              key={s.title}
              delayMs={90 + i * 70}
              className="flex flex-col rounded-brand border border-white/[0.12] bg-gradient-to-b from-white/[0.09] to-white/[0.022] p-7 shadow-cauris-elevate-sm ring-1 ring-cauris-gold/[0.1] backdrop-blur-md transition-[border-color,box-shadow,transform] duration-[var(--cauris-duration-surface)] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-cauris-gold/20 hover:shadow-[0_0_48px_rgba(244,176,66,0.07)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-8"
            >
              <div className="h-px w-12 bg-gradient-to-r from-cauris-flame/60 to-transparent" />
              <h3 className="mt-6 text-lg font-semibold tracking-[-0.02em] text-zinc-50 sm:text-xl">
                {s.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-zinc-500 sm:text-[15px] sm:leading-relaxed">
                {s.body}
              </p>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delayMs={260} className="mt-14 md:mt-16">
          <p className="max-w-2xl text-pretty text-base font-medium leading-relaxed text-zinc-300 sm:text-lg">
            Full details, investments, and product offers live on{" "}
            <Link
              href="/services"
              className="text-cauris-dawn underline decoration-cauris-gold/30 underline-offset-[5px] transition-colors duration-[var(--cauris-duration-hover)] ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-zinc-50 hover:decoration-cauris-flame/55"
            >
              /services
            </Link>
            , while this homepage stays focused on company and product direction.
          </p>
        </ScrollReveal>
      </div>
    </SectionShell>
  );
}
