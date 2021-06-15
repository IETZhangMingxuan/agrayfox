<template>
  <div id="login">
    <h2>我是模拟登录页</h2>
    <div class="login-search">
      <input type="text" v-model.trim="keyword" />
      <button @click="toSearch">模拟搜索</button>
    </div>
    <div class="login-list" style="margin-top:80px;">
      <h4>商品分类列表</h4>
      <ul style="list-style-type:none">
        <li v-for="(item, index) in 10" :key="index">
          <a href="javascript:;">{{ item }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      keyword: "",
      goodList:["茶叶"]
    };
  },
  methods: {
    toSearch() {
      this.$router.push({
        name: "test",
        params: {
          keyword: this.keyword
        }
      });
    }
  }
};
</script>
<style scoped lang="less">
#login {
  margin-top: 60px;
  ul {
    li {
      padding: 10px 0;
      a {
        text-decoration: none;
      }
    }
  }
}
</style>
