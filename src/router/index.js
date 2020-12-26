import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [{
    /* 主页路由组件 */
    name: 'Home',
    path: '/home',
    component: () => import( /* webpackChunkName:"home" */ 'pages/Home/Home'),
  },{
    /* 微博路由测试组件 */
    name: 'Weibo',
    path: '/weibo',
    component: () => import( /* webpackChunkName:"home" */ 'pages/WeiboHot/WeiboHot'),
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
