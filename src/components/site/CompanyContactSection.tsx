import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionShell } from "@/components/section-shell";
import {
  buildBusinessMailto,
  MAILTO_SUBJECTS,
  SCS_NOVA_BUSINESS_EMAIL,
} from "@/data/siteContact";

const MAILTO_GENERAL = buildBusinessMailto();
const MAILTO_PROJECT = buildBusinessMailto({ subject: MAILTO_SUBJECTS.studioProject });
const threadLinkClass =
  "text-sm font-medium text-zinc-300 underline decoration-white/[0.12] underline-offset-4 transition-colors hover:text-cauris-dawn hover:decoration-cauris-gold/35";

export function CompanyContactSection() {
  return (
    <SectionShell
      id="scs-nova"
      aria-labelledby="company-name-heading"
      className="scroll-mt-[5.5rem] border-t border-white/[0.08] bg-black/35 !py-24 md:!py-32 lg:!py-40"
    >
      <ScrollReveal>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-stretch">
          <div className="flex flex-col">
            <p className="cauris-kicker">Company</p>
            <h2
              id="company-name-heading"
              className="mt-5 text-balance text-3xl font-semibold tracking-[-0.02em] text-zinc-50 sm:text-4xl md:text-[2.65rem] md:leading-[1.08]"
            >
              SCS Nova
            </h2>
            <p className="mt-6 max-w-md text-pretty text-sm leading-relaxed text-zinc-300 sm:text-base">
              16A Belair South Parkway, Bel Air, MD 21015
            </p>
            <p className="mt-3 max-w-md text-pretty text-xs leading-relaxed text-zinc-300 sm:text-sm">
              Physical studio address — same team as the builds and demos on this site.
            </p>

            <div
              className="mt-12 h-px max-w-xs bg-gradient-to-r from-transparent via-cauris-flame/25 to-transparent sm:mt-14"
              aria-hidden
            />

            <p className="cauris-kicker mt-10 sm:mt-12">Contact</p>
            <p className="mt-3 max-w-md text-pretty text-sm leading-relaxed text-zinc-300">
              One inbox, read by the studio. Use a subject line that matches your ask — it helps us
              respond faster.
            </p>
            <a
              href={MAILTO_GENERAL}
              className="mt-4 inline-block w-fit border-b border-cauris-gold/20 pb-px text-sm text-zinc-200 transition-[color,border-color] duration-300 hover:border-cauris-flame/45 hover:text-cauris-dawn focus:outline-none focus-visible:ring-2 focus-visible:ring-cauris-flame focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:text-base"
            >
              {SCS_NOVA_BUSINESS_EMAIL}
            </a>
            <p className="mt-6 flex flex-wrap gap-x-3 gap-y-2 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-300 sm:text-[11px]">
              <Link href="/demo" className={threadLinkClass}>
                Cauris demo
              </Link>
              <span className="text-zinc-300" aria-hidden>
                ·
              </span>
              <Link href="/rangeos-demo" className={threadLinkClass}>
                RangeOS demo
              </Link>
              <span className="text-zinc-300" aria-hidden>
                ·
              </span>
              <Link href="/rangeos" className={threadLinkClass}>
                RangeOS on site
              </Link>
            </p>
          </div>

          <aside
            className="flex flex-col rounded-brand-lg border border-white/[0.11] bg-gradient-to-b from-white/[0.08] to-white/[0.022] p-7 shadow-cauris-elevate-sm ring-1 ring-cauris-gold/[0.11] backdrop-blur-md sm:p-8"
            aria-labelledby="request-services-heading"
          >
            <div className="h-px w-12 bg-gradient-to-r from-cauris-flame/60 to-transparent" aria-hidden />
            <p className="cauris-kicker mt-5">Request services</p>
            <h3
              id="request-services-heading"
              className="mt-5 text-balance text-xl font-semibold tracking-[-0.02em] text-zinc-50 sm:text-2xl"
            >
              Website, brand, or a disciplined refresh?
            </h3>
            <p className="mt-5 text-pretty text-sm leading-relaxed text-zinc-300 sm:text-[15px] sm:leading-relaxed">
              New sites, identity work, or a focused pass on what you already ship — scoped before we
              touch code.
            </p>
            <a
              href={MAILTO_PROJECT}
              className="cauris-btn-primary-card !mt-8 !flex-none !px-7 !py-3.5 sm:!mt-9 sm:!px-8 sm:!py-4"
            >
              Start Your Project
            </a>
            <p className="mt-4 text-pretty text-xs leading-relaxed text-zinc-300 sm:text-sm">
              Opens your mail app with a clear subject — add context in the body; we reply in person.
            </p>
            <div className="mt-8 border-t border-white/[0.08] pt-7">
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-300 sm:text-[11px]">
                Other threads
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                <li>
                  <a
                    href={buildBusinessMailto({ subject: MAILTO_SUBJECTS.studioServices })}
                    className={threadLinkClass}
                  >
                    Website &amp; brand services only
                  </a>
                </li>
                <li>
                  <a
                    href={buildBusinessMailto({ subject: MAILTO_SUBJECTS.cauris })}
                    className={threadLinkClass}
                  >
                    Question about Cauris
                  </a>
                </li>
                <li>
                  <a
                    href={buildBusinessMailto({ subject: MAILTO_SUBJECTS.rangeOS })}
                    className={threadLinkClass}
                  >
                    Question about RangeOS™
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </ScrollReveal>
    </SectionShell>
  );
}
