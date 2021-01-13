<template>
  <div id="gamesnews" class="animate__animated animate__slideInUp">
    <div class="main">
      <ul class="gamesnewslist">
        <li v-for="(item, index) in GamesNewsList" :key="index">
          <img :src="item.bimg" alt="文章图片loading" />
          <h4>
            <a :href="item.vurl" target="_blank">{{ item.title }}</a>
          </h4>
          <p class="time">{{ item.publish_time }}</p>
          <span class="author">{{item.source}}</span>
          <img :src="item.media_icon" alt="作者头像loading">
          <span class="keywords">{{item.keywords}}</span>
          <span class="intro">{{item.intro}}</span>
        </li>
      </ul>
      <div class="bottomTips">
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
      GamesNewsList: state => state.tianxingApi.GamesNewsList
    })
  }
};
</script>
<style scoped lang="less">
@basicVerticalMargin: 14px;
@basicHorizonMargin: 160px;
#gamesnews {
  .gamesnewslist {
    list-style: none;
    li {
      position: relative;
      //   border-left: 2px solid #409eef;
      padding: 5px 10px;
      height: 110px;
      width: 90%;
      margin-top: 0px;
      border-bottom: 1px solid #eaeaea;
      img {
        position: absolute;
        top: 15px;
        left: 15px;
        width: 130px;
        height: 90px;
        border-radius: 5px;
      }
      h4 {
        position: absolute;
        top: @basicVerticalMargin;
        left: @basicHorizonMargin;
        font-family: "Microsoft Yahei";
        font-size: 15px;
        font-weight: 300;
        overflow: hidden;
        width: 450px;
        text-align: left;
        a {
          color: #444;
          text-decoration: none;
        }
        :hover {
          color: #02fe;
        }
      }
      p {
        position: absolute;
        bottom: @basicVerticalMargin;
        left: @basicHorizonMargin;
        font-family: "Times New Roman", Times, serif;
        color: #555;
        font-size: 14px;
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
