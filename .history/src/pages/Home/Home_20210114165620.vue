<template>
  <div id="home">
    <Search />
    <div class="wrapper">
      <div class="container">
        <HotWebs />
        <div class="raw2">
          <HotWeibo />
          <Frame />
        </div>
        <div class="raw3">
          <HotNews />
          <Frame2 />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
<style scoped lang="less">
#home {
  .wrapper {
    background-color: #f9f9f9;
    .container {
      width: 1200px;
      margin: 0 auto;
      padding-top: 5px;
      .raw2 {
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
      }
      .raw3 {
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
      }
    }
  }
}
//
</style>
