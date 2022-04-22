import { defineNuxtConfig } from "nuxt"

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  autoImports: {
  },
  publicRuntimeConfig: {
  },
  privateRuntimeConfig: {
  },
  ssr: false,
  modules: [
    // Load a local module (order matters!!!!)
    "./modules/gridjs/gridjs-module",
  ],
  meta: {
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    script: [
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css",
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css",
      },
    ],
  },
  alias: {
    "~/*": "./*",
  },
  css: [
  ],
  build: {
  },
});
