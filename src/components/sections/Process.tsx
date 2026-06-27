import { site } from '../../config/site'
import { SectionWrapper } from '../layout/SectionWrapper'

export function Process() {
  return (
    <SectionWrapper id="proceso" dark className="bg-brand-primary">
      <div className="mb-16 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">
          Proceso simple
        </p>
        <h2 className="font-serif text-3xl font-semibold text-white sm:text-4xl">
          Tu trámite en cuatro pasos
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/70">
          Un proceso claro y transparente, diseñado para que siempre sepas en qué etapa se encuentra tu caso.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {site.processSteps.map((step) => (
          <div key={step.step} className="relative">
            <span className="mb-4 block font-serif text-5xl font-bold text-brand-accent/30">
              {step.step}
            </span>
            <h3 className="mb-3 font-serif text-xl font-semibold text-white">{step.title}</h3>
            <p className="text-sm leading-relaxed text-white/70">{step.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
