<template>
  <section class="p-10">
    <h1>{{ ip }}</h1>
    <h2>我是天气组件</h2>
    <button @click="test">显示天气</button>
    <h2>{{myIp}}</h2>
  </section>
</template>
<script>
export default {
  data() {
    return {
      ip: "",
      myIp:returnCitySN["cip"],
    };
  },
  methods: {
    
    test() {
      this.myIp = returnCitySN["cip"];
    }
  },
  mounted() {
    this.getUserIP(ip => {
      this.ip = ip;
    });
  }
};
</script>

<style lang="less" scoped></style>
