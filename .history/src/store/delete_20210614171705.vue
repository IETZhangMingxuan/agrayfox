<template>
  <div>
    <input type="text" v-model="keyword" />
    <button @click="toSearch">搜索</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      keyword: ""
    };
  },
  methods: {
    //   路由器设置
    //   {name:'search',path:'/search/:keyword',component:()=>import('../pages/')}
    // 
    // 
    toSearch() {
      let location = { name: search };
      if (this.keyword) {
        location.params = {
          keyword: this.keyword
        };
      }
      this.$router.push(location);
    }
  }
};
</script>
<style scoped></style>
