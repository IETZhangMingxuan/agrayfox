<template>
  <div id="hot" class="animate__animated animate__bounceIn">
    <div class="header">
      <div class="titleImg">
        <img :src="SciChinaNewsList.site.attrs.logo" alt="" style="width:50px;height:25px" />
      </div>
      <span class="title">{{ titleName }}</span>
      <div @click="changeIndex(currentIndex, totalSize, pageSize)">
        <p class="change"><i class="iconfont icon-iconmore"></i>下一页</p>
      </div>
    </div>

    <div class="main">
      <h3 v-show="!SciChinaNewsList.site.subs[0].items.length" class="loading">努力加载中...</h3>
      <ul class="hotList">
        <li
          v-for="(item, index) in SciChinaNewsList.site.subs[0].items.slice(
            currentIndex,
            currentIndex + pageSize
          )"
          :key="index"
        >
          <p class="indexBlock">{{ index + 1 + currentIndex }}</p>
          <a :href="`https://cloud.kepuchina.cn/search/imageText?s=${item.title}?`" target="_blank" class="mainText">{{
            item.title
          }}</a>
          <span class="hotClick">{{ item.more }}</span>
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
      totalSize: 10,
      /* 每页显示条数:可修改 */
      pageSize: 7,
      /* 标题 */
      titleName: "36氪热搜榜"
    };
  },
  computed: {
    ...mapState({
      SciChinaNewsList: state => state.anyknow.SciChinaNewsList
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
  overflow: hidden;
  .header {
    // border: 1px dashed red;
    position: relative;
    height: 55px;
    .title {
      font-family: "微软雅黑";
      font-size: 16px;
      margin-left: 90px;
      color: #333;
      position: absolute;
      top: 25px;
      user-select: none;
    }
    .titleImg {
      position: absolute;
      top: 20px;
      left: 25px;
      display: block;
      img {
        width: 58px !important;
        height: 18px;
      }
    }
    .change {
      font-family: "微软雅黑";
      font-size: 12px;
      margin-left: 20px;
      // color: orangered;
      color: #444;
      position: absolute;
      top: 30px;
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
    overflow: hidden;

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
    .hotList {
      list-style-type: none;
      margin-top:5px !important;
      li {
        @liPadding: 4px;
        position: relative;
        width: 310px !important;
        overflow: hidden;
        // border: 1px solid blue;
        padding: 0px @liPadding;
        display: inline-block;
        min-height: 38px;

        .indexBlock {
          box-sizing: border-box;
          font-family: "Microsoft Yahei";
          font-size: 12px;
          padding: 2px 9px;
          border-radius: 5px;
          background-color: #eaeaea;
          color: #666;
          user-select: none;
          width: 30px;
          height: 20px;
          text-align: center;
        }
        .mainText {
          display: inline-block;
          //   border: 1px solid red;
          width: 275px;
          position: absolute;
          top: 0px;
          left: 35px;
          overflow: hidden;
          text-decoration: none;
          margin-left: 10px;
          color: #666;
          font-family: "Microsoft Yahei";
          font-size: 14px;
        }

        .mainText:hover {
          // color: #0876e4;
          color: #0876e4;
          //   text-decoration: underline;
        }
        .hotClick {
          text-align: right;
          color: #888;
          font-size: 12px;
          font-family: "Microsoft Yahei";
          // font-family: 'Times New Roman', Times, serif;
          position: absolute;
          right: 20px;
          top: 7.5px;
        }
      }
    }
  }
}
#hot:hover {
  box-shadow: 0 0 20px hsla(0, 0%, 40%, 0.3);
  top:-3px;
}
</style>
