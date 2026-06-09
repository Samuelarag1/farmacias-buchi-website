import { CreditCard, Shield, CheckCircle } from 'lucide-react'

export function MercadoPagoSection() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div>
            <span className="inline-block rounded-full bg-[#00bcff]/10 px-4 py-1.5 text-sm font-medium text-[#009ee3]">
              Medios de pago
            </span>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Pagá de forma segura con MercadoPago
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Aceptamos todos los medios de pago a través de MercadoPago. Podés pagar con tarjeta de
              crédito, débito, efectivo o en cuotas sin interés.
            </p>

            {/* Features */}
            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#009ee3]" />
                <span className="text-foreground">
                  <strong>Todas las tarjetas:</strong> Visa, Mastercard, American Express, y más
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#009ee3]" />
                <span className="text-foreground">
                  <strong>Hasta 12 cuotas:</strong> Financiá tus compras sin moverte de casa
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#009ee3]" />
                <span className="text-foreground">
                  <strong>Pago en efectivo:</strong> Rapipago, Pago Fácil y más puntos de pago
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#009ee3]" />
                <span className="text-foreground">
                  <strong>Transferencia bancaria:</strong> Pagá desde tu homebanking
                </span>
              </li>
            </ul>
          </div>

          {/* Payment card mockup */}
          <div className="relative">
            <div className="relative mx-auto max-w-md">
              {/* Main card */}
              <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#009ee3] to-[#00bcff] p-8 text-white shadow-2xl shadow-[#009ee3]/30">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
                    <Shield className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium opacity-80">Checkout seguro</span>
                </div>

                <div className="mt-8">
                  <p className="text-sm opacity-80">Total a pagar</p>
                  <p className="mt-1 text-4xl font-bold">$12.500</p>
                </div>

                <div className="mt-8 space-y-3">
                  <div className="flex items-center justify-between rounded-xl bg-white/10 p-4">
                    <span className="flex items-center gap-3">
                      <CreditCard className="h-5 w-5" />
                      <span>Tarjeta de crédito</span>
                    </span>
                    <span className="text-sm">12 cuotas</span>
                  </div>
                </div>

                <button className="mt-6 w-full rounded-xl bg-white py-4 text-center font-semibold text-[#009ee3] transition-all hover:bg-white/90">
                  Pagar ahora
                </button>

                {/* MercadoPago logo placeholder */}
                <div className="mt-6 flex items-center justify-center gap-2 text-sm opacity-80">
                  <Shield className="h-4 w-4" />
                  <span>Protegido por MercadoPago</span>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -left-8 top-1/2 -translate-y-1/2 rounded-2xl bg-card p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-12 rounded bg-gradient-to-r from-[#1a1f71] to-[#006fcf]" />
                  <span className="text-sm font-medium text-foreground">Visa</span>
                </div>
              </div>

              <div className="absolute -right-8 top-1/4 rounded-2xl bg-card p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-12 items-center justify-center rounded bg-[#eb001b]">
                    <div className="h-5 w-5 rounded-full bg-[#f79e1b] opacity-80" />
                  </div>
                  <span className="text-sm font-medium text-foreground">Mastercard</span>
                </div>
              </div>

              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-2xl bg-card px-6 py-3 shadow-xl">
                <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Compra protegida</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
