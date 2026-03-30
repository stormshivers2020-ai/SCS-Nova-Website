import type { ReactNode } from "react";

type LightDemoSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  "aria-labelledby"?: string;
};

/** Vertical rhythm between page blocks — mobile-first spacing, roomier on large screens. */
export function LightDemoSection({
  children,
  className = "",
  id,
  "aria-labelledby": ariaLabelledBy,
}: LightDemoSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={`scroll-mt-20 py-14 sm:py-20 md:py-28 lg:py-32 ${className}`}
    >
      {children}
    </section>
  );
}
