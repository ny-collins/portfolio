import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://collinsmwangi.up.railway.app',

  integrations: [
    tailwind(),
    svelte(),
    sitemap()
  ],

  markdown: {
    // Prevent single line breaks from becoming <br> tags
    gfm: true,
  },

  vite: {
    optimizeDeps: {
      exclude: ["framer-motion"]
    }
  }
});