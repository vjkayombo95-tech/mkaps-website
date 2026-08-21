import type { PropsWithChildren } from 'react'

export function DataTable({ label, children }: PropsWithChildren<{ label: string }>) {
  return <div className="max-w-full overflow-x-auto border border-slate-200 bg-white"><table className="w-full min-w-[760px] border-collapse text-left text-sm"><caption className="sr-only">{label}</caption>{children}</table></div>
}

export const tableHeadClass = 'border-b border-slate-200 bg-slate-50 px-4 py-3 text-[.62rem] font-bold uppercase tracking-wider text-slate-500'
export const tableCellClass = 'border-b border-slate-100 px-4 py-3 align-middle text-xs text-slate-600'
