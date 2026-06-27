import { site } from '../../config/site'
import { Button } from '../ui/Button'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center bg-brand-primary"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-brand-primary to-surface-dark opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-brand-accent)_0%,_transparent_50%)] opacity-10" />

      <div className="relative mx-auto max-w-7xl px-6 py-32 lg:px-8">
        <div className="max-w-3xl">
          <img
            src="/logo.png"
            alt={site.brand.name}
            className="mb-8 h-20 w-auto brightness-0 invert lg:h-28"
          />

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">
            {site.brand.name}
          </p>

          <h1 className="mb-6 font-serif text-4xl font-semibold leading-tight text-white text-balance sm:text-5xl lg:text-6xl">
            {site.brand.tagline}
          </h1>

          <p className="mb-10 max-w-xl text-lg leading-relaxed text-white/80">
            {site.brand.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <Button href={site.social.whatsapp} variant="primary">
              Consultar por WhatsApp
            </Button>
            <Button href="#servicios" variant="ghost">
              Ver servicios
            </Button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {site.stats.map((stat) => (
            <div key={stat.label} className="border-l-2 border-brand-accent pl-4">
              <p className="font-serif text-3xl font-bold text-white lg:text-4xl">{stat.value}</p>
              <p className="mt-1 text-sm text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
