import type { DashboardMetric } from '../../types/operations'

export function DashboardCard({ label, value, detail }: DashboardMetric) {
  return <article className="border border-slate-200 bg-white p-5 shadow-[0_8px_24px_rgba(7,26,47,.05)]"><p className="text-[.68rem] font-bold uppercase tracking-[.12em] text-slate-500">{label}</p><p className="mt-3 font-display text-3xl font-semibold leading-none text-mkaps-navy">{value}</p><p className="mt-3 text-xs leading-5 text-slate-500">{detail}</p></article>
}
