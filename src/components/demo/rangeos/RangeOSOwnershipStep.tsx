import { demoUi } from "@/components/demo/demoUi";
import { rangeOSDemoUi } from "@/components/demo/rangeOSDemoUi";
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
      <h3 className="text-lg font-semibold tracking-tight text-zinc-50 sm:text-xl">{model.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-500">{model.tagline}</p>
      <p className="mt-5 text-2xl font-semibold tracking-tight text-zinc-50 sm:text-[1.65rem]">
        {model.price}
      </p>
      <ul className="mt-6 flex flex-col gap-2.5 border-t border-white/[0.08] pt-6">
        {model.bullets.map((b) => (
          <li key={b} className="flex gap-2.5 text-sm leading-snug text-zinc-200">
            <span
              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cauris-flame/55"
              aria-hidden
            />
            <span>{b}</span>
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
        <h2 id={headingId} className={demoUi.stepTitle}>
          {intro.title}
        </h2>
        <p className={demoUi.lead}>{intro.lead}</p>
      </header>

      <div className={demoUi.sectionY}>
        <p className={demoUi.kicker}>How to engage</p>
        <div className="mt-6 grid gap-5 md:grid-cols-2 md:gap-6">
          {rangeOSDemoOwnershipModels.map((model) => (
            <OwnershipModelCard key={model.id} model={model} />
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm font-medium leading-relaxed text-zinc-500 sm:mt-12 sm:text-base">
          {rangeOSOwnershipSupportLine}
        </p>
      </div>
    </div>
  );
}
