import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import StatsStrip from './components/sections/StatsStrip'
import About from './components/sections/About'
import Programs from './components/sections/Programs'
import EventsGallery from './components/sections/EventsGallery'
import CTASection from './components/sections/CTASection'

export default function App() {
  return (
    <div className="min-h-screen bg-ink">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-brass focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <StatsStrip />
        <About />
        <Programs />
        <EventsGallery />
        <CTASection />
      </main>

      <Footer />
    </div>
  )
}
