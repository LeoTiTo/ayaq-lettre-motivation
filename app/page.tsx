import ScrollSpy from '../components/scroll'
import Hero from '../components/hero'
import CardsGrid from '../components/cards-grid'
import References from '../components/References'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import Dialogue from '../components/dialogue'

export default function Home() {
  return (
    <>
      <ScrollSpy />
      <Hero />
      <div className="w-full mx-auto max-w-3xl px-4">
        <Dialogue />
      </div>
      <main className="max-w-6xl mx-auto px-4">
        <CardsGrid />
      </main>
      <Projects />
      <div className="w-full mx-auto max-w-7xl px-4">
        <References />
      </div>
      <Footer />
    </>
  )
}