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
    toSearch(){
        this.$router.push({
            let location = {name:search},
            if(this.keyword){
                
            }
            params:{
                keyword:this.keyword
            }
        })
    }
  }
};
</script>
<style scoped></style>
