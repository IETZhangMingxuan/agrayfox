/* navbar first pro */
<template>
  <div class="main">
    <div
      class="video animate__animated animate__lightSpeedInLeft"
      v-for="(item, index) in RightNowList.slice(currentIndex, currentIndex + 1)"
      :key="index"
    >
      <a :href="item.link" target="_blank"
        ><img :src="item.img_url" alt="" />
        <i class="iconfont icon-bofang7"></i>
      </a>
      <!-- 文字部分 -->
      <div class="text">
        <div class="author">
          <div class="authorName">@{{ item.author }}</div>
          <div class="videoDes">
            {{ item.title }}
          </div>
        </div>
      </div>
      <!-- 左右切换按钮 -->
      <div class="button">
        <i class="iconfont icon-right2" @click="nextDouyin(currentIndex, totalSize)"></i>
        <i class="iconfont icon-left_3" @click="prevDouyin(currentIndex, totalSize)"></i>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      currentIndex: 0,
      /* 根据接口来修改,该接口返回20条数据 */
      totalSize: 47
    };
  },
  computed: {
    ...mapState({
      RightNowList: state => state.rightNow.RightNowList
    })
  },

  methods: {
    nextDouyin(currentIndex, totalSize) {
      if (currentIndex < totalSize) {
        this.currentIndex = currentIndex + 1;
      } else {
        this.currentIndex = 0;
      }
    },
    prevDouyin(currentIndex, totalSize) {
      if (this.currentIndex <= totalSize && this.currentIndex > 0) {
        this.currentIndex = currentIndex - 1;
      } else if (this.currentIndex <= 0) {
        this.currentIndex = totalSize;
      }
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
    width: 400px;
    height: 600px;
    position: relative;
    a {
      width: 100%;
      position: relative;
      height: 100%;
      display: block;
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
      position: absolute;
      bottom: 0px;
      background-color: rgba(black, 0.5);
      width: 100%;
      .author {
        width: 100%;
        display: flex;
        justify-content: left;
        flex-wrap: wrap;
        .authorName {
          color: #fff;
          font-family: "Microsoft Yahei";
          font-weight: bold;
          height: 30px;
          line-height: 50px;
          display: inline-block;
          padding-left: 20px;
          width: 300px;
          text-align: left;
        }
        .videoDes {
          // border: 1px solid orange;
          color: #fff;
          text-decoration: none;
          user-select: none;
          font-size: 14.5px;
          font-family: "Microsoft Yahei";
          letter-spacing: 1px;
          text-align: left;
          padding: 15px 25px 10px 20px;
          line-height: 25px;
          display: block;
        }
      }
    }
    .text:hover {
      cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/pointer.cur), auto !important;
      background-color: rgba(black, 1);
    }
    .button {
      .icon-right2 {
        color: #fff;
        position: absolute;
        right: -100px;
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
        left: -100px;
        top: 40%;
        font-size: 3em;
      }
      :hover {
        color: #999;
        cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/pointer.cur), auto !important;
      }
    }
  }
}
</style>
