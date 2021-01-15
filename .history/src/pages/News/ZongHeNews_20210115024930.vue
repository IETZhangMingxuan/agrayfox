<template>
  <div id="zonghenews" class="animate__animated animate__slideInUp">
    <div class="main">
      <h3 v-show="!ZongHeNewsList.length" class="loading">努力加载中...</h3>
      <ul class="zonghenewslist">
        <li v-for="(item, index) in ZongHeNewsList" :key="index" v-show="item.picUrl">
          <img :src="item.picUrl" alt="图片加载失败" />
          <h4>
            <a :href="item.url" target="_blank">{{ item.title }}</a>
          </h4>
          <p>{{ item.ctime }}</p>
        </li>
      </ul>
      <div class="bottomTips" v-show="ZongHeNewsList.length">
        ———————————————已经到底啦————————————————
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      ZongHeNewsList: state => state.tianxingApi.ZongHeNewsList
    })
  }
};
</script>
<style scoped lang="less">
@basicVerticalMargin: 14px;
@basicHorizonMargin: 160px;
#zonghenews {
  .loading {
    font-family: "微软雅黑";
    font-size: 15px;
    font-weight: 400;
    color: #555;
    text-align: center;
    margin-top: 20px;
    // position: absolute;
    // top:40%;
    // left:35%;
  }
  .zonghenewslist {
    list-style: none;
    li {
      position: relative;
      //   border-left: 2px solid #409eef;
      padding: 5px 10px;
      height: 110px;
      width: 90%;
      margin-top: 0px;
      border-bottom: 1px solid #eaeaea;
      img {
        position: absolute;
        top: 15px;
        left: 15px;
        width: 130px;
        height: 90px;
        border-radius: 5px;
      }
      h4 {
        position: absolute;
        top: @basicVerticalMargin;
        left: @basicHorizonMargin;
        font-family: "Microsoft Yahei";
        font-size: 15px;
        font-weight: 300;
        overflow: hidden;
        width: 500px;
        text-align: left;
        letter-spacing: 1px;

        a {
          color: #000;
          text-decoration: none;
        }
        :hover {
          color: #007fff;
        }
      }
      p {
        position: absolute;
        bottom: @basicVerticalMargin;
        left: @basicHorizonMargin;
        font-family: "Times New Roman", Times, serif;
        color: #555;
        font-size: 14px;
        user-select: none;
      }
    }
  }
  .bottomTips {
    margin-left: 10px;
    font-size: 15px;
    color: #555;
    margin-top: 20px;
    margin-bottom: 30px;
  }
}
</style>
