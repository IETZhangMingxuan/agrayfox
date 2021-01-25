<template>
  <!-- 博客详情 -->
  <div id="articleDetails">
    <Header />
    <div class="details">
      博客详情
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="less" scoped>
#articleDetails {
  .details {
      height:800px;
  }
}
</style>
