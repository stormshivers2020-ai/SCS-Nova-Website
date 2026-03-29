"use client";

import { demoUi } from "@/components/demo/demoUi";
import {
  demoCompassContinuity,
  demoCompassGuidance,
  demoCompassIntro,
  demoCompassMain,
  demoCompassSupport,
} from "@/data/caurisDemoContent";

export function DemoCompassStep() {
  const titleId = "demo-compass-title";

  return (
    <div className={demoUi.region} role="region" aria-labelledby={titleId}>
      <div className={demoUi.introMax}>
        <p className={demoUi.kicker}>Guided preview</p>
        <h2 id={titleId} className={demoUi.stepTitle}>
          {demoCompassIntro.title}
        </h2>
        <p className={demoUi.lead}>{demoCompassIntro.supporting}</p>
        <p className={demoUi.leadDim}>{demoCompassIntro.secondary}</p>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-cauris-gold/20 bg-cauris-flame/[0.06] px-3 py-1.5">
          <span
            className="h-1.5 w-1.5 shrink-0 rounded-full bg-cauris-dawn/90 shadow-[0_0_10px_rgba(244,176,66,0.4)]"
            aria-hidden
          />
          <span className="text-[11px] font-medium text-zinc-300">
            {demoCompassContinuity.label}
          </span>
        </div>
        <p className={demoUi.footnote}>{demoCompassContinuity.note}</p>
      </div>

      <div className={`${demoUi.sectionY} ${demoUi.gridSplit}`}>
        <div className="flex flex-col gap-8 sm:gap-10">
          <article
            className="demo-compass-hero relative overflow-hidden rounded-2xl border border-white/[0.09] bg-gradient-to-br from-white/[0.05] via-black/50 to-black/60 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_0_80px_rgba(244,176,66,0.06)] ring-1 ring-cauris-gold/[0.14] sm:p-9"
            style={{
              backgroundImage:
                "linear-gradient(105deg, rgba(244, 176, 66, 0.07) 0%, transparent 42%), radial-gradient(ellipse 55% 45% at 100% 50%, rgba(88, 60, 180, 0.12), transparent 60%)",
            }}
          >
            <div
              className="pointer-events-none absolute inset-y-8 right-0 w-px bg-gradient-to-b from-transparent via-cauris-gold/25 to-transparent opacity-70"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -right-10 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-indigo-500/[0.05] blur-3xl"
              aria-hidden
            />
            <div className="relative max-w-2xl pr-0 sm:pr-4">
              <p className={`${demoUi.kickerTrack} text-cauris-dawn/75`}>Orientation</p>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-zinc-50 sm:text-2xl">
                {demoCompassMain.title}
              </h3>
              <p className="mt-4 text-pretty text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
                {demoCompassMain.body}
              </p>
            </div>
          </article>

          <ul className="grid gap-4 sm:grid-cols-2" role="list">
            {demoCompassGuidance.map((item, i) => (
              <li
                key={item.title}
                className="demo-compass-card group relative overflow-hidden rounded-xl border border-white/[0.07] bg-gradient-to-b from-white/[0.028] to-transparent p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.035)] transition duration-500 hover:border-cauris-gold/22 hover:shadow-[0_0_36px_rgba(244,176,66,0.06)]"
                style={{ animationDelay: `${110 + i * 70}ms` }}
              >
                <div
                  className="pointer-events-none absolute bottom-0 left-0 h-20 w-32 bg-gradient-to-tr from-cauris-flame/[0.04] to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden
                />
                <h4 className="relative text-sm font-semibold leading-snug tracking-tight text-zinc-100">
                  {item.title}
                </h4>
                <p className="relative mt-3 text-sm leading-relaxed text-zinc-500">
                  {item.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <aside className={demoUi.stickyAside}>
          <div
            className={`relative overflow-hidden ${demoUi.roundedPanel} border ${demoUi.borderHairline} bg-gradient-to-b from-white/[0.025] to-black/45 p-6 ${demoUi.panelInset}`}
          >
            <div
              className="pointer-events-none absolute left-0 top-1/2 h-32 w-32 -translate-x-1/3 -translate-y-1/2 rounded-full bg-cauris-flame/[0.05] blur-3xl"
              aria-hidden
            />
            <p className={`relative ${demoUi.kickerTrack} text-zinc-500`}>{demoCompassSupport.title}</p>
            <p className="relative mt-4 text-sm leading-relaxed text-zinc-400">
              {demoCompassSupport.body}
            </p>
            <ul
              className="relative mt-5 flex flex-wrap gap-2"
              role="list"
              aria-label="Compass qualities"
            >
              {demoCompassSupport.tags.map((tag) => (
                <li key={tag}>
                  <span className="inline-flex rounded-full border border-white/[0.09] bg-white/[0.025] px-3 py-1 text-[11px] font-medium text-zinc-400">
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
