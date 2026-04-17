"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import {
  DemoAmbient,
  DemoProgressBar,
  DemoStepNavDesktop,
  DemoStepRegion,
  useDemoArrowNavigation,
} from "@/components/demo/shared";
import { demoUi } from "@/components/demo/demoUi";
import {
  dashboardOSDemoEarlyAccess,
  dashboardOSDemoStepLabels,
  dashboardOSDemoWelcome,
  dashboardOSPhaseEyebrows,
  dashboardOSTourSteps,
} from "@/data/dashboardOSDemoContent";
import { buildBusinessMailto } from "@/data/siteContact";

const TOTAL_STEPS = dashboardOSDemoStepLabels.length;
const EXIT_HREF = "/dashboardos";

/** DashboardOS-only layout tokens (does not change shared `demoUi` consumers). */
const dosSurface = `${demoUi.productMain} demo-dashboardos-product overflow-hidden`;
const dosToolbar =
  "flex min-h-[2.75rem] flex-wrap items-center justify-between gap-2 border-b border-white/[0.07] bg-zinc-950/42 px-4 py-3 backdrop-blur-sm sm:min-h-[3rem] sm:gap-3 sm:px-5 sm:py-3.5";
const dosInset = "px-4 py-6 sm:px-6 sm:py-7";
const dosGrid = `${demoUi.gridSplit} gap-8 sm:gap-10 md:gap-12 lg:gap-16`;
const dosAside = `${demoUi.stickyAside} lg:top-[8.25rem]`;
const dosProse = "max-w-2xl space-y-3 sm:space-y-4 text-pretty";

function WelcomeStep({ onStart }: { onStart: () => void }) {
  return (
    <DemoStepRegion stepKey={0} labelledBy="dashboardos-welcome-title">
      <div className="relative isolate">
        {/* Subtle ops grid — consulting / control-plane feel without competing with copy */}
        <div
          className="pointer-events-none absolute inset-x-0 top-[-12%] z-0 h-[min(92vh,52rem)] opacity-[0.22] sm:top-[-8%] sm:opacity-[0.28]"
          aria-hidden
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px),
              linear-gradient(to right, rgba(232,148,58,0.06) 1px, transparent 1px)`,
            backgroundSize: "24px 24px, 24px 24px, 96px 96px",
            backgroundPosition: "0 0, 0 0, 0 0",
            maskImage:
              "radial-gradient(ellipse 72% 58% at 50% 22%, black 0%, transparent 70%), linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 72% 58% at 50% 22%, black 0%, transparent 70%), linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        />
        <div
          className="pointer-events-none absolute left-1/2 top-8 z-0 h-32 w-[min(100%,42rem)] -translate-x-1/2 opacity-[0.12] sm:top-10"
          aria-hidden
          style={{
            backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 11px, rgba(255,255,255,0.09) 11px, rgba(255,255,255,0.09) 12px)`,
          }}
        />

        <div className="relative z-10 mx-auto max-w-3xl space-y-5 text-center sm:space-y-6">
          <p className={demoUi.phaseEyebrow}>{dashboardOSPhaseEyebrows[0]}</p>
          <h1
            id="dashboardos-welcome-title"
            className="text-balance text-[1.65rem] font-semibold leading-[1.12] tracking-[-0.03em] text-zinc-50 sm:text-4xl sm:leading-tight md:text-[2.65rem] md:leading-[1.08]"
          >
            <span className="text-gradient-gold">{dashboardOSDemoWelcome.title}</span>
          </h1>
          <p className="mx-auto max-w-xl text-pretty text-lg font-medium leading-snug text-zinc-300 sm:text-xl sm:leading-snug">
            {dashboardOSDemoWelcome.subheadline}
          </p>
          <p className="mx-auto max-w-2xl text-pretty text-sm leading-[1.65] text-zinc-300 sm:text-base">
            {dashboardOSDemoWelcome.body}
          </p>
        </div>

        <div className="relative z-10 mx-auto mt-14 max-w-2xl sm:mt-20">
          <div
            className="pointer-events-none absolute -inset-[18%] rounded-[2rem] bg-cauris-flame/[0.09] blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -inset-[10%] rounded-[2rem] opacity-70 blur-3xl"
            style={{
              background: "radial-gradient(ellipse at 40% 25%, rgba(244, 176, 66, 0.16), transparent 58%)",
            }}
            aria-hidden
          />

          <div className="demo-welcome-hero relative overflow-hidden rounded-brand-lg border border-white/[0.13] bg-gradient-to-b from-zinc-900/58 to-black/70 p-px shadow-[0_0_88px_rgba(244,176,66,0.12),inset_0_1px_0_rgba(255,255,255,0.1)] ring-1 ring-cauris-gold/[0.15] backdrop-blur-md">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.14]"
              aria-hidden
              style={{
                backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)`,
                backgroundSize: "20px 20px",
              }}
            />
            <div className="relative rounded-[calc(1.5rem-1px)] bg-black/24 backdrop-blur-xl">
              <div className="flex items-center gap-2 border-b border-white/[0.08] px-3 py-2.5 sm:px-4">
                <span className="flex gap-1.5" aria-hidden>
                  <span className="h-2 w-2 rounded-full bg-zinc-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]" />
                  <span className="h-2 w-2 rounded-full bg-zinc-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]" />
                  <span className="h-2 w-2 rounded-full bg-zinc-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]" />
                </span>
                <div className="mx-auto flex min-w-0 flex-1 justify-center sm:mx-0 sm:justify-start sm:pl-2">
                  <span className="truncate rounded-md border border-white/[0.09] bg-zinc-950/88 px-3 py-1 font-mono text-[10px] text-zinc-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:text-[11px]">
                    dashboardos<span className="text-zinc-400">.ops</span>
                    <span className="text-cauris-flame/75"> / consulting</span>
                  </span>
                </div>
              </div>

              <div className="grid gap-4 p-4 sm:grid-cols-2 sm:gap-5 sm:p-6">
                <div className="space-y-3 rounded-xl border border-white/[0.08] bg-zinc-950/45 p-4 ring-1 ring-white/[0.05] transition-shadow duration-300 hover:border-white/[0.11]">
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-cauris-flame/80">Today</p>
                <div className="space-y-2">
                  {["Clock events", "Client hours", "Billable mix"].map((label, i) => (
                    <div
                      key={label}
                      className={`flex items-center justify-between rounded-lg border px-3 py-2.5 text-left text-xs transition-colors duration-200 ${
                        i === 0
                          ? "border-cauris-gold/25 bg-cauris-flame/[0.08] text-zinc-200"
                          : "border-white/[0.07] text-zinc-300 hover:border-white/[0.1] hover:text-zinc-200"
                      }`}
                    >
                      <span>{label}</span>
                      <span className="font-mono text-[10px] text-zinc-400">sample</span>
                    </div>
                  ))}
                </div>
                </div>
                <div className="space-y-3 rounded-xl border border-white/[0.08] bg-zinc-950/45 p-4 ring-1 ring-white/[0.05] transition-shadow duration-300 hover:border-white/[0.11]">
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-cauris-flame/80">Signals</p>
                <div className="h-24 rounded-lg bg-gradient-to-br from-zinc-800/70 to-black/80 ring-1 ring-white/[0.06]">
                  <div className="flex h-full flex-col justify-end p-3">
                    <p className="text-[11px] font-medium text-zinc-400">Utilization · billable vs plan</p>
                    <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
                      <div className="h-full w-[62%] rounded-full bg-gradient-to-r from-cauris-flame to-cauris-gold" />
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      <div className="relative z-10 mt-12 flex flex-col items-center gap-4 px-1 sm:mt-16">
        <button
          type="button"
          onClick={onStart}
          className={`inline-flex h-12 min-h-12 w-full max-w-sm items-center justify-center rounded-full bg-gradient-to-b from-cauris-flame/95 to-cauris-ember/95 px-8 text-sm font-semibold text-black shadow-glow-gold transition duration-200 ease-out cauris-transition-interactive motion-safe:active:scale-[0.98] hover:from-cauris-dawn hover:to-cauris-flame hover:shadow-glow-gold-lg sm:w-auto sm:max-w-none sm:px-10 ${demoUi.focusRing}`}
        >
          {dashboardOSDemoWelcome.ctaStart}
        </button>
        <p className="max-w-sm text-center font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-400 sm:text-[11px]">
          Sample UI · consulting operations only · not live client data
        </p>
      </div>
      </div>
    </DemoStepRegion>
  );
}

const employeeWorkLogFields = [
  { label: "Clock in", value: "7:00 AM" },
  { label: "Client", value: "Summit Dining Co." },
  { label: "Location", value: "Downtown DC" },
  { label: "Tool", value: "MarginEdge" },
  { label: "Work type", value: "Invoice Review" },
  { label: "Duration", value: "1.5 hrs" },
] as const;

const employeeWorkSummary = [
  { label: "Employee", value: "Alex Carter" },
  { label: "Work logged", value: "Invoice Review" },
  { label: "Time", value: "1.5 hours" },
  { label: "Status", value: "Logged", highlight: true },
] as const;

function EmployeeWorkStep({ titleId }: { titleId: string }) {
  const copy = dashboardOSTourSteps[0];
  const eyebrow = dashboardOSPhaseEyebrows[1];

  return (
    <DemoStepRegion stepKey={1} labelledBy={titleId}>
      <div className={dosGrid}>
        <div>
          <div className={dosProse}>
            <p className={demoUi.phaseEyebrow}>{eyebrow}</p>
            <h2 id={titleId} className={demoUi.stepTitle}>
              {copy.title}
            </h2>
            <p className={demoUi.lead}>{copy.lead}</p>
            {copy.supporting ? <p className={demoUi.leadDim}>{copy.supporting}</p> : null}
          </div>

          <div className={`${demoUi.sectionY} ${dosSurface} p-0`}>
            <div className={dosToolbar}>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">Time entry · sample log</p>
              <span className="rounded-md border border-cauris-gold/25 bg-cauris-flame/[0.08] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-cauris-flame/90">
                Draft saved
              </span>
            </div>
            <div
              className={`relative ${dosInset}`}
              style={{
                backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)`,
                backgroundSize: "20px 20px",
              }}
            >
              <ul className="relative divide-y divide-white/[0.06] rounded-xl border border-white/[0.09] bg-black/32 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                {employeeWorkLogFields.map((row) => (
                  <li
                    key={row.label}
                    className="flex flex-col gap-0.5 px-4 py-3.5 transition-colors duration-200 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-5 sm:py-3.5 sm:hover:bg-white/[0.025]"
                  >
                    <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-zinc-400 sm:text-xs sm:normal-case sm:tracking-normal">
                      {row.label}
                    </span>
                    <span className="text-sm font-medium text-zinc-100 sm:text-right">{row.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <aside className={dosAside}>
          <div className={`${demoUi.productAside} p-5 sm:p-6 md:p-7`}>
            <p className={demoUi.phaseEyebrow}>Structured summary</p>
            <p className="mt-3 text-sm font-medium leading-relaxed text-zinc-300">What operations sees from this log</p>
            <dl className="mt-6 space-y-0 divide-y divide-white/[0.07] rounded-xl border border-white/[0.09] bg-black/24">
              {employeeWorkSummary.map((row) => (
                <div key={row.label} className="flex flex-col gap-1 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-5 sm:py-4">
                  <dt className="text-xs font-medium uppercase tracking-[0.14em] text-zinc-400">{row.label}</dt>
                  <dd className="text-sm text-zinc-100 sm:text-right">
                    {"highlight" in row && row.highlight ? (
                      <span className="inline-flex items-center rounded-full border border-emerald-500/35 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300/95">
                        {row.value}
                      </span>
                    ) : (
                      row.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-xs leading-relaxed text-zinc-400">
              Illustrative only — your firm’s fields, approvals, and integrations are configured in a live build.
            </p>
          </div>
        </aside>
      </div>
    </DemoStepRegion>
  );
}

const clientLocationDemoBlocks = [
  {
    headline: "Summit Dining Co. (Downtown DC)",
    variant: "single" as const,
    locations: [
      { tasks: ["Invoice Review · Alex Carter · 1.5 h", "PMIX Mapping · Taylor Morgan · 1.0 h"] as const },
    ],
  },
  {
    headline: "Harbor Foods Management (Baltimore Harbor)",
    variant: "single" as const,
    locations: [{ tasks: ["Bookkeeping · Jordan Blake · 2.5 h", "Reporting · Casey Rivera · 0.5 h"] as const }],
  },
  {
    headline: "BluePeak Restaurant Group",
    variant: "multi" as const,
    locations: [
      { name: "Arlington VA" as const, tasks: ["Invoice Review · Restaurant365 · 2.0 h"] as const },
      {
        name: "Silver Spring MD" as const,
        tasks: ["PMIX Mapping · MarginEdge · 1.5 h", "Data Reconciliation · QuickBooks · 1.0 h"] as const,
      },
    ],
  },
] as const;

function ClientLocationStep({ titleId }: { titleId: string }) {
  const copy = dashboardOSTourSteps[1];
  const eyebrow = dashboardOSPhaseEyebrows[2];

  return (
    <DemoStepRegion stepKey={2} labelledBy={titleId}>
      <div className={dosGrid}>
        <div>
          <div className={dosProse}>
            <p className={demoUi.phaseEyebrow}>{eyebrow}</p>
            <h2 id={titleId} className={demoUi.stepTitle}>
              {copy.title}
            </h2>
            <p className={demoUi.lead}>{copy.lead}</p>
            {copy.supporting ? <p className={demoUi.leadDim}>{copy.supporting}</p> : null}
          </div>

          <div className={`${demoUi.sectionY} ${dosSurface} p-0`}>
            <div className={dosToolbar}>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">Delivery map · sample rollups</p>
            </div>
            <div className={`space-y-6 sm:space-y-7 ${dosInset}`}>
              {clientLocationDemoBlocks.map((block) => (
                <div
                  key={block.headline}
                  className="rounded-2xl border border-white/[0.09] bg-black/28 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] ring-1 ring-white/[0.04] transition-shadow duration-300 hover:shadow-[0_20px_48px_rgba(0,0,0,0.35)]"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.07] px-4 py-3 sm:px-5">
                    <p className="text-sm font-semibold tracking-tight text-zinc-100">{block.headline}</p>
                    {block.variant === "multi" ? (
                      <span className="rounded-md border border-white/[0.1] bg-white/[0.04] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-400">
                        Multiple locations
                      </span>
                    ) : null}
                  </div>
                  <div className="divide-y divide-white/[0.06]">
                    {block.locations.map((loc, idx) => (
                      <div key={`${block.headline}-${"name" in loc ? loc.name : idx}`} className="px-4 py-4 sm:px-5">
                        {"name" in loc ? (
                          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cauris-flame/85">
                            Store / location · {loc.name}
                          </p>
                        ) : (
                          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                            Work at this site
                          </p>
                        )}
                        <ul className={`space-y-2 ${"name" in loc ? "mt-3" : "mt-2"}`}>
                          {loc.tasks.map((t) => (
                            <li
                              key={t}
                              className="flex items-start gap-3 rounded-lg border border-white/[0.07] bg-zinc-950/40 px-3 py-2.5 text-sm leading-snug text-zinc-300 transition-colors duration-200 hover:border-white/[0.1]"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cauris-gold/70" aria-hidden />
                              <span>{t}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className={dosAside}>
          <div className={`${demoUi.productAside} p-5 sm:p-6 md:p-7`}>
            <p className={demoUi.phaseEyebrow}>Work grouped by</p>
            <ol className="mt-5 space-y-5">
              <li className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-cauris-gold/25 bg-cauris-flame/[0.1] font-mono text-xs font-semibold text-cauris-dawn">
                  1
                </span>
                <div>
                  <p className="text-sm font-semibold text-zinc-200">Client</p>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-400">
                    Accounts like Summit Dining Co., Harbor Foods Management, and BluePeak Restaurant Group — each
                    owns its own delivery thread.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/[0.12] bg-white/[0.04] font-mono text-xs font-semibold text-zinc-300">
                  2
                </span>
                <div>
                  <p className="text-sm font-semibold text-zinc-200">Store / location</p>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-400">
                    Downtown DC, Baltimore Harbor, or multiple sites under one client — tasks stay pinned to the place
                    they were performed.
                  </p>
                </div>
              </li>
            </ol>
            <p className="mt-6 text-xs leading-relaxed text-zinc-400">
              Sample names only — not affiliated businesses or live client data.
            </p>
          </div>
        </aside>
      </div>
    </DemoStepRegion>
  );
}

const toolWorkTypeMappings = [
  { tool: "MarginEdge", workType: "Invoice Review" },
  { tool: "Restaurant365", workType: "PMIX Mapping" },
  { tool: "QuickBooks", workType: "Data Reconciliation" },
] as const;

function ToolWorkTypeStep({ titleId }: { titleId: string }) {
  const copy = dashboardOSTourSteps[2];
  const eyebrow = dashboardOSPhaseEyebrows[3];

  return (
    <DemoStepRegion stepKey={3} labelledBy={titleId}>
      <div className={dosGrid}>
        <div>
          <div className={dosProse}>
            <p className={demoUi.phaseEyebrow}>{eyebrow}</p>
            <h2 id={titleId} className={demoUi.stepTitle}>
              {copy.title}
            </h2>
            <p className={demoUi.lead}>{copy.lead}</p>
            {copy.supporting ? <p className={demoUi.leadDim}>{copy.supporting}</p> : null}
          </div>

          <div className={`${demoUi.sectionY} ${dosSurface} p-0`}>
            <div className={dosToolbar}>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">Platform · work type map</p>
            </div>
            <ul className="divide-y divide-white/[0.06]">
              {toolWorkTypeMappings.map((row, i) => (
                <li
                  key={row.tool}
                  className={`flex flex-col gap-3 px-4 py-4 transition-colors duration-200 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-5 sm:py-5 sm:hover:bg-white/[0.02] ${
                    i === 0 ? "bg-cauris-flame/[0.06]" : ""
                  }`}
                >
                  <div className="flex min-w-0 flex-1 flex-wrap items-center gap-x-2.5 gap-y-2">
                    <span className="shrink-0 rounded-lg border border-white/[0.11] bg-zinc-950/70 px-3 py-2 font-mono text-xs font-medium text-cauris-dawn/95 ring-1 ring-cauris-gold/18">
                      {row.tool}
                    </span>
                    <span className="font-mono text-sm text-zinc-400" aria-hidden>
                      →
                    </span>
                    <span className="min-w-0 text-sm font-medium leading-snug text-zinc-200">{row.workType}</span>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-400 sm:text-right">sample tag</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className={dosAside}>
          <div className={`${demoUi.productAside} p-5 sm:p-6 md:p-7`}>
            <p className={demoUi.phaseEyebrow}>Why this layer exists</p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              Partners and finance rarely argue about <span className="text-zinc-400">where</span> work happened — they
              argue about <span className="text-zinc-400">what kind of work</span> it was. Tool + work type tags make
              that explicit at capture.
            </p>
            <div className="mt-6 rounded-xl border border-white/[0.08] bg-black/20 p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">In practice</p>
              <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                MarginEdge, Restaurant365, and QuickBooks stay the systems of record. DashboardOS is the operations
                memory sitting above them.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </DemoStepRegion>
  );
}

const billableClassificationCards = [
  { activity: "Invoice Review", bucket: "billable" as const, label: "Billable" },
  { activity: "Internal Meeting", bucket: "nonBillable" as const, label: "Non-billable" },
  { activity: "Reporting", bucket: "billable" as const, label: "Billable" },
] as const;

function BillableWorkStep({ titleId }: { titleId: string }) {
  const copy = dashboardOSTourSteps[3];
  const eyebrow = dashboardOSPhaseEyebrows[4];

  return (
    <DemoStepRegion stepKey={4} labelledBy={titleId}>
      <div className={dosGrid}>
        <div>
          <div className={dosProse}>
            <p className={demoUi.phaseEyebrow}>{eyebrow}</p>
            <h2 id={titleId} className={demoUi.stepTitle}>
              {copy.title}
            </h2>
            <p className={demoUi.lead}>{copy.lead}</p>
            {copy.supporting ? <p className={demoUi.leadDim}>{copy.supporting}</p> : null}
          </div>

          <div className={`${demoUi.sectionY} demo-dashboardos-stagger grid gap-4 sm:gap-5`}>
            {billableClassificationCards.map((card) => (
              <div
                key={card.activity}
                className={`rounded-2xl border p-px shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] ring-1 backdrop-blur-md transition-shadow duration-300 hover:shadow-[0_22px_56px_rgba(0,0,0,0.38)] ${
                  card.bucket === "billable"
                    ? "border-cauris-gold/28 bg-gradient-to-br from-cauris-flame/[0.12] to-black/55 ring-cauris-gold/12"
                    : "border-white/[0.1] bg-gradient-to-br from-white/[0.06] to-black/50 ring-white/[0.05]"
                }`}
              >
                <div className="flex flex-col gap-4 rounded-[calc(1rem-1px)] bg-black/32 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-6 sm:py-5">
                  <div className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-2">
                    <span className="text-base font-semibold tracking-tight text-zinc-100">{card.activity}</span>
                    <span className="font-mono text-sm text-zinc-400" aria-hidden>
                      →
                    </span>
                    <span
                      className={`inline-flex w-fit items-center rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] ${
                        card.bucket === "billable"
                          ? "border-emerald-500/40 bg-emerald-500/12 text-emerald-200/95"
                          : "border-zinc-500/35 bg-zinc-800/50 text-zinc-400"
                      }`}
                    >
                      {card.label}
                    </span>
                  </div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-400 sm:text-right">
                    {card.bucket === "billable" ? "Counts toward revenue" : "Firm time · not invoiced"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className={dosAside}>
          <div className={`${demoUi.productAside} p-5 sm:p-6 md:p-7`}>
            <p className={demoUi.phaseEyebrow}>At a glance</p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              When billable and non-billable are explicit on every entry, utilization and invoicing debates shrink — the
              ledger already speaks both languages.
            </p>
            <div className="mt-6 space-y-3 rounded-xl border border-white/[0.08] bg-black/20 p-4">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-medium text-zinc-400">Billable mix</span>
                <span className="font-mono text-xs text-cauris-dawn/90">sample</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-white/[0.06]">
                <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-cauris-flame to-cauris-gold" />
              </div>
              <p className="text-[11px] leading-relaxed text-zinc-400">Illustrative bar — not derived from the cards.</p>
            </div>
          </div>
        </aside>
      </div>
    </DemoStepRegion>
  );
}

const payrollHoursEmployeeDemo = {
  name: "Alex Carter",
  lines: ["7.5 hrs worked", "6.0 hrs billable"] as const,
} as const;

const payrollHoursSummaryDemo = [
  { label: "Total hours", value: "7.5 hrs" },
  { label: "Billable hours", value: "6.0 hrs" },
  {
    label: "Payroll estimation",
    value: "$612 sample",
    note: "Illustrative only — not compensation or tax advice.",
  },
] as const;

function PayrollHoursStep({ titleId }: { titleId: string }) {
  const copy = dashboardOSTourSteps[4];
  const eyebrow = dashboardOSPhaseEyebrows[5];

  return (
    <DemoStepRegion stepKey={5} labelledBy={titleId}>
      <div className={dosGrid}>
        <div>
          <div className={dosProse}>
            <p className={demoUi.phaseEyebrow}>{eyebrow}</p>
            <h2 id={titleId} className={demoUi.stepTitle}>
              {copy.title}
            </h2>
            <p className={demoUi.lead}>{copy.lead}</p>
            {copy.supporting ? <p className={demoUi.leadDim}>{copy.supporting}</p> : null}
          </div>

          <div className={`${demoUi.sectionY} ${dosSurface} p-0`}>
            <div className={dosToolbar}>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">Hours · sample employee</p>
            </div>
            <div className={dosInset}>
              <div className="rounded-xl border border-white/[0.1] bg-zinc-950/40 p-5 ring-1 ring-white/[0.04] sm:p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cauris-flame/85">
                  {payrollHoursEmployeeDemo.name}:
                </p>
                <ul className="mt-4 space-y-2.5 pl-1">
                  {payrollHoursEmployeeDemo.lines.map((line, i) => (
                    <li
                      key={line}
                      className={`flex items-start gap-3 rounded-lg border px-4 py-3 text-sm font-medium leading-snug text-zinc-100 ${
                        i === 1
                          ? "border-cauris-gold/22 bg-cauris-flame/[0.06]"
                          : "border-white/[0.07] bg-black/24"
                      }`}
                    >
                      <span className="mt-0.5 font-mono text-xs text-zinc-400" aria-hidden>
                        —
                      </span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <aside className={dosAside}>
          <div className={`${demoUi.productAside} p-5 sm:p-6 md:p-7`}>
            <p className={demoUi.phaseEyebrow}>Summary</p>
            <p className="mt-3 text-sm font-medium leading-relaxed text-zinc-300">Rollup for this sample period</p>
            <dl className="mt-6 space-y-0 divide-y divide-white/[0.07] rounded-xl border border-white/[0.09] bg-black/24">
              {payrollHoursSummaryDemo.map((row) => (
                <div key={row.label} className="px-4 py-4 sm:px-5">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <dt className="text-xs font-medium uppercase tracking-[0.14em] text-zinc-400">{row.label}</dt>
                    <dd className="font-mono text-lg font-semibold tracking-tight text-zinc-100 sm:text-right">{row.value}</dd>
                  </div>
                  {"note" in row ? <p className="mt-2 text-[11px] leading-relaxed text-zinc-400">{row.note}</p> : null}
                </div>
              ))}
            </dl>
          </div>
        </aside>
      </div>
    </DemoStepRegion>
  );
}

const invoiceGenerationDemo = {
  clientLabel: "Client: Summit Dining Co.",
  lines: ["12 hrs billable", "invoice: $720"] as const,
} as const;

function InvoiceGenerationStep({ titleId }: { titleId: string }) {
  const copy = dashboardOSTourSteps[5];
  const eyebrow = dashboardOSPhaseEyebrows[6];

  return (
    <DemoStepRegion stepKey={6} labelledBy={titleId}>
      <div className={dosGrid}>
        <div>
          <div className={dosProse}>
            <p className={demoUi.phaseEyebrow}>{eyebrow}</p>
            <h2 id={titleId} className={demoUi.stepTitle}>
              {copy.title}
            </h2>
            <p className={demoUi.lead}>{copy.lead}</p>
            {copy.supporting ? <p className={demoUi.leadDim}>{copy.supporting}</p> : null}
          </div>

          <div className={`${demoUi.sectionY} ${dosSurface} p-0`}>
            <div className={dosToolbar}>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">Draft invoice · sample</p>
              <span className="rounded-md border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-amber-200/90">
                Preview
              </span>
            </div>
            <div className={dosInset}>
              <div className="rounded-2xl border border-cauris-gold/22 bg-gradient-to-b from-zinc-900/85 to-black/75 p-6 ring-1 ring-cauris-gold/12 sm:p-8">
                <p className="text-base font-semibold tracking-tight text-zinc-50 sm:text-lg">
                  {invoiceGenerationDemo.clientLabel}
                </p>
                <ul className="mt-6 space-y-3 border-t border-white/[0.08] pt-6">
                  {invoiceGenerationDemo.lines.map((line, i) => (
                    <li
                      key={line}
                      className={`flex items-start gap-3 text-sm leading-relaxed sm:text-base ${
                        i === 1 ? "font-semibold text-cauris-dawn" : "text-zinc-300"
                      }`}
                    >
                      <span className="mt-1.5 font-mono text-xs text-zinc-400" aria-hidden>
                        —
                      </span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-400">
                  Not connected to accounting · browser-only demo
                </p>
              </div>
            </div>
          </div>
        </div>

        <aside className={dosAside}>
          <div className={`${demoUi.productAside} p-5 sm:p-6 md:p-7`}>
            <p className={demoUi.phaseEyebrow}>From time to invoice</p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              When billable hours are already tagged to the client, the invoice story writes itself — partners review
              totals, not reconstruct who did what.
            </p>
            <div className="mt-6 rounded-xl border border-white/[0.08] bg-black/20 p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">Flow</p>
              <ol className="mt-3 list-decimal space-y-2 pl-4 text-xs leading-relaxed text-zinc-400">
                <li>Structured time entries</li>
                <li>Billable approval</li>
                <li>Draft invoice line</li>
              </ol>
            </div>
          </div>
        </aside>
      </div>
    </DemoStepRegion>
  );
}

const adminDashboardMetrics = [
  { key: "employees", label: "Employees active", value: "12", detail: "Clocked in or delivering today" },
  { key: "clients", label: "Clients worked", value: "8", detail: "Accounts with time this week" },
  { key: "wip", label: "Work in progress", value: "26", detail: "Open tasks across pods" },
  { key: "alerts", label: "Alerts", value: "3", detail: "Exceptions needing review" },
] as const;

function AdminDashboardStep({ titleId }: { titleId: string }) {
  const copy = dashboardOSTourSteps[6];
  const eyebrow = dashboardOSPhaseEyebrows[7];

  return (
    <DemoStepRegion stepKey={7} labelledBy={titleId}>
      <div className={dosGrid}>
        <div>
          <div className={dosProse}>
            <p className={demoUi.phaseEyebrow}>{eyebrow}</p>
            <h2 id={titleId} className={demoUi.stepTitle}>
              {copy.title}
            </h2>
            <p className={demoUi.lead}>{copy.lead}</p>
            {copy.supporting ? <p className={demoUi.leadDim}>{copy.supporting}</p> : null}
          </div>

          <div className={`${demoUi.sectionY} ${dosSurface} p-0`}>
            <div className={dosToolbar}>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">Operations pulse · sample</p>
            </div>
            <div className="grid gap-3.5 p-4 sm:grid-cols-2 sm:gap-4 sm:p-5 md:p-6">
              {adminDashboardMetrics.map((m) => (
                <div
                  key={m.key}
                  className={`rounded-2xl border p-4 ring-1 transition-shadow duration-300 sm:p-5 ${
                    m.key === "alerts"
                      ? "border-amber-500/35 bg-amber-500/[0.08] ring-amber-500/10 hover:shadow-[0_16px_40px_rgba(245,158,11,0.08)]"
                      : "border-white/[0.09] bg-black/28 ring-white/[0.05] hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)]"
                  }`}
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-400">{m.label}</p>
                  <p className="mt-3 font-mono text-3xl font-semibold tracking-tight text-zinc-50 sm:text-[2rem]">{m.value}</p>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-400">{m.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className={dosAside}>
          <div className={`${demoUi.productAside} p-5 sm:p-6 md:p-7`}>
            <p className={demoUi.phaseEyebrow}>Live posture</p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              This board is meant to answer “how are we doing right now?” — not vanity metrics, but who is active, which
              clients are in motion, what is still open, and what needs a human decision.
            </p>
            <p className="mt-6 text-xs leading-relaxed text-zinc-400">
              Numbers are fabricated for the demo; your firm would wire real rollups and thresholds.
            </p>
          </div>
        </aside>
      </div>
    </DemoStepRegion>
  );
}

const performanceInsightsPanels = [
  {
    key: "topClients",
    title: "Top clients",
    rows: [
      { label: "Redwood Hospitality Group", meta: "42h · mix 0.81" },
      { label: "Summit Dining Co.", meta: "31h · mix 0.74" },
      { label: "Harbor Foods Management", meta: "18h · mix 0.88" },
    ],
  },
  {
    key: "workload",
    title: "Employee workload",
    rows: [
      { label: "Alex Carter", meta: "38h / 44h plan", bar: 0.86 },
      { label: "Jordan Blake", meta: "44h / 40h plan", bar: 1.1 },
      { label: "Taylor Morgan", meta: "29h / 40h plan", bar: 0.72 },
      { label: "Casey Rivera", meta: "33h / 40h plan", bar: 0.82 },
    ],
  },
  {
    key: "ratios",
    title: "Billable ratios",
    rows: [
      { label: "Firm (rolling 4wk)", meta: "0.82" },
      { label: "Target band", meta: "0.78 – 0.85" },
      { label: "Consulting pod A", meta: "0.76" },
    ],
  },
  {
    key: "bottlenecks",
    title: "Bottlenecks",
    rows: [
      { label: "Invoice review queue", meta: "6d avg age" },
      { label: "MarginEdge access requests", meta: "3 pending" },
      { label: "BluePeak Restaurant Group — missing approvals", meta: "risk" },
    ],
  },
] as const;

function PerformanceInsightsStep({ titleId }: { titleId: string }) {
  const copy = dashboardOSTourSteps[7];
  const eyebrow = dashboardOSPhaseEyebrows[8];

  return (
    <DemoStepRegion stepKey={8} labelledBy={titleId}>
      <div className={dosGrid}>
        <div>
          <div className={dosProse}>
            <p className={demoUi.phaseEyebrow}>{eyebrow}</p>
            <h2 id={titleId} className={demoUi.stepTitle}>
              {copy.title}
            </h2>
            <p className={demoUi.lead}>{copy.lead}</p>
            {copy.supporting ? <p className={demoUi.leadDim}>{copy.supporting}</p> : null}
          </div>

          <div className={`${demoUi.sectionY} ${dosSurface} p-0`}>
            <div className={dosToolbar}>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">Signals · sample analytics</p>
            </div>
            <div className="grid gap-3.5 p-4 sm:grid-cols-2 sm:gap-4 sm:p-5 md:p-6">
              {performanceInsightsPanels.map((panel) => (
                <div
                  key={panel.key}
                  className="rounded-2xl border border-white/[0.09] bg-black/32 p-4 ring-1 ring-white/[0.05] transition-shadow duration-300 hover:border-white/[0.11] hover:shadow-[0_18px_44px_rgba(0,0,0,0.38)] sm:p-5"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cauris-flame/80">{panel.title}</p>
                  <ul className="mt-4 space-y-3.5">
                    {panel.rows.map((row) => (
                      <li key={row.label}>
                        <div className="flex items-start justify-between gap-3 text-sm">
                          <span className="font-medium leading-snug text-zinc-200">{row.label}</span>
                          <span className="shrink-0 text-right font-mono text-[11px] font-medium normal-case tracking-normal text-zinc-400">
                            {row.meta}
                          </span>
                        </div>
                        {"bar" in row ? (
                          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
                            <div
                              className={`h-full rounded-full ${
                                row.bar > 1 ? "bg-amber-400/80" : "bg-gradient-to-r from-cauris-flame to-cauris-gold"
                              }`}
                              style={{ width: `${Math.min(100, row.bar * 100)}%` }}
                            />
                          </div>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className={dosAside}>
          <div className={`${demoUi.productAside} p-5 sm:p-6 md:p-7`}>
            <p className={demoUi.phaseEyebrow}>One narrative</p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              Analytics here are meant to stitch together — who is buying time, who is burning it, whether it is
              billable, and what is stuck — instead of four disconnected exports.
            </p>
            <p className="mt-6 text-xs leading-relaxed text-zinc-400">
              Figures are illustrative; a live build would reflect your firm’s definitions and date ranges.
            </p>
          </div>
        </aside>
      </div>
    </DemoStepRegion>
  );
}

function EarlyAccessStep() {
  const titleId = "dashboardos-early-access-title";
  const mailRequestDemo = buildBusinessMailto({
    subject: dashboardOSDemoEarlyAccess.mailRequestDemoSubject,
    body: "I’d like to request a DashboardOS demo.\n\n",
  });
  const mailStartSystem = buildBusinessMailto({
    subject: dashboardOSDemoEarlyAccess.mailStartSystemSubject,
    body: "I finished the DashboardOS guided demo and want to discuss starting our system.\n\n",
  });
  const mailEmailNova = buildBusinessMailto({
    subject: dashboardOSDemoEarlyAccess.mailEmailNovaSubject,
    body: "I viewed the DashboardOS demo and have a question.\n\n",
  });

  return (
    <DemoStepRegion stepKey={9} labelledBy={titleId}>
      <div className="mx-auto max-w-3xl space-y-6 text-center sm:space-y-7 lg:mx-0 lg:max-w-none lg:text-left">
        <div className="mx-auto max-w-2xl space-y-4 text-pretty sm:space-y-5 lg:mx-0">
          <p className={demoUi.phaseEyebrow}>{dashboardOSPhaseEyebrows[9]}</p>
          <h2
            id={titleId}
            className="text-balance text-2xl font-semibold tracking-[-0.03em] text-zinc-50 sm:text-3xl md:text-[2.35rem] md:leading-[1.08]"
          >
            {dashboardOSDemoEarlyAccess.title}
          </h2>
          <p className="text-base font-medium leading-[1.65] text-zinc-300 sm:text-lg">
            {dashboardOSDemoEarlyAccess.body}
          </p>
        </div>
        <div className="mx-auto flex w-full max-w-xl flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-start sm:gap-4">
          <a
            href={mailRequestDemo}
            className="cauris-btn-secondary inline-flex min-h-12 w-full items-center justify-center transition duration-200 ease-out motion-safe:active:scale-[0.98] sm:w-auto sm:min-w-[11.5rem]"
          >
            Request Demo
          </a>
          <a
            href={mailStartSystem}
            className="cauris-btn-primary-card inline-flex min-h-12 w-full items-center justify-center transition duration-200 ease-out motion-safe:active:scale-[0.98] sm:w-auto sm:min-w-[11.5rem]"
          >
            Start Your System
          </a>
          <a
            href={mailEmailNova}
            className="cauris-btn-tertiary-card inline-flex min-h-12 w-full items-center justify-center transition duration-200 ease-out motion-safe:active:scale-[0.98] sm:w-auto sm:min-w-[11.5rem]"
          >
            Email SCS Nova
          </a>
        </div>
      </div>
    </DemoStepRegion>
  );
}

function renderStep(step: number, goNextFromWelcome: () => void) {
  if (step === 0) {
    return <WelcomeStep onStart={goNextFromWelcome} />;
  }
  if (step === 1) {
    return <EmployeeWorkStep titleId="dashboardos-step-1-title" />;
  }
  if (step === 2) {
    return <ClientLocationStep titleId="dashboardos-step-2-title" />;
  }
  if (step === 3) {
    return <ToolWorkTypeStep titleId="dashboardos-step-3-title" />;
  }
  if (step === 4) {
    return <BillableWorkStep titleId="dashboardos-step-4-title" />;
  }
  if (step === 5) {
    return <PayrollHoursStep titleId="dashboardos-step-5-title" />;
  }
  if (step === 6) {
    return <InvoiceGenerationStep titleId="dashboardos-step-6-title" />;
  }
  if (step === 7) {
    return <AdminDashboardStep titleId="dashboardos-step-7-title" />;
  }
  if (step === 8) {
    return <PerformanceInsightsStep titleId="dashboardos-step-8-title" />;
  }
  if (step === 9) {
    return <EarlyAccessStep />;
  }
  return null;
}

export function DashboardOSDemoExperience() {
  const [step, setStep] = useState(0);

  const goNextFromWelcome = useCallback(() => setStep(1), []);
  const goNext = useCallback(() => setStep((s) => Math.min(TOTAL_STEPS - 1, s + 1)), []);
  const goBack = useCallback(() => setStep((s) => Math.max(0, s - 1)), []);

  useDemoArrowNavigation(goNext, goBack, true);

  return (
    <div className="relative min-h-[100dvh] overflow-x-hidden text-zinc-100">
      <DemoAmbient />

      <header className="demo-cauris-header sticky top-0 z-20 border-b border-white/[0.08] pt-[env(safe-area-inset-top,0px)]">
        <div className="container-brand flex flex-col gap-5 py-4 sm:gap-7 sm:py-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-[13px] font-semibold tracking-[-0.02em] text-zinc-100 sm:text-sm">
                DashboardOS <span className="font-medium text-zinc-300">Demo</span>
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400 sm:text-[11px]">
                Sample consulting UI · not live data
              </p>
            </div>
            <Link
              href={EXIT_HREF}
              aria-label="Exit demo and return to the DashboardOS product page"
              className={`inline-flex min-h-12 shrink-0 items-center justify-center rounded-full border border-white/[0.11] bg-white/[0.03] px-5 text-xs font-semibold text-zinc-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] cauris-transition-interactive hover:border-cauris-gold/35 hover:bg-white/[0.05] hover:text-cauris-dawn sm:min-h-0 sm:px-4 sm:py-2 sm:text-sm ${demoUi.focusRing}`}
            >
              Exit
            </Link>
          </div>
          <DemoProgressBar
            step={step}
            labels={dashboardOSDemoStepLabels}
            startMono="Start · DashboardOS tour"
            progressAriaLabel={(label) => `DashboardOS demo progress: ${label}`}
          />
          <DemoStepNavDesktop labels={dashboardOSDemoStepLabels} step={step} />
        </div>
      </header>

      <main className="pb-[max(10rem,calc(8.5rem+env(safe-area-inset-bottom,0px)))] pt-4 sm:pb-32 sm:pt-8">
        <p className="sr-only" aria-live="polite" aria-atomic="true">
          Step {step + 1} of {TOTAL_STEPS}: {dashboardOSDemoStepLabels[step]}
        </p>
        <div key={step} className="min-w-0">
          {renderStep(step, goNextFromWelcome)}
        </div>
      </main>

      <footer className="demo-cauris-footer fixed bottom-0 left-0 right-0 z-20 border-t border-white/[0.08] pb-[env(safe-area-inset-bottom,0px)]">
        <div className="container-brand grid w-full grid-cols-2 items-stretch gap-3 py-4 sm:flex sm:items-center sm:justify-between sm:gap-4 sm:py-5">
          <button
            type="button"
            onClick={goBack}
            disabled={step === 0}
            aria-label={step === 0 ? "Back" : `Back to ${dashboardOSDemoStepLabels[step - 1]}`}
            className={`inline-flex min-h-12 w-full min-w-0 items-center justify-center rounded-full border border-white/[0.11] bg-white/[0.02] px-4 text-sm font-medium text-zinc-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition duration-200 ease-out cauris-transition-interactive motion-safe:active:scale-[0.98] enabled:hover:border-cauris-gold/28 enabled:hover:text-zinc-50 disabled:cursor-not-allowed disabled:opacity-35 sm:w-auto sm:min-w-[5.5rem] sm:px-5 ${demoUi.focusRing}`}
          >
            Back
          </button>
          {step < TOTAL_STEPS - 1 ? (
            <button
              type="button"
              onClick={goNext}
              aria-label={`Next: ${dashboardOSDemoStepLabels[step + 1]}`}
              className={`inline-flex min-h-12 w-full items-center justify-center rounded-full bg-gradient-to-b from-cauris-flame/95 to-cauris-ember/95 px-6 text-sm font-semibold text-black shadow-glow-gold transition duration-200 ease-out cauris-transition-interactive motion-safe:active:scale-[0.98] hover:from-cauris-dawn hover:to-cauris-flame hover:shadow-glow-gold-lg sm:w-auto sm:px-8 ${demoUi.focusRing}`}
            >
              Continue
            </button>
          ) : (
            <Link
              href={EXIT_HREF}
              aria-label="Return to the DashboardOS product page"
              className={`inline-flex min-h-12 w-full items-center justify-center rounded-full border border-cauris-gold/32 bg-cauris-flame/[0.1] px-6 text-center text-sm font-semibold leading-tight text-cauris-dawn shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition duration-200 ease-out cauris-transition-interactive motion-safe:active:scale-[0.98] hover:border-cauris-gold/45 hover:bg-cauris-flame/[0.14] sm:w-auto sm:px-8 ${demoUi.focusRing}`}
            >
              Return to DashboardOS
            </Link>
          )}
        </div>
      </footer>
    </div>
  );
}
