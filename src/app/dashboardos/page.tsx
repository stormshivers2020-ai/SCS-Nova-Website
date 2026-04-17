import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionShell } from "@/components/section-shell";
import { buildBusinessMailto } from "@/data/siteContact";
import Link from "next/link";

const whatItDoes = [
  {
    title: "Employee time tracking",
    body: "Clock in and clock out with time tied to the right client, location, and work context.",
  },
  {
    title: "Work by client and location",
    body: "See hours and activity by account and by store or site so billing and reviews stay aligned.",
  },
  {
    title: "Tool-based work tracking",
    body: "Log work performed in MarginEdge, Restaurant365, QuickBooks, and other platforms your team already uses.",
  },
  {
    title: "Work type tracking",
    body: "Categorize work such as PMIX mapping, invoice review, bookkeeping, and reporting for clearer reporting.",
  },
  {
    title: "Billable vs non-billable visibility",
    body: "Keep billable client work separate from internal or non-billable time so invoices stay defensible.",
  },
  {
    title: "Payroll hour tracking",
    body: "Support payroll with structured hours that match how your team actually worked the week.",
  },
  {
    title: "Invoice and billing support",
    body: "Connect logged work to billing workflows so invoices reflect real delivery, not memory.",
  },
  {
    title: "Department and workload visibility",
    body: "Understand who is carrying which clients and where capacity is tightening before deadlines slip.",
  },
  {
    title: "Performance analytics",
    body: "Review throughput, utilization, and delivery patterns across teams without ad-hoc spreadsheets.",
  },
] as const;

const industryTags = [
  "Consulting firms",
  "Multi-client operators",
  "Accounting & advisory",
  "Restaurant & hospitality groups",
  "Field and multi-site teams",
  "Finance and operations",
  "Professional services",
] as const;

const employeeFlow = [
  "Clock in and out",
  "Select client",
  "Select location or store",
  "Select tool used (MarginEdge, Restaurant365, QuickBooks, etc.)",
  "Select work type",
  "Log time",
] as const;

const managerFlow = [
  "See work across employees",
  "Track hours by client and location",
  "Monitor billable work",
  "Generate invoices",
  "Track payroll",
  "Analyze workload and performance",
] as const;

const workflowExamples = [
  "PMIX mapping and recipe maintenance",
  "Invoice review and approval",
  "Month-end bookkeeping support",
  "Client reporting packs",
] as const;

const smartSignals = [
  "Billable gaps",
  "Missing time entries",
  "Behind on client deliverables",
  "Next billing actions",
] as const;

const automationExamples = [
  "Reminders before timesheet deadlines",
  "Alerts when billable work stalls",
  "Flags when client hours exceed plan",
] as const;

const pricing = [
  {
    title: "Starter",
    price: "$29/mo",
    line: "Smaller consulting teams getting structured time and client visibility in one place.",
  },
  {
    title: "Growth",
    price: "$79-$99/mo",
    line: "Growing firms with more clients, locations, and concurrent workstreams to coordinate.",
  },
  {
    title: "Scale",
    price: "$149-$299/mo",
    line: "Larger teams that need deeper workload, billing, and performance visibility across the practice.",
  },
] as const;

export default function DashboardOSPage() {
  const mailto = buildBusinessMailto({ subject: "SCS Nova — DashboardOS inquiry" });

  return (
    <div className="relative min-h-[100dvh] overflow-x-hidden">
      <div className="cauris-ambient" aria-hidden>
        <div className="cauris-grid" />
        <div className="cauris-starfield animate-twinkle" />
        <div className="cauris-vignette" />
        <div className="cauris-grain" />
      </div>

      <SectionShell
        id="dashboardos-hero"
        aria-labelledby="dashboardos-hero-heading"
        className="relative overflow-hidden bg-gradient-to-b from-black/46 via-zinc-950/14 to-black/34 !py-20 md:!py-32 lg:!py-36"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_74%_48%_at_50%_0%,rgba(232,148,58,0.11),transparent_56%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:34px_34px] opacity-[0.12]"
          aria-hidden
        />
        <ScrollReveal className="relative">
          <p className="cauris-kicker text-zinc-500">DashboardOS</p>
          <h1
            id="dashboardos-hero-heading"
            className="mt-5 max-w-5xl text-pretty text-3xl font-semibold tracking-[-0.028em] text-zinc-100 sm:text-4xl md:text-[3rem] md:leading-[1.05]"
          >
            A system for managing consulting operations
          </h1>
          <p className="mt-7 max-w-3xl text-pretty text-base font-medium leading-relaxed text-zinc-200 sm:text-lg">
            DashboardOS is built for consulting firms that need to track employee work, billable hours, and client
            activity across multiple accounts, locations, and tools.
          </p>
          <p className="mt-5 max-w-3xl text-pretty text-sm leading-relaxed text-zinc-400 sm:text-base sm:leading-relaxed">
            It connects the work your team does inside tools like MarginEdge, Restaurant365, and QuickBooks to time,
            billing, and performance.
          </p>
          <div className="mt-10 flex w-full max-w-2xl flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link href="/demo/dashboardos" className="cauris-btn-secondary inline-flex min-h-12 w-full items-center justify-center sm:w-auto sm:min-w-[220px]">
              View DashboardOS Demo
            </Link>
            <a href={mailto} className="cauris-btn-primary-card">
              Start Your System
            </a>
            <a href={mailto} className="cauris-btn-tertiary-card">
              Request Demo
            </a>
          </div>
        </ScrollReveal>
      </SectionShell>

      <SectionShell
        id="dashboardos-what-it-is"
        aria-labelledby="dashboardos-what-it-is-heading"
        className="border-t border-white/[0.08] bg-gradient-to-b from-black/34 via-zinc-950/10 to-black/34 !py-24 md:!py-30 lg:!py-34"
      >
        <ScrollReveal>
          <h2 id="dashboardos-what-it-is-heading" className="text-3xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-4xl">
            Consulting operations, in one layer
          </h2>
          <p className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-zinc-300 sm:text-lg">
            DashboardOS is a consulting operations system. It helps your firm tie together employee work, payroll
            hours, billable client delivery, and billing — without treating the practice like a content or social
            workflow tool.
          </p>
          <p className="mt-5 max-w-3xl text-pretty text-base font-medium leading-relaxed text-zinc-500 sm:text-lg">
            Time, work, clients, employees, and invoices stay connected so leaders can see the real shape of the
            operation.
          </p>
        </ScrollReveal>
      </SectionShell>

      <SectionShell
        id="dashboardos-what-it-does"
        aria-labelledby="dashboardos-what-it-does-heading"
        className="border-t border-white/[0.08] bg-gradient-to-b from-black/36 via-zinc-950/12 to-black/36 !py-24 md:!py-32 lg:!py-36"
      >
        <ScrollReveal>
          <h2 id="dashboardos-what-it-does-heading" className="text-3xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-4xl">
            What this system does
          </h2>
        </ScrollReveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {whatItDoes.map((item, i) => (
            <ScrollReveal
              key={item.title}
              delayMs={50 + i * 50}
              className="rounded-brand border border-white/[0.12] bg-gradient-to-b from-white/[0.09] to-white/[0.022] p-6 shadow-cauris-elevate-sm ring-1 ring-cauris-gold/[0.1] sm:p-7"
            >
              <h3 className="text-base font-semibold tracking-[-0.02em] text-zinc-50 sm:text-lg">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500 sm:text-[15px]">{item.body}</p>
            </ScrollReveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        id="dashboardos-built-for-real-work"
        aria-labelledby="dashboardos-built-for-real-work-heading"
        className="border-t border-white/[0.08] bg-gradient-to-b from-black/34 via-zinc-950/10 to-black/34 !py-24 md:!py-30 lg:!py-34"
      >
        <ScrollReveal>
          <h2
            id="dashboardos-built-for-real-work-heading"
            className="text-3xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-4xl"
          >
            Built for consulting delivery
          </h2>
          <p className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg">
            The product is aimed at firms that live in client work, tools, and billing — not social feeds or content
            calendars.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2.5 sm:gap-3">
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
      </SectionShell>

      <SectionShell
        id="dashboardos-existing-tools"
        aria-labelledby="dashboardos-existing-tools-heading"
        className="border-t border-white/[0.08] bg-gradient-to-b from-black/36 via-zinc-950/11 to-black/36 !py-24 md:!py-32 lg:!py-36"
      >
        <ScrollReveal>
          <h2
            id="dashboardos-existing-tools-heading"
            className="text-3xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-4xl"
          >
            Built to work with your existing tools
          </h2>
          <p className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-zinc-300 sm:text-lg">
            DashboardOS does not replace systems like MarginEdge, Restaurant365, or QuickBooks. It tracks the work
            performed inside them and connects it to time, billing, clients, and employees.
          </p>
        </ScrollReveal>
      </SectionShell>

      <SectionShell
        id="dashboardos-how-it-works"
        aria-labelledby="dashboardos-how-it-works-heading"
        className="border-t border-white/[0.08] bg-gradient-to-b from-black/34 via-zinc-950/10 to-black/34 !py-24 md:!py-30 lg:!py-34"
      >
        <ScrollReveal>
          <h2 id="dashboardos-how-it-works-heading" className="text-3xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-4xl">
            How it works
          </h2>
        </ScrollReveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-7">
          <ScrollReveal delayMs={70} className="rounded-brand border border-white/[0.12] bg-gradient-to-b from-white/[0.09] to-white/[0.022] p-7 shadow-cauris-elevate-sm ring-1 ring-cauris-gold/[0.1] sm:p-8">
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-cauris-flame/75 sm:text-[11px]">
              Employees
            </p>
            <ul className="mt-6 flex flex-col gap-3.5">
              {employeeFlow.map((line) => (
                <li key={line} className="flex gap-3 text-sm leading-relaxed text-zinc-200 sm:text-[15px]">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cauris-flame/65" aria-hidden />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal delayMs={120} className="rounded-brand border border-white/[0.12] bg-gradient-to-b from-white/[0.09] to-white/[0.022] p-7 shadow-cauris-elevate-sm ring-1 ring-cauris-gold/[0.1] sm:p-8">
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-cauris-flame/75 sm:text-[11px]">
              Managers
            </p>
            <ul className="mt-6 flex flex-col gap-3.5">
              {managerFlow.map((line) => (
                <li key={line} className="flex gap-3 text-sm leading-relaxed text-zinc-200 sm:text-[15px]">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cauris-flame/65" aria-hidden />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </SectionShell>

      <SectionShell
        id="dashboardos-workflows"
        aria-labelledby="dashboardos-workflows-heading"
        className="border-t border-white/[0.08] bg-gradient-to-b from-black/36 via-zinc-950/10 to-black/36 !py-24 md:!py-32 lg:!py-36"
      >
        <ScrollReveal>
          <h2 id="dashboardos-workflows-heading" className="text-3xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-4xl">
            Typical workstreams
          </h2>
          <p className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg">
            Examples of client delivery your firm can structure and measure — not social posts or influencer
            campaigns.
          </p>
        </ScrollReveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {workflowExamples.map((item, i) => (
            <ScrollReveal
              key={item}
              delayMs={80 + i * 60}
              className="rounded-brand border border-white/[0.1] bg-white/[0.03] px-5 py-4 ring-1 ring-white/[0.05]"
            >
              <p className="text-sm font-medium text-zinc-300 sm:text-[15px]">{item}</p>
            </ScrollReveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        id="dashboardos-smart-system"
        aria-labelledby="dashboardos-smart-system-heading"
        className="border-t border-white/[0.08] bg-gradient-to-b from-black/34 via-zinc-950/10 to-black/34 !py-24 md:!py-32 lg:!py-36"
      >
        <ScrollReveal>
          <h2 id="dashboardos-smart-system-heading" className="text-3xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-4xl">
            Operational visibility
          </h2>
          <p className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg">
            See where billable work, payroll hours, and client commitments stand — before small gaps become revenue
            or staffing problems.
          </p>
        </ScrollReveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {smartSignals.map((signal, i) => (
            <ScrollReveal
              key={signal}
              delayMs={90 + i * 60}
              className="rounded-brand border border-cauris-gold/[0.14] bg-gradient-to-b from-white/[0.06] to-white/[0.015] px-5 py-4 ring-1 ring-cauris-gold/[0.08]"
            >
              <p className="text-sm font-medium text-zinc-200 sm:text-[15px]">{signal}</p>
            </ScrollReveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        id="dashboardos-today-view"
        aria-labelledby="dashboardos-today-view-heading"
        className="border-t border-white/[0.08] bg-gradient-to-b from-black/36 via-zinc-950/10 to-black/36 !py-24 md:!py-30 lg:!py-34"
      >
        <ScrollReveal>
          <h2 id="dashboardos-today-view-heading" className="text-3xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-4xl">
            Today View
          </h2>
          <p className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg">
            A single place to see what the team is working on, which clients need attention, and what must move for
            payroll and billing this week.
          </p>
        </ScrollReveal>
      </SectionShell>

      <SectionShell
        id="dashboardos-automation"
        aria-labelledby="dashboardos-automation-heading"
        className="border-t border-white/[0.08] bg-gradient-to-b from-black/34 via-zinc-950/10 to-black/34 !py-24 md:!py-32 lg:!py-36"
      >
        <ScrollReveal>
          <h2 id="dashboardos-automation-heading" className="text-3xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-4xl">
            Automation
          </h2>
          <p className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg">
            Light-touch rules that support compliance and billing discipline — not growth hacks or engagement
            chasing.
          </p>
        </ScrollReveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {automationExamples.map((item, i) => (
            <ScrollReveal
              key={item}
              delayMs={100 + i * 70}
              className="rounded-brand border border-white/[0.1] bg-white/[0.03] px-5 py-4 ring-1 ring-white/[0.05]"
            >
              <p className="text-sm font-medium text-zinc-300 sm:text-[15px]">{item}</p>
            </ScrollReveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        id="dashboardos-teams"
        aria-labelledby="dashboardos-teams-heading"
        className="border-t border-white/[0.08] bg-gradient-to-b from-black/36 via-zinc-950/12 to-black/36 !py-24 md:!py-30 lg:!py-34"
      >
        <ScrollReveal>
          <h2 id="dashboardos-teams-heading" className="text-3xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-4xl">
            Built for teams
          </h2>
          <p className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg">
            Give managers and partners a shared view of staff time, client load, and billing readiness — without
            asking people to live inside a social or content tool.
          </p>
        </ScrollReveal>
      </SectionShell>

      <SectionShell
        id="dashboardos-pricing"
        aria-labelledby="dashboardos-pricing-heading"
        className="border-t border-white/[0.08] bg-gradient-to-b from-black/36 via-zinc-950/12 to-black/36 !py-24 md:!py-32 lg:!py-36"
      >
        <ScrollReveal>
          <h2 id="dashboardos-pricing-heading" className="text-3xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-4xl">
            Pricing
          </h2>
        </ScrollReveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3 md:gap-7">
          {pricing.map((plan, i) => (
            <ScrollReveal
              key={plan.title}
              delayMs={80 + i * 70}
              className="rounded-brand border border-white/[0.12] bg-gradient-to-b from-white/[0.09] to-white/[0.022] p-7 shadow-cauris-elevate-sm ring-1 ring-cauris-gold/[0.1] sm:p-8"
            >
              <h3 className="text-xl font-semibold tracking-[-0.03em] text-zinc-50">{plan.title}</h3>
              <p className="mt-4 text-2xl font-semibold tracking-tight text-zinc-100">{plan.price}</p>
              <p className="mt-4 text-sm leading-relaxed text-zinc-500 sm:text-[15px]">{plan.line}</p>
            </ScrollReveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        id="dashboardos-cta"
        aria-labelledby="dashboardos-cta-heading"
        className="border-t border-white/[0.08] bg-gradient-to-b from-black/42 via-zinc-950/12 to-black/45 !py-24 md:!py-30 lg:!py-34"
      >
        <ScrollReveal className="rounded-brand-lg border border-white/[0.12] bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-8 text-center shadow-cauris-elevate-md ring-1 ring-cauris-gold/[0.11] sm:p-10 md:p-12">
          <h2 id="dashboardos-cta-heading" className="text-3xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-4xl">
            Bring structure to consulting operations
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-pretty text-base leading-relaxed text-zinc-300 sm:text-lg">
            If your firm runs on billable work, payroll hours, and client tools, DashboardOS is built to reflect that
            reality — clearly and in one system.
          </p>
          <div className="mx-auto mt-10 flex w-full max-w-2xl flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
            <a href={mailto} className="cauris-btn-primary-card">
              Start Your System
            </a>
            <a href={mailto} className="cauris-btn-tertiary-card">
              Request Demo
            </a>
            <Link href="/demos" className="cauris-btn-tertiary-card">
              Demos hub
            </Link>
            <a href={mailto} className="cauris-btn-tertiary-card">
              Email SCS Nova
            </a>
          </div>
        </ScrollReveal>
      </SectionShell>

      <SectionShell className="border-t border-white/[0.08] !py-10">
        <p className="text-center font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-600 sm:text-[11px]">
          SCS Nova DashboardOS · Consulting operations system
        </p>
      </SectionShell>
    </div>
  );
}
