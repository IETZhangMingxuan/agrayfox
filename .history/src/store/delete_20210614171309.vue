<template>
  <div>
    <input type="text" v-model="keyword" />
    <button @click="toSearch">搜索</button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    toSearch
  }
};
</script>
<style scoped></style>
