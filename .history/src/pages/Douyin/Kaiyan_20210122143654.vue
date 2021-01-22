<template>
  <div id="kaiyan">
    <h2>开眼热门视频</h2>
    <!-- <video src="http://baobab.kaiyanapp.com/api/v1/playUrl?vid=186988&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&udid=e686f5856bdf4d48b77b1220abedbb48b5cf1035" autoplay controls>123</video> -->
    <div class="videoListWrapper">
      <ul class="videoList">
        <li v-for="(p, index) in TYVideoList" :key="index">
          <video :src="p.data.playUrl" controls></video>
          <p>{{ p.data.author.follow.name }}</p>
          <p>{{ p.data.author.shield.description }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      TYVideoList: state => state.tianyan.TYVideoList
    })
  }
};
</script>
<style scoped lang="less">
#kaiyan{
    .videoListWrapper{
        .videoList{
            video{
                width:100px;
                height:40px;
            }
        }
    }
}
</style>
