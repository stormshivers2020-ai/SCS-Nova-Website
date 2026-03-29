"use client";

import { useId, useMemo } from "react";
import { demoUi } from "@/components/demo/demoUi";
import {
  demoHelixContinuity,
  demoHelixEdges,
  demoHelixIntro,
  demoHelixNodes,
  demoHelixPanel,
} from "@/data/caurisDemoContent";

export function DemoHelixStep() {
  const titleId = "demo-helix-title";
  const gid = useId().replace(/:/g, "");
  const lineGradId = `helix-line-${gid}`;
  const nodeGlowId = `helix-node-glow-${gid}`;

  const nodeMap = useMemo(() => {
    const m = new Map<string, (typeof demoHelixNodes)[number]>();
    for (const n of demoHelixNodes) m.set(n.id, n);
    return m;
  }, []);

  const mapDescription = useMemo(
    () =>
      `Illustrative pattern layer connecting ${demoHelixNodes.map((n) => n.label).join(", ")}.`,
    []
  );

  return (
    <div className={demoUi.region} role="region" aria-labelledby={titleId}>
      <div className={demoUi.introMax}>
        <p className={demoUi.kicker}>Guided preview</p>
        <h2 id={titleId} className={demoUi.stepTitle}>
          {demoHelixIntro.title}
        </h2>
        <p className={demoUi.lead}>{demoHelixIntro.supporting}</p>
        <p className={demoUi.leadDim}>{demoHelixIntro.secondary}</p>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-950/35 px-3 py-1.5">
          <span
            className="h-1.5 w-1.5 shrink-0 rounded-full bg-cauris-flame/90 shadow-[0_0_10px_rgba(244,176,66,0.45)]"
            aria-hidden
          />
          <span className="text-[11px] font-medium text-zinc-300">
            {demoHelixContinuity.label}
          </span>
        </div>
        <p className={demoUi.footnote}>{demoHelixContinuity.note}</p>
      </div>

      <div className={`${demoUi.sectionY} ${demoUi.gridSplitWide} lg:min-h-0`}>
        {/* —— Helix visual —— */}
        <div
          className={`relative overflow-hidden ${demoUi.roundedPanel} border ${demoUi.borderHairline} bg-gradient-to-b from-white/[0.04] to-black/50 p-6 sm:p-8 lg:min-h-[min(420px,52vh)] ${demoUi.panelInset}`}
          style={{
            backgroundImage:
              "radial-gradient(ellipse 65% 50% at 45% 35%, rgba(88, 60, 180, 0.16), transparent 65%), radial-gradient(ellipse 45% 40% at 80% 75%, rgba(244, 176, 66, 0.06), transparent 55%)",
          }}
        >
          <p className={demoUi.kicker}>Pattern layer</p>
          <figure className="relative mt-6">
            <svg
              viewBox="0 0 120 100"
              className="mx-auto h-[min(340px,52vw)] w-full max-w-lg"
              role="img"
              aria-label={mapDescription}
            >
              <defs>
                <linearGradient id={lineGradId} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(244, 176, 66, 0.35)" />
                  <stop offset="50%" stopColor="rgba(201, 162, 39, 0.22)" />
                  <stop offset="100%" stopColor="rgba(88, 60, 180, 0.28)" />
                </linearGradient>
                <filter id={nodeGlowId} x="-80%" y="-80%" width="260%" height="260%">
                  <feGaussianBlur stdDeviation="0.8" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {demoHelixEdges.map(([a, b], i) => {
                const na = nodeMap.get(a);
                const nb = nodeMap.get(b);
                if (!na || !nb) return null;
                return (
                  <line
                    key={`${a}-${b}-${i}`}
                    x1={na.x}
                    y1={na.y}
                    x2={nb.x}
                    y2={nb.y}
                    stroke={`url(#${lineGradId})`}
                    strokeWidth="0.35"
                    strokeLinecap="round"
                    className="cauris-helix-dash opacity-[0.85]"
                  />
                );
              })}

              {demoHelixNodes.map((n) => {
                const isHub = n.id === "insight";
                return (
                  <g
                    key={n.id}
                    className="demo-helix-node cursor-default transition-opacity duration-500 hover:opacity-95"
                    filter={isHub ? `url(#${nodeGlowId})` : undefined}
                  >
                    <circle
                      cx={n.x}
                      cy={n.y}
                      r={isHub ? 5.4 : 3.6}
                      className={
                        isHub
                          ? "fill-cauris-flame/20 stroke-cauris-flame/65 pulse-slow"
                          : "fill-zinc-950/95 stroke-cauris-gold/40"
                      }
                      strokeWidth="0.45"
                    />
                    <circle
                      cx={n.x}
                      cy={n.y}
                      r={isHub ? 2.6 : 2.2}
                      className="fill-cauris-flame/90"
                      style={{
                        filter: "drop-shadow(0 0 5px rgba(244,176,66,0.32))",
                      }}
                    />
                    <text
                      x={n.x}
                      y={n.y + (isHub ? 10 : 8.5)}
                      textAnchor="middle"
                      fill="rgb(212 212 216)"
                      style={{
                        fontSize: isHub ? "3.6px" : "3.05px",
                        fontWeight: isHub ? 600 : 500,
                      }}
                    >
                      {n.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </figure>
        </div>

        {/* —— Relationship summary —— */}
        <aside className={demoUi.stickyAside}>
          <div
            className={`relative overflow-hidden ${demoUi.roundedPanel} border ${demoUi.borderHairline} bg-gradient-to-b from-white/[0.035] to-transparent p-6 ${demoUi.panelInset}`}
          >
            <div
              className="pointer-events-none absolute -right-4 top-0 h-32 w-32 rounded-full bg-cauris-flame/[0.07] blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute bottom-0 left-0 h-24 w-24 opacity-60 blur-2xl"
              style={{
                background: "radial-gradient(circle, rgba(88, 60, 180, 0.2), transparent 70%)",
              }}
              aria-hidden
            />
            <p className={`relative ${demoUi.kickerTrack} text-cauris-dawn/85`}>{demoHelixPanel.title}</p>
            <p className="relative mt-4 text-sm leading-relaxed text-zinc-400">
              {demoHelixPanel.body}
            </p>
          </div>
          <ul className="space-y-3" role="list">
            {demoHelixPanel.cards.map((card, i) => (
              <li
                key={card.title}
                className="demo-helix-card cauris-glass-card rounded-xl p-4 transition duration-500 hover:border-cauris-gold/28"
                style={{ animationDelay: `${100 + i * 70}ms` }}
              >
                <h3 className="text-xs font-semibold uppercase tracking-wider text-cauris-flame/90">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{card.detail}</p>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}
