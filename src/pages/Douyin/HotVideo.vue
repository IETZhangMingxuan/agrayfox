/* 快手热搜榜数据渲染 */
<template>
  <div class="main">
    <!-- 关键字搜索模块 -->
    <div class="kuaishou-search">
      <i class="iconfont icon-search1"></i>
      <span class="pressR animate__animated animate__bounceIn">{{ pressButtonA }}</span>
      <span class="pressUp animate__animated animate__bounceIn">{{ pressButtonB }}</span>
      <span class="pressDown animate__animated animate__bounceIn">{{ pressButtonC }}</span>
      <span class="pressComment animate__animated animate__bounceIn">{{ pressButtonD }}</span>
      <span class="pressSearch animate__animated animate__bounceIn">{{ pressButtonE }}</span>
      <input
        type="text"
        v-model.trim="keyword"
        placeholder="输入关键字搜索视频或用户"
        @keydown.13="searchFn"
        maxlength="16"
      />
      <button @click="searchFn">搜索</button>
    </div>
    <!-- 发送ajax请求得到新一组精彩短视频 -->
    <div class="change">
      <i class="iconfont icon-shuaxin" @click="changeFn"></i>
    </div>
    <div
      class="video"
      v-for="(item, index) in kuaiShouHot.data.brilliantData.feeds.slice(
        currentIndex,
        currentIndex + 1
      )"
      :key="index"
    >
      <video
        :src="item.photo.photoUrl"
        class="videoMain animate__animated animate__zoomIn"
        autoplay
        loop
      ></video>
      <!-- 文字部分 -->
      <div
        class="text animate__animated animate__slideInUp animate__slideInDown"
        v-show="textVisible"
      >
        <div class="author">
          <!-- <img :src="item.avatar" alt="网络出错" class="authorImg" /> -->
          <div class="authorName">@{{ item.author.name }}</div>
          <div class="videoDes" v-show="item.photo">
            <p class="videoDesMain">{{ item.photo.caption }}</p>
          </div>
          <!-- 点击隐藏文字部分 -->
          <i class="iconfont icon-down" @click="changeTextVisible(textVisible, textUnvisible)"></i>
        </div>
      </div>
      <!-- 点击显示文字部分 -->
      <i
        class="iconfont icon-up"
        @click="changeTextUnvisible(textVisible, textUnvisible)"
        v-show="textUnvisible"
      ></i>
      <!-- 左右切换按钮 -->
      <div class="button">
        <i class="iconfont icon-down_5" @click="nextDouyin(currentIndex, totalSize)"></i>
        <i class="iconfont icon-up_5" @click="prevDouyin(currentIndex, totalSize)"></i>
      </div>
      <!-- 右侧列表按钮 -->
      <div class="tips">
        <img :src="item.author.headerUrl" alt="网络出错" class="authorImg" @click="searchFn" />
        <i class="iconfont icon-xihuan" :class="{ redColor }" @click="open(redColor)"></i>
        <i class="iconfont icon-pinglun5" @click="isTrue = !isTrue"></i>
        <i class="iconfont icon-fenxiang1"></i>
        <span class="likeNums">{{ item.photo.likeCount }}</span>
        <span class="commentNums">{{ commentNum }}</span>
      </div>
      <!-- 最牛批的评论区 -->
      <div
        class="comments animate__animated animate__slideInUp animate__slideInDown"
        :class="{ commentsclose: isTrue }"
      >
        <div class="comments-wrapper">
          <i class="iconfont icon-down" @click="isTrue = !isTrue"></i>
          <!-- 循环遍历爬来的评论数据 -->
          <div class="comments-main">
            <div v-if="kuaiShouVideoComments.visionCommentList" class="ulDiv">
              <div
                v-for="(item, index) in kuaiShouVideoComments.visionCommentList.rootComments"
                :key="index"
                class="liDiv"
              >
                <div class="imgDiv">
                  <img :src="item.headurl" alt="404" />
                </div>
                <div class="authorName">{{ item.authorName }}</div>
                <div class="content">{{ item.content }}</div>
                <div class="subTips">
                  <i class="iconfont icon-xihuan"></i>
                  <span class="likedCount">{{ item.likedCount }}</span>
                  <!-- ts1.toLocaleDateString().replace(/\//g, "-") + " " + ts1.toTimeString().substr(0, 8) -->
                  <span class="createTime">{{ item.timestamp | dateParse }}</span>
                </div>
                <!-- 评论回复 -->
                <div class="subcomments" v-if="item.subComments">
                  <div class="subUlDiv">
                    <div
                      v-for="(subItem, subIndex) in item.subComments"
                      :key="subIndex"
                      class="subLiDiv"
                    >
                      <div class="subImgDiv">
                        <img :src="subItem.headurl" alt="404" class="subImg" />
                      </div>
                      <div class="subAuthorName">{{ subItem.authorName }}</div>
                      <div class="subContent">{{ subItem.content }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      currentIndex: 0,
      /* 根据接口来修改,该接口不稳定,返回17~20条数据 */
      totalSize: 16,
      redColor: false,
      textVisible: true,
      textUnvisible: false,
      keyword: "",
      keyword2: "",
      photoId: "",
      authorId: "",
      commentNum: "",
      commentsList: [],
      isTrue: true,
      pressButtonA: "刷新视频列表",
      pressButtonB: "查看上一条视频",
      pressButtonC: "查看下一条视频",
      pressButtonD: "点击评论图标查看评论",
      pressButtonE: "点击头像可查询用户和视频"
    };
  },
  computed: {
    ...mapState({
      kuaiShouHot: state => state.myKuaiShou.kuaiShouHot,
      kuaiShouSearchVideos: state => state.myKuaiShou.kuaiShouSearchVideos,
      kuaiShouSearchUsers: state => state.myKuaiShou.KuaiShouSearchUsers,
      kuaiShouVideoComments: state => state.myKuaiShou.kuaiShouVideoComments
    }),
    authorName() {
      return this.kuaiShouHot.data.brilliantData.feeds[this.currentIndex].author.name;
    }
  },
  methods: {
    ...mapActions([
      "getKuaiShouHot",
      "getKuaiShouSearchVideos",
      "getKuaiShouSearchUsers",
      "getKuaiShouSearchComments"
    ]),
    async getCommentsFn() {
      this.photoId = this.kuaiShouHot.data.brilliantData.feeds[this.currentIndex].photo.id;
      this.authorId = this.kuaiShouHot.data.brilliantData.feeds[this.currentIndex].author.id;
      await this.getKuaiShouSearchComments({ photoId: this.photoId, authorId: this.authorId });
      this.commentsList = this.kuaiShouVideoComments.visionCommentList;
    },
    async changeFn() {
      await this.getKuaiShouHot();
    },
    async searchFn() {
      if (this.keyword !== "") {
        const { keyword } = this;
        await this.getKuaiShouSearchUsers({ keyword });
        await this.getKuaiShouSearchVideos({ keyword });
        this.$router.push({
          path: "/douyin/kuaiShouSearch/kuaiShouSearchUsers",
          query: {
            keyword: this.keyword
          }
        });
      } else {
        // 内容为空说明点击的是头像
        this.keyword = this.authorName;
        const { keyword } = this;
        await this.getKuaiShouSearchUsers({ keyword });
        await this.getKuaiShouSearchVideos({ keyword });
        this.$router.push({
          path: "/douyin/kuaiShouSearch/kuaiShouSearchUsers",
          query: {
            keyword: this.keyword
          }
        });
      }
    },
    async nextDouyin(currentIndex, totalSize) {
      if (this.currentIndex < totalSize) {
        this.currentIndex = currentIndex + 1;
      } else {
        this.currentIndex = 0;
      }
      this.redColor = false;
      this.isTrue = true;
    },
    async prevDouyin(currentIndex, totalSize) {
      if (this.currentIndex <= totalSize && this.currentIndex > 0) {
        this.currentIndex = currentIndex - 1;
      } else if (this.currentIndex <= 0) {
        this.currentIndex = totalSize;
      }
      this.redColor = false;
      this.isTrue = true;
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
  },
  // 此钩子用来获取视频评论
  // async beforeUpdate() {
  //   if (this.kuaiShouHot.data.brilliantData) {
  //     this.photoId = this.kuaiShouHot.data.brilliantData.feeds[this.currentIndex].photo.id;
  //     this.authorId = this.kuaiShouHot.data.brilliantData.feeds[this.currentIndex].author.id;
  //     await this.getKuaiShouSearchComments({ photoId: this.photoId, authorId: this.authorId });
  //     this.commentsList = this.kuaiShouVideoComments.visionCommentList;
  //     this.commentNum = this.kuaiShouVideoComments.visionCommentList.commentCount;
  //   }
  // },
  /* 双重监听保证评论是最新的 */
  watch: {
    kuaiShouHot: {
      async handler() {
        this.photoId = this.kuaiShouHot.data.brilliantData.feeds[this.currentIndex].photo.id;
        this.authorId = this.kuaiShouHot.data.brilliantData.feeds[this.currentIndex].author.id;
        await this.getKuaiShouSearchComments({ photoId: this.photoId, authorId: this.authorId });
        this.commentNum = this.kuaiShouVideoComments.visionCommentList.commentCount;
      },
      deep: true,
      immediate: true
    },
    currentIndex: {
      async handler() {
        this.photoId = this.kuaiShouHot.data.brilliantData.feeds[this.currentIndex].photo.id;
        this.authorId = this.kuaiShouHot.data.brilliantData.feeds[this.currentIndex].author.id;
        await this.getKuaiShouSearchComments({ photoId: this.photoId, authorId: this.authorId });
        this.commentNum = this.kuaiShouVideoComments.visionCommentList.commentCount;
      },
      deep: true,
      immediate: true
    }
  },
  // async mounted() {
  //   await setTimeout(() => {
  //     this.pressButtonA = "";
  //     this.pressButtonB = "";
  //     this.pressButtonC = "";
  //     this.pressButtonD = "";
  //     this.pressButtonE = "";
  //   }, 30000);
  // }
};
</script>
<style scoped lang="less">
.main {
  width: 100%;
  position: relative;
  // border:5px solid red;
  box-sizing: border-box;
  // 大导航模块
  .kuaishou-search {
    height: 35px;
    line-height: 35px;
    margin: 0 auto;
    width: 338px;
    position: relative;
    color: #fff;
    .icon-search1 {
      font-size: 22px;
      position: absolute;
      top: 0px;
      left: 8px;
      color: #333;
    }
    .pressR {
      color: #fff;
      position: absolute;
      right: -150px;
      bottom: -492px;
      z-index: 300;
      font-size: 14px;
      font-family: "Microsoft Yahei";
      color: #f4f4f4;
      font-weight: 300;
    }
    .pressUp {
      color: #fff;
      position: absolute;
      right: -164px;
      bottom: -544px;
      z-index: 300;
      font-size: 14px;
      font-family: "Microsoft Yahei";
      color: #f4f4f4;
      font-weight: 300;
    }
    .pressDown {
      color: #fff;
      position: absolute;
      right: -163px;
      bottom: -598px;
      z-index: 300;
      font-size: 14px;
      font-family: "Microsoft Yahei";
      color: #f4f4f4;
      font-weight: 300;
    }
    .pressComment {
      color: #fff;
      position: absolute;
      right: -163px;
      bottom: -328px;
      z-index: 300;
      font-size: 14px;
      font-family: "Microsoft Yahei";
      color: #f4f4f4;
      font-weight: 300;
    }
    .pressSearch {
      color: #fff;
      position: absolute;
      right: -189px;
      bottom: -211px;
      z-index: 300;
      font-size: 14px;
      font-family: "Microsoft Yahei";
      color: #f4f4f4;
      font-weight: 300;
    }
    input {
      background-color: #fff;
      padding: 8px 10px 8px 30px;
      width: 300px;
      font-size: 14px;
      font-weight: 400;
      font-family: "Microsoft Yahei";
      border: none;
      border-radius: 20px;
      outline: none;
      color: #555666;
    }
    button {
      outline: none;
      border: none;
      position: absolute;
      background-color: transparent;
      right: 14px;
      top: 7.5px;
      font-size: 14px;
      font-family: "Microsoft Yahei";
      font-weight: 400;
      color: #555666;
      &:hover {
        color: orangered;
      }
    }
  }
  .change {
    .icon-shuaxin {
      position: absolute;
      bottom: 115px;
      right: 370px;
      color: #eaeaea;
      font-size: 37px;
      width: 40px;
      height: 40px;
      z-index: 400;
    }
    .icon-shuaxin:hover {
      color: #999;
      cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/pointer.cur), auto !important;
    }
  }
  .video {
    // border: 5px solid #fff;
    margin: 0 auto;
    width: 500px;
    height: 600px;
    position: relative;
    margin-top: 10px;
    /* 渲染出来的视频主体 */
    .videoMain {
      width: 338px !important;
      position: relative;
      height: 600px !important;
      display: block;
      margin: 0 auto;
      border-radius: 10px;
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
      z-index: 99999;
      position: absolute;
      bottom: -1px;
      left: 80px;
      // background-color: rgba(black, 0.5);
      // background: linear-gradient(180deg, black, #111, 0.8);
      width: 68%;
      // border: 1px solid blue;
      box-sizing: border-box;
      height: 80px !important;
      .author {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: left;
        flex-wrap: wrap;
        align-content: space-between;
        .authorName {
          color: #fff;
          font-family: "Microsoft Yahei";
          font-weight: 700;
          // border: 1px solid blue;
          height: 30px;
          line-height: 30px;
          display: inline-block;
          padding-left: 10px;
          width: 660px;
          overflow: hidden;
          text-align: left;
          margin-top: 5px;
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
          padding: 0px 10px;
          line-height: 20px;
          display: block;
          width: 100%;
          max-height: 38px;
          overflow: hidden;
          margin-bottom: 20px !important;
          .videoDesMain {
            letter-spacing: 0px;
            overflow: hidden;
            max-height: 60px;
          }
        }
        .icon-down {
          position: absolute;
          top: 3px;
          left: 48%;
          color: #fff;
          font-size: 16px;
        }
      }
    }
    .text:hover {
      cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/pointer.cur), auto !important;
      background-color: rgba(black, 0.4);
    }
    .icon-up {
      color: #fff;
      font-size: 1em;
      bottom: 5px;
      right: 18.5%;
      position: absolute;
      width: 300px;
    }
    .button {
      .icon-down_5 {
        color: #fff;
        position: absolute;
        right: 20px;
        bottom: 5px;
        font-size: 40px;
      }
      :hover {
        color: #999;
        cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/pointer.cur), auto !important;
      }
      .icon-up_5 {
        color: #fff;
        position: absolute;
        right: 20px;
        bottom: 60px;
        font-size: 40px;
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
        right: 0.95 * @marginRightDefault;
      }
      .icon-xihuan {
        position: absolute;
        top: 3.7 * @marginTopDefault;
        right: 101px;
        color: rgba(white, 0.8);
        font-size: 1.7em;
        /* 存在bug */
        .isXiHuan {
          position: absolute;
          top: 0px;
          left: 0px;
          width: 10px;
          border: 1px solid red;
          opacity: 0;
          // z-index
        }
      }
      .icon-xihuan:hover {
        cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/pointer.cur), auto !important;
        color: rgba(255, 0, 0, 0.7) !important;
      }
      .icon-pinglun5 {
        position: absolute;
        top: 4.8 * @marginTopDefault;
        right: 102px;
        color: rgba(white, 1);
        font-size: 25px;
      }
      .icon-pinglun5:hover {
        cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/pointer.cur), auto !important;
        color: #409eef;
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
      .icon-fenxiang1 {
        position: absolute;
        top: 5.78 * @marginTopDefault;
        right: 101px;
        color: rgba(white, 0.8);
        font-size: 1.6em;
      }
    }
    /* 最牛批的评论区 */
    .comments {
      position: absolute;
      bottom: -1px;
      left: 81px;
      color: #fff;
      z-index: 99999;
      background-color: #222222;
      width: 338px !important;
      height: 500px;
      border-radius: 10px;
      .comments-wrapper {
        position: relative;
        width: 100%;
        // border: 1px solid blue;
        .icon-down {
          position: absolute;
          top: 2px;
          left: 160px;
          z-index: 999;
          &:hover {
            color: #409eef;
          }
        }
        .comments-main {
          overflow: auto;
          height: 500px;
          .ulDiv {
            overflow: scroll;
            margin-top: 20px;
            .liDiv {
              padding: 15px 10px 10px 60px;
              .imgDiv {
                position: relative;
                left: -68px;
                img {
                  width: 40px;
                  height: 40px;
                  border-radius: 50%;
                  position: absolute;
                  left: 20px;
                }
              }
              .authorName {
                text-align: left;
                font-family: "microsoft yahei";
                font-size: 14px;
                font-weight: 400;
                color: orange;
                letter-spacing: 0.5px;
              }
              .content {
                text-align: left;
                font-family: "microsoft yahei";
                font-size: 13px;
                font-weight: 300;
                margin-top: 5px;
              }
              .subTips {
                position: relative;
                font-family: "microsoft yahei";
                font-size: 12px;
                font-weight: 400;
                /* position: absolute; */
                /* padding: 5px 0; */
                /* height: 40px; */
                text-align: left;
                color: #999;
                padding: 6px 10px 0 19px;
                .icon-xihuan {
                  position: absolute;
                  top: 6px;
                  left: 0px;
                }
                .createTime {
                  font-size: 12px;
                  font-family: "Microsoft Yahei";
                  font-weight: 300;
                  letter-spacing: 1px;
                  padding-left: 10px;
                }
              }
              .subcomments {
                margin-top: 10px;
                background-color: #292929;
                overflow: hidden;
                border-radius: 10px;
                .subUlDiv {
                  font-family: "microsoft yahei";
                  font-weight: 300;
                  .subLiDiv {
                    padding: 10px 6px 10px 5px;
                    .subImgDiv {
                      position: relative;
                      .subImg {
                        width: 35px;
                        height: 35px;
                        position: absolute;
                        border-radius: 50%;
                        left: 8px;
                      }
                    }
                    .subAuthorName {
                      text-align: left;
                      padding-left: 50px;
                      font-size: 14px;
                      color: orange;
                      font-weight: 400;
                    }
                    .subContent {
                      font-size: 13px;
                      text-align: left;
                      padding-left: 50px;
                      margin-top: 3px;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    .commentsclose {
      display: none;
    }
  }
}
</style>
