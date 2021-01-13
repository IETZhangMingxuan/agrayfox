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
@basicVerticalMargin: 8px;
#wynews {
  .wyNewslist {
    list-style: none;
    li {
      position: relative;
      padding: 5px 10px;
      height: 100px;
      margin-top: 0px;
      img {
        position: absolute;
        top: 20px;
        left: 20px;
        width: 120px;
        height: 80px;
      }
      h4 {
        position: absolute;
        top: 18px;
        left: 150px;
        font-family: "Microsoft Yahei";
        font-size: 15px;
        font-weight: 300;
      }
      p {
        position: absolute;
        bottom:  @basicVerticalMargin;
        left: 150px;
        font-family: consolas;
        color: #999;
        font-size: 14px;
      }
    }
  }
}
</style>
