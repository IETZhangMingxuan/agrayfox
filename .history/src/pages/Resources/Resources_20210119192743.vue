<template>
  <div id="resources">
    <div class="nav">
      <div class="title" @click="changeIsCompositeShow">综合</div>
      <div class="title" @click="changeIsTechShow">科技</div>
      <div class="title" @click="changeIsEconomyShow">财经</div>
      <div class="title">视频</div>
      <div class="title">娱乐</div>
      <div class="title">互联网</div>
    </div>
    <div class="mainList">
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
        <GlobalHot />
        <TSKe />
        <SciChinaHot />
        <CnbetaHot />
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
      isEconomyShow: false
    };
  },
  methods: {
    changeIsCompositeShow() {
      this.isCompositeShow = true;
      this.isTechShow = false;
      this.isEconomyShow = false;
    },
    changeIsTechShow() {
      this.isTechShow = true;
      this.isCompositeShow = false;
      this.isEconomyShow = false;
    },
    changeIsEconomyShow() {
      this.isEconomyShow = true;
      this.isCompositeShow = false;
      this.isTechShow = false;
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
    }
  }
  .mainList {
    .main {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }
}
</style>
