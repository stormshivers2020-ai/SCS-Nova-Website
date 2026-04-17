import { demoUi } from "@/components/demo/demoUi";
import { rangeOSDemoUi } from "@/components/demo/rangeOSDemoUi";
import { rangeOSPhaseEyebrows } from "@/data/rangeOSDemoContent";
import {
  rangeOSCertificationDemoNote,
  rangeOSCertificationFunnelKicker,
  rangeOSCertificationFunnelStages,
  rangeOSCertificationIntro,
  rangeOSCertificationSupportPanel,
  type RangeOSCertFunnelStage,
} from "@/data/rangeOSDemoCertification";

function SupportAside() {
  const p = rangeOSCertificationSupportPanel;
  return (
    <aside className={rangeOSDemoUi.supportAsideSticky}>
      <div className={rangeOSDemoUi.supportAsidePanel}>
        <div className={rangeOSDemoUi.accentRule} aria-hidden />
        <h3 className={rangeOSDemoUi.asideTitle}>{p.title}</h3>
        <p className={rangeOSDemoUi.asideBody}>
          {p.body}
        </p>
      </div>
    </aside>
  );
}

function FunnelStageCard({ stage, isLast }: { stage: RangeOSCertFunnelStage; isLast: boolean }) {
  return (
    <li className={`relative flex gap-4 sm:gap-6 ${isLast ? "" : "mb-10"}`}>
      {!isLast ? (
        <div
          className="absolute left-[15px] top-[2.25rem] bottom-[-2.5rem] w-px bg-gradient-to-b from-cauris-gold/45 via-cauris-gold/18 to-cauris-gold/5 sm:left-[17px] sm:top-10"
          aria-hidden
        />
      ) : null}
      <div className="relative z-[1] flex shrink-0 flex-col items-center">
        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-cauris-gold/35 bg-cauris-flame/[0.12] font-mono text-xs font-semibold text-cauris-dawn shadow-[0_0_20px_rgba(244,176,66,0.12)] sm:h-9 sm:w-9 sm:text-sm">
          {stage.order}
        </span>
      </div>
      <div className="min-w-0 flex-1">
        <article className={`p-5 sm:p-6 ${rangeOSDemoUi.interactiveSurfaceCard}`}>
          <h3 className="text-base font-semibold tracking-tight text-zinc-50 sm:text-lg">
            {stage.title}
          </h3>
          <p className="mt-3 text-sm font-medium leading-relaxed text-zinc-400 sm:text-[15px] sm:leading-relaxed">
            {stage.description}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Context for this stage">
            {stage.contextTags.map((tag) => (
              <li key={tag}>
                <span className="inline-flex rounded-full border border-white/[0.08] bg-black/25 px-2.5 py-1 font-mono text-[9px] font-medium uppercase tracking-[0.12em] text-zinc-400 sm:text-[10px]">
                  {tag}
                </span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </li>
  );
}

export function RangeOSCertificationStep() {
  const intro = rangeOSCertificationIntro;
  const headingId = "rangeos-certification-title";

  return (
    <div className={demoUi.region} role="region" aria-labelledby={headingId}>
      <header className={demoUi.introMax}>
        <p className={demoUi.phaseEyebrow}>{rangeOSPhaseEyebrows.certification}</p>
        <h2 id={headingId} className={demoUi.stepTitle}>
          {intro.title}
        </h2>
        <p className={demoUi.lead}>{intro.lead}</p>
      </header>

      <div className={`${demoUi.sectionY} ${demoUi.gridSplit}`}>
        <div>
          <section
            className={rangeOSDemoUi.darkFeaturePanel}
            aria-labelledby="rangeos-funnel-label"
          >
            <div className="border-b border-white/[0.07] pb-5">
              <p id="rangeos-funnel-label" className={`${demoUi.kickerTrack} text-zinc-400`}>
                {rangeOSCertificationFunnelKicker}
              </p>
            </div>
            <ol className="mt-8 list-none space-y-0 pl-0">
              {rangeOSCertificationFunnelStages.map((stage, i) => (
                <FunnelStageCard
                  key={stage.id}
                  stage={stage}
                  isLast={i === rangeOSCertificationFunnelStages.length - 1}
                />
              ))}
            </ol>
            <p className="mt-2 border-t border-white/[0.06] pt-6 font-mono text-[10px] leading-relaxed text-zinc-400 sm:text-[11px]">
              {rangeOSCertificationDemoNote}
            </p>
          </section>
        </div>
        <SupportAside />
      </div>
    </div>
  );
}
