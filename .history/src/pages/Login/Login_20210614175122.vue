<template>
  <div id="login">
      <h2>我是模拟登录页</h2>
      <input type="text" v-model="keyword">
      <button @click="toSearch">模拟搜索</button>
  </div>
</template>
<script>
export default {
    data() {
        return {
            keyword:''
        }
    },
    methods:{
        toSearch(){
            this.$router.push('/test')
        }
    }
};

</script>
<style scoped>

</style>