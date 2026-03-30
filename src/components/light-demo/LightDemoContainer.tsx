import type { ReactNode } from "react";

type LightDemoContainerProps = {
  children: ReactNode;
  className?: string;
};

/** Centered column, max width between 1100–1200px. */
export function LightDemoContainer({ children, className = "" }: LightDemoContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[75rem] px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
