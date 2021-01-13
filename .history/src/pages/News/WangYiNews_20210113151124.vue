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
#wynews {
  .wyNewslist {
    list-style: none;
    // border: 1px solid blue;
    li {
      position: relative;
      padding: 5px 10px;
      height: 100px;
      margin-top:0px;
      img {
        position: absolute;
        top: 20px;
        left: 20px;
        width: 120px;
        height: 100px;
      }
      h4 {
        position: absolute;
        top: 20px;
        left: 150px;
        font-family: "Microsoft Yahei";
        font-size: 15px;
        font-weight: 300;
      }
      p {
        position: absolute;
        bottom: 0px;
        left: 370px;
      }
    }
  }
}
</style>
