import { X } from 'lucide-react'
import { useEffect, useRef, type PropsWithChildren } from 'react'

export function PrototypeDialog({ open, title, onClose, children }: PropsWithChildren<{ open: boolean; title: string; onClose: () => void }>) {
  const ref = useRef<HTMLDialogElement>(null)
  useEffect(() => { const dialog=ref.current; if (!dialog) return; if(open&&!dialog.open) dialog.showModal(); if(!open&&dialog.open) dialog.close() },[open])
  return <dialog ref={ref} onClose={onClose} onCancel={onClose} onClick={(e)=>e.target===e.currentTarget&&onClose()} aria-labelledby="prototype-dialog-title" className="m-auto w-[calc(100%-2rem)] max-w-xl border border-slate-200 bg-white p-0 text-slate-900 shadow-2xl backdrop:bg-slate-950/70"><div className="flex items-center justify-between border-b border-slate-200 p-5"><h2 id="prototype-dialog-title" className="font-display text-2xl font-semibold">{title}</h2><button onClick={onClose} aria-label="Close dialog" className="grid size-9 place-items-center border border-slate-200"><X size={17}/></button></div><div className="p-5 sm:p-6">{children}</div></dialog>
}
