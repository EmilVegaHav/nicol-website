import type { Transition, Variants } from 'motion/react'

/** Soft ease — elegant, not bouncy */
export const easeOut: Transition['ease'] = [0.22, 1, 0.36, 1]

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
}

export const revealTransition: Transition = {
  duration: 0.65,
  ease: easeOut,
}

export const viewportOnce = {
  once: true,
  margin: '-80px 0px' as const,
}
