const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  outputDir: 'dist',
  devServer: {
    open: true,
    proxy: {
      /* 跨域代理服务器 */
      "/api": {
        target: "http://www.agrayfox.com"
      },
      "/txapi":{
        target:"http://api.tianapi.com"
      },
      "/topnews":{
        target:"http://api.tianapi.com"
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
        "common": resolve('src/common'),
        "modules":resolve('src/store/modules')
      }
    }
  },
  lintOnSave: false
}
