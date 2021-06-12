<template>
  <div class="blog-content">
    <div class="blog-title" id="blog-title">
      <h2>{{ newsList.title }}</h2>
    </div>
    <p v-html="newsList.content">Loading...</p>
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
  margin-top: 20px;
  padding: 15px;
  border-radius: 10px;
  color: #777;
  font-family: "Microsoft Yahei";
  font-family: "consolas", "Microsoft Yahei";
  font-size: 16px;
  font-weight: normal;
  letter-spacing: 0.5px;
  user-select: text;
}
</style>
