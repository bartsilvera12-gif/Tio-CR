import type { Metadata } from 'next'
import { Manrope, Inter } from 'next/font/google'
import './globals.css'
import SpotlightPointer from '@/components/SpotlightPointer'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['500', '600', '700', '800'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'TIO CR — Marketing y Servicios Publicitarios',
  description:
    'Cartelería rutera, pantallas LED y publicidad exterior en las principales rutas y ciudades del interior del Paraguay.',
  metadataBase: new URL('https://tiocr.com.py'),
  openGraph: {
    title: 'TIO CR — Marketing y Servicios Publicitarios',
    description:
      'Cartelería rutera, pantallas LED y publicidad exterior en Paraguay.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${manrope.variable} ${inter.variable}`}>
      <body className="font-sans">
        <SpotlightPointer />
        {children}
      </body>
    </html>
  )
}