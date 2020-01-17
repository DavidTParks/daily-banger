const env = require('dotenv').config();
const config = require('./contentful.json');
const contentful = require('contentful')
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
      { name: 'google-site-verification', content: 'iyfXyQ8RJD5Vwen4TUU7STuvodkbcNj87jLF1o22Zr4' },
      { hid: 'description', name: 'description', content: 'A curated song every day. Always fire.' },
      { hid: 'keywords', name: 'keywords', content: 'music, music blog, electronic music, EDM, hip-hop, blog' },
      //Open Graph
      { name: 'og:title', content: `The Daily Banger - A Fire Song Every Day` },
      { name: 'og:description', content: 'Curating the best possible music every single day, no matter what.' },
      { name: 'og:url', content: `https://www.thedailybanger.com/banger/` },
      { name: 'og:type', content: 'website' },
    ],
    script: [
      { type: 'text/javascript', src: 'https://w.soundcloud.com/player/api.js'},
      { type: 'text/javascript', src: 'https://kit.fontawesome.com/215417b77b.js' }, 
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/FaviconLogo.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway:900,900i&display=swap' },
    ]
  },
  generate: {
    routes: () => {
      const client = contentful.createClient({
        space: config.CTF_SPACE_ID,
        accessToken: config.CTF_CDA_ACCESS_TOKEN
      });

      return client.getEntries({
        content_type: 'bangerPost'
      }).then((response) => {
        return response.items.map(entry => {
          return {
            route: `/banger/${entry.fields.urlSlug}`,
            payload: entry
          };
        });
      });
    }
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
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
    CTF_ENVIRONMENT: config.CTF_ENVIRONMENT
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-purgecss',
    '@nuxtjs/sitemap',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/pwa',
  ],
  apollo: {
    clientConfigs: {
      default: '~/apollo/config.js'
    }
  },
  sitemap: {
    hostname: 'https://thedailybanger.com',
    gzip: true,
    routes: () => {
      const client = contentful.createClient({
        space: config.CTF_SPACE_ID,
        accessToken: config.CTF_CDA_ACCESS_TOKEN
      });

      return client.getEntries({
        content_type: 'bangerPost'
      }).then((response) => {
        return response.items.map(entry => `/banger/${entry.fields.urlSlug}`);
      });
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

      config.node = {
        fs: 'empty'
      }
    },
  }
}
