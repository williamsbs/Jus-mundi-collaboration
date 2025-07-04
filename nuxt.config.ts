// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/fonts"],
  css: ["~/assets/css/main.css"],
  fonts: {
    families: [
      {
        name: "IBM Plex Sans",
        provider: "google",
        weights: [100, 200, 300, 400, 500, 600, 700],
        styles: ["normal", "italic"],
      },
      {
        name: "Lato",
        provider: "google",
        weights: [400, 700],
      },
      {
        name: "Larken",
        weights: [100, 200, 300, 400, 500, 600, 700, 800],
        styles: ["normal", "italic"],
        provider: "local",
      },
    ],
  },
  app: {
    head: {
      title: "Jus mundi collaboration",
      link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    },
  },
});
