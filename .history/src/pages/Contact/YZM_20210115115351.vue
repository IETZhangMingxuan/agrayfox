<template>
  <div style="display: flex;align-items: center;">
    <span>验证码：</span>
    <input
      v-model="picLyanzhengma"
      placeholder="请输入验证码"
      style="width: 300px"
      @on-blur="checkLpicma"
    ></input>
    <input type="button" id="code" @click="createCode" v-model="checkCode" class="yanzhengma_inp"/>
  </div>
</template>
<script>
export default {
  data(){
    return {
        picLyanzhengma:"",
        checkCode:""
    }
  },
  methods: {
    createCode() {
      code = "";
      var codeLength = 4; //验证码的长度
      var random = new Array(
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      );
      for (var i = 0; i < codeLength; i++) {
        var index = Math.floor(Math.random() * 36); //取得随机数的索引（0~35）
        code += random[index]; //根据索引取得随机数加到code上
      }
      this.checkCode = code; //把code值赋给验证码
    },
    // 验证所输入验证码是否一致，不区分大小写
    checkLpicma() {
      this.picLyanzhengma.toUpperCase(); //取得输入的验证码并转化为大写
      if (this.picLyanzhengma == "") {
        this.$message.info("请输入验证码");
      } else if (this.picLyanzhengma.toUpperCase() != this.checkCode) {
        this.$message.info("验证码输入错误");
        this.createCode(); //刷新验证码
        this.picLyanzhengma = "";
      } else {
        //输入正确时
      }
    }
  }
};
</script>
<style></style>
