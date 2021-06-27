<template>
  <div id="chinaNews" class="animate__animated animate__fadeIn">
    <div class="main">
      <h3 v-show="!ChinaNewsList.length" class="loading">努力加载中...</h3>
      <ul class="chinaNewslist">
        <li v-for="(item, index) in ChinaNewsList" :key="index" v-show="item.picUrl">
          <img :src="item.picUrl" alt="" />
          <h4>
            <a :href="item.url" target="_blank">{{ item.title }}</a>
          </h4>
          <p>{{ item.ctime }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState({
      ChinaNewsList: state => state.tianxingApi.ChinaNewsList
    })
  },
  methods: {
    ...mapActions(["getChinaNewsList"])
  },
  async created() {
    await this.getChinaNewsList();
  }
};
</script>
<style scoped lang="less">
@basicVerticalMargin: 14px;
@basicHorizonMargin: 160px;
#chinaNews {
  box-shadow: 0 0 20px hsla(0, 0%, 40%, 0.3);
  width: 680px;
  margin-top: 11px;

  .loading {
    font-family: "微软雅黑";
    font-size: 15px;
    font-weight: 400;
    color: #555;
    text-align: center;
    padding: 123px 100px;
    margin-top: 2px;
  }
  .chinaNewslist {
    list-style: none;
    background-color: #fff;
    li {
      position: relative;
      //   border-left: 2px solid #409eef;
      padding: 5px 10px;
      height: 110px;
      width: 97%;
      margin-top: 0px;
      border-bottom: 1px solid #eaeaea;
      img {
        position: absolute;
        top: 15px;
        left: 15px;
        width: 130px;
        height: 90px;
        // border-radius: 5px;
      }
      h4 {
        position: absolute;
        top: @basicVerticalMargin - 1px;
        left: @basicHorizonMargin;
        font-family: "Microsoft Yahei";
        font-size: 15px;
        font-weight: 300;
        overflow: hidden;
        width: 500px;
        text-align: left;
        letter-spacing: 1px;

        a {
          color: #666;
          text-decoration: none;
        }
        :hover {
          color: #007fff;
        }
      }
      p {
        position: absolute;
        bottom: @basicVerticalMargin * 0.95;
        left: @basicHorizonMargin;
        font-family: "Times New Roman", Times, serif;
        color: #555;
        font-size: 13px;
        user-select: none;
      }
    }
  }
  .chinaNewslist:hover {
    box-shadow: 0 0 10px hsla(0, 0%, 40%, 0.4);
  }
}
</style>
