<template>
  <div style="display: flex;align-items: center;">
    <span>验证码：</span>
    <i-input
      v-model="picLyanzhengma"
      placeholder="请输入验证码"
      style="width: 300px"
      @on-blur="checkLpicma"
    ></i-input>
    <input type="button" id="code" @click="createCode" v-model="checkCode"/ class="yanzhengma_inp">
  </div>
</template>
<script>
export default {};
</script>
<style></style>
