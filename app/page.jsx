import ScrollSpy from '../components/scroll'
import Hero from '../components/hero'
import CardsGrid from '../components/cards-grid'
import References from '../components/References'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import Dialogue from 'components/dialogue'

export default function Home() {
  return (
    <>
      <ScrollSpy />
      <Hero />
      <main className="max-w-3xl mx-auto px-4 py-8 mt-8">
        <Dialogue />
      </main>
      <main className="max-w-6xl mx-auto px-4 py-8 mt-8">
        <CardsGrid />
      </main>
      <References />
      <Projects />
      <Footer />
    </>
  )
} 