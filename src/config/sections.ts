import type { ComponentType } from 'react'
import { Hero } from '../components/sections/Hero'
import { Services } from '../components/sections/Services'
import { About } from '../components/sections/About'
import { Process } from '../components/sections/Process'
import { Testimonials } from '../components/sections/Testimonials'
import { Booking } from '../components/sections/Booking'

export interface SectionConfig {
  id: string
  label: string
  component: ComponentType
  enabled: boolean
  showInNav: boolean
}

export const sections: SectionConfig[] = [
  {
    id: 'inicio',
    label: 'Inicio',
    component: Hero,
    enabled: true,
    showInNav: true,
  },
  {
    id: 'servicios',
    label: 'Servicios',
    component: Services,
    enabled: true,
    showInNav: true,
  },
  {
    id: 'nosotros',
    label: 'Nosotros',
    component: About,
    enabled: true,
    showInNav: true,
  },
  {
    id: 'proceso',
    label: 'Proceso',
    component: Process,
    enabled: true,
    showInNav: true,
  },
  {
    id: 'testimonios',
    label: 'Testimonios',
    component: Testimonials,
    enabled: true,
    showInNav: true,
  },
  {
    id: 'agendar',
    label: 'Agendar',
    component: Booking,
    enabled: true,
    showInNav: true,
  },
]

export function getEnabledSections(): SectionConfig[] {
  return sections.filter((s) => s.enabled)
}

export function getNavSections(): SectionConfig[] {
  return sections.filter((s) => s.enabled && s.showInNav)
}
