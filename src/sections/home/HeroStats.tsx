import { CalendarDays, Globe2, Heart, Mountain, Users } from 'lucide-react'

const stats = [
  { value: '2,000+', label: <>Expected Participants<br />Year One</>, icon: Users },
  { value: '50+', label: <>Nations Represented</>, icon: Globe2 },
  { value: '10', label: <>Days of Prayer,<br />Worship & Teaching</>, icon: CalendarDays },
  { value: '1', label: <>Majestic Mountain<br />Kilimanjaro</>, icon: Mountain },
  { value: '1', label: <>Purpose: Prayer for<br />Africa & the Nations</>, icon: Heart },
]

export function HeroStats() {
  return (
    <div className="border-y border-white/10 bg-mkaps-navy/88 backdrop-blur-md">
      <div className="mx-auto grid max-w-7xl grid-cols-2 px-4 sm:px-6 md:grid-cols-3 lg:grid-cols-5">
        {stats.map(({ value, label, icon: Icon }, index) => (
          <div key={value + index} className="flex min-h-28 items-center gap-3 border-white/15 px-3 py-5 even:border-l lg:border-l lg:first:border-l-0">
            <Icon className="size-7 shrink-0 text-white/90" strokeWidth={1.6} aria-hidden="true" />
            <div><strong className="font-display text-2xl text-white">{value}</strong><p className="mt-1 text-[0.68rem] leading-snug text-white/68">{label}</p></div>
          </div>
        ))}
      </div>
    </div>
  )
}
