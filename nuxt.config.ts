// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  css: ["~/assets/css/styles.scss"],
  tailwindcss: {
    cssPath: "~/assets/css/main.css",
    configPath: "tailwind.config.js",
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
  },
});
