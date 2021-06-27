<template>
  <div id="hotnews" class="animate__animated animate__slideInLeft">
    <div class="header">
      <div class="line"></div>
      <span class="title">头条新闻</span>
      <div>
        <router-link class="change" to="/news"
          ><i class="iconfont icon-more"></i>更多分类</router-link
        >
      </div>
    </div>
    <div class="main">
      <h3 v-show="!newsHotList.length" class="loading">努力加载中...</h3>
      <ul class="hotWeiboList">
        <li
          v-for="(item, index) in newsHotList.slice(currentIndex, currentIndex + pageSize)"
          :key="index"
        >
          <span class="indexBlock">{{ index + 1 + currentIndex }}</span>
          <a :href="item.url" target="_blank">{{ item.title }}</a>
        </li>
      </ul>
    </div>
    <div class="tag">
      <i class="iconfont icon-xia" @click="changeIndex(currentIndex, totalSize, pageSize)"></i>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      /* 初始显示的首个索引:可修改,但不建议 */
      currentIndex: 0,
      /* 返回的总条数:不可修改 */
      totalSize: 50,
      /* 每页显示条数:可修改 */
      pageSize: 10
    };
  },
  computed: {
    ...mapState({
      newsHotList: state => state.hotnews.newsHotList
    })
  },
  methods: {
    changeIndex(currentIndex, totalSize, pageSize) {
      if (currentIndex < totalSize - pageSize) {
        this.currentIndex = currentIndex + pageSize;
      } else {
        this.currentIndex = 0;
      }
    }
  }
};
</script>
<style scoped lang="less">
#hotnews {
  //   border: 1px solid blue;
  box-shadow: 0 0 20px hsla(0, 0%, 40%, 0.1);
  width: 29.5%;
  background-color: #eaeaea;
  margin-top: 20px;
  padding-bottom: 20px;
  border-radius: 10px;
  position: relative;
  .header {
    // border: 1px dashed red;
    position: relative;
    .line {
      width: 3px;
      height: 20px;
      line-height: 20px;
      background-color: #409eef;
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
    .change {
      font-family: "Microsoft Yahei";
      font-size: 12px;
      margin-left: 40px;
      color: #666;
      position: absolute;
      text-decoration: none;
      top: 25px;
      right: 19px;
      user-select: none;
      .icon-exchange {
        padding-right: 4px;
        cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/pointer.cur), auto !important;
      }
      .icon-more {
        position: absolute;
        top: -1px;
        left: -21px;
        font-size: 17px;
      }
    }
    .change:hover {
      cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/pointer.cur), auto !important;
      color: #0876e4;
    }
  }
  .main {
    margin: 5px 0px 0px 20px;
    .loading {
      font-family: "Microsoft Yahei";
      font-size: 14px;
      font-weight: 400;
      color: #555;
      text-align: center;
      // position: absolute;
      // top:40%;
      // left:35%;
    }
    .hotWeiboList {
      list-style-type: none;
      li {
        width: 93%;
        overflow: hidden;
        height: 18px;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 8px 0;
        .indexBlock {
          display: inline-block;
          min-width: 14px;
          font-family: "Microsoft Yahei";
          font-size: 12px;
          padding: 3px 10px;
          border-radius: 5px;
          text-align: center;
          // background-color: #eaeaea;
          background-color: #fff;
          color: #666;
          // color:#333;
          user-select: none;
        }
        a {
          margin-left: 10px;
          text-decoration: none;
          color: #333;
          font-family: "Microsoft Yahei";
          font-size: 14px;
        }
        a:hover {
          color: #0876e4;
          //   text-decoration: underline;
        }
      }
    }
  }
  .tag {
    .icon-xia {
      font-size: 30px;
      display: inline-block;
      position: absolute;
      bottom: -3px;
      left: 45%;
      color: #333;
    }
    .icon-xia:hover {
      color: #0876e4;
    }
  }
}
// 利用伪元素给组件添加背景图
#hotnews::after {
  content: "";
  background-image: url(./images/0003.png);
  opacity: 0.4;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
  border-radius: 10px;
  background-position:left;
}
#hotnews:hover {
  box-shadow: 0 0 20px hsla(0, 0%, 40%, 0.3);
}
</style>
