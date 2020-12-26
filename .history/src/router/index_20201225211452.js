import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [{
  /* 主页路由组件 */
    name: 'Home',
    path: '/home',
    component: () => import(/* webpackChunkName:"home" */'pages/Home/Home.vue'),
  },
  {
    /* 测试路由组件 */
    name: 'Test1',
    path: '/test1',
    component: () => import( /* webpackChunkName: "test" */ 'pages/Test1.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
