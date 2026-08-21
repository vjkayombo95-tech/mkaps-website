import type { RegistrationStatus, PaymentStatus } from '../../types/operations'

type StatusBadgeProps = { status: RegistrationStatus | PaymentStatus | 'ready' | 'requested' | 'assigned' }
const labels: Record<StatusBadgeProps['status'], string> = { draft: 'Draft', submitted: 'Submitted', pending_payment: 'Pending payment', confirmed: 'Confirmed', cancelled: 'Cancelled', unpaid: 'Unpaid', partial: 'Partial', paid: 'Paid', refunded: 'Refunded', ready: 'Ready', requested: 'Requested', assigned: 'Assigned' }

export function StatusBadge({ status }: StatusBadgeProps) {
  const positive = ['confirmed', 'paid', 'ready', 'assigned'].includes(status)
  const warning = ['partial', 'pending_payment', 'requested'].includes(status)
  return <span className={`inline-flex rounded-full border px-2.5 py-1 text-[.65rem] font-bold uppercase tracking-wider ${positive ? 'border-emerald-300 bg-emerald-50 text-emerald-800' : warning ? 'border-amber-300 bg-amber-50 text-amber-900' : 'border-slate-300 bg-slate-50 text-slate-700'}`}>{labels[status]}</span>
}
