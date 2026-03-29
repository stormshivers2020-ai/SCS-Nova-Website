"use client";

import { useCallback, useId, useState } from "react";
import { demoUi } from "@/components/demo/demoUi";
import {
  demoWorkspaceChips,
  demoWorkspaceComposer,
  demoWorkspaceDefaultReply,
  demoWorkspaceIntro,
  demoWorkspaceScriptedReplies,
  demoWorkspaceStructuredSignals,
  demoWorkspaceThreadReplies,
  demoWorkspaceUserMessage,
} from "@/data/caurisDemoContent";

type ThreadTurn = { role: "user" | "cauris"; body: string; variant?: "system" };

const INITIAL_THREAD: ThreadTurn[] = [
  { role: "user", body: demoWorkspaceUserMessage },
  ...demoWorkspaceThreadReplies.map((m) => ({
    role: "cauris" as const,
    body: m.body,
    variant: m.variant,
  })),
];

export function DemoWorkspaceStep() {
  const titleId = "demo-workspace-title";
  const inputId = useId();
  const [thread, setThread] = useState<ThreadTurn[]>(INITIAL_THREAD);
  const [draft, setDraft] = useState("");
  const [activeChip, setActiveChip] = useState<string | null>(null);

  const appendExchange = useCallback((userText: string) => {
    const lower = userText.toLowerCase();
    const hit = demoWorkspaceScriptedReplies.find((r) => lower.includes(r.match));
    const reply = hit?.reply ?? demoWorkspaceDefaultReply;
    setThread((t) => [...t, { role: "user", body: userText }, { role: "cauris", body: reply }]);
  }, []);

  const onSend = useCallback(() => {
    const t = draft.trim();
    if (!t) return;
    appendExchange(t);
    setDraft("");
  }, [draft, appendExchange]);

  return (
    <div className={demoUi.region} role="region" aria-labelledby={titleId}>
      <div className={demoUi.introMax}>
        <p className={demoUi.kicker}>Guided preview</p>
        <h2 id={titleId} className={demoUi.stepTitle}>
          {demoWorkspaceIntro.title}
        </h2>
        <p className={demoUi.lead}>{demoWorkspaceIntro.supporting}</p>
      </div>

      <div className={`${demoUi.sectionY} ${demoUi.gridSplitWide}`}>
        {/* —— Thread —— */}
        <div className="flex min-h-0 flex-col">
          <div
            className={`relative flex flex-1 flex-col ${demoUi.roundedPanel} border ${demoUi.borderHairline} bg-gradient-to-b from-white/[0.04] to-transparent p-4 ${demoUi.panelInset} sm:p-5`}
            style={{
              backgroundImage:
                "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(88, 60, 180, 0.08), transparent 55%)",
            }}
          >
            <p className={demoUi.kicker}>Thread</p>
            <div className="mt-4 flex flex-1 flex-col gap-3.5" role="log" aria-live="polite">
              {thread.map((m, i) => (
                <div
                  key={`${i}-${m.body.slice(0, 12)}`}
                  className={`demo-workspace-bubble ${
                    m.role === "user"
                      ? "ml-auto max-w-[min(100%,28rem)] rounded-2xl rounded-br-md bg-cauris-flame/[0.12] px-4 py-3 text-zinc-100 ring-1 ring-cauris-gold/18"
                      : m.variant === "system"
                        ? "max-w-[min(100%,28rem)] rounded-2xl border border-cauris-gold/15 bg-indigo-950/35 px-4 py-3 text-zinc-300 backdrop-blur-sm"
                        : "max-w-[min(100%,28rem)] rounded-2xl rounded-bl-md border border-white/[0.07] bg-black/45 px-4 py-3 text-zinc-200"
                  }`}
                  style={{ animationDelay: `${Math.min(i, 8) * 70}ms` }}
                >
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                    {m.role === "user" ? "You" : "Cauris"}
                  </span>
                  <p className="mt-1 text-sm leading-relaxed">{m.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2 border-t border-white/[0.06] pt-5">
              {demoWorkspaceChips.map((label) => (
                <button
                  key={label}
                  type="button"
                  aria-pressed={activeChip === label}
                  onClick={() => setActiveChip((c) => (c === label ? null : label))}
                  className={`rounded-full border px-3.5 py-2 text-xs font-medium transition duration-300 min-h-9 sm:min-h-0 sm:py-1.5 ${demoUi.focusRingSubtle} ${
                    activeChip === label
                      ? "border-cauris-flame/45 bg-cauris-flame/[0.14] text-cauris-dawn shadow-[0_0_24px_rgba(244,176,66,0.12)]"
                      : "border-white/[0.1] bg-white/[0.03] text-zinc-400 hover:border-cauris-gold/28 hover:bg-white/[0.05] hover:text-zinc-200"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="mt-4 flex gap-2">
              <label htmlFor={inputId} className="sr-only">
                Message composer
              </label>
              <input
                id={inputId}
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    onSend();
                  }
                }}
                placeholder={demoWorkspaceComposer.placeholder}
                className="min-h-11 flex-1 rounded-xl border border-white/[0.1] bg-black/55 px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-600 focus:border-cauris-gold/35 focus:outline-none focus:ring-1 focus:ring-cauris-flame/40"
              />
              <button
                type="button"
                onClick={onSend}
                className={`shrink-0 rounded-xl bg-gradient-to-b from-cauris-flame/90 to-cauris-ember/90 px-5 py-3 text-sm font-semibold text-black shadow-glow-gold transition hover:from-cauris-dawn hover:to-cauris-flame min-h-11 sm:min-h-0 sm:py-2 ${demoUi.focusRingSubtle}`}
              >
                {demoWorkspaceComposer.sendLabel}
              </button>
            </div>
            <p className="mt-2 text-center text-[11px] text-zinc-600">{demoWorkspaceComposer.helper}</p>
          </div>
        </div>

        {/* —— Intelligence panel —— */}
        <aside className={`${demoUi.stickyAside} lg:pt-0`}>
          <div
            className={`relative overflow-hidden ${demoUi.roundedPanel} border ${demoUi.borderHairline} bg-gradient-to-b from-white/[0.035] to-transparent p-5 ${demoUi.panelInset}`}
          >
            <div
              className="pointer-events-none absolute -right-8 -top-12 h-40 w-40 rounded-full bg-cauris-flame/[0.06] blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -left-10 bottom-0 h-32 w-32 rounded-full opacity-70 blur-3xl"
              style={{
                background: "radial-gradient(circle, rgba(88, 60, 180, 0.2), transparent 70%)",
              }}
              aria-hidden
            />
            <p className={`relative ${demoUi.kickerTrack} text-cauris-flame/85`}>
              {demoWorkspaceStructuredSignals.sectionTitle}
            </p>
            <ul className="relative mt-5 space-y-3" role="list">
              {demoWorkspaceStructuredSignals.cards.map((card, si) => (
                <li key={card.title}>
                  <div
                    className="demo-workspace-signal cauris-glass-card rounded-xl p-4 transition duration-500 hover:border-cauris-gold/25"
                    style={{ animationDelay: `${80 + si * 60}ms` }}
                  >
                    <h3 className="text-sm font-semibold text-cauris-dawn">{card.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">{card.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="relative mt-6 rounded-xl border border-white/[0.06] bg-black/35 px-4 py-3 text-xs leading-relaxed text-zinc-500">
              {demoWorkspaceStructuredSignals.footerSummary}
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
