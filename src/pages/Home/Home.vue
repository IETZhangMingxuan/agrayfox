<template>
  <div id="home">
    <Search />
    <div class="wrapper">
      <div class="container">
        <HotWebs />
        <HotWeibo/>
        <HotNews/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>
<style scoped lang="less">
#home {
  height: 5000px;
  .wrapper {
    background-color: #f9f9f9;
    height: 5000px;

    .container {
      width: 1200px;
      margin: 0 auto;
      padding-top: 5px;
    }
  }
}
</style>
