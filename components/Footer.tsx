import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-orange-100 bg-orange-50/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div className="max-w-xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-500">
            Crafted for the meme gourmands
          </p>
          <h2 className="text-2xl font-semibold text-slate-900">
            Join the DogeChef brigade and serve flavor-forward finance to the galaxy.
          </h2>
          <p className="text-sm text-slate-600">
            Built with transparency, seasoned with community, and plated for the metaverse.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm text-slate-600">
          <Link href="/whitepaper" className="transition-colors hover:text-orange-500">
            View Whitepaper
          </Link>
          <Link href="/tokenomics" className="transition-colors hover:text-orange-500">
            Explore Tokenomics
          </Link>
          <Link href="/roadmap" className="transition-colors hover:text-orange-500">
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
