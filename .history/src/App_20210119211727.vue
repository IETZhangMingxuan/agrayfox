<template>
  <div id="app">
    <div id="nav">
      <!-- 导航栏 -->
      <Header />
      <!-- 版心 -->
      <div class="app_container">
        <router-view></router-view>
      </div>

      <!-- 尾部 -->
      <!-- <Footer /> -->
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions([
      "getWeiboHotList",
      "getNewsHotList",
      "getDouyinVideoList",
      "getKuaiShouVideoList01",
      "getRightNowList",
      "getDouyinMusicList",
      // "getWYNewsList",
      // "getAppleNewsList",
      // "getInternationalNewsList",
      // "getChinaNewsList",
      "getBlockChainNewsList",
      // "getTodaysTopNewsList",
      // "getZongHeNewsList",
      "getRandomSentencesList",
      // "getVirusNumList",
      // "getSportsNewsList",
      "getBaiduNewsList",
      "getWeiboNewsList",
      "getZhihuNewsList",
      "getQdailyNewsList",
      "getTXZNewsList",
      "getTopNewsList",
      "getGlobalNewsList",
      "getTSKeNewsList",
      "getSciChinaNewsList",
      "getCnBetaNewsList",
      "getSnowballNewsList",
      "getEasymoneyNewsList",
      "getCaixinNewsList",
      "getInvestingNewsList",
      "getPearVideoList",
      "getBilibiliVideoList",
      "getGameSkyGameList",
      "getMaoYanList",
      "getSteamList",
      "getDeveloperTopList"
    ])
  },
  async created() {
    await this.getWeiboHotList();
    await this.getNewsHotList();
    await this.getDouyinVideoList();
    await this.getKuaiShouVideoList01();
    await this.getRightNowList();
    await this.getDouyinMusicList();
    // await this.getWYNewsList();
    // await this.getAppleNewsList();
    // await this.getInternationalNewsList();
    // await this.getChinaNewsList();
    // await this.getBlockChainNewsList();
    // await this.getTodaysTopNewsList();
    // await this.getZongHeNewsList();
    await this.getRandomSentencesList();
    // await this.getVirusNumList();
    // await this.getSportsNewsList();
    await this.getBaiduNewsList();
    await this.getWeiboNewsList();
    await this.getZhihuNewsList();
    await this.getQdailyNewsList();
    await this.getTXZNewsList();
    await this.getTopNewsList();
    await this.getGlobalNewsList();
    await this.getTSKeNewsList();
    await this.getSciChinaNewsList();
    await this.getCnBetaNewsList();
    await this.getSnowballNewsList();
    await this.getEasymoneyNewsList();
    await this.getCaixinNewsList();
    await this.getInvestingNewsList();
    await this.getPearVideoList();
    await this.getBilibiliVideoList();
    await this.getGameSkyGameList();
    await this.getMaoYanList();
    await this.getSteamList();
    await this.getDeveloperTopList();
  }
};
</script>
<style lang="less">
* {
  padding: 0px;
  margin: 0px;
  cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/default.cur), auto !important;
}
img,
a,
button,
h3,
li {
  cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/pointer.cur), auto !important;
}
#app {
  width: 100%;
  margin: 0 auto;
  .app_container {
    width: 1200px;
    margin: 0 auto;
    padding-top: 70px;
  }
}
::-webkit-scrollbar {
  display: none;
  // width: 5px;
  // background-color: #409eee;
}
</style>
