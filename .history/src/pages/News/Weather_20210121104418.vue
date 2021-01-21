<template>
    <div id="he-plugin-standard"></div>
</template>

<script>
export default {
  mounted() {
    window.WIDGET = {
      CONFIG: {
        layout: 2,
        // modules: "20",
        width: "320",
        height: "270",
        padding:"20",
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
.weather {
  border: 1px solid blue;
  height: 400px !important;
  position: relative;
  .view-vertical {
    color: red !important;
  }
}
</style>
