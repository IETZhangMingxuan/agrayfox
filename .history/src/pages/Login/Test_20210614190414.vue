<template>
  <div>
    <h2>我是测试用组件</h2>
    <div>
      <p>keyword:{{ keyword }}</p>
      <p>goodName:{{ goodName2 }}</p>
      <p>goodId:{{ goodId2 }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
  props:{
      keyword:String,
      goodName2:String,
      goodId1:Number
  }
};
</script>
<style scoped></style>
