import { RoadmapPhaseCard } from "../components/RoadmapPhaseCard";

export function PhaseFour() {
  return (
    <RoadmapPhaseCard
      title="Stage 4 — The Kitchen AI"
      timeframe="In development"
      progress="Future"
      highlights={[
        "Release a lightweight AI toolkit for marketers and blockchain research.",
        "Ship analytics dashboards, token pulse snapshots and campaign helpers.",
        "Use community feedback to decide which modules ship first.",
      ]}
    />
  );
}
