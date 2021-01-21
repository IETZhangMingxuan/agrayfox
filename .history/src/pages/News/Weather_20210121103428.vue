<template>
  <div id="weather">
    <h3>实时天气情况</h3>
    <div id="weather-v2-plugin-simple"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.WIDGET = {
      CONFIG: {
        layout: 2,
        // modules: "20",
        background: 5,
        width: "1700",
        height: "270",
        tmpColor: "blue",
        tmpSize: 16,
        cityColor: "blue",
        citySize: 16,
        aqiSize: 16,
        weatherIconSize: 24,
        alertIconSize: 26,
        padding: "20px",
        shadow: "1",
        language: "auto",
        borderRadius: 5,
        fixed: "false",
        vertical: "left",
        horizontal: "center",
        key: "aGh9gAMF5m"
      }
    };
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://apip.weatherdt.com/simple/static/js/weather-simple-common.js?v=2.0";
    document.getElementsByTagName("head")[0].appendChild(script);
  }
};
</script>
<style scoped lang="less">
#weather {
  border: 1px solid blue;
  height: 400px !important;
}
</style>
