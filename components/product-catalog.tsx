'use client'

import { useState, useMemo } from 'react'
import { Search, Grid3X3, Pill, Sparkles, Droplet, Baby, Flower2, Leaf } from 'lucide-react'
import { ProductCard } from '@/components/product-card'
import { products, categories } from '@/lib/products'

const categoryIcons: Record<string, React.ReactNode> = {
  all: <Grid3X3 className="h-4 w-4" />,
  medicamentos: <Pill className="h-4 w-4" />,
  'cuidado-personal': <Sparkles className="h-4 w-4" />,
  dermocosmetica: <Droplet className="h-4 w-4" />,
  'bebes-maternidad': <Baby className="h-4 w-4" />,
  perfumeria: <Flower2 className="h-4 w-4" />,
  suplementos: <Leaf className="h-4 w-4" />,
}

export function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === 'all' || product.category === selectedCategory
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  return (
    <section id="catalogo" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <span className="inline-block rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
            Nuestro catálogo
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Encontrá lo que necesitás
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Explorá nuestra amplia variedad de productos para tu salud y bienestar
          </p>
        </div>

        {/* Search and filters */}
        <div className="mt-10 space-y-6">
          {/* Search bar */}
          <div className="relative mx-auto max-w-xl">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-border bg-card py-3 pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                    : 'bg-card text-foreground hover:bg-secondary'
                }`}
              >
                {categoryIcons[category.id]}
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Empty state */}
        {filteredProducts.length === 0 && (
          <div className="mt-12 text-center">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-secondary">
              <Search className="h-10 w-10 text-muted-foreground" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-foreground">
              No encontramos productos
            </h3>
            <p className="mt-2 text-muted-foreground">
              Probá con otra búsqueda o categoría
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
