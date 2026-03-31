import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionShell } from "@/components/section-shell";
import { buildBusinessMailto, MAILTO_SUBJECTS } from "@/data/siteContact";

const capabilities = [
  "Turn everyday input into structured memory",
  "Connect ideas, people, and moments into patterns",
  "Surface calmer next steps from your own history",
  "Preserve context so decisions improve over time",
] as const;

const idealFor = [
  "Founders and operators with dense daily context",
  "Creators managing multiple active threads",
  "People who need better memory and decision clarity",
] as const;

export default function CaurisPage() {
  const mailto = buildBusinessMailto({ subject: MAILTO_SUBJECTS.cauris });

  return (
    <div className="relative min-h-[100dvh] overflow-x-hidden">
      <div className="cauris-ambient" aria-hidden>
        <div className="cauris-grid" />
        <div className="cauris-starfield animate-twinkle" />
        <div className="cauris-vignette" />
        <div className="cauris-grain" />
      </div>

      <SectionShell
        id="cauris-hero"
        aria-labelledby="cauris-page-heading"
        className="relative overflow-hidden bg-gradient-to-b from-black/46 via-zinc-950/14 to-black/36 !py-20 md:!py-32 lg:!py-36"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_84%_52%_at_50%_0%,rgba(232,148,58,0.1),transparent_58%)]" />
        <ScrollReveal className="relative">
          <p className="cauris-kicker text-zinc-500">Cauris</p>
          <h1
            id="cauris-page-heading"
            className="mt-5 max-w-5xl text-pretty text-3xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-4xl md:text-[3rem] md:leading-[1.05]"
          >
            Intelligence for your life.
          </h1>
          <p className="mt-7 max-w-3xl text-pretty text-base font-medium leading-relaxed text-zinc-200 sm:text-lg">
            A life-intelligence system that turns everyday input into memory, structure, and insight.
          </p>
          <div className="mt-10 flex w-full max-w-lg flex-col gap-3.5 sm:flex-row sm:gap-4">
            <Link href="/demo" className="cauris-btn-primary-card">
              Open demo
            </Link>
            <a href={mailto} className="cauris-btn-tertiary-card">
              Ask about Cauris
            </a>
          </div>
        </ScrollReveal>
      </SectionShell>

      <SectionShell className="border-t border-white/[0.08] bg-gradient-to-b from-black/34 via-zinc-950/10 to-black/34 !py-24 md:!py-28">
        <ScrollReveal>
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-4xl">What Cauris is</h2>
          <p className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-zinc-300 sm:text-lg">
            Cauris is not another notes app. It is a memory-first intelligence system designed to help
            you capture life context, structure it, and make better decisions with less noise.
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
            When context is structured, decisions become calmer, clearer, and faster. Cauris exists to
            reduce repeat thinking and increase meaningful progress.
          </p>
          <div className="mx-auto mt-10 flex w-full max-w-lg flex-col gap-3.5 sm:flex-row sm:justify-center sm:gap-4">
            <Link href="/demo" className="cauris-btn-primary-card">
              View demo
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
