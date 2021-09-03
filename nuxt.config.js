export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  layoutTransition: {
    name: 'stpay',
    mode: 'out-in'
  },
  head: {
    title: 'libas',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/bootstrap.scss',
    'boxicons/css/boxicons.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugin/vuesax.js',
    '~/plugin/i18n.js',
    '~/plugin/axios.js',
    { src: '~/plugin/vee-validate.js', mode: 'client' },
    { src: '~/plugin/editor.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/moment'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    "@nuxtjs/pwa",
    '@nuxtjs/i18n',
    '@nuxtjs/auth-next',
    
  ],
  i18n: {
    locales: [
      {
        code: 'la',
        file: 'la-LO.js'
      }
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'la'
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/api/authAd', method: 'post', propertyName: 'token' },
          logout: { url: '/api/logout', method: 'post' },
          user: { url: '/api/usprofile', method: 'get', propertyName: 'user' }
        }
      },
      facebook: {
        endpoints: {
          userInfo: 'https://graph.facebook.com/v6.0/me?fields=id,name,picture{url}'
        },
        clientId: '3003040956597406',
        scope: ['public_profile', 'email']
      },
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true
  },
  proxy: {
    '/api/': { target: 'http://localhost:3333/api/v1', pathRewrite: { '^/api/': '' } }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},
  moment: {
    timezone: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    transpile: ['vee-validate'],
    // or
    extractCSS: {
      ignoreOrder: true
    }
  }
}
