import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionShell } from "@/components/section-shell";
import { buildBusinessMailto } from "@/data/siteContact";

const capabilities = [
  "Capture operational context across tasks, files, and messages",
  "Build workflow memory so teams stop re-explaining work",
  "Surface next actions with less manual tracking",
  "Create clearer execution rhythm across business operations",
] as const;

const idealFor = [
  "Teams running recurring client or internal workflows",
  "Operators who need better continuity across busy work days",
  "Businesses building process discipline without heavy overhead",
] as const;

export default function BCaurisPage() {
  const mailto = buildBusinessMailto({ subject: "B-Cauris — Question for the team" });

  return (
    <div className="relative min-h-[100dvh] overflow-x-hidden">
      <div className="cauris-ambient" aria-hidden>
        <div className="cauris-grid" />
        <div className="cauris-starfield animate-twinkle" />
        <div className="cauris-vignette" />
        <div className="cauris-grain" />
      </div>

      <SectionShell
        id="b-cauris-hero"
        aria-labelledby="b-cauris-page-heading"
        className="relative overflow-hidden bg-gradient-to-b from-black/46 via-zinc-950/14 to-black/36 !py-20 md:!py-32 lg:!py-36"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_84%_52%_at_50%_0%,rgba(232,148,58,0.1),transparent_58%)]" />
        <ScrollReveal className="relative">
          <p className="cauris-kicker">B-Cauris</p>
          <h1
            id="b-cauris-page-heading"
            className="mt-5 max-w-5xl text-pretty text-3xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-4xl md:text-[3rem] md:leading-[1.05]"
          >
            Operational intelligence for the way you work.
          </h1>
          <p className="mt-7 max-w-3xl text-pretty text-base font-medium leading-relaxed text-zinc-200 sm:text-lg">
            The business-side branch of Cauris: workflow memory, execution clarity, and structured
            operational context.
          </p>
          <div className="mt-10 flex w-full max-w-lg flex-col gap-3.5 sm:flex-row sm:gap-4">
            <Link href="/demos" className="cauris-btn-primary-card">
              Explore demos hub
            </Link>
            <a href={mailto} className="cauris-btn-tertiary-card">
              Request updates
            </a>
          </div>
        </ScrollReveal>
      </SectionShell>

      <SectionShell className="border-t border-white/[0.08] bg-gradient-to-b from-black/34 via-zinc-950/10 to-black/34 !py-24 md:!py-28">
        <ScrollReveal>
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-4xl">What B-Cauris is</h2>
          <p className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-zinc-300 sm:text-lg">
            B-Cauris is an operational intelligence and workflow memory system designed to help teams
            keep context, reduce friction, and execute with clarity.
          </p>
        </ScrollReveal>
      </SectionShell>

      <SectionShell className="border-t border-white/[0.08] bg-gradient-to-b from-black/36 via-zinc-950/12 to-black/36 !py-24 md:!py-30 lg:!py-34">
        <ScrollReveal>
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-4xl">What it does</h2>
        </ScrollReveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {capabilities.map((item, i) => (
            <ScrollReveal
              key={item}
              delayMs={70 + i * 60}
              className="rounded-brand border border-white/[0.12] bg-gradient-to-b from-white/[0.09] to-white/[0.022] p-6 shadow-cauris-elevate-sm ring-1 ring-cauris-gold/[0.1] sm:p-7"
            >
              <p className="text-sm font-medium leading-relaxed text-zinc-200 sm:text-[15px] sm:leading-relaxed">
                {item}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="border-t border-white/[0.08] bg-gradient-to-b from-black/34 via-zinc-950/10 to-black/34 !py-24 md:!py-28">
        <ScrollReveal>
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-4xl">Who it is for</h2>
          <ul className="mt-8 space-y-4">
            {idealFor.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-zinc-300 sm:text-base">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cauris-flame/70" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </SectionShell>

      <SectionShell className="border-t border-white/[0.08] bg-gradient-to-b from-black/40 via-zinc-950/12 to-black/44 !py-24 md:!py-30 lg:!py-34">
        <ScrollReveal className="rounded-brand-lg border border-white/[0.12] bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-8 text-center shadow-cauris-elevate-md ring-1 ring-cauris-gold/[0.11] sm:p-10 md:p-12">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-4xl">Why it matters</h2>
          <p className="mx-auto mt-6 max-w-3xl text-pretty text-base leading-relaxed text-zinc-300 sm:text-lg">
            Work quality depends on context continuity. B-Cauris is designed to keep operational memory
            intact so execution stays accurate and scalable.
          </p>
          <div className="mx-auto mt-10 flex w-full max-w-lg flex-col gap-3.5 sm:flex-row sm:justify-center sm:gap-4">
            <Link href="/demos" className="cauris-btn-primary-card">
              Go to demos hub
            </Link>
            <a href={mailto} className="cauris-btn-tertiary-card">
              Contact SCS Nova
            </a>
          </div>
        </ScrollReveal>
      </SectionShell>
    </div>
  );
}
