import { PageHeader } from "@/components/PageHeader";

import { LiquidityModule } from "./modules/LiquidityModule";
import { SupplyModule } from "./modules/SupplyModule";
import { UtilityModule } from "./modules/UtilityModule";

const quickFacts = [
  {
    label: "Chain",
    value: "Solana",
    detail: "Built for lightning-fast meme trades with negligible fees.",
  },
  {
    label: "Creator Reserve",
    value: "10%",
    detail: "Time-locked for storytelling, partnerships, and stability ops.",
  },
  {
    label: "Liquidity",
    value: "90%",
    detail: "Permanent deposit into the Liquidity Cauldron AMM pair.",
  },
];

export default function TokenomicsPage() {
  return (
    <div className="pb-28">
      <PageHeader
        eyebrow="Tokenomics"
        title="Token design for infinite meme service"
        description="Learn how the 1B DOGECHEF supply powers Solana-native liquidity, long-term creator incentives, and a reward system designed for playful experimentation."
      />
      <section className="mx-auto grid w-full max-w-6xl gap-8 px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
        <div className="space-y-8">
          <SupplyModule />
          <LiquidityModule />
          <UtilityModule />
        </div>
        <aside className="flex flex-col gap-6">
          <div className="rounded-[36px] border-4 border-[#2b1c4a] bg-[#fffdf2]/90 p-8 text-[#2b1c4a] shadow-[8px_8px_0_#ffb347]">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#ff6b6b]">Quick Facts</p>
            <div className="mt-6 space-y-5">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="space-y-1">
                  <p className="text-xs font-black uppercase tracking-[0.35em] text-[#2b1c4a]">{fact.label}</p>
                  <p className="text-2xl font-black uppercase tracking-[0.2em] text-[#ff6b6b]">{fact.value}</p>
                  <p className="text-sm text-[#402166]">{fact.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[36px] border-4 border-[#2b1c4a] bg-white p-8 text-sm text-[#402166] shadow-[8px_8px_0_#ffb347]">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#ff6b6b]">Treasury Streams</p>
            <ul className="mt-4 space-y-2">
              <li>• LP fees recycled into staking and quest rewards.</li>
              <li>• Merch drops and IRL events contributing to community grants.</li>
              <li>• NFT marketplace royalties routed to liquidity reinforcement.</li>
            </ul>
          </div>
        </aside>
      </section>
    </div>
  );
}
