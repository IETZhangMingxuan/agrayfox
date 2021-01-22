<template>
  <div id="kaiyan">
    <!-- <video src="http://baobab.kaiyanapp.com/api/v1/playUrl?vid=186988&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&udid=e686f5856bdf4d48b77b1220abedbb48b5cf1035" autoplay controls>123</video> -->
    <div class="videoListWrapper">
      <div class="loading" v-if="!TYVideoList.length">
        请稍后,正在努力加载中...
      </div>
      <ul class="videoList">
        <li
          v-for="(p, index) in TYVideoList.slice(currentIndex, currentIndex + pageSize)"
          :key="index"
        >
          <div class="router_link" @click="playNow(p, playUrl, playImg, videoTitle)">
            <img :src="p.data.cover.detail" alt="" />
          </div>
          <div class="title">
            <img :src="p.data.tags[0].bgPicture" alt="" class="authorImg" />
            <p class="videoTitle">{{ p.data.author.name }}</p>
          </div>
          <p class="videoDesc">{{ p.data.author.description }}</p>
        </li>
      </ul>
      <!-- <button class="prevBtn" v-if="TYVideoList.length">上一页</button> -->
      <button
        class="nextBtn"
        v-if="TYVideoList.length"
        @click="changeIndex(currentIndex, totalSize, pageSize)"
      >
        换一批
      </button>
    </div>
    <div class="videoMain">
      <h2 class="videoTitle">{{ videoTitle }}</h2>
      <video :src="this.playUrl" controls :poster="this.playImg" class="video" autoplay></video>
      <p class="kaiyan">from 开眼视频—————— 最有深度的短视频 </p>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      /* 初始显示的首个索引:可修改,但不建议 */
      currentIndex: 0,
      /* 返回的总条数:不可修改 */
      totalSize: 10,
      /* 每页显示条数:可修改 */
      pageSize: 6,
      /* 视频播放地址 */
      playUrl:
        "http://baobab.kaiyanapp.com/api/v1/playUrl?vid=142175&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&udid=e686f5856bdf4d48b77b1220abedbb48b5cf1035",
      playImg:
        "http://img.kaiyanapp.com/ec7a530c4e9d88c848097f8028025ca8.jpeg?imageMogr2/quality/60/format/jpg",
      videoTitle: "健身必备：5 分钟全身力量训练"
    };
  },
  computed: {
    ...mapState({
      TYVideoList: state => state.tianyan.TYVideoList
    })
  },
  methods: {
    changeIndex(currentIndex, totalSize, pageSize) {
      if (currentIndex < totalSize - pageSize) {
        this.currentIndex = currentIndex + pageSize;
      } else {
        this.currentIndex = 0;
      }
    },
    playNow(p, playUrl, playImg, videoTitle) {
      this.playUrl = p.data.playUrl;
      this.playImg = p.data.cover.detail;
      this.videoTitle = p.data.title;
    }
  }
};
</script>
<style scoped lang="less">
#kaiyan {
  width: 1200px;
  color: #fff;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  .videoListWrapper {
    // border: 1px solid green;
    padding-left: 20px;
    padding-right: 20px;
    width: 420px;
    margin-top: -25px;
    .loading {
      min-height: 600px;
      line-height: 600px;
    }
    .videoList {
      width: 100%;
      list-style-type: none;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      //   min-height: 646px;
      li {
        padding-top: 25px;
        padding-bottom: 5px;
        width: 200px;
        font-family: "Microsoft Yahei";
        font-size: 14px;
        font-weight: 300;
        .router_link {
          //   border: 1px solid greenyellow;
          text-decoration: none;
          img {
            width: 200px;
            height: 100px;
          }
        }
        .title {
          //   border: 1px solid yellow;
          position: relative;
          height: 35px;
          color: #fff;
          .authorImg {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            position: absolute;
            left: 0px;
            top: 0px;
          }
          .videoTitle {
            font-size: 14px;
            margin-top: 10px;
            position: absolute;
            left: 35px;
            top: -12px;
            height: 35px;
            line-height: 35px;
            width: 120px;
            overflow: hidden;
            text-align: left;
          }
        }

        .videoDesc {
          font-size: 12px;
          margin-top: 5px;
          text-align: left;
        }
      }
    }
    .prevBtn {
      font-size: 12px;
      outline: none;
      //   background-color: #f9f9f9;
      color: #333;
      border: none;
      padding: 2px 5px;
      margin-right: 50px;
      margin-top: 15px;
      background-color: black;
      color: #fff;
      font-family: "Microsoft Yahei";
    }
    .nextBtn {
      font-size: 12px;
      outline: none;
      font-family: "Microsoft Yahei";
      //   background-color: #f9f9f9;
      background-color: black;
      color: #fff;
      border: none;
      padding: 2px 5px;
      margin-top: 15px;
      position: fixed;
      bottom: 15px;
      left: 250px;
    }
  }
  .videoMain {
    width: 650px;
    height: 600px;
    .videoTitle {
      font-family: "Microsoft Yahei";
      font-size: 18px;
      color: #fff;
      font-weight: 600;
      padding: 10px;
    }
    .video {
      box-sizing: border-box;
      width: 650px;
      height: 550px;
      border: 1px solid #333;
    }
  }
}
</style>
