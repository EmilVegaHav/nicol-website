import { site } from '../../config/site'
import { SectionWrapper } from '../layout/SectionWrapper'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'

export function Booking() {
  const { enabled, embedUrl } = site.booking

  return (
    <SectionWrapper id="agendar">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">
          Agendar cita
        </p>
        <h2 className="mb-4 font-serif text-3xl font-semibold text-brand-primary sm:text-4xl">
          Agenda tu consulta
        </h2>
        <p className="mb-10 text-brand-primary/70">
          Reserva una evaluación personalizada con nuestro equipo jurídico especializado en visados y residencia.
        </p>

        {enabled && embedUrl ? (
          <div className="overflow-hidden rounded-sm border border-brand-primary/10 shadow-md">
            <iframe
              src={embedUrl}
              title="Agendar cita — Ocana Legal"
              className="h-[600px] w-full"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="rounded-sm border-2 border-dashed border-brand-accent/30 bg-brand-accent/5 px-8 py-16">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-accent/10">
              <svg className="h-8 w-8 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="mb-2 font-serif text-xl font-semibold text-brand-primary">Próximamente</p>
            <p className="mb-8 text-sm text-brand-primary/60">
              El sistema de agendamiento en línea estará disponible pronto. Mientras tanto, contáctanos directamente.
            </p>
            <Button href={site.social.whatsapp} variant="primary">
              Agendar por WhatsApp
            </Button>
          </div>
        )}
      </Reveal>
    </SectionWrapper>
  )
}
