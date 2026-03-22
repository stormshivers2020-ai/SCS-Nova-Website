import type { ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  "aria-labelledby"?: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
};

export function SectionShell({
  id,
  "aria-labelledby": ariaLabelledBy,
  children,
  className = "",
  innerClassName = "",
}: SectionShellProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={`section-y relative scroll-mt-[4.5rem] ${className}`}
    >
      <div className={`container-brand ${innerClassName}`}>{children}</div>
    </section>
  );
}
