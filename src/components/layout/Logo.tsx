type LogoProps = { compact?: boolean; inverse?: boolean }

export function Logo({ compact = false, inverse = true }: LogoProps) {
  const ink = inverse ? 'text-white' : 'text-mkaps-navy'

  return (
    <a href="#home" className={`group inline-flex items-center gap-3 ${ink}`} aria-label="MKAPS home">
      <svg viewBox="0 0 78 58" className="h-11 w-15 shrink-0 sm:h-12" aria-hidden="true">
        <path d="M4 50 24 27l11 12 8-10 31 21" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinejoin="round" />
        <path d="m14 50 13-13 9 10 8-8 14 11" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" opacity=".72" />
        <path d="M38 4v28M29 13h18" fill="none" stroke="#D7A536" strokeWidth="4" />
      </svg>
      <span className="leading-none">
        <span className="block text-2xl font-extrabold tracking-[0.08em]">MKAPS</span>
        {!compact && (
          <span className="mt-1 block text-[0.5rem] font-semibold leading-tight tracking-[0.12em] opacity-80">
            MOUNT KILIMANJARO<br />ANNUAL PRAYER SUMMIT
          </span>
        )}
      </span>
    </a>
  )
}
