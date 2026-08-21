import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { navigation } from '../../lib/siteConfig'
import { Logo } from './Logo'

type HeaderProps = { solid?: boolean }

export function Header({ solid = false }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
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
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${solid || scrolled || menuOpen ? 'border-b border-white/10 bg-mkaps-navy/95 shadow-lg backdrop-blur-xl' : 'bg-gradient-to-b from-mkaps-navy/80 to-transparent'}`}>
      <div className="mx-auto flex h-20 max-w-[90rem] items-center justify-between px-5 sm:px-8 lg:h-24">
        <Logo />
        <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a key={item.label} href={item.href} className={`nav-link ${(item.href === '/' && location.pathname === '/') || item.href === location.pathname ? 'active' : ''}`}>{item.label}</a>
          ))}
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
            <a href="/registration" onClick={() => setMenuOpen(false)} className="button-gold mt-6 flex w-full justify-center">Register now</a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
