import { getNavSections } from '../../config/sections'
import { site } from '../../config/site'
import { IconButton } from '../ui/IconButton'

export function Footer() {
  const navSections = getNavSections()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-surface-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <img src="/logo.png" alt={site.brand.name} className="h-12 w-auto brightness-0 invert" />
              <span className="font-serif text-2xl font-semibold">{site.brand.name}</span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-white/70">{site.brand.description}</p>
            <div className="mt-6 flex gap-3">
              <IconButton
                type="whatsapp"
                href={site.social.whatsapp}
                label="WhatsApp de Ocana Legal"
              />
              <IconButton
                type="instagram"
                href={site.social.instagram}
                label="Instagram de Ocana Legal"
              />
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold text-brand-accent">Navegación</h3>
            <ul className="space-y-2">
              {navSections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-sm text-white/70 transition-colors hover:text-brand-accent"
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold text-brand-accent">Legal</h3>
            <ul className="space-y-2">
              {site.footer.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-brand-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-1 text-sm text-white/60">
              <p>{site.contact.email}</p>
              <p>{site.contact.phone}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/50">
          © {year} {site.brand.name}. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
