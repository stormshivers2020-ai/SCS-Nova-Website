import { demoUi } from "@/components/demo/demoUi";
import { rangeOSDemoUi } from "@/components/demo/rangeOSDemoUi";
import { rangeOSPhaseEyebrows } from "@/data/rangeOSDemoContent";
import {
  rangeOSDemoOwnershipModels,
  rangeOSOwnershipIntro,
  rangeOSOwnershipSupportLine,
  type RangeOSOwnershipModel,
} from "@/data/rangeOSDemoOwnership";

function OwnershipModelCard({ model }: { model: RangeOSOwnershipModel }) {
  return (
    <article
      className={`relative overflow-hidden ${rangeOSDemoUi.ownershipShell} ${model.featured ? rangeOSDemoUi.ownershipSpotlight : rangeOSDemoUi.ownershipIdle}`}
    >
      {model.featured ? (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cauris-gold/45 to-transparent"
          aria-hidden
        />
      ) : null}
      <h3 className="text-lg font-semibold tracking-[-0.02em] text-zinc-50 sm:text-xl">{model.title}</h3>
      <p className="mt-2 text-sm font-medium leading-relaxed text-zinc-400">{model.tagline}</p>
      <p className="mt-1 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-400 sm:text-[11px]">
        Typical investment
      </p>
      <p className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-zinc-50 sm:text-[1.65rem]">
        {model.price}
      </p>
      <ul className="mt-6 flex flex-col gap-3 border-t border-white/[0.09] pt-6">
        {model.bullets.map((b) => (
          <li
            key={b}
            className="border-l border-cauris-gold/[0.16] pl-4 text-sm leading-relaxed text-zinc-200"
          >
            {b}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function RangeOSOwnershipStep() {
  const intro = rangeOSOwnershipIntro;
  const headingId = "rangeos-ownership-title";

  return (
    <div className={demoUi.region} role="region" aria-labelledby={headingId}>
      <header className={demoUi.introMax}>
        <p className={demoUi.phaseEyebrow}>{rangeOSPhaseEyebrows.ownership}</p>
        <h2 id={headingId} className={demoUi.stepTitle}>
          {intro.title}
        </h2>
        <p className={demoUi.lead}>{intro.lead}</p>
      </header>

      <div className={demoUi.sectionY}>
        <p className={`${demoUi.kickerTrack} text-zinc-400`}>How to engage</p>
        <div className="mt-6 grid gap-5 md:grid-cols-2 md:gap-6">
          {rangeOSDemoOwnershipModels.map((model) => (
            <OwnershipModelCard key={model.id} model={model} />
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm font-medium leading-relaxed text-zinc-400 sm:mt-12 sm:text-[15px]">
          {rangeOSOwnershipSupportLine}
        </p>
      </div>
    </div>
  );
}
