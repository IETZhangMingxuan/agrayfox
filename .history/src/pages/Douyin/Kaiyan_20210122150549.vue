<template>
  <div id="kaiyan">
    <h2>开眼热门视频</h2>
    <!-- <video src="http://baobab.kaiyanapp.com/api/v1/playUrl?vid=186988&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&udid=e686f5856bdf4d48b77b1220abedbb48b5cf1035" autoplay controls>123</video> -->
    <div class="videoListWrapper">
      <ul class="videoList">
        <li v-for="(p, index) in TYVideoList" :key="index">
          <a href="javascript:;" class="router_link"><img :src="p.data.cover.detail" alt=""/></a>
          <!-- <video :src="p.data.playUrl" controls :poster="p.data.cover.detail"></video> -->
          <p class="videoTitle">{{ p.data.author.name }}</p>
          <p class="videoDesc">{{ p.data.author.description }}</p>
        </li>
      </ul>
    </div>
    <div class="videoMain">
      <router-view> </router-view>
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
#kaiyan {
  width: 800px;
  .videoListWrapper {
    .videoList {
      width: 30%;
      height:300px;
      border: 1px solid blue;
      li {
        padding: 40px 0px;
        color: #fff;
        font-family: "Microsoft Yahei";
        font-size: 14px;
        font-weight: 300;
        .router_link {
          text-decoration: none;
          img {
            width: 200px;
            height: 100px;
          }
        }
        video {
          width: 400px;
          height: 240px;
        }
        .videoTitle {
        }
      }
    }
    .videoMain {
      width: 70%;
      height:400px;
      border: 1px solid red;
    }
  }
}
</style>
