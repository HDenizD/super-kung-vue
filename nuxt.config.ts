// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    'nuxt-icon',
    '@nuxtjs/google-fonts'
  ],
  colorMode: {
    classSuffix: ''
  },
  css: ['~/assets/css/main.css', 'animate.css'],
  googleFonts: {
    download: true,
    families: {
      'Press+Start+2P': true,
      'Great+Vibes': true,
      Satisfy: true,
      Merriweather: true
    }
  }
})