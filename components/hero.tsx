import { Truck, HeartHandshake, CreditCard, ShieldCheck } from 'lucide-react'
import Link from 'next/link'
import { getWhatsAppLink } from '@/lib/products'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-accent/20">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-secondary blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/50 px-4 py-2 text-sm font-medium text-accent-foreground backdrop-blur-sm">
              <ShieldCheck className="h-4 w-4" />
              <span>Farmacia habilitada y certificada</span>
            </div>

            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Tu farmacia de confianza, ahora{' '}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                más cerca que nunca
              </span>
            </h1>

            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Disfrutá de la comodidad de comprar tus productos de salud y bienestar con
              atención personalizada, envíos rápidos y pagos seguros con MercadoPago.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="#catalogo"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/30"
              >
                Ver catálogo
              </Link>
              <a
                href={getWhatsAppLink('Hola! Me gustaría hacer un pedido.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#25D366]/25 transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#25D366]/30"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Pedir por WhatsApp
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-10 grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:justify-center lg:justify-start">
              <div className="flex items-center gap-2 rounded-xl bg-card/80 px-4 py-3 shadow-sm backdrop-blur-sm">
                <Truck className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-foreground">Envíos rápidos</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-card/80 px-4 py-3 shadow-sm backdrop-blur-sm">
                <HeartHandshake className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-foreground">Atención personalizada</span>
              </div>
              <div className="col-span-2 flex items-center justify-center gap-2 rounded-xl bg-card/80 px-4 py-3 shadow-sm backdrop-blur-sm sm:col-span-1">
                <CreditCard className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-foreground">Pagá con MercadoPago</span>
              </div>
            </div>
          </div>

          {/* Hero Image / Visual */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-square">
              {/* Glassmorphism card */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/50 to-accent/30 p-1">
                <div className="h-full w-full rounded-[1.4rem] bg-card/50 backdrop-blur-xl">
                  <div className="flex h-full flex-col items-center justify-center p-8">
                    {/* Pharmacy cross icon */}
                    <div className="mb-6 flex h-32 w-32 items-center justify-center rounded-3xl bg-primary/10">
                      <svg
                        className="h-20 w-20 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </div>
                    <h3 className="text-center text-2xl font-bold text-foreground">
                      Farmacias Buchi
                    </h3>
                    <p className="mt-2 text-center text-muted-foreground">
                      Cuidamos tu salud desde 1985
                    </p>

                    {/* Stats */}
                    <div className="mt-8 grid w-full grid-cols-2 gap-4">
                      <div className="rounded-2xl bg-secondary/50 p-4 text-center">
                        <p className="text-2xl font-bold text-primary">+5000</p>
                        <p className="text-sm text-muted-foreground">Productos</p>
                      </div>
                      <div className="rounded-2xl bg-secondary/50 p-4 text-center">
                        <p className="text-2xl font-bold text-primary">38+</p>
                        <p className="text-sm text-muted-foreground">Años</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -left-4 top-1/4 rounded-2xl bg-card p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366]/10">
                    <svg className="h-5 w-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Respuesta rápida</p>
                    <p className="text-xs text-muted-foreground">En menos de 5 min</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 bottom-1/4 rounded-2xl bg-card p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <CreditCard className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">MercadoPago</p>
                    <p className="text-xs text-muted-foreground">Hasta 12 cuotas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
