<template>
  <div>
      <a href="javascript:;" @click="toSearch({name=})">点此链接</a>
  </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    toSearch(){
        this.$router.push('/search')
    }
};
</script>
<style scoped>

</style>