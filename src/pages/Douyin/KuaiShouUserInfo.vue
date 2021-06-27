<template>
  <div id="kuaishouUserInfo">
    <!-- 用户信息 -->
    <div class="userinfo-header" :style="`{background:${authorImg}`">
      <img :src="authorImg" alt="网络错误" class="userinfo-author-img" />
      <p class="userinfo-author-name">{{ authorName }}</p>
      <p class="userinfo-author-text">{{ authorText }}</p>
    </div>
    <!-- 用户作品 -->
    <div class="userinfo-main" v-if="kuaiShouUserInfo.visionProfilePhotoList.feeds">
      <div class="userinfo-wrapper">
        <div
          class="singleVideo"
          v-for="(item, index) in kuaiShouUserInfo.visionProfilePhotoList.feeds"
          :key="index"
        >
          <!-- <img :src="item.photo.coverUrl" alt="网络断点" class="singleImg"/> -->
          <video
            :src="item.photo.photoUrls[0].url"
            loop
            :poster="
              item.photo.animatedCoverUrl !== null
                ? item.photo.animatedCoverUrl
                : item.photo.coverUrl
            "
            controls
            class="singleImg"
          ></video>
          <p class="singleInfo">{{ item.photo.caption }}</p>
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
      userId: "",
      userIndex: this.$route.query.num
    };
  },
  computed: {
    ...mapState({
      kuaiShouUserInfo: state => state.myKuaiShou.kuaiShouUserInfo,
      kuaiShouSearchUsers: state => state.myKuaiShou.kuaiShouSearchUsers
    }),
    authorName() {
      return this.kuaiShouSearchUsers.visionSearchUser.users[this.userIndex].user_name;
    },
    authorText() {
      return this.kuaiShouSearchUsers.visionSearchUser.users[this.userIndex].user_text;
    },
    authorImg() {
      return this.kuaiShouSearchUsers.visionSearchUser.users[this.userIndex].headurl;
    }
  },
  methods: {
    ...mapActions(["getKuaiShouSearchUserInfo"])
  },
  async mounted() {
    this.userId = this.$route.params.id;
    await this.getKuaiShouSearchUserInfo({ userId: this.userId });
  }
};
</script>
<style scoped lang="less">
#kuaishouUserInfo {
  font-family: "Microsoft Yahei";
  font-weight: 300;
  color: #333;
  overflow: auto;
  .userinfo-header {
    position: relative;
    font-family: "Microsoft Yahei";
    font-weight: 300;
    border-bottom: 1px solid #eaeaea;
    .userinfo-author-img {
      display: block;
      border-radius: 50%;
      padding: 2px;
      background-color: #fff;
      width: 50px;
      height: 50px;
      margin-left: 33px;
    }
    .userinfo-author-name {
      font-weight: 700;
      font-size: 16px;
      color: orangered;
      position: absolute;
      left: 97px;
      top: 17px;
    }
    .userinfo-author-text {
      font-size: 13px;
      text-align: left;
      padding: 5px 20px 10px 37px;
      font-weight: 400;
      color: #555;
    }
  }
  .userinfo-main {
    height: 400px;
    .userinfo-wrapper {
      overflow: scroll;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      width: 100%;
      .singleVideo {
        padding-top: 5px;
        width: 190px;
        .singleImg {
          width: 190px;
          height: 322px;
          border: 1px solid #eaeaea;
          object-fit: fill;
        }
        .singleInfo {
          font-size: 13px;
          text-align: left;
          overflow: hidden;
          padding-left: 1px;
          font-weight: 300;
          color: #333;
        }
      }
    }
  }
}
</style>
