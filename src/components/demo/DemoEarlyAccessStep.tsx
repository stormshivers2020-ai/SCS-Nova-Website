"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { demoUi } from "@/components/demo/demoUi";
import {
  demoEarlyAccessContinuity,
  demoEarlyAccessCtas,
  demoEarlyAccessForm,
  demoEarlyAccessIntro,
  demoEarlyAccessSupport,
  demoPhaseEyebrows,
} from "@/data/caurisDemoContent";
import { buildBusinessMailto } from "@/data/siteContact";

export function DemoEarlyAccessStep() {
  const titleId = "demo-early-access-title";
  const baseId = useId();
  const nameId = `${baseId}-name`;
  const emailId = `${baseId}-email`;
  const interestId = `${baseId}-interest`;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("");

  const composeFromForm = () => {
    const lines = [
      "Message from the Cauris demo (early access interest)",
      "",
      `${demoEarlyAccessForm.nameLabel}: ${name.trim() || "—"}`,
      `${demoEarlyAccessForm.emailLabel}: ${email.trim() || "—"}`,
      "",
      `${demoEarlyAccessForm.interestLabel}:`,
      interest.trim() || "—",
    ];
    const href = buildBusinessMailto({
      subject: demoEarlyAccessForm.emailSubject,
      body: lines.join("\n"),
    });
    window.location.href = href;
  };

  return (
    <div className={demoUi.region} role="region" aria-labelledby={titleId}>
      <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-none lg:text-left">
        <p className={demoUi.phaseEyebrow}>{demoPhaseEyebrows.earlyAccess}</p>
        <h2
          id={titleId}
          className="mt-4 text-balance text-2xl font-semibold tracking-[-0.03em] text-zinc-50 sm:text-3xl md:text-[2.35rem] md:leading-[1.08]"
        >
          {demoEarlyAccessIntro.title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-pretty text-sm font-medium leading-relaxed text-zinc-400 sm:text-base lg:mx-0">
          {demoEarlyAccessIntro.supporting}
        </p>
        <p className="mx-auto mt-3 max-w-xl text-pretty text-sm leading-relaxed text-zinc-400 sm:text-base lg:mx-0">
          {demoEarlyAccessIntro.secondary}
        </p>
        <div className="mt-5 flex flex-col items-center gap-2 lg:items-start">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/16 bg-indigo-950/28 px-3 py-1.5">
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-cauris-dawn/85 shadow-[0_0_10px_rgba(244,176,66,0.28)]"
              aria-hidden
            />
            <span className="text-[11px] font-medium text-zinc-300">
              {demoEarlyAccessContinuity.label}
            </span>
          </div>
          <p className="max-w-xl text-[11px] leading-relaxed text-zinc-400 lg:text-left">
            {demoEarlyAccessContinuity.note}
          </p>
        </div>
      </div>

      <div className={`${demoUi.sectionYLoose} ${demoUi.gridSplit}`}>
        <div className="flex flex-col gap-8 sm:gap-10">
          <div>
            <p className={`text-center font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-400 lg:text-left sm:text-[11px]`}>
              Next steps
            </p>
            <ul
              className="mt-5 grid gap-4 sm:grid-cols-3 sm:gap-4"
              role="list"
              aria-label="Contact options"
            >
              {demoEarlyAccessCtas.map((cta, i) => {
                const href = buildBusinessMailto({ subject: cta.subject });
                const isPrimary = cta.emphasis === "primary";
                return (
                  <li key={cta.id} className="min-w-0">
                    <a
                      href={href}
                      className={`demo-early-cta group flex h-full min-h-[8.5rem] flex-col ${demoUi.roundedPanel} border p-5 text-left ${demoUi.panelInset} transition-[border-color,box-shadow,transform] duration-[var(--cauris-duration-surface)] ease-[cubic-bezier(0.22,1,0.36,1)] ${demoUi.focusRing} sm:min-h-[9rem] sm:p-6 ${
                        isPrimary
                          ? "border-cauris-gold/28 bg-gradient-to-b from-cauris-flame/[0.1] to-black/50 ring-1 ring-cauris-gold/[0.12] hover:border-cauris-flame/40 hover:shadow-[0_0_48px_rgba(244,176,66,0.08)]"
                          : "border-white/[0.1] bg-gradient-to-b from-white/[0.07] to-black/28 backdrop-blur-md hover:border-white/[0.16] hover:shadow-[0_0_40px_rgba(88,60,180,0.08)]"
                      }`}
                      style={{ animationDelay: `${90 + i * 65}ms` }}
                    >
                      <span
                        className={`text-sm font-semibold tracking-tight sm:text-base ${
                          isPrimary ? "text-cauris-dawn" : "text-zinc-100"
                        }`}
                      >
                        {cta.label}
                      </span>
                      <span className="mt-3 text-pretty text-xs leading-relaxed text-zinc-400 sm:text-sm">
                        {cta.description}
                      </span>
                      <span className="mt-auto pt-4 text-[11px] font-medium text-zinc-400 transition-colors duration-[var(--cauris-duration-hover)] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-zinc-400">
                        Email →
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
            <p className="mt-6 text-center text-sm leading-relaxed text-zinc-400 lg:text-left">
              Studio sites, RangeOS™, or something else —{" "}
              <Link
                href="/#scs-nova"
                className="font-medium text-zinc-400 underline decoration-white/[0.12] underline-offset-4 transition-colors duration-[var(--cauris-duration-hover)] ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-cauris-dawn hover:decoration-cauris-gold/35"
              >
                main site contact &amp; request form
              </Link>
              .
            </p>
          </div>

          <div className={`relative overflow-hidden ${demoUi.productMain} p-6 sm:p-8`}>
            <div
              className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-indigo-600/[0.06] blur-3xl"
              aria-hidden
            />
            <h3 className={`${demoUi.kickerTrack} text-zinc-400`}>{demoEarlyAccessForm.title}</h3>
            <p className="mt-3 max-w-xl text-pretty text-xs leading-relaxed text-zinc-400 sm:text-sm">
              {demoEarlyAccessForm.helper}
            </p>
            <form
              className="relative mt-6 flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                composeFromForm();
              }}
              noValidate
            >
              <div>
                <label htmlFor={nameId} className="text-xs font-medium text-zinc-400">
                  {demoEarlyAccessForm.nameLabel}
                </label>
                <input
                  id={nameId}
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder={demoEarlyAccessForm.namePlaceholder}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-white/[0.12] bg-black/58 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] focus:border-cauris-gold/38 focus:outline-none focus:ring-1 focus:ring-cauris-flame/40"
                />
              </div>
              <div>
                <label htmlFor={emailId} className="text-xs font-medium text-zinc-400">
                  {demoEarlyAccessForm.emailLabel}
                </label>
                <input
                  id={emailId}
                  name="email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  placeholder={demoEarlyAccessForm.emailPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-white/[0.12] bg-black/58 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] focus:border-cauris-gold/38 focus:outline-none focus:ring-1 focus:ring-cauris-flame/40"
                />
              </div>
              <div>
                <label htmlFor={interestId} className="text-xs font-medium text-zinc-400">
                  {demoEarlyAccessForm.interestLabel}
                </label>
                <textarea
                  id={interestId}
                  name="interest"
                  rows={3}
                  placeholder={demoEarlyAccessForm.interestPlaceholder}
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="mt-1.5 w-full resize-y rounded-xl border border-white/[0.12] bg-black/58 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] focus:border-cauris-gold/38 focus:outline-none focus:ring-1 focus:ring-cauris-flame/40"
                />
              </div>
              <button
                type="submit"
                className={`mt-2 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-gradient-to-b from-cauris-flame/90 to-cauris-ember/90 px-6 text-sm font-semibold text-black shadow-glow-gold cauris-transition-interactive hover:from-cauris-dawn hover:to-cauris-flame sm:w-auto sm:self-start ${demoUi.focusRing}`}
              >
                {demoEarlyAccessForm.submitLabel}
              </button>
            </form>
          </div>
        </div>

        <aside className={demoUi.stickyAside}>
          <div className={`relative overflow-hidden ${demoUi.productAside} p-6`}>
            <div
              className="pointer-events-none absolute right-0 top-1/2 h-32 w-32 translate-x-1/4 -translate-y-1/2 rounded-full bg-cauris-flame/[0.05] blur-3xl"
              aria-hidden
            />
            <p className={`relative ${demoUi.kickerTrack} text-zinc-400`}>{demoEarlyAccessSupport.title}</p>
            <p className="relative mt-4 text-sm leading-relaxed text-zinc-400">
              {demoEarlyAccessSupport.body}
            </p>
            <ul
              className="relative mt-5 flex flex-wrap gap-2"
              role="list"
              aria-label="Preview context"
            >
              {demoEarlyAccessSupport.tags.map((tag) => (
                <li key={tag}>
                  <span className="inline-flex rounded-full border border-white/[0.09] bg-white/[0.025] px-3 py-1 text-[11px] font-medium text-zinc-400">
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
