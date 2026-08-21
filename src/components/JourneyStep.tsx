type JourneyStepProps = {
  number: string
  label: string
  isLast?: boolean
}

export function JourneyStep({ number, label, isLast = false }: JourneyStepProps) {
  return (
    <li className="group relative flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
      <span className="grid size-9 shrink-0 place-items-center rounded-full border border-mkaps-gold/65 bg-mkaps-navy/70 text-[.65rem] font-bold tracking-wider text-mkaps-gold backdrop-blur-sm">
        {number}
      </span>
      <span className="text-xs font-extrabold tracking-[.16em] text-white sm:text-sm">{label}</span>
      {!isLast && <span aria-hidden="true" className="journey-line h-px min-w-5 flex-1 bg-gradient-to-r from-mkaps-gold to-mkaps-gold/20" />}
    </li>
  )
}
