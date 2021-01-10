const path = require('path')

module.exports = {
  outputDir: 'dist',

  configureWebpack: {
    resolve: {
      alias: {
        src: path.resolve(__dirname, 'src')
      }
    }
  }
}