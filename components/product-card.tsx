'use client'

import Image from 'next/image'
import { MessageCircle, CreditCard } from 'lucide-react'
import { type Product, formatPrice, getWhatsAppLink, getDiscountedPrice } from '@/lib/products'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const finalPrice = product.discount
    ? getDiscountedPrice(product.price, product.discount)
    : product.price

  const whatsappMessage = `Hola! Me interesa el producto: ${product.name} - ${formatPrice(finalPrice)}`

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Badge */}
      {product.badge && (
        <div className="absolute left-3 top-3 z-10">
          {product.badge === 'mas-vendido' && (
            <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
              Más vendido
            </span>
          )}
          {product.badge === 'oferta' && (
            <span className="rounded-full bg-destructive px-3 py-1 text-xs font-semibold text-white">
              -{product.discount}% OFF
            </span>
          )}
          {product.badge === 'nuevo' && (
            <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
              Nuevo
            </span>
          )}
        </div>
      )}

      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-secondary/30">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        {/* Category */}
        <span className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {product.category.replace('-', ' ')}
        </span>

        {/* Name */}
        <h3 className="mb-2 line-clamp-2 text-base font-semibold text-foreground">
          {product.name}
        </h3>

        {/* Price */}
        <div className="mb-4 mt-auto">
          {product.discount ? (
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-primary">{formatPrice(finalPrice)}</span>
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(product.price)}
              </span>
            </div>
          ) : (
            <span className="text-lg font-bold text-primary">{formatPrice(product.price)}</span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-2">
          <a
            href={getWhatsAppLink(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#22c55e]"
          >
            <MessageCircle className="h-4 w-4" />
            Consultar
          </a>
          <button className="flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90">
            <CreditCard className="h-4 w-4" />
            Pagar con MercadoPago
          </button>
        </div>
      </div>
    </div>
  )
}
