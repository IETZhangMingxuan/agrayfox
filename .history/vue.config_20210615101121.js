const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
}
// 配置文件需要使用commonJS语法
module.exports = {
  outputDir: 'dist',
  devServer: {
    open: true,
    proxy: {
      /* 跨域代理服务器 */
      // "/api": {
      //   target: "http://www.agrayfox.com"
      // },
      "/txapi": {
        target: "http://api.tianapi.com"
      },
      "/topnews": {
        target: "http://api.tianapi.com"
      },
      "/api": {
        target: "https://kuaiyinshi.com"
      },
      "/proxy": {
        target: "https://1911958968496216.cn-shanghai.fc.aliyuncs.com/2016-08-15"
      }
    },
    // app:有能力注册路由(低级mockjs)
    before(app) {
      app.get('/banners', (req, res) => {
        res.json({
          // 可以data:banners 然后在本文件上方通过require
          // 引入 const banners = require('./banner.json')
          data: 1,
          code: 200
        })
      })
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve('src'),
        "http": resolve('src/http'),
        "components": resolve('src/components'),
        "pages": resolve('src/pages'),
        "router": resolve('src/router'),
        "mock": resolve('src/mock'),
        "store": resolve('src/store'),
        "common": resolve('src/common'),
        "modules": resolve('src/store/modules'),
        "videos": resolve('src/pages/Douyin/videos'),
        "util": resolve('src/util'),
      }
    }
  },
  lintOnSave: false,
  // 解决vue控制台报错 WDS
  host:'127.0.0.1'
}
