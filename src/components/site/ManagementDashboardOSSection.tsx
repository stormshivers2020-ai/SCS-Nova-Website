import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionShell } from "@/components/section-shell";

const featureBlocks = [
  {
    title: "Manage Clients",
    body: "Keep every client in their own workspace so nothing gets mixed up.",
  },
  {
    title: "Store Files & Content",
    body: "Keep files, assets, and reusable materials organized in one place.",
  },
  {
    title: "Plan Workflows",
    body: "Turn recurring work into step-by-step systems so nothing gets missed.",
  },
  {
    title: "Track Communication",
    body: "See messages, follow-ups, and client activity more clearly.",
  },
  {
    title: "Today View",
    body: "Know what needs attention right now across tasks, alerts, and work in motion.",
  },
  {
    title: "Smart Guidance",
    body: "Get signals on what needs attention, what is behind, and what to do next.",
  },
] as const;

const industryTags = [
  "Content creators",
  "Sales professionals",
  "Restaurants",
  "Service businesses",
  "Agencies",
  "Talent / creators",
  "General operations",
] as const;

const steps = [
  {
    title: "Add your clients",
    body: "Each client gets their own workspace.",
  },
  {
    title: "Add your work",
    body: "Upload files, create templates, and organize what you use.",
  },
  {
    title: "Build workflows",
    body: "Turn work into repeatable systems so nothing gets missed.",
  },
  {
    title: "Use Today View",
    body: "See what matters right now across tasks, messages, alerts, and work.",
  },
] as const;

const pricingPreview = [
  {
    title: "Starter",
    price: "$29/month",
    body: "1 client • full system access • ideal for individuals",
  },
  {
    title: "Growth",
    price: "$79-$99/month",
    body: "Up to 5 clients • workflows • templates • alerts",
  },
  {
    title: "Scale",
    price: "$149-$299/month",
    body: "10+ clients • team support • advanced usage",
  },
] as const;

export function ManagementDashboardOSSection() {
  return (
    <SectionShell
      id="dashboard-os"
      aria-labelledby="dashboard-os-heading"
      className="relative scroll-mt-[5.5rem] overflow-hidden border-t border-white/[0.08] bg-gradient-to-b from-black/40 via-zinc-950/12 to-black/36 !py-28 md:!py-36 lg:!py-40"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_48%_at_50%_0%,rgba(232,148,58,0.09),transparent_58%)]"
        aria-hidden
      />

      <div className="relative">
        <ScrollReveal>
          <p className="cauris-kicker text-zinc-500">Management DashboardOS</p>
          <h2
            id="dashboard-os-heading"
            className="mt-6 max-w-4xl text-pretty text-3xl font-semibold tracking-[-0.025em] text-zinc-100 sm:mt-7 sm:text-4xl md:text-[2.95rem] md:leading-[1.05]"
          >
            Run all your clients. In one system.
          </h2>
          <p className="mt-7 max-w-3xl text-pretty text-lg font-medium leading-relaxed text-zinc-200 sm:text-xl sm:leading-relaxed">
            SCS Nova Management DashboardOS is a multi-client operating system built to help you manage
            work, clients, and daily tasks from one place.
          </p>
          <p className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-zinc-500 sm:text-lg sm:leading-relaxed">
            It is not just a dashboard. It is a system that helps you stay organized, know what needs
            to be done, and move faster without losing control.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {featureBlocks.map((item, i) => (
            <ScrollReveal
              key={item.title}
              delayMs={50 + i * 60}
              className="flex flex-col rounded-brand border border-white/[0.11] bg-gradient-to-b from-white/[0.08] to-white/[0.022] p-7 shadow-cauris-elevate-sm ring-1 ring-cauris-gold/[0.1] backdrop-blur-md transition-[border-color,box-shadow,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-cauris-gold/24 hover:shadow-[0_0_52px_rgba(244,176,66,0.08)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-8"
            >
              <h3 className="text-base font-semibold tracking-[-0.02em] text-zinc-50 sm:text-lg">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500 sm:text-[15px] sm:leading-relaxed">
                {item.body}
              </p>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-20 border-t border-white/[0.09] pt-16 sm:mt-24 sm:pt-20">
          <ScrollReveal delayMs={100}>
            <h3 className="text-2xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-3xl">
              Built for real work
            </h3>
            <p className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg sm:leading-relaxed">
              This system works across industries and is designed for people managing clients, tasks,
              communication, and daily operations.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2.5 sm:mt-9 sm:gap-3">
              {industryTags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-white/[0.12] bg-white/[0.03] px-4 py-2 text-xs font-medium tracking-[0.02em] text-zinc-300 ring-1 ring-white/[0.05] sm:text-sm"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>

        <div className="mt-20 border-t border-white/[0.09] pt-16 sm:mt-24 sm:pt-20">
          <ScrollReveal delayMs={120}>
            <p className="cauris-kicker text-zinc-500">How it works</p>
          </ScrollReveal>
          <div className="mt-10 grid gap-6 sm:mt-12 md:grid-cols-2 md:gap-7">
            {steps.map((step, i) => (
              <ScrollReveal
                key={step.title}
                delayMs={160 + i * 70}
                className="rounded-brand border border-white/[0.11] bg-gradient-to-b from-white/[0.07] to-white/[0.018] p-7 shadow-cauris-elevate-sm ring-1 ring-white/[0.05] backdrop-blur-md sm:p-8"
              >
                <p className="font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-cauris-flame/75 sm:text-[11px]">
                  Step {i + 1}
                </p>
                <h4 className="mt-4 text-lg font-semibold tracking-[-0.02em] text-zinc-50">{step.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500 sm:text-[15px] sm:leading-relaxed">
                  {step.body}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div className="mt-20 border-t border-white/[0.09] pt-16 sm:mt-24 sm:pt-20">
          <ScrollReveal delayMs={140}>
            <h3 className="text-2xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-3xl">
              Pricing Preview
            </h3>
          </ScrollReveal>
          <div className="mt-10 grid gap-6 sm:mt-12 md:grid-cols-3 md:gap-7">
            {pricingPreview.map((plan, i) => (
              <ScrollReveal
                key={plan.title}
                delayMs={180 + i * 70}
                className="rounded-brand border border-white/[0.11] bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-7 shadow-cauris-elevate-sm ring-1 ring-cauris-gold/[0.08] backdrop-blur-md sm:p-8"
              >
                <h4 className="text-lg font-semibold tracking-[-0.02em] text-zinc-50">{plan.title}</h4>
                <p className="mt-3 text-2xl font-semibold tracking-tight text-zinc-100">{plan.price}</p>
                <p className="mt-4 text-sm leading-relaxed text-zinc-500 sm:text-[15px] sm:leading-relaxed">
                  {plan.body}
                </p>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delayMs={360} className="mt-8">
            <p className="text-pretty text-sm font-medium leading-relaxed text-zinc-500 sm:text-base">
              Full service and product pricing available on the Services page.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delayMs={240} className="mt-16 sm:mt-20 md:mt-24">
          <div className="rounded-brand-lg border border-white/[0.11] bg-gradient-to-b from-white/[0.08] to-white/[0.022] p-8 shadow-cauris-elevate-sm ring-1 ring-cauris-gold/[0.11] backdrop-blur-md sm:p-10 md:p-12">
            <div className="flex flex-col items-center text-center">
              <div className="flex w-full max-w-md flex-col gap-3.5 sm:flex-row sm:justify-center sm:gap-4">
                <Link
                  href="/services"
                  className="cauris-btn-primary-card"
                >
                  View Services
                </Link>
                <Link href="/dashboardos" className="cauris-btn-tertiary-card">
                  Explore DashboardOS
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </SectionShell>
  );
}
