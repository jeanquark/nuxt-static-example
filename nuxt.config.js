const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/nuxt-static-example/'
  }
} : {}

export default {
  ...routerBase,
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      { rel: 'icon', type: 'image/x-icon', href: process.env.DEPLOY_ENV === 'GH_PAGES' ? '/nuxt-static-example/favicon.ico' : '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    { src: '~/node_modules/highlight.js/styles/monokai-sublime.css', lang: 'css' }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // { src: '~/plugins/vue-highlightjs', ssr: false }
    { src: '~/plugins/prism.js', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    [
      'nuxt-i18n',
      {
        locales: [
          {
            code: 'en',
            iso: 'en-US',
            name: 'English',
            file: 'en-US.json'
          },
          {
            code: 'fr',
            iso: 'fr-FR',
            name: 'Français',
            file: 'fr-FR.json'
          },
          {
            code: 'de',
            iso: 'de-DE',
            name: 'Deutsch',
            file: 'de-DE.json'
          }
        ],
        parsePages: false,
        lazy: true,
        langDir: 'lang/',
        defaultLocale: 'en',
        seo: false
      }
    ],
    '@nuxtjs/markdownit',
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  markdownit: {
    injected: true,
    use: [
      'markdown-it-highlightjs'
    ]
  },
  auth: {
    strategies: {
      auth0: {
        domain: 'dev-b36ddgyg.eu.auth0.com',
        client_id: '3r3I79dZFCvhG9izQhRK2ZjgxhxxS6J0'
      }
    },
    redirect: {
      // callback: '/login'
      callback: process.env.DEPLOY_ENV === 'GH_PAGES' ? '/nuxt-static-example/login' : '/login'
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
