"use client";

import { demoUi } from "@/components/demo/demoUi";
import {
  demoInsightCards,
  demoInsightContinuity,
  demoInsightIntro,
  demoInsightMain,
  demoInsightSupport,
  demoPhaseEyebrows,
} from "@/data/caurisDemoContent";

export function DemoInsightStep() {
  const titleId = "demo-insight-title";

  return (
    <div className={demoUi.region} role="region" aria-labelledby={titleId}>
      <div className={demoUi.introMax}>
        <p className={demoUi.phaseEyebrow}>{demoPhaseEyebrows.insight}</p>
        <h2 id={titleId} className={demoUi.stepTitle}>
          {demoInsightIntro.title}
        </h2>
        <p className={demoUi.lead}>{demoInsightIntro.supporting}</p>
        <p className={demoUi.leadDim}>{demoInsightIntro.secondary}</p>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-indigo-400/18 bg-indigo-950/30 px-3 py-1.5">
          <span
            className="h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400/80 shadow-[0_0_12px_rgba(129,140,248,0.35)]"
            aria-hidden
          />
          <span className="text-[11px] font-medium text-zinc-300">
            {demoInsightContinuity.label}
          </span>
        </div>
        <p className={demoUi.footnote}>{demoInsightContinuity.note}</p>
      </div>

      <div className={`${demoUi.sectionY} ${demoUi.gridSplit}`}>
        <div className="flex flex-col gap-8 sm:gap-10">
          <article
            className="demo-insight-hero relative overflow-hidden rounded-brand border border-white/[0.13] bg-gradient-to-b from-white/[0.095] to-black/34 p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_80px_rgba(88,60,180,0.12),0_28px_64px_rgba(0,0,0,0.28)] ring-1 ring-cauris-gold/[0.14] backdrop-blur-md sm:p-9"
            style={{
              backgroundImage:
                "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(244, 176, 66, 0.09), transparent 58%), radial-gradient(ellipse 60% 50% at 85% 100%, rgba(88, 60, 180, 0.14), transparent 55%)",
            }}
          >
            <div
              className="pointer-events-none absolute -left-8 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-cauris-flame/[0.06] blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 opacity-90"
              aria-hidden
              style={{
                background:
                  "radial-gradient(ellipse 50% 40% at 50% 45%, rgba(129, 140, 248, 0.06), transparent 70%)",
              }}
            />
            <div className="relative">
              <p className={`${demoUi.kickerTrack} text-cauris-dawn/85`}>Primary read</p>
              <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em] text-zinc-50 sm:text-2xl">
                {demoInsightMain.title}
              </h3>
              <p className="mt-4 max-w-2xl text-pretty text-sm font-medium leading-relaxed text-zinc-400 sm:text-[15px]">
                {demoInsightMain.body}
              </p>
            </div>
          </article>

          <ul className="grid gap-4 sm:grid-cols-2" role="list">
            {demoInsightCards.map((card, i) => (
              <li
                key={card.title}
                className="demo-insight-card group relative overflow-hidden rounded-brand border border-white/[0.11] bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.065),0_18px_44px_rgba(0,0,0,0.2)] ring-1 ring-white/[0.04] backdrop-blur-md transition duration-500 hover:border-indigo-400/28 hover:shadow-[0_0_48px_rgba(88,60,180,0.1)]"
                style={{ animationDelay: `${120 + i * 75}ms` }}
              >
                <div
                  className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-indigo-500/[0.06] blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-70"
                  aria-hidden
                />
                <h4 className="relative text-xs font-semibold uppercase tracking-wider text-zinc-200">
                  {card.title}
                </h4>
                <p className="relative mt-2.5 text-sm leading-relaxed text-zinc-400">
                  {card.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <aside className={demoUi.stickyAside}>
          <div className={`relative overflow-hidden ${demoUi.productAside} p-6`}>
            <div
              className="pointer-events-none absolute right-0 top-0 h-28 w-28 translate-x-1/4 -translate-y-1/4 rounded-full bg-indigo-500/[0.08] blur-3xl"
              aria-hidden
            />
            <p className={`relative ${demoUi.kickerTrack} text-zinc-400`}>{demoInsightSupport.title}</p>
            <p className="relative mt-4 text-sm leading-relaxed text-zinc-400">
              {demoInsightSupport.body}
            </p>
            <ul
              className="relative mt-5 flex flex-wrap gap-2"
              role="list"
              aria-label="Insight qualities"
            >
              {demoInsightSupport.tags.map((tag) => (
                <li key={tag}>
                  <span className="inline-flex rounded-full border border-white/[0.1] bg-white/[0.03] px-3 py-1 text-[11px] font-medium text-zinc-400">
                    {tag}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
