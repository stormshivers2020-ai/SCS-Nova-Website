import type { ReactNode } from "react";

type LightDemoSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  "aria-labelledby"?: string;
};

/** Large vertical rhythm between page blocks. */
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
      className={`py-16 md:py-20 lg:py-24 ${className}`}
    >
      {children}
    </section>
  );
}
