<template>
  <div class="blog-content">
    <div class="blog-title" id="blog-title">
      <span>{{ newsList.title }}</span>
    </div>
    <div class="blog-info" id="blog-info" v-show="newsList !== ''">
      <span class="create-time">
        <span>{{ newsList.createtime }}</span>
      </span>
      <span class="read">
        <i class="iconfont icon-author"></i>
        <span>阅读 {{ newsList.hot }}</span>
      </span>
      <span class="zan">
        <i class="iconfont icon-zan"></i>
        <span>点赞 {{ newsList.zan }}</span>
      </span>
    </div>
    <div class="blog-main-content">
      <p v-html="newsList.content">Loading...</p>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      newsList: ``
    };
  },
  async mounted() {
    let result = await axios({
      method: "GET",
      url: "http://59.110.242.49:8080/getBlogs"
    }).then(response => {
      return response.data;
    });
    // console.log(this.$route.params.id);
    this.newsList = result[this.$route.params.id - 1];
    // console.log(this.newsList);
  }
};
</script>
<style scoped lang="less">
.blog-content {
  background-color: #fff;
  padding: 15px;
  border-radius: 10px;
  color: #777;
  font-family: "Microsoft Yahei";
  font-family: "consolas", "Microsoft Yahei";
  font-size: 16px;
  font-weight: normal;
  letter-spacing: 0.5px;
  user-select: text;
  .blog-title {
    background-color: #fff;
    span {
      display: block;
      padding: 5px 15px 15px 5px;
      color: #333;
      font-family: "Microsoft Yahei";
      font-size: 26px;
      font-weight: 700 !important;
    }
  }
  .blog-info {
    font-family: "Microsoft Yahei";
    font-weight: 400 !important;
    font-size: 16px;
    margin-left: -3px;
    color: #888;
    .icon-author {
      font-size: 15px;
      color: #555666;
    }
    .icon-zan {
      font-size: 15px;
      color: #555666;
    }
    span {
      font-family: "SF Pro Display", Arial, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei";
      display: inline-block;
      margin-right: 3px;
      letter-spacing: 0px;
      padding: 0 3px;
    }
  }
  .blog-main-content {
    margin-top: 40px;
  }
}
</style>
