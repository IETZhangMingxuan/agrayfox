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
          name: "NPM",
          imgUrl: "https://static.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png",
          url: "https://www.npmjs.com/"
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
          imgUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAMAAABlApw1AAAAaVBMVEUAAAAAAAADAwMJCQkSEhIaGhoiIiItLS06OjpISEhUVFRfX19tbW17e3uGhoaSkpKfn5+rq6u2trbDw8PLy8vT09Pa2trg4ODp6enx8fH////////////+/v79/f37+/v4+Pj19fX///+Ajv13AAAAInRSTlP//Pbv6ebh29XSzcnGw8G/wL/AwMHExcrN0/789u/o493Y+kdyzwAAAzBJREFUeAHswYEAAAAAgKD9qRepAgAAAAAAAGDq7QNhUhYGA3DQGRu26SqImvvf8e91v+pGfeE5QZiiaYBFaVGWZZ5QeOKifc6W/2L7W5VSMCJ9n/gt96yTEKKvO8sfmq8ZeS29jfzGmzMo8lTRDfwd47Mt8yzLdHPrJsOD66+5Iri8Z4G5UgSVdSzUp4QTXQ2LjZpQspm3YAuCUFfD23BnAjgvvJkHHS9zvB2T0NFqy1u60MGuvK0+8PjZRnQg9eDNZXSgB2+voePceAc9+Pcvl9NBLryPXtEhWt7LlY7QMAd9gnrgHXUJ7aw0vCt7T2lP2vDehk4r7Ocv5y4n2kVu+SDjLQXHL7fUETZ+OXc904bSkQ9nHzltJXEsgP8azo5RTFcqkooXRpobRSJRz2BTSQKqY7yb+vn4X+yDC74AljGZrADGe8gKSDwnLCDxYlqvGtgfCaCAAffucsM+yWmttHjPlUEK2kRhGURj6xq5ElvXyFUklzrGqdF1GX6CEM+M1EDrMvwB8HVZjYwf/xRSL0bTJPFguCTw+CcSuDLeXTSYxBtSyRvgfZXh4/ShDwx04PF3JIFPrE0Wdvx8Iwl8Yu1i2tZpDqoYQyfWtiEBcGI6vlodbR1/x0dxK6bFmMTaTsuyzG7g95hb7PPG3/issn8CTIr25fj/5tznjb/+neFp1vaG/2Yvkccbf2NJ74ur+2KYzbLXxko9vmF5tf7T6KI4juhAHa/VReSRs+GVZnz8omrNpuSVWbRciVfwSmNMXnkE/gXElldKySs1rzSTX3pRewovRcyJsJlRRj6JRtHGBl7Ja43klZeow4l3MrzWM4CXQEDvYT2E/hRtDKBJjr3TkZFntOVVTuSbfOQVrKKwTzCRh5JZ9h7Di16ySReeugr3n/FaIxt14WUTf0dL3oo7QSYRzs9Ik8/0KFt/xovvwp0lPO1kFTHe6SVMhfBKJ7sGg6caK+sr4p0fgyyXw9OLMJfDK3phUwUv72StaTxV9sJkFC+9WdmNVLy4mWTZNJ7STyu7woAX6YeVlQN4p/o1ckVBU0X6a3twQAMAAIAwyP6p3XsACwAAAAAAAAeCRMie4LI2egAAAABJRU5ErkJggg==",
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
