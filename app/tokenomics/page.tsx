import { PageHeader } from "@/components/PageHeader";

const distribution = [
  {
    title: "Community Reserve",
    percentage: "42%",
    description: "Seasonal drops, liquidity incentives, and Gastronaut Guild grants.",
  },
  {
    title: "Public Sale",
    percentage: "28%",
    description: "Dutch-auction style launch with layered bonding curves for fair entry.",
  },
  {
    title: "Ecosystem Vault",
    percentage: "18%",
    description: "Partnership initiatives, cross-chain expansion, and culinary pop-ups.",
  },
  {
    title: "Team & Advisors",
    percentage: "8%",
    description: "Vested over 24 months with transparent monthly unlock dashboards.",
  },
  {
    title: "Charity Mise",
    percentage: "4%",
    description: "Supporting global food relief efforts and culinary education programs.",
  },
];

const metrics = [
  {
    label: "Total Supply",
    value: "888,000 DOGECHEF",
    detail: "Hard-capped supply seasoned for scarcity and long-term flavor.",
  },
  {
    label: "Initial Liquidity",
    value: "$2.8M",
    detail: "Locked LP pairs on Ethereum and Base with audited multi-sig control.",
  },
  {
    label: "Staking APY",
    value: "68% intro",
    detail: "Dynamic yield that adjusts with treasury inflows and event revenue.",
  },
];

export default function TokenomicsPage() {
  return (
    <div className="pb-28">
      <PageHeader
        eyebrow="Tokenomics"
        title="Balanced token distribution for flavor-rich sustainability"
        description="DogeChef's economics are engineered to empower community creativity, reward long-term believers, and accelerate culinary innovation across Web3."
      />
      <section className="mx-auto w-full max-w-5xl space-y-12 px-6 lg:px-10">
        <div className="grid gap-6 sm:grid-cols-2">
          {distribution.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-800/60 bg-slate-900/60 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.45)] backdrop-blur"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold text-slate-50">{item.title}</h3>
                <span className="text-3xl font-semibold text-sky-200">{item.percentage}</span>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="rounded-[32px] border border-slate-800/60 bg-gradient-to-br from-slate-950/60 via-slate-900/50 to-slate-950/70 p-10 shadow-[0_30px_90px_rgba(15,23,42,0.5)] backdrop-blur">
          <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-300">
            Core Metrics
          </h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  {metric.label}
                </p>
                <p className="text-2xl font-semibold text-sky-100">{metric.value}</p>
                <p className="text-sm text-slate-300">{metric.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
