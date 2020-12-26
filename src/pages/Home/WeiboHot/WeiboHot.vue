<template>
  <!-- 微博实时热搜模块 -->
  <div id="HotWeibo">
    <h3 class="title">微博热搜榜</h3>
    <button @click="changeIndex(currentIndex)" class="changePages">换一批</button>
    <ul class="weiboList">
      <li v-for="(item, index) in weiboHotList.slice(currentIndex, currentIndex + 10)" :key="index">
        <span class="indexBlock">{{ index + 1 + currentIndex }}</span>
        <a :href="`https://s.weibo.com/weibo?q=${item.hotword}&Refer=top`" target="_blank">{{ item.hotword }}</a>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      currentIndex: 0
    };
  },
  computed: {
    ...mapState({
      weiboHotList: state => state.weibohot.weiboHotList
    }),
  },
  methods: {
    changeIndex(currentIndex) {
      if (currentIndex < 40) {
        this.currentIndex = currentIndex + 10;
      } else {
        this.currentIndex = 0;
      }
    }
  }
};
</script>
<style scoped>

</style>
