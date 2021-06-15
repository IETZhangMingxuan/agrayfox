<template>
  <div>
      <a href="javascript:;" @click="toSearch({cname:item.name,id:item.id})">点此链接</a>
  </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    toSearch(){
        this.$router.push({
            path:'/search',
            query:{
               c name,
                id
            }
        })
    }
};
</script>
<style scoped>

</style>