# Insight Demo — ejercicio de réplica de diseño

Sitio estático en **Astro** que replica el **diseño y la estructura** de un sitio comercial de analítica embebida (BI) como ejercicio de portfolio.

> **Aviso:** es un ejercicio de diseño. **No está afiliado, asociado ni respaldado por Reveal ni por Infragistics.** "Insight Demo" es una marca ficticia; los clientes, testimonios, precios y cifras son inventados. El sitio lleva `noindex`.

## Qué se replicó (diseño y estructura)
- Header fijo con menús desplegables (Producto, Soluciones, Recursos), Ayuda, Precios y botón CTA; menú hamburguesa en móvil.
- Hero con titular en degradado, dos botones y mock de panel, sobre fondos con halos naranja/rosa.
- Carrusel (marquee) de logos de clientes, bloques de funcionalidades alternados, tarjetas en 3 y 4 columnas.
- Sección oscura de "asistente de IA" y gobierno, comparación "interno vs. producto", estadísticas, precio fijo, testimonios, FAQ en acordeón, banda CTA azul y footer.
- Animación de aparición al hacer scroll y diseño responsive.
- Páginas: inicio, producto, precios, demos, recursos y contacto.
- Paleta y jerarquía tipográfica similares (azul `#2b46bb`, gris `#f6f7fa`, oscuro `#1d2430`, titulares en negrita).

## Qué se reemplazó
- Nombre, logotipo e identidad: marca ficticia con logo SVG propio.
- Todos los textos: redactados desde cero en español, no copiados.
- Logos de clientes: nombres ficticios en texto.
- Capturas de producto e imágenes: ilustraciones SVG hechas a mano (paneles y chat).
- Tipografía: pila de fuentes del sistema (sin descargar fuentes) para rapidez.

## Rendimiento
CSS propio, sin frameworks, JS en línea de ~1 KB (menú, reveal, cookies). Imágenes vectoriales (SVG en línea), por lo que no hacen falta `srcset`/`lazy`; si se añadieran fotos, usar `astro:assets`.

Lighthouse sobre el build de producción (`astro preview`, Chrome headless, perfil móvil por defecto):

| Página | Rendimiento | Accesibilidad | Buenas prácticas | SEO |
|---|---|---|---|---|
| Inicio (móvil) | 100 | 100 | 100 | 60* |
| Inicio (escritorio, antes de ajustar contraste) | 100 | 96 | 100 | 60* |
| Precios (móvil) | 100 | 98 | 100 | 50* |

LCP inicio: 1,0 s móvil / 0,3 s escritorio; CLS 0. \*El SEO baja solo por `noindex` (intencional, es un ejercicio). Los informes JSON están en `lighthouse/` (ignorados por git). Medido en local, no en un hosting real.

## Uso
```bash
npm install
npm run dev       # desarrollo
npm run build     # genera dist/
npm run preview   # sirve el build
```

Estado: solo repositorio local; no se ha publicado en ningún sitio.
