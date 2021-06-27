<template>
  <div id="douyin" class="animate__animated animate__rotateInDownLeft">
    <div class="container">
      <div class="header">
        <div class="logo">
          <img src="./images/Kuaishou01.png" alt="logo" class="kuaiShouLogo" />
          <img src="./images/Douyin01.png" alt="logo" class="douYinLogo" />
        </div>
        <div class="navbar">
          <ul class="selectList">
            <router-link to="/douyin/hotVideo" class="select">看快手</router-link>
            <router-link to="/douyin/rightNow" class="select">看抖音</router-link>
            <router-link to="/douyin/kaiYan" class="select">开眼视频</router-link>
            <router-link to="/douyin/hotMusic" class="select">抖音热门音乐</router-link>
          </ul>
        </div>
      </div>
      <!-- 视频主体 -->
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped lang="less">
#douyin {
  // border: 1px dashed blue;
  margin: 0px auto;
  text-align: center;
  margin-top: 5px;
  .container {
    background-color: black;
    // background: linear-gradient(180deg, orange, orangered);
    width: 1200px;
    padding: 0px;
    height: 750px;
    border-radius: 10px;
    user-select: none;
    overflow: hidden !important;
    .header {
      color: #fff;
      // border: 1px dashed #fff;
      width: 100%;
      height: 80px;
      line-height: 80px;
      position: relative;
      .logo {
        position: absolute;
        top: 0px;
        left: 0px;
        .douYinLogo {
          width: 90px;
          height: 40px;
          padding: 20px 50px 21px 0px;
        }
        .kuaiShouLogo {
          width: 87px;
          height: 40px;
          padding: 20px 50px;
        }
      }
      .navbar {
        // border: 2px solid #fff;
        .selectList {
          display: flex;
          justify-content: flex-end;
          flex-wrap: wrap;
          list-style-type: none;
          margin-right: 40px;
          .select {
            padding: 0 25px;
            font-family: "微软雅黑";
            font-size: 16px;
            font-weight: bold;
            color: #fff;
            text-decoration: none;
            // border:1px solid #fff;
          }
          .active {
            color: orangered;
          }
          .select:hover {
            // color: #409eef;
            color: orange;
          }
        }
      }
    }
    /* main */
  }
}
</style>
