<template>
  <div id="hotweibo" class="animate__animated animate__slideInLeft">
    <div class="header">
      <div class="line"></div>
      <span class="title">微博实时热搜</span>
      <div @click="changeIndex(currentIndex, totalSize, pageSize)">
        <span class="change"><i class="iconfont icon-exchange"></i>换一批</span>
      </div>
    </div>
    <div class="main">
      <h3 v-show="weiboHotList.length" class="loading">努力加载中...</h3>
      <ul class="hotWeiboList">
        <li
          v-for="(item, index) in weiboHotList.slice(currentIndex, currentIndex + pageSize)"
          :key="index"
        >
          <span class="indexBlock">{{ index + 1 + currentIndex }}</span>
          <a :href="`https://s.weibo.com/weibo?q=${item.hotword}&Refer=top`" target="_blank">{{
            item.hotword
          }}</a>
        </li>
      </ul>
    </div>
    <div class="tag"></div>
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
      weiboHotList: state => state.weibohot.weiboHotList
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
#hotweibo {
  //   border: 1px solid blue;
  box-shadow: 0 0 20px hsla(0, 0%, 40%, 0.1);
  width: 30%;
  background-color: #fff;
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
      // background-color: #409eef;
      background-color: orangered;
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
      // color: orangered;
      color: #666;
      position: absolute;
      top: 24px;
      right: 20px;
      user-select: none;
      .icon-exchange {
        padding-right: 4px;
        cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/pointer.cur), auto !important;
      }
    }
    .change:hover {
      cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/pointer.cur), auto !important;
      // color: #0876e4;
      color: orangered;
    }
  }
  .main {
    margin: 10px 0px 0px 20px;
    .loading{
      font-family: "微软雅黑";
      font-size:14px;
      font-weight:400;
      color:#555;
      text-align: center;
      position: absolute;
    }
    .hotWeiboList {
      list-style-type: none;

      li {
        padding: 6px 0;
        .indexBlock {
          font-family: "Microsoft Yahei";
          // font-family: "-apple-system,system-ui,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Arial;";
          font-size: 12px;
          padding: 3px 12px;
          border-radius: 5px;
          text-align: center;
          background-color: #eaeaea;
          color: #666;
          user-select: none;
        }
        
        a {
          margin-left: 10px;
          text-decoration: none;
          color: #666;
          font-family: "Microsoft Yahei";
          font-size: 14px;
        }
        a:hover {
          // color: #0876e4;
          color: orangered;
          //   text-decoration: underline;
        }
      }
      li:first-child span {
        background-color: #ff2a2a;
        color:#fff;
        border:none;
        box-sizing:border-box;
      }
      li:nth-child(2) span {
        background-color:#ff7171;
        color:#fff;
        border:none;
        box-sizing:border-box;
      }
      li:nth-child(3) span {
        background-color:#f90;
        color:#fff;
        border:none;
        box-sizing:border-box;
      }
      li:nth-child(4) span {
        background-color:#fc0;
        color:#fff;
        border:none;
        box-sizing:border-box;
      }
      li:nth-child(5) span {
        background-color:#e7d48e;
        color:#fff;
        border:none;
        box-sizing:border-box;
      }
    }
  }
}
#hotweibo:hover {
  box-shadow: 0 0 20px hsla(0, 0%, 40%, 0.3);
}
</style>
