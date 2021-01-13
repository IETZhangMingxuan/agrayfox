<template>
  <div id="news">
    <div class="navbar">
      <ul class="newsList">
        <li
          url="http://api.tianapi.com/txapi/wxinfo/index?key=4428d8e64916b6207baf857dac31f424&biz=MzA4Njg1MjkzOA=="
        >
          <a href="###">微信热文</a>
        </li>
        <li url="https://api.apiopen.top/getWangYiNews?count=100">网易新闻</li>
        <li
          url="https://pacaio.match.qq.com/irs/rcd?cid=56&ext=games&token=c786875b8e04da17b24ea5e332745e0f&num=20&expIds=20190106A13PFT%7C20190108A04MLS&page=0"
        >
          <a href="">游戏新闻</a>
        </li>
        <li url="http://api.tianapi.com/topnews/index?key=4428d8e64916b6207baf857dac31f424">
          <a href="">今日头条</a>
        </li>
        <li url="http://api.tianapi.com/guonei/index?key=4428d8e64916b6207baf857dac31f424&num=50">
          <a href="">国内新闻</a>
        </li>
        <li>
          <a href="">国际新闻</a>
        </li>
        <li>
          <a href="">苹果新闻</a>
        </li>
        <li>
          <a href="">区块链新闻</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="less">
#news {
  // border: 1px dashed blue;
  margin: 0 auto;
  text-align: center;
  margin-top: 20px;
  width: 1200px;
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
        color: #007fff;
      }
      li:first-child {
        margin-top: 0px;
      }
    }
  }
}
</style>
