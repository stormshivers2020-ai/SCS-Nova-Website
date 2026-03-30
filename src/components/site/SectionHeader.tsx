import type { ReactNode } from "react";

export type SectionHeaderProps = {
  eyebrow: string;
  headingId?: string;
  title: ReactNode;
  className?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
};

const defaultEyebrow = "cauris-kicker text-zinc-500";

const defaultTitle =
  "mt-5 max-w-4xl text-pretty text-balance text-[1.85rem] font-semibold leading-[1.12] tracking-[-0.025em] text-zinc-50 sm:text-[2.2rem] sm:leading-[1.1] md:text-[2.85rem] md:leading-[1.06]";

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
