<template>
  <div id="baiduhot">
      <button @click="debug">

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
          console.log(this.BaiduNewsList)
      }
  }
};
</script>
<style scoped lang="less">
#baiduhot {
    font-family: "Microsoft Yahei";
}
</style>
