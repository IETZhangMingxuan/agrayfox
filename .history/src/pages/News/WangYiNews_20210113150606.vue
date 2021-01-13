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
    border: 1px solid blue;
    li {
      position: relative;
      padding: 100px 100px;
      border: 1px solid red;
      height: 300px;
      img {
        position: absolute;
        top: 20px;
        left: 20px;
        width: 150px;
        height: 150px;
      }
      h4 {
        position: absolute;
        top: 20px;
        right: 20px;
      }
      p {
      }
    }
  }
}
</style>
