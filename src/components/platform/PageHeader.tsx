import type { PropsWithChildren } from 'react'

export function PageHeader({ eyebrow, title, children }: PropsWithChildren<{ eyebrow: string; title: string }>) {
  return <header className="flex flex-col gap-4 border-b border-slate-200 pb-7 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-[.68rem] font-bold uppercase tracking-[.14em] text-mkaps-gold">{eyebrow}</p><h1 className="mt-2 font-display text-4xl font-semibold leading-none text-mkaps-navy sm:text-5xl">{title}</h1></div>{children}</header>
}
