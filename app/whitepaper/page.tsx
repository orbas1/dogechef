import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";

const sections = [
  {
    title: "Visionary Cuisine Economics",
    body:
      "DogeChef fuses deflationary token mechanics with experience-driven collectibles. Holder actions unlock exclusive seasonal menus, curated collaborations, and yield-bearing culinary quests.",
  },
  {
    title: "Treasury & Sustainability",
    body:
      "Treasury reserves are diversified across stable pairs and strategic LP vaults. Quarterly tastings (community votes) determine how new revenue streams re-flavor the ecosystem.",
  },
  {
    title: "DAO-Led Governance",
    body:
      "The Gastronaut Guild orchestrates proposals that span philanthropic pop-ups, NFT drops, and cross-chain expansions. Reputation multipliers reward consistent community chefs.",
  },
  {
    title: "Security & Compliance",
    body:
      "Third-party audits, bug bounties, and on-chain dashboards guarantee transparency. Adaptive compliance layers ensure DogeChef is prepared for evolving regulatory palates.",
  },
];

const downloadLinks = [
  { label: "Full PDF", href: "#" },
  { label: "Tokenomics Snapshot", href: "/tokenomics" },
  { label: "Smart Contract Overview", href: "#" },
];

export default function WhitepaperPage() {
  return (
    <div className="pb-28">
      <PageHeader
        eyebrow="Whitepaper"
        title="A culinary manifesto for Web3 flavor architects"
        description="Dive into the DogeChef protocol architecture—where meme energy, gastronomic storytelling, and resilient token design collide."
        actions={
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-400 via-fuchsia-500 to-amber-400 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-950 shadow-[0_10px_40px_rgba(68,249,255,0.35)]"
          >
            Download PDF
          </Link>
        }
      />
      <section className="mx-auto grid w-full max-w-5xl gap-10 px-6 lg:grid-cols-[1.4fr_1fr] lg:px-10">
        <article className="space-y-8">
          {sections.map((section) => (
            <div
              key={section.title}
              className="rounded-3xl border border-slate-800/60 bg-slate-900/60 p-8 shadow-[0_18px_60px_rgba(15,23,42,0.45)] backdrop-blur"
            >
              <h2 className="text-2xl font-semibold text-slate-50">{section.title}</h2>
              <p className="mt-4 text-base leading-7 text-slate-300">{section.body}</p>
            </div>
          ))}
        </article>
        <aside className="space-y-6 rounded-3xl border border-slate-800/60 bg-slate-950/50 p-8 shadow-[0_18px_60px_rgba(15,23,42,0.5)] backdrop-blur">
          <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-300">
            Reference Materials
          </h3>
          <p className="text-sm text-slate-400">
            Download companion documents to explore DogeChef&apos;s token architecture, governance framework, and technical primitives.
          </p>
          <ul className="space-y-4 text-sm font-medium text-slate-200">
            {downloadLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="flex items-center justify-between rounded-2xl border border-slate-800/60 bg-slate-900/60 px-4 py-3 transition-transform duration-300 hover:-translate-y-0.5 hover:border-sky-400/60 hover:text-sky-100"
                >
                  {link.label}
                  <span aria-hidden>↗</span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </section>
    </div>
  );
}
