<template>
  <div id="hotweibo">
    <div class="header">
      <div class="line"></div>
      <span class="title">微博实时热搜</span>
      <span class="change">换一批</span>
    </div>
    <div class="main">
      <ul class="hotWeiboList">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
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
#hotweibo {
  //   border: 1px solid blue;
  box-shadow: 0 0 20px hsla(0, 0%, 40%, 0.1);
  width: 30%;
  height: 400px;
  background-color: #fff;
  margin-top: 20px;
  border-radius: 10px;
  .header {
    // border: 1px dashed red;
    margin-top: 20px;
    position: relative;
    .line {
      width: 3px;
      height: 20px;
      line-height: 20px;
      background-color: #409eef;
      margin: 25px 0px 0px 30px;
      display: inline-block;
    }
    .title {
      position: absolute;
      top: 22.5px;
      font-size: 16px;
      font-weight: bold;
      margin-left: 20px;
      color: #666;
    }
    .change {
      font-family: "微软雅黑";
      font-size: 12px;
      margin-left: 30px;
      color: #666;
      position: absolute;
      top: 25px;
      right: 30px;
    }
  }
  .main {
    .hotWeiboList {
        list-style-type: none;
    }
  }
}
</style>
