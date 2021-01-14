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
    width:1200px;
    position: relative;
    background-color: red;
    z-index:999999;
    border:3px solid blue;
    height:400px;
  #signIn {
    width: 400px;
    height: 500px;
    border: 1px solid blue;
    background-color: #333;
    z-index: 99999999;
    color: #fff;
    font-family: "微软雅黑";
    font-size: 22px;
    font-weight: 400;
    text-align: center;
    position: absolute;
    top: 10px;
    left: 0px;
  }
}
</style>
