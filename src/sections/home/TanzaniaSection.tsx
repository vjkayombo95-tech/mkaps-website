import { ArrowUpRight } from 'lucide-react'
import mountainImage from '../../assets/images/hero-kilimanjaro.jpg'
import cultureImage from '../../assets/images/tourism-culture.jpg'
import { Reveal } from '../../components/ui/Reveal'

const experiences = [
  { number: '01', title: 'Kilimanjaro', copy: "Africa's highest mountain." },
  { number: '02', title: 'Culture', copy: "Experience Tanzania's people, hospitality, and heritage." },
  { number: '03', title: 'Nature', copy: 'Discover landscapes, waterfalls, wildlife, and extraordinary natural destinations.' },
]

export function TanzaniaSection() {
  return (
    <section id="travel" aria-labelledby="tanzania-title" className="overflow-hidden bg-white py-20 text-mkaps-navy lg:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal className="grid gap-5 lg:grid-cols-2 lg:items-end">
          <div><p className="eyebrow">Discover Tanzania</p><h2 id="tanzania-title" className="section-title mt-3">Faith. Nature.<br />Culture. Adventure.</h2></div>
          <p className="max-w-lg text-sm leading-7 text-mkaps-muted lg:justify-self-end">Experience the beauty, hospitality, heritage, and landscapes surrounding Mount Kilimanjaro.</p>
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.55fr_.85fr]">
          <Reveal className="relative min-h-[31rem] overflow-hidden">
            <img src={mountainImage} alt="Mount Kilimanjaro and the Tanzanian landscape" loading="lazy" width="1792" height="896" className="absolute inset-0 size-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-mkaps-navy/75 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 max-w-md p-7 text-white sm:p-9"><p className="eyebrow">At the foot of Africa</p><p className="mt-3 font-display text-3xl leading-tight">Where creation, community and worship meet.</p></div>
          </Reveal>
          <Reveal className="flex flex-col border-y border-mkaps-navy/15">
            {experiences.map((item) => (
              <article key={item.title} className="group grid flex-1 grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-mkaps-navy/15 py-7 last:border-b-0">
                <span className="text-[.65rem] font-bold text-mkaps-gold">{item.number}</span>
                <div><h3 className="font-display text-2xl font-semibold">{item.title}</h3><p className="mt-1 max-w-sm text-sm leading-6 text-mkaps-muted">{item.copy}</p></div>
                <ArrowUpRight className="text-mkaps-gold transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" size={20} aria-hidden="true" />
              </article>
            ))}
            <div className="relative mt-6 hidden min-h-28 overflow-hidden lg:block"><img src={cultureImage} alt="Lush Tanzanian landscape and waterfall" loading="lazy" className="absolute inset-0 size-full object-cover" /></div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
