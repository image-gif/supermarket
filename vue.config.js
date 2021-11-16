// vue.config.js
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'asset': '@/assets',
        'components': '@/components',
        'views': '@/views',
      }
    }
  },
}