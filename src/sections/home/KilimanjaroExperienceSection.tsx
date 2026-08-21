import climbingImage from '../../assets/images/kilimanjaro-experience.jpg'
import { JourneyStep } from '../../components/JourneyStep'
import { Reveal } from '../../components/ui/Reveal'

const steps = ['PRAY', 'WORSHIP', 'ASCEND', 'ENCOUNTER']

export function KilimanjaroExperienceSection() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="relative isolate min-h-[42rem] scroll-mt-20 overflow-hidden bg-mkaps-navy text-white lg:min-h-[50rem]">
      <img src={climbingImage} alt="Mount Kilimanjaro rising above the surrounding landscape" loading="lazy" width="1536" height="1024" className="absolute inset-0 -z-20 size-full object-cover object-center" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_35%,transparent_0%,rgba(7,26,47,.18)_42%,rgba(4,13,25,.78)_100%),linear-gradient(90deg,rgba(7,26,47,.91)_0%,rgba(7,26,47,.48)_55%,rgba(7,26,47,.18)_100%)]" />
      <div className="mx-auto flex min-h-[42rem] max-w-7xl flex-col justify-between px-6 py-20 sm:px-8 lg:min-h-[50rem] lg:py-28">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">The Kilimanjaro Experience</p>
          <h2 id="experience-title" className="mt-4 font-display text-[clamp(2.8rem,6vw,5.5rem)] font-medium leading-[.9] tracking-[-.035em]">More Than a Summit.<br /><span className="text-mkaps-gold-light">A Journey of Faith.</span></h2>
          <p className="mt-7 max-w-xl text-sm leading-7 text-white/78 sm:text-base">MKAPS brings together prayer, worship, biblical teaching, fellowship, and the experience of Mount Kilimanjaro in one extraordinary gathering.</p>
        </Reveal>
        <Reveal className="mt-16 border-y border-white/20 bg-mkaps-navy/35 px-5 py-7 backdrop-blur-[3px] sm:px-7">
          <ol className="grid gap-6 sm:grid-cols-2 lg:flex lg:gap-4">
            {steps.map((step, index) => <JourneyStep key={step} number={String(index + 1).padStart(2, '0')} label={step} isLast={index === steps.length - 1} />)}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
