<template>
  <div id="economy">
    <CommonHot
      :list="SnowballNewsList"
      :titleName="`雪球热点榜`"
      :logo="`https://xueqiu.com/favicon.ico`"
      :href="`https://xueqiu.com/k?q=`"
    />
    <CommonHot
      :list="EasymoneyNewsList"
      :titleName="`东方财富热点`"
      :logo="`https://so.eastmoney.com/favicon.ico`"
      :href="`http://so.eastmoney.com/Web/s?keyword=`"
    />
    <CommonHot
      :list="CaixinNewsList"
      :titleName="`财新热点榜`"
      :logo="`https://www.caixin.com/favicon.ico`"
      :href="`https://search.caixin.com/newsearch/search?keyword=`"
    />
    <CommonHot
      :list="InvestingNewsList"
      :titleName="`英为财情热榜`"
      :logo="`https://img1.baidu.com/it/u=983688464,3275484044&fm=26&fmt=auto&gp=0.jpg`"
      :href="`https://cn.investing.com/search/?q=`"
      :totalSize="20"
    />
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      SnowballNewsList: state => state.anyknow.SnowballNewsList,
      EasymoneyNewsList: state => state.anyknow.EasymoneyNewsList,
      CaixinNewsList: state => state.anyknow.CaixinNewsList,
      InvestingNewsList: state => state.anyknow.InvestingNewsList
    })
  }
};
</script>
<style scoped lang="less">
#economy {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
