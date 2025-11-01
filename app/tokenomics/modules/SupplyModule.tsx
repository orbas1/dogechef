import { TokenSectionCard } from "../components/TokenSectionCard";

export function SupplyModule() {
  return (
    <TokenSectionCard
      title="Total Supply"
      metric="1,000,000,000 DOGECHEF"
      accent="Hard cap"
    >
      <p>
        Fixed supply minted at launch. 900,000,000 DOGE CHEF (90%) is paired with SOL/USDC on Raydium. 100,000,000 DOGE CHEF (10%) sits in the creator fund wallet for reinvestment, marketing and operations.
      </p>
      <p>
        No extra mint functions or burn gimmicks are planned. Any future changes to supply must pass governance and be documented in an updated whitepaper.
      </p>
    </TokenSectionCard>
  );
}
