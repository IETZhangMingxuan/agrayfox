<template>
  <div id="resources">
    <div class="nav">
      <router-link to="/resources/comprehensive" class="title">综合</router-link>
      <router-link to="/resources/tech" class="title">科技</router-link>
      <router-link to="/resources/economy" class="title">财经</router-link>
      <router-link to="/resources/media" class="title">视频</router-link>
      <router-link to="/resources/entertainment" class="title">娱乐</router-link>
      <router-link to="/resources/internet" class="title">互联网</router-link>
    </div>
    <div class="mainList">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
</script>
<style scoped lang="less">
#resources {
  margin: 0 auto;
  margin-top: 0px;
  background-color: #f9f9f9;
  padding: 30px;
  border-radius: 15px;
  .nav {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    .title {
      user-select: none;
      text-decoration: none;
      box-shadow: 0 0 20px hsla(0, 0%, 40%, 0.1);
      width: 15%;
      background-color: #fff;
      height: 20px;
      line-height: 20px;
      text-align: center;
      border-radius: 10px;
      font-size: 18px;
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
    .active {
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
    .startmain {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
    }
  }
}
</style>
