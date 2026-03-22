import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionShell } from "@/components/section-shell";

export function CompanyContactSection() {
  return (
    <SectionShell
      id="scs-nova"
      aria-labelledby="company-name-heading"
      className="border-t border-white/[0.05] bg-black !py-16 md:!py-24 lg:!py-32"
    >
      <ScrollReveal>
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-zinc-600">
          Company
        </p>
        <h2
          id="company-name-heading"
          className="mt-3 text-balance text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl"
        >
          SCS Nova
        </h2>
        <p className="mt-6 max-w-md text-pretty text-sm leading-relaxed text-zinc-500 sm:text-base">
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
          href="mailto:SCSANova.Business@gmail.com"
          className="mt-3 inline-block border-b border-cauris-gold/20 pb-px text-sm text-zinc-300 transition-[color,border-color] duration-300 hover:border-cauris-flame/45 hover:text-cauris-dawn sm:text-base"
        >
          SCSANova.Business@gmail.com
        </a>
      </ScrollReveal>
    </SectionShell>
  );
}
