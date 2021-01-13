<template>
  <div id="wynews">
    <ul class="wyNewslist">
      <li v-for="(item, index) in WYNewsList" :key="index">
        <img :src="item.image" alt="" />
        <h4>{{ item.title }}</h4>
        <p>{{ item.passtime }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      WYNewsList: state => state.news.WYNewsList
    })
  }
};
</script>
<style scoped lang="less">
@basicVerticalMargin: 14px;
@basicHorizonMargin: 160px;
#wynews {
  .wyNewslist {
    list-style: none;
    li {
      position: relative;
    //   border-left: 2px solid #409eef;
      padding: 5px 10px;
      height: 110px;
      margin-top: 0px;
      img {
        position: absolute;
        top: 15px;
        left: 15px;
        width: 130px;
        height: 90px;
      }
      h4 {
        position: absolute;
        top: @basicVerticalMargin;
        left: @basicHorizonMargin;
        font-family: "Microsoft Yahei";
        font-size: 15px;
        font-weight: 300;
      }
      p {
        position: absolute;
        bottom: @basicVerticalMargin;
        left: @basicHorizonMargin;
        font-family: consolas;
        color: #555;
        font-size: 14px;
      }
    }
  }
}
</style>
