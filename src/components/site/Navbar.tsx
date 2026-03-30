"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinkClass =
  "inline-flex min-h-[44px] items-center justify-center rounded-md px-3 py-2 text-[12px] font-medium text-zinc-400 transition-colors duration-[var(--cauris-duration-hover)] ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-cauris-dawn focus:outline-none focus-visible:ring-2 focus-visible:ring-cauris-flame/55 focus-visible:ring-offset-2 focus-visible:ring-offset-black md:min-h-0 md:px-2 md:text-[13px]";

const nav = [
  { href: "/#memory", label: "Memory" },
  { href: "/#insight", label: "Insight" },
  { href: "/#scs-nova", label: "SCS Nova" },
  { href: "/#services", label: "Services" },
  { href: "/#range-os", label: "RangeOS" },
  { href: "/#apparel", label: "Apparel" },
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
          href="/#hero"
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
          className="col-span-2 row-start-2 flex flex-wrap justify-center gap-x-4 gap-y-1 border-t border-white/[0.05] pt-3 sm:gap-x-6 sm:gap-y-2 md:col-span-1 md:col-start-2 md:row-start-1 md:border-t-0 md:pt-0"
          aria-label="Section anchors"
        >
          {nav.map((item) => (
            <a key={item.href} href={item.href} className={`text-zinc-500 ${navLinkClass}`}>
              {item.label}
            </a>
          ))}
          <Link
            href="/demo"
            className={`text-cauris-dawn/90 ${navLinkClass} hover:text-cauris-dawn`}
          >
            Cauris demo
          </Link>
        </nav>

        <Link
          href="/#hero"
          className="col-start-2 row-start-1 inline-flex min-h-[44px] items-center justify-self-end px-1 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-600 md:col-start-3 md:min-h-0 sm:text-[11px]"
        >
          System
        </Link>
      </div>
    </header>
  );
}
