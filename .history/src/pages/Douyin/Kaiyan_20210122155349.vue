<template>
  <div id="kaiyan">
    <!-- <video src="http://baobab.kaiyanapp.com/api/v1/playUrl?vid=186988&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&udid=e686f5856bdf4d48b77b1220abedbb48b5cf1035" autoplay controls>123</video> -->
    <div class="videoListWrapper">
      <ul class="videoList">
        <li v-for="(p, index) in TYVideoList.slice(0, 6)" :key="index">
          <a href="javascript:;" class="router_link"><img :src="p.data.cover.detail" alt=""/></a>
          <!-- <video :src="p.data.playUrl" controls :poster="p.data.cover.detail"></video> -->
          <div class="title">
            <img :src="p.data.tags[0].bgPicture" alt="" class="authorImg" />
            <p class="videoTitle">{{ p.data.author.name }}</p>
          </div>
          <p class="videoDesc">{{ p.data.author.description }}</p>
        </li>
      </ul>
      <button class="prevBtn">上一页</button>
      <button class="nextBtn">下一页</button>
    </div>
    <div class="videoMain">
      <h4>视频详情</h4>
      <router-view></router-view>
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
    .videoList {
      width: 100%;
      list-style-type: none;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      min-height:646px;
      li {
        padding-top: 25px;
        padding-bottom: 5px;
        width: 200px;
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
      outline: none;
    //   background-color: #f9f9f9;
      color: #333;
      border: none;
      padding: 2px 5px;
      margin-right: 50px;
      margin-top: 15px;
      background-color: black;
      color: #fff;

    }
    .nextBtn {
      outline: none;
    //   background-color: #f9f9f9;
      background-color: black;
      color: #fff;
      border: none;
      padding: 2px 5px;
      margin-top: 15px;
    }
  }
  .videoMain {
    width: 650px;
    height: 400px;
    border: 1px solid red;
  }
}
</style>
