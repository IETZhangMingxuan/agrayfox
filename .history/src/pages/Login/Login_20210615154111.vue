<template>
  <div id="login">
    <h2>我是测试页</h2>
    <br />
    <!-- 模拟动态背景 -->
    <div class="bgGif">
      <ul class="bg-bubbles">
        <li v-for="i in 10" :key="i">{{item}}</li>
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
      goodsList: ["茶叶", "烟酒", "饮料", "电器", "家具", "工具", "厨具", "方便食品", "调料"],
      bubbles:[]
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
  },
};
</script>
<style scoped lang="less">
#login {
  margin-top: 60px;
  .bgGif {
    width: 200px;
    height:300px;
    border:1px solid red;
    position: relative;
    // background: linear-gradient(to bottom right, #409eef, #fff);
    bc
    .bg-bubbles {
      position: absolute;
      // 使气泡背景充满整个屏幕
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      li {
        position: absolute;
        border-radius: 50%;
        // bottom 的设置是为了营造出气泡从页面底部冒出的效果；
        bottom: -160px;
        // 默认的气泡大小；
        width: 40px;
        height: 40px;
        background-color: rgba(255, 255, 255, 0.15);
        list-style: none;
        // 使用自定义动画使气泡渐现、上升和翻滚；
        animation: square 15s infinite;
        transition-timing-function: linear;
        // 分别设置每个气泡不同的位置、大小、透明度和速度，以显得有层次感；
        &:nth-child(1) {
          left: 10%;
        }
        &:nth-child(2) {
          left: 20%;
          width: 90px;
          height: 90px;
          animation-delay: 2s;
          animation-duration: 7s;
        }
        &:nth-child(3) {
          left: 25%;
          animation-delay: 4s;
        }
        &:nth-child(4) {
          left: 40%;
          width: 60px;
          height: 60px;
          animation-duration: 8s;
          background-color: rgba(255, 255, 255, 0.3);
        }
        &:nth-child(5) {
          left: 70%;
        }
        &:nth-child(6) {
          left: 80%;
          width: 120px;
          height: 120px;
          animation-delay: 3s;
          background-color: rgba(255, 255, 255, 0.2);
        }
        &:nth-child(7) {
          left: 32%;
          width: 160px;
          height: 160px;
          animation-delay: 2s;
        }
        &:nth-child(8) {
          left: 55%;
          width: 20px;
          height: 20px;
          animation-delay: 4s;
          animation-duration: 15s;
        }
        &:nth-child(9) {
          left: 25%;
          width: 10px;
          height: 10px;
          animation-delay: 2s;
          animation-duration: 12s;
          background-color: rgba(255, 255, 255, 0.3);
        }
        &:nth-child(10) {
          left: 85%;
          width: 160px;
          height: 160px;
          animation-delay: 5s;
        }
      }
      // 自定义 square 动画；
      @keyframes square {
        0% {
          opacity: 0.5;
          transform: translateY(0px) rotate(45deg);
        }
        25% {
          opacity: 0.75;
          transform: translateY(-400px) rotate(90deg);
        }
        50% {
          opacity: 1;
          transform: translateY(-600px) rotate(135deg);
        }
        100% {
          opacity: 0;
          transform: translateY(-1000px) rotate(180deg);
        }
      }
    }
  }
  .login-list ul {
    li {
      padding: 10px 0;
      a {
        text-decoration: none;
      }
    }
  }
}
</style>
