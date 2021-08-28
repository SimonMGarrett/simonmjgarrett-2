import axios from 'axios';

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'simonmjgarrett-2',
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
    ],
    script: [
      { src: 'https://plausible.io/js/plausible.js', defer: true, dataDomain: "simonmgarrett.com" },
      { src: "https://js.hcaptcha.com/1/api.js", async: true, defer: true }
    ]
    // <script defer data-domain="simonmgarrett.com" src="https://plausible.io/js/plausible.js"></script>
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
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
        }
      }
    ],
    ['@zeraton/nuxt-leaflet', {}],
    // ["hcaptcha-nuxt", {
    //   siteKey: 'ba75cb3c-8608-42c8-a832-d32d94f130d5',
    //   secret: '0x3Ec36E40585Ba20ae864211c00F41da751F7CE91'
    // }],
  ],

  // HTTP module
  http: {
    // proxyHeaders: false
  },

  // ENV vars
  env: {
    apiPrefix: 'https://api.darkgatecloud.com',
  },

  generate: {
    async routes () {
      // Get all articles
      const articlesObj = await axios.get(`https://api.darkgatecloud.com/items/article/?fields=slug`)
      const articleSlugs = articlesObj.data.data;
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
      }
    }
  }
}
