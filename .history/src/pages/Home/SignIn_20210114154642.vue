<template>
  <div id="wrapper">
    <div id="signIn">
      登录页
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less">
#wrapper {
  width: 1200px;
  margin: 0 auto;
  position: absolute;
  background-color: red;
  z-index: 999999;
  border: 3px solid blue;
  height: 600px;
  top: 0px;
  #signIn {
    margin: 0 auto;
    border: 1px solid blue;
    background-color: #333;
    z-index: 99999999;
    color: #fff;
    font-family: "微软雅黑";
    font-size: 22px;
    font-weight: 400;
    text-align: center;
    width: 400px;
    height: 500px;
  }
}
</style>
