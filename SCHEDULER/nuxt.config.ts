// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxtjs/supabase"
  ],
  googleFonts: {
    families: {
      "Rubik Glitch": true,
      "Modak": true,
      "Righteous": true,
      "Faster One":true,
    }
  },
  supabase: {
    redirect: false
    },
})
