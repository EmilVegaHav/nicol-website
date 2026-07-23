import { motion } from 'motion/react'
import { site } from '../../config/site'
import { easeOut, fadeUp, staggerContainer } from '../../lib/motion'
import { AnimatedStat } from '../ui/AnimatedStat'
import { Button } from '../ui/Button'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-end overflow-hidden bg-brand-primary lg:items-center"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-brand-primary to-surface-dark opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-brand-accent)_0%,_transparent_50%)] opacity-10" />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-end gap-8 px-6 pt-28 pb-0 lg:grid-cols-2 lg:items-center lg:gap-4 lg:px-8 lg:py-24">
        <motion.div
          className="relative z-10 max-w-xl pb-12 lg:pb-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12, delayChildren: 0.15 }}
        >
          <motion.p
            className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent"
            variants={fadeUp}
            transition={{ duration: 0.65, ease: easeOut }}
          >
            {site.brand.name}
          </motion.p>

          <motion.h1
            className="mb-6 font-serif text-4xl font-semibold leading-tight text-white text-balance sm:text-5xl lg:text-6xl"
            variants={fadeUp}
            transition={{ duration: 0.7, ease: easeOut }}
          >
            {site.brand.tagline}
          </motion.h1>

          <motion.p
            className="mb-10 max-w-xl text-lg leading-relaxed text-white/80"
            variants={fadeUp}
            transition={{ duration: 0.65, ease: easeOut }}
          >
            {site.brand.description}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            variants={fadeUp}
            transition={{ duration: 0.65, ease: easeOut }}
          >
            <Button href={site.social.whatsapp} variant="primary">
              Consultar por WhatsApp
            </Button>
            <Button href="#servicios" variant="ghost">
              Ver servicios
            </Button>
          </motion.div>

          <motion.div
            className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4"
            variants={staggerContainer}
            transition={{ staggerChildren: 0.1 }}
          >
            {site.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="border-l-2 border-brand-accent pl-4"
                variants={fadeUp}
                transition={{ duration: 0.6, ease: easeOut }}
              >
                <p className="font-serif text-2xl font-bold text-white lg:text-3xl">
                  <AnimatedStat value={stat.value} delay={0.15 + i * 0.12} duration={5} />
                </p>
                <p className="mt-1 text-xs text-white/60 sm:text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="relative flex min-h-[420px] items-end justify-center lg:min-h-[640px] lg:justify-end"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: easeOut, delay: 0.25 }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0 right-1/2 h-[70%] w-[70%] translate-x-1/2 rounded-full bg-brand-accent/15 blur-3xl lg:right-8 lg:translate-x-0"
          />
          <img
            src={`${import.meta.env.BASE_URL}foto.png`}
            alt={site.brand.name}
            className="relative z-[1] h-[min(78vh,720px)] w-auto max-w-none object-contain object-bottom drop-shadow-2xl select-none lg:h-[min(88vh,820px)]"
          />
        </motion.div>
      </div>
    </section>
  )
}
