<template>
  <div id="blog">
    <div class="blog-header">
    </div>
    <div class="blog-main">
      <div class="blog-main-left">
        <BlogTitle />
        <BlogInfo />
        <BlogContent />
      </div>
      <div class="blog-main-right">
        <ServerRecommend />
        <BlogTags />
      </div>
    </div>
  </div>
</template>
<script>
import BlogNews from "./BlogNews.vue";
import BlogTitle from "./BlogTitle.vue";
import BlogInfo from "./BlogInfo.vue";
import BlogContent from "./BlogContent.vue";
import ServerRecommend from "./ServerRecommand.vue";
import ReadRecommend from "./ReadRecommend.vue";
import BlogTags from "./BlogTags.vue";
export default {
  name: "blog",
  components: {
    BlogNews,
    BlogTitle,
    BlogInfo,
    BlogContent,
    ServerRecommend,
    ReadRecommend,
    BlogTags
  },
  data() {
    return {};
  },
  methods: {
    
  }
};
</script>
<style scoped>
#blog {
  margin-top: 20px;
}
.blog-main {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  font-size: 14px "arial", sans-serif;
  font-weight: 300;
}

.blog-main-left {
  width: 800px;
}

/* 右侧功能组件群 */
.blog-main-right {
  width: 380px;
  /* background-color: #fff; */
  /* border: 1px solid black; */
  border-radius: 10px;
  padding-left: 10px;
}
</style>
