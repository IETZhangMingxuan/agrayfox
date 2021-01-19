<template>
  <div id="resources">
    <div class="nav">
      <div class="title" @click="changeIsCompositeShow">综合</div>
      <div class="title">科技</div>
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
      isCompositeShow: false
    };
  },
  methods: {
    changeIsCompositeShow(isCompositeShow) {
      this.isCompositeShow = !this.isCompositeShow;
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
    display:flex;
    justify-content: flex-start;
    flex-wrap: nowrap;
    .title {
      box-shadow: 0 0 20px hsla(0, 0%, 40%, 0.1);
      width: 20%;
      background-color: #fff;
      height: 50px;
      line-height: 50px;
      text-align: center;
      border-radius: 10px;
      font-size: 26px;
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
