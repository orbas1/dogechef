import { WhitepaperSection } from "./WhitepaperSection";

export function RiskMitigation() {
  return (
    <WhitepaperSection
      title="Risk Mitigation"
      subtitle="Defense-in-depth"
    >
      <p>
        External audits precede every major release, complemented by an always-on Immunefi bounty. Treasury assets are secured in
        multi-sig vaults with role-based access and 48-hour community notice for any withdrawal above 1% of reserves.
      </p>
      <p>
        A catastrophe playbook includes automated circuit breakers, cross-chain insurance partners, and a communications squad to
        deliver real-time transparency during abnormal events.
      </p>
    </WhitepaperSection>
  );
}
