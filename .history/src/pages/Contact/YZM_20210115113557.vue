<template>
  <el-form style="width: 400px;">
    <el-form-item style="height: 40px;margin-bottom: 20px;">
      <el-input class="input" maxlength="8" placeholder="请输入验证码"></el-input>
      <div class="divIdentifyingCode" @click="getIdentifyingCode(true)">
        <img
          id="imgIdentifyingCode"
          style="height:40px; width: 100px; cursor: pointer;"
          alt="点击更换"
          title="点击更换"
        />
      </div>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
 methods: {
 /**
 * 窗口代码
 * @param {Boolean} bRefresh 是否刷新
 */
 getIdentifyingCode: function (bRefresh) {
 let identifyCodeSrc = "https://www.xxx.xxx.xxx/imgCode";
 if (bRefresh) {
 identifyCodeSrc = "https://www.xxx.xxx.xxx/imgCode?" + Math.random();
 }
 let objs = document.getElementById("imgIdentifyingCode");
 objs.src = identifyCodeSrc;
 },
 }
}
</script>
<style scoped lang="less">
.divIdentifyingCode {
 position: absolute;
 top: 0;
 right: 0;
 z-index: 5;
 width: 102px; /*设置图片显示的宽*/
 height: 40px; /*图片显示的高*/
 background: #e2e2e2;
 margin: 0;
 }</style>
