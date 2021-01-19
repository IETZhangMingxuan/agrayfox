<template>
  <div class="echarts">
    <div class="myEchart" ref="myEchart"></div>
  </div>
</template>
<script>
import echarts from "echarts";
import "../../../node_modules/echarts/map/js/china.js";
export default {};
</script>
<style scoped lang="less">
.echarts {
  .myEchart {
      height:400px;
      width:100%;
  }
}
</style>
