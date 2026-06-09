import { Heart, Award, Users } from 'lucide-react'

export function AboutSection() {
  return (
    <section id="nosotros" className="bg-secondary/30 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image / Visual */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-secondary to-accent/20 p-1">
              <div className="relative aspect-[4/3] rounded-[1.4rem] bg-card/50 backdrop-blur-xl">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  {/* Logo */}
                  <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-primary">
                    <span className="text-5xl font-bold text-primary-foreground">B</span>
                  </div>
                  <h3 className="text-center text-3xl font-bold text-foreground">
                    Farmacias Buchi
                  </h3>
                  <p className="mt-2 text-center text-lg text-muted-foreground">
                    Desde 1985 cuidando tu salud
                  </p>

                  {/* Stats */}
                  <div className="mt-8 grid w-full max-w-sm grid-cols-3 gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">38+</p>
                      <p className="text-sm text-muted-foreground">Años</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">5000+</p>
                      <p className="text-sm text-muted-foreground">Productos</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">10K+</p>
                      <p className="text-sm text-muted-foreground">Clientes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-2xl bg-primary/10" />
            <div className="absolute -right-4 -top-4 h-16 w-16 rounded-2xl bg-accent/30" />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Sobre nosotros
            </span>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Más que una farmacia, somos tu aliado en salud
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              En <strong className="text-foreground">Farmacias Buchi</strong> combinamos atención
              cercana, productos de calidad y soluciones digitales para que puedas comprar de forma
              simple, rápida y segura.
            </p>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Nuestro equipo de farmacéuticos profesionales está capacitado para asesorarte en cada
              compra, garantizando que recibas el producto adecuado para tus necesidades.
            </p>

            {/* Values */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="flex flex-col items-center rounded-2xl bg-card p-4 text-center shadow-sm">
                <Heart className="mb-2 h-8 w-8 text-primary" />
                <span className="text-sm font-medium text-foreground">Compromiso</span>
              </div>
              <div className="flex flex-col items-center rounded-2xl bg-card p-4 text-center shadow-sm">
                <Award className="mb-2 h-8 w-8 text-primary" />
                <span className="text-sm font-medium text-foreground">Calidad</span>
              </div>
              <div className="flex flex-col items-center rounded-2xl bg-card p-4 text-center shadow-sm">
                <Users className="mb-2 h-8 w-8 text-primary" />
                <span className="text-sm font-medium text-foreground">Cercanía</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
