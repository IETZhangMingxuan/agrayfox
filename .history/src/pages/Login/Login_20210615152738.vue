<template>
  <div id="login">
    <h2>我是测试页</h2>
    <br />
    <!-- 模拟动态背景 -->
    <div class="bgGif">
      <ul class="bg-bubbles">
        <li v-for="(item, index) in bubbles" :key="index"></li>
      </ul>
    </div>
    <div class="login-search">
      <h4>需求1：商品搜索</h4>
      <input type="text" v-model.trim="keyword" />
      <button @click="toSearch(1, {})">模拟搜索</button>
    </div>
    <div class="login-list" style="margin-top:80px;">
      <h4>需求2：商品分类列表</h4>
      <ul style="list-style-type:none">
        <li v-for="(item, index) in goodsList" :key="index">
          <a href="javascript:;" @click="toSearch(2, { goodName: item, goodId: index })">{{
            item
          }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      keyword: "",
      goodsList: ["茶叶", "烟酒", "饮料", "电器", "家具", "工具", "厨具", "方便食品", "调料"]
    };
  },
  methods: {
    toSearch(type, { goodName, goodId }) {
      if (type === 1) {
        this.$router.push({
          name: "test",
          params: {
            keyword: this.keyword
          }
        });
      } else {
        this.$router.push({
          name: "test",
          query: {
            goodName: goodName,
            goodId: goodId
          }
        });
      }
    }
  }
};
</script>
<style scoped lang="less">
#login {
  margin-top: 60px;
  ul {
    li {
      padding: 10px 0;
      a {
        text-decoration: none;
      }
    }
  }
}
</style>
