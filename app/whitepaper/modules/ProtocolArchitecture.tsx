import { WhitepaperSection } from "./WhitepaperSection";

export function ProtocolArchitecture() {
  return (
    <WhitepaperSection
      title="Protocol Architecture"
      subtitle="Composable Solana kitchen"
    >
      <p>
        Smart contracts are written in Rust using Solana Program Library standards. Core components include the Liquidity Cauldron
        AMM, a recipe NFT minter, and a governance module that plugs into Realms for rapid proposal execution.
      </p>
      <p>
        Every module publishes telemetry to an open Grafana board, letting the community monitor TVL, treasury outflows, and
        staking participation. Upgrades are staged on devnet, reviewed by security partners, and promoted through a timelocked
        deployer controlled by the DAO.
      </p>
    </WhitepaperSection>
  );
}
