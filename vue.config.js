const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  // transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        // target: 'https://projects.rudrakshatech.com/spay_api/public/',
        target: 'https://goldloanbackend.onrender.com',

        ws: true,
        changeOrigin: true
      },
      '/nodeapi': {
        target: 'https://goldloanbackend.onrender.com/',
        ws: true,
        changeOrigin: true
      },
    }
  }
})