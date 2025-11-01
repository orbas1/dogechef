import Image from "next/image";
import Link from "next/link";

import { CountdownTimer } from "@/components/CountdownTimer";

const heroHighlights = [
  {
    label: "Solana Speedrun",
    description: "Sub-second finality keeps meme feasts crisp and community vibes sizzling.",
  },
  {
    label: "1B Total Supply",
    description: "10% chef stash for creative fuel, 90% splashed straight into the liquidity cauldron.",
  },
  {
    label: "Degenerate Hospitality",
    description: "Cartoon quests, fusion drops, and DAO prank wars for holders who show up hungry.",
  },
];

const featureCards = [
  {
    title: "Hyper-Solana Kitchen",
    description:
      "Programmed on Solana with composable ingredients—flash-freeze swaps, frictionless staking, and unstoppable meme sauces.",
  },
  {
    title: "Chef's Chaos Engine",
    description:
      "A playful governance loop where votes trigger live cookoffs, LP boosts, and lore-expanding meme comics in real time.",
  },
  {
    title: "Multiverse Catering",
    description:
      "Blend IRL pop-ups, AR scavenger hunts, and collectible recipe NFTs that drip perks across every DogeChef hangout.",
  },
];

const stats = [
  { value: "1,000,000,000", label: "DOGECHEF Supply" },
  { value: "10%", label: "Creator Reserve" },
  { value: "90%", label: "Liquidity Pool" },
  { value: "30 Nov", label: "Mint Countdown" },
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
              Meme cuisine for
              <br />
              degens with taste.
            </h1>
          </div>
          <p className="max-w-xl text-base leading-7 text-[#402166] sm:text-lg">
            DogeChef is the splashiest Solana meme bistro—an experimental playground where lightning-fast tech powers community-only banquets, collectible recipes, and reward-fueled mayhem.
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
            Why DogeChef
          </p>
          <h2 className="mt-6 text-3xl font-black uppercase sm:text-4xl">
            Culinary-grade mischief meets Solana-grade velocity.
          </h2>
          <p className="mt-6 text-base leading-7 text-[#402166] sm:text-lg">
            Each smart contract is a kitchen gadget tuned for maximum delight—crafting meme-forward staking, narrative rewards, and community grants that keep our flavor-verse bubbling.
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
              Promise of the Meme Bistro
            </p>
            <h2 className="text-3xl font-black uppercase sm:text-4xl">
              Transparent token recipes, open-source kitchen antics.
            </h2>
            <p className="text-base leading-7 text-[#402166]">
              Follow every Solana transaction in our public dashboard, audit the community treasury, and co-create dishes through the Gastronaut Guild. Your vote can trigger new story arcs, quests, or charitable drops.
            </p>
            <Link
              href="/roadmap"
              className="inline-flex items-center gap-3 rounded-full border-4 border-[#2b1c4a] bg-[#ff6b6b] px-5 py-3 text-sm font-black uppercase tracking-[0.3em] text-white shadow-[6px_6px_0_#2b1c4a] transition-transform duration-300 hover:-translate-y-1 hover:bg-[#ff3b81]"
            >
              Explore Roadmap ↗
            </Link>
          </div>
          <div className="rounded-3xl border-4 border-[#2b1c4a] bg-[#fffdf2]/90 p-8 text-center shadow-[8px_8px_0_#ffb347]">
            <p className="text-lg font-black uppercase tracking-[0.3em] text-[#ff6b6b]">Community Whisk</p>
            <p className="mt-4 text-sm leading-6 text-[#402166]">
              Daily lore recaps, kitchen standups, and meme jam sessions keep the experience fresh. Bring your gifs, your recipes, and your unstoppable optimism.
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
