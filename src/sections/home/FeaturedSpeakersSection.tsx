import { SpeakerCard, type SpeakerCardProps } from '../../components/SpeakerCard'
import { Reveal } from '../../components/ui/Reveal'

const speakers: SpeakerCardProps[] = [
  { name: 'Speaker One', country: 'Tanzania', ministry: 'Ministry / Church to be announced', session: 'Prayer & Revival' },
  { name: 'Speaker Two', country: 'Africa', ministry: 'Ministry / Church to be announced', session: 'Worship' },
  { name: 'Speaker Three', country: 'International', ministry: 'Ministry / Church to be announced', session: 'Biblical Teaching' },
]

export function FeaturedSpeakersSection() {
  return (
    <section id="speakers" aria-labelledby="speakers-title" className="bg-mkaps-off-white py-20 text-mkaps-navy lg:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_.75fr] lg:items-end">
          <Reveal><p className="eyebrow">Voices of the Summit</p><h2 id="speakers-title" className="section-title mt-3">Meet the Ministers & Leaders</h2></Reveal>
          <Reveal><p className="max-w-xl text-sm leading-7 text-mkaps-muted">Meet the ministers, worship leaders, and Christian leaders who will guide MKAPS through prayer, teaching, worship, and spiritual impartation.</p></Reveal>
        </div>
        <div className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
          {speakers.map((speaker, index) => (
            <Reveal key={speaker.name} className="min-w-[88%] max-w-[360px] shrink-0 snap-start sm:min-w-[350px] lg:min-w-0 lg:max-w-none" delay={index * .06}>
              <SpeakerCard {...speaker} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
