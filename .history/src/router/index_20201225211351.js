import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [{
    name: 'Home',
    path: '/home',
    component: () => import(/* webpackChunkName:"home" */'pages/Home/Home.vue'),
  },
  {
    name: 'About',
    path: '/about',
    component: () => import( /* webpackChunkName: "test" */ 'pages/Test1.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
