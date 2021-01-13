<template>
  <div id="news">
    <div class="navbar">
      <ul class="newsList animate__animated animate__slideInDown" @click="changeVisible">
        <li v-for="(item, index) in newsNavbarList" :key="index" :data-path-name="item.pathName">
          <div class="swiperBlock" :data-path-name="item.pathName"></div>
          <router-link
            :to="`/news/${item.routerName}`"
            class="singleLink"
            :data-path-name="item.pathName"
            >{{ item.name }}</router-link
          >
        </li>
        <!-- <li
          url="http://api.tianapi.com/txapi/wxinfo/index?key=4428d8e64916b6207baf857dac31f424&biz=MzA4Njg1MjkzOA=="
        >
          <div class="swiperBlock"></div>
          <router-link to="/news/WXNews">微信热文</router-link>
        </li>
        <li>
          <router-link to="/news/WangYiNews">网易新闻</router-link>
        </li>
        <li
          url="https://pacaio.match.qq.com/irs/rcd?cid=56&ext=games&token=c786875b8e04da17b24ea5e332745e0f&num=20&expIds=20190106A13PFT%7C20190108A04MLS&page=0"
        >
          <a href="javascript:;">游戏新闻</a>
        </li>
        <li url="http://api.tianapi.com/topnews/index?key=4428d8e64916b6207baf857dac31f424">
          <a href="javascript:;">今日头条</a>
        </li>
        <li url="http://api.tianapi.com/guonei/index?key=4428d8e64916b6207baf857dac31f424&num=50">
          <a href="javascript:;">国内新闻</a>
        </li>
        <li>
          <a href="javascript:;">国际新闻</a>
        </li>
        <li>
          <a href="javascript:;">苹果新闻</a>
        </li>
        <li>
          <a href="javascript:;">区块链新闻</a>
        </li> -->
      </ul>
    </div>
    <div class="newsContent">
      <router-view></router-view>
      <!-- <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
        <li v-for="(i, index) in count" class="infinite-list-item" :key="index">
          {{ i }}
        </li>
      </ul> -->
    </div>
    <div class="recommend"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // count: 10
      newsNavbarList: [
        {
          id: 1,
          name: "微信热文",
          routerName: "WXNews",
          pathName: "/news/WXNews"
        },
        {
          id: 2,
          name: "网易新闻",
          routerName: "WYNews",
          pathName: "/news/WYNews"
        },
        {
          id: 3,
          name: "游戏新闻"
        },
        {
          id: 4,
          name: "今日头条"
        },
        {
          id: 5,
          name: "国内新闻",
          routerName: "ChinaNews",
          pathName: "/news/ChinaNews"
        },
        {
          id: 6,
          name: "国际新闻",
          routerName: "InternationalNews",
          pathName: "/news/InternationalNews"
        },
        {
          id: 7,
          name: "苹果新闻",
          routerName: "AppleNews",
          pathName: "/news/AppleNews"
          
        },
        {
          id: 8,
          name: "区块链新闻"
        }
      ],
      isActive: false
    };
  },
  methods: {
    // load() {
    //   this.count += 2;
    // }
    changeVisible(e) {
      // this.isVisible = true;
      const { pathName } = e.target.dataset;
      console.log(pathName);
      console.log(this.$route.path);
      if (pathName === this.$route.path) {
        // this.isVisible = true;
      } else {
        this.isVisible = false;
      }
    }
  }
};
</script>
<style scoped lang="less">
#news {
  // border: 1px dashed blue;
  margin: 0 auto;
  text-align: center;
  margin-top: 20px;
  width: 1200px;
  display: flex;
  justify-content: flex-start;
  min-height: 800px;
  /* 竖向导航列表 */
  .navbar {
    display: flex;
    justify-content: space-between;
    .newsList {
      list-style-type: none;
      font-size: 16px;
      font-weight: 300;
      font-family: "Microsoft Yahei";
      color: #666;
      // border: 1px solid #eaeaea;
      width: 150px;
      position: relative;
      box-sizing: border-box;

      li {
        // border:1px solid red;
        box-sizing: border-box;
        padding: 0px 0px;
        box-sizing: border-box;
        width: 150px;
        // border: 1px dashed blue;
        // margin-top:10px;
        position: relative;
        .swiperBlock {
          background-color: #409eef;
          width: 3px;
          height: 100%;
          position: absolute;
          left: 0px;
          top: 0px;
          box-sizing: border-box;
        }
        a {
          box-sizing: border-box;
          text-decoration: none;
          color: #666;
          display: inline-block;
          // border:1px solid blue;
          width: 150px !important;
        }
        a:last-child {
          padding: 8px 0px;
        }
      }
      li:hover {
        background-color: rgba(#eaeaea, 0.5);
      }
      li:hover a {
        color: #007fff;
        font-weight: 700;
      }
      li:first-child {
        margin-top: 0px;
      }
    }
  }
  /* 新闻列表 */
  .newsContent {
    // border: 1px solid #409eef;
    width: 600px;
    margin-left: 30px;
    margin-top: -10px;
    .infinite-list {
      li {
        padding: 5px 10px;
        height: 80px;
        line-height: 80px;
        // border-bottom: 1px solid #333;
      }
    }
  }
  /* 右侧推荐栏 */
  .recommend {
    border: 1px solid green;
    margin-left: 10px;
    height: 400px;
    width: 400px;
  }
}
</style>
