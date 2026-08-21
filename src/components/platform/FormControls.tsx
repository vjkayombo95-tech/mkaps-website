import type { ComponentProps, PropsWithChildren } from 'react'

const fieldClass = 'mt-2 min-h-12 w-full rounded-sm border border-slate-300 bg-white px-3 text-sm text-mkaps-navy outline-none transition focus:border-mkaps-gold focus:ring-2 focus:ring-mkaps-gold/20'

export function TextInput({ label, error, ...props }: ComponentProps<'input'> & { label: string; error?: string }) {
  return <label className="block text-xs font-bold uppercase tracking-[.06em] text-mkaps-navy">{label}<input {...props} className={fieldClass} aria-invalid={Boolean(error)} />{error && <span role="alert" className="mt-1 block text-xs normal-case tracking-normal text-red-700">{error}</span>}</label>
}

export function SelectInput({ label, children, ...props }: PropsWithChildren<ComponentProps<'select'> & { label: string }>) {
  return <label className="block text-xs font-bold uppercase tracking-[.06em] text-mkaps-navy">{label}<select {...props} className={fieldClass}>{children}</select></label>
}

export function FormSection({ title, note, children }: PropsWithChildren<{ title: string; note?: string }>) {
  return <fieldset><legend className="font-display text-3xl font-semibold text-mkaps-navy">{title}</legend>{note && <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">{note}</p>}<div className="mt-7 grid gap-5 sm:grid-cols-2">{children}</div></fieldset>
}
