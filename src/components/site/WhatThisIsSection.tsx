import { IntelligenceHelixVisual } from "@/components/intelligence-helix-visual";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionShell } from "@/components/section-shell";
import { SectionHeader } from "./SectionHeader";

export function WhatThisIsSection() {
  return (
    <SectionShell id="memory" aria-labelledby="what-this-is-heading">
      <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-20">
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
              titleClassName="mt-4 text-balance text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl"
            />
            <div className="mt-8 space-y-5 text-pretty text-base leading-relaxed text-zinc-300 sm:text-[17px] sm:leading-relaxed">
              <p>
                Cauris is a personal intelligence system that turns everyday input into structured
                memory, connected insight, and clearer decisions — not another notes app.
              </p>
              <p className="text-zinc-400">
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
