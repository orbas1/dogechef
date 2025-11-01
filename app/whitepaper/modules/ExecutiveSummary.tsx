import { WhitepaperSection } from "./WhitepaperSection";

export function ExecutiveSummary() {
  return (
    <WhitepaperSection
      title="Executive Summary"
      subtitle="Meme-first protocol blueprint"
    >
      <p>
        DogeChef is a Solana-native meme economy that merges culinary storytelling with high-performance DeFi. Our mission is to
        orchestrate joyful token experiences, where collectible recipes, narrative quests, and liquidity loops keep the
        community energized.
      </p>
      <p>
        The launch supply is capped at <strong>1,000,000,000 DOGECHEF</strong>. Ten percent is reserved by the founding chef for
        long-term creative fuel; the remaining ninety percent is injected directly into the on-chain liquidity pool, ensuring a
        playful yet fair launch environment.
      </p>
    </WhitepaperSection>
  );
}
