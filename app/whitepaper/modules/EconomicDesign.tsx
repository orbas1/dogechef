import { WhitepaperSection } from "./WhitepaperSection";

export function EconomicDesign() {
  return (
    <WhitepaperSection
      title="Economic Design"
      subtitle="Tokenomics for flavor velocity"
    >
      <p>
        Initial liquidity receives 900,000,000 DOGECHEF tokens paired with USDC. Liquidity provider fees recycle into weekly
        buy-backs that reward staking participants and restock the community treasury for event production.
      </p>
      <p>
        The 10% creator allocation vests linearly over three years and can only be used for lore development, high-impact
        partnerships, or emergency liquidity support as approved by DAO vote. No additional supply can be minted.
      </p>
    </WhitepaperSection>
  );
}
