<template>
  <div id="todaystopNews" class="animate__animated animate__slideInUp">
    <div class="main">
      <h3 v-show="!TodaysTopNewsList.length" class="loading">努力加载中...</h3>
      <ul class="todaystopNewslist">
        <li v-for="(item, index) in TodaysTopNewsList" :key="index" v-show="item.picUrl">
          <img :src="item.picUrl" alt="" />
          <h4>
            <a :href="item.url" target="_blank">{{ item.title }}</a>
          </h4>
          <p>{{ item.ctime }}</p>
          <span class="author">{{ item.source }}</span>
        </li>
      </ul>
      <div class="bottomTips" v-show="TodaysTopNewsList.length">
        ———————————————已经到底啦————————————————
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      TodaysTopNewsList: state => state.tianxingApi.TodaysTopNewsList
    })
  }
};
</script>
<style scoped lang="less">
@basicVerticalMargin: 14px;
@basicHorizonMargin: 160px;
#todaystopNews {
  box-shadow:0 0 20px hsla(0, 0%, 40%, 0.3);
  // border-radius: 10px;
  width:680px;
  margin-top:11px;
  .loading {
    font-family: "微软雅黑";
    font-size: 15px;
    font-weight: 400;
    color: #555;
    text-align: center;
    margin-top: 20px;
    padding:110px 100px;
    margin-top:2px;
    // position: absolute;
    // top:40%;
    // left:35%;
  }
  .todaystopNewslist {
    list-style: none;
    li {
      position: relative;
      //   border-left: 2px solid #409eef;
      padding: 5px 10px;
      height: 110px;
      width: 97%;
      margin-top: 0px;
      border-bottom: 1px solid #eaeaea;
      img {
        position: absolute;
        top: 15px;
        left: 15px;
        width: 130px;
        height: 90px;
        border-radius: 4px;
      }
      h4 {
        position: absolute;
        top: @basicVerticalMargin - 1px;
        left: @basicHorizonMargin;
        font-family: "Microsoft Yahei";
        font-size: 15px;
        font-weight: 300;
        overflow: hidden;
        width: 500px;
        text-align: left;
        letter-spacing: 1px;

        a {
          color: #666;
          text-decoration: none;
        }
        :hover {
          color: #007fff;
        }
      }
      p {
        position: absolute;
        bottom: @basicVerticalMargin *0.95;
        left: @basicHorizonMargin;
        font-family: "Times New Roman", Times, serif;
        color: #555;
        font-size: 13px;
        user-select: none;
      }
      .author {
        position: absolute;
        bottom: @basicVerticalMargin *1.01;
        left: @basicHorizonMargin * 1.75;
        font-family: "微软雅黑";
        font-family: "宋体";
        color: #666;
        font-size: 12px;
        user-select: none;
      }
    }
  }
  .bottomTips {
    margin-left: 10px;
    font-size: 15px;
    color: #555;
    margin-top: 20px;
    margin-bottom: 30px;
  }
}
</style>
