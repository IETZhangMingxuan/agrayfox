/* 本文件测试后台生成token */
/**
 * 常规流程： 
 * 1.携带用户名和密码点击登录发送axios请求到后端
 * 2.后端收到请求,验证用户名和密码,验证成功后分发一个token返回给前端
 * 3.前端将token存储,例如放在cookie或者localStorage中,后续的每次请求都要携带该token
 * 4.后端收到请求,验证token是否正确,验证成功后返回请求数据
 * 
 * 
 * 本文件执行流程:
 * 
 * 
 * **/
// 1.引入jsonwebtoken工具包
var jwt = require('jsonwebtoken');
// 2.生成token
// P.S.1.令牌的签发与验证,第一个参数是有效载荷,是对用户有用的数据,指需要加密的内容
// 第二个参数是私钥,加密所用的钥匙,第三个参数是options可选项
var token = jwt.sign({
  name: 'zmm'
}, 'secret', {
  // 单位:秒
  expiresIn: 2
});

console.log(token);

// 3.验证token
// P.S.1.第一个参数是token,第二个参数是私钥
// console.log(decoded);
setTimeout(() => {
  var decoded = jwt.verify(token, 'secret');
  console.log(decoded);
},1000)

setTimeout(() => {
  var decoded = jwt.verify(token, 'secret');
  console.log(decoded);
},3000)
