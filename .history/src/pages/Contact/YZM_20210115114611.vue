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
      <div @click="refreshCode()" class="code" style="cursor:pointer;" title="点击切换验证码">
        <YZMCanvas />
      </div>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      identifyCode: "",
      identifyCodes: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d"] //根据实际需求加入自己想要的字符
    };
  },
  mounted() {
    this.refreshCode();
  },
  unmounted() {},
  methods: {
    // 生成随机数
    randomNum(min, max) {
      max = max + 1;
      return Math.floor(Math.random() * (max - min) + min);
    },
    // 更新验证码
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
      console.log("当前验证码:", this.identifyCode);
    },
    // 随机生成验证码字符串
    makeCode(data, len) {
      console.log("data, len:", data, len);
      for (let i = 0; i < len; i++) {
        this.identifyCode += this.identifyCodes[this.randomNum(0, this.identifyCodes.length - 1)];
      }
    }
  }
};
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
}
</style>
