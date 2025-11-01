import { TokenSectionCard } from "../components/TokenSectionCard";

export function LiquidityModule() {
  return (
    <TokenSectionCard
      title="Liquidity Pool"
      metric="900,000,000 DOGECHEF"
      accent="90% of supply"
    >
      <p>
        Deposited directly into a Solana-based AMM pair with USDC at genesis. LP tokens are time-locked for twelve months to
        signal commitment and reduce launch volatility.
      </p>
      <p>
        Trading fees loop back into weekly kitchen buy-backs and community reward programs, amplifying liquidity depth and
        meme-fueled utility quests.
      </p>
    </TokenSectionCard>
  );
}
