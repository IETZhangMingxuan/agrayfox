<template>
  <div id="internet">
    <CommonHot
      :list="DeveloperTopList"
      :titleName="`开发者头条热点`"
      :logo="`https://toutiao.io/favicon.ico`"
      :href="`https://toutiao.io/search?utf8=%E2%9C%93&q=`"
      :totalSize="20"
    />
    <CommonHot
      :list="OsChinaTopList"
      :titleName="`开源中国热点`"
      :logo="`https://www.oschina.net/favicon.ico`"
      :href="`https://www.oschina.net/search?scope=all&q=`"
    />
    <CommonHot
      :list="ZolList"
      :titleName="`中关村在线热点`"
      :logo="`https://www.zol.com.cn/favicon.ico`"
      :href="`https://search.zol.com.cn/s/all.php?keyword=`"
    />
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      DeveloperTopList: state => state.anyknow.DeveloperTopList,
      OsChinaTopList: state => state.anyknow.OsChinaTopList,
      ZolList: state => state.anyknow.ZolList
    })
  }
};
</script>
<style scoped lang="less">
#internet {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
