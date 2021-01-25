<template>
  <div id="kaiyan">
    <!-- <video src="http://baobab.kaiyanapp.com/api/v1/playUrl?vid=186988&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&udid=e686f5856bdf4d48b77b1220abedbb48b5cf1035" autoplay controls>123</video> -->
    <div class="videoListWrapper">
      <div class="loading" v-if="!KYVideoList.length">
        请稍后,正在努力加载中...
      </div>
      <ul class="videoList animate__animated animate__flipInY">
        <li
          v-for="(p, index) in KYVideoList.slice(currentIndex, currentIndex + pageSize)"
          :key="index"
          class="animate__animated animate__rotateInDownLeft"
        >
          <div class="router_link" @click="playNow(p, playUrl, playImg, videoTitle)">
            <img :src="p.data.cover.detail" alt="" class="posterImg" v-if="p.data" />
          </div>
          <div class="title">
            <img :src="p.data.tags[0].bgPicture" alt="" class="authorImg" v-if="p.data" />
            <p class="videoTitle" v-if="p.data.author">{{ p.data.author.name }}</p>
          </div>
          <p class="videoDesc">{{ p.data.author.description }}</p>
        </li>
      </ul>
      <!-- <button class="prevBtn" v-if="KYVideoList.length">上一页</button> -->
      <button class="nextBtn" v-if="KYVideoList.length" @click="getKYVideoList()">
        {{ sendAxios }}
      </button>
      <i class="iconfont icon-exchange" @click="getKYVideoList"></i>
    </div>
    <div class="videoMain">
      <h2 class="videoTitle">{{ videoTitle }}</h2>
      <video
        :src="this.playUrl"
        controls
        :poster="this.playImg"
        class="video animate__animated animate__flipInY"
        loop
        autoplay
        v-if="KYVideoList.length"
      ></video>
      <p class="kaiyan">From开眼视频 有深度的短视频</p>
    </div>
  </div>
</template>
<script>
import axios from "axios";
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
        "http://baobab.kaiyanapp.com/api/v1/playUrl?vid=46569&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&udid=e686f5856bdf4d48b77b1220abedbb48b5cf1035",
      playImg:
        "http://img.kaiyanapp.com/244174c74fbe7e078867b8b8bdc8393a.png?imageMogr2/quality/60/format/jpg",
      videoTitle: "奥斯卡提名短片：我心爱的茧",
      KYVideoList: [
        {
          data: {
            playUrl:
              "http://baobab.kaiyanapp.com/api/v1/playUrl?vid=46569&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&udid=e686f5856bdf4d48b77b1220abedbb48b5cf1035",
            tags: [
              {
                bgPicture:
                  "http://img.kaiyanapp.com/afb9e7d7f061d10ade5ebcb524dc8679.jpeg?imageMogr2/quality/60/format/jpg"
              }
            ],
            cover: {
              detail:
                "http://img.kaiyanapp.com/244174c74fbe7e078867b8b8bdc8393a.png?imageMogr2/quality/60/format/jpg"
            },
            title: "奥斯卡提名短片：我心爱的茧",
            author: {
              name: "CG Meetup",
              description: "精彩 CG 动画短片，让你大开眼界，灵感迸发。"
            }
          }
        },
        {
          data: {
            playUrl:
              "http://baobab.kaiyanapp.com/api/v1/playUrl?vid=137507&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&udid=e686f5856bdf4d48b77b1220abedbb48b5cf1035",
            tags: [
              {
                bgPicture:
                  "http://img.kaiyanapp.com/9056413cfeffaf0c841d894390aa8e08.jpeg?imageMogr2/quality/60/format/jpg"
              }
            ],
            cover: {
              detail:
                "http://img.kaiyanapp.com/dd3a5ee6926dc692478e36f7c3928167.jpeg?imageMogr2/quality/60/format/jpg"
            },
            title: "宜家趣味广告：电梯里的圣诞节",
            author: {
              name: "宜家 IKEA 广告精选",
              description: "实践对更美好生活的追求"
            }
          }
        },
        {
          data: {
            playUrl:
              "http://baobab.kaiyanapp.com/api/v1/playUrl?vid=188271&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&udid=e686f5856bdf4d48b77b1220abedbb48b5cf1035",
            tags: [
              {
                bgPicture:
                  "http://img.kaiyanapp.com/a082f44b88e78daaf19fa4e1a2faaa5a.jpeg?imageMogr2/quality/60/format/jpg"
              }
            ],
            cover: {
              detail:
                "http://img.kaiyanapp.com/c6df679d90b8cfa2b4cf950d0a429f14.png?imageMogr2/quality/60/format/jpg"
            },
            title: "你的样子 带着光芒",
            author: {
              name: "青岛城视映画传媒有限公司",
              description:
                "成立于2012年，拥有前期拍摄、数字制作设备与技术，具有1000平米影视制作基地、高清机房、CG特效机房、动画渲染农场、高端达芬奇后期调色等，整合影视全流程产业链的综合性影视传媒机构\n \n "
            }
          }
        },
        {
          data: {
            playUrl:
              "http://baobab.kaiyanapp.com/api/v1/playUrl?vid=98925&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&udid=e686f5856bdf4d48b77b1220abedbb48b5cf1035",
            tags: [
              {
                bgPicture:
                  "http://img.kaiyanapp.com/9056413cfeffaf0c841d894390aa8e08.jpeg?imageMogr2/quality/60/format/jpg"
              }
            ],
            cover: {
              detail:
                "http://img.kaiyanapp.com/a6d1f0d83140ab27593b6de278bf984b.jpeg?imageMogr2/quality/60/format/jpg"
            },
            title: "布拉格国际广告节：英雄调",
            author: {
              name: "布拉格有个广告节",
              description:
                "布拉格国际广告节创立于2010年，是欧洲中部国家和地区市场营销、传播领域的盛会。"
            }
          }
        },
        {
          data: {
            playUrl:
              "http://baobab.kaiyanapp.com/api/v1/playUrl?vid=184469&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&udid=e686f5856bdf4d48b77b1220abedbb48b5cf1035",
            tags: [
              {
                bgPicture:
                  "http://img.kaiyanapp.com/7ea328a893aa1f092b9328a53494a267.png?imageMogr2/quality/60/format/jpg"
              }
            ],
            cover: {
              detail:
                "http://img.kaiyanapp.com/bdfa64ccce240558c6de705dc36d73ce.png?imageMogr2/quality/60/format/jpg"
            },
            title: "ONE DAY IN 西海岸",
            author: {
              name: "青岛城视映画传媒有限公司",
              description:
                "成立于2012年，拥有前期拍摄、数字制作设备与技术，具有1000平米影视制作基地、高清机房、CG特效机房、动画渲染农场、高端达芬奇后期调色等，整合影视全流程产业链的综合性影视传媒机构\n \n "
            }
          }
        },
        {
          data: {
            playUrl:
              "http://baobab.kaiyanapp.com/api/v1/playUrl?vid=145565&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&udid=e686f5856bdf4d48b77b1220abedbb48b5cf1035",
            tags: [
              {
                bgPicture:
                  "http://img.kaiyanapp.com/9056413cfeffaf0c841d894390aa8e08.jpeg?imageMogr2/quality/60/format/jpg"
              }
            ],
            cover: {
              detail:
                "http://img.kaiyanapp.com/cf2db44f87f6ef0dd98432d41862118f.jpeg?imageMogr2/quality/60/format/jpg"
            },
            title: "东京城市宣传片：当传统遭遇潮流",
            author: {
              name: "开眼广告精选",
              description: "为广告人的精彩创意点赞"
            }
          }
        }
      ],
      sendAxios: "换一批"
    };
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
    },
    async getKYVideoList() {
      var ajaxRandomNum = parseInt(Math.random() * (130000 - 120000) + 120000);
      console.log(ajaxRandomNum);
      this.sendAxios = "加载中";
      await axios
        .get(`https://api.apiopen.top/videoRecommend?id=${ajaxRandomNum}`)
        .then(response => {
          const result = response.data.result;
          const code = response.data.code;
          if (code === 400) {
            console.log(code);
            this.sendAxios = "换一批";
          }
          this.KYVideoList = result;
        })
        .catch(error => {
          console.log("我没有获取到开眼视频数据,原因是:" + error.message);
          this.sendAxios = "网络差";
          return;
        });
      this.playImg = this.KYVideoList[0].data.cover.detail;
      this.videoTitle = this.KYVideoList[0].data.title;
      this.playUrl = this.KYVideoList[0].data.playUrl;
      if (code === 200) {
        this.sendAxios = "换一批";
      } else if (code === 400) {
        this.sendAxios = "网络差,请重新加载";
      }
    },
    async mounted() {
      this.getKYVideoList();
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
    position: relative;
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
      margin-top: 55px;
      //   min-height: 646px;
      li {
        padding-top: 25px;
        padding-bottom: 5px;
        width: 200px;
        max-height: 200px;
        font-family: "Microsoft Yahei";
        font-size: 14px;
        font-weight: 300;
        .router_link {
          //   border: 1px solid greenyellow;
          text-decoration: none;
          overflow: hidden;
          width: 200px;
          height: 100px;
          img {
            width: 100%;
            height: 100%;
            transition: 1s;
          }
          img:hover {
            transform: scale(1.2);
            opacity: 0.8;
          }
        }
        .title {
          //   border: 1px solid yellow;
          position: relative;
          height: 35px;
          color: #fff;
          margin-top: 5px;
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
          max-height: 30px;
          overflow: hidden;
        }
      }
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
      top: 80px;
      left: 255px;
      cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/pointer.cur), auto !important;
    }
    .icon-exchange {
      color: #fff;
      cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/pointer.cur), auto !important;
      position: absolute;
      top: 42px;
      left: 192px;
    }
  }
  .videoMain {
    width: 650px;
    height: 600px;
    position: relative;
    .videoTitle {
      font-family: "Microsoft Yahei";
      font-size: 18px;
      color: #fff;
      font-weight: 600;
      padding: 10px;
      //   border:1px solid red;
      margin-bottom: 10px;
    }
    .video {
      box-sizing: border-box;
      width: 652px;
      height: 532px;
      border: 1px solid #fafafa;
    }
    .kaiyan {
      position: absolute;
      bottom: -20px;
      left: 5px;
      font-family: "Microsoft Yahei";
      font-size: 12px;
      color: #fff;
      font-weight: 300;
      letter-spacing: 1px;
    }
  }
}
</style>
