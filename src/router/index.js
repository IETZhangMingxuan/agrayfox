import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [{
    /* 主页路由组件 */
    name: 'Home',
    path: '/home',
    component: () => import( /* webpackChunkName:"home" */ 'pages/Home/Home'),
  },
  {
    name: 'News',
    path: "/news",
    component: () => import( /* webpackChunkName:"news" */ 'pages/News/News'),

  },
  {
    name: 'Articles',
    path: "/articles",
    component: () => import( /* webpackChunkName:"articles" */ 'pages/Articles/Articles'),

  },
  {
    /* 返回主页 */
    path: '/',
    redirect: '/home'
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
