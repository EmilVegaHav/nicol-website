export const site = {
  brand: {
    name: 'Ocana Legal',
    tagline: 'Asesoría jurídica en visados temporales y permanentes',
    description:
      'Despacho especializado en movilidad internacional. Acompañamos cada trámite con rigor jurídico, confidencialidad y un enfoque personalizado.',
  },

  social: {
    whatsapp: 'https://wa.me/593978913796',
    instagram: 'https://www.instagram.com/ocana.legal?igsh=NGE5dzlsdHpwZ3Ji',
    facebook: 'https://www.facebook.com/abgnicoleoc/',
  },

  booking: {
    enabled: false,
    embedUrl: '',
  },

  stats: [
    { value: '10+', label: 'Años de experiencia' },
    { value: '500+', label: 'Casos gestionados' },
    { value: '15+', label: 'Países de destino' },
    { value: '98%', label: 'Clientes satisfechos' },
  ],

  services: [
    {
      title: 'Visado temporal',
      description:
        'Tramitación de visados de trabajo, estudios, turismo y negocios con preparación documental completa.',
    },
    {
      title: 'Residencia permanente',
      description:
        'Gestión de autorizaciones de residencia de larga duración y arraigo en destinos europeos y americanos.',
    },
    {
      title: 'Nacionalidad y ciudadanía',
      description:
        'Asesoría en procesos de nacionalidad por residencia, ascendencia o matrimonio con seguimiento integral.',
    },
    {
      title: 'Renovaciones',
      description:
        'Renovación de permisos de residencia y visados con anticipación para evitar lapsos en tu estatus migratorio.',
    },
    {
      title: 'Asesoría empresarial',
      description:
        'Apoyo jurídico a empresas en contratación internacional, traslados de personal y cumplimiento migratorio.',
    },
    {
      title: 'Trámites administrativos',
      description:
        'Homologación de títulos, certificados, inscripciones civiles y gestiones ante organismos consulares.',
    },
  ],

  about: {
    heading: 'Compromiso y excelencia jurídica',
    paragraphs: [
      'En Ocana Legal entendemos que cada proceso migratorio es único. Por eso ofrecemos un acompañamiento cercano, transparente y fundamentado en la normativa vigente de cada país.',
      'Nuestro enfoque combina la precisión del derecho con la sensibilidad que requiere un trámite que impacta tu vida y la de tu familia. Garantizamos confidencialidad absoluta en cada consulta.',
    ],
    highlights: [
      'Atención personalizada en cada caso',
      'Confidencialidad garantizada',
      'Seguimiento hasta la resolución',
      'Experiencia en sistemas consulares internacionales',
    ],
  },

  processSteps: [
    {
      step: '01',
      title: 'Consulta inicial',
      description:
        'Evaluamos tu situación migratoria y definimos la mejor estrategia para tu caso.',
    },
    {
      step: '02',
      title: 'Evaluación documental',
      description:
        'Revisamos y preparamos tu expediente con los requisitos exactos del consulado o autoridad competente.',
    },
    {
      step: '03',
      title: 'Gestión del trámite',
      description:
        'Presentamos tu solicitud y realizamos el seguimiento ante las instancias correspondientes.',
    },
    {
      step: '04',
      title: 'Resolución',
      description:
        'Te acompañamos hasta obtener la resolución favorable y te orientamos en los pasos posteriores.',
    },
  ],

  testimonials: [
    {
      name: 'María G.',
      location: 'Ecuador',
      text: 'El proceso de mi visa de trabajo fue impecable. Siempre supe en qué etapa estaba mi trámite y la documentación quedó perfectamente organizada.',
      rating: 5,
    },
    {
      name: 'Carlos R.',
      location: 'Colombia',
      text: 'Gracias a Ocana Legal obtuve mi residencia en tiempo récord. Profesionalismo, claridad y disponibilidad en cada momento.',
      rating: 5,
    },
    {
      name: 'Ana L.',
      location: 'Venezuela',
      text: 'Recomiendo ampliamente sus servicios. Me ayudaron con la nacionalidad española y el trámite fue mucho más ágil de lo que esperaba.',
      rating: 5,
    },
  ],

  contact: {
    email: 'contacto@occanalegal.com',
    phone: '+593 97 891 3796',
  },

  footer: {
    legal: [
      { label: 'Aviso legal', href: '#' },
      { label: 'Política de privacidad', href: '#' },
      { label: 'Política de cookies', href: '#' },
    ],
  },
} as const

export type SiteConfig = typeof site
