<template>
  <div id="kuaishou-search">
    <div class="kuaishou-search-input">
      <!-- <i class="iconfont icon-back" @click="$router.push('/douyin/hotVideo')"></i> -->
      <i class="iconfont icon-back" @click="$router.back(-1)"></i>
      <input type="text" v-model="keyword" class="searchInput" maxlength="15" @keydown.13="searchFn"/>
      <button class="searchBtn" @click="searchFn">搜索</button>
    </div>
    <div class="kuaishou-search-router">
      <router-link to="/douyin/kuaiShouSearch/kuaiShouSearchUsers">用户</router-link>
      <router-link to="/douyin/kuaiShouSearch/kuaiShouSearchVideos">视频</router-link>
    </div>
    <div class="kuaishou-search-main">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      keyword: ""
    };
  },
  computed: {
    ...mapState({
      kuaiShouSearchUsers: state => state.myKuaiShou.kuaiShouSearchUsers,
      kuaiShouSearchVideos: state => state.myKuaiShou.kuaiShouSearchVideos
    })
  },
  methods: {
    ...mapActions(["getKuaiShouSearchUsers", "getKuaiShouSearchVideos"]),
    async searchFn() {
      const { keyword } = this;
      await this.getKuaiShouSearchUsers({ keyword });
      await this.getKuaiShouSearchVideos({ keyword });
      this.$router.push(`/douyin/kuaiShouSearch/kuaiShouSearchUsers?keyword=${keyword}`);
    }
  },
  async created() {
    this.keyword = this.$route.query.keyword;
  }
};
</script>
<style scoped lang="less">
#kuaishou-search {
  //   border: 1px solid red;
  width: 400px;
  height: 648px;
  margin: 0 auto;
  color: #fff;
  font-family: "Microsoft Yahei" !important;
  background-color: #fff;
  border-radius: 15px;
  .kuaishou-search-input {
    position: relative;
    padding: 20px 10px;
    background-color: #fff;
    border-radius: 15px;
    .searchInput {
      padding: 5px 10px 5px 20px;
      outline: none;
      border: none;
      border-radius: 20px;
      color: #555666;
      font-size: 14px;
      font-weight: 400;
      font-family: "microsoft yahei";
      width: 70%;
      height: 20px;
      background-color: #eaeaea;
      line-height: 20px;
      margin-left: 20px;
    }
    .searchBtn {
      position: absolute;
      top: 26px;
      right: 60px;
      outline: none;
      border: none;
      background-color: transparent;
      color: #333;
      font-size: 14px;
      font-weight: 400;
      font-family: "microsoft yahei";
      &:hover {
        color: orangered;
      }
    }
    .icon-back {
      font-size: 18px;
      color: #333;
      position: absolute;
      left: 21px;
      top: 25px;
    }
  }
  .kuaishou-search-router {
    display: flex;
    justify-content: space-evenly;
    margin: 0px auto;
    background-color: #fff;
    margin-top: -10px;
    a {
      text-decoration: none;
      color: #333;
      display: inline-block;
      font-weight: 700;
      padding: 8px 34px;
      font-size: 15px;
      font-family: "Microsoft Yahei";
    }
    .active {
      border-bottom: 2px solid #409eef;
      color: #409eef;
    }
  }
  .kuaishou-search-main {
    // border: 1px solid blue;
    width: 100%;
    margin: 0px auto;
  }
}
</style>
