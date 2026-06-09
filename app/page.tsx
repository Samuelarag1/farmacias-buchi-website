import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { ProductCatalog } from '@/components/product-catalog'
import { Benefits } from '@/components/benefits'
import { FeaturedProducts } from '@/components/featured-products'
import { WhatsAppCTA } from '@/components/whatsapp-cta'
import { MercadoPagoSection } from '@/components/mercadopago-section'
import { AboutSection } from '@/components/about-section'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <FeaturedProducts />
        <ProductCatalog />
        <Benefits />
        <MercadoPagoSection />
        <WhatsAppCTA />
        <AboutSection />
      </main>
      <Footer />
    </div>
  )
}
