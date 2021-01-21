<template>
  <div id="weatherWrapper">
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
        width: "220",
        height: "200",
        padding: "20px 20px 0px 20px",
        background: 2,
        dataColor: "4A4A4A",
        language: "zh",
        borderRadius: "10",
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
  padding-left: 50px;
  padding-top:40px;
  padding-bottom:20px;
  box-shadow: 0 0 10px hsla(0, 0%, 40%, 0.2);
  border-radius: 5px;
  font-family: "微软雅黑";
  font-size: 24px;
  font-weight: 400;
  margin:0 auto;
  margin-bottom: 20px;
  position: relative;
  #he-plugin-standard {
    border: 1px solid red !important;
    .view-vertical {
      color: red !important;
    }
  }
}
#weatherWrapper:hover {
  box-shadow: 0 0 10px hsla(0, 0%, 40%, 0.6);
}
</style>
