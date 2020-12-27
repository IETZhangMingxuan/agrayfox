<template>
  <!-- 微博实时热搜模块 -->
  <div id="HotWeibo">
    <h3 class="title">微博实时热搜榜</h3>
    <button @click="changeIndex(currentIndex,totalSize,pageSize)" class="changePages">换一批</button> &nbsp;
    <ul class="weiboList">
      <li v-for="(item, index) in weiboHotList.slice(currentIndex, currentIndex + pageSize)" :key="index">
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
      /* 初始显示的首个索引:可修改,但不建议 */
      currentIndex: 0,
      /* 返回的总条数:不可修改 */
      totalSize:50,
      /* 每页显示条数:可修改 */
      pageSize:10
    };
  },
  computed: {
    ...mapState({
      weiboHotList: state => state.weibohot.weiboHotList
    }),
  },
  methods: {
    changeIndex(currentIndex,totalSize,pageSize) {
      if (currentIndex < totalSize - pageSize) {
        this.currentIndex = currentIndex + pageSize;
      } else {
        this.currentIndex = 0;
      }
    }
  }
};
</script>
<style scoped lang="less">
#HotWeibo{
  border: 1px solid #eaeaea;
  .title{
    font-family: "Microsoft YaHei";
    font-size: 16px;
    font-weight: normal;
  }
}
</style>
