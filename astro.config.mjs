import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: 'https://collinsmwangi.up.railway.app',

  integrations: [
    tailwind(), 
    svelte()
  ],
  vite: {
    optimizeDeps: {
      exclude: ["framer-motion"]
    }
  }
});