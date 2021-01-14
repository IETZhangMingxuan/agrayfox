<template>
  <div id="app">
    <div id="nav">
      <!-- 导航栏 -->
      <Header />
      <!-- 版心 -->
      <div class="container">
        <router-view></router-view>
        <!-- 登录页 -->
        <div class="loginPage">
          <SignIn />
        </div>
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
      "getWYNewsList",
      "getAppleNewsList",
      "getInternationalNewsList",
      "getChinaNewsList",
      "getBlockChainNewsList",
      "getTodaysTopNewsList",
      "getZongHeNewsList",
      "getRandomSentencesList"
    ])
  },
  async created() {
    await this.getWeiboHotList();
    await this.getNewsHotList();
    await this.getDouyinVideoList();
    await this.getKuaiShouVideoList01();
    await this.getRightNowList();
    await this.getDouyinMusicList();
    await this.getWYNewsList();
    await this.getAppleNewsList();
    await this.getInternationalNewsList();
    await this.getChinaNewsList();
    await this.getBlockChainNewsList();
    await this.getTodaysTopNewsList();
    await this.getZongHeNewsList();
    await this.getRandomSentencesList();
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
  .container {
    // width: 1200px;
    margin: 0 auto;
    padding-top: 70px;
    z-index: -1;
    position: relative;
    .loginPage {
      position: absolute;
      width: 1200px;
      margin: 0 auto;
      margin-top: 320px;
      height: 500px;
      background-color: red;
      top: 0px;
      left: 30%;
    }
  }
}
::-webkit-scrollbar {
  display: none;
  // width: 5px;
  // background-color: #409eee;
}
</style>
