# CraveNow

Landing de demostración: marketplace de delivery con restaurantes, combos, seguimiento de pedido y pedidos por WhatsApp.

**Demo en vivo:** https://agencia-web-delivery-demo.vercel.app

> Es una plantilla de demostración de [Carlos Avila](https://github.com/AvilaCarlosDev): el negocio, los precios y las cifras son de ejemplo. Sirve como base para adaptar una landing a un cliente real.

## Qué incluye

- Diseño responsivo (móvil, tableta y escritorio) hecho con React y Tailwind.
- Navegación por secciones con anclas y botones de contacto por WhatsApp.
- Metadatos para buscadores y vista previa al compartir (`og:image` propia).
- Imágenes alojadas dentro del proyecto (`public/img`): la landing no depende de servicios externos para mostrarse.

## Tecnología

React 19 · Vite 8 · Tailwind CSS 4 · Vitest + Testing Library · ESLint · Vercel

## Cómo usarlo

Requisitos: Node.js 22 o superior.

```bash
npm ci          # instala dependencias
npm run dev     # servidor de desarrollo
npm run lint    # revisión de código
npm test        # pruebas
npm run build   # build de producción en dist/
```

## Pruebas

`src/App.test.jsx` protege la calidad del contenido. Comprueba que:

- la página se renderiza sin errores;
- no hay imágenes externas (sin enlaces directos a Unsplash u otros sitios) y todas las imágenes referenciadas existen en `public/`;
- todas las imágenes tienen texto alternativo;
- cada enlace `#ancla` apunta a una sección real;
- los enlaces que abren pestaña nueva usan `rel="noopener"`;
- no hay botones ni enlaces vacíos;
- el título, la descripción y `og:image` (imagen propia en el dominio de la demo) están definidos.

## Integración continua

`.github/workflows/ci.yml` ejecuta lint, pruebas, build y auditoría de dependencias en cada push a `main` y en cada pull request.

## Despliegue

El proyecto se despliega en Vercel (`vercel.json`). Cada cambio en `main` publica una nueva versión.

## Imágenes

- Fotos de ambiente descargadas de [Unsplash](https://unsplash.com/license) y alojadas en `public/img/foto-*.jpg`.
- Imágenes generadas con IA: ninguna.
- `public/og.jpg` es la imagen de vista previa al compartir (1200×630).

## Autor

Carlos Avila · [GitHub](https://github.com/AvilaCarlosDev) · [LinkedIn](https://www.linkedin.com/in/avilacarlosdev)
