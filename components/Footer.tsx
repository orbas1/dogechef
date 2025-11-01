import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-800/50 bg-slate-950/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div className="max-w-xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
            Crafted for the meme gourmands
          </p>
          <h2 className="text-2xl font-semibold text-slate-100">
            Join the DogeChef brigade and serve flavor-forward finance to the galaxy.
          </h2>
          <p className="text-sm text-slate-400">
            Built with transparency, seasoned with community, and plated for the metaverse.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-sm text-slate-400">
          <Link href="/whitepaper" className="hover:text-sky-100 transition-colors">
            View Whitepaper
          </Link>
          <Link href="/tokenomics" className="hover:text-sky-100 transition-colors">
            Explore Tokenomics
          </Link>
          <Link href="/roadmap" className="hover:text-sky-100 transition-colors">
            Roadmap
          </Link>
        </div>
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
          © {new Date().getFullYear()} DogeChef Collective
        </p>
      </div>
    </footer>
  );
}
