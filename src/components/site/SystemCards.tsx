"use client";

import { ScrollReveal } from "@/components/scroll-reveal";

const cards = [
  {
    kicker: "Timeline",
    title: "Structured memory",
    body: "What you capture becomes ordered memory you can revisit and sequence.",
  },
  {
    kicker: "Helix",
    title: "Connected view",
    body: "Themes, people, and events linked so the whole picture stays navigable.",
  },
  {
    kicker: "Insight",
    title: "Pattern read",
    body: "Recurring signals and tradeoffs surfaced from your trail — not generic tips.",
  },
] as const;

export function SystemCards() {
  return (
    <div className="mt-20 grid gap-7 md:grid-cols-3 md:gap-6 lg:mt-24 lg:gap-7">
      {cards.map((card, i) => (
        <ScrollReveal
          key={card.kicker}
          delayMs={i * 100}
          visibleClassName="hover:-translate-y-0.5"
          className="cauris-glass-card group p-7 sm:p-8"
        >
          <div className="flex items-baseline justify-between gap-3">
            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-cauris-flame/85">
              {card.kicker}
            </span>
            <span className="h-px w-10 bg-gradient-to-r from-cauris-flame/50 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
          </div>
          <h3 className="mt-6 text-lg font-semibold tracking-[-0.02em] text-zinc-100">{card.title}</h3>
          <p className="mt-3.5 text-sm leading-relaxed text-zinc-300">{card.body}</p>
        </ScrollReveal>
      ))}
    </div>
  );
}
