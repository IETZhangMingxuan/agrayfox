<template>
  <div id="baiduhot">
      <button @click="debug">
          点击测试
      </button>
      
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      BaiduNewsList: state => state.anyknow.BaiduNewsList
    })
  },
  methods:{
      debug(){
        //   console.log(this.BaiduNewsList.site.attrs);
          console.log(this.BaiduNewsList.site[2]);
      }
  }
};
</script>
<style scoped lang="less">
#baiduhot {
    font-family: "Microsoft Yahei";
}
</style>
