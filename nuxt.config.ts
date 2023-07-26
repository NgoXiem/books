export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['~/assets/css/main.css'],
  plugins: [],
  modules: [ '@pinia/nuxt',]

})
