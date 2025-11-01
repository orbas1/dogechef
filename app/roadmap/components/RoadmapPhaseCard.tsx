import type { ReactNode } from "react";

export type RoadmapPhaseCardProps = {
  title: string;
  timeframe: string;
  highlights: ReactNode[];
  progress: string;
};

export function RoadmapPhaseCard({ title, timeframe, highlights, progress }: RoadmapPhaseCardProps) {
  return (
    <article className="relative overflow-hidden rounded-[36px] border-4 border-[#2b1c4a] bg-white p-8 text-[#2b1c4a] shadow-[8px_8px_0_#ffb347]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,243,181,0.45),transparent_55%)]" />
      <div className="relative space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-xl font-black uppercase">{title}</h2>
          <span className="rounded-full border-4 border-[#2b1c4a] bg-[#fffdf2] px-4 py-1 text-xs font-black uppercase tracking-[0.35em] text-[#ff6b6b]">
            {timeframe}
          </span>
        </div>
        <ul className="space-y-3 text-sm leading-6 text-[#402166]">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-3 w-3 flex-none rounded-full border-2 border-[#2b1c4a] bg-[#ff6b6b]" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between pt-2 text-[0.65rem] font-black uppercase tracking-[0.35em] text-[#2b1c4a]">
          <span>{progress}</span>
          <span>Kitchen heat rising</span>
        </div>
      </div>
    </article>
  );
}
