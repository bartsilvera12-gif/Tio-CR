import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MarqueeTicker from '@/components/MarqueeTicker'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import GaleriaCliente from './GaleriaCliente'
import { Suspense } from 'react'

export const metadata = {
  title: 'Galería · TIO CR',
  description: 'Nuestros carteles en las principales rutas del Paraguay',
}

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-brand-navy pt-24">
        <Suspense fallback={<div className="container py-24 text-white/60">Cargando…</div>}>
          <GaleriaCliente />
        </Suspense>
      </main>
      <MarqueeTicker />
      <Footer />
      <WhatsAppFloat />
    </>
  )
}