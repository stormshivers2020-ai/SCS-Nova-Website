import Image from "next/image";
import Link from "next/link";

const nav = [
  { href: "#memory", label: "Memory" },
  { href: "#insight", label: "Insight" },
  { href: "#scs-nova", label: "SCS Nova" },
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-glass-header">
      <div className="container-brand grid min-h-[4.25rem] grid-cols-[minmax(0,1fr)_auto] items-center gap-y-3 py-3 md:grid-cols-[auto_1fr_auto] md:gap-y-0 md:py-0">
        <Link
          href="#hero"
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
          className="col-span-2 row-start-2 flex justify-center gap-6 border-t border-white/[0.05] pt-3 text-[12px] text-zinc-500 md:col-span-1 md:col-start-2 md:row-start-1 md:border-t-0 md:pt-0 md:text-[13px]"
          aria-label="Section anchors"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors duration-300 hover:text-cauris-dawn"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#hero"
          className="col-start-2 row-start-1 justify-self-end font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-600 md:col-start-3 sm:text-[11px]"
        >
          System
        </a>
      </div>
    </header>
  );
}
