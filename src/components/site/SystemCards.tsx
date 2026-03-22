"use client";

import { ScrollReveal } from "@/components/scroll-reveal";

const cards = [
  {
    kicker: "Timeline",
    title: "Capture Your Life",
    body: "Log your experiences, thoughts, and actions as structured memory.",
  },
  {
    kicker: "Helix",
    title: "See the Structure",
    body: "Visualize your life as a connected system of people, ideas, and events.",
  },
  {
    kicker: "Insight",
    title: "Understand Yourself",
    body: "Reveal patterns, growth, and decisions through intelligent analysis.",
  },
] as const;

export function SystemCards() {
  return (
    <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-5 lg:mt-20 lg:gap-6">
      {cards.map((card, i) => (
        <ScrollReveal
          key={card.kicker}
          delayMs={i * 100}
          visibleClassName="hover:-translate-y-0.5"
          className="cauris-glass-card group rounded-2xl p-7 sm:p-8"
        >
          <div className="flex items-baseline justify-between gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cauris-flame/80">
              {card.kicker}
            </span>
            <span className="h-px w-10 bg-gradient-to-r from-cauris-flame/50 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
          </div>
          <h3 className="mt-5 text-lg font-semibold tracking-tight text-zinc-100">{card.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-zinc-500">{card.body}</p>
        </ScrollReveal>
      ))}
    </div>
  );
}
