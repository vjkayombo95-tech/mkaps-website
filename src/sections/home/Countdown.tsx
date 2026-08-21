import { useEffect, useMemo, useState } from 'react'

type CountdownProps = { targetDate: string }

function remaining(target: number) {
  const difference = Math.max(0, target - Date.now())
  return {
    days: Math.floor(difference / 86_400_000),
    hours: Math.floor((difference / 3_600_000) % 24),
    minutes: Math.floor((difference / 60_000) % 60),
    seconds: Math.floor((difference / 1_000) % 60),
    expired: difference === 0,
  }
}

export function Countdown({ targetDate }: CountdownProps) {
  const target = useMemo(() => new Date(targetDate).getTime(), [targetDate])
  const [time, setTime] = useState(() => remaining(target))

  useEffect(() => {
    const timer = window.setInterval(() => setTime(remaining(target)), 1000)
    return () => window.clearInterval(timer)
  }, [target])

  if (time.expired) return <div className="countdown-panel text-center"><p className="font-display text-2xl text-mkaps-gold">The summit is underway</p></div>

  const units = [
    ['Days', time.days], ['Hours', time.hours], ['Minutes', time.minutes], ['Seconds', time.seconds],
  ] as const

  return (
    <div className="countdown-panel" aria-label="Countdown to the next MKAPS summit" aria-live="off">
      <p className="mb-4 text-center text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white/75">Next summit starts in</p>
      <div className="grid grid-cols-4">
        {units.map(([label, value], index) => (
          <div key={label} className={`px-2 text-center sm:px-4 ${index ? 'border-l border-white/20' : ''}`}>
            <strong className="block font-display text-3xl font-semibold tabular-nums text-mkaps-gold sm:text-4xl">{String(value).padStart(2, '0')}</strong>
            <span className="mt-1 block text-[0.6rem] font-bold uppercase text-white/70">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
