const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,

  configureWebpack: {
    name: 'store',
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:8071/',
          changeOrigin: true,
          secure: false
        }
      }
    }
  },

  runtimeCompiler: true
}
