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
      <Footer v-show="$route.meta.hideFooter"></Footer>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions([
      "getAllComments",
      "getWeiboHotList",
      "getNewsHotList",
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
      "getBilibiliVideoList",
      "getGameSkyGameList",
      "getMaoYanList",
      "getSteamList",
      "getDeveloperTopList",
      "getOsChinaTopList",
      "autoLoginAxios",
      "getKuaiShouHot",
      "getZolList",
      // "getTYVideoList",
      // "getAllUsersInfo",
    ])
  },
  async created() {
    // 下面这个请求必须第一个发送
    await this.autoLoginAxios();
    await this.getKuaiShouHot();
    await this.getAllComments();
    await this.getWeiboHotList();
    await this.getNewsHotList();
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
    await this.getBilibiliVideoList();
    await this.getGameSkyGameList();
    await this.getMaoYanList();
    await this.getSteamList();
    await this.getDeveloperTopList();
    await this.getOsChinaTopList();
    await this.getZolList();
    // await this.getTYVideoList();
    // await this.getAllUsersInfo();
  }
};
</script>
<style lang="less">
/* iconfont svg */
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
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
    box-sizing: content-box;
    width: 1240px !important;
    margin: 0 auto;
    padding: 20px;
    padding-top: 60px;
    border-radius: 10px;
  }
}
::-webkit-scrollbar {
  display: none;
  // width: 5px;
  // background-color: #409eee;
}
// 这是登录与注册页的element UI input样式,由于登录页添加了scoped 所以无法穿透到app组件,
// 只能在根组件修改element UI的样式了
#login {
  .el-input__inner {
    padding-left: 32px !important;
  }
}
#register .el-form-item__content {
  line-height: 10px !important;
}
.el-input__inner {
  font-family: "Microsoft YaHei" !important;
  font-size: 14px !important;
  font-weight: 300 !important;
}
.el-input {
  font-size: 18px !important;
}

// 这是头部导航条的element UI样式
.el-dropdown {
  display: inline-block !important;
  position: relative !important;
  color: #409eef !important;
  font-size: 15px !important;
  font-family: "华文中宋" !important;
  font-weight: 700 !important;
}
.el-dropdown-menu__item {
  font-family: "Microsoft Yahei";
  font-weight: 300;
}
.el-message-box {
  width: 400px !important;
  border-radius: 20px !important;
}
.el-message-box__content {
  padding: 25px 30px !important;
  color: #606266 !important;
  font-size: 18px !important;
  font-family: "Microsoft Yahei" !important;
  font-weight: 300 !important;
}
.el-message-box__header {
  padding: 0px 15px 10px !important;
}
.el-button--mini,
.el-button--small {
  font-size: 15px !important;
  font-family: "microsoft yahei" !important;
  margin-bottom: 5px !important;
  border-radius: 20px !important;
}
.el-icon--right {
  margin-left: -20px !important;
}
</style>
