<template>
  <section class="p-10">
    <h1>{{ ip }}</h1>
    <h2>我是天气组件</h2>
    <h2>{{ myIp }}</h2>
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
      UserCity: state => state.tianxingApi.UserCity
    })
  },
  methods: {},
  created() {
    getUserCity();
  },
  mounted() {}
};
</script>

<style lang="less" scoped></style>
