import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionShell } from "@/components/section-shell";
import { buildBusinessMailto, MAILTO_SUBJECTS } from "@/data/siteContact";

const features = [
  {
    title: "Inventory System",
    description: "Photo-based gun library with structured updates and organized display.",
    icon: "inventory",
  },
  {
    title: "Booking Flow",
    description: "Lane booking and inquiry system designed for real customer flow.",
    icon: "booking",
  },
  {
    title: "Certification Funnel",
    description: "Integrated concealed carry / HQL pathways to guide new customers.",
    icon: "cert",
  },
  {
    title: "Custom Branding",
    description: "Logo, color system, and visual identity tailored to your range.",
    icon: "brand",
  },
  {
    title: "Fast Deployment",
    description: "Modern hosting with fast load times and reliable performance.",
    icon: "deploy",
  },
] as const;

function FeatureIcon({ name }: { name: (typeof features)[number]["icon"] }) {
  const common = "h-4 w-4 stroke-cauris-flame/70";
  switch (name) {
    case "inventory":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
          <rect x="4" y="5" width="7" height="6" rx="1" strokeWidth="1.5" />
          <rect x="13" y="5" width="7" height="6" rx="1" strokeWidth="1.5" />
          <rect x="4" y="13" width="7" height="6" rx="1" strokeWidth="1.5" />
          <rect x="13" y="13" width="7" height="6" rx="1" strokeWidth="1.5" />
        </svg>
      );
    case "booking":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
          <rect x="4" y="5" width="16" height="15" rx="2" strokeWidth="1.5" />
          <path d="M4 10h16" strokeWidth="1.5" />
          <path d="M9 3v4M15 3v4" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "cert":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
          <path
            d="M7 4h10v12l-5 3-5-3V4z"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path d="M9 9l2 2 4-4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "brand":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
          <circle cx="9" cy="9" r="3.5" strokeWidth="1.5" />
          <circle cx="15" cy="15" r="3.5" strokeWidth="1.5" />
          <path d="M6 18l12-12" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "deploy":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
          <path
            d="M13 3L5 14h6l-1 7 10-13h-6l-1-5z"
            strokeWidth="1.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}

const pricingPlans = [
  {
    title: "Managed System",
    price: "$1,400 + $300/mo",
    featured: true,
    bullets: [
      "Full build + setup",
      "Hosting + maintenance",
      "Inventory updates (2x/month)",
      "Ongoing support",
    ],
  },
  {
    title: "Full Ownership",
    price: "$3,250",
    featured: false,
    bullets: [
      "Full system delivery",
      "GitHub + Vercel setup",
      "Training included",
      "Complete ownership",
    ],
  },
] as const;

function RangePricingCard({
  plan,
  delayMs,
}: {
  plan: (typeof pricingPlans)[number];
  delayMs: number;
}) {
  const shell =
    "flex h-full flex-col rounded-brand border bg-gradient-to-b p-7 shadow-cauris-elevate-sm ring-1 ring-white/[0.04] backdrop-blur-md transition-[border-color,box-shadow,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:p-8";
  const idle =
    "border-white/[0.11] from-white/[0.065] to-white/[0.02] ring-1 ring-white/[0.05] hover:-translate-y-0.5 hover:border-white/[0.16] hover:ring-white/[0.07]";
  const spotlight =
    "border-cauris-gold/25 from-white/[0.09] to-white/[0.028] ring-1 ring-cauris-gold/[0.13] shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_28px_56px_rgba(0,0,0,0.3)] hover:-translate-y-0.5";

  return (
    <ScrollReveal
      delayMs={delayMs}
      className={`relative overflow-hidden ${shell} ${plan.featured ? spotlight : idle}`}
    >
      {plan.featured ? (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cauris-gold/45 to-transparent"
          aria-hidden
        />
      ) : null}
      <h3 className="text-lg font-semibold tracking-[-0.02em] text-zinc-50 sm:text-xl">{plan.title}</h3>
      <p className="mt-5 text-2xl font-semibold tracking-tight text-zinc-50 sm:text-[1.65rem]">
        {plan.price}
      </p>
      <ul className="mt-6 flex flex-col gap-2.5 border-t border-white/[0.08] pt-6">
        {plan.bullets.map((b) => (
          <li key={b} className="flex gap-2.5 text-sm leading-snug text-zinc-200">
            <span
              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cauris-flame/55"
              aria-hidden
            />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </ScrollReveal>
  );
}

export function RangeOSSection() {
  const mailtoRange = buildBusinessMailto({ subject: MAILTO_SUBJECTS.rangeOS });

  return (
    <SectionShell
      id="range-os"
      aria-labelledby="range-os-heading"
      className="relative scroll-mt-[5.5rem] overflow-hidden border-t border-white/[0.08] bg-gradient-to-b from-black/38 via-zinc-950/12 to-black/38 !py-28 md:!py-36 lg:!py-40"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_72%_52%_at_50%_0%,rgba(232,148,58,0.1),transparent_56%)]"
        aria-hidden
      />

      <div className="relative">
        <ScrollReveal>
          <p className="cauris-kicker text-zinc-500">
            Product system · built &amp; offered by SCS Nova
          </p>
          <h2
            id="range-os-heading"
            className="mt-6 max-w-4xl text-pretty text-3xl font-semibold tracking-[-0.025em] text-zinc-100 sm:mt-7 sm:text-4xl md:text-[2.95rem] md:leading-[1.05]"
          >
            RangeOS<span className="text-gradient-gold">™</span>
          </h2>
          <p className="mt-7 max-w-3xl text-pretty text-lg font-medium leading-relaxed text-zinc-200 sm:mt-8 sm:text-xl sm:leading-relaxed">
            The range-facing product: website, inventory, booking, and programs in one system — for gun
            ranges.
          </p>
          <p className="mt-7 max-w-2xl text-pretty text-base font-medium leading-relaxed text-zinc-500 sm:mt-8 sm:text-lg sm:leading-relaxed">
            Built to help ranges attract customers, showcase inventory, and increase bookings — scoped
            and shipped from our Maryland studio.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {features.map((f, i) => (
            <ScrollReveal
              key={f.title}
              delayMs={60 + i * 70}
              className="flex flex-col rounded-brand border border-white/[0.11] bg-gradient-to-b from-white/[0.085] to-white/[0.024] p-7 shadow-cauris-elevate-sm ring-1 ring-cauris-gold/[0.11] backdrop-blur-md transition-[border-color,box-shadow,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-cauris-gold/24 hover:shadow-[0_0_56px_rgba(244,176,66,0.09)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-8"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.1] bg-white/[0.04] ring-1 ring-cauris-gold/[0.08] backdrop-blur-sm">
                <FeatureIcon name={f.icon} />
              </div>
              <h3 className="mt-6 text-base font-semibold tracking-[-0.02em] text-zinc-50 sm:text-lg">
                {f.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500 sm:text-[15px] sm:leading-relaxed">
                {f.description}
              </p>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delayMs={120} className="mx-auto mt-20 max-w-3xl text-center sm:mt-24 md:mt-28">
          <p className="text-pretty text-lg font-medium leading-relaxed text-zinc-200 sm:text-xl sm:leading-relaxed">
            More than a brochure site: inventory, booking, and programs in one customer-facing system —
            the walkthrough on this site is sample UI, not a live range connection.
          </p>
        </ScrollReveal>

        <div className="mt-20 border-t border-white/[0.08] pt-20 sm:mt-24 sm:pt-24 md:mt-28 md:pt-28">
          <ScrollReveal delayMs={40}>
            <p className="cauris-kicker">
              Pricing
            </p>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 sm:mt-14 md:grid-cols-2 md:gap-7">
            {pricingPlans.map((plan, i) => (
              <RangePricingCard key={plan.title} plan={plan} delayMs={80 + i * 80} />
            ))}
          </div>
        </div>

        <ScrollReveal delayMs={200} className="mt-16 sm:mt-20 md:mt-24">
          <div className="rounded-brand-lg border border-white/[0.11] bg-gradient-to-b from-white/[0.08] to-white/[0.022] p-8 shadow-cauris-elevate-sm ring-1 ring-cauris-gold/[0.11] backdrop-blur-md sm:p-10 md:p-12">
            <div className="flex flex-col items-center text-center">
              <div className="flex w-full max-w-md flex-col gap-3.5 sm:flex-row sm:justify-center sm:gap-4">
                <Link
                  href="/rangeos-demo"
                  aria-label="Open the guided RangeOS product demo"
                  className="cauris-btn-primary-card"
                >
                  Product demo
                </Link>
                <a href={mailtoRange} className="cauris-btn-tertiary-card">
                  Email range inquiry
                </a>
              </div>
              <p className="mt-8 max-w-lg text-pretty text-sm font-medium leading-relaxed text-zinc-500 sm:text-base">
                The demo is simulated and browser-only. Email opens a real thread with a preset subject
                so your range context reaches the studio without playing inbox roulette.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </SectionShell>
  );
}
