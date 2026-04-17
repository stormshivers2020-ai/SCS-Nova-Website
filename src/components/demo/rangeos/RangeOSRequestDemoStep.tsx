import Link from "next/link";
import { demoUi } from "@/components/demo/demoUi";
import { rangeOSPhaseEyebrows } from "@/data/rangeOSDemoContent";
import {
  rangeOSRequestDemoCtas,
  rangeOSRequestDemoIntro,
  rangeOSRequestDemoSubjects,
  rangeOSRequestDemoSupportLine,
} from "@/data/rangeOSDemoRequest";
import { buildBusinessMailto, SCS_NOVA_BUSINESS_EMAIL } from "@/data/siteContact";

function mailtoForCta(subjectKey: (typeof rangeOSRequestDemoCtas)[number]["subjectKey"]) {
  if (subjectKey === "projectInquiry") {
    return buildBusinessMailto({ subject: rangeOSRequestDemoSubjects.projectInquiry });
  }
  if (subjectKey === "demoRequest") {
    return buildBusinessMailto({ subject: rangeOSRequestDemoSubjects.demoRequest });
  }
  return buildBusinessMailto();
}

const RANGEOS_TM = "RangeOS™";

function RequestDemoTitle({ text }: { text: string }) {
  const i = text.indexOf(RANGEOS_TM);
  if (i < 0) {
    return <>{text}</>;
  }
  return (
    <>
      {text.slice(0, i)}
      RangeOS<span className="text-gradient-gold">™</span>
      {text.slice(i + RANGEOS_TM.length)}
    </>
  );
}

export function RangeOSRequestDemoStep() {
  const intro = rangeOSRequestDemoIntro;
  const headingId = "rangeos-request-demo-title";

  const primaryBtn =
    "inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-cauris-gold/28 bg-cauris-flame/[0.1] px-6 text-sm font-semibold tracking-tight text-cauris-dawn shadow-[0_0_40px_rgba(244,176,66,0.08)] transition-[border-color,background-color,box-shadow,color,transform] duration-300 ease-out motion-reduce:transition-none hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 hover:border-cauris-flame/45 hover:bg-cauris-flame/[0.14] hover:text-zinc-50 hover:shadow-[0_0_52px_rgba(244,176,66,0.12)] sm:text-base";
  const ghostBtn =
    "inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-white/[0.12] bg-white/[0.03] px-6 text-sm font-semibold tracking-tight text-zinc-200 transition-[border-color,background-color,color,transform] duration-300 ease-out motion-reduce:transition-none hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 hover:border-cauris-gold/25 hover:bg-white/[0.05] hover:text-zinc-50 sm:text-base";

  return (
    <div className={demoUi.region} role="region" aria-labelledby={headingId}>
      <div className="mx-auto max-w-xl">
        <div className="relative overflow-hidden rounded-brand-lg border border-white/[0.13] bg-gradient-to-b from-white/[0.095] to-white/[0.025] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_32px_72px_rgba(0,0,0,0.32)] ring-1 ring-cauris-gold/[0.14] backdrop-blur-md sm:p-10 md:p-12">
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-cauris-flame/[0.07] blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cauris-gold/45 to-transparent"
            aria-hidden
          />

          <p className={`text-center ${demoUi.phaseEyebrow}`}>{rangeOSPhaseEyebrows.requestDemo}</p>
          <h2
            id={headingId}
            className="mt-5 text-balance text-center text-2xl font-semibold tracking-[-0.03em] text-zinc-50 sm:text-3xl md:text-[1.85rem] md:leading-[1.12]"
          >
            <RequestDemoTitle text={intro.title} />
          </h2>
          <p className="mx-auto mt-6 max-w-md text-pretty text-center text-sm font-medium leading-relaxed text-zinc-400 sm:text-base">
            {intro.lead}
          </p>

          <div className="mt-10 flex flex-col gap-3">
            {rangeOSRequestDemoCtas.map((cta) => {
              const href = mailtoForCta(cta.subjectKey);
              const isPrimary = cta.id === "get-started" || cta.id === "request-demo";
              return (
                <a
                  key={cta.id}
                  href={href}
                  className={`${isPrimary ? primaryBtn : ghostBtn} ${demoUi.focusRing}`}
                >
                  {cta.label}
                </a>
              );
            })}
          </div>

          <a
            href={buildBusinessMailto()}
            className="mt-8 block text-center font-mono text-xs tracking-wide text-zinc-400 underline decoration-cauris-gold/25 underline-offset-4 transition-colors hover:text-cauris-dawn hover:decoration-cauris-flame/50 sm:text-sm"
          >
            {SCS_NOVA_BUSINESS_EMAIL}
          </a>

          <p className="mt-8 text-center text-sm font-medium leading-relaxed text-zinc-400 sm:text-[15px]">
            {rangeOSRequestDemoSupportLine}
          </p>
          <p className="mt-6 text-center text-sm text-zinc-400">
            <Link
              href="/#scs-nova"
              className="font-medium text-zinc-400 underline decoration-white/[0.12] underline-offset-4 transition-colors hover:text-cauris-dawn hover:decoration-cauris-gold/35"
            >
              Studio services &amp; other inquiries — SCS Nova contact
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
