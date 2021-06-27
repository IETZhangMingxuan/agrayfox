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
      <div class="agf_header_right">
        <!-- 头部 2 头部导航栏块 -->
        <div class="agf_header_navbar">
          <el-row>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                :active-text-color="activeColor"
                router
              >
                <el-menu-item index="/home">首页</el-menu-item>
                <el-menu-item index="/news">新闻</el-menu-item>
                <el-menu-item index="/blog">博客</el-menu-item>
                <el-menu-item index="/resources">热点</el-menu-item>
                <el-menu-item index="/douyin">短视频</el-menu-item>
                <el-menu-item index="/content">商城</el-menu-item>
                <el-menu-item index="/contact">联系站长</el-menu-item>
                <!-- <el-menu-item index="/login">
                <button class="navSubmit" v-if="!this.userinfo.token">登录</button>
                <span v-else @click="this.$router.push('/register')"
                  >欢迎,{{ userinfo.userInfo.username }}</span
                >
              </el-menu-item> -->

                <!-- <el-menu-item index="8">注册登录</el-menu-item> -->
              </el-menu>
            </el-col>
          </el-row>
        </div>
        <!-- 头部 3 用户信息模块 -->
        <div class="user">
          <div class="login-block" v-if="!userInfo.token">
            <router-link to="/login" class="login">登录</router-link>
          </div>
          <div class="user-block" v-else>
            <!-- {{ userinfo.userInfo.username }} -->
            <!-- <button @click="logoutFn">登出</button> -->
            <!-- <el-button type="primary" @click="logOutFn" circle icon="el-icon-s-release"></el-button> -->
            <el-dropdown @command="handleCommand">
              <span class="el-dropdown-link">
                <img :src="userInfo.userInfo.profile" alt="图片加载失败" class="profile" />
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a">修改密码</el-dropdown-item>
                <el-dropdown-item command="b">修改头像</el-dropdown-item>
                <el-dropdown-item command="c">还想干嘛</el-dropdown-item>
                <el-dropdown-item command="d">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      activeIndex: "/home",
      activeColor: "#409eff"
    };
  },
  computed: {
    ...mapState({
      userInfo: state => state.login.userInfo
    })
  },
  methods: {
    ...mapActions(["logOut"]),
    toHome() {
      this.$router.push("/home");
    },
    logOutFn() {
      this.$confirm("确定退出吗?", "", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "primary"
      })
        .then(() => {
          /* 点击退出 => 1.发送站内请求清空vuex仓库中的登录成功后的用户信息userInfo 2.清除会话仓库中存储的token */
          setTimeout(() => {
            this.logOut();
            window.sessionStorage.removeItem("grayfox_token");
            this.$message({
              type: "success",
              message: "退出成功",
              offset: 90
            });
          }, 1000);
        })
        .catch(() => {});
    },
    handleCommand(command) {
      if (command == "d") {
        this.logOutFn();
      } else {
        this.$message({
          type: "success",
          message: "功能正在开发中...",
          offset: 90
        });
      }
    }
  },
  watch: {
    /* 深度监听 */
    $route: {
      handler() {
        // 修复导航栏在选中时下边框无法正确显示地问题
        // let a = this.activeIndex.toString();
        let b = this.$route.path.toString();
        let c = "/news";
        let d = "/douyin";
        let e = "/blog";
        let f = "/register";
        let g = "/logi";
        let h = "/resources";
        if (b.includes(c)) {
          this.activeIndex = c;
          this.activeColor = "#409eff";
        } else if (b.includes(d)) {
          this.activeIndex = d;
          this.activeColor = "#409eff";
        } else if (b.includes(e)) {
          this.activeIndex = e;
          this.activeColor = "#409eff";
        } else if (b.includes(f)) {
          this.activeIndex = "";
          this.activeColor = "#fff";
        } else if (b.includes(g)) {
          this.activeIndex = "";
          this.activeColor = "#fff";
        } else if (b.includes(h)) {
          this.activeIndex = h;
          this.activeColor = "#409eff";
        } else {
          this.activeIndex = this.$route.path;
          this.activeColor = "#409eff";
        }
      },
      deep: true,
      immediate: true
    }
  }
  // async mounted() {
  //   this.$bus.$on("sendUserInfo", userinfo => {
  //     this.userinfo = userinfo;
  //   });
  // }
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
    width: 1190px;
    // width:70%;
    height: 60px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;

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
    /* 新头部 右侧总体块 */
    .agf_header_right {
      display: flex;
      flex-wrap: nowrap;
      /* 导航栏 右侧 导航 块 */
      .agf_header_navbar {
        // border: 1px solid red;
        font-family: "STZhongsong", "Microsoft Yahei";
        font-weight: bold;
        user-select: none;
        .navSubmit {
          font-family: "Microsoft Yahei";
          font-size: 15px;
          font-weight: 300;
          outline: none;
          letter-spacing: 2px;
          padding: 8px 20px;
          border: none;
          border-radius: 20px;
          background-color: #0880f8;
          color: #fff;
          &:hover {
            color: #fff;
            background-color: #4476bd;
          }
        }

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
      }
      .user {
        width: 100px;
        /* 登录按钮 */
        .login {
          display: block;
          text-align: center;
          text-decoration: none;
          letter-spacing: 1px;
          width: 80px;
          font-size: 15px;
          margin-top: 13px;
          margin-left: 5px;
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
        /* 用户信息 */
        .user-block {
          width: 70px;
          overflow: hidden;
          height: 60px;
          line-height: 57px;
          font-family: "Microsoft Yahei";
          color: #409eef;
          font-weight: 700;
          font-size: 15px;
          user-select: none;
          text-align: center;
          position: relative;
          .profile {
            display: inline-block;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            position: absolute;
            left: -20px;
            top: 7px;
          }
        }
      }
    }
  }
}
</style>
