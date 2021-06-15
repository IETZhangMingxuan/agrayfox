<template>
  <div id="hotwebs" class="animate__animated animate__fadeIn">
    <ul class="hotwebsList">
      <li class="hotweb" v-for="(item, index) in hotwebsList" :key="index">
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
      hotwebsList: [
        {
          id: 0,
          name: "影视资源",
          imgUrl: "https://img2.baidu.com/it/u=1549232340,741609365&fm=26&fmt=auto&gp=0.jpg",
          url: "https://v.iiter.cn/"
        },
        {
          id: 1,
          name: "掘金",
          imgUrl: "https://static.iiter.cn/gold.png",
          url: "https://juejin.cn/"
        },
        {
          id: 2,
          name: "Github",
          imgUrl: "https://static.iiter.cn/github.ico",
          url: "https://github.com/"
        },
        {
          id: 3,
          name: "博客园",
          imgUrl: "https://static.iiter.cn/cnblogs.png",
          url: "https://www.cnblogs.com/"
        },
        {
          id: 4,
          name: "CSDN",
          imgUrl: "https://static.iiter.cn/csdn.ico",
          url: "https://www.csdn.net/"
        },
        {
          id: 5,
          name: "思否",
          imgUrl: "https://static.iiter.cn/segmentfault.png",
          url: "https://segmentfault.com"
        },
        {
          id: 6,
          name: "码云",
          imgUrl: "https://static.iiter.cn/gitee.ico",
          url: "https://gitee.com/"
        },
        {
          id: 7,
          name: "CNode",
          imgUrl: "https://static.iiter.cn/cnodejs.png",
          url: "https://cnodejs.org/"
        },
        {
          id: 8,
          name: "V2EX",
          imgUrl: "https://static.iiter.cn/v2ex.png",
          url: "https://www.v2ex.com/"
        },
        {
          id: 9,
          name: "慕课网",
          imgUrl: "https://static.iiter.cn/imooc.png",
          url: "https://www.imooc.com/"
        },
        {
          id: 10,
          name: "开源中国",
          imgUrl: "https://static.iiter.cn/oschina.ico",
          url: "https://www.oschina.net/"
        },
        {
          id: 11,
          name: "Vue",
          imgUrl: "https://static.iiter.cn/vue.png",
          url: "https://cn.vuejs.org/"
        },
        {
          id: 12,
          name: "React",
          imgUrl: "https://static.iiter.cn/react.png",
          url: "https://reactjs.org/"
        },
        {
          id: 13,
          name: "Angular",
          imgUrl: "https://static.iiter.cn/angular.png",
          url: "https://angular.cn/"
        },
        {
          id: 14,
          name: "Webpack",
          imgUrl: "https://static.iiter.cn/webpack.png",
          url: "https://webpack.js.org/"
        },
        {
          id: 15,
          name: "CodePen",
          imgUrl: "https://static.iiter.cn/codepen.ico",
          url: "https://codepen.io/"
        },
        {
          id: 16,
          name: "TypeScript",
          imgUrl: "https://static.iiter.cn/typescript.png",
          url: "https://www.tslang.cn/"
        },
        {
          id: 17,
          name: "Bilibili",
          imgUrl: "https://static.iiter.cn/bilibili.ico",
          url: "https://www.bilibili.com/"
        },
        {
          id: 18,
          name: "17素材网",
          imgUrl: "https://www.17sucai.com/static/i/favicon.ico",
          url: "http://www.17sucai.com"
        },
        {
          id: 19,
          name: "MDN文档",
          imgUrl: "https://img1.baidu.com/it/u=1331540342,741925292&fm=26&fmt=auto&gp=0.jpg",
          url: "https://developer.mozilla.org/zh-CN/"
        },
        {
          id: 20,
          name: "淘宝",
          imgUrl: "https://img.alicdn.com/tps/i3/T1OjaVFl4dXXa.JOZB-114-114.png",
          url: "http://www.taobao.com"
        }
      ]
    };
  }
};
</script>
<style scoped lang="less">
#hotwebs {
  //   border: 1px solid blue;
  box-shadow: 0 0 20px hsla(0, 0%, 40%, 0.1);
  width: 100%;
  background-color: #fff;
  margin-top: 10px;
  border-radius: 10px;
  .hotwebsList {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 15px 0px;
    .hotweb {
      position: relative;
      box-sizing: border-box;
      box-shadow: 0 0 20px hsla(0, 0%, 40%, 0.2);
      width: 12%;
      background-color: #fff;
      margin: 10px;
      text-align: left;
      border-radius: 8px;
      vertical-align: center;
      // border:1px solid blue;
      // display: flex;
      // justify-content: flex-start;
      // flex-wrap: nowrap;
      img {
        width: 20px;
        height: 20px;
        vertical-align: middle;
        position: absolute;
        top: 10px;
        left: 10px;
      }
      a {
        vertical-align: middle;
        text-decoration: none;
        color: #999;
        font-family: "Microsoft Yahei";
        font-size: 14px;
        // margin-left: 10px;
        user-select: none;
        // border:1px solid red;
        display: inline-block;
        padding: 10px 0 10px 40px;
        width: 72%;
      }
      a:hover {
        color: orangered;
      }
    }
    li:hover {
      box-shadow: 0 0 10px hsla(0, 0%, 40%, 0.4);
    }
  }
}
#hotwebs:hover {
  box-shadow: 0 0 20px hsla(0, 0%, 40%, 0.3);
}
</style>
