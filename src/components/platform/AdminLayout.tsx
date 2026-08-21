import { BarChart3, BedDouble, Bell, CalendarDays, CheckSquare, CreditCard, FileText, Home, Menu, Settings, Shield, Truck, UserCog, Users, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import type { DevRole } from '../../types/operations'
import { Logo } from '../layout/Logo'
import { DevRoleSwitcher } from './DevRoleSwitcher'

const items = [
  ['Overview','/admin',Home,true], ['Registrations','/admin/registrations',FileText,true], ['Participants','/admin/participants',Users,true], ['Check-In','/admin/check-in',CheckSquare,true],
  ['Payments','/admin/payments',CreditCard,true], ['Accommodation','/admin/accommodation',BedDouble,true], ['Transport','/admin/transport',Truck,true], ['Programme','/admin/programme',CalendarDays,true],
  ['Speakers','/admin/speakers',UserCog,true], ['Announcements','/admin/announcements',Bell,true], ['Reports','/admin/reports',BarChart3,true], ['Staff & Roles','/admin/staff',Shield,true], ['Settings','/admin/settings',Settings,true],
] as const

export function AdminLayout() {
  const [open,setOpen]=useState(false); const [role,setRole]=useState<DevRole>('Event Administrator')
  return <div className="min-h-screen bg-slate-100 text-slate-900"><aside className={`fixed inset-y-0 left-0 z-50 w-72 overflow-y-auto bg-[#101827] p-5 text-white transition-transform lg:translate-x-0 ${open?'translate-x-0':'-translate-x-full'}`}><div className="flex items-center justify-between"><Logo/><button className="lg:hidden" aria-label="Close admin navigation" onClick={()=>setOpen(false)}><X/></button></div><p className="mt-7 text-[.62rem] font-bold uppercase tracking-[.18em] text-mkaps-gold">Operations console</p><nav className="mt-3 space-y-0.5" aria-label="Administration">{items.map(([label,to,Icon,live])=>live?<NavLink key={label} end={to==='/admin'} to={to} onClick={()=>setOpen(false)} className={({isActive})=>`flex items-center gap-3 rounded-sm px-3 py-2 text-[.82rem] ${isActive?'bg-mkaps-gold text-mkaps-navy':'text-white/65 hover:bg-white/5 hover:text-white'}`}><Icon size={16}/>{label}</NavLink>:<span key={label} aria-disabled="true" className="flex items-center gap-3 px-3 py-2 text-[.82rem] text-white/35"><Icon size={16}/>{label}<span className="ml-auto text-[.5rem] uppercase">Soon</span></span>)}</nav><p className="mt-8 border-t border-white/10 pt-4 text-[.58rem] leading-4 text-white/35">Prototype navigation is not authorization. Real permissions must be enforced server-side.</p></aside><div className="lg:pl-72"><header className="sticky top-0 z-30 flex min-h-18 flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-white px-5 py-3 sm:px-8"><button className="grid size-10 place-items-center border border-slate-200 lg:hidden" aria-label="Open admin navigation" onClick={()=>setOpen(true)}><Menu/></button><p className="hidden text-sm font-semibold xl:block">MKAPS Operations</p><DevRoleSwitcher value={role} onChange={setRole}/></header><main className="p-5 sm:p-8 lg:p-10"><Outlet context={{role}}/></main></div></div>
}
