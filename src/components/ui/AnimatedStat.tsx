import { useEffect, useRef } from 'react'
import { animate, useInView, useMotionValue, useMotionValueEvent } from 'motion/react'

interface AnimatedStatProps {
  value: string
  /** Delay before counting starts (seconds) */
  delay?: number
  /** How long the count takes (seconds) */
  duration?: number
  className?: string
}

function parseStat(raw: string): { target: number; suffix: string } {
  const match = raw.match(/^(\d+)(.*)$/)
  if (!match) return { target: 0, suffix: raw }
  return { target: Number(match[1]), suffix: match[2] }
}

export function AnimatedStat({
  value,
  delay = 0,
  duration = 5,
  className,
}: AnimatedStatProps) {
  const { target, suffix } = parseStat(value)
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const isInView = useInView(ref, { once: true, amount: 0.4 })

  useMotionValueEvent(motionValue, 'change', (latest) => {
    if (ref.current) {
      ref.current.textContent = `${Math.round(latest)}${suffix}`
    }
  })

  useEffect(() => {
    if (!isInView) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      motionValue.set(target)
      return
    }

    const controls = animate(0, target, {
      duration,
      delay,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => motionValue.set(latest),
    })

    return () => controls.stop()
  }, [delay, duration, isInView, motionValue, target])

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  )
}
