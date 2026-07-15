import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const madeTommy = localFont({
  src: [
    { path: '../public/fonts/made-tommy-regular.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/made-tommy-medium.woff2', weight: '500', style: 'normal' },
    { path: '../public/fonts/made-tommy-bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-made-tommy',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700'],
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
    <html lang="es" className={`${madeTommy.variable} ${poppins.variable}`}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
