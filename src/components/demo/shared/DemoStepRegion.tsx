import type { ReactNode } from "react";
import { demoUi } from "@/components/demo/demoUi";

type DemoStepRegionProps = {
  children: ReactNode;
  stepKey: number;
  labelledBy?: string;
};

/** Welcome / outer step wrapper — same region shell as step components use internally. */
export function DemoStepRegion({ children, stepKey, labelledBy }: DemoStepRegionProps) {
  return (
    <div
      key={stepKey}
      className={demoUi.region}
      role="region"
      aria-labelledby={labelledBy}
    >
      {children}
    </div>
  );
}
