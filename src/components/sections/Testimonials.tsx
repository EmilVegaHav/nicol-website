import { site } from '../../config/site'
import { SectionWrapper } from '../layout/SectionWrapper'
import { Card } from '../ui/Card'
import { Reveal, Stagger, StaggerItem } from '../ui/Reveal'

function Stars({ count }: { count: number }) {
  return (
    <div className="mb-4 flex gap-1" aria-label={`${count} de 5 estrellas`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="h-4 w-4 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <SectionWrapper id="testimonios" className="bg-surface">
      <Reveal className="mb-16 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">
          Testimonios
        </p>
        <h2 className="font-serif text-3xl font-semibold text-brand-primary sm:text-4xl">
          Lo que dicen nuestros clientes
        </h2>
      </Reveal>

      <Stagger className="grid gap-6 md:grid-cols-3">
        {site.testimonials.map((testimonial) => (
          <StaggerItem key={testimonial.name}>
            <Card>
              <Stars count={testimonial.rating} />
              <p className="mb-6 text-sm italic leading-relaxed text-brand-primary/80">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-brand-primary">{testimonial.name}</p>
                <p className="text-xs text-brand-primary/50">{testimonial.location}</p>
              </div>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </SectionWrapper>
  )
}
