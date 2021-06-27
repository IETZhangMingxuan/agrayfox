<template>
  <div id="comprehensive">
    <CommonHot
      :list="BaiduNewsList"
      :titleName="`百度热搜榜`"
      :logo="`https://baidu.com/favicon.ico`"
      :href="`http://www.baidu.com/s?wd=`"
      :totalSize="30"
    />
    <CommonHot
      :list="TXZNewsList"
      :titleName="`360热点榜`"
      :logo="`https://hao.360.com/favicon.ico`"
      :href="`https://www.so.com/s?ie=utf-8&src=zhishu&q=`"
    />
    <CommonHot
      :list="TopNewsList"
      :titleName="`今日头条榜`"
      :logo="`https://so.toutiao.com/favicon.ico`"
      :href="`https://www.toutiao.com/search/?keyword=`"
    />
    <CommonHot
      :list="WeiboNewsList"
      :titleName="`微博热搜榜`"
      :logo="`https://weibo.com/favicon.ico`"
      :href="`https://s.weibo.com/weibo?q=`"
      :totalSize="30"
    />
    <CommonHot
      :list="ZhihuNewsList"
      :titleName="`知乎热点榜`"
      :logo="`https://static.zhihu.com/heifetz/favicon.ico`"
      :href="`https://www.zhihu.com/search?type=content&q=`"
    />
    <CommonHot
      :list="QdailyNewsList"
      :titleName="`好奇心日报`"
      :logo="`http://www.qdaily.com/favicon.ico`"
      :href="`http://www.qdaily.com/searches?key=`"
    />
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      BaiduNewsList: state => state.anyknow.BaiduNewsList,
      TXZNewsList: state => state.anyknow.TXZNewsList,
      TopNewsList: state => state.anyknow.TopNewsList,
      WeiboNewsList: state => state.anyknow.WeiboNewsList,
      ZhihuNewsList: state => state.anyknow.ZhihuNewsList,
      QdailyNewsList: state => state.anyknow.QdailyNewsList
    })
  }
};
</script>
<style scoped lang="less">
#comprehensive {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
