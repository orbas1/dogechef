import { RoadmapPhaseCard } from "../components/RoadmapPhaseCard";

export function PhaseFour() {
  return (
    <RoadmapPhaseCard
      title="Phase IV · Infinite Kitchen"
      timeframe="2026+"
      progress="Progress 4 / 4"
      highlights={[
        "Open-source recipe engine for allied communities",
        "Interoperable identity and avatar integrations across memeverses",
        "Holographic live events blending AR overlays with IRL tastings",
      ]}
    />
  );
}
