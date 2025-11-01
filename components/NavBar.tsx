"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Whitepaper", href: "/whitepaper" },
  { name: "Tokenomics", href: "/tokenomics" },
  { name: "About", href: "/about" },
  { name: "Roadmap", href: "/roadmap" },
];

export function NavBar() {
  const pathname = usePathname();

  return (
    <header className="relative z-10">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 lg:px-10">
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-2xl bg-slate-900/70 ring-1 ring-sky-500/30 transition-all duration-300 group-hover:scale-105 group-hover:ring-emerald-400/40">
            <Image
              src="/logo.svg"
              alt="DogeChef logo"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 48px, 64px"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium uppercase tracking-[0.32em] text-slate-300">
              DogeChef
            </span>
            <span className="text-lg font-semibold text-slate-50">Culinary Crypto</span>
          </div>
        </Link>
        <div className="hidden items-center gap-8 rounded-full border border-slate-800/60 bg-slate-900/40 px-8 py-3 text-sm font-medium uppercase tracking-[0.25em] text-slate-400 shadow-[0_0_40px_rgba(68,249,255,0.12)] backdrop-blur lg:flex">
          {navigation.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors duration-200 ${
                  active
                    ? "text-sky-200"
                    : "text-slate-400 hover:text-sky-100"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        <Link
          href="/tokenomics"
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-400 via-fuchsia-500 to-amber-400 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-950 shadow-[0_10px_40px_rgba(68,249,255,0.35)] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(159,80,255,0.45)]"
        >
          Mint Soon
        </Link>
      </nav>
      <div className="mx-auto mt-2 w-full max-w-6xl px-6 lg:hidden">
        <div className="flex flex-wrap gap-3 rounded-2xl border border-slate-800/60 bg-slate-900/50 px-5 py-4 text-[0.68rem] font-semibold uppercase tracking-[0.35em] text-slate-400 shadow-[0_0_40px_rgba(68,249,255,0.12)] backdrop-blur">
          {navigation.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors duration-200 ${
                  active ? "text-sky-200" : "hover:text-sky-100"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
