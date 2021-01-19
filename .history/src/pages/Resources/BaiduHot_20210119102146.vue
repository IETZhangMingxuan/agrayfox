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
      AppleNewsList: state => state.tianxingApi.AppleNewsList
    })
  }
};
</script>
<style scoped lang="less">
#baiduhot {
    font-family: "Miscrosoft Yahei";
}
</style>
