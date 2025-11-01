import Image from "next/image";
import Link from "next/link";

import { CountdownTimer } from "@/components/CountdownTimer";

const heroHighlights = [
  {
    label: "Launch",
    description: "Stage 1 goes live 30 Nov on Raydium with liquidity seeded from day one.",
  },
  {
    label: "Supply",
    description: "1,000,000,000 DOGE CHEF tokens — 90% to DEX, 10% creator fund with a clear split.",
  },
  {
    label: "Fees",
    description: "2% transaction fee supports the liquidity pool and community treasury.",
  },
];

const featureCards = [
  {
    title: "Memecoin for the party-minded",
    description:
      "DOGE CHEF is built for potheads, party heads, gamblers and degens who want memes first and moon talk second.",
  },
  {
    title: "Simple token plan",
    description:
      "90% of supply hits Raydium at launch. The remaining 10% funds reinvestment, marketing and creator operations.",
  },
  {
    title: "Utility in stages",
    description:
      "NFT drops, a mobile runner game and lightweight AI tools arrive after launch, all tied to the DOGE CHEF culture.",
  },
];

const stats = [
  { value: "1,000,000,000", label: "Total Supply" },
  { value: "90%", label: "Liquidity at Launch" },
  { value: "10%", label: "Creator Fund" },
  { value: "30 Nov", label: "DEX Launch" },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-[#fff7e9]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,218,185,0.7),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(255,182,193,0.6),transparent_60%)]" />
      <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-20 pt-28 lg:flex-row lg:items-start lg:px-10 lg:pb-24">
        <div className="flex-1 space-y-10">
          <span className="inline-flex items-center gap-2 rounded-full border-4 border-[#2b1c4a] bg-[#fffdf2]/90 px-5 py-1 text-xs font-black uppercase tracking-[0.4em] text-[#ff6b6b] shadow-[4px_4px_0_#2b1c4a]">
            Built on Solana
          </span>
          <div className="relative">
            <div className="absolute -top-10 -left-6 h-16 w-16 -rotate-6 rounded-full border-4 border-[#2b1c4a] bg-[#ffe7d1] shadow-[4px_4px_0_#ffb347]" />
            <h1 className="relative text-5xl font-black uppercase leading-[1.02] tracking-tight text-[#2b1c4a] sm:text-6xl">
              DOGE CHEF 🍳
              <br />
              Solana memecoin energy.
            </h1>
          </div>
          <p className="max-w-xl text-base leading-7 text-[#402166] sm:text-lg">
            DOGE CHEF is a Solana-native community coin for the party-minded. Launching 30 Nov on Raydium with a 1B supply, it keeps things simple — memes, NFTs, games and AI tools rolled out stage by stage.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/whitepaper"
              className="inline-flex items-center justify-center rounded-full border-4 border-[#2b1c4a] bg-[#ff6b6b] px-6 py-3 text-sm font-black uppercase tracking-[0.3em] text-white shadow-[6px_6px_0_#2b1c4a] transition-transform duration-300 hover:-translate-y-1 hover:bg-[#ff3b81]"
            >
              Read Whitepaper
            </Link>
            <Link
              href="/tokenomics"
              className="inline-flex items-center justify-center rounded-full border-4 border-[#2b1c4a] bg-[#fffdf2] px-6 py-3 text-sm font-black uppercase tracking-[0.3em] text-[#2b1c4a] shadow-[6px_6px_0_#ffb347] transition-transform duration-300 hover:-translate-y-1 hover:bg-[#ffe7d1]"
            >
              View Tokenomics
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {heroHighlights.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border-4 border-[#2b1c4a] bg-[#fffdf2] p-6 text-left shadow-[6px_6px_0_#ffb347]"
              >
                <h3 className="text-sm font-black uppercase tracking-[0.35em] text-[#ff6b6b]">{item.label}</h3>
                <p className="mt-3 text-sm text-[#402166]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 flex-col items-center gap-8 lg:items-end">
          <div className="relative w-full max-w-sm self-center lg:self-end">
            <Image
              src="/logo.png"
              alt="DogeChef super-sized logo"
              width={480}
              height={480}
              priority
              className="mx-auto w-[min(100%,22rem)] rotate-6 drop-shadow-[10px_10px_0_#2b1c4a]"
            />
          </div>
          <CountdownTimer />
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-6 pb-24 lg:px-10">
        <div className="grid gap-6 rounded-[44px] border-4 border-[#2b1c4a] bg-[#fffdf2]/90 p-10 shadow-[8px_8px_0_#ffb347] sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-2 text-center text-[#2b1c4a]">
              <p className="text-3xl font-black uppercase tracking-[0.2em] text-[#ff6b6b]">{stat.value}</p>
              <p className="text-xs font-black uppercase tracking-[0.35em]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-6 pb-24 lg:px-10">
        <div className="mx-auto max-w-3xl text-center text-[#2b1c4a]">
          <p className="inline-flex rounded-full border-4 border-[#2b1c4a] bg-[#fffbe6] px-4 py-1 text-xs font-black uppercase tracking-[0.45em] text-[#ff6b6b] shadow-[4px_4px_0_#2b1c4a]">
            Why DOGE CHEF
          </p>
          <h2 className="mt-6 text-3xl font-black uppercase sm:text-4xl">
            Built for people who live for memes, late nights and quick moves.
          </h2>
          <p className="mt-6 text-base leading-7 text-[#402166] sm:text-lg">
            Fast Solana swaps, transparent tokenomics and a roadmap that puts culture first. We launch loud, keep the hype rolling and reward the community that shows up.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featureCards.map((card) => (
            <article
              key={card.title}
              className="h-full rounded-3xl border-4 border-[#2b1c4a] bg-white p-8 text-[#2b1c4a] shadow-[8px_8px_0_#ffb347] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-4 border-[#2b1c4a] bg-[#ff6b6b] text-lg font-black uppercase tracking-[0.3em] text-white shadow-[4px_4px_0_#2b1c4a]">
                ✶
              </div>
              <h3 className="mt-6 text-xl font-black uppercase">{card.title}</h3>
              <p className="mt-4 text-sm leading-6 text-[#402166]">{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative mx-auto mb-28 w-full max-w-6xl rounded-[48px] border-4 border-[#2b1c4a] bg-white px-6 py-16 text-[#2b1c4a] shadow-[10px_10px_0_#ffb347] lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div className="space-y-6">
            <p className="inline-flex rounded-full border-4 border-[#2b1c4a] bg-[#fffbe6] px-4 py-1 text-xs font-black uppercase tracking-[0.4em] text-[#ff6b6b] shadow-[4px_4px_0_#2b1c4a]">
              How it works
            </p>
            <h2 className="text-3xl font-black uppercase sm:text-4xl">
              Simple launch, clear stages, community-led energy.
            </h2>
            <p className="text-base leading-7 text-[#402166]">
              • Total supply: 1,000,000,000 DOGE CHEF.
              <br />• 90% seeded to Raydium for trading, 10% creator fund split across reinvestment, marketing and operations.
              <br />• 2% transaction fee routes 1.2% to liquidity top-ups and 0.8% to the treasury for marketing, reinvestment and airdrops.
              <br />• NFTs, a mobile runner game and Kitchen AI tools unlock utility over time with the community steering the vibes.
            </p>
            <Link
              href="/roadmap"
              className="inline-flex items-center gap-3 rounded-full border-4 border-[#2b1c4a] bg-[#ff6b6b] px-5 py-3 text-sm font-black uppercase tracking-[0.3em] text-white shadow-[6px_6px_0_#2b1c4a] transition-transform duration-300 hover:-translate-y-1 hover:bg-[#ff3b81]"
            >
              Explore Roadmap ↗
            </Link>
          </div>
          <div className="rounded-3xl border-4 border-[#2b1c4a] bg-[#fffdf2]/90 p-8 text-center shadow-[8px_8px_0_#ffb347]">
            <p className="text-lg font-black uppercase tracking-[0.3em] text-[#ff6b6b]">Join the Kitchen</p>
            <p className="mt-4 text-sm leading-6 text-[#402166]">
              Follow us on X <strong>@dogechefSOL</strong>, Instagram <strong>@doge_chef</strong>, visit <strong>dogechef.online</strong> and hop into Telegram for launch updates, meme bounties and whitelist drops.
            </p>
            <Link
              href="/whitelist"
              className="mt-6 inline-flex items-center justify-center rounded-full border-4 border-[#2b1c4a] bg-white px-5 py-3 text-xs font-black uppercase tracking-[0.35em] text-[#2b1c4a] shadow-[6px_6px_0_#ffb347] transition-transform duration-300 hover:-translate-y-1 hover:bg-[#fff3a5]"
            >
              Join Whitelist
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
