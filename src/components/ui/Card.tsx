import type { ReactNode } from 'react'
import { motion } from 'motion/react'

interface CardProps {
  children: ReactNode
  className?: string
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <motion.div
      className={`rounded-sm border border-brand-primary/10 bg-white p-8 shadow-sm transition-colors duration-300 hover:border-brand-accent/40 ${className}`}
      whileHover={{ y: -4, boxShadow: '0 12px 24px -8px rgba(1, 27, 60, 0.12)' }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
