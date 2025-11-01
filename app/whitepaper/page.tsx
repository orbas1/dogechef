import Link from "next/link";

import { PageHeader } from "@/components/PageHeader";

const tocSections = [
  {
    number: "1.",
    title: "Executive Summary",
    summary: "High-level overview of DOGE CHEF — Solana memecoin, 1B supply, community-first roadmap.",
  },
  {
    number: "2.",
    title: "Project Vision & Community Ethos",
    summary: "Memes first, moon talk second. Public hub for hype, Kitchen for insiders, all powered by culture.",
  },
  {
    number: "3.",
    title: "Token Overview",
    summary: "Chain choice, ticker, supply, launch timing and core utility pillars.",
  },
  {
    number: "4.",
    title: "Tokenomics & Allocation",
    summary: "Breakdown of the 90% liquidity share and 10% creator fund split (5% reinvestment, 3% marketing, 2% ops).",
  },
  {
    number: "5.",
    title: "Fee Structure & Mechanics",
    summary: "Details on the 2% transaction fee and how liquidity and treasury allocations can evolve.",
  },
  {
    number: "6.",
    title: "Liquidity & Launch Plan (Raydium DEX)",
    summary: "Stage 1 plan for Raydium: liquidity pairing, safety notes, comms cadence and listing checklist.",
  },
  {
    number: "7.",
    title: "Roadmap (Stages 1–5)",
    summary: "Snapshot of DEX launch, NFTs, mobile runner, Kitchen AI and long-term blockchain creation.",
  },
  {
    number: "8.",
    title: "NFTs & Utility (Stage 2)",
    summary: "Collectible drops, whitelist access for Kitchen members and merch NFT plans.",
  },
  {
    number: "9.",
    title: "Game Design Overview (Stage 3)",
    summary: "Mobile runner concept, NFT skin integration, rewards and community challenge loops.",
  },
  {
    number: "10.",
    title: "The Kitchen AI — Concept & Modules (Stage 4)",
    summary: "Lightweight analytics, campaign helpers and token pulse dashboards for marketers and researchers.",
  },
  {
    number: "11.",
    title: "Blockchain Creation Roadmap (Stage 5)",
    summary: "Ambition stage: dedicated chain or layer, research milestones, governance checkpoints.",
  },
  {
    number: "12.",
    title: "Governance & Treasury Management",
    summary: "Multisig control, voting flow, proposal templates and transparency reports.",
  },
  {
    number: "13.",
    title: "Security & Audits (contract, multisig)",
    summary: "Audit partners, bounty programs and security sign-off process before mainnet updates.",
  },
  {
    number: "14.",
    title: "Legal & Compliance Notes (disclaimer)",
    summary: "Not financial advice, jurisdictional checks, and how final counsel approval will be documented.",
  },
  {
    number: "15.",
    title: "Community Programs & Rewards",
    summary: "Meme bounties, whitelist mechanics, contributor rewards and hype campaigns.",
  },
  {
    number: "16.",
    title: "Team & Advisors",
    summary: "Roles, responsibilities and recommended multisig signers.",
  },
  {
    number: "17.",
    title: "Token Contract & Verification Details",
    summary: "Addresses, verification links and how to confirm authenticity on official channels.",
  },
  {
    number: "18.",
    title: "FAQs",
    summary: "Quick answers for buyers, community members and partners.",
  },
  {
    number: "19.",
    title: "Appendix",
    summary: "Tables, glossary, contact information and any supporting references.",
  },
];

const finalNotes = [
  "Fill sections 1–5 of the whitepaper before launch and expand the rest with community feedback.",
  "Set up multisig controls for the creator fund and schedule a contract audit ahead of the Raydium listing.",
  "Publish the SOL/USDC liquidity pairing plan with the launch announcement.",
  "Launch meme bounties and whitelist details to drive engagement.",
  "Share verified contract addresses only on dogechef.online and official channels to reduce scam risk.",
];

export default function WhitepaperPage() {
  return (
    <div className="pb-28">
      <PageHeader
        eyebrow="Whitepaper"
        title="DOGE CHEF whitepaper outline"
        description="Use this table of contents to build the full whitepaper. It mirrors the roadmap: launch on Raydium, roll out NFTs, game, AI toolkit and explore a future chain. Keep it simple, transparent and community-driven."
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
        <div className="space-y-6">
          <div className="rounded-[36px] border-4 border-[#2b1c4a] bg-white p-8 text-[#2b1c4a] shadow-[8px_8px_0_#ffb347]">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#ff6b6b]">Table of contents</p>
            <ol className="mt-6 space-y-4 text-sm leading-6">
              {tocSections.map((section) => (
                <li key={section.title} className="flex gap-3">
                  <span className="text-sm font-black uppercase tracking-[0.3em] text-[#ff6b6b]">{section.number}</span>
                  <div>
                    <p className="text-base font-black uppercase tracking-[0.2em]">{section.title}</p>
                    <p className="mt-1 text-[#402166]">{section.summary}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <aside className="space-y-6 rounded-[36px] border-4 border-[#2b1c4a] bg-[#fffdf2]/90 p-8 text-[#2b1c4a] shadow-[8px_8px_0_#ffb347]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#ff6b6b]">Final notes</p>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-[#402166]">
              {finalNotes.map((note) => (
                <li key={note}>• {note}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border-4 border-[#2b1c4a] bg-white px-6 py-5 text-sm text-[#402166] shadow-[6px_6px_0_#ffb347]">
            <p className="font-black uppercase tracking-[0.3em] text-[#ff6b6b]">Safety reminder</p>
            <p className="mt-2">
              Disclaimer: not financial advice. Publish contract addresses only on official DOGE CHEF channels. Complete audits and legal reviews before launch day.
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}
