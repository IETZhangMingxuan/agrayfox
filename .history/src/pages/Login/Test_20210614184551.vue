<template>
  <div>
    <h2>我是测试用组件</h2>
    <div>
      <p>keyword:{{ keyword }}</p>
      <p>goodName:{{ goodName }}</p>
      <p>goodId:{{ goodId }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
  props:["keyword"]
};
</script>
<style scoped></style>
