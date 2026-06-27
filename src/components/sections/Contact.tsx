import { type FormEvent } from 'react'
import { site } from '../../config/site'
import { SectionWrapper } from '../layout/SectionWrapper'
import { Button } from '../ui/Button'
import { IconButton } from '../ui/IconButton'

export function Contact() {
  function handleSubmit(e: FormEvent) {
    e.preventDefault()
  }

  return (
    <SectionWrapper id="contacto" dark className="bg-surface-dark">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">
            Contacto
          </p>
          <h2 className="mb-4 font-serif text-3xl font-semibold text-white sm:text-4xl">
            Cuéntanos tu caso
          </h2>
          <p className="mb-8 leading-relaxed text-white/70">
            Estamos listos para escucharte. Escríbenos y te responderemos a la brevedad con una evaluación inicial de tu situación.
          </p>

          <div className="mb-8 space-y-3 text-white/80">
            <p>
              <span className="text-brand-accent">Email:</span>{' '}
              <a href={`mailto:${site.contact.email}`} className="hover:text-brand-accent">
                {site.contact.email}
              </a>
            </p>
            <p>
              <span className="text-brand-accent">Teléfono:</span> {site.contact.phone}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <IconButton
              type="whatsapp"
              href={site.social.whatsapp}
              label="WhatsApp de Ocana Legal"
              size="lg"
            />
            <IconButton
              type="instagram"
              href={site.social.instagram}
              label="Instagram de Ocana Legal"
              size="lg"
            />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="nombre" className="mb-1.5 block text-sm font-medium text-white/80">
              Nombre completo
            </label>
            <input
              id="nombre"
              type="text"
              required
              className="w-full rounded-sm border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none transition-colors focus:border-brand-accent"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-white/80">
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full rounded-sm border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none transition-colors focus:border-brand-accent"
              placeholder="tu@email.com"
            />
          </div>

          <div>
            <label htmlFor="telefono" className="mb-1.5 block text-sm font-medium text-white/80">
              Teléfono
            </label>
            <input
              id="telefono"
              type="tel"
              className="w-full rounded-sm border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none transition-colors focus:border-brand-accent"
              placeholder="+593 00 000 0000"
            />
          </div>

          <div>
            <label htmlFor="mensaje" className="mb-1.5 block text-sm font-medium text-white/80">
              Cuéntanos tu caso
            </label>
            <textarea
              id="mensaje"
              rows={4}
              required
              className="w-full resize-none rounded-sm border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none transition-colors focus:border-brand-accent"
              placeholder="Describe brevemente tu situación migratoria..."
            />
          </div>

          <p className="text-xs text-white/50">{site.contact.formNote}</p>

          <Button type="submit" variant="primary" className="w-full sm:w-auto">
            Enviar mensaje
          </Button>
        </form>
      </div>
    </SectionWrapper>
  )
}
