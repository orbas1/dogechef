import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";

const values = [
  {
    title: "Flavor Obsession",
    description: "We remix culinary artistry with meme culture to serve unforgettable, high-energy experiences.",
  },
  {
    title: "Radical Hospitality",
    description: "Every holder is a VIP guest. Inclusivity, celebration, and collaboration shape the DogeChef dining room.",
  },
  {
    title: "Transparency Mise",
    description: "Audited contracts, open treasury dashboards, and weekly kitchen briefings keep the community informed.",
  },
];

const team = [
  {
    name: "Chef Inu",
    role: "Head Visionary",
    bio: "Culinary provocateur bringing Michelin-level concepts into meme economy storytelling.",
  },
  {
    name: "Satoshi Saucier",
    role: "Protocol Engineer",
    bio: "Smart contract artisan crafting token recipes with bulletproof precision.",
  },
  {
    name: "Giga Gastronaut",
    role: "Community Maven",
    bio: "Orchestrates experiential pop-ups and keeps the DogeChef spirit soaring across platforms.",
  },
];

export default function AboutPage() {
  return (
    <div className="pb-28">
      <PageHeader
        eyebrow="About"
        title="Meet the tastemakers engineering DogeChef&apos;s memetic cuisine"
        description="From molecular gastronomy to quantum finance, our collective brings together creators, coders, and culture catalysts to craft a decadent on-chain journey."
      />
      <section className="mx-auto grid w-full max-w-5xl gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        <article className="space-y-8">
          <div className="rounded-3xl border border-slate-800/60 bg-slate-900/60 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.45)] backdrop-blur">
            <h2 className="text-2xl font-semibold text-slate-50">Our Origin Story</h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Born from a late-night meme cook-off, DogeChef quickly evolved into a movement—pairing culinary theatrics with experimental finance. We believe joy is the ultimate utility, and every token unlocks a seat at the chef&apos;s table.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-300">
              The collective spans chefs, blockchain savants, artists, and community strategists, each contributing secret recipes that keep the ecosystem surprising and delightful.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-3xl border border-slate-800/60 bg-slate-950/50 p-6 text-center shadow-[0_18px_60px_rgba(15,23,42,0.4)] backdrop-blur"
              >
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-100">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm text-slate-300">{value.description}</p>
              </div>
            ))}
          </div>
        </article>
        <aside className="space-y-6">
          <div className="relative overflow-hidden rounded-[32px] border border-slate-800/60 bg-gradient-to-br from-slate-950/60 via-slate-900/50 to-slate-950/70 p-8 shadow-[0_28px_90px_rgba(15,23,42,0.5)] backdrop-blur">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(68,249,255,0.18),transparent_60%),radial-gradient(circle_at_80%_20%,rgba(159,80,255,0.2),transparent_65%)]" />
            <div className="relative space-y-4">
              <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-200">
                Kitchen Snapshot
              </h2>
              <p className="text-3xl font-semibold text-slate-50">Global collective • 24/7 innovation</p>
              <p className="text-sm text-slate-300">
                From Tokyo test kitchens to Berlin NFT galleries, DogeChef experiments continuously to deliver irresistible on-chain experiences.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-300">
              Core Team
            </h2>
            <div className="space-y-4">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="rounded-3xl border border-slate-800/60 bg-slate-900/60 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.45)] backdrop-blur"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-sky-400/40 bg-slate-900/70">
                      <Image
                        src="/logo.svg"
                        alt="Avatar placeholder"
                        fill
                        sizes="56px"
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-base font-semibold text-slate-50">{member.name}</p>
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{member.role}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-slate-300">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
