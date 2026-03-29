"use client";

import type { ReactNode } from "react";
import { demoUi } from "@/components/demo/demoUi";
import {
  demoVaultArtifacts,
  demoVaultContinuity,
  demoVaultIntro,
  demoVaultMain,
  demoVaultSupport,
} from "@/data/caurisDemoContent";

type VaultArtifactId = (typeof demoVaultArtifacts)[number]["id"];

const VAULT_ICONS: Record<VaultArtifactId, ReactNode> = {
  notes: (
    <svg viewBox="0 0 24 24" fill="none" className="h-9 w-9" aria-hidden>
      <path
        d="M8 6h10a2 2 0 012 2v12a2 2 0 01-2 2H8l-4-3V6a2 2 0 012-2h0"
        className="stroke-current"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 10h8M8 14h6" className="stroke-current" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  screenshots: (
    <svg viewBox="0 0 24 24" fill="none" className="h-9 w-9" aria-hidden>
      <rect
        x="5"
        y="5"
        width="14"
        height="14"
        rx="2"
        className="stroke-current"
        strokeWidth="1.2"
      />
      <path d="M9 9h6v4H9z" className="stroke-current/70" strokeWidth="1" />
      <path d="M8 17l2.5-2 2 1.5L16 13" className="stroke-current/60" strokeWidth="1" strokeLinecap="round" />
    </svg>
  ),
  files: (
    <svg viewBox="0 0 24 24" fill="none" className="h-9 w-9" aria-hidden>
      <path
        d="M8 4h6l4 4v12a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2z"
        className="stroke-current"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path d="M14 4v4h4" className="stroke-current" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M9 13h6M9 17h4" className="stroke-current" strokeWidth="1" strokeLinecap="round" />
    </svg>
  ),
  photos: (
    <svg viewBox="0 0 24 24" fill="none" className="h-9 w-9" aria-hidden>
      <rect
        x="5"
        y="6"
        width="14"
        height="12"
        rx="2"
        className="stroke-current"
        strokeWidth="1.2"
      />
      <path
        d="M8 16l2.5-3 2 2 2.5-3.5L18 16"
        className="stroke-current/70"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9.5" cy="9.5" r="1" className="fill-current opacity-50" />
    </svg>
  ),
  exports: (
    <svg viewBox="0 0 24 24" fill="none" className="h-9 w-9" aria-hidden>
      <path
        d="M12 4v10m0 0l3.5-3.5M12 14L8.5 10.5"
        className="stroke-current"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 18h12a2 2 0 002-2v-1"
        className="stroke-current/80"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <rect
        x="5"
        y="8"
        width="14"
        height="11"
        rx="2"
        className="stroke-current/35"
        strokeWidth="1"
        strokeDasharray="2 2"
      />
    </svg>
  ),
};

export function DemoVaultStep() {
  const titleId = "demo-vault-title";

  return (
    <div className={demoUi.region} role="region" aria-labelledby={titleId}>
      <div className={demoUi.introMax}>
        <p className={demoUi.kicker}>Guided preview</p>
        <h2 id={titleId} className={demoUi.stepTitle}>
          {demoVaultIntro.title}
        </h2>
        <p className={demoUi.lead}>{demoVaultIntro.supporting}</p>
        <p className={demoUi.leadDim}>{demoVaultIntro.secondary}</p>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-500/25 bg-slate-950/60 px-3 py-1.5">
          <span
            className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400/90 shadow-[0_0_8px_rgba(148,163,184,0.35)]"
            aria-hidden
          />
          <span className="text-[11px] font-medium text-zinc-300">
            {demoVaultContinuity.label}
          </span>
        </div>
        <p className={demoUi.footnote}>{demoVaultContinuity.note}</p>
      </div>

      <div className={`${demoUi.sectionY} ${demoUi.gridSplit}`}>
        <div className="flex flex-col gap-8 sm:gap-10">
          <article
            className={`demo-vault-hero relative overflow-hidden ${demoUi.roundedPanel} border ${demoUi.borderHairline} bg-zinc-950/80 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),inset_0_0_0_1px_rgba(255,255,255,0.02)] sm:p-9`}
            style={{
              backgroundImage:
                "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(71, 85, 105, 0.12), transparent 55%), radial-gradient(ellipse 50% 45% at 100% 100%, rgba(88, 60, 180, 0.08), transparent 60%)",
            }}
          >
            <div
              className="pointer-events-none absolute inset-2 rounded-[1.15rem] border border-white/[0.04]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute bottom-0 left-1/2 h-px w-2/3 max-w-md -translate-x-1/2 bg-gradient-to-r from-transparent via-cauris-gold/15 to-transparent"
              aria-hidden
            />
            <div className="relative">
              <p className={`${demoUi.kickerTrack} text-zinc-500`}>Secure reference</p>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-zinc-50 sm:text-2xl">
                {demoVaultMain.title}
              </h3>
              <p className="mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
                {demoVaultMain.body}
              </p>
            </div>
          </article>

          <ul
            className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3"
            role="list"
            aria-label="Retained artifact categories"
          >
            {demoVaultArtifacts.map((artifact, i) => (
              <li
                key={artifact.id}
                className={`demo-vault-tile group relative overflow-hidden rounded-xl border ${demoUi.borderHairline} bg-gradient-to-b from-white/[0.02] to-black/40 p-5 ${demoUi.panelInset} transition duration-500 hover:border-white/[0.12] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_0_32px_rgba(88,60,180,0.06)]`}
                style={{ animationDelay: `${100 + i * 55}ms` }}
              >
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-indigo-500/[0.04] blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-60"
                  aria-hidden
                />
                <div className="relative text-slate-500 transition-colors duration-500 group-hover:text-cauris-dawn/75">
                  {VAULT_ICONS[artifact.id]}
                </div>
                <h4 className="relative mt-4 text-sm font-semibold tracking-tight text-zinc-200">
                  {artifact.title}
                </h4>
                <p className="relative mt-2 text-sm leading-relaxed text-zinc-500">
                  {artifact.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <aside className={demoUi.stickyAside}>
          <div
            className={`relative overflow-hidden ${demoUi.roundedPanel} border ${demoUi.borderHairline} bg-zinc-950/70 p-6 ${demoUi.panelInset}`}
          >
            <div
              className="pointer-events-none absolute right-0 top-0 h-24 w-24 translate-x-1/3 -translate-y-1/3 rounded-full bg-indigo-600/[0.06] blur-3xl"
              aria-hidden
            />
            <p className={`relative ${demoUi.kickerTrack} text-zinc-500`}>{demoVaultSupport.title}</p>
            <p className="relative mt-4 text-sm leading-relaxed text-zinc-400">
              {demoVaultSupport.body}
            </p>
            <ul
              className="relative mt-5 flex flex-wrap gap-2"
              role="list"
              aria-label="Vault qualities"
            >
              {demoVaultSupport.tags.map((tag) => (
                <li key={tag}>
                  <span className="inline-flex rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1 text-[11px] font-medium text-zinc-400">
                    {tag}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
