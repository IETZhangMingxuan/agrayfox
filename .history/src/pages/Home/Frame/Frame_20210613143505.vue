<template>
  <div id="frame" class="animate__animated animate__slideInLeft">
    <div class="header">
      <div class="line"></div>
      <span class="title">前端</span>
    </div>
    <ul class="frameList">
      <li class="single" v-for="(item, index) in frameList" :key="index">
        <img :src="item.imgUrl" alt="" />
        <a :href="item.url" target="_blank">{{ item.name }}</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      frameList: [
        {
          id: 0,
          name: "Bootstrap",
          imgUrl: "https://static.iiter.cn/bootstrap.png",
          url: "https://www.bootcss.com/"
        },
        {
          id: 1,
          name: "Vue",
          imgUrl: "https://static.iiter.cn/vue.png",
          url: "https://cn.vuejs.org/"
        },
        {
          id: 2,
          name: "React",
          imgUrl: "https://static.iiter.cn/react.png",
          url: "https://reactjs.org/"
        },
        {
          id: 3,
          name: "Angular",
          imgUrl: "https://static.iiter.cn/angular.png",
          url: "https://angular.cn/"
        },
        {
          id: 4,
          name: "Koa",
          imgUrl: "https://static.iiter.cn/koa.png",
          url: "https://koa.bootcss.com/"
        },
        {
          id: 5,
          name: "Express",
          imgUrl: "https://static.iiter.cn/express.png",
          url: "https://www.expressjs.com.cn/"
        },
        {
          id: 6,
          name: "Redux",
          imgUrl: "https://static.iiter.cn/eggjs.png",
          url: "https://www.redux.org.cn/"
        },
        {
          id: 7,
          name: "Flutter",
          imgUrl: "https://static.iiter.cn/flutter.png",
          url: "https://flutterchina.club/"
        },
        {
          id: 8,
          name: "Native",
          imgUrl: "https://static.iiter.cn/react.png",
          url: "https://reactnative.cn/"
        },
        {
          id: 9,
          name: "Thingjs",
          imgUrl: "https://static.iiter.cn/thingjs.ico",
          url: "https://www.thingjs.com/guide/"
        },
        {
          id: 10,
          name: "Min",
          imgUrl: "https://static.iiter.cn/meili-min.png",
          url: "https://meili.github.io/min/"
        },
        {
          id: 11,
          name: "Uniapp",
          imgUrl: "https://static.iiter.cn/uni-app.png",
          url: "https://uniapp.dcloud.io/"
        },
        {
          id: 12,
          name: "PhaserJS",
          imgUrl: "https://static.iiter.cn/phaserjs.png",
          url: "https://phaser.io/"
        },
        {
          id: 13,
          name: "Umijs",
          imgUrl: "https://img.alicdn.com/tfs/TB1zomHwxv1gK0jSZFFXXb0sXXa-200-200.png",
          url: "https://umijs.org/zh-CN/docs"
        },
        {
          id: 14,
          name: "Nuxtjs",
          imgUrl: "https://static.iiter.cn/nuxtjs.ico",
          url: "https://zh.nuxtjs.org/"
        },
        {
          id: 15,
          name: "ElementUI",
          imgUrl: "https://static.iiter.cn/element-ui.ico",
          url: "https://element.eleme.cn/#/"
        },
        {
          id: 16,
          name: "IViewui",
          imgUrl: "https://static.iiter.cn/iview.ico",
          url: "https://www.iviewui.com/"
        },
        {
          id: 17,
          name: "Vant",
          imgUrl: "https://static.iiter.cn/vant.png",
          url: "https://youzan.github.io/vant/#/zh-CN/"
        },
        {
          id: 18,
          name: "Vuetifyjs",
          imgUrl: "https://static.iiter.cn/vuetify.ico",
          url: "https://vuetifyjs.com/"
        },
        {
          id: 19,
          name: "AntDesign",
          imgUrl: "https://static.iiter.cn/ant-design.png",
          url: "https://ant.design/index-cn"
        },
        {
          id: 20,
          name: "Muse-UI",
          imgUrl: "https://static.iiter.cn/muse-ui.ico",
          url: "https://muse-ui.org/#/zh-CN"
        },
        {
          id: 21,
          name: "WeUI",
          imgUrl: "https://static.iiter.cn/weui.ico",
          url: "https://weui.io/"
        },
        {
          id: 22,
          name: "Amaze-UI",
          imgUrl: "https://static.iiter.cn/amaze-ui.png",
          url: "https://amazeui.shopxo.net/"
        },
        {
          id: 23,
          name: "MuiCSS",
          imgUrl: "https://static.iiter.cn/muicss.png",
          url: "https://www.muicss.com/"
        },
        {
          id: 24,
          name: "Mint-UI",
          imgUrl: "https://atts.w3cschool.cn/attachments/cover/cover_mintui.png?t=1581579935?imageView2/1/w/48/h/48",
          url: "https://mint-ui.github.io/#!/zh-cn"
        },
        {
          id: 25,
          name: "ZeptoJS",
          imgUrl: "https://static.iiter.cn/zeptojs.png",
          url: "https://zeptojs.com/"
        },
        {
          id: 26,
          name: "Weex-UI",
          imgUrl: "https://static.iiter.cn/weex-ui.png",
          url: "https://apache.github.io/incubator-weex-ui/#/cn/"
        },
        {
          id: 27,
          name: "Materializ",
          imgUrl: "https://static.iiter.cn/materializecss.png",
          url: "https://materializecss.com/"
        },
        {
          id: 28,
          name: "Buefy",
          imgUrl: "https://static.iiter.cn/buefy.png",
          url: "https://buefy.org/"
        },
        {
          id: 29,
          name: "UViewUI",
          imgUrl: "https://static.iiter.cn/uView.png",
          url: "https://uviewui.com/"
        },
        {
          id: 30,
          name: "ECharts",
          imgUrl: "https://static.iiter.cn/echarts.png",
          url: "https://echarts.baidu.com/"
        },
        {
          id: 31,
          name: "Threejs",
          imgUrl: "https://static.iiter.cn/threejs.png",
          url: "https://threejs.org/"
        },
        {
          id: 32,
          name: "UViewUI",
          imgUrl: "https://static.iiter.cn/uView.png",
          url: "https://uviewui.com/"
        },
        {
          id: 33,
          name: "Normalize",
          imgUrl: "https://necolas.github.io/normalize.css/logo.svg",
          url: "https://necolas.github.io/normalize.css/"
        },
        {
          id: 34,
          name: "Lodash",
          imgUrl: "https://static.iiter.cn/lodashjs.png",
          url: "https://www.lodashjs.com/"
        },
        {
          id: 35,
          name: "Underscor",
          imgUrl: "https://static.iiter.cn/underscore.ico",
          url: "https://www.underscorejs.com.cn/"
        },
        {
          id: 36,
          name: "Sass",
          imgUrl: "https://static.iiter.cn/sass.png",
          url: "https://sass.bootcss.com/"
        },
        {
          id: 37,
          name: "Less",
          imgUrl: "https://static.iiter.cn/less.png",
          url: "https://less.bootcss.com/"
        },
        {
          id: 38,
          name: "Stylus",
          imgUrl: "https://static.iiter.cn/stylus.png",
          url: "https://stylus-lang.com/"
        },
        {
          id: 39,
          name: "ES6",
          imgUrl: "https://static.iiter.cn/es6.ico",
          url: "https://es6.ruanyifeng.com/"
        },
        {
          id: 40,
          name: "NodeJS",
          imgUrl: "https://static.iiter.cn/nodejs.png",
          url: "http://nodejs.cn/api/"
        },
        {
          id: 41,
          name: "Iconfont",
          imgUrl: "https://static.iiter.cn/iconfont.ico",
          url: "https://www.iconfont.cn/"
        },
        {
          id: 42,
          name: "Easyicon",
          imgUrl: "https://static.iiter.cn/easyicon.ico",
          url: "https://www.easyicon.net/"
        },
        {
          id: 43,
          name: "Html",
          imgUrl: "https://static.iiter.cn/html.png",
          url: "https://www.runoob.com/html/html-tutorial.html"
        },
        {
          id: 44,
          name: "Css",
          imgUrl: "https://static.iiter.cn/css.png",
          url: "https://www.runoob.com/css/css-tutorial.html"
        },
        {
          id: 45,
          name: "TypeScript",
          imgUrl: "https://static.iiter.cn/typescript.png",
          url: "https://www.tslang.cn/"
        },
        {
          id: 46,
          name: "UI中国",
          imgUrl: "https://static.iiter.cn/ui-cn.ico",
          url: "https://www.ui.cn/"
        },
        {
          id: 47,
          name: "脚本之家",
          imgUrl: "https://static.iiter.cn/jb51.ico",
          url: "https://www.jb51.net/"
        }
      ]
    };
  }
};
</script>
<style scoped lang="less">
#frame {
  //   border: 1px solid blue;
  box-shadow: 0 0 20px hsla(0, 0%, 40%, 0.1);
  width: 70%;
  background-color: #fff;
  margin-top: 20px;
  border-radius: 10px;
  margin-left: 20px;
  .header {
    // border: 1px dashed red;
    position: relative;
    .line {
      width: 3px;
      height: 20px;
      line-height: 20px;
      background-color: green;
      margin: 25px 0px 0px 30px;
      display: inline-block;
    }
    .title {
      font-family: "Microsoft Yahei";
      font-size: 16px;
      margin-left: 20px;
      color: #333;
      position: absolute;
      top: 22.5px;
      user-select: none;
    }
  }
  .frameList {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-left: 10px;
    margin-bottom: 2px;
    // border: 1px solid red;
    .single {
      //   border: 1px solid blue;
      box-sizing: border-box;
      width: 15%;
      padding: 10px;
      background-color: #fff;
      text-align: left;
      border-radius: 8px;
      vertical-align: center;
      overflow: hidden;
      height: 40px !important;
      margin: 2px;
      img {
        width: 20px;
        height: 20px;
        vertical-align: middle;
      }
      a {
        vertical-align: middle;
        text-decoration: none;
        color: #999;
        font-family: "Microsoft Yahei";
        font-size: 14px;
        margin-left: 10px;
        user-select: none;
      }
      a:hover {
        color: green;
      }
    }
  }
}
#frame:hover {
  box-shadow: 0 0 20px hsla(0, 0%, 40%, 0.3);
}
</style>
