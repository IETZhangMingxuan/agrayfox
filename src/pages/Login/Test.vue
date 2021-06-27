<template>
  <div id="test">
    <h4>实验室组件</h4>
    <h4>你居然发现了这里</h4>
    <h4>这里是该网站的测试组件,用于对新功能的测试,如果有什么需求,可以在留言板写下你宝贵的想法</h4>
    <h4>现在是2.0版本</h4>
    <h4>接下来需要实现的需求有:</h4>
    <h4>1.用户修改密码</h4>
    <h4>2.用户修改头像</h4>
    <h4>3.添加钢琴模块</h4>
    <h4>4.优化新闻页,添加更多接口</h4>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped lang="less">
#test{
  margin: 50px auto;
  h4{
    font-family: "SF Pro Display", Arial, "PingFang SC", "Hiragino Sans GB","Microsoft YaHei", sans-serif;
    padding: 10px auto;
    margin-top: 10px;
    font-size:20px;

  }
}
</style>
