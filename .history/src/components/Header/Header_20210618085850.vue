<template>
  <!-- 这是静态组件:页面头部 agf_header 包含 页面Logo块 agf_header_logo 包含 头部导航栏块 agf_header_navbar -->
  <!-- 头部静态组件 -->
  <div class="agf_header animate__animated animate__bounce">
    <!-- 头部版心包裹块 -->
    <div class="agf_header_container">
      <!-- 头部 1 页面Logo块 -->
      <div class="agf_header_logo">
        <img
          src="./images/agrayfox.jpg"
          alt="404 Not Found"
          class="agf_logo1"
          title="一只灰狐_logo"
          @click="toHome"
        />
        <img
          src="./images/grayfoxfont.png"
          alt="404 Not Found"
          class="agf_logo2"
          title="一只灰狐_logo"
          @click="toHome"
        />
        <div class="chicagoTyper">
          <p class="line animation">www.agrayfox.com</p>
        </div>
      </div>
      <!-- 头部 2 头部导航栏块 -->
      <div class="agf_header_navbar">
        <el-row>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-menu
              :default-active="activeIndex"
              class="el-menu-demo"
              mode="horizontal"
              active-text-color="#409eff"
              router
            >
              <el-menu-item index="/home">首页</el-menu-item>
              <el-menu-item index="/news">新闻</el-menu-item>
              <el-menu-item index="/blog">博客</el-menu-item>
              <el-menu-item index="/resources">热点</el-menu-item>
              <el-menu-item index="/douyin">短视频</el-menu-item>
              <el-menu-item index="/content">商城</el-menu-item>
              <el-menu-item index="/contact">联系站长</el-menu-item>
              <el-menu-item index="/login">登录</el-menu-item>
              <!-- <button class="login">登录</button> -->

              <!-- <el-menu-item index="8">注册登录</el-menu-item> -->
            </el-menu>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "/home"
    };
  },
  methods: {
    toHome() {
      this.$router.push("/home");
    }
  },
  watch: {
    /* 深度监听 */
    $route: {
      handler() {
        // 修复导航栏下边框无法正确显示地问题
        // console.log("activeIndex:" + this.activeIndex);
        // console.log("$route.path:" + this.$route.path);
        let a = this.activeIndex.toString();
        let b = this.$route.path.toString();
        // console.log("a:" + a, typeof a);
        // console.log("b:" + b, typeof b);
        let c = "/news";
        let d = "/douyin";
        let e = "/blog";
        let f = "/register";
        let g = "/login";
        if (b.includes(c)) {
          this.activeIndex = c;
        } else if (b.includes(d)) {
          this.activeIndex = d;
        } else if (b.includes(e)) {
          this.activeIndex = e;
        } else if (b.includes(e)) {
          this.activeIndex = e;
        } else {
          this.activeIndex = this.$route.path;
        }
      },
      deep: true,
      immediate: true
    }
  }
};
</script>
<style scoped lang="less">
@defaultColor: #007fff;

.agf_header {
  // border: 1px solid blue;
  width: 100%;
  height: 60px;
  z-index: 9999 !important;
  position: fixed;
  // margin-bottom: 500px;
  box-shadow: 0 4px 8px 0 rgba(7, 17, 27, 0.2);
  background-color: #fff;
  z-index: 1111;
  /* 头部版心 */
  .agf_header_container {
    // border: 1px solid purple;
    width: 1200px;
    // width:70%;
    height: 60px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    /* 导航栏 左侧 Logo 块 */
    .agf_header_logo {
      // border: 1px solid orangered;
      position: relative;

      /* 1.图片 Logo */
      .agf_logo1 {
        width: 90px !important;
        height: 60px !important;
        position: absolute;
        left: -25px;
      }

      /* 2.字体 Logo */
      .agf_logo2 {
        height: 30px;
        position: absolute;
        top: 14px;
        left: 47px;
      }

      /* 3.CSS3完成动态打字机功能 */
      .chicagoTyper {
        overflow: hidden;
        align-items: center;
        margin-left: 200px;
        height: 52px;
        line-height: 30px;
        position: absolute;
        top: 12px;
        left: -20px;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);

        .line {
          width: 350px;
          padding: 0px !important;
          border-right: 2px solid #eee;
          font-size: 18px;
          font-weight: bold;
          font-family: Comic Sans MS, Helvetica Neue, Microsoft Yahei, -apple-system, sans-serif !important;
          text-align: center;
          white-space: nowrap;
          overflow: hidden;
          height: 30px;
          line-height: 30px;
          // color: #409eff;
          color: @defaultColor;
          letter-spacing: 1px;
        }

        .animation {
          animation: grow 3s steps(48) 1s normal both, blink 1s steps(48) infinite normal;
        }

        @keyframes grow {
          from {
            width: 0;
          }

          to {
            width: 178px;
          }
        }

        @keyframes blink {
          from {
            border-right-color: #eee;
          }

          to {
            border-right-color: #eee;
          }
        }
      }
    }

    /* 导航栏 右侧 导航 块 */
    .agf_header_navbar {
      // border: 1px solid red;
      font-family: "华文中宋";
      font-weight: bold;
      user-select: none;
      /* 导航块的每一个列表选项 */
      .el-menu-item {
        // color: #99cdfd;
        color: #409eff;
        height: 60px !important;
        // color:@defaultColor;
        font-size: 15px;
      }
      :hover {
        color: #007fff;
        // color: @defaultColor;
      }
      /* 登录按钮 */
      .login {
        width: 80px;
        font-size: 15px;
        margin-top: 13px;
        margin-left: 30px;
        height: 35px;
        line-height: 36px;
        background-color: @defaultColor;
        border-radius: 18px;
        outline: none;
        color: #fff;
        border: 0;
        font-family: "Microsoft Yahei";
      }
      .login:hover {
        background-color: #0876e4;
        color: #f9fafb;
      }
    }
  }
}
</style>
