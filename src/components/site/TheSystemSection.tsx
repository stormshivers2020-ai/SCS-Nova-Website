import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionShell } from "@/components/section-shell";
import { SectionHeader } from "./SectionHeader";
import { SystemCards } from "./SystemCards";

export function TheSystemSection() {
  return (
    <SectionShell
      id="insight"
      aria-labelledby="the-system-heading"
      className="border-t border-white/[0.05] bg-gradient-to-b from-black via-black to-zinc-950/40"
    >
      <ScrollReveal>
        <SectionHeader
          eyebrow="The system"
          headingId="the-system-heading"
          title={<span className="text-gradient-gold">The System</span>}
        />
      </ScrollReveal>

      <SystemCards />
    </SectionShell>
  );
}
