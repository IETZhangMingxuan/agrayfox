<template>
  <div id="weather">
    <div id="weather-v2-plugin-simple"></div>　　
  </div>
</template>

<script>
export default {
  mounted() {
    window.WIDGET = {
      CONFIG: {
        modules: "20",
        background: 5,
        tmpColor: "ffffff",
        tmpSize: 16,
        cityColor: "ffffff",
        citySize: 16,
        aqiSize: 16,
        weatherIconSize: 24,
        alertIconSize: 18,
        padding: "10px 10px 10px 10px",
        shadow: "1",
        language: "auto",
        borderRadius: 5,
        fixed: "false",
        vertical: "middle",
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
#weather{
    border:1px solid blue;
    height:700px !important;
}
</style>
