import type { ReactNode } from "react";

export type SectionHeaderProps = {
  eyebrow: string;
  headingId?: string;
  title: ReactNode;
  className?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
};

const defaultEyebrow =
  "font-mono text-[11px] uppercase tracking-[0.28em] text-zinc-600";

const defaultTitle =
  "mt-4 max-w-xl text-balance text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl";

export function SectionHeader({
  eyebrow,
  headingId,
  title,
  className = "",
  eyebrowClassName = defaultEyebrow,
  titleClassName = defaultTitle,
}: SectionHeaderProps) {
  return (
    <div className={className}>
      <p className={eyebrowClassName}>{eyebrow}</p>
      <h2 id={headingId} className={titleClassName}>
        {title}
      </h2>
    </div>
  );
}
