import Vue from 'vue'
import App from './App.vue'
import router from 'router'
import store from 'store/store'
import 'vue-easyimport'
import 'nprogress/nprogress.css'
/* 全局引入 */
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
/* 引入工具函数 */
import 'util/util'
Vue.config.productionTip = false;
/* 引入animate.css */
import animate from 'animate.css';
Vue.use(animate);
/* 引入滑动验证码npm包 */
import SlideVerify from 'vue-monoplasty-slide-verify';

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
