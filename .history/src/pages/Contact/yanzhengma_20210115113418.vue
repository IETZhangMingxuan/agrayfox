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
export default {};
</script>
<style></style>
