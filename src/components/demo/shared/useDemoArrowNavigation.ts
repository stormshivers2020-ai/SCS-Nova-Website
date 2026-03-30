"use client";

import { useEffect } from "react";

/**
 * ArrowLeft / ArrowRight step navigation — ignores keys while typing in inputs.
 * RangeOS passes `preventDefault: true` to match prior scroll-behavior; Cauris does not.
 */
export function useDemoArrowNavigation(
  goNext: () => void,
  goBack: () => void,
  preventDefault = false
) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target;
      if (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement) return;
      if (t instanceof HTMLElement && t.isContentEditable) return;
      if (e.key === "ArrowRight") {
        if (preventDefault) e.preventDefault();
        goNext();
      }
      if (e.key === "ArrowLeft") {
        if (preventDefault) e.preventDefault();
        goBack();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goBack, preventDefault]);
}
