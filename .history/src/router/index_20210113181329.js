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
    children: [{
      name: 'WYNews',
      path: 'WYNews',
      component: () => import('pages/News/WangYiNews')
    }, {
      name: 'WXNews',
      path: 'WXNews',
      component: () => import('pages/News/WXNews')
    },{
      name: 'AppleNews',
      path: 'AppleNews',
      component: () => import('pages/News/AppleNews')
    }, {
      path: '',
      redirect: '/news/WYNews'
    }]

  },
  {
    name: 'Articles',
    path: "/articles",
    component: () => import( /* webpackChunkName:"articles" */ 'pages/Articles/Articles'),

  }, {
    name: 'Resources',
    path: "/resources",
    component: () => import( /* webpackChunkName:"resources" */ 'pages/Resources/Resources'),

  }, {
    name: 'Content',
    path: "/content",
    component: () => import( /* webpackChunkName:"content" */ 'pages/Content/Content')
  }, {
    name: 'Douyin',
    path: "/douyin",
    component: () => import( /* webpackChunkName:"douyin" */ 'pages/Douyin/Douyin'),
    children: [{
      name: 'TodayVideo',
      path: "todayVideo",
      component: () => import('pages/Douyin/TodayVideo')
    }, {
      name: 'HotVideo',
      path: "hotVideo",
      component: () => import('pages/Douyin/HotVideo')
    }, {
      name: 'RightNow',
      path: "rightNow",
      component: () => import('pages/Douyin/RightNow')
    }, {
      name: 'HotMusic',
      path: "hotMusic",
      component: () => import('pages/Douyin/HotMusic')
    }, {
      path: '',
      redirect: '/douyin/hotVideo'
    }]
  }, {
    name: 'Contact',
    path: "/contact",
    component: () => import( /* webpackChunkName:"contact" */ 'pages/Contact/Contact')
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
  // 路由滑动API,跳转到新路由时自动吸顶
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
});

export default router;
