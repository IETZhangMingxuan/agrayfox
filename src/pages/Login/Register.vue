<template>
  <div id="register" class="animate__animated animate__fadeIn">
    <div class="register-main">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="0px"
        class="demo-ruleForm"
      >
        <div class="register-header">
          <h2 class="register-title">用户注册</h2>
          <div class="line"></div>
        </div>
        <div class="username">
          <el-form-item label="" prop="username">
            <el-input
              v-model="ruleForm.username"
              placeholder="请输入用户名"
              autocomplete="on"
              clearable
            ></el-input>
          </el-form-item>
        </div>
        <div class="password">
          <el-form-item label="" prop="password">
            <el-input
              v-model="ruleForm.password"
              show-password
              placeholder="请输入密码"
              clearable
            ></el-input>
          </el-form-item>
        </div>
        <div class="confirm">
          <el-form-item label="" prop="checkPass">
            <el-input
              v-model="ruleForm.checkPass"
              show-password
              placeholder="请确认密码"
              clearable
            ></el-input>
          </el-form-item>
        </div>
        <div class="email">
          <el-input v-model="email" placeholder="邮箱(非必填)" clearable></el-input>
        </div>
        <!-- 霸王条款必须勾选 -->
        <div class="clause">
          <el-form-item prop="type">
            <el-checkbox-group v-model="ruleForm.type">
              <el-checkbox label="同意本网站的用户协议及隐私政策" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </div>
        <div class="whoisyourdaddy">
          <a href="javascript:;">用户协议</a>
          <a href="javascript:;">隐私政策</a>
        </div>
        <div class="submit">
          <el-form-item>
            <el-button
              type="primary"
              :loading="false"
              size="medium"
              round
              @click="submitForm('ruleForm')"
              >{{ submitContent }}</el-button
            >
          </el-form-item>
        </div>
        <!-- <div class="mention"></div> -->
      </el-form>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      // username: "",
      // password: "",
      // confirm: "",
      submitContent: "注册",
      email: "",
      ruleForm: {
        password: "",
        checkPass: "",
        username: "",
        type: []
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        username: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "你必须遵守本网站的用户协议",
            trigger: "change"
          }
        ]
      }
    };
  },
  methods: {
    ...mapActions(["sendRegisterAxios"]),
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.sendRegisterFn();
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    async sendRegisterFn() {
      const { username, password} = this.ruleForm;
      const {email} = this;
      const result = await this.sendRegisterAxios({ username, password, email });
      if (result === 200) {
        this.$message({
          message: "注册成功,即将跳转到登录页...",
          type: "success",
          center: true,
          offset: 80
        });
        await setTimeout(() => {
          this.$router.push("/login");
        }, 2000);
      } else if (result === 207) {
        this.$message({
          message: "注册失败,用户名已存在",
          type: "error",
          center: true,
          offset: 80
        });
      }
    }
  }
};
</script>
<style scoped lang="less">
#register {
  width: 100%;
  height: 100vh;
  background: url("./images/0001.png") no-repeat;
  background-size: cover;
  border: 1px solid transparent;
  font-family: "Microsoft YaHei", Arial, sans-serif;
  // 去除margin塌陷
  overflow: hidden;

  .register-main {
    width: 300px;
    padding: 10px 30px;
    margin: 100px auto;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 10px 10px 12px 2px rgba(0, 0, 0, 0.31);
    .register-header {
      position: relative;
      .register-title {
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
    .submit,
    .confirm,
    .email,
    .clause {
      margin-top: 20px;
    }
    .whoisyourdaddy {
      font-size: 12px;
      color: #555666;
      padding: 0;
      a {
        display: inline-block;
        color: #409eff;
        text-decoration: none !important;
        user-select: none;
        &:first-child {
          margin-right: 10px;
        }
      }
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
      .el-form-item {
        margin-bottom: 10px !important;
      }
    }
  }
}
</style>
