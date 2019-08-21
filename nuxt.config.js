const env = require('dotenv').config();
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'The Daily Banger',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A curated song every day, always fire.' }
    ],
    script: [
      { src: 'https://kit.fontawesome.com/215417b77b.js' },
      { type: 'text/javascript', src: 'https://w.soundcloud.com/player/api.js'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/FaviconLogo.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway:900,900i&display=swap' },
    ]
  },
  generate: {
    routes: [
      '/banger/last_to_leave_louis_the_child',
      '/banger/troyboi_warlordz_skrillex',
      '/banger/get_free_major_lazer',
      '/banger/jpeg_mafia_baby_im_bleeding',
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
    '~/assets/sass/main.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
  ],
  /*
  ** Environment Variables
  */
  env: {
    datocmsApiKey: process.env.DATO_KEY
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/apollo',
    'nuxt-purgecss',
  ],
  apollo: {
    clientConfigs: {
      default: '~/apollo/config.js'
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'));

      svgRule.test = /\.(png|jpe?g|gif|webp)$/;

      config.module.rules.push({
        test: /\.svg$/,
        loader: 'vue-svg-loader',
      });
    },
  }
}
