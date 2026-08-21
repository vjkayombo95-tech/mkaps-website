import { ArrowRight, BookOpen, Camera, Mountain, Sparkles } from 'lucide-react'
import climbingImage from '../../assets/images/kilimanjaro-experience.jpg'
import prayerImage from '../../assets/images/prayer-revival.jpg'
import tourismImage from '../../assets/images/tourism-culture.jpg'
import { Reveal } from '../../components/ui/Reveal'
import { ExperienceCard } from './ExperienceCard'

const experiences = [
  { title: 'Prayer & Revival', description: 'Raising continuous prayer for Africa, revival, peace and transformation.', image: prayerImage, alt: 'Believers praying together near Mount Kilimanjaro', icon: Sparkles },
  { title: 'Teaching & Equipping', description: 'Sound biblical teaching and leadership development.', image: prayerImage, alt: 'A gathered community worshipping at sunrise', icon: BookOpen },
  { title: 'Kilimanjaro Experience', description: 'Adventure, exploration and worship on Africa’s highest mountain.', image: climbingImage, alt: 'Hikers ascending a Mount Kilimanjaro trail', icon: Mountain },
  { title: 'Tourism & Culture', description: 'Discover Tanzania’s beauty, hospitality, culture and heritage.', image: tourismImage, alt: 'A waterfall in a lush Tanzanian forest', icon: Camera },
]

export function AboutSection() {
  return (
    <section id="about" className="bg-mkaps-off-white py-20 text-mkaps-navy lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[.75fr_1.75fr] lg:items-start">
        <Reveal>
          <p className="eyebrow">About MKAPS</p>
          <h2 className="section-title mt-3">Uniting Believers.<br />Transforming Nations.</h2>
          <p className="mt-6 text-sm leading-7 text-mkaps-muted">MKAPS is an annual interdenominational Christian gathering at the foothills of Mount Kilimanjaro, uniting believers from Africa and the nations for prayer, worship, biblical teaching, leadership development, revival, and national transformation.</p>
          <a className="button-navy mt-7 inline-flex" href="#about-more">Learn more about MKAPS <ArrowRight size={17} aria-hidden="true" /></a>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {experiences.map((experience, index) => <Reveal key={experience.title} delay={index * 0.07}><ExperienceCard {...experience} /></Reveal>)}
        </div>
      </div>
    </section>
  )
}
