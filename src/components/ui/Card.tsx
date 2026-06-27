import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`rounded-sm border border-brand-primary/10 bg-white p-8 shadow-sm transition-all duration-300 hover:border-brand-accent/40 hover:shadow-md ${className}`}
    >
      {children}
    </div>
  )
}
