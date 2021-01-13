<template>
  <div id="news">
    <div class="navbar">
      <ul class="newsList animate__animated animate__fadeInDown">
        <li
          url="http://api.tianapi.com/txapi/wxinfo/index?key=4428d8e64916b6207baf857dac31f424&biz=MzA4Njg1MjkzOA=="
        >
          <a href="javascript:;">微信热文</a>
        </li>
        <li url="https://api.apiopen.top/getWangYiNews?count=100">
          <a href="javascript:;">网易新闻</a>
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
        </li>
      </ul>
    </div>
    <div class="newsContent">
      <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
        <li v-for="(i, index) in count" class="infinite-list-item" :key="index">{{ i }}</li>
      </ul>
    </div>
    <div class="recommend">

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 10
    };
  },
  methods: {
    load() {
      this.count += 2;
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
  /* 导航列表 */
  .navbar {
    display: flex;
    justify-content: space-between;
    .newsList {
      list-style-type: none;
      font-size: 16px;
      font-weight: 400;
      font-family: "Microsoft Yahei";
      color: #666;
      // border: 1px solid #eaeaea;
      width: 150px;
      li {
        padding: 10px 15px;
        // border: 1px dashed blue;
        // margin-top:10px;
        a {
          text-decoration: none;
          color: #666;
        }
      }
      li:hover {
        background-color: rgba(#eaeaea, 0.5);
      }
      li:hover a {
        color: #007fff;
      }
      li:first-child {
        margin-top: 0px;
      }
    }
  }
  /* 新闻列表 */
  .newsContent {
    border: 1px solid #409eef;
    width: 600px;
    margin-left: 40px;
    .infinite-list{
      li{
        padding:5px 10px;
        height:80px;
        line-height: 80px;
        border-bottom:1px solid #333;
      }
    }
  }
  /* 右侧推荐栏 */
  .recommend{
    border:1px solid green;
    margin-left: 40px;
    height:400px;
    width:400px;
  }
}
</style>
