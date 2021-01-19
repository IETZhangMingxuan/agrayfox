<template>
  <!-- 百度热搜榜 -->
  <div id="baiduhot">
    <div id="hotweibo" class="animate__animated animate__slideInLeft">
      <div class="header">
        <div class="line"></div>
        <span class="title">微博实时热搜</span>
        <div @click="changeIndex(currentIndex, totalSize, pageSize)">
          <span class="change"><i class="iconfont icon-exchange"></i>换一批</span>
        </div>
      </div>
      <div class="main">
        <h3 v-show="!weiboHotList.length" class="loading">努力加载中...</h3>
        <ul class="hotWeiboList">
          <li
            v-for="(item, index) in BaiduNewsList.site.subs[0].items.slice(
              currentIndex,
              currentIndex + pageSize
            )"
            :key="index"
          >
            <span class="indexBlock">{{ index + 1 + currentIndex }}</span>
            <a :href="`http://www.baidu.com/s?wd=${item.title}`" target="_blank">{{
              item.title
            }}</a>
          </li>
        </ul>
      </div>
      <div class="tag"></div>
    </div>
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
  methods: {}
};
</script>
<style scoped lang="less">
#baiduhot {
  font-family: "Microsoft Yahei";
}
</style>
