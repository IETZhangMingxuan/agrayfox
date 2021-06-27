<template>
  <div id="media">
    <CommonHot
      :list="BilibiliVideoList"
      :titleName="`哔哩哔哩动画`"
      :logo="`https://search.bilibili.com/favicon.ico`"
      :href="`https://search.bilibili.com/all?keyword=`"
    />
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      BilibiliVideoList: state => state.anyknow.BilibiliVideoList
    })
  }
};
</script>
<style scoped lang="less">
#media {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
