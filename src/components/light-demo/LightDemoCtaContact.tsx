import Link from "next/link";
import { LightDemoContainer } from "./LightDemoContainer";
import { LightDemoSection } from "./LightDemoSection";
import { LightDemoContactForm } from "./LightDemoContactForm";
import { buildBusinessMailto, SCS_NOVA_BUSINESS_EMAIL } from "@/data/siteContact";

/** Studio line — replace with your public number when ready. */
const BUSINESS_PHONE_DISPLAY = "(443) 555-0120";
const BUSINESS_PHONE_TEL = "+14435550120";

const btnPrimary =
  "inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-blue-600 px-8 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-sky-50 sm:w-auto sm:min-w-[12rem]";

const btnSecondary =
  "inline-flex min-h-12 w-full items-center justify-center rounded-lg border border-neutral-200 bg-white px-8 text-sm font-semibold text-neutral-800 shadow-sm transition-colors hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-sky-50 sm:w-auto sm:min-w-[12rem]";

export function LightDemoCtaContact() {
  const mailtoGeneral = buildBusinessMailto();

  return (
    <LightDemoSection
      aria-labelledby="ld-cta-heading"
      className="bg-gradient-to-b from-sky-50/95 to-slate-100/90"
    >
      <LightDemoContainer>
        <div id="cta" className="mx-auto max-w-2xl scroll-mt-24 text-center">
          <h2
            id="ld-cta-heading"
            className="text-3xl font-semibold tracking-[-0.02em] text-neutral-900 sm:text-4xl"
          >
            Ready to Build Your System?
          </h2>
          <p className="mt-6 text-pretty text-base leading-relaxed text-neutral-600 sm:text-lg">
            Tell us what you&apos;re working toward — we&apos;ll respond with a clear next step.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <Link href="#contact" className={btnPrimary}>
              Start My Project
            </Link>
            <a href={mailtoGeneral} className={btnSecondary}>
              Contact Us
            </a>
          </div>
        </div>

        <div
          id="contact"
          className="mx-auto mt-24 max-w-xl scroll-mt-24 border-t border-sky-200/60 pt-20 text-center sm:mt-28 sm:pt-24"
        >
          <h2
            id="ld-contact-heading"
            className="text-2xl font-semibold tracking-[-0.02em] text-neutral-900 sm:text-3xl"
          >
            Contact
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-neutral-600">
            Reach the studio directly — we read every message.
          </p>

          <div className="mt-10 space-y-4 text-base text-neutral-700">
            <p>
              <span className="font-medium text-neutral-900">Email</span>
              <br />
              <a
                href={mailtoGeneral}
                className="text-blue-700 underline decoration-blue-200 underline-offset-4 transition-colors hover:text-blue-900 hover:decoration-blue-400"
              >
                {SCS_NOVA_BUSINESS_EMAIL}
              </a>
            </p>
            <p>
              <span className="font-medium text-neutral-900">Phone</span>
              <br />
              <a
                href={`tel:${BUSINESS_PHONE_TEL}`}
                className="text-blue-700 underline decoration-blue-200 underline-offset-4 transition-colors hover:text-blue-900 hover:decoration-blue-400"
              >
                {BUSINESS_PHONE_DISPLAY}
              </a>
            </p>
          </div>

          <LightDemoContactForm />

          <p className="mx-auto mt-20 max-w-md text-center text-[11px] leading-relaxed text-neutral-500 sm:mt-24 sm:text-xs">
            This is one of multiple design styles we offer.
          </p>
        </div>
      </LightDemoContainer>
    </LightDemoSection>
  );
}
