import { IntelligenceHelixVisual } from "@/components/intelligence-helix-visual";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionShell } from "@/components/section-shell";
import { SectionHeader } from "./SectionHeader";

export function WhatThisIsSection() {
  return (
    <SectionShell
      id="memory"
      aria-labelledby="what-this-is-heading"
      className="relative overflow-hidden border-t border-white/[0.08] bg-gradient-to-b from-black/32 via-zinc-950/8 to-black/32"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_20%_30%,rgba(88,60,180,0.08),transparent_58%),radial-gradient(ellipse_70%_45%_at_85%_70%,rgba(232,148,58,0.06),transparent_55%)]"
        aria-hidden
      />
      <div className="relative grid items-center gap-16 sm:gap-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-28">
        <div className="order-2 lg:order-1">
          <ScrollReveal>
            <SectionHeader
              eyebrow="What this is"
              headingId="what-this-is-heading"
              title={
                <>
                  Not an app. <span className="text-gradient-gold">A system.</span>
                </>
              }
            />
            <div className="mt-12 space-y-7 text-pretty text-base leading-relaxed sm:mt-14 sm:text-[17px] sm:leading-relaxed">
              <p className="font-medium text-zinc-200">
                Cauris is in active development: a personal intelligence system that turns everyday input
                into structured memory, connected insight, and clearer decisions — not another notes app.
              </p>
              <p className="text-zinc-500">
                It doesn&apos;t just store information.
                <br />
                <span className="text-zinc-200">It organizes meaning.</span>
              </p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delayMs={90} className="order-1 justify-self-center lg:order-2 lg:justify-self-end">
          <IntelligenceHelixVisual />
        </ScrollReveal>
      </div>
    </SectionShell>
  );
}
