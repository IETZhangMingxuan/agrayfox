<template>
  <div id="weatherWrapper">
    <div class="line"></div>
    <div class="title">实况天气</div>
    <div id="he-plugin-standard"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.WIDGET = {
      CONFIG: {
        layout: 2,
        // modules: "20",
        width: "26  0",
        height: "260",
        padding: "20px 40px 0px 40px",
        background: 1,
        // dataColor: "4A4A4A",
        dataColor: "fff",
        language: "zh",
        borderRadius: "10",
        tmpSize:24,
        key: "cfd862f506f641f0ab66b8586290732e"
      }
    };
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://widget.qweather.net/standard/static/js/he-standard-common.js?v=2.0";
    document.getElementsByTagName("head")[0].appendChild(script);
  }
};
</script>
<style scoped lang="less">
#weatherWrapper {
  padding-left: 40px;
  padding-top: 45px;
  padding-bottom: 10px;
  box-shadow: 0 0 10px hsla(0, 0%, 40%, 0.2);
  border-radius: 5px;
  font-family: "微软雅黑";
  font-size: 24px;
  font-weight: 400;
  margin: 0 auto;
  margin-bottom: 20px;
  position: relative;
  .line {
    width: 3px;
    height: 22px;
    line-height: 22px;
    // background-color: #409eef;
    background-color: #555;
    position: absolute;
    top: 15px;
    left: 20px;
  }
  .title {
    font-family: "微软雅黑";
    font-size: 16px;
    margin-left: 20px;
    color: #555;
    position: absolute;
    top: 15px;
    user-select: none;
    left: 15px;
  }
}
#weatherWrapper:hover {
  box-shadow: 0 0 10px hsla(0, 0%, 40%, 0.6);
}
</style>
