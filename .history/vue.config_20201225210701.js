const path = require('path');
function resolve(dir){
    return path.join(__dirname,dir)
}
module.exports = {
    outputDir:'dist',
    derServer:{
        open:true,
        proxy:{
            /* 跨域代理服务器 */
            "/api":{
                target:"http://www.agrayfox.com"
            }
        }
    }
}