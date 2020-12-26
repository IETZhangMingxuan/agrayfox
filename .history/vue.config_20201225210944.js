const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  outputDir: 'dist',
  derServer: {
    open: true,
    host:"127.0.0.1",
    proxy: {
      /* 跨域代理服务器 */
      "/api": {
        target: "http://www.agrayfox.com"
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "http": resolve('src/http'),
        "components": resolve('src/components'),
        "pages": resolve('src/pages'),
        "router": resolve('src/router'),
        "mock": resolve('src/mock'),
        "store": resolve('src/store'),
        "common": resolve('src/common')
      }
    }
  },
  lintOnSave: false
}
