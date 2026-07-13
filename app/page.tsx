import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Intro from '@/components/Intro'
import Servicios from '@/components/Servicios'
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
        <Servicios />
        <Cobertura />
        <Propuesta />
        <Galeria />
        <Contacto />
      </main>
      <MarqueeTicker />
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
