/**
 * Abstract operational memory — retention lanes + hub (not charts, not SaaS chrome).
 */
export function BcaurisOperationalVisual() {
  return (
    <div
      className="relative mx-auto w-full max-w-[400px] overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-br from-zinc-950/95 via-black to-zinc-950/85 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.035),0_36px_72px_rgba(0,0,0,0.5)] ring-1 ring-cauris-gold/[0.07] sm:p-6"
      aria-hidden
    >
      <div className="pointer-events-none absolute -right-10 top-1/2 h-52 w-52 -translate-y-1/2 rounded-full bg-cauris-ember/[0.055] blur-3xl" />
      <div className="pointer-events-none absolute -left-12 bottom-0 h-36 w-36 rounded-full bg-[#1a1030]/40 blur-3xl" />

      <div className="relative flex items-center justify-between border-b border-white/[0.06] pb-3">
        <div className="flex flex-col gap-0.5">
          <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-zinc-500">
            Operational memory
          </span>
          <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-zinc-700">
            structured field
          </span>
        </div>
        <span className="flex items-center gap-1.5">
          <span className="h-1 w-1 rounded-full bg-cauris-flame/85 motion-reduce:animate-none bcauris-pulse-dot" />
          <span className="font-mono text-[9px] text-zinc-500">retained</span>
        </span>
      </div>

      <div className="relative mt-4 flex flex-wrap gap-1.5">
        {["invoice", "PMIX", "variance", "client"].map((tag) => (
          <span
            key={tag}
            className="rounded border border-white/[0.05] bg-white/[0.02] px-2 py-0.5 font-mono text-[7.5px] uppercase tracking-[0.14em] text-zinc-600"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="relative mt-5 space-y-3.5">
        {[
          { label: "Workflow", hint: "how work moves" },
          { label: "Exception", hint: "what breaks & returns" },
          { label: "Report", hint: "variance → decision" },
        ].map((lane, i) => (
          <div key={lane.label} className="relative">
            <div className="mb-1 flex justify-between gap-2 font-mono text-[8px] uppercase tracking-[0.16em] text-zinc-600">
              <span>{lane.label}</span>
              <span className="truncate text-zinc-700">{lane.hint}</span>
            </div>
            <div className="h-px w-full overflow-hidden rounded-full bg-white/[0.06]">
              <div
                className="bcauris-lane-pulse h-full rounded-full bg-gradient-to-r from-transparent via-cauris-flame/40 to-transparent"
                style={{
                  width: i === 0 ? "78%" : i === 1 ? "62%" : "88%",
                  animationDelay: `${i * 0.7}s`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="relative mt-6">
        <svg
          viewBox="0 0 280 160"
          className="h-auto w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="bc-op-edge" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(244,176,66,0)" />
              <stop offset="50%" stopColor="rgba(244,176,66,0.32)" />
              <stop offset="100%" stopColor="rgba(244,176,66,0)" />
            </linearGradient>
          </defs>

          <g opacity={0.88}>
            <line x1="140" y1="80" x2="52" y2="36" stroke="url(#bc-op-edge)" strokeWidth={0.55} />
            <line x1="140" y1="80" x2="228" y2="36" stroke="url(#bc-op-edge)" strokeWidth={0.55} />
            <line x1="140" y1="80" x2="44" y2="118" stroke="url(#bc-op-edge)" strokeWidth={0.55} />
            <line x1="140" y1="80" x2="236" y2="118" stroke="url(#bc-op-edge)" strokeWidth={0.55} />
            <line x1="140" y1="80" x2="140" y2="22" stroke="rgba(244,176,66,0.12)" strokeWidth={0.45} />
          </g>

          <circle
            cx="140"
            cy="80"
            r="10"
            stroke="rgba(201,162,39,0.3)"
            strokeWidth={0.75}
            fill="rgba(0,0,0,0.55)"
          />
          <circle
            cx="140"
            cy="80"
            r="4"
            fill="rgba(244,176,66,0.5)"
            className="motion-reduce:opacity-100 bcauris-hub-core"
          />

          {[
            [52, 36],
            [228, 36],
            [44, 118],
            [236, 118],
            [140, 22],
          ].map(([cx, cy], idx) => (
            <circle
              key={`${cx}-${cy}`}
              cx={cx}
              cy={cy}
              r={idx === 4 ? 2.1 : 2.6}
              fill={idx === 4 ? "rgba(253,230,138,0.45)" : "rgba(161,161,170,0.32)"}
            />
          ))}
        </svg>

        <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-3 font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-600">
          <span>preserve</span>
          <span className="text-zinc-700">·</span>
          <span>recall</span>
          <span className="text-zinc-700">·</span>
          <span>decide</span>
        </div>
      </div>
    </div>
  );
}
