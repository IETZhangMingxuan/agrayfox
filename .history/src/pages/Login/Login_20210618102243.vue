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
        ></el-input>
      </div>
      <div class="submit">
        <el-button type="primary" :loading="isLoading" size="medium" round @click="loginFn">{{
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

import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: "",
      submitContent: "登录",
      isLoading: false,
      // 所有用户信息
      userData: "",
      // 登录成功后录入的信息
      userInfo: {}
    };
  },
  methods: {
    async loginFn() {
      console.log("我即将登录了");
      // 切换按钮加载状态
      this.isLoading = !this.isLoading;
      // 发送axios请求检验用户名及密码是否正确
      await axios({
        method: "GET",
        url: "http://59.110.242.49:8080/getUsers"
      }).then(
        res => {
          this.userData = res.data;
        },
        error => {
          console.log(error);
        }
      );
      // 判断用户名及密码是否正确
      if (this.username !== "" && this.password !== "") {
        let flag = false;
        this.userData.forEach(item => {
          if (this.username === item.username && this.password === item.password) {
            flag = true;
            this.userInfo = item;
            return;
          }
        });
        if (flag) {
          this.isLoading = !this.isLoading;
          this.$message({
            message: "登录成功",
            type: "success"
          });
          // 需要存到仓库中
          console.log(this.userInfo);
          this.$router.push("/home");
        } else {
          this.isLoading = !this.isLoading;
          console.log("登录失败");
          this.$message({
            message: "登录失败,请检查用户名或密码是否正确",
            type: "error"
          });
          this.password = "";
        }
      } else {
        console.log("用户名及密码不能为空");
        this.isLoading = !this.isLoading;
      }
    }
  }
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
