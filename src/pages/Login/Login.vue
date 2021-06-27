<template>
  <div id="login" class="animate__animated animate__fadeIn">
    <div class="login-main">
      <div class="login-header">
        <h2 class="login-title">用户登录</h2>
        <div class="line"></div>
      </div>
      <div class="username">
        <el-input
          v-model="username"
          placeholder="请输入用户名"
          class="changeElementUI"
          clearable
          prefix-icon="el-icon-user-solid"
          name="username"
        ></el-input>
      </div>
      <div class="password">
        <el-input
          v-model="password"
          show-password
          placeholder="请输入密码"
          class="changeElementUI"
          clearable
          prefix-icon="el-icon-lock"
          name="password"
        ></el-input>
      </div>
      <div class="submit">
        <el-button type="primary" :loading="isLoading" size="medium" round @click="sendPost">{{
          submitContent
        }}</el-button>
      </div>
      <div class="mention">
        <router-link to="/register">免费注册</router-link>
        <a>忘记密码</a>
      </div>
    </div>
  </div>
</template>
<script>
// import axios from "axios";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      username: "",
      password: "",
      submitContent: "登录",
      isLoading: false,
      // 所有用户信息
      userData: ""
    };
  },
  computed: {
    // 从仓库获得的登录成功后的用户信息
    ...mapState({
      userInfo: state => state.login.userInfo
    })
  },
  methods: {
    ...mapActions(["sendLoginAxios"]),
    async sendPost() {
      if (this.username !== "" && this.password !== "") {
        const { username, password } = this;
        const result = await this.sendLoginAxios({ username, password });
        console.log(result);
        if (result === 200) {
          this.$message({
            message: "登录成功,即将跳转到主页...",
            type: "success",
            center: true,
            offset: 80
          });
          await setTimeout(() => {
            // 将后台传过来的token保存在sessionStorage
            window.sessionStorage.setItem("grayfox_token", this.userInfo.token);
            this.$router.push("/home");
          }, 2000);
        } else if (result === 207) {
          this.$message({
            message: "登录失败,请检查信息是否正确!",
            type: "error",
            center: true,
            offset: 80
          });
        }
      } else {
        // 用户名和密码不能为空
        this.$message({
          message: "用户名及密码不能为空",
          type: "warning",
          center: true,
          offset: 80
        });
      }
    }
    // async loginFn() {
    //   if (this.username !== "" && this.password !== "") {
    //     // 切换按钮加载状态
    //     this.isLoading = !this.isLoading;
    //     // 发送axios请求检验用户名及密码是否正确
    //     // const data = await this.sendLoginAxios({
    //     //   username: this.username,
    //     //   password: this.password
    //     // });
    //     // console.log(data);
    //     await axios({
    //       method: "POST",
    //       // url: "http://59.110.242.49:8080/login"
    //       url: `http://127.0.0.1:8082/login?username=${this.username}&password=${this.password}`
    //     }).then(
    //       res => {
    //         this.userData = res.data;
    //         // console.log(res.data);
    //       },
    //       error => {
    //         console.log(error);
    //       }
    //     );
    //     if (this.userData.code === 200) {
    //       this.$message({
    //         message: "登录成功,即将跳转到主页...",
    //         type: "success",
    //         center: true,
    //         offset: 80
    //       });
    //       this.userInfo = this.userData.data;
    //       await setTimeout(() => {
    //         console.log(this.userInfo);
    //         // 将后台传过来的token保存在sessionStorage
    //         window.sessionStorage.setItem("grayfox_token", this.userInfo.token);
    //         // 用总线传参
    //         this.$bus.$emit("sendUserInfo", this.userInfo);
    //         this.$router.push("/home");
    //       }, 2000);
    //     } else if (this.userData.code === 207) {
    //       this.isLoading = !this.isLoading;
    //       console.log("登录失败");
    //       this.$message({
    //         message: "登录失败,请检查信息是否正确!",
    //         type: "error",
    //         center: true,
    //         offset: 80
    //       });
    //       this.password = "";
    //     }
    //   } else {
    //     this.$message({
    //       message: "用户名及密码不能为空",
    //       type: "warning",
    //       center: true,
    //       offset: 80
    //     });
    //   }
    // }
  },
  /* 重点问题:$on事件没有在Home组件被触发,只是在Header组件被触发了 */
  /* 原因: 当我们还在登录页面的时候,home组件还没有生成,也就是home组件中的created监听的来自登录页面的事件还没有被触发,这个时候当在登录页面触发$emit事件的时候,home组件是无法监听到的
     解决办法:将登录页面组件中的$emit事件写在beforeDestroy中去(详见csdn收藏 高级知识点)
  */
  // beforeDestroy() {
  //   this.$bus.$emit("sendUserInfoToHome", this.userInfo);
  // }
};
</script>
<style scoped lang="less">
#login {
  width: 100%;
  min-height: 700px;
  height: 100vh;
  background: url("./images/0001.png") no-repeat;
  background-size: cover;
  border: 1px solid transparent;
  font-family: "Microsoft YaHei", Arial, sans-serif;
  // 去除margin塌陷
  overflow: hidden;
  opacity: 0.2;
  .login-main {
    opacity: 1 !important;
    width: 300px;
    height: 300px;
    padding: 10px 30px;
    margin: 100px auto;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 10px 10px 12px 2px rgba(0, 0, 0, 0.31);
    .login-header {
      position: relative;
      .login-title {
        font-size: 20px;
        font-weight: bold;
        color: #409eef;
        display: block;
        padding: 10px 0;
        text-align: center;
      }
      .line {
        position: absolute;
        left: 0px;
        width: 100%;
        height: 3px;
        background-color: #409eef;
      }
    }
    .username,
    .password,
    .submit {
      margin-top: 30px;
    }
    .submit {
      width: 100%;
      .el-button {
        display: inline-block;
        width: 100%;
        font-family: "Microsoft YaHei";
        letter-spacing: 1px;
        font-size: 16px;
        font-weight: 300;
      }
    }
    .mention {
      font-size: 12px;
      color: #555666;
      padding: 15px 0;
      a {
        display: inline-block;
        padding: 0 5px;
        color: #409eff;
        text-decoration: none !important;
        user-select: none;
      }
    }
  }
}
</style>
