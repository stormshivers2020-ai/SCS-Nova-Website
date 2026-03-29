import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionShell } from "@/components/section-shell";

const items = [
  {
    name: "Cauris",
    status: "In development",
    statusVariant: "development" as const,
    description:
      "Life-side intelligence: capture, structure, patterns, and insight. Guided demo available on this site.",
  },
  {
    name: "B-Cauris",
    status: "In development",
    statusVariant: "development" as const,
    description:
      "Work-side companion for operational memory and workflow clarity. Building alongside Cauris.",
  },
  {
    name: "Apparel",
    status: "Coming soon",
    statusVariant: "soon" as const,
    description: "Premium apparel in design — the physical layer of the SCS Nova identity.",
  },
] as const;

export function BuildStatusSection() {
  return (
    <SectionShell
      id="build-status"
      aria-labelledby="build-status-heading"
      className="relative border-t border-white/[0.06] bg-gradient-to-b from-black via-zinc-950/35 to-black !py-24 md:!py-32 lg:!py-36"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_0%,rgba(232,148,58,0.08),transparent_60%)]"
        aria-hidden
      />

      <div className="relative">
        <ScrollReveal>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.26em] text-zinc-500 sm:text-sm sm:tracking-[0.22em]">
            Ecosystem status
          </p>
          <h2
            id="build-status-heading"
            className="mt-4 max-w-3xl text-pretty text-3xl font-semibold tracking-tight text-zinc-100 sm:mt-5 sm:text-4xl md:text-[2.5rem] md:leading-tight"
          >
            Actively in build
          </h2>
          <p className="mt-8 max-w-3xl text-pretty text-base font-medium leading-relaxed text-zinc-300 sm:text-lg sm:leading-relaxed">
            This is a living ecosystem — not a frozen launch page. Cauris and B-Cauris are in
            development in parallel; apparel is queued as a brand extension. What you see here is the
            current shape of the work.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-5 sm:mt-16 md:grid-cols-3 md:gap-6 lg:mt-20">
          {items.map((item, i) => (
            <ScrollReveal
              key={item.name}
              delayMs={i * 90}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.1] bg-gradient-to-b from-white/[0.05] to-white/[0.015] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_24px_48px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-[border-color,box-shadow] duration-500 hover:border-cauris-gold/25 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_28px_56px_rgba(0,0,0,0.4),0_0_48px_rgba(244,176,66,0.05)] sm:p-7"
            >
              <div className="pointer-events-none absolute -right-6 top-0 h-24 w-24 rounded-full bg-cauris-flame/[0.06] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative flex flex-col gap-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2 gap-y-1">
                  <h3 className="text-xl font-semibold tracking-tight text-zinc-50 sm:text-2xl">
                    {item.name}
                  </h3>
                  <span
                    className={`shrink-0 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] sm:text-[11px] ${
                      item.statusVariant === "development"
                        ? "text-cauris-dawn"
                        : "text-zinc-300"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
                <div className="h-px w-full bg-gradient-to-r from-cauris-flame/35 via-cauris-gold/20 to-transparent" />
                <p className="text-sm leading-relaxed text-zinc-400 sm:text-[15px] sm:leading-relaxed">
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
