import { demoUi } from "@/components/demo/demoUi";
import { rangeOSDemoUi } from "@/components/demo/rangeOSDemoUi";
import { rangeOSPhaseEyebrows } from "@/data/rangeOSDemoContent";
import {
  rangeOSBrandingConsistencyItems,
  rangeOSBrandingIdentityKicker,
  rangeOSBrandingIntro,
  rangeOSBrandingSupportPanel,
  rangeOSBrandingTypeSamples,
  rangeOSDemoBrandSwatches,
} from "@/data/rangeOSDemoBranding";

function SupportAside() {
  const p = rangeOSBrandingSupportPanel;
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

function IdentityPlaceholder() {
  return (
    <div className="relative overflow-hidden rounded-brand border border-white/[0.12] bg-gradient-to-b from-zinc-900/62 to-black/76 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.075),0_32px_68px_rgba(0,0,0,0.32)] ring-1 ring-cauris-gold/[0.14] backdrop-blur-md sm:p-10">
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cauris-flame/[0.08] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_30%,rgba(244,176,66,0.1),transparent_55%)]"
        aria-hidden
      />
      <p className={`relative ${demoUi.kickerTrack} text-zinc-500`}>{rangeOSBrandingIdentityKicker}</p>
      <div className="relative mt-8 flex flex-col items-center gap-8 sm:flex-row sm:items-center sm:justify-center sm:gap-12">
        <div className="relative">
          <div
            className="pointer-events-none absolute inset-[-40%] rounded-2xl bg-cauris-flame/[0.12] blur-2xl"
            aria-hidden
          />
          <div className="relative flex h-28 w-28 items-center justify-center rounded-2xl border border-cauris-gold/30 bg-gradient-to-br from-zinc-800/80 to-black shadow-[0_0_40px_rgba(244,176,66,0.15)] ring-1 ring-inset ring-white/[0.06] sm:h-32 sm:w-32">
            <span className="font-mono text-3xl font-bold tracking-tight text-gradient-gold sm:text-4xl">
              R
            </span>
          </div>
        </div>
        <div className="text-center sm:text-left">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">Wordmark</p>
          <p className="mt-2 text-xl font-semibold tracking-tight text-zinc-100 sm:text-2xl">
            Range<span className="text-gradient-gold">Name</span>
          </p>
          <p className="mt-2 max-w-xs text-sm text-zinc-500">
            Your marks replace this sample — spacing and lockup rules ship with the templates.
          </p>
        </div>
      </div>
    </div>
  );
}

function ColorThemeRow() {
  return (
    <section aria-labelledby="rangeos-brand-colors-label">
      <p id="rangeos-brand-colors-label" className={`${demoUi.kickerTrack} text-zinc-500`}>
        Color & theme
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {rangeOSDemoBrandSwatches.map((s) => (
          <div
            key={s.id}
            className="overflow-hidden rounded-brand border border-white/[0.1] bg-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_12px_32px_rgba(0,0,0,0.15)] ring-1 ring-white/[0.05] transition-[border-color,box-shadow] duration-300 ease-out motion-reduce:transition-none hover:border-cauris-gold/24 hover:shadow-[0_0_32px_rgba(244,176,66,0.08)]"
          >
            <div className={`h-20 w-full ${s.swatchClass}`} />
            <div className="border-t border-white/[0.06] p-4">
              <p className="text-sm font-semibold text-zinc-200">{s.label}</p>
              <p className="mt-1 text-xs leading-relaxed text-zinc-500">{s.note}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function HeroFraming() {
  return (
    <section aria-labelledby="rangeos-brand-hero-label">
      <p id="rangeos-brand-hero-label" className={`${demoUi.kickerTrack} text-zinc-500`}>
        Hero framing
      </p>
      <div className="relative mt-4 overflow-hidden rounded-brand border border-white/[0.11] bg-black p-1 ring-1 ring-cauris-gold/[0.12] shadow-[0_24px_56px_rgba(0,0,0,0.28)]">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_0%,rgba(244,176,66,0.12),transparent_60%)]"
          aria-hidden
        />
        <div className="relative aspect-[21/9] min-h-[140px] w-full overflow-hidden rounded-[0.85rem] bg-gradient-to-br from-zinc-800/60 via-zinc-950 to-black sm:min-h-[180px]">
          <div
            className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.85)_0%,transparent_55%)]"
            aria-hidden
          />
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-cauris-flame/85">
              Featured
            </p>
            <p className="mt-2 max-w-lg text-balance text-xl font-semibold tracking-tight text-zinc-50 sm:text-2xl">
              A hero that carries your range&apos;s voice — not a stock template.
            </p>
            <div className="mt-4 inline-flex rounded-full border border-cauris-gold/35 bg-cauris-flame/[0.12] px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-cauris-dawn">
              Primary CTA
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HierarchyStrip() {
  return (
    <section aria-labelledby="rangeos-brand-type-label">
      <p id="rangeos-brand-type-label" className={`${demoUi.kickerTrack} text-zinc-500`}>
        Visual hierarchy
      </p>
      <div className="mt-4 space-y-6 rounded-brand border border-white/[0.11] bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_20px_48px_rgba(0,0,0,0.22)] ring-1 ring-white/[0.05] backdrop-blur-md sm:p-8">
        {rangeOSBrandingTypeSamples.map((row) => (
          <div
            key={row.role}
            className="border-b border-white/[0.06] pb-6 last:border-b-0 last:pb-0"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">{row.role}</p>
            <p className={`mt-2 ${row.className}`}>{row.sample}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ConsistencyPanel() {
  return (
    <section
      className="rounded-brand border border-cauris-gold/24 bg-gradient-to-b from-cauris-flame/[0.08] to-transparent p-6 shadow-[0_0_48px_rgba(244,176,66,0.08),inset_0_1px_0_rgba(255,255,255,0.05)] ring-1 ring-cauris-gold/[0.1] sm:p-8"
      aria-labelledby="rangeos-brand-consistency-label"
    >
      <div
        className="h-px w-12 bg-gradient-to-r from-cauris-gold/50 to-transparent"
        aria-hidden
      />
      <h3
        id="rangeos-brand-consistency-label"
        className="mt-4 text-lg font-semibold tracking-tight text-zinc-50 sm:text-xl"
      >
        Brand consistency
      </h3>
      <p className="mt-2 text-sm font-medium text-zinc-500">
        One system, repeated with discipline — so every page feels like the same range.
      </p>
      <ul className="mt-6 space-y-3">
        {rangeOSBrandingConsistencyItems.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-snug text-zinc-300">
            <span
              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cauris-flame/70"
              aria-hidden
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function RangeOSBrandingStep() {
  const intro = rangeOSBrandingIntro;
  const headingId = "rangeos-branding-title";

  return (
    <div className={demoUi.region} role="region" aria-labelledby={headingId}>
      <header className={demoUi.introMax}>
        <p className={demoUi.phaseEyebrow}>{rangeOSPhaseEyebrows.branding}</p>
        <h2 id={headingId} className={demoUi.stepTitle}>
          {intro.title}
        </h2>
        <p className={demoUi.lead}>{intro.lead}</p>
      </header>

      <div className={`${demoUi.sectionY} ${demoUi.gridSplit}`}>
        <div className="flex flex-col gap-10 sm:gap-12">
          <IdentityPlaceholder />
          <ColorThemeRow />
          <HeroFraming />
          <HierarchyStrip />
          <ConsistencyPanel />
        </div>
        <SupportAside />
      </div>
    </div>
  );
}
