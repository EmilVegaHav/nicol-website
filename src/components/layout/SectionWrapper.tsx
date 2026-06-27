import type { ReactNode } from 'react'

interface SectionWrapperProps {
  id: string
  children: ReactNode
  className?: string
  dark?: boolean
}

export function SectionWrapper({ id, children, className = '', dark = false }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`py-20 lg:py-28 ${dark ? 'bg-brand-primary text-white' : ''} ${className}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
    </section>
  )
}
