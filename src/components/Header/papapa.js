const fs = require('fs');
const request = require('request');
const path = require("path");



request({
  url: 'https://1911958968496216.cn-shanghai.fc.aliyuncs.com/2016-08-15/proxy/python/douyin/4', // 请求的URL
  method: 'GET',
  // 指定请求头
  headers: {
    'Accept-Language': 'zh-CN,zh;q=0.8', // 指定 Accept-Language
    'Cookie': '__utma=4454.11221.455353.21.143;' // 指定 Cookie
  }
}, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync("douyin04.json", body, err => {
      if (err) throw err;
    })
    console.log(new Date() + "时文件写入成功")
  }
});
