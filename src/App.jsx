import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Services from './components/Services'
import Talent from './components/Talent'
import Stats from './components/Stats'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Booking from './components/Booking'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Stats />
      <Talent />
      <Gallery />
      <Testimonials />
      <Booking />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
