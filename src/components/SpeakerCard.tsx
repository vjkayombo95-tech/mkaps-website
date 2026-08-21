import type { ComponentProps } from 'react'

export type SpeakerCardProps = {
  name: string
  country: string
  ministry: string
  session: string
} & Pick<ComponentProps<'article'>, 'className'>

export function SpeakerCard({ name, country, ministry, session, className = '' }: SpeakerCardProps) {
  return (
    <article className={`group relative h-[390px] w-full shrink-0 snap-start overflow-hidden rounded-md border border-mkaps-navy/25 bg-[radial-gradient(circle_at_68%_25%,rgba(215,165,54,.2),transparent_30%),linear-gradient(145deg,#0b2746_0%,#071a2f_55%,#041321_100%)] transition-colors duration-300 hover:border-mkaps-gold sm:h-[410px] ${className}`}>
      <div aria-hidden="true" className="absolute inset-8 border border-white/8 transition-transform duration-500 group-hover:scale-[1.015]" />
      <div aria-hidden="true" className="absolute left-1/2 top-[38%] size-28 -translate-x-1/2 rounded-full border border-mkaps-gold/20 bg-white/[.025]" />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#041321] via-mkaps-navy/90 to-transparent p-6 pt-24 text-white">
        <p className="text-[.65rem] font-extrabold uppercase tracking-[.16em] text-mkaps-gold">{country}</p>
        <h3 className="mt-2 font-display text-[clamp(1.9rem,2.4vw,2.35rem)] font-semibold leading-[.92]">{name}</h3>
        <p className="mt-3 text-[.65rem] font-bold uppercase tracking-[.13em] text-white/72">{session}</p>
        <p className="mt-2 text-xs text-white/50">{ministry}</p>
      </div>
    </article>
  )
}
