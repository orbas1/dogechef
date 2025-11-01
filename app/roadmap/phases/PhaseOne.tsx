import { RoadmapPhaseCard } from "../components/RoadmapPhaseCard";

export function PhaseOne() {
  return (
    <RoadmapPhaseCard
      title="Stage 1 — DEX Launch"
      timeframe="30 Nov"
      progress="Live"
      highlights={[
        "DOGE CHEF token drops on Raydium with SOL/USDC liquidity added.",
        "Trading opens with 90% of the supply in the pool and transparent creator fund details shared.",
        "Community hub pushes launch comms, memes and safety reminders.",
      ]}
    />
  );
}
