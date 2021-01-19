<template>
  <div id="baiduhot"></div>
</template>
<script>
import vuex from "vuex"
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      BaiduNewsList: state => state.anyknowApi.BaiduNewsList
    })
  }
};
</script>
<style scoped lang="less">
#baiduhot {
    font-family: "Miscrosoft Yahei";
}
</style>
