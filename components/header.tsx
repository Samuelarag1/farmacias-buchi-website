'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react'
import { getWhatsAppLink } from '@/lib/products'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-10 items-center justify-between text-sm">
            <div className="hidden items-center gap-6 md:flex">
              <span className="flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5" />
                <span>(011) 1234-5678</span>
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                <span>Av. Corrientes 1234, CABA</span>
              </span>
            </div>
            <div className="flex items-center gap-1.5 md:ml-auto">
              <Clock className="h-3.5 w-3.5" />
              <span>Lun - Sáb: 8:00 - 21:00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="border-b border-border bg-card/80 backdrop-blur-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                <span className="text-xl font-bold text-primary-foreground">B</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight text-foreground md:text-xl">
                  Farmacias Buchi
                </span>
                <span className="hidden text-xs text-muted-foreground md:block">
                  Tu salud, nuestra prioridad
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-8 lg:flex">
              <Link
                href="#catalogo"
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                Catálogo
              </Link>
              <Link
                href="#beneficios"
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                Beneficios
              </Link>
              <Link
                href="#destacados"
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                Destacados
              </Link>
              <Link
                href="#nosotros"
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                Nosotros
              </Link>
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              <a
                href={getWhatsAppLink('Hola! Me gustaría hacer una consulta.')}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/25 transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#25D366]/30 sm:inline-flex"
              >
                WhatsApp
              </a>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-muted lg:hidden"
                aria-label="Menu"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-t border-border bg-card lg:hidden">
            <nav className="mx-auto max-w-7xl space-y-1 px-4 py-4">
              <Link
                href="#catalogo"
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-lg px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
              >
                Catálogo
              </Link>
              <Link
                href="#beneficios"
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-lg px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
              >
                Beneficios
              </Link>
              <Link
                href="#destacados"
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-lg px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
              >
                Destacados
              </Link>
              <Link
                href="#nosotros"
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-lg px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
              >
                Nosotros
              </Link>
              <a
                href={getWhatsAppLink('Hola! Me gustaría hacer una consulta.')}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block rounded-lg bg-[#25D366] px-4 py-3 text-center text-base font-semibold text-white"
              >
                Contactar por WhatsApp
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
