import mkapsLogo from '../../assets/images/mkaps-logo.png'

type LogoProps = { compact?: boolean; inverse?: boolean }

export function Logo({ compact = false }: LogoProps) {
  return (
    <a href="/#home" className="inline-flex shrink-0 items-center" aria-label="MKAPS home">
      <img
        src={mkapsLogo}
        alt="MKAPS — Mount Kilimanjaro Annual Prayer Summit"
        className={compact ? 'h-11 w-11 object-contain' : 'h-16 w-16 object-contain sm:h-20 sm:w-20'}
      />
    </a>
  )
}
