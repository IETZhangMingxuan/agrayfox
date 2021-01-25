<template>
  <div id="articles">
    <h3 id="test">博客总路由页</h3>
    <!-- 博客分类导航 -->
    <div class="navListWrapper">
      <ul class="navList">
        <li>全部</li>
        <li>Javascript</li>
        <li>Vue</li>
        <li>React</li>
        <li>小程序</li>
        <li>MySQL</li>
        <li>杂谈</li>
        <li>其他</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="less">
#articles {
  // border: 1px dashed blue;
  margin: 0 auto;
  text-align: center;
  margin-top: 20px;
  width: 1200px;
  #test {
    color: #666;
    font-family: "Microsoft Yahei";
    margin-top: 50px;
  }
  .navListWrapper {
    .navList {
      list-style: none;
      display: flex;
      justify-content: flex-start;
      flex-wrap: nowrap;
      li {
        padding: 5px 10px;
      }
    }
  }
}
</style>
