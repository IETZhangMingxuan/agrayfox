<template>
  <div id="resources">
    <div class="composite">
      <div class="title">综合</div>
      <div class="main">
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
export default {};
</script>
<style scoped lang="less">
#resources {
  // border: 1px solid blue;
  margin: 0 auto;
  margin-top: 0px;
  width: 1200px;
  background-color: #f9f9f9;
  padding: 0px 60px 60px 60px;
  .title {
    box-shadow: 0 0 20px hsla(0, 0%, 40%, 0.1);
    width: 30%;
    background-color: #fff;
  }
  .main {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>
