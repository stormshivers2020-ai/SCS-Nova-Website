import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionShell } from "@/components/section-shell";
import { buildBusinessMailto, SCS_NOVA_BUSINESS_EMAIL } from "@/data/siteContact";

const MAILTO_HREF = buildBusinessMailto();

export function CompanyContactSection() {
  return (
    <SectionShell
      id="scs-nova"
      aria-labelledby="company-name-heading"
      className="border-t border-white/[0.05] bg-black !py-16 md:!py-24 lg:!py-32"
    >
      <ScrollReveal>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-stretch">
          <div className="flex flex-col">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-zinc-600">
              Company
            </p>
            <h2
              id="company-name-heading"
              className="mt-3 text-balance text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl"
            >
              SCS Nova
            </h2>
            <p className="mt-6 max-w-md text-pretty text-sm leading-relaxed text-zinc-400 sm:text-base">
              16A Belair South Parkway, Bel Air, MD 21015
            </p>

            <div
              className="mt-12 h-px max-w-xs bg-gradient-to-r from-transparent via-cauris-flame/25 to-transparent sm:mt-14"
              aria-hidden
            />

            <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.28em] text-zinc-600 sm:mt-12">
              Contact
            </p>
            <a
              href={MAILTO_HREF}
              className="mt-3 inline-block w-fit border-b border-cauris-gold/20 pb-px text-sm text-zinc-200 transition-[color,border-color] duration-300 hover:border-cauris-flame/45 hover:text-cauris-dawn focus:outline-none focus-visible:ring-2 focus-visible:ring-cauris-flame focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:text-base"
            >
              {SCS_NOVA_BUSINESS_EMAIL}
            </a>
          </div>

          <aside
            className="flex flex-col rounded-2xl border border-white/[0.1] bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_24px_48px_rgba(0,0,0,0.38)] ring-1 ring-cauris-gold/[0.1] sm:p-8"
            aria-labelledby="request-services-heading"
          >
            <div className="h-px w-12 bg-gradient-to-r from-cauris-flame/60 to-transparent" aria-hidden />
            <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.28em] text-zinc-600">
              Request Services
            </p>
            <h3
              id="request-services-heading"
              className="mt-4 text-balance text-xl font-semibold tracking-tight text-zinc-50 sm:text-2xl"
            >
              Website, brand, or a disciplined refresh?
            </h3>
            <p className="mt-5 text-pretty text-sm leading-relaxed text-zinc-400 sm:text-[15px] sm:leading-relaxed">
              Tell us what you&apos;re building. SCS Nova takes on new sites, identity programs, and
              focused updates to existing properties — scoped, direct, no agency theater.
            </p>
            <a
              href={MAILTO_HREF}
              className="mt-8 inline-flex w-fit min-h-11 items-center justify-center rounded-xl border border-cauris-gold/28 bg-cauris-flame/[0.08] px-6 py-3.5 text-sm font-semibold tracking-tight text-cauris-dawn shadow-[0_0_40px_rgba(244,176,66,0.06)] transition-[border-color,background-color,box-shadow,color] duration-300 hover:border-cauris-flame/45 hover:bg-cauris-flame/[0.12] hover:text-zinc-50 hover:shadow-[0_0_48px_rgba(244,176,66,0.1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cauris-flame focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:mt-9 sm:px-7 sm:py-4 sm:text-base"
            >
              Start a project conversation
            </a>
            <p className="mt-5 text-pretty text-xs leading-relaxed text-zinc-500 sm:text-sm">
              Opens your email client — we read what you send and reply personally.
            </p>
          </aside>
        </div>
      </ScrollReveal>
    </SectionShell>
  );
}
