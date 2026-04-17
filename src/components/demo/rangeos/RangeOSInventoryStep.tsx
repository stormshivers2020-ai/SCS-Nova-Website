import { demoUi } from "@/components/demo/demoUi";
import { rangeOSDemoUi } from "@/components/demo/rangeOSDemoUi";
import { rangeOSPhaseEyebrows } from "@/data/rangeOSDemoContent";
import {
  rangeOSDemoInventoryItems,
  rangeOSInventoryIntro,
  rangeOSInventoryMediaLabels,
  rangeOSInventoryStructuredPanel,
  type RangeOSDemoInventoryItem,
} from "@/data/rangeOSDemoInventory";

/** Layered media blocks — static class strings for Tailwind. */
const inventoryMediaLayers: Record<
  RangeOSDemoInventoryItem["accent"],
  { base: string; glow: string }
> = {
  ember: {
    base: "bg-gradient-to-br from-zinc-800/90 via-zinc-900/70 to-black",
    glow: "bg-[radial-gradient(ellipse_70%_55%_at_30%_25%,rgba(232,148,58,0.14),transparent_55%)]",
  },
  flame: {
    base: "bg-gradient-to-br from-zinc-800/85 via-zinc-950/80 to-black",
    glow: "bg-[radial-gradient(ellipse_70%_55%_at_30%_25%,rgba(244,176,66,0.12),transparent_55%)]",
  },
  dawn: {
    base: "bg-gradient-to-br from-zinc-800/80 via-zinc-900/75 to-black",
    glow: "bg-[radial-gradient(ellipse_70%_55%_at_28%_22%,rgba(252,211,160,0.1),transparent_55%)]",
  },
  neutral: {
    base: "bg-gradient-to-br from-zinc-700/55 via-zinc-900/85 to-black",
    glow: "bg-[radial-gradient(ellipse_70%_55%_at_30%_25%,rgba(161,161,170,0.09),transparent_55%)]",
  },
  deep: {
    base: "bg-gradient-to-br from-zinc-900/90 via-black to-zinc-950",
    glow: "bg-[radial-gradient(ellipse_70%_55%_at_35%_30%,rgba(113,113,122,0.12),transparent_55%)]",
  },
};

function InventoryCard({ item }: { item: RangeOSDemoInventoryItem }) {
  const layers = inventoryMediaLayers[item.accent];
  return (
    <article className={`group flex flex-col overflow-hidden ${rangeOSDemoUi.interactiveSurfaceCard}`}>
      <div
        className={`relative aspect-[5/4] w-full overflow-hidden ring-1 ring-inset ring-white/[0.04] ${layers.base}`}
      >
        <div
          className={`pointer-events-none absolute inset-0 opacity-95 ${layers.glow}`}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,transparent_42%,rgba(0,0,0,0.4)_100%)]"
          aria-hidden
        />
        <div className="absolute left-3 top-3 sm:left-4 sm:top-4">
          <span className="rounded-full border border-white/[0.1] bg-black/40 px-2.5 py-1 font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-zinc-300 backdrop-blur-sm sm:text-[10px]">
            {item.tag}
          </span>
        </div>
        <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-400">
            {rangeOSInventoryMediaLabels.kicker}
          </p>
          <p className="mt-1 text-xs font-medium text-zinc-400 opacity-90 sm:text-sm">
            {rangeOSInventoryMediaLabels.line}
          </p>
        </div>
      </div>
      <div className="flex flex-1 flex-col border-t border-white/[0.06] p-4 sm:p-5">
        <h3 className="text-base font-semibold tracking-tight text-zinc-50 sm:text-lg">{item.name}</h3>
        <p className="mt-2 text-sm text-zinc-400">{item.type}</p>
        <p className="mt-1 font-mono text-xs tracking-wide text-zinc-400">{item.caliber}</p>
        <div className="mt-4 flex items-center gap-2 border-t border-white/[0.05] pt-4">
          <span
            className={`h-1.5 w-1.5 shrink-0 rounded-full ${
              item.status === "On the range"
                ? "bg-emerald-500/80 shadow-[0_0_8px_rgba(52,211,153,0.35)]"
                : item.status === "In rotation"
                  ? "bg-cauris-flame/80 shadow-[0_0_8px_rgba(244,176,66,0.25)]"
                  : "bg-amber-500/70 shadow-[0_0_8px_rgba(245,158,11,0.25)]"
            }`}
            aria-hidden
          />
          <span className="text-sm font-medium text-zinc-300">{item.status}</span>
        </div>
      </div>
    </article>
  );
}

function StructuredPanel() {
  const p = rangeOSInventoryStructuredPanel;
  return (
    <aside className={rangeOSDemoUi.supportAsideSticky}>
      <div className={rangeOSDemoUi.supportAsidePanel}>
        <div className={rangeOSDemoUi.accentRule} aria-hidden />
        <h3 className={rangeOSDemoUi.asideTitle}>{p.title}</h3>
        <p className={rangeOSDemoUi.asideBody}>
          {p.body}
        </p>
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="System attributes">
          {p.tags.map((tag) => (
            <li key={tag}>
              <span className="inline-flex rounded-full border border-cauris-gold/20 bg-cauris-flame/[0.06] px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-cauris-dawn/90">
                {tag}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export function RangeOSInventoryStep() {
  const intro = rangeOSInventoryIntro;
  const headingId = "rangeos-inventory-title";

  return (
    <div className={demoUi.region} role="region" aria-labelledby={headingId}>
      <header className={demoUi.introMax}>
        <p className={demoUi.phaseEyebrow}>{rangeOSPhaseEyebrows.inventory}</p>
        <h2 id={headingId} className={demoUi.stepTitle}>
          {intro.title}
        </h2>
        <p className={demoUi.lead}>{intro.lead}</p>
      </header>

      <div className={`${demoUi.sectionY} ${demoUi.gridSplit}`}>
        <div>
          <ul
            className="grid list-none gap-5 sm:grid-cols-2 sm:gap-6 lg:gap-6"
            aria-label="Sample inventory items"
          >
            {rangeOSDemoInventoryItems.map((item) => (
              <li key={item.id}>
                <InventoryCard item={item} />
              </li>
            ))}
          </ul>
        </div>
        <StructuredPanel />
      </div>
    </div>
  );
}
