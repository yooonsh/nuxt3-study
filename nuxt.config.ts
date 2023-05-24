// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: ["@nuxtjs/apollo", "nuxt-headlessui"],

  headlessui: {
    prefix: "Headless",
  },

  apollo: {
    clients: {
      default: {
        httpEndpoint: "https://moonshot.hannah-log.site/graphql",
      },
    },
  },

  devtools: {
    enabled: true,
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: ["@/assets/css/main.css"],
});
