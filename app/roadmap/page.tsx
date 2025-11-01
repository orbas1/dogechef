import { PageHeader } from "@/components/PageHeader";

const phases = [
  {
    title: "Phase I · Mise en Place",
    timeframe: "Q1–Q2 2025",
    highlights: [
      "Community tastings, whitelist curation, and governance launch",
      "Smart contract audits and multi-chain infrastructure setup",
      "Initial NFT utensil drop granting staking boosts",
    ],
  },
  {
    title: "Phase II · Fire & Flavor",
    timeframe: "Q3 2025",
    highlights: [
      "Mainnet token launch with synchronized cross-chain LP",
      "Gastronaut Guild live with on-chain proposal streaming",
      "Pop-up culinary metaverse experiences in partnership with top creators",
    ],
  },
  {
    title: "Phase III · Cosmic Service",
    timeframe: "Q4 2025",
    highlights: [
      "Expansion to Layer-2 loyalty passes and multi-lingual content",
      "Chef residency program and real-world charitable banquets",
      "Dynamic staking tiers tied to seasonal narrative arcs",
    ],
  },
  {
    title: "Phase IV · Infinite Kitchen",
    timeframe: "2026+",
    highlights: [
      "Open-source recipe engine for partner communities",
      "Interoperable identity and avatar integrations",
      "Holographic live events bridging AR and IRL dining",
    ],
  },
];

export default function RoadmapPage() {
  return (
    <div className="pb-28">
      <PageHeader
        eyebrow="Roadmap"
        title="Charting the DogeChef galaxy of taste and token utility"
        description="Every milestone expands the fusion of culinary joy and on-chain innovation. Follow along as we season the metaverse with experiences worth savoring."
      />
      <section className="mx-auto w-full max-w-4xl space-y-10 px-6 lg:px-10">
        {phases.map((phase, index) => (
          <article
            key={phase.title}
            className="relative overflow-hidden rounded-[32px] border border-slate-800/60 bg-gradient-to-br from-slate-950/65 via-slate-900/50 to-slate-950/70 p-8 shadow-[0_28px_80px_rgba(15,23,42,0.5)] backdrop-blur"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(68,249,255,0.14),transparent_70%),radial-gradient(circle_at_75%_25%,rgba(159,80,255,0.18),transparent_70%)]" />
            <div className="relative space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-slate-50">{phase.title}</h2>
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">
                  {phase.timeframe}
                </span>
              </div>
              <ul className="space-y-3 text-sm leading-6 text-slate-200">
                {phase.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-gradient-to-r from-sky-400 to-fuchsia-500" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between pt-4 text-xs uppercase tracking-[0.3em] text-slate-400">
                <span>Progress {index + 1} / {phases.length}</span>
                <span>Next milestone locked</span>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
