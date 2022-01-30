export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - lucanos',
    title: 'lucanos',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/faviconcopy.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/lottie.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'nuxt-i18n',
    '@nuxtjs/sitemap'
  ],

  i18n: {
    locales: [
      {
        code: 'es',
        iso: 'es-CO',
        name: '🇨🇴 - ES'
      },
      {
        code: 'en',
        iso: 'en-US',
        name: '🇺🇸 - EN'
      }
    ],
    defaultLocale: 'es',
    strategy: 'prefix_except_default',
    vueI18nLoader: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: true
    },
    parsePages: false,   // Disable babel parsing
    pages: {
      services: {
        es: '/servicios',
        en: '/services'
      },
      about: {
        es: '/acerca',
        en: '/about'
      },
      coins: {
        es: '/monedas',
        en: '/coins'
      },
      courses: {
        es: '/cursos',
        en: '/courses'
      },
      conferences: {
        es: '/conferencias',
        en: '/conferences'
      }
    }
  },

  sitemap: {
    hostname: 'https://lucanos.co',
    // shortcut notation (basic)
    i18n: true,
    // nuxt-i18n notation (advanced)
    i18n: {
      locales: ['es', 'en'],
      routesNameSeparator: '___'
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    icon: {
      fileName: 'icon-lucanos.png'
    },
    manifest: {
      name: 'lucanos',
      description: 'Empresa dedicada a enseñar sobre las diferentes aplicaciones de la tecnología blockchain y como su impacto esta haciendo historia',
      display: 'standalone',
      background_color: '#1976D2',

    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  generate: {

    async routes () {
      const { $content } = require('@nuxt/content')

      const files = await $content({ deep: true }).only(['path']).fetch()

      return files.map(
        file => file.path.includes('/es') ? file.path.slice(3) : file.path
      )
    },

    fallback: '404.html'
  }
}
