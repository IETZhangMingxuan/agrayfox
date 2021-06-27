import Vue from 'vue'
import App from './App.vue'
import router from 'router'
import store from 'store/store'
import 'vue-easyimport'
import 'nprogress/nprogress.css'
/* 全局引入 */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// 引入element-ui的Message
import { Message } from "element-ui";
// 巨坑 会在页面加载时自动跳出一个message弹窗 改成注册全局组件去使用
// Vue.use(Message);
Vue.component(Message.name, Message)
Vue.prototype.$message = Message;

/* 引入工具函数 */
import 'util/util'
Vue.config.productionTip = false;

/* 注册时间戳转换过滤器 */
Vue.filter("dateParse", function(dataString) {
  if (dataString) {
    let date = new Date(dataString);
    let Y = date.getFullYear() + "-";
    let M = (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) + "-";
    let D = (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + " ";
    let h = (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":";
    let m = (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) + ":";
    let s = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    return Y + M + D + h + m + s;
  } else {
    return "";
  }
});

/* 引入animate.css */
import animate from 'animate.css';
Vue.use(animate);
/* 引入滑动验证码npm包(建议以后封装) */
import SlideVerify from 'vue-monoplasty-slide-verify';
Vue.use(SlideVerify);
/* 事件总线 */
Vue.prototype.$bus = new Vue();

/* 巨坑 待测试 可删*/
// import axios from "axios";
// axios.defaults.withCredentials = true

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
