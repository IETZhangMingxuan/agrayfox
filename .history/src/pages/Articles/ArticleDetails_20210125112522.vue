<template>
  <!-- 博客详情 -->
  <div id="articleDetails">
    <Header />
    <div class="details">
      博客详情
      {{ list[details.id].title }}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      BlogDetailsList: [{}]
    };
  },
  methods: {}
};
</script>
<style lang="less" scoped>
#articleDetails {
  .details {
    margin-top: 100px;
    height: 800px;
  }
}
</style>
