import { PageHeader } from "@/components/PageHeader";

const communityGuidelines = [
  "Memes appreciated — post, tag and remix.",
  "No scams, no phishing, never share private keys.",
  "Respect the crew. Debate is welcome, harassment is not.",
  "The Kitchen is rowdy. Expect trash talk but keep it within the rules.",
];

const nextSteps = [
  "Publish the whitepaper table of contents and fill sections 1–5 before launch.",
  "Set up multisig control for the creator fund and book a contract audit before listing.",
  "Share the exact SOL/USDC pairing plan for the Raydium liquidity drop.",
  "Announce meme bounties and whitelist mechanics to fuel community hype.",
  "Warn holders about scams and only post verified contract addresses on official channels.",
];

export default function AboutPage() {
  return (
    <div className="pb-28">
      <PageHeader
        eyebrow="About"
        title="DOGE CHEF keeps the culture loud and the plan transparent"
        description="We are a Solana-based memecoin for party heads, potheads, gamblers and degens who live for the next meme and the next moonshot. Simple roadmap, simple tokenomics, community-first rewards."
      />
      <section className="mx-auto grid w-full max-w-5xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        <article className="space-y-6">
          <div className="rounded-3xl border border-orange-100 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Community vibe</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              The public hub is for hype, memes and debate. The Kitchen is the private, rowdy back room where degens argue, swap tips, flex wins and plan the next play. We reward meme culture, community contributions and pure hype energy.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Product drops arrive in waves: Raydium launch, community NFTs, a casual mobile runner, a marketer-friendly AI toolkit and—long term—a dedicated DOGE CHEF chain or layer for the full ecosystem.
            </p>
          </div>
          <div className="rounded-3xl border border-orange-100 bg-orange-50 p-8 shadow-sm">
            <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">Community guidelines</h2>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
              {communityGuidelines.map((rule) => (
                <li key={rule}>• {rule}</li>
              ))}
            </ul>
          </div>
        </article>
        <aside className="space-y-6">
          <div className="rounded-[32px] border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-orange-100 p-8 shadow-[0_25px_70px_rgba(249,115,22,0.16)]">
            <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">Launch facts</h2>
            <p className="mt-4 text-3xl font-semibold text-slate-900">Stage 1 drops 30 Nov on Raydium</p>
            <p className="mt-3 text-sm text-slate-600">
              90% of the 1B supply seeds the liquidity pool. 10% sits in the creator fund wallet with a clear split for reinvestment, marketing partnerships and creator operations.
            </p>
          </div>
          <div className="rounded-3xl border border-orange-100 bg-white p-8 shadow-sm">
            <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">Recommended next steps</h2>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
              {nextSteps.map((step) => (
                <li key={step}>• {step}</li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
      <section className="mx-auto mt-12 w-full max-w-5xl rounded-3xl border border-orange-100 bg-white p-8 text-xs uppercase tracking-[0.3em] text-slate-500 shadow-sm">
        <p>
          Disclaimer: not financial advice. This site is a marketing, branding and technical outline. Final contract parameters, legal compliance and audits must be completed by the project team and legal counsel before launch.
        </p>
      </section>
    </div>
  );
}
