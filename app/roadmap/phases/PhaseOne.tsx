import { RoadmapPhaseCard } from "../components/RoadmapPhaseCard";

export function PhaseOne() {
  return (
    <RoadmapPhaseCard
      title="Phase I · Mise en Place"
      timeframe="Q1–Q2 2025"
      progress="Progress 1 / 4"
      highlights={[
        "Community tastings, whitelist curation, and DAO bootstrapping",
        "Smart contract audits and Solana devnet stress tests",
        "Recipe NFT concept art drop unlocking guild selection",
      ]}
    />
  );
}
