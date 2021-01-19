<template>
  <div id="resources">
    <div class="nav">
      <div class="title" @click="changeIsCompositeShow">综合</div>
      <div class="title" @click="changeIsTechShow">科技</div>
      <div class="title">财经</div>
      <div class="title">视频</div>
      <div class="title">娱乐</div>
      <div class="title">互联网</div>
    </div>
    <div class="composite">
      <div class="compositeMain" v-if="isCompositeShow">
        <BaiduHot />
        <TSZHot />
        <TopNewsHot />
        <WeiboHot />
        <ZhihuHot />
        <QdailyHot />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCompositeShow: true,
      isTechShow: false
    };
  },
  methods: {
    changeIsCompositeShow() {
      this.isCompositeShow = !this.isCompositeShow;
      this.isTechShow = false;
    },
    changeIsTechShow() {
      this.isTechShow = !this.isTechShow;
      this.isCompositeShow = false;
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

  .compositeMain {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>
