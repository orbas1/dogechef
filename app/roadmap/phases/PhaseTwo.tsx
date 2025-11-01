import { RoadmapPhaseCard } from "../components/RoadmapPhaseCard";

export function PhaseTwo() {
  return (
    <RoadmapPhaseCard
      title="Stage 2 — NFT Release"
      timeframe="Post-launch"
      progress="Next"
      highlights={[
        "Community collectible NFTs go live with a whitelist slot for Kitchen members.",
        "Limited edition merch NFTs reward early hype and fuel secondary market fun.",
        "NFT ownership ties into future utility across the game and AI tools.",
      ]}
    />
  );
}
