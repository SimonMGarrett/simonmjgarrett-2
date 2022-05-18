import axios from 'axios'

export default {
  target: 'static',

  head: {
    title: 'simonmjgarrett-2',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      // <script defer data-domain="simonmgarrett.com" src="https://plausible.io/js/plausible.js"></script>
      {
        src: 'https://plausible.io/js/plausible.js',
        defer: true,
        dataDomain: 'simonmgarrett.com',
      },
      { src: 'https://js.hcaptcha.com/1/api.js', async: true, defer: true },
    ],
  },

  plugins: [],

  components: true,

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],

  modules: [
    '@nuxt/http',
    [
      'nuxt-lazy-load',
      {
        // These are the default values
        images: true,
        videos: true,
        audios: true,
        iframes: true,
        native: false,
        polyfill: true,
        directiveOnly: false,

        // Default image must be in the static folder
        defaultImage: '/images/default-image.png',

        // To remove class set value to false
        loadingClass: 'isLoading',
        loadedClass: 'isLoaded',
        appendClass: 'lazyLoad',

        observerConfig: {
          // See IntersectionObserver documentation
        },
      },
    ],
    ['@zeraton/nuxt-leaflet', {}],
  ],

  http: {},

  // ENV vars
  env: {
    apiPrefix: 'https://api.darkgatecloud.com',
  },

  generate: {
    async routes() {
      // Get all articles
      const articlesObj = await axios.get(
        `https://api.darkgatecloud.com/items/article/?fields=slug`
      )
      const articleSlugs = articlesObj.data.data
      const rtnArr = articleSlugs.map((elem) => {
        return {
          route: `/articles/${elem.slug}`,
          payload: {},
        }
      })

      console.log('  :.. content files found:', rtnArr.length) // eslint-disable-line no-console
      return rtnArr
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        'postcss-nesting': {},
      },
    },
  },
}
