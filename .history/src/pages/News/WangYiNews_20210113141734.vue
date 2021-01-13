<template>
  <div id="wynews">
      <router-view>网易新闻</router-view>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      WYNewsList: state => state.news.WYNewsList
    })
  }
};
</script>
<style scoped lang="less">
    #wynews{
        border:1px solid blue;
        height:1000px;
    }
</style>
