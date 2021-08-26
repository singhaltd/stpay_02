export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
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
    '~/plugin/api.js',
    { src: '~/plugin/editor.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [

  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    "@nuxtjs/pwa",
    '@nuxtjs/i18n',
    '@nuxtjs/auth-next'
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
        token: {
          property: 'token',
          global: true,
          // required: true,
          // type: 'Bearer'
        },
        user: {
          property: 'user',
          // autoFetch: true
        },
        endpoints: {
          login: { url: '/api/auth', method: 'post' },
          logout: { url: '/api/logout', method: 'post' },
          user: { url: '/api/usprofile', method: 'get' }
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

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    // or
    extractCSS: {
      ignoreOrder: true
    }
  }
}
