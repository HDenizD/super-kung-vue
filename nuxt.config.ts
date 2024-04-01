// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: 'icons/favicon.ico' }],
      title: 'Super Kung Vue - Quiz Game'
    }
  },
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
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
