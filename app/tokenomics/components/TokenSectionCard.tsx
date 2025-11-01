import type { ReactNode } from "react";

type TokenSectionCardProps = {
  title: string;
  metric: string;
  accent: string;
  children: ReactNode;
};

export function TokenSectionCard({ title, metric, accent, children }: TokenSectionCardProps) {
  return (
    <section className="relative overflow-hidden rounded-[36px] border-4 border-[#2b1c4a] bg-white p-8 text-[#2b1c4a] shadow-[8px_8px_0_#ffb347]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,219,186,0.45),transparent_60%)]" />
      <div className="relative space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-xl font-black uppercase">{title}</h2>
          <span className="rounded-full border-4 border-[#2b1c4a] bg-[#fffdf2] px-4 py-1 text-xs font-black uppercase tracking-[0.35em] text-[#ff6b6b]">
            {accent}
          </span>
        </div>
        <p className="text-3xl font-black uppercase tracking-[0.2em] text-[#ff6b6b]">{metric}</p>
        <div className="space-y-3 text-sm leading-6 text-[#402166]">{children}</div>
      </div>
    </section>
  );
}
