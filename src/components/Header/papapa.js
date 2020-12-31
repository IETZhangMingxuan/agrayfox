const fs = require('fs');
const request = require('request');
const path = require("path");

const url = "https://1911958968496216.cn-shanghai.fc.aliyuncs.com/2016-08-15/proxy/python/douyin/5"

request({
  url: 'https://creator.douyin.com/aweme/v1/creator/data/billboard/?billboard_type=1', // 请求的URL
  method: 'GET',
  // 指定请求头
  headers: {
    'Accept-Language': 'zh-CN,zh;q=0.8', // 指定 Accept-Language
    'Cookie': '__utma=4454.11221.455353.21.143;' // 指定 Cookie
  }
}, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync("realRequst01.json", body, err => {
      console.log(err);
      if (err) throw err;
    })
    console.log(new Date() + "时文件写入成功")
  }else{
    console.log(error);
  }
});
