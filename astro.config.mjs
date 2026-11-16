import { defineConfig } from 'astro/config';

const pages = !!process.env.GH_PAGES;
const BASE = '/insight-demo/';

// Con GH_PAGES=1 se publica bajo /insight-demo/: se prefijan los enlaces absolutos del HTML.
const prefixLinks = {
  name: 'prefix-links',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      if (!pages) return;
      const { readdir, readFile, writeFile } = await import('node:fs/promises');
      const { fileURLToPath } = await import('node:url');
      const walk = async (d) => {
        for (const e of await readdir(d, { withFileTypes: true })) {
          const p = d + e.name + (e.isDirectory() ? '/' : '');
          if (e.isDirectory()) await walk(p);
          else if (e.name.endsWith('.html')) {
            const h = await readFile(p, 'utf8');
            await writeFile(p, h.replace(/(href|src)="\/(?!insight-demo\/|\/)/g, `$1="${BASE}`));
          }
        }
      };
      await walk(fileURLToPath(dir));
    },
  },
};

export default defineConfig({
  site: 'https://gusdv16.github.io',
  base: pages ? BASE : '/',
  compressHTML: true,
  build: { inlineStylesheets: 'auto' },
  integrations: [prefixLinks],
});
