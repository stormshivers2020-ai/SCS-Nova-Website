const stepNavDesktopClass =
  "hidden border-t border-white/[0.06] pt-4 font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-zinc-400 xl:block";

type DemoStepNavDesktopProps = {
  labels: readonly string[];
  step: number;
};

/** XL-only linear step list in the demo header — shared chrome. */
export function DemoStepNavDesktop({ labels, step }: DemoStepNavDesktopProps) {
  return (
    <nav className={stepNavDesktopClass} aria-label="All demo steps">
      {labels.map((l, i) => (
        <span
          key={l}
          className={
            i === step ? "font-medium text-cauris-dawn" : i < step ? "text-zinc-400" : undefined
          }
        >
          {i + 1}. {l}
          {i < labels.length - 1 ? " · " : ""}
        </span>
      ))}
    </nav>
  );
}
