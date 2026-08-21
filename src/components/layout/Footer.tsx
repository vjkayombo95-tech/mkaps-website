import { Camera, MapPin, MessageCircle, PlaySquare } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Logo } from './Logo'

const columns = [
  { title: 'Explore', links: ['About', 'Programme', 'Speakers', 'Kilimanjaro Experience'] },
  { title: 'Participate', links: ['Registration', 'Accommodation', 'Travel', 'Live Stream'] },
  { title: 'Support', links: ['Contact', 'FAQ', 'Privacy', 'Terms'] },
]

export function Footer() {
  return (
    <footer id="contact" className="bg-[#041321] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-8 lg:grid-cols-[1.5fr_2fr] lg:py-20">
        <div>
          <Logo />
          <p className="mt-7 max-w-sm font-display text-2xl leading-snug text-white/80">A Mountain of Prayer for Africa and the Nations</p>
          <p className="mt-5 flex items-center gap-2 text-sm text-white/55"><MapPin size={17} aria-hidden="true" /> Mount Kilimanjaro, Tanzania</p>
        </div>
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title}>
              <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-mkaps-gold">{column.title}</h2>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => <li key={link}><a className="text-sm text-white/65 transition hover:text-white" href={`#${link.toLowerCase().replaceAll(' ', '-')}`}>{link}</a></li>)}
                {column.title === 'Participate' && <li><Link className="text-sm text-white/65 transition hover:text-white" to="/portal">Participant Portal</Link></li>}
                {column.title === 'Support' && <li><Link className="text-sm text-white/65 transition hover:text-white" to="/admin">Admin Portal</Link></li>}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© 2026 Mount Kilimanjaro Annual Prayer Summit. All rights reserved.</p>
          <div className="flex gap-3" aria-label="Social media">
            {[MessageCircle, Camera, PlaySquare].map((Icon, index) => <a key={index} href="#social" aria-label={['Community', 'Photos', 'Video'][index]} className="grid size-9 place-items-center rounded-full border border-white/15 transition hover:border-mkaps-gold hover:text-mkaps-gold"><Icon size={16} /></a>)}
          </div>
        </div>
      </div>
    </footer>
  )
}
