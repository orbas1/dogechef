import { RoadmapPhaseCard } from "../components/RoadmapPhaseCard";

export function PhaseTwo() {
  return (
    <RoadmapPhaseCard
      title="Phase II · Fire & Flavor"
      timeframe="Q3 2025"
      progress="Progress 2 / 4"
      highlights={[
        "Mainnet token launch with 900M DOGECHEF in the liquidity cauldron",
        "Gastronaut Guild live with meme quest streaming and lore voting",
        "Pop-up metaverse diners partnering with Solana creators",
      ]}
    />
  );
}
