import { Analytics } from '@vercel/analytics/next'
import { Inter } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Farmacias Buchi | Tu farmacia de confianza',
  description:
    'Farmacias Buchi - Tu farmacia de confianza. Comprá medicamentos, cuidado personal, dermocosmética y más. Pedidos por WhatsApp y pagos seguros con MercadoPago.',
  keywords: [
    'farmacia',
    'medicamentos',
    'salud',
    'bienestar',
    'dermocosmética',
    'perfumería',
    'suplementos',
    'Buenos Aires',
    'Argentina',
  ],
  authors: [{ name: 'Farmacias Buchi' }],
  openGraph: {
    title: 'Farmacias Buchi | Tu farmacia de confianza',
    description:
      'Comprá medicamentos, cuidado personal, dermocosmética y más. Pedidos por WhatsApp y pagos seguros con MercadoPago.',
    type: 'website',
    locale: 'es_AR',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a5f4a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
