import type { LucideIcon } from 'lucide-react'
import type { ComponentProps } from 'react'

type ExperienceCardProps = {
  title: string
  description: string
  image: string
  alt: string
  icon: LucideIcon
} & Pick<ComponentProps<'article'>, 'className'>

export function ExperienceCard({ title, description, image, alt, icon: Icon, className = '' }: ExperienceCardProps) {
  return (
    <article className={`group overflow-hidden rounded-lg border border-mkaps-navy/10 bg-white shadow-[0_10px_30px_rgba(7,26,47,.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(7,26,47,.13)] ${className}`}>
      <div className="relative h-40 overflow-hidden">
        <img src={image} alt={alt} loading="lazy" width="1536" height="1024" className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
      </div>
      <div className="relative px-5 pb-6 pt-10 text-center">
        <span className="absolute left-1/2 top-0 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-white bg-mkaps-navy text-white shadow-md"><Icon size={25} strokeWidth={1.6} aria-hidden="true" /></span>
        <h3 className="text-sm font-extrabold uppercase tracking-[0.04em] text-mkaps-navy">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-mkaps-muted">{description}</p>
      </div>
    </article>
  )
}
