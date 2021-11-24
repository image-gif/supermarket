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
  devServer: {
    proxy: 'http://152.136.185.210:7878/api/hy66'
  }
}