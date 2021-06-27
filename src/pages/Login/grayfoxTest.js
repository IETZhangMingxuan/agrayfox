/* 该文件为个人网站提供可用的数据接口 接口版本1.0 */
/* 引入工具包 */
const fs = require('fs');
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const axios = require('axios');
/* 创建express实例 */
const app = express();

/* 允许跨域请求(可删) */
//引入跨域模块
var cors = require('cors');
//注册跨域模块
app.use(cors());
app.all('*', function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.setHeader('Content-Type', 'application/json;charset=utf-8');
  console.log('跨域中间件已执行');
  next();
});

/* 引入jsonwebtoken工具包 */
var jwt = require('jsonwebtoken');
const {
  cookie
} = require('request');

/* express基础配置 */
const hostname = '127.0.0.1';

/* 配置body-parser中间件 */
app.use(bodyParser.urlencoded({
  extended: false
}));
/* 这样配置可以获取到request payload的参数 */
app.use(bodyParser.json())


/* 配置MySQL */
const connection = mysql.createConnection({
  host: 'xdm72189790.my3w.com',
  user: 'xdm72189790',
  password: 'Grayfox1',
  database: 'xdm72189790_db'
});

/* 连接MySQL */
connection.connect();

/* 测试MySQL是否连接成功 */
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('数据库连接成功');
  /* 配置路由表 */
  // 1.接口主页
  app.get('/', (req, res) => {
    res.send(`该网站接口仅供http://agrayfox.com本人使用,如有他人非法商用,必将追究一切责任!`)
  })
  // 2.获取网站已注册成功的所有用户列表
  app.get('/getUsers', (req, res) => {
    // 设置CORS允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    // 读取数据库
    var readSql = `SELECT * FROM grayfox`;
    connection.query(readSql, (err, result) => {
      if (err) return;
      // console.log(result);
      var data = JSON.stringify(result);
      // 从数据库中写文件
      fs.writeFile(__dirname + '/grayfoxUsers.json', data, (err) => {
        if (err) throw err;
        console.log('文件写入成功呀');
      });
    });
    res.sendFile(__dirname + '/grayfoxUsers.json');
    // res.send({
    //   code:200,
    //   data:res.sendFile(__dirname + '/grayfoxUsers.json')
    // })
  });
  // 3.新增用户信息并保存到数据库
  app.post('/registertest', (req, res) => {
    // 设置CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    // 设置响应头
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    console.log(req.body);
    // 读取数据库
    var readSql = `SELECT * FROM grayfox`;
    connection.query(readSql, (err, result) => {
      if (err) return;
      // console.log(result);
      var data = JSON.stringify(result);
      // 从数据库中写文件
      fs.writeFile(__dirname + '/grayfoxUsers.json', data, (err) => {
        console.log(data);
        if (err) throw err;
        // console.log('文件写入成功');
      });
      fs.readFile(__dirname + '/grayfoxUsers.json', (err, data) => {
        if (err) throw err;
        // console.log(JSON.parse(data.toString()));
        // console.log('文件读取成功');
        // 判断用户名是否已存在
        let result = JSON.parse(data.toString());
        let flag = true;
        for (let i = 0; i < result.length; i++) {
          if (req.body.username == result[i].username) {
            flag = false;
            break;
          }
        }
        if (flag) {
          // console.log('你可以使用该用户名');
          /* 将信息录入数据库 */
          var addsql =
            'insert into grayfox(id,username,password,email) values(0,?,?,?)';
          var addsqlParams = [`${req.body.username}`, `${req.body.password}`,
            `${req.body.email}`
          ];
          connection.query(addsql, addsqlParams, (err, result) => {
            if (err) throw err;
            console.log(result);
          });
          /* 更新grayfoxUsers.json */
          var readSql = `SELECT * FROM grayfox`;
          connection.query(readSql, (err, result) => {
            if (err) return;
            // console.log(result);
            var data = JSON.stringify(result);
            // 从数据库中写文件
            fs.writeFile(__dirname + '/grayfoxUsers.json', data, (err) => {
              console.log(data);
              if (err) throw err;
              console.log('文件写入成功');
              res.send(`用户注册成功`);
            });
          });
        } else {
          console.log('该用户名已存在');
          res.send(`该用户名已存在`);
        }
      });
    });
  });
  // 4.修改用户信息中的navlist并保存到数据库
  app.post('/editUserNavlist', (req, res) => {
    // 获取用户传来的数据
    const {
      finalStr
    } = req.body;
    console.log(finalStr);
    // 4-1.验证是否存在token
    if (req.headers.token) {
      const token = req.headers.token;
      // 4-2.验证token是否过期
      let con = jwt.verify(token, 'grayfox', (err, decoded) => {
        if (err) {
          let str = {
            error: 'token已过期'
          };
          return str
        } else {
          return decoded;
        }
      });
      console.log(con);
      // 主逻辑要在正确的token下面执行
      if (!con.error) {
        // 读取数据库,判断解析后的数据是不是数据库的用户名
        var readSql = `SELECT * FROM grayfox`;
        connection.query(readSql, (err, result) => {
          if (err) return;
          // 获取token解析出来的姓名
          const {
            name
          } = con;
          // data是数据库中所有用户的信息
          var data = JSON.parse(JSON.stringify(result));
          // 声明一个判断戳
          let flag = false;
          // 用于保存token验证通过的用户信息
          let userinfo = {};
          data.forEach(item => {
            if (item.username == name) {
              flag = true;
              userinfo = item;
              return;
            }
          });
          // 主逻辑要在正确的用户名下面执行
          if (flag) {
            console.log('该token是正确的');
            // console.log(userinfo.username); 输出 陈欣欣
            // 执行数据库的修改用户navlist操作
            let searchName = userinfo.username;
            // let replaceStr =
            //   `http://www.baidu.com;百度,http://www.agrayfox.com;灰狐,http://www.taobao.com;淘宝,http://www.google.cn;谷歌,http://www.baidu.com;我的百度2`;
            var modSql = `UPDATE grayfox SET navlist = ? WHERE username = ?`;
            var modSqlParams = [`${finalStr}`, `${searchName}`];
            connection.query(modSql, modSqlParams, function (err, result) {
              if (err) {
                console.log('[UPDATE ERROR] - ', err.message);
                return;
              }
              console.log(
                '--------------------------UPDATE----------------------------');
              console.log('UPDATE affectedRows', result.affectedRows);
              console.log(
                '----------------------------OVER------------------------------\n\n'
              );
              // 读取更新后的用户数据
              var readSql = `SELECT * FROM grayfox`;
              connection.query(readSql, (err, result) => {
                if (err) return;
                // console.log(result);
                data = JSON.parse(JSON.stringify(result));
                data.forEach(item => {
                  if (item.username == name) {
                    userinfo = item;
                    return;
                  }
                });
                res.send({
                  code: 200,
                  meaasge: '修改成功',
                  data: {
                    userInfo: {
                      id: userinfo.id,
                      username: userinfo.username,
                      email: userinfo.email,
                      tel: userinfo.tel,
                      profile: userinfo.profile,
                      navlist: userinfo.navlist,
                    },
                    token: token
                  }
                })
              });
            });
          } else {
            console.log('该token不对呀');
            res.send({
              code: 207,
              message: "失败,token不匹配",
              data: {}
            })
          }
        });
      } else {
        res.send({
          code: 207,
          message: "失败,token过期了",
          data: {}
        })
      }
    } else {
      // token已过期
      res.send({
        code: 207,
        message: "失败,请先登录",
      })
    }
  });
  // 5.删除用户信息并保存到数据库
  app.post('/deleteUser', (req, res) => {

  });
  // 6.获取数据库中所有博客列表
  app.get('/getBlogs', (req, res) => {
    // 设置CORS允许跨域
    // res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Allow-Headers', '*');
    // 读取数据库
    var readSql = `SELECT * FROM blogs`;
    connection.query(readSql, (err, result) => {
      if (err) return;
      // console.log(result);
      var data = JSON.stringify(result);
      // 从数据库中写文件
      fs.writeFile(__dirname + '/getBlogs.json', data, (err) => {
        console.log(data);
        if (err) throw err;
        console.log('文件写入成功');
      });
    });
    console.log('读取博客成功');
    res.sendFile(__dirname + '/getBlogs.json');
  });
  // 7.用户登录请求
  app.post('/login', (req, res) => {
    // 读取数据库
    var readSql = `SELECT * FROM grayfox`;
    connection.query(readSql, (err, result) => {
      if (err) return;
      // 获取登录页面传过来的用户名和密码
      const {
        username,
        password
      } = req.body;
      console.log(username, password);
      // data是数据库中所有用户的信息
      var data = JSON.parse(JSON.stringify(result));
      let flag = false;
      let userInfo = {};
      data.forEach(item => {
        if (item.username == username && item.password == password) {
          flag = true;
          userInfo = item;
          return;
        }
      });
      if (flag) {
        console.log('登录成功');
        console.log(userInfo);
        // 成功之后给用户传一个token
        // P.S.1.令牌的签发与验证,第一个参数是有效载荷,是对用户有用的数据,指需要加密的内容
        // 第二个参数是私钥,加密所用的钥匙,第三个参数是options可选项
        var token = jwt.sign({
          name: req.body.username
        }, 'grayfox', {
          // 过期时间:单位:秒
          expiresIn: 60 * 60 * 2
        });
        res.send({
          code: 200,
          message: '成功',
          data: {
            userInfo: {
              id: userInfo.id,
              username: userInfo.username,
              email: userInfo.email,
              tel: userInfo.tel,
              profile: userInfo.profile,
              navlist: userInfo.navlist,
            },
            token: token
          },

        });
      } else {
        console.log('用户名或密码不匹配');
        res.send({
          code: 207,
          data: null,
          message: "用户信息不匹配",
          ok: false
        })
      }
    });
  });
  // 8.用户注册新账号并保存到数据库
  app.post('/register', (req, res) => {
    // 8-1.读取数据库
    var readSql = `SELECT * FROM grayfox`;
    connection.query(readSql, (err, result) => {
      if (err) return;
      // 获取注册页面传过来的用户名和密码
      const {
        username,
        password,
        email
      } = req.body;
      console.log('123321');
      console.log(username, password, email);
      // 8-2.判断用户名是否重复
      // data是数据库中所有用户的信息
      var data = JSON.parse(JSON.stringify(result));
      // 声明一个判断戳
      let flag = false;
      data.forEach(item => {
        if (item.username == username) {
          flag = true;
          return;
        }
      });
      if (!flag) {
        console.log('该用户名可使用');
        // 8-3.向数据库中添加数据 (重点逻辑)
        const defaultNavlist =
          `http://www.baidu.com;百度,http://www.toutiao.com;头条,http://www.agrayfox.com;灰狐`
        var addsql =
          'insert into grayfox(id,username,password,email,navlist) values(0,?,?,?,?)';
        var addsqlParams = [`${req.body.username}`, `${req.body.password}`,
          `${req.body.email}`, defaultNavlist
        ];
        connection.query(addsql, addsqlParams, (err, result) => {
          if (err) throw err;
          console.log(result);
        });
        /* 更新grayfoxUsers.json */
        var readSql = `SELECT * FROM grayfox`;
        connection.query(readSql, (err, result) => {
          if (err) return;
          // console.log(result);
          var data = JSON.stringify(result);
          // 从数据库中写文件
          fs.writeFile(__dirname + '/grayfoxUsers.json', data, (err) => {
            console.log(data);
            if (err) throw err;
            console.log('文件写入成功');
          });
        });
        // 返回成功的响应体
        res.send({
          code: 200,
          message: '新建用户成功',
          data: {},
        });
      } else {
        res.send({
          code: 207,
          data: null,
          message: "用户名已存在",
          ok: false
        })
      }
    });
  });
  // 9.自动登录请求,判断token是否过期
  app.get('/autologin', (req, res) => {
    // 重要逻辑:判断token是否过期
    if (req.headers.token) {
      const token = req.headers.token;
      let con = jwt.verify(token, 'grayfox', (err, decoded) => {
        if (err) {
          let str = {
            error: 'token已过期'
          };
          return str
        } else {
          return decoded;
        }
      });
      console.log(con);
      if (!con.error) {
        // 读取数据库,判断解析后的数据是不是数据库的用户名
        var readSql = `SELECT * FROM grayfox`;
        connection.query(readSql, (err, result) => {
          if (err) return;
          // 获取token解析出来的姓名
          const {
            name
          } = con;
          // data是数据库中所有用户的信息
          var data = JSON.parse(JSON.stringify(result));
          // 声明一个判断戳
          let flag = false;
          // 用于保存token验证通过的用户信息
          let userinfo = {};
          data.forEach(item => {
            if (item.username == name) {
              flag = true;
              userinfo = item;
              return;
            }
          });
          if (flag) {
            console.log('该token是正确的');
            // 返回成功的响应体
            res.send({
              code: 200,
              message: '成功,token还没过期',
              data: {
                userInfo: {
                  id: userinfo.id,
                  username: userinfo.username,
                  email: userinfo.email,
                  tel: userinfo.tel,
                  profile: userinfo.profile,
                  navlist: userinfo.navlist,
                },
                token: token
              }
            })
          } else {
            console.log('该token不对呀');
            res.send({
              code: 207,
              message: "失败,token不匹配",
              data: {}
            })
          }
        });


      } else {
        res.send({
          code: 207,
          message: "失败,token过期了",
          data: {}
        })
      }
    } else {
      res.send({
        code: 207,
        message: "失败,请先登录",
      })
    }
  });
  // 10.[测试:需要部署后才能得知是否可用]爬虫爬取快手热门视频之acfun视频
  app.get('/kuaishouAcfun', (req, resp) => {
    var testArr = [];
    axios({
      method: "post",
      url: "https://www.kuaishou.com/graphql",
      data: {
        "operationName": "acfunFeedDataQuery",
        "query": "fragment acResult on AcResult {\n  resultType\n  errorMeg\n  feeds {\n    anmimeId\n    title\n    photoUrl\n    type\n    likeCount\n    poster\n    animatedCoverUrl\n    __typename\n  }\n  __typename\n}\n\nquery acfunFeedDataQuery {\n  acfunFeedData {\n    ...acResult\n    __typename\n  }\n}\n",
        "variables": {}
      }
    }).then(res => {
      //   console.log(res.data.data.acfunFeedData.feeds);
      testArr = res.data.data.acfunFeedData.feeds;
      console.log(testArr);
      resp.send({
        code: 200,
        message: "爬取快手Acfun热门视频成功",
        data: testArr
      })
    }, err => {
      console.log(err);
    });
  });
  // 11.快手爬虫-爬取快手精彩短视频
  app.get('/kuaishouHot', (req, resp) => {
    var testArr = [];
    axios({
      method: "post",
      url: "https://www.kuaishou.com/graphql",
      data: {
        "operationName": "brilliantDataQuery",
        "query": "fragment feedContent on Feed {\n  type\n  author {\n    id\n    name\n    headerUrl\n    following\n    headerUrls {\n      url\n      __typename\n    }\n    __typename\n  }\n  photo {\n    id\n    duration\n    caption\n    likeCount\n    realLikeCount\n    coverUrl\n    photoUrl\n    coverUrls {\n      url\n      __typename\n    }\n    timestamp\n    expTag\n    animatedCoverUrl\n    distance\n    videoRatio\n    liked\n    stereoType\n    __typename\n  }\n  canAddComment\n  llsid\n  status\n  currentPcursor\n  __typename\n}\n\nfragment photoResult on PhotoResult {\n  result\n  llsid\n  expTag\n  serverExpTag\n  pcursor\n  feeds {\n    ...feedContent\n    __typename\n  }\n  webPageArea\n  __typename\n}\n\nquery brilliantDataQuery($pcursor: String, $semKeyword: String, $semCrowd: String, $utmSource: String, $utmMedium: String, $page: String, $photoId: String, $utmCampaign: String, $webPageArea: String) {\n  brilliantData(pcursor: $pcursor, semKeyword: $semKeyword, semCrowd: $semCrowd, utmSource: $utmSource, utmMedium: $utmMedium, page: $page, photoId: $photoId, utmCampaign: $utmCampaign, webPageArea: $webPageArea) {\n    ...photoResult\n    __typename\n  }\n}\n",
        "variables": {
          "semKeyword": "",
          "semCrowd": "",
          "utmSource": "",
          "utmMedium": "",
          "page": "home",
          "photoId": ""
        }
      }
    }).then(res => {
      //   console.log(res.data.data.acfunFeedData.feeds);
      testArr = res.data;
      // console.log(testArr);
      resp.send({
        code: 200,
        message: "爬取快手热门视频成功",
        data: testArr
      });
      console.log('爬取快手热门视频成功');
    }, err => {
      console.log(err);
    });

  });
  // 12.快手爬虫-快手搜索视频关键字
  app.post('/kuaishouSearchVideos', (req, resp) => {
    const {
      keyword
    } = req.body;
    console.log(keyword);
    var testArr = [];
    axios({
      method: "post",
      url: "https://www.kuaishou.com/graphql",
      headers: {
        "Cookie": "kpf=PC_WEB; kpn=KUAISHOU_VISION; clientid=3; client_key=65890b29; kuaishou.server.web_st=ChZrdWFpc2hvdS5zZXJ2ZXIud2ViLnN0EqABFd7Lf3QNNRWIiAL0C3PMEmrno34J7DTE7wTxfQ4-7wr0v8CT3TQ7H9lInEAz_CLojhpgODicFb3wFhI8qifA9iu-sO-qZn4RYhlBN30Pb4BRHBMMcuN2Z7JIZ6zscyxnnJOwF6Uf_FPSSoDuqm6n5dSuvg05-PLfsnw0jpFTpnLDiClz_K44onRLKV9HfLW2pcGec2qdO5T_GmkvaEVH7xoSf061Kc3w5Nem7YdpVBmH39ceIiBcKjfKgcT5Dz9Ebzqh0BrPzZBv8rrqgARe7PBnGEPVqSgFMAE; kuaishou.server.web_ph=a1bf33a86062ae3b176a83af4678373c86e0; didv=1624374233000; did=web_e3d60299adda4a9f83c0d86f301c0944",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36"
      },
      data: {
        "operationName": "visionSearchPhoto",
        "query": "query visionSearchPhoto($keyword: String, $pcursor: String, $searchSessionId: String, $page: String, $webPageArea: String) {\n  visionSearchPhoto(keyword: $keyword, pcursor: $pcursor, searchSessionId: $searchSessionId, page: $page, webPageArea: $webPageArea) {\n    result\n    llsid\n    webPageArea\n    feeds {\n      type\n      author {\n        id\n        name\n        following\n        headerUrl\n        headerUrls {\n          cdn\n          url\n          __typename\n        }\n        __typename\n      }\n      tags {\n        type\n        name\n        __typename\n      }\n      photo {\n        id\n        duration\n        caption\n        likeCount\n        realLikeCount\n        coverUrl\n        photoUrl\n        liked\n        timestamp\n        expTag\n        coverUrls {\n          cdn\n          url\n          __typename\n        }\n        photoUrls {\n          cdn\n          url\n          __typename\n        }\n        animatedCoverUrl\n        stereoType\n        videoRatio\n        __typename\n      }\n      canAddComment\n      currentPcursor\n      llsid\n      status\n      __typename\n    }\n    searchSessionId\n    pcursor\n    aladdinBanner {\n      imgUrl\n      link\n      __typename\n    }\n    __typename\n  }\n}\n",
        "variables": {
          "keyword": `${keyword}`,
          "pcursor": "",
          "page": "search"
        }
      }
    }).then(res => {
      //   console.log(res.data.data.acfunFeedData.feeds);
      testArr = res.data.data;
      // console.log(testArr);
      resp.send({
        code: 200,
        message: "爬取快手关键字视频成功",
        data: testArr
      });
      // console.log('爬取快手关键字视频成功');
    }, err => {
      console.log(err);
    });
  });
  // 13.快手爬虫-快手搜索用户关键字
  app.post('/kuaishouSearchUsers', (req, resp) => {
    const {
      keyword
    } = req.body;
    console.log(keyword);
    var testArr = [];
    axios({
      method: "post",
      url: "https://www.kuaishou.com/graphql",
      headers: {
        cookie: "kpf=PC_WEB; kpn=KUAISHOU_VISION; clientid=3; client_key=65890b29; kuaishou.server.web_st=ChZrdWFpc2hvdS5zZXJ2ZXIud2ViLnN0EqABFd7Lf3QNNRWIiAL0C3PMEmrno34J7DTE7wTxfQ4-7wr0v8CT3TQ7H9lInEAz_CLojhpgODicFb3wFhI8qifA9iu-sO-qZn4RYhlBN30Pb4BRHBMMcuN2Z7JIZ6zscyxnnJOwF6Uf_FPSSoDuqm6n5dSuvg05-PLfsnw0jpFTpnLDiClz_K44onRLKV9HfLW2pcGec2qdO5T_GmkvaEVH7xoSf061Kc3w5Nem7YdpVBmH39ceIiBcKjfKgcT5Dz9Ebzqh0BrPzZBv8rrqgARe7PBnGEPVqSgFMAE; kuaishou.server.web_ph=a1bf33a86062ae3b176a83af4678373c86e0; didv=1624374233000; did=web_e3d60299adda4a9f83c0d86f301c0944"
      },
      data: {
        "operationName": "graphqlSearchUser",
        "query": "query graphqlSearchUser($keyword: String, $pcursor: String, $searchSessionId: String) {\n  visionSearchUser(keyword: $keyword, pcursor: $pcursor, searchSessionId: $searchSessionId) {\n    result\n    users {\n      fansCount\n      photoCount\n      isFollowing\n      user_id\n      headurl\n      user_text\n      user_name\n      verified\n      verifiedDetail {\n        description\n        iconType\n        newVerified\n        musicCompany\n        type\n        __typename\n      }\n      __typename\n    }\n    searchSessionId\n    pcursor\n    __typename\n  }\n}\n",
        "variables": {
          "keyword": `${keyword}`
        }
      }
    }).then(res => {
      //   console.log(res.data.data.acfunFeedData.feeds);
      testArr = res.data.data;
      console.log(testArr);
      resp.send({
        code: 200,
        message: "爬取快手关键字用户成功",
        data: testArr
      });
      // console.log(testArr.visionSearchUser.users[1]);
      console.log('爬取快手关键字用户成功');
    }, err => {
      console.log(err);
    });
  });
  // 14.快手爬虫-快手搜索某用户最近的20条作品
  app.post('/kuaishouSearchUserInfo', (req, resp) => {
    const {
      userId
    } = req.body;
    console.log(userId);
    var testArr = [];
    axios({
      method: "post",
      url: "https://www.kuaishou.com/graphql",
      headers: {
        'cookie': "kpf=PC_WEB; kpn=KUAISHOU_VISION; clientid=3; did=web_735b4980768d58a05a35199fa7c0cf45; kuaishou.server.web_st=ChZrdWFpc2hvdS5zZXJ2ZXIud2ViLnN0EqABWeWFzIcF7Y8_mZLxpbCDJ9uiqQiEHgFwNLDIUjMpgYmcsolYekCj3y1g_6qwBn0NTkCNfZKACl_NlHW34Cg9IssQr1Jamj6FOIuYMAwfda_acCFgbTVf0-Y0nIYFkFBpUgCeqP-VrCPDH_AqFsC4AKJNjfvcefcDEYxFrhyuh7QbTLgYqcr0KkJ3tjwhskNGF9TeynWg3cM2R__uey8G8hoS7YoRGiN2PM_7zCD1Dj9m5oYoIiDH5CRErix3a0JuxSGEjb_NHA9JrFfXeyzx_nhYQPXg3igFMAE; kuaishou.server.web_ph=fa302a649e93b6b392e5df521e87b592f752"
      },
      data: {
        "operationName": "visionProfilePhotoList",
        "query": "query visionProfilePhotoList($pcursor: String, $userId: String, $page: String, $webPageArea: String) {\n  visionProfilePhotoList(pcursor: $pcursor, userId: $userId, page: $page, webPageArea: $webPageArea) {\n    result\n    llsid\n    webPageArea\n    feeds {\n      type\n      author {\n        id\n        name\n        following\n        headerUrl\n        headerUrls {\n          cdn\n          url\n          __typename\n        }\n        __typename\n      }\n      tags {\n        type\n        name\n        __typename\n      }\n      photo {\n        id\n        duration\n        caption\n        likeCount\n        realLikeCount\n        coverUrl\n        coverUrls {\n          cdn\n          url\n          __typename\n        }\n        photoUrls {\n          cdn\n          url\n          __typename\n        }\n        photoUrl\n        liked\n        timestamp\n        expTag\n        animatedCoverUrl\n        stereoType\n        videoRatio\n        __typename\n      }\n      canAddComment\n      currentPcursor\n      llsid\n      status\n      __typename\n    }\n    hostName\n    pcursor\n    __typename\n  }\n}\n",
        "variables": {
          "userId": `${userId}`,
          "pcursor": "",
          "page": "profile"
        }
      }
    }).then(res => {
      //   console.log(res.data.data.acfunFeedData.feeds);
      testArr = res.data.data;
      console.log(testArr);
      resp.send({
        code: 200,
        message: "爬取快手用户作品成功",
        data: testArr
      });
      console.log('爬取快手用户作品成功');
    }, err => {
      console.log(err);
    });
  });
  // 15.快手爬虫-快手搜索某作品下的全部评论
  app.post('/kuaishouSearchComments', (req, resp) => {
    const {
      photoId,
      authorId
    } = req.body;
    console.log(photoId, authorId);
    var testArr = [];
    axios({
      method: "post",
      url: "https://www.kuaishou.com/graphql",
      headers: {
        'cookie': "kpf=PC_WEB; kpn=KUAISHOU_VISION; clientid=3; did=web_73dff51aa81d559219ad1073c43bdc42; kuaishou.server.web_st=ChZrdWFpc2hvdS5zZXJ2ZXIud2ViLnN0EqABu_muHcBRyCjNGcC7luizwCFG7D3m1aIoYNRkRydYxuS5pJgHn2MRrVgc0wOx12uIugSuF3Qv78ZpRoX0DDkEKhPvsUmx50xMMeP8SC1nd-GemW3b2RUnCGd3b5oV-PyLK9DhDG4e__C0yJkUYf-4PcX27t5X04-rS1BsoVib_4US-Uzb7E_l_RDPMBgxv82hS73jlXrEj-vozHNZ2URXWRoSnIqSq99L0mk4jolsseGdcwiNIiB-vUIMhmA0oq2-NIfA8w8dKV7DRmYYLP8gttYFgGrSVigFMAE; kuaishou.server.web_ph=c7ebf11fd89174c1ac75637bdc7f54be82da",
        'referer': `https://www.kuaishou.com/short-video/${photoId}?authorId=${authorId}&streamSource=find&area=homexxbrilliant`
      },
      data: {
        "operationName": "commentListQuery",
        "query": "query commentListQuery($photoId: String, $pcursor: String) {\n  visionCommentList(photoId: $photoId, pcursor: $pcursor) {\n    commentCount\n    pcursor\n    rootComments {\n      commentId\n      authorId\n      authorName\n      content\n      headurl\n      timestamp\n      likedCount\n      realLikedCount\n      liked\n      status\n      subCommentCount\n      subCommentsPcursor\n      subComments {\n        commentId\n        authorId\n        authorName\n        content\n        headurl\n        timestamp\n        likedCount\n        realLikedCount\n        liked\n        status\n        replyToUserName\n        replyTo\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n",
        "variables": {
          "photoId": `${photoId}`,
          "pcursor": ""
        }
      }
    }).then(res => {
      //   console.log(res.data.data.acfunFeedData.feeds);
      testArr = res.data.data;
      console.log(testArr);
      resp.send({
        code: 200,
        message: "爬取快手用户评论成功",
        data: testArr
      });
      console.log('爬取快手用户评论成功');
    }, err => {
      console.log(err);
    });
  });
  // 16.从mySQL comments集合中获取所有评论列表
  app.get('/getAllComments', (req, res) => {
    var readSql = `SELECT * FROM comments`;
    connection.query(readSql, (err, result) => {
      if (err) {
        console.log('获取评论失败');
        res.send({
          code: 207,
          message: "获取评论失败",
        })
        return;
      }
      var data = JSON.parse(JSON.stringify(result));
      res.send({
        code: 200,
        message: "获取评论成功",
        data: data
      })
      console.log('获取评论成功');
    });
  });
  // 17.用户添加留言板评论功能
  app.post('/setComments', (req, res) => {
    // 从用户这里获得用户名,头像,评论内容,时间戳
    const {
      username,
      profile,
      content,
      time
    } = req.body;
    /* 官方标准代码 */
    var addSql = 'INSERT INTO comments(id,time,profile,username,content) VALUES(0,?,?,?,?)';
    var addSqlParams = [time, profile, username, content];
    //添加
    connection.query(addSql, addSqlParams, function (err, result) {
      if (err) throw err;
      console.log(`添加评论成功,${result}`);
      // 读取
      var readSql = `SELECT * FROM comments`;
      connection.query(readSql, (err, result) => {
        if (err) {
          console.log('添加评论失败!原因是' + err);
          res.send({
            code: 400,
            message: `添加评论失败,原因是${err}`,
            data: null
          });
          return;
        } else {
          data = JSON.parse(JSON.stringify(result));
          res.send({
            code: 200,
            meaasge: '添加评论成功',
            data: data
          });
        }
      });
    });
  });
});
/* 断开MySQL */
// connection.end();

/* 添加定时器保证数据库隔一段时间就调用一次,保持数据库的连接状态 */
setInterval(() => {
  connection.query('SELECT 1', function (error, results, fields) {
    if (error) throw error;
  });
}, 1000);


/* 启动HTTP服务 */
app.listen('9000', hostname, () => {
  console.log(`Server Running By Grayfox At http://127.0.0.1:9000/`)
})
