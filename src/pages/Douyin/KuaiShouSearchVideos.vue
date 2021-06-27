<template>
  <div id="search-videos">
    <div class="search-videos-wrapper">
      <ul class="search-videos-list">
        <li v-for="(item, index) in kuaiShouSearchVideos.visionSearchPhoto.feeds" :key="index">
          <video
            :src="item.photo.photoUrls[0].url"
            loop
            :poster="
              item.photo.animatedCoverUrl !== null
                ? item.photo.animatedCoverUrl
                : item.photo.coverUrl
            "
            controls
            class="singleVideo"
          ></video>
          <p class="singleVideoAuthor">
            <img :src="item.author.headerUrl" alt="网络慢" />
            <span class="singleVideoAuthorName">{{ item.author.name }}</span>
          </p>
          <p class="singleVideoInfo">{{ item.photo.caption }}</p>
          <p class="singleVideoTags">
            <span class="singleVideoTag" v-for="(item, index) in item.tags" :key="index">{{
              item.name
            }}</span>
          </p>
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
      // kuaiShouSearchUsers:state => state.myKuaiShou.kuaiShouSearchUsers,
      kuaiShouSearchVideos: state => state.myKuaiShou.kuaiShouSearchVideos
    })
  }
};
</script>
<style scoped lang="less">
#search-videos {
  color: #333;
  overflow: auto;
  height: 527px;
  .search-videos-wrapper {
    overflow: scroll;
    .search-videos-list {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      li {
        padding: 5px 0;
        position: relative;
        width: 190px;
        font-family: "Microsoft Yahei";
        font-weight: 300;
        .singleVideo {
          width: 190px;
          height: 322px;
          border: 1px solid #eaeaea;
          object-fit: fill;
        }
        .singleVideoAuthor {
          height: 25px;
          position: relative;
          img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            position: absolute;
            left: -1px;
            top: -24px;
            padding: 5px;
            background-color: #fff;
          }
          .singleVideoAuthorName {
            font-size: 13px;
            position: absolute;
            top: 0px;
            left: 52px;
            font-weight: 700;
            color: orangered;
            font-family: "Microsoft Yahei";
            height: 15px;
            line-height: 15px;
            overflow: hidden;
          }
        }
        .singleVideoInfo {
          font-size: 13px;
          text-align: left;
          padding-left: 10px;
          max-height: 57px;
          overflow: hidden;
        }
        .singleVideoTags {
          display: flex;
          flex-wrap: wrap;
          margin-left: 8px;
          .singleVideoTag {
            font-size: 12px;
            padding: 2px 5px;
            margin-right: 5px;
            margin-top: 5px;
            margin-left: 0px;
            background-color: orange;
            color: #fff;
          }
        }
      }
    }
  }

  h1 {
    color: blue;
    font-family: "Microsoft Yahei";
    font-weight: 400;
    text-align: center;
    height: 80px;
    line-height: 80px;
    font-size: 14px;
  }
}
</style>
