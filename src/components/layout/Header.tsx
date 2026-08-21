import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronDown, Menu, ShieldCheck, UserRound, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navigation } from '../../lib/siteConfig'
import { Logo } from './Logo'

type HeaderProps = { solid?: boolean }

export function Header({ solid = false }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [portalsOpen, setPortalsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const portalsRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        setPortalsOpen(false)
      }
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [])

  useEffect(() => {
    const closePortals = (event: PointerEvent) => {
      if (portalsRef.current && !portalsRef.current.contains(event.target as Node)) setPortalsOpen(false)
    }
    document.addEventListener('pointerdown', closePortals)
    return () => document.removeEventListener('pointerdown', closePortals)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${solid || scrolled || menuOpen ? 'border-b border-white/10 bg-mkaps-navy/95 shadow-lg backdrop-blur-xl' : 'bg-gradient-to-b from-mkaps-navy/80 to-transparent'}`}>
      <div className="mx-auto flex h-20 max-w-[90rem] items-center justify-between px-5 sm:px-8 lg:h-24">
        <Logo />
        <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a key={item.label} href={item.href} className={`nav-link ${(item.href === '/' && location.pathname === '/') || item.href === location.pathname ? 'active' : ''}`}>{item.label}</a>
          ))}
          <div ref={portalsRef} className="relative">
            <button type="button" className="nav-link inline-flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mkaps-gold" aria-haspopup="menu" aria-expanded={portalsOpen} aria-controls="portal-menu" onClick={() => setPortalsOpen((open) => !open)}>
              Portals <ChevronDown size={13} className={`transition-transform ${portalsOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>
            {portalsOpen && <div id="portal-menu" role="menu" className="absolute right-0 top-full w-72 border border-white/15 bg-mkaps-navy p-2 shadow-2xl">
              <Link role="menuitem" to="/portal" onClick={() => setPortalsOpen(false)} className="group flex gap-3 p-3 text-white transition hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-mkaps-gold"><UserRound className="mt-0.5 shrink-0 text-mkaps-gold" size={18} aria-hidden="true" /><span><strong className="block text-xs uppercase tracking-wider">Participant Portal</strong><span className="mt-1 block text-xs text-white/55">Access your summit dashboard</span></span></Link>
              <Link role="menuitem" to="/admin" onClick={() => setPortalsOpen(false)} className="group flex gap-3 p-3 text-white transition hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-mkaps-gold"><ShieldCheck className="mt-0.5 shrink-0 text-mkaps-gold" size={18} aria-hidden="true" /><span><strong className="block text-xs uppercase tracking-wider">Admin Portal</strong><span className="mt-1 block text-xs text-white/55">MKAPS administration</span></span></Link>
            </div>}
          </div>
        </nav>
        <a href="/registration" className="button-gold hidden lg:inline-flex">Register now</a>
        <button
          type="button"
          className="grid size-12 place-items-center rounded-sm border border-white/25 text-white xl:hidden"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile navigation"
            className="absolute inset-x-0 top-20 max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-white/10 bg-mkaps-navy px-5 pb-8 pt-4 xl:hidden"
            initial={reduceMotion ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
          >
            {navigation.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} className="block border-b border-white/10 py-4 text-sm font-semibold uppercase tracking-[0.1em] text-white/85">{item.label}</a>
            ))}
            <div className="mt-6 border-t border-white/15 pt-5">
              <p className="text-[.65rem] font-bold uppercase tracking-[.18em] text-mkaps-gold">Portals</p>
              <Link to="/portal" onClick={() => setMenuOpen(false)} className="mt-3 flex min-h-16 items-center gap-4 border border-white/12 px-4 text-white transition hover:border-mkaps-gold focus-visible:outline-2 focus-visible:outline-mkaps-gold"><UserRound size={21} className="text-mkaps-gold" aria-hidden="true" /><span><strong className="block text-sm">Participant Portal</strong><span className="mt-1 block text-xs text-white/50">Access your summit dashboard</span></span></Link>
              <Link to="/admin" onClick={() => setMenuOpen(false)} className="mt-2 flex min-h-16 items-center gap-4 border border-white/12 px-4 text-white transition hover:border-mkaps-gold focus-visible:outline-2 focus-visible:outline-mkaps-gold"><ShieldCheck size={21} className="text-mkaps-gold" aria-hidden="true" /><span><strong className="block text-sm">Admin Portal</strong><span className="mt-1 block text-xs text-white/50">MKAPS administration</span></span></Link>
            </div>
            <a href="/registration" onClick={() => setMenuOpen(false)} className="button-gold mt-6 flex w-full justify-center">Register now</a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
