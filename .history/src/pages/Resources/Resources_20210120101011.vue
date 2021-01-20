<template>
  <div id="resources">
    <div class="nav">
      <div class="title" @click="changeIsCompositeShow" :class="{ isActive: activeNow === 1 }">
        综合
      </div>
      <div class="title" @click="changeIsTechShow" :class="{ isActive: activeNow === 2 }">科技</div>
      <div class="title" @click="changeIsEconomyShow" :class="{ isActive: activeNow === 3 }">
        财经
      </div>
      <div class="title" @click="changeIsVideoShowShow" :class="{ isActive: activeNow === 4 }">
        视频
      </div>
      <div class="title" @click="changeIsGameShowShow" :class="{ isActive: activeNow === 5 }">
        娱乐
      </div>
      <div class="title" @click="changeIsITShowShow" :class="{ isActive: activeNow === 6 }">
        互联网
      </div>
    </div>
    <div class="mainList">
      <h3 class="loading">努力加载中...</h3>
      <div class="main" v-if="isCompositeShow">
        <BaiduHot />
        <TSZHot />
        <TopNewsHot />
        <WeiboHot />
        <ZhihuHot />
        <QdailyHot />
      </div>
      <div class="main" v-if="isTechShow">
        <GlobalHot />
        <TSKe />
        <SciChinaHot />
        <CnbetaHot />
      </div>
      <div class="main" v-if="isEconomyShow">
        <SnowballHot />
        <EasymoneyHot />
        <CaixinHot />
        <InvestingHot />
      </div>
      <div class="Videomain" v-if="isVideoShow">
        <PearVideoHot />
        <BilibiliVideoHot />
      </div>
      <div class="main" v-if="isGameShow">
        <GameSkyHot />
        <MaoYanHot />
        <SteamHot />
      </div>
      <div class="Videomain" v-if="isITShow">
        <DeveloperTopHot />
        <OSChinaHot />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCompositeShow: true,
      isTechShow: false,
      isEconomyShow: false,
      isVideoShow: false,
      isGameShow: false,
      isITShow: false,
      activeNow: 1,
      isActive: false
    };
  },
  methods: {
    changeIsCompositeShow() {
      this.isCompositeShow = true;
      this.isTechShow = false;
      this.isEconomyShow = false;
      this.isVideoShow = false;
      this.isGameShow = false;
      this.isITShow = false;
      this.activeNow = 1;
    },
    changeIsTechShow() {
      this.isTechShow = true;
      this.isCompositeShow = false;
      this.isEconomyShow = false;
      this.isVideoShow = false;
      this.isGameShow = false;
      this.isITShow = false;
      this.activeNow = 2;
    },
    changeIsEconomyShow() {
      this.isEconomyShow = true;
      this.isCompositeShow = false;
      this.isTechShow = false;
      this.isVideoShow = false;
      this.isGameShow = false;
      this.isITShow = false;
      this.activeNow = 3;
    },
    changeIsVideoShowShow() {
      this.isVideoShow = true;
      this.isEconomyShow = false;
      this.isCompositeShow = false;
      this.isTechShow = false;
      this.isGameShow = false;
      this.isITShow = false;
      this.activeNow = 4;
    },
    changeIsGameShowShow() {
      this.isGameShow = true;
      this.isVideoShow = false;
      this.isEconomyShow = false;
      this.isCompositeShow = false;
      this.isTechShow = false;
      this.isITShow = false;
      this.activeNow = 5;
    },
    changeIsITShowShow() {
      this.isITShow = true;
      this.isGameShow = false;
      this.isVideoShow = false;
      this.isEconomyShow = false;
      this.isCompositeShow = false;
      this.isTechShow = false;
      this.activeNow = 6;
    }
  }
};
</script>
<style scoped lang="less">
#resources {
  // border: 1px solid blue;
  margin: 0 auto;
  margin-top: 0px;
  width: 1200px;
  background-color: #f9f9f9;
  padding: 30px 60px 60px 60px;
  .nav {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    .loading {
      font-family: "微软雅黑";
      font-size: 15px;
      font-weight: 400;
      color: #555;
      text-align: center;
      margin-top: 2px;
      padding: 123px 100px;
      // position: absolute;
      // top:40%;
      // left:35%;
    }
    .title {
      user-select: none;
      box-shadow: 0 0 20px hsla(0, 0%, 40%, 0.1);
      width: 15%;
      background-color: #fff;
      height: 30px;
      line-height: 30px;
      text-align: center;
      border-radius: 10px;
      font-size: 20px;
      padding: 10px 0;
      font-weight: 700;
      font-family: "Microsoft Yahei";
      color: #444;
      letter-spacing: 5px;
      cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/pointer.cur), auto !important;
    }
    .title:hover {
      background: linear-gradient(180deg, #c1e2ff, #409eef);
      color: #fff;
    }
    .isActive {
      // background-color: rgba(#007fff, 0.2);
      background: linear-gradient(180deg, #c1e2ff, #409eef);
      color: #fff;
    }
  }
  .mainList {
    .main {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    .Videomain {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
    }
  }
}
</style>
