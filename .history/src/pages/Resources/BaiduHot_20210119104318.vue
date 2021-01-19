<template>
  <div id="baiduhot">
    <button @click="debug">
      点击测试
    </button>
    <ul>
      <li v-for="(item, index) in BaiduNewsList.site.subs[0].items" :key="index">
        <a :href="`http://www.baidu.com`">{{ item.title }}</a>
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
  methods: {
    debug() {
      //   console.log(this.BaiduNewsList.site.attrs);
      let a = this.BaiduNewsList.site;
      //   console.log(a.site);//输出baidu
      //   console.log(a.attrs);
      //   console.log(a.subs);
      //   console.log(a.subs[0]);
      console.log(a.subs[0].items);
      //   console.log(a.subs[1]);
      console.log(a.subs[1].items);
    }
  }
};
</script>
<style scoped lang="less">
#baiduhot {
  font-family: "Microsoft Yahei";
}
</style>
