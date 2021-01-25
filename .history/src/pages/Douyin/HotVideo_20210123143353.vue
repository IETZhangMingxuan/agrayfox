/* 快手热搜榜数据渲染 */
<template>
  <div class="main">
    <div
      class="video"
      v-for="(item, index) in kuaiShouVideoList01.slice(currentIndex, currentIndex + 1)"
      :key="index"
    >
      <video
        :src="item.video_url"
        class="videoMain animate__animated animate__zoomIn"
        autoplay
        loop
      ></video>
      <!-- 文字部分 -->
      <div class="text" v-show="textVisible">
        <div class="author">
          <!-- <img :src="item.avatar" alt="网络出错" class="authorImg" /> -->
          <div class="authorName">@{{ item.nickname }}</div>
          <div class="videoDes" v-show="item.desc">
            <p class="videoDesMain">{{ item.desc }}</p>
          </div>
          <!-- 点击隐藏文字部分 -->
          <i class="iconfont icon-xia" @click="changeTextVisible(textVisible, textUnvisible)"></i>
        </div>
      </div>
      <!-- 点击显示文字部分 -->
      <i
        class="iconfont icon-top"
        @click="changeTextUnvisible(textVisible, textUnvisible)"
        v-show="textUnvisible"
      ></i>
      <!-- 左右切换按钮 -->
      <div class="button">
        <i class="iconfont icon-right2" @click="nextDouyin(currentIndex, totalSize)"></i>
        <i class="iconfont icon-left_3" @click="prevDouyin(currentIndex, totalSize)"></i>
      </div>
      <!-- 右侧列表按钮 -->
      <div class="tips">
        <img :src="item.avatar" alt="网络出错" class="authorImg" />
        <i class="iconfont icon-xihuan" :class="{ redColor }" @click="open(redColor)"></i>
        <i class="iconfont icon-pinglun2"></i>
        <i class="iconfont icon-fenxiang1"></i>
        <span class="likeNums">{{ (item.statistics.zan / 10000).toFixed(1) + "w" }}</span>
        <span class="commentNums">{{ (item.statistics.comment / 10000).toFixed(1) + "w" }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      currentIndex: 6,
      /* 根据接口来修改,该接口返回20条数据 */
      totalSize: 19,
      redColor: false,
      textVisible: true,
      textUnvisible: false
    };
  },
  computed: {
    ...mapState({
      kuaiShouVideoList01: state => state.kuaiShouVideo01.kuaiShouVideoList01
    })
  },
  methods: {
    nextDouyin(currentIndex, totalSize) {
      if (currentIndex < totalSize) {
        this.currentIndex = currentIndex + 1;
      } else {
        this.currentIndex = 0;
      }
      this.redColor = false;
    },
    prevDouyin(currentIndex, totalSize) {
      if (this.currentIndex <= totalSize && this.currentIndex > 0) {
        this.currentIndex = currentIndex - 1;
      } else if (this.currentIndex <= 0) {
        this.currentIndex = totalSize;
      }
      this.redColor = false;
    },
    open(redColor) {
      if (redColor === false) {
        this.$notify({
          dangerouslyUseHTMLString: true,
          message: '<span style="color:green">已点赞</span>',
          type: "success",
          offset: 250,
          showClose: false
        });
        this.redColor = true;
      } else if (redColor === true) {
        this.$notify.error({
          dangerouslyUseHTMLString: true,
          message: '<span style="color:orangered">已取消</span>',
          offset: 250,
          showClose: false
        });
        this.redColor = false;
      }
    },
    changeTextVisible(textVisible) {
      if ((textVisible = true)) {
        this.textVisible = false;
        this.textUnvisible = true;
      } else {
        this.textVisible = true;
      }
    },
    changeTextUnvisible(textVisible, textUnvisible) {
      this.textVisible = true;
      this.textUnvisible = false;
    }
  }
};
</script>
<style scoped lang="less">
.main {
  width: 100%;
  position: relative;
  // border:5px solid red;
  box-sizing: border-box;
  margin-top: 20px;
  .video {
    // border: 5px solid #fff;
    margin: 0 auto;
    width: 500px;
    height: 600px;
    position: relative;
    .iphone{
      z-index:1;
      position: absolute;
      width:340px;
      height:700px;
      left:100px;
      top:50px;
    }
    /* 渲染出来的视频主体 */
    .videoMain {
      width: 338px !important;
      position: relative;
      height: 600px !important;
      display: block;
      margin: 0 auto;
      z-index:9999;
      img {
        width: 100%;
        height: 100%;
      }
      .icon-bofang7 {
        font-size: 5em;
        color: rgba(#eaeaea, 0.9);
        position: absolute;
        top: 40%;
        right: 40%;
      }
      .icon-bofang7:hover {
        color: rgba(#eaeaea, 0.5);
        cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/pointer.cur), auto !important;
      }
    }
    .text {
      z-index:99999;
      position: absolute;
      bottom: -1px;
      left: 80px;
      // background-color: rgba(black, 0.5);
      background: linear-gradient(180deg, black, #111, 0.8);
      width: 68%;
      // border: 1px solid blue;
      box-sizing: border-box;
      height: 83px !important;
      .author {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: left;
        flex-wrap: wrap;
        .authorName {
          color: #fff;
          font-family: "Microsoft Yahei";
          font-weight: bold;
          // border: 1px solid blue;
          height: 30px;
          line-height: 40px;
          display: inline-block;
          padding-left: 10px;
          width: 160px;
          overflow: hidden;
          text-align: left;
        }
        .videoDes {
          // border: 1px solid orange;
          color: #fff;
          text-decoration: none;
          user-select: none;
          font-size: 14px;
          font-family: "Microsoft Yahei";
          font-weight: 300;
          letter-spacing: 1px;
          text-align: left;
          padding: 5px 10px;
          line-height: 20px;
          display: block;
          width: 100%;
          max-height: 38px;
          overflow: hidden;
          .videoDesMain {
            letter-spacing: 0px;
            overflow: hidden;
            max-height: 80px;
          }
        }
        .icon-xia {
          position: absolute;
          top: 7px;
          left: 48%;
          color: #fff;
          font-size: 1.5em;
        }
      }
    }
    .text:hover {
      cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/pointer.cur), auto !important;
      background-color: rgba(black, 0.4);
    }
    .icon-top {
      color: #fff;
      font-size: 1em;
      bottom: 5px;
      right: 18.5%;
      position: absolute;
      width: 300px;
    }
    .button {
      .icon-right2 {
        color: #fff;
        position: absolute;
        right: -50px;
        top: 40%;
        font-size: 2.6em;
      }
      :hover {
        color: #999;
        cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/pointer.cur), auto !important;
      }
      .icon-left_3 {
        color: #fff;
        position: absolute;
        left: -50px;
        top: 40%;
        font-size: 3em;
      }
      :hover {
        color: #999;
        cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/pointer.cur), auto !important;
      }
    }
    /* 右侧未开发按钮 */
    .tips {
      @marginTopDefault: 10%;
      @marginRightDefault: 100px;
      .redColor {
        color: rgba(red, 0.7) !important;
      }
      .authorImg {
        width: 40px;
        height: 40px;
        display: inline-block;
        border-radius: 50%;
        position: absolute;
        top: 2.75 * @marginTopDefault;
        right: 0.96 * @marginRightDefault;
      }
      .icon-xihuan {
        position: absolute;
        top: 3.7 * @marginTopDefault;
        right: @marginRightDefault + 1px;
        color: rgba(white, 0.8);
        font-size: 1.8em;
        /* 存在bug */
        .isXiHuan {
          position: absolute;
          top: 0px;
          left: 0px;
          width: 10px;
          border: 1px solid red;
          opacity: 0;
        }
      }
      .icon-xihuan:hover {
        cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/pointer.cur), auto !important;
        color: rgba(white, 0.8);
      }
      .icon-pinglun2 {
        position: absolute;
        top: 4.8 * @marginTopDefault;
        right: @marginRightDefault + 2px;
        color: rgba(white, 0.8);
        font-size: 1.7em;
      }
      .icon-pinglun2:hover {
        cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/pointer.cur), auto !important;
      }
      .likeNums,
      .commentNums {
        color: rgba(white, 0.8);
        font-size: 14px;
        font-family: "Microsoft Yahei", serif;
      }
      .likeNums {
        position: absolute;
        top: 4.26 * @marginTopDefault;
        right: 0.79 * @marginRightDefault;
        width: 70px;
        text-align: center;
      }
      .commentNums {
        position: absolute;
        top: 5.3 * @marginTopDefault;
        right: 0.9 * @marginRightDefault;
        width: 50px;
        // border:1px solid blue;
        text-align: center;
      }
      :hover {
        color: #fff;
      }
      .icon-fenxiang1 {
        position: absolute;
        top: 5.78 * @marginTopDefault;
        right: @marginRightDefault;
        color: rgba(white, 0.8);
        font-size: 1.7em;
      }
    }
  }
}
</style>
