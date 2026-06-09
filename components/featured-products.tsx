import { ProductCard } from '@/components/product-card'
import { products } from '@/lib/products'

export function FeaturedProducts() {
  // Get products with badges (featured ones)
  const featuredProducts = products.filter((p) => p.badge).slice(0, 4)

  return (
    <section id="destacados" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <span className="inline-block rounded-full bg-destructive/10 px-4 py-1.5 text-sm font-medium text-destructive">
            No te los pierdas
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Productos destacados
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Los más vendidos, ofertas especiales y novedades seleccionadas para vos
          </p>
        </div>

        {/* Featured products grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Special offer banner */}
        <div className="mt-12 overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-primary/90 to-primary/80 p-8 text-center shadow-xl sm:p-12">
          <div className="relative z-10">
            <span className="inline-block rounded-full bg-primary-foreground/20 px-4 py-1.5 text-sm font-medium text-primary-foreground">
              Oferta especial
            </span>
            <h3 className="mt-4 text-balance text-2xl font-bold text-primary-foreground sm:text-3xl">
              20% OFF en toda la línea de Dermocosmética
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
              Aprovechá esta promoción exclusiva. Válida hasta agotar stock. Consultá por WhatsApp.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#catalogo"
                className="inline-flex items-center justify-center rounded-full bg-primary-foreground px-8 py-3 text-base font-semibold text-primary transition-all hover:scale-105"
              >
                Ver productos
              </a>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/5" />
            <div className="absolute -bottom-10 -right-10 h-60 w-60 rounded-full bg-white/5" />
          </div>
        </div>
      </div>
    </section>
  )
}
