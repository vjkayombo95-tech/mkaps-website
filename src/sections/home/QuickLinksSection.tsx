import { ArrowRight, BedDouble, Grid2X2, Plane, Radio, UserRound } from 'lucide-react'

const links = [
  { title: 'Registration', subtitle: 'Secure your spot today', href: '/registration', icon: UserRound },
  { title: 'Accommodation', subtitle: 'Find the best places to stay', href: '#accommodation', icon: BedDouble },
  { title: 'Travel Info', subtitle: 'Plan your trip to Tanzania', href: '#travel', icon: Plane },
  { title: 'Participant Dashboard', subtitle: 'Manage your registration', href: '#dashboard', icon: Grid2X2 },
  { title: 'Live Stream', subtitle: 'Join us online', href: '#live-stream', icon: Radio },
]

export function QuickLinksSection() {
  return (
    <nav id="registration" aria-label="Participant quick links" className="bg-white text-mkaps-navy">
      <div className="mx-auto grid max-w-7xl sm:grid-cols-2 lg:grid-cols-5">
        {links.map(({ title, subtitle, href, icon: Icon }) => (
          <a key={title} href={href} className="group flex min-h-28 items-center gap-4 border-b border-mkaps-navy/10 px-6 py-5 transition hover:bg-mkaps-off-white lg:border-b-0 lg:border-r lg:last:border-r-0">
            <Icon className="size-7 shrink-0" strokeWidth={1.6} aria-hidden="true" />
            <span className="min-w-0 flex-1"><strong className="block text-xs uppercase tracking-[0.04em]">{title}</strong><span className="mt-1 block text-xs text-mkaps-muted">{subtitle}</span></span>
            <ArrowRight size={16} className="shrink-0 text-mkaps-muted transition group-hover:translate-x-1 group-hover:text-mkaps-gold" aria-hidden="true" />
          </a>
        ))}
      </div>
    </nav>
  )
}
