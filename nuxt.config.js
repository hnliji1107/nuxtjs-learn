module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'myproject',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#000' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev }) {
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    publicPath: '/_nuxt/'
    
  },
  css: [
    '~/assets/css/b.css',
    // 项目中的 less 文件
    { src: '~/assets/css/base.less', lang: 'less'}
  ],
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  },
  generate: {
    dir: 'dist/myapp'
  },
  router: {
    base: '/'
  },
  plugins: [
      {src: '~plugins/iview', ssr: true}
  ]
}

