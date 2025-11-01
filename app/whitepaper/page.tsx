import Link from "next/link";

import { PageHeader } from "@/components/PageHeader";

import { CommunityEcosystem } from "./modules/CommunityEcosystem";
import { EconomicDesign } from "./modules/EconomicDesign";
import { ExecutiveSummary } from "./modules/ExecutiveSummary";
import { ProtocolArchitecture } from "./modules/ProtocolArchitecture";
import { RiskMitigation } from "./modules/RiskMitigation";

const referenceLinks = [
  { label: "Download Litepaper", href: "#" },
  { label: "Tokenomics", href: "/tokenomics" },
  { label: "Roadmap", href: "/roadmap" },
];

export default function WhitepaperPage() {
  return (
    <div className="pb-28">
      <PageHeader
        eyebrow="Whitepaper"
        title="The DogeChef Meme Bistro Whitepaper"
        description="Discover how a Solana-powered meme economy turns culinary chaos into sustainable on-chain value. This document covers architecture, economics, and community rituals behind the 1B supply launch."
        actions={
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-full border-4 border-[#2b1c4a] bg-[#ff6b6b] px-6 py-3 text-sm font-black uppercase tracking-[0.3em] text-white shadow-[6px_6px_0_#2b1c4a] transition-transform duration-300 hover:-translate-y-1 hover:bg-[#ff3b81]"
          >
            Download PDF
          </Link>
        }
      />

      <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-[1.35fr_0.65fr] lg:px-10">
        <div className="space-y-8">
          <ExecutiveSummary />
          <ProtocolArchitecture />
          <EconomicDesign />
          <CommunityEcosystem />
          <RiskMitigation />
        </div>
        <aside className="space-y-6 rounded-[36px] border-4 border-[#2b1c4a] bg-[#fffdf2]/90 p-8 text-[#2b1c4a] shadow-[8px_8px_0_#ffb347]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#ff6b6b]">Quick Reference</p>
            <p className="mt-3 text-sm leading-6 text-[#402166]">
              Keep these resources handy as you tour the meme bistro. Each link expands on the sections inside the whitepaper and
              points to open-source repositories maintained by the community guilds.
            </p>
          </div>
          <ul className="space-y-4 text-sm font-black uppercase tracking-[0.25em]">
            {referenceLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="flex items-center justify-between rounded-3xl border-4 border-[#2b1c4a] bg-white px-5 py-3 text-[#2b1c4a] shadow-[6px_6px_0_#ffb347] transition-transform duration-300 hover:-translate-y-1 hover:bg-[#fff3a5]"
                >
                  {link.label}
                  <span aria-hidden>↗</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="rounded-3xl border-4 border-[#2b1c4a] bg-white px-6 py-5 text-sm text-[#402166] shadow-[6px_6px_0_#ffb347]">
            <p className="font-black uppercase tracking-[0.3em] text-[#ff6b6b]">Solana Commitment</p>
            <p className="mt-2">
              Low fees and lightning finality mean more experiments, more quests, and more chances to feed the community treasury
              without friction.
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}
