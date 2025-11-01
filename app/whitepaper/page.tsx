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
            className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white shadow-lg shadow-orange-200/60 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-orange-600"
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
              className="rounded-3xl border border-orange-100 bg-white p-8 shadow-sm"
            >
              <h2 className="text-2xl font-semibold text-slate-900">{section.title}</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">{section.body}</p>
            </div>
          ))}
        </article>
        <aside className="space-y-6 rounded-3xl border border-orange-100 bg-orange-50 p-8 shadow-sm">
          <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
            Reference Materials
          </h3>
          <p className="text-sm text-slate-600">
            Download companion documents to explore DogeChef&apos;s token architecture, governance framework, and technical primitives.
          </p>
          <ul className="space-y-4 text-sm font-medium text-slate-700">
            {downloadLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="flex items-center justify-between rounded-2xl border border-orange-100 bg-white px-4 py-3 transition-transform duration-300 hover:-translate-y-0.5 hover:border-orange-300 hover:text-orange-600"
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
