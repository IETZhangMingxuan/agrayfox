<template>
  <div id="wynews" class="animate__animated animate__fadeIn">
    <div class="main">
      <h3 v-show="!WYNewsList.length" class="loading">努力加载中...</h3>
      <ul class="wyNewslist">
        <li v-for="(item, index) in WYNewsList" :key="index" v-show="item.image">
          <img :src="item.image" alt="" />
          <h4>
            <a :href="item.path" target="_blank">{{ item.title }}</a>
          </h4>
          <p>{{ item.passtime }}</p>
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
      WYNewsList: state => state.news.WYNewsList
    })
  },
  methods: {
    ...mapActions(["getWYNewsList"])
  },
  async created() {
    await this.getWYNewsList();
  }
};
</script>
<style scoped lang="less">
@basicVerticalMargin: 14px;
@basicHorizonMargin: 160px;
#wynews {
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
    // position: absolute;
    // top:40%;
    // left:35%;
  }
  .wyNewslist {
    list-style: none;
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
        // border-radius: 4px;
      }
      h4 {
        position: absolute;
        top: @basicVerticalMargin;
        left: @basicHorizonMargin;
        font-family: "Microsoft Yahei";
        font-size: 15px;
        font-weight: 300;
        letter-spacing: 1px;
        overflow: hidden;
        text-align: left;
        a {
          color: #344;
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
  .wyNewslist:hover {
    box-shadow: 0 0 10px hsla(0, 0%, 40%, 0.4);
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
