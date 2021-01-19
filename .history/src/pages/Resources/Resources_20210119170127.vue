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
  padding: 30px 60px 60px 60px;
  .title {
    box-shadow: 0 0 20px hsla(0, 0%, 40%, 0.1);
    width: 100%;
    background-color: #fff;
    height:50px;
    line-height: 50px;
    text-align: center;
    border-radius: 10px;
    font-size:24px;
    padding:10px 0;
    font-weight: 400;
    // font-family: "Microsoft Yahei";
    font-family: "华文中宋";
    color:#444;
    letter-spacing: 2px;
  }
  .main {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>
