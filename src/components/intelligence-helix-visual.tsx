/**
 * Lightweight abstract “memory helix” — dual curves, nodes, subtle motion (CSS only).
 */
export function IntelligenceHelixVisual() {
  return (
    <div
      className="relative mx-auto aspect-[4/5] w-full max-w-[280px] sm:max-w-[320px]"
      aria-hidden
    >
      <div className="pointer-events-none absolute inset-0 rounded-[40%] bg-gradient-to-b from-cauris-flame/[0.14] via-cauris-ember/[0.06] to-cauris-ember/[0.1] blur-2xl" />
      <svg
        viewBox="0 0 220 280"
        className="relative h-full w-full drop-shadow-[0_0_28px_rgba(244,176,66,0.15)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="helix-stroke-a" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(253, 230, 138, 0.35)" />
            <stop offset="45%" stopColor="rgba(244, 176, 66, 0.75)" />
            <stop offset="100%" stopColor="rgba(201, 162, 39, 0.4)" />
          </linearGradient>
          <linearGradient id="helix-stroke-b" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(232, 148, 58, 0.4)" />
            <stop offset="50%" stopColor="rgba(244, 176, 66, 0.65)" />
            <stop offset="100%" stopColor="rgba(253, 230, 138, 0.28)" />
          </linearGradient>
          <filter id="helix-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="1.2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g filter="url(#helix-glow)" opacity={0.98}>
          <path
            className="cauris-helix-dash"
            d="M 52 24 C 118 52 118 88 110 140 C 102 192 42 220 108 256"
            stroke="url(#helix-stroke-a)"
            strokeWidth={1.25}
            strokeLinecap="round"
          />
          <path
            className="cauris-helix-dash cauris-helix-dash--lag"
            d="M 168 24 C 102 52 102 88 110 140 C 118 192 178 220 112 256"
            stroke="url(#helix-stroke-b)"
            strokeWidth={1.25}
            strokeLinecap="round"
          />
        </g>

        <g className="text-cauris-dawn">
          {[
            [52, 24],
            [110, 72],
            [110, 140],
            [110, 208],
            [108, 256],
            [168, 24],
          ].map(([cx, cy], i) => (
            <circle
              key={`${cx}-${cy}-${i}`}
              cx={cx}
              cy={cy}
              r={i === 2 ? 2.5 : 2.1}
              fill="currentColor"
              opacity={i === 2 ? 1 : 0.72}
            />
          ))}
        </g>

        <path
          d="M 110 72 L 138 96 M 110 140 L 82 168 M 110 208 L 146 188"
          stroke="rgba(244, 176, 66, 0.22)"
          strokeWidth={0.85}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
