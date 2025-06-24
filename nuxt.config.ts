// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  devtools: { enabled:false },
  modules: [
    '@pinia/nuxt',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
  ],
  i18n: {
    locales: [
      { code: 'uz', name: 'Oʻzbekcha', file: 'uz.js' },
      { code: 'ru', name: 'Русский', file: 'ru.js' },
      { code: 'en', name: 'English', file: 'en.js' }
    ],
    lazy: false,
    langDir: 'locales',
    defaultLocale: 'ru',
    strategy: 'no_prefix',
    vueI18n: './i18n.config.ts',
    detectBrowserLanguage: false,
  },
  build: {
    transpile: ['locales']
  },
})
