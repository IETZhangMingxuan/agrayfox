<template>
  <div id="search" class="animate__animated animate__fadeIn">
    <div class="bgGif">
      <ul class="bg-bubbles">
        <li v-for="i in 10" :key="i"></li>
      </ul>
    </div>
    <div class="buttonList">
      <ul>
        <li
          v-for="item in searchNameList"
          :key="item.id"
          @click="activeFn(item.id)"
          :class="{ active: active == item.id }"
        >
          <img :src="item.imgUrl" alt="" class="imgIcon" />
          <span class="searchButton">{{ item.name }}</span>
        </li>
      </ul>
    </div>
    <div class="searchMain">
      <input type="text" placeholder="从上方选择搜索引擎后输入搜索内容" v-model="searchContent"/>
      <button @click="search(active, searchContent)">
        搜索
      </button>
    </div>
    <!-- 火狐狸css特效 -->
    <!-- <div class="firefox"></div> -->
    <div class="jiTang">
      <span v-show="RandomSentencesList.name">今日诗词</span>&nbsp;&nbsp;：{{
        RandomSentencesList.name
      }}
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      searchNameList: [
        { name: "百度", id: "0", imgUrl: "https://static.iiter.cn/baidu.ico" },
        { name: "Github", id: "1", imgUrl: "https://static.iiter.cn/github.ico" },
        { name: "谷歌", id: "2", imgUrl: "https://static.iiter.cn/google.png" },
        { name: "CSDN", id: "3", imgUrl: "https://static.iiter.cn/csdn.ico" },
        { name: "开源中国", id: "4", imgUrl: "https://static.iiter.cn/oschina.ico" },
        { name: "掘金", id: "5", imgUrl: "https://static.iiter.cn/gold.png" },
        { name: "知乎", id: "6", imgUrl: "https://static.iiter.cn/zhihu.ico" },
        { name: "必应", id: "7", imgUrl: "https://static.iiter.cn/biying.ico" },
        { name: "思否", id: "8", imgUrl: "https://static.iiter.cn/segmentfault.png" }
      ],
      active: "0",
      searchContent: "",
    };
  },
  // input自动获取焦点
  // directives: {
  //   focus: {
  //     inserted: function(el, { value }) {
  //       if (value) {
  //         el.focus();
  //       }
  //     }
  //   }
  // },
  methods: {
    activeFn(id) {
      this.active = id;
    },
    search(index, searchContent) {
      switch (index) {
        case "0":
          window.open(`https://www.baidu.com/s?wd=${searchContent}`, "_blank");
          break;
        case "1":
          window.open(`https://github.com/search?q=${searchContent}`, "_blank");
          break;
        case "2":
          window.open(`https://www.google.com/search?q=${searchContent}`, "_blank");
          break;
        case "3":
          window.open(`https://so.csdn.net/so/search/s.do?q=${searchContent}`, "_blank");
          break;
        case "4":
          window.open(`https://www.oschina.net/search?scope=all&q=${searchContent}`, "_blank");
          break;
        case "5":
          window.open(`https://juejin.cn/search?query=${searchContent}`, "_blank");
          break;
        case "6":
          window.open(`https://www.zhihu.com/search?q=${searchContent}`, "_blank");
          break;
        case "7":
          window.open(`https://cn.bing.com/search?q=${searchContent}`, "_blank");
          break;
        case "8":
          window.open(`https://segmentfault.com/search?q=${searchContent}`, "_blank");
          break;
      }
      this.searchContent = "";
    }
  },
  computed: {
    ...mapState({
      RandomSentencesList: state => state.randomSentences.RandomSentencesList
    })
  }
};
</script>
<style scoped lang="less">
@defaultColor: #007fff;
#search {
  /* 测试 */
  // background: linear-gradient(180deg, #fff, #fafafa);
  // border:1px solid red;
  padding: 40px 0px 30px 0px;
  box-sizing: border-box;
  position: relative;
  margin: 0 auto;
  width: 100%;
  .bgGif {
    z-index: -1;
    width:100%;
    height: 100%;
    position: absolute;
    top: 0;
    left:0;
    // background: linear-gradient(to bottom, #C0DDF6, #f9f9f9);
    background:url(https://img1.baidu.com/it/u=901960272,472766140&fm=26&fmt=auto&gp=0.jpg) repeat;
    opacity: .4;
    .bg-bubbles {
      position: absolute;
      // 使气泡背景充满整个屏幕
      top: 0;
      left: 0;
      width: auto;
      height: 100%;
      overflow: hidden;
      li {
        position: absolute;
        border-radius: 50%;
        // bottom 的设置是为了营造出气泡从页面底部冒出的效果；
        bottom: -160px;
        // 默认的气泡大小；
        width: 40px;
        height: 40px;
        background-color: rgba(255, 255, 255, 0.15);
        // background-color: orange;
        list-style: none;
        // 使用自定义动画使气泡渐现、上升和翻滚；
        animation: square 10s infinite;
        transition-timing-function: linear;
        // 分别设置每个气泡不同的位置、大小、透明度和速度，以显得有层次感；
        &:nth-child(1) {
          left: 10%;
        }
        &:nth-child(2) {
          left: 20%;
          width: 90px;
          height: 90px;
          animation-delay: 2s;
          animation-duration: 7s;
        }
        &:nth-child(3) {
          left: 25%;
          animation-delay: 4s;
        }
        &:nth-child(4) {
          left: 40%;
          width: 60px;
          height: 60px;
          animation-duration: 8s;
          background-color: rgba(255, 255, 255, 0.3);
        }
        &:nth-child(5) {
          left: 70%;
        }
        &:nth-child(6) {
          left: 80%;
          width: 120px;
          height: 120px;
          animation-delay: 3s;
          background-color: rgba(255, 255, 255, 0.2);
        }
        &:nth-child(7) {
          left: 32%;
          width: 160px;
          height: 160px;
          animation-delay: 2s;
        }
        &:nth-child(8) {
          left: 55%;
          width: 20px;
          height: 20px;
          animation-delay: 4s;
          animation-duration: 15s;
        }
        &:nth-child(9) {
          left: 25%;
          width: 10px;
          height: 10px;
          animation-delay: 2s;
          animation-duration: 12s;
          background-color: rgba(255, 255, 255, 0.3);
        }
        &:nth-child(10) {
          left: 85%;
          width: 160px;
          height: 160px;
          animation-delay: 5s;
        }
      }
      // 自定义 square 动画；
      @keyframes square {
        0% {
          opacity: 0.5;
          transform: translateY(0px) rotate(45deg);
        }
        25% {
          opacity: 0.75;
          transform: translateY(-400px) rotate(90deg);
        }
        50% {
          opacity: 1;
          transform: translateY(-600px) rotate(135deg);
        }
        100% {
          opacity: 0;
          transform: translateY(-1000px) rotate(180deg);
        }
      }
    }
  }
  .buttonList {
    ul {
      height: 30px;
      line-height: 30px;
      display: flex;
      justify-content: center;
      // border: 2px solid red;
      width: 1200px;
      margin: 0 auto;

      li {
        color: #666;
        font-family: "微软雅黑";
        font-size: 14px;
        /* 文字渐变色 */
        margin-left: 5px;
        box-shadow: 1.5px 1.5px 1px 1px rgba(129, 196, 255, 0.5);
        background-color: #fff;
        user-select: none;
        .imgIcon {
          width: 15px;
          height: 15px;
          border-radius: 50%;
          margin-right: 2px;
        }
        .searchButton {
          white-space: nowrap;
          display: inline-block;
          padding: 0 18px 0 0;
          list-style: none;
          padding-left: 2px;
        }
      }
      li.active {
        // color: #fff;
        // color: #333;
        color: #409eee;
        // background: linear-gradient(to right, red, #409eee);
        // -webkit-background-clip: text;
        // background-clip: text;
        // color: transparent;
        // background-color: rgba(129, 196, 255, 1);
        // background-color: rgba(#007FFF, 1);
        // background-color: rgba(#007fff, 0.8);

        box-shadow: 0 0 2px 3px rgba(99, 93, 253, 0.3);
      }
      li:hover {
        // color: #fff;
        color: #409eee;
        // background: linear-gradient(to right, red, #409eee);
        // -webkit-background-clip: text;
        // background-clip: text;
        // color: transparent;
        // background-color: rgba(129, 196, 255, 1);
        // background-color: rgba(#4fc7ff, 1);
        box-shadow: 0 0 1px 3px rgba(99, 93, 253, 0.3);
      }
    }
    ul > li {
      padding-left: 10px;
      border-radius: 25px 0 25px 0;
      height: 25px;
      text-align: center;
      line-height: 25px;
      display: flex;
      align-items: center;
      cursor: pointer;
      border: 1px solid #e3e3e3;
      transition: all 0.2s;
      margin-right: -2px;
    }
  }
  .searchMain {
    margin-top: 25px;
    margin-left: 50px;
    vertical-align: bottom;
    display: flex;
    justify-content: center;
    // border:2px solid orangered;
    width: 1200px;
    margin: 25px auto 0px;
    input {
      width: 320px;
      height: 35px;
      border: 2px solid #007fff;
      border-right: none;
      border-radius: 25px 0 0 25px;
      padding: 0 20px;
      box-sizing: border-box;
      outline: none;
      box-sizing: border-box;
      font-family: "microsoft yahei";
      font-size: 14px;
      background-color: #f9f9f9;
      // color: #888;
      color:#f4f4f4;
      // box-shadow: 0px 1px 0.5px #005efe;
    }
    input:focus {
      border-color: #007fff;
      background-color: #fff;
      color:#555666
    }
    button {
      // box-shadow: 0px 1px 0.5px #409eee;
      box-sizing: border-box;
      height: 35px;
      line-height: 35px;
      border: none;
      width: 80px;
      border-radius: 0 35px 35px 0;
      background: linear-gradient(45deg, #007fff, #4e6ef2);
      opacity: 1;
      color: #fff;
      outline: none;
      // font-family: "华文中宋";
      font-family: "微软雅黑";
      font-size: 15px;
      letter-spacing: 2px;
    }

    // button:active {
    //   padding: 3px 6px 2px 8px;
    //   border: 0.5px inset;
    //   line-height: 22px;
    //   height: 36px;
    //   text-align: center;
    //   display: inline-block;
    // }
  }
  /* 火狐狸CSS3特效 */
  .firefox {
    width: 156px;
    height: 156px;
    margin: 100px auto;
    background: url(images/foxtail.png) no-repeat 0 0;
    animation: animate-tail 3.75s steps(44) infinite;
    position: fixed;
    right: 5%;
    bottom: 0%;
  }
  @keyframes animate-tail {
    0% {
      background-position: -6864px 0;
    }
    100% {
      background-position: 0 0;
    }
  }
  /* 心灵鸡汤 */
  .jiTang {
    margin: 0 auto;
    // border:2px dashed red;
    text-align: center;
    margin-top: 15px;
    width: 1200px;
    margin-bottom: -10px;
    font-size: 15px;
    font-weight: 300;
    color: #555666;
    font-family: "Microsoft Yahei";
    letter-spacing: 1px;
  }
}
</style>
