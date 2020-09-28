import { createClient }from './plugins/contentful'

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
    title: 'taku-hu-blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'フロントエンドエンジニアによる、WEB技術・キャリア戦略のブログ。' }
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
    '~/plugins/font-awesome',
    '~/plugins/prism',
    '~/plugins/disqus'
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
    '@nuxtjs/tailwindcss',
    '@nuxtjs/style-resources',
    ['@nuxtjs/google-analytics', {
      id: process.env.GOOGLE_ANALYTICS_ID
    }]
  ],
  styleResources: {
    scss: [
      '~/assets/scss/_fragments.scss'
    ]
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/markdownit',
    'nuxt-fontawesome',
    '@nuxtjs/sitemap'
  ],
  markdownit: {
    injected: true,
    breaks: true,
    html: true,
    linkify: true,
    typography: true,
    use: [
      ['markdown-it-table-of-contents', {
        includeLevel: [2, 3],
        containerClass: 'article__table-of-contents',
        containerHeaderHtml: '<div class="toc-header">目次</div>',
        listType: 'ol'
      }],
      ['markdown-it-link-attributes', {
        attrs: {
          target: '_blank'
        }
      }],
      'markdown-it-anchor'
    ]
  },
  fontawesome: {
    component: 'fa'
  },
  sitemap: {
    hostname: 'https://taku-hu-blog.netlify.app/',
    async routes() {
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
    }
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
