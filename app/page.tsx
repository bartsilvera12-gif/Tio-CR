import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Intro from '@/components/Intro'
import Refugios from '@/components/Refugios'
import Cobertura from '@/components/Cobertura'
import Propuesta from '@/components/Propuesta'
import Galeria from '@/components/Galeria'
import Contacto from '@/components/Contacto'
import Footer from '@/components/Footer'
import MarqueeTicker from '@/components/MarqueeTicker'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Refugios />
        <Cobertura />
        <Galeria />
        <Propuesta />
        <Contacto />
      </main>
      <MarqueeTicker />
      <Footer />
      <WhatsAppFloat />
    </>
  )
}