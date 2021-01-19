<template>
  <div class="devoloped">
    <div class="line"></div>
    <div class="title">发展历程</div>
    div class="block">
  <div class="radio">
    排序：
    <el-radio-group v-model="reverse">
      <el-radio :label="true">倒序</el-radio>
      <el-radio :label="false">正序</el-radio>
    </el-radio-group>
  </div>

  <el-timeline :reverse="reverse">
    <el-timeline-item
      v-for="(activity, index) in activities"
      :key="index"
      :timestamp="activity.timestamp">
      {{activity.content}}
    </el-timeline-item>
  </el-timeline>
</div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="less">
.devoloped {
  background-color: fff;
  box-shadow: 0 0 10px hsla(0, 0%, 40%, 0.3);
  border-radius: 10px;
  position: relative;
  height: 500px;
  border: 1px solid blue;
  margin-top: 25px;
  .line {
    width: 3px;
    height: 22px;
    line-height: 20px;
    background-color: #409eef;
    display: inline-block;
    position: absolute;
    top: 20px;
    left: 25px;
  }
  .title {
    font-family: "微软雅黑";
    font-size: 16px;
    margin-left: 40px;
    color: #409eef;
    position: absolute;
    top: 18px;
    user-select: none;
    font-weight: 700;
  }
}
.devoloped:hover {
  box-shadow: 0 0 20px hsla(0, 0%, 40%, 0.6);
}
</style>
