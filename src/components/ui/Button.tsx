import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

interface BaseProps {
  variant?: Variant
  className?: string
}

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

type AnchorProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

type Props = ButtonProps | AnchorProps

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-accent text-white hover:bg-brand-accent-light shadow-md shadow-brand-accent/20',
  secondary:
    'border-2 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white',
  ghost: 'text-white/90 hover:text-brand-accent border border-white/30 hover:border-brand-accent',
}

export function Button({ variant = 'primary', className = '', ...props }: Props) {
  const classes = [
    'inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-semibold tracking-wide uppercase transition-all duration-300',
    variants[variant],
    className,
  ].join(' ')

  if ('href' in props && props.href) {
    const { href, ...rest } = props as AnchorProps
    return <a href={href} className={classes} {...rest} />
  }

  return <button className={classes} {...(props as ButtonProps)} />
}
