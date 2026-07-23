import type { ReactNode } from 'react'
import { motion, type HTMLMotionProps } from 'motion/react'

type Variant = 'primary' | 'secondary' | 'ghost'

interface BaseProps {
  variant?: Variant
  className?: string
  children?: ReactNode
}

type ButtonProps = BaseProps &
  Omit<HTMLMotionProps<'button'>, 'children' | 'className'> & { href?: undefined }

type AnchorProps = BaseProps &
  Omit<HTMLMotionProps<'a'>, 'children' | 'className'> & { href: string }

type Props = ButtonProps | AnchorProps

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-accent text-white hover:bg-brand-accent-light shadow-md shadow-brand-accent/20',
  secondary:
    'border-2 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white',
  ghost: 'text-white/90 hover:text-brand-accent border border-white/30 hover:border-brand-accent',
}

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-semibold tracking-wide uppercase transition-colors duration-300'

export function Button({ variant = 'primary', className = '', children, ...props }: Props) {
  const classes = [baseClasses, variants[variant], className].join(' ')

  if ('href' in props && props.href) {
    const { href, ...rest } = props as AnchorProps
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        {...rest}
      >
        {children}
      </motion.a>
    )
  }

  const buttonProps = props as ButtonProps
  return (
    <motion.button
      type={buttonProps.type ?? 'button'}
      className={classes}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      {...buttonProps}
    >
      {children}
    </motion.button>
  )
}
