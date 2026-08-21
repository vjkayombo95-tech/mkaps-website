import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import { AboutSection } from '../sections/home/AboutSection'
import { FinalCtaSection } from '../sections/home/FinalCtaSection'
import { HeroSection } from '../sections/home/HeroSection'
import { KilimanjaroExperienceSection } from '../sections/home/KilimanjaroExperienceSection'
import { ProgrammeSection } from '../sections/home/ProgrammeSection'
import { QuickLinksSection } from '../sections/home/QuickLinksSection'
import { TanzaniaSection } from '../sections/home/TanzaniaSection'

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <KilimanjaroExperienceSection />
        <ProgrammeSection />
        <TanzaniaSection />
        <QuickLinksSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  )
}
