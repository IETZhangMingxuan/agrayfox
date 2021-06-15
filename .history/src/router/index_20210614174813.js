import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [{
    /* 主页路由组件 */
    name: 'Home',
    path: '/home',
    component: () => import( /* webpackChunkName:"home" */ 'pages/Home/Home'),
    meta: {
      hideFooter: true
    }
  },
  {
    // 注释掉解决报错问题，当某个路由有子级路由时，父级路由需要一个默认的路由，所以父级路由不能定义name属性，解决办法是去掉name就可以了
    // name: 'News',
    path: "/news",
    component: () => import( /* webpackChunkName:"news" */ 'pages/News/News'),
    children: [{
      name: 'WYNews',
      path: 'WYNews',
      component: () => import('pages/News/WangYiNews')
    }, {
      name: 'AppleNews',
      path: 'AppleNews',
      component: () => import('pages/News/AppleNews')
    }, {
      name: 'InternationalNews',
      path: 'InternationalNews',
      component: () => import('pages/News/InternationalNews')
    }, {
      name: 'ChinaNews',
      path: 'ChinaNews',
      component: () => import('pages/News/ChinaNews')
    }, {
      name: 'BlockChainNews',
      path: 'BlockChainNews',
      component: () => import('pages/News/BlockChainNews')
    }, {
      name: 'TodaysTopNews',
      path: 'TodaysTopNews',
      component: () => import('pages/News/TodaysTopNews')
    }, {
      name: 'ZongHeNews',
      path: 'ZongHeNews',
      component: () => import('pages/News/ZongHeNews')
    }, {
      path: '',
      redirect: '/news/TodaysTopNews'
    }]

  },
  {
    name: 'blog',
    path: "/blog",
    component: () => import('pages/Blog/BlogList.vue'),
  },
  // P.S:动态路由不能被当成嵌套子路由
  {
    path: "/blog/:id",
    component: () => import( /* webpackChunkName:"id" */ `pages/Blog/Blog.vue`),
  }, {
    name: 'Resources',
    path: "/resources",
    component: () => import( /* webpackChunkName:"resources" */ 'pages/Resources/Resources'),

  }, {
    name: 'Content',
    path: "/content",
    component: () => import( /* webpackChunkName:"content" */ 'pages/Content/Content')
  }, {
    // name: 'Douyin',
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
      name: 'KaiYan',
      path: "kaiYan",
      component: () => import('pages/Douyin/Kaiyan'),
    }, {
      path: '',
      redirect: '/douyin/kaiYan'
    }]
  }, {
    name: 'Contact',
    path: "/contact",
    component: () => import( /* webpackChunkName:"contact" */ 'pages/Contact/Contact')
  },
  {
    path:'/login',
    component:() => import('pages/')
  },
  {
    /* 返回主页 */
    path: '*',
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
