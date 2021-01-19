<template>
  <div id="baiduhot"></div>
</template>
<script>
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
    font-family: "Microsoft Yahei";
}
</style>
