import { TokenSectionCard } from "../components/TokenSectionCard";

export function LiquidityModule() {
  return (
    <TokenSectionCard
      title="Liquidity Pool"
      metric="900,000,000 DOGECHEF"
      accent="90% of supply"
    >
      <p>
        Added to Raydium on 30 Nov with a published SOL/USDC pairing plan. Liquidity is seeded from launch to cut slippage and support fast trading.
      </p>
      <p>
        Swap fees plus the 1.2% tax allocation top up liquidity over time. Treasury updates keep the community informed about pool health and any changes.
      </p>
    </TokenSectionCard>
  );
}
