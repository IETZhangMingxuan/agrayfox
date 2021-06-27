<template>
  <div id="tech">
    <CommonHot
      :list="GlobalNewsList"
      :titleName="`环球科学前沿`"
      :logo="`https://huanqiukexue.com/favicon.ico`"
      :href="`https://huanqiukexue.com/plus/search.php?kwtype=0&q=`"
      :totalSize="20"
    />
    <CommonHot
      :list="TSKeNewsList"
      :titleName="`36氪热搜榜`"
      :logo="`https://36kr.com/favicon.ico`"
      :href="`https://36kr.com/search/articles/`"
      :totalSize="10"
    />
    <CommonHot
      :list="SciChinaNewsList"
      :titleName="`科普中国热点`"
      :logo="`https://cloud.kepuchina.cn/favicon.ico`"
      :href="`https://cloud.kepuchina.cn/search/imageText?s=`"
      :totalSize="15"
    />
    <CommonHot
      :list="CnBetaNewsList"
      :titleName="`CnBeta热点`"
      :logo="`https://www.cnbeta.com/favicon.ico`"
      :href="`https://cn.bing.com/search?&q=site:cnbeta.com%20`"
    />
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      GlobalNewsList: state => state.anyknow.GlobalNewsList,
      TSKeNewsList: state => state.anyknow.TSKeNewsList,
      SciChinaNewsList: state => state.anyknow.SciChinaNewsList,
      CnBetaNewsList: state => state.anyknow.CnBetaNewsList
    })
  }
};
</script>
<style scoped lang="less">
#tech {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
