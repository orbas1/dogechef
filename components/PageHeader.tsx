import type { ReactNode } from "react";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: ReactNode;
};

export function PageHeader({ eyebrow, title, description, actions }: PageHeaderProps) {
  return (
    <header className="mx-auto max-w-4xl px-6 pb-12 pt-16 text-center lg:px-10 lg:pb-16 lg:pt-24">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-orange-500">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
        {title}
      </h1>
      <p className="mt-6 text-lg leading-8 text-slate-600">
        {description}
      </p>
      {actions ? <div className="mt-8 flex justify-center">{actions}</div> : null}
    </header>
  );
}
