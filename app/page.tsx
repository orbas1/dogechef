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
    <div className="relative overflow-hidden bg-white">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-20 pt-24 lg:flex-row lg:items-center lg:px-10 lg:pb-28 lg:pt-32">
        <div className="flex-1 space-y-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-orange-600 shadow-sm">
            Launching Soon · Q2 2025
          </span>
          <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl">
            Flavor the Blockchain.<br />Lead the Meme Renaissance.
          </h1>
          <p className="max-w-xl text-lg leading-8 text-slate-600">
            DogeChef blends celestial cuisine with defi mastery, orchestrating hyper-modern experiences that reward community passion and collective imagination.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/whitepaper"
              className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white shadow-lg shadow-orange-200/70 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-orange-600"
            >
              Read Whitepaper
            </Link>
            <Link
              href="/tokenomics"
              className="inline-flex items-center justify-center rounded-full border border-orange-200 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-orange-600 transition-colors duration-300 hover:bg-orange-50"
            >
              View Tokenomics
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {heroHighlights.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-orange-100 bg-white p-6 text-left shadow-sm"
              >
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
                  {item.label}
                </h3>
                <p className="mt-3 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-center lg:justify-end">
          <div className="relative h-[420px] w-[420px] max-w-full">
            <div className="absolute inset-0 rounded-[36px] border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-orange-100 shadow-[0_20px_60px_rgba(249,115,22,0.18)]"></div>
            <div className="absolute inset-10 rounded-[26px] bg-orange-100/60 blur-3xl" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="DogeChef emblem"
                width={260}
                height={260}
                className="drop-shadow-[0_15px_35px_rgba(249,115,22,0.35)]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24 lg:px-10">
        <div className="grid gap-8 rounded-4xl border border-orange-100 bg-orange-50/70 p-10 shadow-sm sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-2 text-center">
              <p className="text-4xl font-semibold text-orange-600">{stat.value}</p>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-500">
            Why DogeChef
          </p>
          <h2 className="mt-6 text-3xl font-semibold text-slate-900 sm:text-4xl">
            Culinary-grade innovation backed by community flavor scientists.
          </h2>
          <p className="mt-6 text-lg text-slate-600">
            Every DogeChef recipe is engineered for sustainability, entertainment, and cross-chain impact, ensuring that the meme never burns out.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featureCards.map((card) => (
            <article
              key={card.title}
              className="group h-full rounded-3xl border border-orange-100 bg-white p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(249,115,22,0.18)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-lg font-semibold uppercase tracking-[0.3em] text-orange-600">
                ✦
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">{card.title}</h3>
              <p className="mt-4 text-sm leading-6 text-slate-600">{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mb-28 w-full max-w-6xl rounded-[38px] border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-orange-100 px-6 py-16 shadow-[0_25px_70px_rgba(249,115,22,0.16)] lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-500">
              The DogeChef Promise
            </p>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Decentralized delight with transparent, verifiable ingredients.
            </h2>
            <p className="text-lg text-slate-600">
              Track treasury reserves, review smart-contract audits, and participate in seasonal governance to help DogeChef curate the ultimate menu for DeFi enjoyment.
            </p>
            <Link
              href="/roadmap"
              className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-orange-600 transition-transform duration-300 hover:translate-x-1"
            >
              Explore Roadmap <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="relative isolate flex flex-col gap-5">
            <div className="absolute -inset-6 -z-10 rounded-[32px] bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.16),transparent_65%)]" />
            <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                Audit Status
              </h3>
              <p className="mt-3 text-lg font-semibold text-orange-600">Final review underway</p>
              <p className="mt-2 text-sm text-slate-600">Smart contracts undergoing multi-layer inspections before mint.</p>
            </div>
            <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                Community Pulse
              </h3>
              <p className="mt-3 text-lg font-semibold text-orange-600">18k+ gastronomes</p>
              <p className="mt-2 text-sm text-slate-600">Chefs, traders, and culture curators remixing memes and menus daily.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
