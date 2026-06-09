import { HeartHandshake, MessageCircle, Shield, Truck, Gift, Clock } from 'lucide-react'

const benefits = [
  {
    icon: HeartHandshake,
    title: 'Atención farmacéutica personalizada',
    description:
      'Nuestro equipo de profesionales te asesora sobre cada producto y responde todas tus consultas.',
  },
  {
    icon: MessageCircle,
    title: 'Pedidos por WhatsApp',
    description:
      'Hacé tu pedido de forma simple y rápida directamente por WhatsApp. Respuesta inmediata.',
  },
  {
    icon: Shield,
    title: 'Pagos seguros con MercadoPago',
    description:
      'Pagá con tarjeta, débito o en cuotas de forma 100% segura a través de MercadoPago.',
  },
  {
    icon: Truck,
    title: 'Envíos o retiro en sucursal',
    description:
      'Recibí tus productos en tu domicilio o retiralos en nuestra sucursal cuando te quede cómodo.',
  },
  {
    icon: Gift,
    title: 'Promociones exclusivas',
    description:
      'Accedé a ofertas especiales, descuentos y promociones exclusivas para nuestros clientes.',
  },
  {
    icon: Clock,
    title: 'Horario extendido',
    description:
      'Atendemos de lunes a sábado en horario extendido para que puedas visitarnos cuando lo necesites.',
  },
]

export function Benefits() {
  return (
    <section id="beneficios" className="bg-secondary/30 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <span className="inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
            ¿Por qué elegirnos?
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Beneficios de comprar en Farmacias Buchi
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Combinamos atención profesional con tecnología para brindarte la mejor experiencia
          </p>
        </div>

        {/* Benefits grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Icon */}
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <benefit.icon className="h-6 w-6" />
              </div>

              {/* Content */}
              <h3 className="mb-2 text-lg font-semibold text-foreground">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>

              {/* Decorative corner */}
              <div className="absolute -bottom-2 -right-2 h-16 w-16 rounded-tl-3xl bg-secondary/50 opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
