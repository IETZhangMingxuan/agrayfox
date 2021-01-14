<template>
  <div id="hotnews" class="animate__animated animate__slideInLeft">
    <div class="header">
      <div class="line"></div>
      <span class="title">头条新闻</span>
      <div>
        <router-link class="change" to="/news"
          >更多分类<i class="iconfont icon-iconmore"></i
        ></router-link>
      </div>
    </div>
    <div class="main">
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
  background-color: #fff;
  margin-top: 20px;
  padding-bottom: 40px;
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
      font-family: "微软雅黑";
      font-size: 16px;
      margin-left: 20px;
      color: #333;
      position: absolute;
      top: 22.5px;
      user-select: none;
    }
    .change {
      font-family: "微软雅黑";
      font-size: 12px;
      margin-left: 40px;
      color: #666;
      position: absolute;
      text-decoration: none;
      top: 22px;
      right: 10px;
      user-select: none;
      .icon-exchange {
        padding-right: 4px;
        cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/pointer.cur), auto !important;
      }
      .icon-iconmore {
        font-size: 12px;
      }
    }
    .change:hover {
      cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/pointer.cur), auto !important;
      color: #0876e4;
    }
  }
  .main {
    margin: 10px 0px 0px 20px;
    .hotWeiboList {
      list-style-type: none;
      li {
        width: 100%;
        overflow: hidden;
        height: 18px;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 5px 0;
        .indexBlock {
          font-family: "-apple-system,system-ui,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Arial;";
          font-size: 14px;
          padding: 1px 10px;
          border: 1px solid #eaeaea;
          border-radius: 5px;
          text-align: center;
          width: 50px !important;
          background-color: #fafafa;
          color: #666;
          user-select: none;
        }
        .indexBlock:hover {
          background-color: #eaeaea;
        }
        a {
          margin-left: 10px;
          text-decoration: none;
          color: #666;
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
      bottom: 5px;
      left: 45%;
      color: #333;
    }
    .icon-xia:hover {
      color: #0876e4;
    }
  }
}
#hotnews:hover {
  box-shadow: 0 0 20px hsla(0, 0%, 40%, 0.3);
}
</style>
