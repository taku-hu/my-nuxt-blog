import { createClient }from './plugins/contentful'
require('dotenv').config()

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN
  },
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    htmlAttrs: {
      lang: 'ja'
    },
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    { src: '~plugins/font-awesome', ssr: false },
    '~/plugins/prism'
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
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/markdownit',
    'nuxt-fontawesome'
  ],
  markdownit: {
    html: true,
    injected: true,
    linkify: true,
    breaks: false
  },
  fontawesome: {
    component: 'fa'
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  generate: {
    async routes () {
      const [works, categories, tags] = await Promise.all([
        createClient().getEntries({
          'content_type': 'work'
        }),
        createClient().getEntries({
          'content_type': 'category'
        }),
        createClient().getEntries({
          'content_type': 'tag'
        })
      ])
      return [
        ...works.items.map(work => `work/${work.fields.slug}`),
        ...categories.items.map(category => `category/${category.fields.slug}`),
        ...tags.items.map(tag => `tag/${tag.sys.id}`)
      ]
    },
    fallback: true
  },
  build: {
  }
}
