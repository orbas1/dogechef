import { TokenSectionCard } from "../components/TokenSectionCard";

export function UtilityModule() {
  return (
    <TokenSectionCard
      title="Utility Flywheel"
      metric="Stakers earn weekly boosts"
      accent="Chef quests"
    >
      <p>
        Staked DOGECHEF accrues XP multipliers redeemable for rare recipe NFTs, governance power-ups, and discounts on IRL meme
        dinners. XP tiers refresh each season to keep participation lively.
      </p>
      <p>
        Liquidity providers gain bonus raffle tickets for Solana ecosystem collaborations, while creators can pitch limited-time
        menu drops that share revenue with the treasury.
      </p>
    </TokenSectionCard>
  );
}
