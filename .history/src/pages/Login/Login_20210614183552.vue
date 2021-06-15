<template>
  <div id="login">
    <h2>我是模拟登录页</h2>
    <div class="login-search">
      <input type="text" v-model.trim="keyword" />
      <button @click="toSearch">模拟搜索</button>
    </div>
    <div class="login-list" style="margin-top:120px;list-type:none">
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      keyword: ""
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
}
</style>
