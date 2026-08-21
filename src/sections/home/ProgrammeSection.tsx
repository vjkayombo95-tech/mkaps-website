import { ArrowRight, CalendarDays } from 'lucide-react'
import climbingImage from '../../assets/images/kilimanjaro-experience.jpg'
import prayerImage from '../../assets/images/prayer-revival.jpg'
import heroImage from '../../assets/images/hero-kilimanjaro.jpg'
import { Reveal } from '../../components/ui/Reveal'

const programme = [
  { days: 'Day 1–3', title: <>Acclimatization &<br />Spiritual Preparation</>, image: prayerImage, alt: 'Prayer gathering at sunrise' },
  { days: 'Day 4–6', title: <>Prayer, Teaching &<br />Exploration</>, image: heroImage, alt: 'Mount Kilimanjaro above a summit gathering' },
  { days: 'Day 7–9', title: <>Kilimanjaro Climbing<br />Experience</>, image: climbingImage, alt: 'Kilimanjaro hikers on an alpine trail' },
  { days: 'Day 10', title: <>Summit Celebration &<br />Commissioning</>, image: prayerImage, alt: 'Worshippers celebrating together' },
]

export function ProgrammeSection() {
  return (
    <section id="programme" className="bg-mkaps-navy py-20 text-white lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal><p className="eyebrow">Summit programme highlights</p><h2 className="section-title mt-2 text-white">10 Days of Encounter, Prayer & Adventure</h2></Reveal>
        <Reveal className="mt-8">
          <ol aria-label="Programme journey" className="grid grid-cols-4">
            {programme.map((item, index) => <li key={item.days} className="relative border-t border-mkaps-gold/35 pt-4 before:absolute before:-top-[5px] before:left-0 before:size-2 before:rounded-full before:bg-mkaps-gold"><span className="block text-xs font-bold text-mkaps-gold">{String(index + 1).padStart(2, '0')}</span><span className="mt-1 block text-[.65rem] uppercase tracking-wider text-white/60">{item.days}</span></li>)}
          </ol>
        </Reveal>
        <div className="mt-7 flex snap-x gap-4 overflow-x-auto pb-4 lg:grid lg:grid-cols-[repeat(4,minmax(0,1fr))_180px] lg:overflow-visible">
          {programme.map((item, index) => (
            <Reveal key={item.days} className="min-w-[82%] snap-start sm:min-w-[46%] lg:min-w-0" delay={index * 0.06}>
              <article className="group relative h-64 overflow-hidden rounded-md border border-white/30">
                <img src={item.image} alt={item.alt} loading="lazy" width="1536" height="1024" className="size-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-mkaps-navy via-mkaps-navy/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5"><p className="text-xs font-bold uppercase text-white/85">{item.days}</p><h3 className="mt-1 font-display text-xl leading-none">{item.title}</h3></div>
              </article>
            </Reveal>
          ))}
          <a href="#full-programme" className="flex min-h-64 min-w-[70%] snap-start flex-col justify-end rounded-md border border-white/45 p-6 transition hover:border-mkaps-gold hover:bg-white/5 sm:min-w-[40%] lg:min-w-0">
            <CalendarDays size={30} strokeWidth={1.5} aria-hidden="true" /><span className="mt-5 text-sm font-bold uppercase">View full<br />programme</span><ArrowRight className="mt-4 text-mkaps-gold" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
