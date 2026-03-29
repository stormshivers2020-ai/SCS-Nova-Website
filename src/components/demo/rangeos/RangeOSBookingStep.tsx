"use client";

import { useMemo, useState } from "react";
import { demoUi } from "@/components/demo/demoUi";
import { rangeOSDemoUi } from "@/components/demo/rangeOSDemoUi";
import {
  rangeOSBookingCtaLabels,
  rangeOSBookingFlowPanel,
  rangeOSBookingIntro,
  rangeOSDemoBookingDates,
  rangeOSDemoBookingLanes,
  rangeOSDemoBookingOptions,
  rangeOSDemoBookingTimes,
  rangeOSBookingScheduleNote,
  type RangeOSDemoBookingOption,
} from "@/data/rangeOSDemoBooking";

function FlowAside() {
  const p = rangeOSBookingFlowPanel;
  return (
    <aside className={rangeOSDemoUi.supportAsideSticky}>
      <div className={rangeOSDemoUi.supportAsidePanel}>
        <div className={rangeOSDemoUi.accentRule} aria-hidden />
        <h3 className={rangeOSDemoUi.asideTitle}>{p.title}</h3>
        <p className={rangeOSDemoUi.asideBody}>
          {p.body}
        </p>
      </div>
    </aside>
  );
}

function BookingOptionCard({
  option,
  selected,
  onSelect,
}: {
  option: RangeOSDemoBookingOption;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full rounded-2xl border p-5 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-[border-color,box-shadow,transform,background-color] duration-300 ease-out motion-reduce:transition-none sm:p-6 ${
        selected
          ? "border-cauris-gold/35 bg-cauris-flame/[0.07] ring-1 ring-cauris-gold/[0.15] shadow-[0_0_36px_rgba(244,176,66,0.08)]"
          : `border-white/[0.08] bg-gradient-to-b from-white/[0.035] to-white/[0.01] ring-1 ring-white/[0.04] motion-reduce:hover:translate-y-0 hover:-translate-y-0.5 hover:border-cauris-gold/22 hover:shadow-[0_0_28px_rgba(244,176,66,0.05)]`
      } ${demoUi.focusRing}`}
    >
      <span className="inline-flex rounded-full border border-white/[0.1] bg-black/30 px-2.5 py-0.5 font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-cauris-dawn/85 sm:text-[10px]">
        {option.tag}
      </span>
      <h3 className="mt-3 text-base font-semibold tracking-tight text-zinc-50 sm:text-lg">
        {option.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-500">{option.description}</p>
    </button>
  );
}

export function RangeOSBookingStep() {
  const intro = rangeOSBookingIntro;
  const headingId = "rangeos-booking-title";

  const [selectedId, setSelectedId] = useState<string | null>(rangeOSDemoBookingOptions[0]?.id ?? null);
  const [dateIdx, setDateIdx] = useState<number | null>(0);
  const [timeIdx, setTimeIdx] = useState<number | null>(1);
  const [laneIdx, setLaneIdx] = useState<number | null>(0);
  const [inquirySent, setInquirySent] = useState(false);

  const selected = useMemo(
    () => rangeOSDemoBookingOptions.find((o) => o.id === selectedId) ?? null,
    [selectedId],
  );

  const showLanes = selected?.showLanePicker ?? false;

  function resetFlow() {
    setInquirySent(false);
    setDateIdx(0);
    setTimeIdx(1);
    setLaneIdx(0);
  }

  function handleSelectOption(id: string) {
    setSelectedId(id);
    setInquirySent(false);
  }

  return (
    <div className={demoUi.region} role="region" aria-labelledby={headingId}>
      <header className={demoUi.introMax}>
        <h2 id={headingId} className={demoUi.stepTitle}>
          {intro.title}
        </h2>
        <p className={demoUi.lead}>{intro.lead}</p>
      </header>

      <div className={`${demoUi.sectionY} ${demoUi.gridSplit}`}>
        <div className="space-y-10">
          <section aria-labelledby="rangeos-booking-paths-label">
            <p id="rangeos-booking-paths-label" className={demoUi.kicker}>
              Booking paths
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {rangeOSDemoBookingOptions.map((opt) => (
                <BookingOptionCard
                  key={opt.id}
                  option={opt}
                  selected={opt.id === selectedId}
                  onSelect={() => handleSelectOption(opt.id)}
                />
              ))}
            </div>
          </section>

          <section
            className={rangeOSDemoUi.darkFeaturePanel}
            aria-labelledby="rangeos-schedule-label"
          >
            <div className="flex flex-wrap items-end justify-between gap-4 border-b border-white/[0.06] pb-5">
              <div>
                <p id="rangeos-schedule-label" className={demoUi.kicker}>
                  Schedule
                </p>
                <p className="mt-2 text-sm font-medium text-zinc-400">
                  {selected
                    ? `Preferred window for · ${selected.title}`
                    : "Select a booking path to continue"}
                </p>
              </div>
              <span className="max-w-full shrink-0 text-right font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600 sm:text-left">
                {rangeOSBookingScheduleNote}
              </span>
            </div>

            <div className="mt-6 space-y-8">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                  Date
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {rangeOSDemoBookingDates.map((d, i) => (
                    <button
                      key={d}
                      type="button"
                      disabled={inquirySent}
                      onClick={() => {
                        setDateIdx(i);
                        setInquirySent(false);
                      }}
                      className={`${rangeOSDemoUi.bookingChipBase} enabled:hover:border-cauris-gold/35 enabled:hover:text-zinc-50 disabled:cursor-not-allowed disabled:opacity-45 ${
                        dateIdx === i
                          ? "border-cauris-gold/40 bg-cauris-flame/[0.1] text-cauris-dawn"
                          : "border-white/[0.1] bg-white/[0.03] text-zinc-400"
                      } ${demoUi.focusRing}`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                  Time
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {rangeOSDemoBookingTimes.map((t, i) => (
                    <button
                      key={t}
                      type="button"
                      disabled={inquirySent}
                      onClick={() => {
                        setTimeIdx(i);
                        setInquirySent(false);
                      }}
                      className={`${rangeOSDemoUi.bookingChipBase} enabled:hover:border-cauris-gold/35 enabled:hover:text-zinc-50 disabled:cursor-not-allowed disabled:opacity-45 ${
                        timeIdx === i
                          ? "border-cauris-gold/40 bg-cauris-flame/[0.1] text-cauris-dawn"
                          : "border-white/[0.1] bg-white/[0.03] text-zinc-400"
                      } ${demoUi.focusRing}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {showLanes ? (
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                    Lane preference
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {rangeOSDemoBookingLanes.map((lane, i) => (
                      <button
                        key={lane}
                        type="button"
                        disabled={inquirySent}
                        onClick={() => {
                          setLaneIdx(i);
                          setInquirySent(false);
                        }}
                        className={`${rangeOSDemoUi.bookingChipBase} enabled:hover:border-cauris-gold/35 enabled:hover:text-zinc-50 disabled:cursor-not-allowed disabled:opacity-45 ${
                          laneIdx === i
                            ? "border-cauris-gold/40 bg-cauris-flame/[0.1] text-cauris-dawn"
                            : "border-white/[0.1] bg-white/[0.03] text-zinc-400"
                        } ${demoUi.focusRing}`}
                      >
                        {lane}
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            <div className="mt-10 flex flex-col gap-4 border-t border-white/[0.06] pt-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <button
                  type="button"
                  disabled={inquirySent || !selected}
                  onClick={() => setInquirySent(true)}
                  className={`inline-flex min-h-11 items-center justify-center rounded-full bg-gradient-to-b from-cauris-flame/95 to-cauris-ember/95 px-8 text-sm font-semibold text-black shadow-glow-gold transition duration-200 motion-reduce:transition-none enabled:hover:from-cauris-dawn enabled:hover:to-cauris-flame disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none ${demoUi.focusRing}`}
                >
                  {inquirySent ? rangeOSBookingCtaLabels.primarySent : rangeOSBookingCtaLabels.primaryIdle}
                </button>
                <button
                  type="button"
                  onClick={resetFlow}
                  className={`inline-flex min-h-11 items-center justify-center rounded-full border border-white/[0.12] px-6 text-sm font-medium text-zinc-400 transition duration-200 motion-reduce:transition-none hover:border-cauris-gold/25 hover:text-zinc-200 ${demoUi.focusRing}`}
                >
                  {rangeOSBookingCtaLabels.secondary}
                </button>
              </div>
              {inquirySent ? (
                <p
                  className="text-sm font-medium text-cauris-dawn/90 sm:text-right"
                  role="status"
                >
                  In production this routes to your range’s inbox or POS handoff.
                </p>
              ) : (
                <p className="text-sm text-zinc-600 sm:text-right">No payment or live hold — preview only.</p>
              )}
            </div>
          </section>
        </div>

        <FlowAside />
      </div>
    </div>
  );
}
