import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionShell } from "@/components/section-shell";
import { SectionHeader } from "./SectionHeader";
import { SystemCards } from "./SystemCards";

export function TheSystemSection() {
  return (
    <SectionShell
      id="insight"
      aria-labelledby="the-system-heading"
      className="relative overflow-hidden border-t border-white/[0.08] bg-gradient-to-b from-black via-zinc-950/18 to-zinc-950/30"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_50%_at_50%_0%,rgba(232,148,58,0.06),transparent_58%)]"
        aria-hidden
      />
      <div className="relative">
        <ScrollReveal>
          <SectionHeader
            eyebrow="The system"
            headingId="the-system-heading"
            title={<span className="text-gradient-gold">The System</span>}
          />
        </ScrollReveal>

        <div className="mt-14 sm:mt-16 lg:mt-20">
          <SystemCards />
        </div>
      </div>
    </SectionShell>
  );
}
