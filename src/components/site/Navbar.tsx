"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinkClass =
  "inline-flex min-h-[44px] shrink-0 items-center justify-center rounded-md px-3 py-2 text-[12px] font-medium text-zinc-400 transition-colors duration-[var(--cauris-duration-hover)] ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-cauris-dawn focus:outline-none focus-visible:ring-2 focus-visible:ring-cauris-flame/55 focus-visible:ring-offset-2 focus-visible:ring-offset-black md:min-h-0 md:px-2 md:text-[13px]";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/demos", label: "Demos" },
  { href: "/cauris", label: "Cauris" },
  { href: "/rangeos", label: "RangeOS™" },
  { href: "/dashboardos", label: "DashboardOS" },
  { href: "/about", label: "About" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  if (pathname?.startsWith("/light-demo")) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-glass-header">
      <div className="container-brand grid min-h-[4.25rem] grid-cols-[minmax(0,1fr)_auto] items-center gap-y-3 py-3 md:grid-cols-[auto_1fr_auto] md:gap-y-0 md:py-0">
        <Link
          href="/"
          className="col-start-1 row-start-1 flex min-w-0 items-center gap-3 text-sm font-medium tracking-tight text-zinc-100"
        >
          <span className="relative shrink-0 rounded-lg ring-1 ring-white/[0.14]">
            <Image
              src="/logo.png"
              alt="Cauris"
              width={36}
              height={36}
              className="h-9 w-9 rounded-md object-contain brightness-[1.08] contrast-[1.05]"
              priority
            />
          </span>
          <span className="hidden truncate lg:inline">
            SCS Nova <span className="text-zinc-500">/</span>{" "}
            <span className="text-gradient-gold">Cauris</span>
          </span>
        </Link>

        <nav
          className="col-span-2 row-start-2 -mx-1 flex justify-start gap-x-1 overflow-x-auto border-t border-white/[0.05] px-1 pt-3 sm:justify-center sm:gap-x-3 md:col-span-1 md:col-start-2 md:row-start-1 md:mx-0 md:overflow-visible md:border-t-0 md:px-0 md:pt-0"
          aria-label="Main navigation"
        >
          {nav.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === item.href
                : pathname === item.href || pathname?.startsWith(`${item.href}/`);
            return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={`${navLinkClass} ${isActive ? "bg-white/[0.05] text-zinc-100 ring-1 ring-cauris-gold/[0.2]" : "text-zinc-500"}`}
            >
              {item.label}
            </Link>
          );
          })}
          <Link
            href="/services#request-services"
            className={`text-cauris-dawn/90 ${navLinkClass} hover:text-cauris-dawn`}
          >
            Contact
          </Link>
        </nav>

        <Link
          href="/services#request-services"
          className="col-start-2 row-start-1 inline-flex min-h-[44px] items-center justify-self-end rounded-md border border-white/[0.1] bg-white/[0.03] px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-300 ring-1 ring-white/[0.05] transition-colors hover:text-cauris-dawn focus:outline-none focus-visible:ring-2 focus-visible:ring-cauris-flame/55 focus-visible:ring-offset-2 focus-visible:ring-offset-black md:col-start-3 md:min-h-0 md:border-0 md:bg-transparent md:px-1 md:py-0 md:ring-0 sm:text-[11px]"
        >
          Start
        </Link>
      </div>
    </header>
  );
}
