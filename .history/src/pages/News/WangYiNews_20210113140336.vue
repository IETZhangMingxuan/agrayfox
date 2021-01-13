<template>
  <div id="wynews">

  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      WYNewsList: state => state.news.WYNewsList
    })
  }
};
</script>
<style scoped lang="less">
    #wynews{
        border:1px solid blue;
    }
</style>
