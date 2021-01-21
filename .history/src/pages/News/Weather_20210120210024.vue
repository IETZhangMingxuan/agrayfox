<template>
  <section class="p-10">
    <h1>{{ ip }}</h1>
    <h2>我是天气组件</h2>
    <h2>您当前的IP地址为:{{ myIp }}</h2>
    <p>{{UserWeather.HeWeather6.basic.cnty}}</p>
  </section>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      ip: "",
      myIp: returnCitySN["cip"]
    };
  },
  computed: {
    ...mapState({
      UserWeather: state => state.weatherApi.UserWeather
    })
  },
  methods: {
     
  },
  
};
</script>

<style lang="less" scoped></style>
