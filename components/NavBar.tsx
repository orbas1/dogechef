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
    <header className="sticky top-0 z-20 bg-[#fff7e9]/90 shadow-[0_4px_0_#2b1c4a] backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="group flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="DogeChef mascot"
            width={108}
            height={108}
            className="drop-shadow-[6px_6px_0_#ffb347] transition-transform duration-300 group-hover:-translate-y-1"
            priority
          />
          <div className="flex flex-col text-[#2b1c4a]">
            <span className="text-xs font-black uppercase tracking-[0.4em] text-[#ff6b6b]">
              DogeChef
            </span>
            <span className="text-xl font-black uppercase tracking-[0.2em]">Meme Bistro</span>
          </div>
        </Link>
        <div className="hidden items-center gap-4 rounded-full border-4 border-[#2b1c4a] bg-[#fffdf2]/90 px-8 py-2 text-sm font-black uppercase tracking-[0.18em] text-[#2b1c4a] shadow-[6px_6px_0_#ffb347] lg:flex">
          {navigation.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors duration-200 ${
                  active
                    ? "text-[#ff6b6b]"
                    : "hover:text-[#ff6b6b]"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        <Link
          href="/tokenomics"
          className="inline-flex items-center justify-center rounded-full border-4 border-[#2b1c4a] bg-[#ff6b6b] px-6 py-3 text-sm font-black uppercase tracking-[0.25em] text-white shadow-[6px_6px_0_#2b1c4a] transition-transform duration-300 hover:-translate-y-1 hover:bg-[#ff3b81]"
        >
          Mint Soon
        </Link>
      </nav>
      <div className="mx-auto w-full max-w-6xl px-6 pb-4 lg:hidden">
        <div className="flex flex-wrap gap-2 rounded-2xl border-4 border-[#2b1c4a] bg-[#fffdf2] p-4 text-[0.68rem] font-black uppercase tracking-[0.28em] text-[#2b1c4a] shadow-[6px_6px_0_#ffb347]">
          {navigation.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`rounded-full border-2 border-transparent px-3 py-1 transition-colors duration-200 ${
                  active
                    ? "border-[#2b1c4a] bg-[#ffefd5] text-[#ff6b6b]"
                    : "hover:text-[#ff6b6b]"
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
