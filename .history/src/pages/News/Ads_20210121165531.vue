<template>
  <div id="ads">
    <div class="block">
      <el-carousel
        trigger="click"
        height="200px"
        autoplay:true
        interval:4000
        arrow="hover"
        indicator-position="none"
      >
        <el-carousel-item v-for="(p, index) in NewsAdsList" :key="index">
          <div class="picItem">
            <a :href="p.url" target="_blank"><img :src="p.picUrl"/></a>
            <span class="title">{{ p.title }}</span>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      NewsAdsList: [{}]
    };
  }
};
</script>
<style scoped lang="less">
#ads {
}
</style>
