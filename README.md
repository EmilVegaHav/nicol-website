# Ocana Legal — Sitio web

Sitio web premium para **Ocana Legal**, despacho jurídico especializado en visados temporales y permanentes.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en el navegador.

## Build de producción

```bash
npm run build
npm run preview
```

## Estructura del proyecto

```
src/
├── config/
│   ├── site.ts        # Contenido, colores, links sociales, textos
│   └── sections.ts    # Registro de secciones (orden, visibilidad, nav)
├── components/
│   ├── layout/        # Header, Footer, SectionWrapper
│   ├── ui/            # Button, Card, IconButton
│   └── sections/      # Hero, Services, About, Process, etc.
└── App.tsx            # Renderiza secciones desde el registro
```

## Personalizar contenido

Edita [`src/config/site.ts`](src/config/site.ts) para cambiar textos, estadísticas, servicios, testimonios y enlaces sociales:

```ts
social: {
  whatsapp: 'https://wa.me/593XXXXXXXXX',
  instagram: 'https://instagram.com/tu_cuenta',
}
```

## Agregar una nueva sección

1. Crea el componente en `src/components/sections/MiSeccion.tsx`
2. Regístralo en [`src/config/sections.ts`](src/config/sections.ts):

```ts
{
  id: 'mi-seccion',
  label: 'Mi Sección',
  component: MiSeccion,
  enabled: true,
  showInNav: true,
}
```

3. Opcionalmente añade textos en `site.ts`

La sección aparecerá automáticamente en la página y en la navegación.

## Activar agendamiento de citas

Cuando tengas un enlace de Calendly, Cal.com u otro servicio:

1. Abre [`src/config/site.ts`](src/config/site.ts)
2. Configura:

```ts
booking: {
  enabled: true,
  embedUrl: 'https://calendly.com/tu-enlace',
}
```

## Colores de marca

| Token | Hex |
|---|---|
| Primario (teal) | `#003747` |
| Acento (dorado) | `#B0802E` |

Definidos en [`src/index.css`](src/index.css) como tokens de Tailwind.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
