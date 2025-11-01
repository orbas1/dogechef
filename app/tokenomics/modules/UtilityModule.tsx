import { TokenSectionCard } from "../components/TokenSectionCard";

export function UtilityModule() {
  return (
    <TokenSectionCard
      title="Fee mechanics"
      metric="2% transaction fee"
      accent="Configured by governance"
    >
      <p>
        Every buy and sell routes 2% of the trade: 1.2% tops up liquidity and 0.8% flows to the treasury for marketing, reinvestment and airdrops. Splits can evolve with community governance.
      </p>
      <p>
        Treasury spend is proposed through the community hub and executed via multisig once signers approve. Fee performance and adjustments will be documented in the whitepaper and public dashboards.
      </p>
    </TokenSectionCard>
  );
}
