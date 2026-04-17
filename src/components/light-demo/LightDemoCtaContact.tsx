import Link from "next/link";
import { LightDemoContainer } from "./LightDemoContainer";
import { LightDemoSection } from "./LightDemoSection";
import { LightDemoContactForm } from "./LightDemoContactForm";
import {
  buildLightDemoMailto,
  LIGHT_DEMO_BUILDER_EMAIL,
  LIGHT_DEMO_BUILDER_PHONE_DISPLAY,
  LIGHT_DEMO_BUILDER_PHONE_TEL,
  LIGHT_DEMO_CONCEPT_NOTE,
} from "@/data/lightDemoConcept";
import { ldBtnPrimary, ldBtnSecondary, ldSectionDeck, ldSectionLead, ldSectionKicker, ldSectionTitle } from "./lightDemoUi";

export function LightDemoCtaContact() {
  const mailtoGeneral = buildLightDemoMailto();
  const phoneHref = LIGHT_DEMO_BUILDER_PHONE_TEL.trim();

  return (
    <LightDemoSection
      aria-labelledby="ld-cta-heading"
      className="border-t border-sky-100/80 bg-gradient-to-b from-sky-50/95 via-sky-50/40 to-slate-100/90"
    >
      <LightDemoContainer>
        <div className="mx-auto max-w-5xl">
          <div
            id="cta"
            className="scroll-mt-24 rounded-3xl border border-white/80 bg-white/70 p-8 shadow-[0_24px_60px_-28px_rgba(15,23,42,0.14)] backdrop-blur-sm sm:p-10 md:p-12"
          >
            <div className="mx-auto max-w-2xl text-center">
              <p className={ldSectionKicker}>Next step</p>
              <h2 id="ld-cta-heading" className={`${ldSectionTitle} mt-3`}>
                Ready to talk about your site?
              </h2>
              <p className={ldSectionLead}>
                This page is an SCS Nova redesign concept inspired by the content flow of a strong
                coworking site—not a live venue. To commission a similar build or discuss your brand,
                reach the studio directly.
              </p>
              <p className={ldSectionDeck}>
                Inspired by familiar section patterns (hero → why → community → workspace → membership →
                benefits → location → contact)—executed with modern polish.
              </p>
              <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:mt-12 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
                <Link href="#contact" className={ldBtnPrimary}>
                  Contact SCS Nova
                </Link>
                <a href={mailtoGeneral} className={ldBtnSecondary}>
                  Email the studio
                </a>
              </div>
            </div>

            <div
              id="contact"
              className="mt-14 scroll-mt-24 border-t border-neutral-200/80 pt-12 sm:mt-16 sm:pt-14"
            >
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-14 lg:items-start">
                <div className="text-center lg:text-left">
                  <p className={ldSectionKicker}>SCS Nova</p>
                  <h2 id="ld-contact-heading" className={`${ldSectionTitle} mt-3 text-[1.5rem] sm:text-[1.875rem]`}>
                    Contact the builder
                  </h2>
                  <p className="mt-4 text-pretty text-base leading-relaxed text-neutral-700 sm:text-lg">
                    Project inquiries for this demo and similar work go to SCS Nova. The sample venue
                    story above is illustrative—real operator contact details are never used here.
                  </p>

                  <div className="mt-8 space-y-5 text-left text-base text-neutral-700">
                    <div className="rounded-2xl border border-neutral-200/80 bg-neutral-50/60 px-5 py-4 sm:px-6">
                      <p className="text-xs font-semibold uppercase tracking-wider text-neutral-600">Email</p>
                      <a
                        href={mailtoGeneral}
                        className="mt-1 inline-block text-base font-medium text-blue-700 underline decoration-blue-200 underline-offset-4 transition-colors hover:text-blue-900 hover:decoration-blue-400"
                      >
                        {LIGHT_DEMO_BUILDER_EMAIL}
                      </a>
                    </div>
                    <div className="rounded-2xl border border-neutral-200/80 bg-neutral-50/60 px-5 py-4 sm:px-6">
                      <p className="text-xs font-semibold uppercase tracking-wider text-neutral-600">Phone</p>
                      {phoneHref ? (
                        <a
                          href={`tel:${phoneHref}`}
                          className="mt-1 inline-block text-base font-medium text-blue-700 underline decoration-blue-200 underline-offset-4 transition-colors hover:text-blue-900 hover:decoration-blue-400"
                        >
                          {LIGHT_DEMO_BUILDER_PHONE_DISPLAY}
                        </a>
                      ) : (
                        <p className="mt-1 text-base font-medium text-neutral-800">{LIGHT_DEMO_BUILDER_PHONE_DISPLAY}</p>
                      )}
                    </div>
                  </div>

                  <p className="mx-auto mt-8 max-w-lg text-pretty text-left text-xs leading-relaxed text-neutral-600 sm:text-sm lg:mx-0">
                    {LIGHT_DEMO_CONCEPT_NOTE}
                  </p>
                </div>

                <div className="min-w-0">
                  <p className="mb-2 text-center font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-600 sm:text-left sm:text-[11px]">
                    Quick message
                  </p>
                  <LightDemoContactForm />
                </div>
              </div>
            </div>
          </div>

          <p className="mx-auto mt-12 max-w-md text-center text-[11px] leading-relaxed text-neutral-600 sm:mt-14 sm:text-xs">
            This is one of multiple design styles we offer.
          </p>
        </div>
      </LightDemoContainer>
    </LightDemoSection>
  );
}
