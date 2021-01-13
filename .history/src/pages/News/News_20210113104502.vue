<template>
  <div id="news">
    <div class="navbar">
      <ul class="newsList">
        <li>新闻导航</li>
        <li
          url="http://api.tianapi.com/txapi/wxinfo/index?key=4428d8e64916b6207baf857dac31f424&biz=MzA4Njg1MjkzOA=="
        >
          微信热文
        </li>
        <li url="https://api.apiopen.top/getWangYiNews?count=100">网易新闻</li>
        <li
          url="https://pacaio.match.qq.com/irs/rcd?cid=56&ext=games&token=c786875b8e04da17b24ea5e332745e0f&num=20&expIds=20190106A13PFT%7C20190108A04MLS&page=0"
        >
          游戏新闻
        </li>
        <li url="http://api.tianapi.com/topnews/index?key=4428d8e64916b6207baf857dac31f424">
          今日头条
        </li>
        <li url="http://api.tianapi.com/guonei/index?key=4428d8e64916b6207baf857dac31f424&num=50">
          国内新闻
        </li>
        <li>国际新闻</li>
        <li>区块链新闻</li>
        <li>苹果新闻</li>
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
      font-size: 18px;
      font-weight: 600;
      font-family: "Microsoft Yahei";
      color: #666;
      border: 1px solid #409eef;
      width: 300px;
      li {
        padding: 10px 15px;
        // border: 1px dashed blue;
        width: 10%;
        // margin-top:10px;
      }
      li:first-child {
        margin-top: 0px;
      }
      li:hover{
        background-color: rgba(#409eee,0.3);
        color:blue;
      }
    }
  }
}
</style>
