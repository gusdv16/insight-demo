# Insight Demo

Sitio web estático de una plataforma ficticia de analítica embebida (BI), hecho con **Astro** como proyecto de portfolio: diseño, componentes, responsive y rendimiento.

> "Insight Demo" es una marca ficticia. Los clientes, testimonios, precios y cifras son inventados y no hay ninguna empresa real detrás.

## Qué incluye
- Header fijo con menús desplegables y menú hamburguesa en móvil.
- Hero con titular en degradado y mock de panel, carrusel de logos, bloques de funcionalidades, tarjetas, sección oscura de asistente de IA y gobierno, comparación, cifras, precio fijo, testimonios, FAQ en acordeón, banda CTA y footer.
- Páginas: inicio, producto, precios, demos, recursos y contacto (formulario de muestra, no envía datos).
- Animación de aparición al hacer scroll, aviso de cookies y diseño responsive.

## Contenido propio
Textos redactados desde cero, logo e ilustraciones (paneles y chat) en SVG hechos a mano, fuentes del sistema. El sitio lleva `noindex`.

## Rendimiento
CSS propio, sin frameworks y ~1 KB de JS en línea. Al ser todo vectorial no hacen falta `srcset`/`lazy`; con fotos habría que usar `astro:assets`.

Lighthouse sobre el build de producción (Chrome headless, perfil móvil), medido en local:

| Página | Rendimiento | Accesibilidad | Buenas prácticas | SEO |
|---|---|---|---|---|
| Inicio (móvil) | 100 | 100 | 100 | 60* |
| Inicio (escritorio, antes de ajustar contraste) | 100 | 96 | 100 | 60* |
| Precios (móvil, antes de ajustar contraste) | 100 | 98 | 100 | 50* |

LCP inicio: 1,0 s móvil / 0,3 s escritorio; CLS 0. \*El SEO baja solo por el `noindex` intencional.

## Uso
```bash
npm install
npm run dev       # desarrollo
npm run build     # genera dist/
npm run preview   # sirve el build
GH_PAGES=1 npm run build   # build para GitHub Pages (/insight-demo/)
```
