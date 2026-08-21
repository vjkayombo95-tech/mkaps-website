import { Bell, CalendarDays, CreditCard, Home, MapPin, Menu, Mountain, QrCode, UserRound, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Logo } from '../layout/Logo'

const items = [
  ['Dashboard','/portal',Home], ['My Registration','/portal/registration',UserRound], ['My QR Pass','/portal/pass',QrCode], ['Programme','/portal/programme',CalendarDays],
  ['Accommodation','/portal/accommodation',Home], ['Transport','/portal/transport',MapPin], ['Payments','/portal/payments',CreditCard], ['Kilimanjaro','/portal/kilimanjaro',Mountain],
  ['Announcements','/portal/announcements',Bell], ['Profile','/portal/profile',UserRound],
] as const

export function PortalLayout() {
  const [open,setOpen]=useState(false)
  return <div className="min-h-screen bg-slate-50 text-mkaps-navy">
    <aside className={`fixed inset-y-0 left-0 z-50 w-72 bg-mkaps-navy p-6 text-white transition-transform lg:translate-x-0 ${open?'translate-x-0':'-translate-x-full'}`}>
      <div className="flex items-center justify-between"><Logo/><button className="lg:hidden" aria-label="Close participant navigation" onClick={()=>setOpen(false)}><X/></button></div>
      <p className="mt-9 text-[.65rem] font-bold uppercase tracking-[.18em] text-mkaps-gold">Participant portal</p>
      <nav className="mt-4 space-y-1" aria-label="Participant portal">{items.map(([label,to,Icon])=><NavLink key={label} end={to==='/portal'} to={to} onClick={()=>setOpen(false)} className={({isActive})=>`flex items-center gap-3 px-3 py-2.5 text-sm ${isActive?'bg-white/10 text-white':'text-white/65 hover:text-white'}`}><Icon size={17}/>{label}</NavLink>)}</nav>
      <p className="absolute bottom-6 left-6 right-6 text-[.6rem] leading-4 text-white/35">Frontend prototype. Account security will be enforced server-side later.</p>
    </aside>
    <div className="lg:pl-72"><header className="sticky top-0 z-30 flex h-18 items-center justify-between border-b border-slate-200 bg-white/95 px-5 backdrop-blur sm:px-8"><button className="grid size-10 place-items-center border border-slate-200 lg:hidden" aria-label="Open participant navigation" onClick={()=>setOpen(true)}><Menu/></button><p className="hidden text-sm font-semibold sm:block">MKAPS 2027 Participant Experience</p><div className="flex items-center gap-3"><span className="hidden text-right text-xs sm:block"><strong className="block">Neema Mwakalinga</strong><span className="text-slate-500">General Participant</span></span><span className="grid size-10 place-items-center rounded-full bg-mkaps-gold font-bold">NM</span></div></header><main className="p-5 sm:p-8 lg:p-10"><Outlet/></main></div>
  </div>
}
