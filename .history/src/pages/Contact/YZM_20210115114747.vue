<template>
  <div>
    <div>验证码测试</div>
    <div @click="refreshCode()" class="code" style="cursor:pointer;" title="点击切换验证码">
      <s-identify :identifyCode="identifyCode"></s-identify>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import sIdentify from "SIdentify.vue";
// import axios from 'axios'
export default defineComponent({
  name: 'WatermarkTest',
  components: { sIdentify },
  data() {
    return {
      identifyCode: "",
      identifyCodes: ['0','1','2','3','4','5','6','7','8','9','a','b','c','d'], //根据实际需求加入自己想要的字符
    }
  },
  mounted() {
    this.refreshCode()
	},
	unmounted() {

	},
  methods: {
    // 生成随机数
    randomNum(min, max) {
      max = max + 1
      return Math.floor(Math.random() * (max - min) + min);
    },
    // 更新验证码
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
      console.log('当前验证码:',this.identifyCode);
    },
    // 随机生成验证码字符串
    makeCode(data, len) {
      console.log('data, len:', data, len)
      for (let i = 0; i < len; i++) {
        this.identifyCode += this.identifyCodes[this.randomNum(0, this.identifyCodes.length-1)]
      }
    },
  },
});
</script>