import { RoadmapPhaseCard } from "../components/RoadmapPhaseCard";

export function PhaseThree() {
  return (
    <RoadmapPhaseCard
      title="Stage 3 — Mobile Runner Game"
      timeframe="Build phase"
      progress="Planned"
      highlights={[
        "Launch a fun mobile runner that uses DOGE CHEF NFT skins and rewards tied to the token.",
        "Integrate leaderboard perks and meme challenges sourced from the community.",
        "Use game updates to keep momentum between major token releases.",
      ]}
    />
  );
}
