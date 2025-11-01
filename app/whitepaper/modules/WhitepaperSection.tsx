import type { ReactNode } from "react";

export type WhitepaperSectionProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

export function WhitepaperSection({ title, subtitle, children }: WhitepaperSectionProps) {
  return (
    <section className="relative overflow-hidden rounded-[36px] border-4 border-[#2b1c4a] bg-white p-8 text-[#2b1c4a] shadow-[8px_8px_0_#ffb347]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,243,181,0.4),transparent_60%)]" />
      <div className="relative space-y-4">
        <div>
          <h2 className="text-2xl font-black uppercase">{title}</h2>
          <p className="mt-1 text-xs font-black uppercase tracking-[0.35em] text-[#ff6b6b]">{subtitle}</p>
        </div>
        <div className="space-y-4 text-sm leading-6 text-[#402166]">{children}</div>
      </div>
    </section>
  );
}
