import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import { FeaturedSpeakersSection } from '../sections/home/FeaturedSpeakersSection'

export function SpeakersPage() {
  return (
    <>
      <Header solid />
      <main className="bg-mkaps-off-white pt-20 lg:pt-24">
        <FeaturedSpeakersSection />
      </main>
      <Footer />
    </>
  )
}
