import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionShell } from "@/components/section-shell";

const featureBlocks = [
  {
    title: "Employee time and payroll",
    body: "Clock in and clock out with hours tied to clients, locations, and billable vs non-billable work.",
  },
  {
    title: "Client and location visibility",
    body: "Track delivery by account and by store or site so billing and reviews stay aligned with reality.",
  },
  {
    title: "Tool-based work",
    body: "Record work performed in MarginEdge, Restaurant365, QuickBooks, and other systems your team already runs.",
  },
  {
    title: "Work types and billing",
    body: "Structure PMIX mapping, invoice review, bookkeeping, and reporting so invoices match what was delivered.",
  },
  {
    title: "Workload and performance",
    body: "See department load, utilization, and delivery patterns without social metrics or content calendars.",
  },
  {
    title: "Today View",
    body: "One place for managers to see what the team is on, what is billable, and what must move for payroll.",
  },
] as const;

const industryTags = [
  "Consulting firms",
  "Multi-client operators",
  "Accounting and advisory",
  "Restaurant and hospitality groups",
  "Finance and operations",
  "Professional services",
  "Multi-site teams",
] as const;

const howItWorksColumns = [
  {
    title: "Employees",
    bullets: [
      "Clock in and out",
      "Select client, location, tool, and work type",
      "Log time against billable or internal work",
    ] as const,
  },
  {
    title: "Managers",
    bullets: [
      "See work and hours across the team",
      "Track billable delivery by client and location",
      "Support invoices, payroll, and performance reviews",
    ] as const,
  },
] as const;

const pricingPreview = [
  {
    title: "Starter",
    price: "$29/month",
    body: "Smaller consulting teams centralizing time, clients, and billing signals.",
  },
  {
    title: "Growth",
    price: "$79-$99/month",
    body: "Growing firms coordinating more accounts, locations, and concurrent client work.",
  },
  {
    title: "Scale",
    price: "$149-$299/month",
    body: "Larger practices that need deeper workload, payroll, and billing visibility.",
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
          <p className="cauris-kicker text-zinc-500">DashboardOS</p>
          <h2
            id="dashboard-os-heading"
            className="mt-6 max-w-4xl text-pretty text-3xl font-semibold tracking-[-0.025em] text-zinc-100 sm:mt-7 sm:text-4xl md:text-[2.95rem] md:leading-[1.05]"
          >
            Run your consulting operations with structure and clarity.
          </h2>
          <p className="mt-7 max-w-3xl text-pretty text-lg font-medium leading-relaxed text-zinc-200 sm:text-xl sm:leading-relaxed">
            DashboardOS tracks employee work, billable hours, and client activity across your entire operation — all
            in one system. It is a consulting operations layer, not a social or content platform.
          </p>
          <p className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-zinc-500 sm:text-lg sm:leading-relaxed">
            It connects time, work, clients, employees, and billing — including work performed inside tools like
            MarginEdge, Restaurant365, and QuickBooks.
          </p>
          <div className="mt-10 flex flex-wrap gap-3.5">
            <Link
              href="/demo/dashboardos"
              className="cauris-btn-secondary inline-flex min-h-12 w-full items-center justify-center sm:w-auto sm:min-w-[240px]"
            >
              View DashboardOS Demo
            </Link>
          </div>
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
              Built for consulting delivery
            </h3>
            <p className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg sm:leading-relaxed">
              For firms that need operational discipline across staff, clients, and billing — without content
              workflows, posting tools, or engagement tracking.
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
          <ScrollReveal delayMs={110}>
            <h3 className="text-2xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-3xl">
              Built to work with your existing tools
            </h3>
            <p className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg sm:leading-relaxed">
              DashboardOS does not replace MarginEdge, Restaurant365, or QuickBooks. It tracks the work performed
              inside them and connects it to time, billing, clients, and employees.
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-20 border-t border-white/[0.09] pt-16 sm:mt-24 sm:pt-20">
          <ScrollReveal delayMs={120}>
            <p className="cauris-kicker text-zinc-500">How it works</p>
          </ScrollReveal>
          <div className="mt-10 grid gap-6 sm:mt-12 md:grid-cols-2 md:gap-7">
            {howItWorksColumns.map((col, i) => (
              <ScrollReveal
                key={col.title}
                delayMs={160 + i * 70}
                className="rounded-brand border border-white/[0.11] bg-gradient-to-b from-white/[0.07] to-white/[0.018] p-7 shadow-cauris-elevate-sm ring-1 ring-white/[0.05] backdrop-blur-md sm:p-8"
              >
                <p className="font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-cauris-flame/75 sm:text-[11px]">
                  {col.title}
                </p>
                <h4 className="mt-4 text-lg font-semibold tracking-[-0.02em] text-zinc-50">How {col.title.toLowerCase()} use it</h4>
                <ul className="mt-4 flex flex-col gap-2.5 text-sm leading-relaxed text-zinc-500 sm:text-[15px] sm:leading-relaxed">
                  {col.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cauris-flame/55" aria-hidden />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
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
