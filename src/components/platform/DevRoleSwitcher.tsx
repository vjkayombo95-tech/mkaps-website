import type { DevRole } from '../../types/operations'

const roles: DevRole[] = ['Participant', 'Registration Officer', 'Finance Officer', 'Event Administrator', 'Super Admin']
export function DevRoleSwitcher({ value, onChange }: { value: DevRole; onChange: (role: DevRole) => void }) {
  return <label className="flex items-center gap-2 rounded-sm border border-amber-300 bg-amber-50 px-3 py-2 text-[.65rem] font-bold uppercase tracking-wider text-amber-950"><span>Dev prototype · View as</span><select aria-label="Development prototype role" value={value} onChange={(event) => onChange(event.target.value as DevRole)} className="max-w-40 bg-transparent text-xs normal-case outline-none">{roles.map((role) => <option key={role}>{role}</option>)}</select></label>
}
