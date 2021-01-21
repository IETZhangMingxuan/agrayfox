<template>
  <section class="p-10">
    <h1>{{ ip }}</h1>
    <h2>我是天气组件</h2>
    <h2>您当前的IP地址为:{{ myIp }}</h2>
    <p>所在地:{{UserWeather.HeWeather6[0].basic.cnty}}&nbsp;{{UserWeather.HeWeather6[0].basic.admin_area}}&nbsp;{{UserWeather.HeWeather6[0].basic.parent_city}}</p>
    <p>
        当前天气情况为:
        {{UserWeather.HeWeather6[0].now.cond_txt}}
    </p>
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
