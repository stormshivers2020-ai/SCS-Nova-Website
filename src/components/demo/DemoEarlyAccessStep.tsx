"use client";

import { useId, useState } from "react";
import { demoUi } from "@/components/demo/demoUi";
import {
  demoEarlyAccessContinuity,
  demoEarlyAccessCtas,
  demoEarlyAccessForm,
  demoEarlyAccessIntro,
  demoEarlyAccessSupport,
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
        <p className={demoUi.kicker}>Guided preview</p>
        <h2
          id={titleId}
          className="mt-2 text-balance text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl md:text-4xl"
        >
          {demoEarlyAccessIntro.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-zinc-500 sm:text-base lg:mx-0">
          {demoEarlyAccessIntro.supporting}
        </p>
        <p className="mx-auto mt-2 max-w-xl text-pretty text-sm leading-relaxed text-zinc-600 sm:text-base lg:mx-0">
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
          <p className="max-w-xl text-[11px] leading-relaxed text-zinc-600 lg:text-left">
            {demoEarlyAccessContinuity.note}
          </p>
        </div>
      </div>

      <div className={`${demoUi.sectionYLoose} ${demoUi.gridSplit}`}>
        <div className="flex flex-col gap-8 sm:gap-10">
          <div>
            <p className={`text-center lg:text-left ${demoUi.kicker}`}>Next steps</p>
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
                      className={`demo-early-cta group flex h-full min-h-[8.5rem] flex-col ${demoUi.roundedPanel} border p-5 text-left ${demoUi.panelInset} transition duration-500 ${demoUi.focusRing} sm:min-h-[9rem] sm:p-6 ${
                        isPrimary
                          ? "border-cauris-gold/28 bg-gradient-to-b from-cauris-flame/[0.1] to-black/50 ring-1 ring-cauris-gold/[0.12] hover:border-cauris-flame/40 hover:shadow-[0_0_48px_rgba(244,176,66,0.08)]"
                          : "border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-black/45 hover:border-white/[0.14] hover:shadow-[0_0_40px_rgba(88,60,180,0.07)]"
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
                      <span className="mt-3 text-pretty text-xs leading-relaxed text-zinc-500 sm:text-sm">
                        {cta.description}
                      </span>
                      <span className="mt-auto pt-4 text-[11px] font-medium text-zinc-600 transition group-hover:text-zinc-400">
                        Email →
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div
            className={`relative overflow-hidden ${demoUi.roundedPanel} border ${demoUi.borderHairline} bg-gradient-to-b from-white/[0.03] to-black/50 p-6 ${demoUi.panelInset} sm:p-8`}
          >
            <div
              className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-indigo-600/[0.06] blur-3xl"
              aria-hidden
            />
            <h3 className={`${demoUi.kickerTrack} text-zinc-500`}>{demoEarlyAccessForm.title}</h3>
            <p className="mt-3 max-w-xl text-pretty text-xs leading-relaxed text-zinc-600 sm:text-sm">
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
                  className="mt-1.5 w-full rounded-xl border border-white/[0.1] bg-black/50 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-cauris-gold/35 focus:outline-none focus:ring-1 focus:ring-cauris-flame/40"
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
                  className="mt-1.5 w-full rounded-xl border border-white/[0.1] bg-black/50 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-cauris-gold/35 focus:outline-none focus:ring-1 focus:ring-cauris-flame/40"
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
                  className="mt-1.5 w-full resize-y rounded-xl border border-white/[0.1] bg-black/50 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-cauris-gold/35 focus:outline-none focus:ring-1 focus:ring-cauris-flame/40"
                />
              </div>
              <button
                type="submit"
                className={`mt-2 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-gradient-to-b from-cauris-flame/90 to-cauris-ember/90 px-6 text-sm font-semibold text-black shadow-glow-gold transition hover:from-cauris-dawn hover:to-cauris-flame sm:w-auto sm:self-start ${demoUi.focusRing}`}
              >
                {demoEarlyAccessForm.submitLabel}
              </button>
            </form>
          </div>
        </div>

        <aside className={demoUi.stickyAside}>
          <div
            className={`relative overflow-hidden ${demoUi.roundedPanel} border ${demoUi.borderHairline} bg-gradient-to-b from-white/[0.025] to-black/45 p-6 ${demoUi.panelInset}`}
          >
            <div
              className="pointer-events-none absolute right-0 top-1/2 h-32 w-32 translate-x-1/4 -translate-y-1/2 rounded-full bg-cauris-flame/[0.05] blur-3xl"
              aria-hidden
            />
            <p className={`relative ${demoUi.kickerTrack} text-zinc-500`}>{demoEarlyAccessSupport.title}</p>
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
