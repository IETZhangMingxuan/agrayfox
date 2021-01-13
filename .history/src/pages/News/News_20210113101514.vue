<template>
  <div id="news">
    新闻总路由组件
    <div class="navbar">
      <ul>
        <li url="http://api.tianapi.com/txapi/wxinfo/index?key=4428d8e64916b6207baf857dac31f424&biz=MzA4Njg1MjkzOA==">微信热文</li>
        <li url="https://api.apiopen.top/getWangYiNews?count=100">网易新闻</li>
        <li></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="less">
#news {
  border: 1px dashed blue;
  margin: 0 auto;
  text-align: center;
  margin-top: 20px;
  width: 1200px;
}
</style>
