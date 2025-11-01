import type { ReactNode } from "react";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: ReactNode;
};

export function PageHeader({ eyebrow, title, description, actions }: PageHeaderProps) {
  return (
    <header className="relative mx-auto max-w-4xl px-6 pb-16 pt-20 text-center lg:px-10 lg:pb-20 lg:pt-24">
      <div className="absolute inset-0 -z-10 rounded-[48px] bg-[radial-gradient(circle_at_top,rgba(255,243,181,0.7),transparent_60%),radial-gradient(circle_at_bottom,rgba(255,183,197,0.55),transparent_65%)]" />
      {eyebrow ? (
        <span className="inline-flex items-center justify-center rounded-full border-4 border-[#2b1c4a] bg-[#fffdf2]/90 px-5 py-1 text-[0.65rem] font-black uppercase tracking-[0.45em] text-[#ff6b6b] shadow-[4px_4px_0_#2b1c4a]">
          {eyebrow}
        </span>
      ) : null}
      <h1 className="mt-6 text-4xl font-black uppercase tracking-tight text-[#2b1c4a] sm:text-5xl">
        {title}
      </h1>
      <p className="mt-6 text-base leading-7 text-[#402166] sm:text-lg">
        {description}
      </p>
      {actions ? <div className="mt-10 flex justify-center">{actions}</div> : null}
    </header>
  );
}
