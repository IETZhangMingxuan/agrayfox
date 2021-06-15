<template>
  <div>
    <a href="javascript:;" @click="toSearch({ cname: item.name, id: item.id })">点此链接</a>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  toSearch() {
    this.$router.push({
      path: "/search",
      query: {
        cname,
        id
      }
    });
  }
  //动态路由设置可传params和query
  //{name:'search',path:'/search/:keyword',component:()=>import(路径),props:route=>{
  // keyword:
  //   }}
};
</script>
<style scoped></style>
