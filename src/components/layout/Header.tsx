import { useEffect, useState } from 'react'
import { getNavSections } from '../../config/sections'
import { site } from '../../config/site'
import { IconButton } from '../ui/IconButton'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navSections = getNavSections()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-brand-primary/95 shadow-lg backdrop-blur-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt={site.brand.name}
            className="h-10 w-auto"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navSections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="text-sm font-medium tracking-wide text-white/80 transition-colors hover:text-brand-accent"
            >
              {section.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <IconButton
            type="instagram"
            href={site.social.instagram}
            label="Instagram de Ocana Legal"
            size="sm"
          />
          <IconButton
            type="facebook"
            href={site.social.facebook}
            label="Facebook de Ocana Legal"
            size="sm"
          />
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-sm text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-brand-primary px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-4">
            {navSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-base font-medium text-white/90 transition-colors hover:text-brand-accent"
                onClick={() => setMenuOpen(false)}
              >
                {section.label}
              </a>
            ))}
            <div className="mt-4 flex items-center gap-4 border-t border-white/10 pt-4">
              <IconButton
                type="instagram"
                href={site.social.instagram}
                label="Instagram de Ocana Legal"
              />
              <IconButton
                type="facebook"
                href={site.social.facebook}
                label="Facebook de Ocana Legal"
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
