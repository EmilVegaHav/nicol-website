import { site } from '../../config/site'
import { SectionWrapper } from '../layout/SectionWrapper'

export function About() {
  return (
    <SectionWrapper id="nosotros">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">
            Sobre nosotros
          </p>
          <h2 className="mb-6 font-serif text-3xl font-semibold text-brand-primary sm:text-4xl">
            {site.about.heading}
          </h2>
          {site.about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 30)} className="mb-4 leading-relaxed text-brand-primary/70">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {site.about.highlights.map((highlight) => (
            <div
              key={highlight}
              className="flex items-start gap-3 rounded-sm border border-brand-primary/10 bg-surface p-5"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <p className="text-sm font-medium text-brand-primary">{highlight}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
