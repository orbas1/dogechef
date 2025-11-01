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
    <header className="sticky top-0 z-20 border-b border-orange-100/60 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-orange-200 bg-orange-50 transition-transform duration-300 group-hover:-translate-y-0.5">
            <Image
              src="/logo.png"
              alt="DogeChef logo"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 48px, 64px"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
              DogeChef
            </span>
            <span className="text-lg font-semibold text-slate-900">Culinary Crypto</span>
          </div>
        </Link>
        <div className="hidden items-center gap-6 rounded-full border border-orange-100 bg-white/80 px-7 py-2 text-sm font-medium uppercase tracking-[0.2em] text-slate-500 shadow-sm lg:flex">
          {navigation.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors duration-200 ${
                  active
                    ? "text-orange-500"
                    : "hover:text-orange-500"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        <Link
          href="/tokenomics"
          className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-orange-200/60 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-orange-600"
        >
          Mint Soon
        </Link>
      </nav>
      <div className="mx-auto w-full max-w-6xl px-6 pb-4 lg:hidden">
        <div className="flex flex-wrap gap-2 rounded-2xl border border-orange-100 bg-white p-4 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-slate-500 shadow-sm">
          {navigation.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`rounded-full px-3 py-1 transition-colors duration-200 ${
                  active ? "bg-orange-100 text-orange-600" : "hover:text-orange-500"
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
