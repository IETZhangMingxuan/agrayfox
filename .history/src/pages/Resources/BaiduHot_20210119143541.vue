<template>
  <div id="hot" class="animate__animated animate__slideInLeft">
    <div class="header">
      <div class="titleImg">
        <img :src="BaiduNewsList.site.attrs.logo" alt="" style="width:25px;height:25px" />
      </div>
      <span class="title">{{ titleName }}</span>
      <div @click="changeIndex(currentIndex, totalSize, pageSize)">
        <p class="change"><i class="iconfont icon-iconmore"></i>下一页</p>
      </div>
    </div>

    <div class="main">
      <h3 v-show="!BaiduNewsList.site.subs[0].items.length" class="loading">努力加载中...</h3>
      <ul class="hotWeiboList">
        <li
          v-for="(item, index) in BaiduNewsList.site.subs[0].items.slice(
            currentIndex,
            currentIndex + pageSize
          )"
          :key="index"
        >
          <span class="indexBlock">{{ index + 1 + currentIndex }}</span>
          <a :href="`http://www.baidu.com/s?wd=${item.title}`" target="_blank">{{ item.title }}</a>
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
      totalSize: 30,
      /* 每页显示条数:可修改 */
      pageSize: 10,
      /* 标题 */
      titleName: "百度热点榜"
    };
  },
  computed: {
    ...mapState({
      BaiduNewsList: state => state.anyknow.BaiduNewsList
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
#hot {
  //  border: 1px solid blue;
  box-shadow: 0 0 20px hsla(0, 0%, 40%, 0.1);
  width: 30%;
  background-color: #fff;
  margin-top: 30px;
  padding-bottom: 20px;
  border-radius: 10px;
  position: relative;
  height: 380px !important;
  .header {
    // border: 1px dashed red;
    position: relative;
    height:80px;
    .title {
      font-family: "微软雅黑";
      font-size: 16px;
      margin-left: 60px;
      color: #333;
      position: absolute;
      top: 25px;
      user-select: none;
    }
    .titleImg {
      position: absolute;
      top: 20px;
      left: 25px;
      img {
        width: 18px;
        height: 18px;
      }
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
      .icon-iconmore {
        font-size: 0.8em;
        padding-right: 4px;
        cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/pointer.cur), auto !important;
      }
    }
    .change:hover {
      cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/pointer.cur), auto !important;
      color: #0876e4;
    }
  }
  .main {
    margin: 5px 0px 0px 20px;
    position: relative;
    padding-top: 25px;
    .loading {
      font-family: "微软雅黑";
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
        padding: 6px 0;
        .indexBlock {
          box-sizing: border-box;
          font-family: "Microsoft Yahei";
          // font-family: "-apple-system,system-ui,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Arial;";
          font-size: 12px;
          padding: 3px 12px;
          border-radius: 5px;
          text-align: center;
          background-color: #eaeaea;
          color: #666;
          user-select: none;
          width: 40px !important;
          height: 20px !important;
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
          color: #0876e4;
          //   text-decoration: underline;
        }
      }
    }
  }
}
#hot:hover {
  box-shadow: 0 0 20px hsla(0, 0%, 40%, 0.3);
}
</style>
