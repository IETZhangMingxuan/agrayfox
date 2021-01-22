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
      NewsAdsList: [{
          id:1,
          picUrl:"https://cms-bucket.ws.126.net/2020/0930/a50f7ea2p00qhgcnt001hc0007s00c4c.png?imageView&thumbnail=280y436&type=webp",
          title:"成功秘诀在于设定正确目标"

      },{
          id:2,
          picUrl:"https://cms-bucket.ws.126.net/2020/0923/b6d2676cp00qh3e8k0049c0007s00c4c.png?imageView&thumbnail=280y436&type=webp",
          title:"学校如何扼杀创造力"

      },{
          id:3,
          picUrl:"https://cms-bucket.ws.126.net/2020/1105/23a7fff0p00qjbpdt0063c0007s00c4c.png?imageView&thumbnail=280y436&type=webp",
          title:"身体和灵魂的幸福"

      },{
          id:4,
          picUrl:"https://cms-bucket.ws.126.net/2020/1110/14059296j00qjkxgm0030c0007s00c4c.jpg?imageView&thumbnail=280y436&type=webp",
          title:"和老年痴呆症说再见"

      },]
    };
  }
};
</script>
<style scoped lang="less">
#ads {
}
</style>
