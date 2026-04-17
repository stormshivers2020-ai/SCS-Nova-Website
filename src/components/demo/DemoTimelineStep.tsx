"use client";

import { demoUi } from "@/components/demo/demoUi";
import {
  demoPhaseEyebrows,
  demoTimelineChips,
  demoTimelineChronology,
  demoTimelineContinuity,
  demoTimelineEntries,
  demoTimelineIntro,
} from "@/data/caurisDemoContent";

export function DemoTimelineStep() {
  const titleId = "demo-timeline-title";

  return (
    <div className={demoUi.region} role="region" aria-labelledby={titleId}>
      <div className={demoUi.introMax}>
        <p className={demoUi.phaseEyebrow}>{demoPhaseEyebrows.timeline}</p>
        <h2 id={titleId} className={demoUi.stepTitle}>
          {demoTimelineIntro.title}
        </h2>
        <p className={demoUi.lead}>{demoTimelineIntro.supporting}</p>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-cauris-gold/20 bg-cauris-flame/[0.06] px-3 py-1.5">
          <span
            className="h-1.5 w-1.5 shrink-0 rounded-full bg-cauris-flame shadow-[0_0_10px_rgba(244,176,66,0.5)]"
            aria-hidden
          />
          <span className="text-[11px] font-medium text-cauris-dawn/90">
            {demoTimelineContinuity.label}
          </span>
        </div>
        <p className={demoUi.footnote}>{demoTimelineContinuity.note}</p>
      </div>

      <div className={`${demoUi.sectionY} ${demoUi.gridSplit}`}>
        {/* —— Vertical timeline —— */}
        <div className={`relative overflow-hidden ${demoUi.productMain} p-6 sm:p-8`}>
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 45% at 20% 15%, rgba(88, 60, 180, 0.14), transparent 60%)",
            }}
            aria-hidden
          />
          <div className="relative z-[1]">
          <p className={`${demoUi.kickerTrack} text-zinc-400`}>Day progression</p>
          <div className="relative mt-9 pl-2 sm:pl-3">
            <div
              className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-cauris-flame/50 via-cauris-gold/25 to-indigo-500/20 sm:left-[13px]"
              aria-hidden
            />
            <ol className="relative space-y-0" role="list">
              {demoTimelineEntries.map((entry, i) => (
                <li
                  key={entry.period}
                  className="demo-timeline-entry group relative pb-12 last:pb-0"
                  style={{ animationDelay: `${90 + i * 75}ms` }}
                >
                  <div
                    className="absolute left-0 top-1.5 z-[1] flex h-7 w-7 -translate-x-[2px] items-center justify-center sm:translate-x-0"
                    aria-hidden
                  >
                    <span className="absolute h-3 w-3 rounded-full bg-cauris-flame/90 shadow-[0_0_16px_rgba(244,176,66,0.45)] ring-2 ring-black/80 transition duration-500 group-hover:shadow-[0_0_22px_rgba(244,176,66,0.55)]" />
                    <span className="absolute h-5 w-5 rounded-full bg-cauris-flame/15 blur-sm opacity-80" />
                  </div>
                  <div className="ml-10 sm:ml-12">
                    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cauris-flame/90">
                      {entry.period}
                    </p>
                    <h3 className="mt-1 text-base font-semibold leading-snug text-zinc-100 sm:text-lg">
                      {entry.headline}
                    </h3>
                    <p className="mt-2 max-w-lg text-sm leading-relaxed text-zinc-400">
                      {entry.supporting}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          </div>
        </div>

        {/* —— Chronology / memory signal —— */}
        <aside className={demoUi.stickyAside}>
          <div className={`relative overflow-hidden ${demoUi.productAside} bg-gradient-to-b from-indigo-950/25 to-black/28 p-6`}>
            <div
              className="pointer-events-none absolute -right-6 -top-8 h-28 w-28 rounded-full bg-cauris-flame/[0.08] blur-2xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute bottom-0 left-0 h-24 w-24 rounded-full opacity-50 blur-2xl"
              style={{
                background: "radial-gradient(circle, rgba(88, 60, 180, 0.22), transparent 70%)",
              }}
              aria-hidden
            />
            <p className={`relative ${demoUi.kickerTrack} text-cauris-dawn/80`}>
              {demoTimelineChronology.sectionTitle}
            </p>
            <p className="relative mt-4 text-sm leading-relaxed text-zinc-400">
              {demoTimelineChronology.body}
            </p>
            <ul
              className="relative mt-6 flex flex-wrap gap-2"
              role="list"
              aria-label="Timeline qualities"
            >
              {demoTimelineChips.map((tag) => (
                <li key={tag}>
                  <span className="inline-flex rounded-full border border-white/[0.1] bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium text-zinc-400">
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
