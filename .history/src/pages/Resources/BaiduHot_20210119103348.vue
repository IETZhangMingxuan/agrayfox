<template>
  <div id="baiduhot">
      <button @click="debug">

      </button>
      <ul>
          <li v-for="(item,index) in BaiduNewsList.site.subs[0].items" :key="index">
              {{item.title}}
          </li>
      </ul>
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
