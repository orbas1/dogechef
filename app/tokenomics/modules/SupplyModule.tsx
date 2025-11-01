import { TokenSectionCard } from "../components/TokenSectionCard";

export function SupplyModule() {
  return (
    <TokenSectionCard
      title="Total Supply"
      metric="1,000,000,000 DOGECHEF"
      accent="Hard cap"
    >
      <p>
        Minted once at launch. Ten percent (100,000,000 DOGECHEF) remains with the creator wallet, subject to a three-year linear
        vest for creative development and emergency response funds.
      </p>
      <p>
        No future mint functions exist. Supply adjustments can only occur through deflationary events ratified by governance,
        such as token burns linked to seasonal quests.
      </p>
    </TokenSectionCard>
  );
}
