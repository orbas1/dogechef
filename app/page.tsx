import Image from "next/image";
import Link from "next/link";

const heroHighlights = [
  {
    label: "Community Kitchens",
    description: "Fusion events, chef battles, and live token drops for holders worldwide.",
  },
  {
    label: "Sonic-Speed Rewards",
    description: "Automated liquidity simmering with deflationary boosts every epoch.",
  },
  {
    label: "Gastronaut Guild",
    description: "A DAO-led brigade curating missions that blend culture, cuisine, and crypto.",
  },
];

const featureCards = [
  {
    title: "Aurora Liquidity Engine",
    description:
      "Our adaptive AMM recipes balance volatility with layered staking sauces, keeping the treasury flavorful and agile.",
  },
  {
    title: "Chef's Table Governance",
    description:
      "Token-weighted proposals elevate the best community ideas, letting top chefs orchestrate limited-time culinary quests.",
  },
  {
    title: "Multi-Chain Mise en Place",
    description:
      "Bridged utilities, cross-chain incentives, and NFT plating that travels with you across the Web3 cosmos.",
  },
];

const stats = [
  { value: "888K", label: "Genesis Supply" },
  { value: "42%", label: "Community Reserve" },
  { value: "0%", label: "Team Tax" },
  { value: "2025", label: "Launch Season" },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-20 pt-24 lg:flex-row lg:items-center lg:px-10 lg:pb-28 lg:pt-32">
        <div className="flex-1 space-y-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-slate-900/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-sky-100 shadow-[0_0_30px_rgba(68,249,255,0.18)]">
            Launching Soon · Q2 2025
          </span>
          <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-slate-50 sm:text-6xl">
            Flavor the Blockchain.<br />Lead the Meme Renaissance.
          </h1>
          <p className="max-w-xl text-lg leading-8 text-slate-300">
            DogeChef blends celestial cuisine with defi mastery, orchestrating hyper-modern experiences that reward community passion and collective imagination.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/whitepaper"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-400 via-fuchsia-500 to-amber-400 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-950 shadow-[0_10px_40px_rgba(68,249,255,0.35)] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(159,80,255,0.45)]"
            >
              Read Whitepaper
            </Link>
            <Link
              href="/tokenomics"
              className="inline-flex items-center justify-center rounded-full border border-slate-700/60 bg-slate-900/60 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-100 transition-colors duration-300 hover:border-sky-400/60 hover:text-sky-100"
            >
              View Tokenomics
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {heroHighlights.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-slate-800/60 bg-slate-900/50 p-6 text-left shadow-[0_12px_50px_rgba(15,23,42,0.35)] backdrop-blur"
              >
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-100">
                  {item.label}
                </h3>
                <p className="mt-3 text-sm text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-center lg:justify-end">
          <div className="relative h-[420px] w-[420px] max-w-full">
            <div className="absolute inset-0 rounded-[36px] border border-sky-400/40 bg-gradient-to-br from-slate-900/40 via-slate-900/10 to-slate-900/50 shadow-[0_25px_80px_rgba(68,249,255,0.22)] backdrop-blur-2xl"></div>
            <div className="absolute inset-8 rounded-[28px] bg-[radial-gradient(circle_at_30%_20%,rgba(68,249,255,0.25),transparent_60%),radial-gradient(circle_at_75%_30%,rgba(159,80,255,0.28),transparent_70%),radial-gradient(circle_at_50%_80%,rgba(255,178,77,0.22),transparent_70%)] blur-xl" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/logo.svg"
                alt="DogeChef emblem"
                width={260}
                height={260}
                className="drop-shadow-[0_20px_40px_rgba(68,249,255,0.35)]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24 lg:px-10">
        <div className="grid gap-8 rounded-4xl border border-slate-800/60 bg-slate-950/40 p-10 shadow-[0_24px_70px_rgba(15,23,42,0.45)] backdrop-blur-lg sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-2 text-center">
              <p className="text-4xl font-semibold text-sky-100">{stat.value}</p>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
            Why DogeChef
          </p>
          <h2 className="mt-6 text-3xl font-semibold text-slate-50 sm:text-4xl">
            Culinary-grade innovation backed by community flavor scientists.
          </h2>
          <p className="mt-6 text-lg text-slate-300">
            Every DogeChef recipe is engineered for sustainability, entertainment, and cross-chain impact, ensuring that the meme never burns out.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featureCards.map((card) => (
            <article
              key={card.title}
              className="group h-full rounded-3xl border border-slate-800/60 bg-slate-900/60 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.4)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(68,249,255,0.25)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400/30 via-fuchsia-500/30 to-amber-400/30 text-lg font-semibold uppercase tracking-[0.3em] text-sky-100">
                ✦
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-50">{card.title}</h3>
              <p className="mt-4 text-sm leading-6 text-slate-300">{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mb-28 w-full max-w-6xl rounded-[38px] border border-slate-800/70 bg-gradient-to-br from-slate-950/70 via-slate-900/50 to-slate-950/80 px-6 py-16 shadow-[0_30px_80px_rgba(15,23,42,0.5)] backdrop-blur lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
              The DogeChef Promise
            </p>
            <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
              Decentralized delight with transparent, verifiable ingredients.
            </h2>
            <p className="text-lg text-slate-300">
              Track treasury reserves, review smart-contract audits, and participate in seasonal governance to help DogeChef curate the ultimate menu for DeFi enjoyment.
            </p>
            <Link
              href="/roadmap"
              className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-sky-100 transition-transform duration-300 hover:translate-x-1"
            >
              Explore Roadmap <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="relative isolate flex flex-col gap-5">
            <div className="absolute -inset-6 -z-10 rounded-[32px] bg-[radial-gradient(circle_at_top,rgba(68,249,255,0.16),transparent_65%)]" />
            <div className="rounded-3xl border border-slate-800/60 bg-slate-900/60 p-6 backdrop-blur">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-300">
                Audit Status
              </h3>
              <p className="mt-3 text-lg font-semibold text-sky-100">Final review underway</p>
              <p className="mt-2 text-sm text-slate-400">Smart contracts undergoing multi-layer inspections before mint.</p>
            </div>
            <div className="rounded-3xl border border-slate-800/60 bg-slate-900/60 p-6 backdrop-blur">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-300">
                Community Pulse
              </h3>
              <p className="mt-3 text-lg font-semibold text-sky-100">18k+ gastronomes</p>
              <p className="mt-2 text-sm text-slate-400">Chefs, traders, and culture curators remixing memes and menus daily.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
