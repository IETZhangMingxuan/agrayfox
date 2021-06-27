<template>
  <div id="home">
    <Search />
    <div class="wrapper">
      <div class="container">
        <HotWebs />
        <div class="raw2">
          <HotWeibo />
          <Frame2 />
        </div>
        <div class="raw3">
          <HotNews />
          <Frame />
        </div>
        <div class="raw4">
          <Robot />
          <Frame3 />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      userinfo: {}
    };
  },
  // 使用vuex替代了总线获取登录成功后的用户信息
  // async created() {
  //   this.$bus.$on("sendUserInfoToHome", okok => {
  //     this.userinfo = okok;
  //     console.log(this.userinfo);
  //   });
  // }
};
</script>
<style scoped lang="less">
#home {
  .wrapper {
    background-color: #f9f9f9;
    z-index: -1;
    .container {
      width: 1200px;
      margin: 0 auto;
      padding-top: 5px;
      // padding-bottom: 20px;
      .raw2,
      .raw3,
      .raw4 {
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
      }
    }
  }
}
//
</style>
