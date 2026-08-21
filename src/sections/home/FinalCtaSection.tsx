import { ArrowRight, MapPin } from 'lucide-react'
import heroImage from '../../assets/images/hero-kilimanjaro.jpg'
import { Reveal } from '../../components/ui/Reveal'

export function FinalCtaSection() {
  return (
    <section aria-labelledby="final-cta-title" className="relative isolate overflow-hidden bg-mkaps-navy py-24 text-center text-white lg:py-36">
      <img src={heroImage} alt="Mount Kilimanjaro at golden hour" loading="lazy" width="1792" height="896" className="absolute inset-0 -z-20 size-full object-cover object-center" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,26,47,.9),rgba(7,26,47,.62),rgba(7,26,47,.9)),linear-gradient(0deg,rgba(4,13,25,.78),transparent_60%)]" />
      <Reveal className="mx-auto max-w-4xl px-6 sm:px-8">
        <p className="eyebrow">MKAPS 2027</p>
        <h2 id="final-cta-title" className="mt-4 font-display text-[clamp(2.6rem,6.5vw,6rem)] font-medium leading-[.88] tracking-[-.035em]">One Mountain.<br /><span className="text-mkaps-gold-light">One Prayer.</span><br />One Generation.</h2>
        <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/78 sm:text-base">Join believers from across Africa and the nations for prayer, worship, fellowship, spiritual renewal, and an unforgettable experience at Mount Kilimanjaro.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><a className="button-gold inline-flex justify-center" href="/registration">Register for MKAPS 2027 <ArrowRight size={17} aria-hidden="true" /></a><a className="inline-flex min-h-12 items-center justify-center border border-white/60 px-5 text-xs font-extrabold uppercase tracking-[.08em] transition hover:border-mkaps-gold hover:text-mkaps-gold" href="#programme">Explore the programme</a></div>
        <p className="mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.14em] text-white/65"><MapPin size={15} className="text-mkaps-gold" aria-hidden="true" /> Mount Kilimanjaro, Tanzania</p>
      </Reveal>
    </section>
  )
}
