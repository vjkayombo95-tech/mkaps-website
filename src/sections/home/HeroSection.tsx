import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { useEffect, useState } from 'react'
import heroImage from '../../assets/images/hero-kilimanjaro.jpg'
import heroVideo from '../../assets/video/kilimanjaro-hero.mp4'
import { summitDate } from '../../lib/siteConfig'
import { Countdown } from './Countdown'
import { HeroStats } from './HeroStats'

export function HeroSection() {
  const reduceMotion = useReducedMotion()
  const [isDesktop, setIsDesktop] = useState(false)
  const [videoReady, setVideoReady] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)')
    const updateViewport = () => setIsDesktop(mediaQuery.matches)

    updateViewport()
    mediaQuery.addEventListener('change', updateViewport)
    return () => mediaQuery.removeEventListener('change', updateViewport)
  }, [])

  const showVideo = isDesktop && !reduceMotion

  return (
    <section id="home" className="relative min-h-screen bg-mkaps-navy text-white">
      <img src={heroImage} alt="Worshippers gathered before Mount Kilimanjaro at sunrise" className="absolute inset-0 size-full object-cover object-[62%_center]" width="1792" height="896" fetchPriority="high" />
      {showVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          tabIndex={-1}
          poster={heroImage}
          preload="metadata"
          onCanPlay={() => setVideoReady(true)}
          className={`pointer-events-none absolute inset-0 size-full object-cover object-center transition-opacity duration-700 ${videoReady ? 'opacity-100' : 'opacity-0'}`}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      )}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(7,26,47,.12),rgba(7,26,47,.12)),linear-gradient(90deg,rgba(7,26,47,.96)_0%,rgba(7,26,47,.68)_42%,rgba(7,26,47,.2)_74%),linear-gradient(0deg,rgba(7,26,47,.86)_0%,rgba(7,26,47,.2)_48%,transparent_68%)]" />
      <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl items-center px-6 pb-10 pt-32 sm:px-8 lg:pt-36">
        <div className="grid w-full items-end gap-10 lg:grid-cols-[1.15fr_.85fr]">
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: 'easeOut' }}>
            <p className="text-xs font-bold leading-relaxed tracking-[0.24em] text-mkaps-gold sm:text-base">MOUNT KILIMANJARO<br />ANNUAL PRAYER SUMMIT (MKAPS)</p>
            <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.8rem,8vw,7rem)] font-medium leading-[0.82] tracking-[-0.035em]">A MOUNTAIN<br />OF PRAYER</h1>
            <p className="mt-6 font-display text-lg font-semibold tracking-[0.22em] text-mkaps-gold sm:text-2xl">FOR AFRICA AND THE NATIONS</p>
            <blockquote className="mt-4 text-sm font-medium text-white/86 sm:text-base">“My house shall be called a house of prayer for all nations.” <cite className="not-italic text-white/65">— Isaiah 56:7</cite></blockquote>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a className="button-gold inline-flex justify-center" href="/registration">Register for MKAPS 2027 <ArrowRight size={17} aria-hidden="true" /></a>
              <button type="button" className="inline-flex min-h-12 items-center justify-center gap-3 px-4 text-xs font-bold uppercase tracking-[0.08em] text-white transition hover:text-mkaps-gold focus-visible:outline-2 focus-visible:outline-mkaps-gold">
                <span className="grid size-10 place-items-center rounded-full border-2 border-white"><Play size={16} fill="currentColor" aria-hidden="true" /></span> Watch intro video
              </button>
            </div>
          </motion.div>
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: reduceMotion ? 0 : 0.25 }} className="lg:pb-5">
            <Countdown targetDate={summitDate} />
          </motion.div>
        </div>
      </div>
      <div className="relative"><HeroStats /></div>
    </section>
  )
}
