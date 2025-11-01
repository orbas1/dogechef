import { PageHeader } from "@/components/PageHeader";

import { LiquidityModule } from "./modules/LiquidityModule";
import { SupplyModule } from "./modules/SupplyModule";
import { UtilityModule } from "./modules/UtilityModule";

const quickFacts = [
  {
    label: "Chain",
    value: "Solana",
    detail: "Raydium launch with lightning-fast swaps and low fees.",
  },
  {
    label: "Total Supply",
    value: "1B",
    detail: "Minted once. No extra mint functions.",
  },
  {
    label: "Fee",
    value: "2%",
    detail: "1.2% to liquidity, 0.8% to treasury operations.",
  },
];

export default function TokenomicsPage() {
  return (
    <div className="pb-28">
      <PageHeader
        eyebrow="Tokenomics"
        title="Simple tokenomics, transparent flows"
        description="1,000,000,000 DOGE CHEF tokens. 90% to Raydium liquidity, 10% to the creator fund with a public breakdown. A 2% transaction fee keeps liquidity topped up and the treasury funded."
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
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#ff6b6b]">Creator fund split</p>
            <ul className="mt-4 space-y-2">
              <li>• 5% reinvestment for development and ecosystem support.</li>
              <li>• 3% marketing and partnerships.</li>
              <li>• 2% creator income and operations.</li>
            </ul>
            <p className="mt-4 text-xs uppercase tracking-[0.3em] text-[#ff6b6b]">Multisig recommended before launch.</p>
          </div>
        </aside>
      </section>
    </div>
  );
}
