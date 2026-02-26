// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  modules: ['@nuxtjs/sanity'],
  sanity: {
    projectId: "uuoj93nl",
    dataset: "production",
    apiVersion: "2025-10-01",
    typegen: {
      enabled: true,
      schemaTypesPath: "../studio-hello-world/schemaTypes",
      queryPaths: ["./app/**/*.{ts,tsx,vue}"],
    },
  },
})