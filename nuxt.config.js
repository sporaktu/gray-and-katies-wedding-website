
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'spa',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Katie and Gray - May 23rd, 2021' || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Katie and Gray are getting married on May 23rd, 2021!'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '@braid/vue-formulate/themes/snow/snow.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '~/plugins/vue-formulate',
    // '~/plugins/appmetadata',
    '~/plugins/auth0'
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@aceforth/nuxt-optimized-images',
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    postcss: {
      plugins: {
        'autoprefixer': {},
        'postcss-font-magician': {},
      }
    }
  },
  optimizedImages: {
    optimizedImages: true
  },
  axios: {
    baseURL: process.env.BASE_URL || 'http://localhost:3002'
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL
    }
  },
  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL
    }
  },
  // auth: {
  //   strategies: {
  //     auth0: {
  //       domain: "grayandkatie.us.auth0.com",
  //       client_id: "ICteoEyvHAtViu1rHLtvG5UuoXp4EU2c",
  //       audience: process.env.BASE_URL || 'http://localhost:3002'
  //     }
  //   },
  //   redirect: {
  //     login: '/login',
  //     // logout: '/',
  //     // home: '/guests',
  //     callback: '/callback'
  //   }
  // },
  auth0: {
    client_id: process.env.CLIENT_ID || "ICteoEyvHAtViu1rHLtvG5UuoXp4EU2c",
    domain: "grayandkatie.us.auth0.com",
    updateSessionMinutes: 5
  },
  router: {
    middleware: ['loginUser']
  }
}
