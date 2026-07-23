import { motion, type HTMLMotionProps } from 'motion/react'
import type { ReactNode } from 'react'
import {
  fadeUp,
  revealTransition,
  staggerContainer,
  viewportOnce,
} from '../../lib/motion'

interface RevealProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode
  /** Delay in seconds before this element animates */
  delay?: number
  className?: string
}

/** Single element fade-up on scroll into view */
export function Reveal({ children, delay = 0, className, ...props }: RevealProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ ...revealTransition, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

interface StaggerProps {
  children: ReactNode
  className?: string
}

/** Parent that staggers children using the `item` variant */
export function Stagger({ children, className }: StaggerProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggerItemProps {
  children: ReactNode
  className?: string
}

/** Child of Stagger — fades up with the parent's stagger timing */
export function StaggerItem({ children, className }: StaggerItemProps) {
  return (
    <motion.div variants={fadeUp} transition={revealTransition} className={className}>
      {children}
    </motion.div>
  )
}
