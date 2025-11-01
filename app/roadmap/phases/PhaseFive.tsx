import { RoadmapPhaseCard } from "../components/RoadmapPhaseCard";

export function PhaseFive() {
  return (
    <RoadmapPhaseCard
      title="Stage 5 — Blockchain Creation"
      timeframe="Long-term"
      progress="Vision"
      highlights={[
        "Explore building a dedicated DOGE CHEF chain or layer for ecosystem utilities.",
        "Prototype native tooling that keeps fees low and the culture on-chain.",
        "Run community governance to map milestones before any mainnet work begins.",
      ]}
    />
  );
}
