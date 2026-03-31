import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionShell } from "@/components/section-shell";
import { buildBusinessMailto } from "@/data/siteContact";

const whatItDoes = [
  {
    title: "Manage Clients",
    body: "Give every client their own workspace so context stays clean.",
  },
  {
    title: "Store Files & Content",
    body: "Keep assets, files, and reusable materials in one organized system.",
  },
  {
    title: "Track Communication",
    body: "See conversations, follow-ups, and activity without hunting across tools.",
  },
  {
    title: "Plan Work",
    body: "Map your work clearly so priorities and deadlines are always visible.",
  },
  {
    title: "Build Workflows",
    body: "Turn repeat tasks into clear systems that run the same way every time.",
  },
  {
    title: "Save Templates",
    body: "Reuse proven structures for tasks, messages, and recurring operations.",
  },
  {
    title: "Track Performance",
    body: "Measure movement and output so decisions are based on real signals.",
  },
  {
    title: "See What Needs Attention",
    body: "Surface urgent work and next actions before things slip.",
  },
] as const;

const industryTags = [
  "Content creators",
  "Sales",
  "Restaurants",
  "Service businesses",
  "Agencies",
  "Talent",
  "General business operations",
] as const;

const steps = [
  {
    title: "Add Clients",
    body: "Create dedicated spaces so each relationship has clean context.",
  },
  {
    title: "Add Work",
    body: "Capture files, tasks, and priorities in one structured flow.",
  },
  {
    title: "Build Workflows",
    body: "Define repeatable paths so execution stays consistent.",
  },
  {
    title: "Use Today View",
    body: "Focus the day around what matters now across clients and tasks.",
  },
] as const;

const workflowExamples = [
  "Follow up with leads",
  "Post content",
  "Run promotions",
  "Handle requests",
] as const;

const smartSignals = ["Client attention", "Missing work", "Delays", "Next actions"] as const;

const automationExamples = [
  "Message reminders",
  "Workflow triggers",
  "Alerts for stalled work",
] as const;

const pricing = [
  {
    title: "Starter",
    price: "$29/mo",
    line: "Ideal for solo operators managing a focused client base.",
  },
  {
    title: "Growth",
    price: "$79-$99/mo",
    line: "Designed for active operators scaling workflow and client load.",
  },
  {
    title: "Scale",
    price: "$149-$299/mo",
    line: "Built for teams handling larger operations and deeper execution.",
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
        className="relative overflow-hidden bg-gradient-to-b from-black/46 via-zinc-950/14 to-black/34 !py-24 md:!py-32 lg:!py-36"
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
          <p className="cauris-kicker text-zinc-500">Management DashboardOS</p>
          <h1
            id="dashboardos-hero-heading"
            className="mt-5 max-w-5xl text-pretty text-3xl font-semibold tracking-[-0.028em] text-zinc-100 sm:text-4xl md:text-[3rem] md:leading-[1.05]"
          >
            Run all your clients. In one system.
          </h1>
          <p className="mt-7 max-w-3xl text-pretty text-base font-medium leading-relaxed text-zinc-200 sm:text-lg">
            A multi-client operating system designed to help you manage work, clients, and daily tasks
            without losing control.
          </p>
          <p className="mt-5 text-base font-medium text-zinc-400 sm:text-lg">
            This is not just a dashboard. It is a system.
          </p>
          <div className="mt-10 flex w-full max-w-lg flex-col gap-3.5 sm:flex-row sm:gap-4">
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
            What this system is
          </h2>
          <p className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-zinc-300 sm:text-lg">
            SCS Nova Management DashboardOS is a multi-client operating system built to help you stay
            organized, track work, and move faster with clarity.
          </p>
          <p className="mt-5 max-w-3xl text-pretty text-base font-medium leading-relaxed text-zinc-500 sm:text-lg">
            Everything is structured. Everything has a place. Nothing gets lost.
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
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {whatItDoes.map((item, i) => (
            <ScrollReveal
              key={item.title}
              delayMs={50 + i * 60}
              className="rounded-brand border border-white/[0.11] bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-6 shadow-cauris-elevate-sm ring-1 ring-cauris-gold/[0.09] sm:p-7"
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
            Built for real work
          </h2>
          <p className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg">
            This system works across industries and adapts to how you manage clients, tasks, and
            operations.
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
        id="dashboardos-how-it-works"
        aria-labelledby="dashboardos-how-it-works-heading"
        className="border-t border-white/[0.08] bg-gradient-to-b from-black/36 via-zinc-950/11 to-black/36 !py-24 md:!py-32 lg:!py-36"
      >
        <ScrollReveal>
          <h2 id="dashboardos-how-it-works-heading" className="text-3xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-4xl">
            How it works
          </h2>
        </ScrollReveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-7">
          {steps.map((step, i) => (
            <ScrollReveal
              key={step.title}
              delayMs={70 + i * 70}
              className="rounded-brand border border-white/[0.11] bg-gradient-to-b from-white/[0.07] to-white/[0.018] p-7 shadow-cauris-elevate-sm ring-1 ring-white/[0.05] sm:p-8"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cauris-flame/75 sm:text-[11px]">
                Step {i + 1}
              </p>
              <h3 className="mt-4 text-lg font-semibold tracking-[-0.02em] text-zinc-50">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500 sm:text-[15px]">{step.body}</p>
            </ScrollReveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        id="dashboardos-workflows"
        aria-labelledby="dashboardos-workflows-heading"
        className="border-t border-white/[0.08] bg-gradient-to-b from-black/34 via-zinc-950/10 to-black/34 !py-24 md:!py-30 lg:!py-34"
      >
        <ScrollReveal>
          <h2 id="dashboardos-workflows-heading" className="text-3xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-4xl">
            Workflows
          </h2>
          <p className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg">
            Turn your work into repeatable systems.
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
        className="border-t border-white/[0.08] bg-gradient-to-b from-black/36 via-zinc-950/10 to-black/36 !py-24 md:!py-32 lg:!py-36"
      >
        <ScrollReveal>
          <h2 id="dashboardos-smart-system-heading" className="text-3xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-4xl">
            Smart system
          </h2>
          <p className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg">
            DashboardOS shows you what needs attention, where you&apos;re falling behind, and what to do
            next.
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
        className="border-t border-white/[0.08] bg-gradient-to-b from-black/34 via-zinc-950/10 to-black/34 !py-24 md:!py-30 lg:!py-34"
      >
        <ScrollReveal>
          <h2 id="dashboardos-today-view-heading" className="text-3xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-4xl">
            Today View
          </h2>
          <p className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg">
            Your control center for tasks, alerts, messages, and priorities.
          </p>
        </ScrollReveal>
      </SectionShell>

      <SectionShell
        id="dashboardos-automation"
        aria-labelledby="dashboardos-automation-heading"
        className="border-t border-white/[0.08] bg-gradient-to-b from-black/36 via-zinc-950/10 to-black/36 !py-24 md:!py-32 lg:!py-36"
      >
        <ScrollReveal>
          <h2 id="dashboardos-automation-heading" className="text-3xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-4xl">
            Automation
          </h2>
          <p className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg">
            Create simple rules that help you move faster without losing control.
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
        className="border-t border-white/[0.08] bg-gradient-to-b from-black/34 via-zinc-950/10 to-black/34 !py-24 md:!py-30 lg:!py-34"
      >
        <ScrollReveal>
          <h2 id="dashboardos-teams-heading" className="text-3xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-4xl">
            Built for teams
          </h2>
          <p className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg">
            Invite team members, assign clients, and keep everything organized.
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
              className="rounded-brand border border-white/[0.11] bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-7 shadow-cauris-elevate-sm ring-1 ring-cauris-gold/[0.1] sm:p-8"
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
            Start running your system
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-pretty text-base leading-relaxed text-zinc-300 sm:text-lg">
            If you manage clients, tasks, or daily operations — this system is built for you.
          </p>
          <div className="mx-auto mt-10 flex w-full max-w-2xl flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
            <a href={mailto} className="cauris-btn-primary-card">
              Start Your System
            </a>
            <a href={mailto} className="cauris-btn-tertiary-card">
              Request Demo
            </a>
            <a href={mailto} className="cauris-btn-tertiary-card">
              Email SCS Nova
            </a>
          </div>
        </ScrollReveal>
      </SectionShell>

      <SectionShell className="border-t border-white/[0.08] !py-10">
        <p className="text-center font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-600 sm:text-[11px]">
          SCS Nova Management DashboardOS
        </p>
      </SectionShell>
    </div>
  );
}
