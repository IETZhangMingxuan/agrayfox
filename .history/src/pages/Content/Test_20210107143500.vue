<template>
  <div>
    <h2 style="font-family:'微软雅黑';color:#409fff;margin-bottom:30px">测试formspree用的组件</h2>
    <form id="my-form" action="https://formspree.io/f/myyblyqp" method="POST" ref="formX">
      <label>Email:</label>
      <input type="email" name="email" v-model="myEmail" />
      <label>Name:</label>
      <input type="text" name="username" v-model="myName" />
      <label>Message:</label>
      <input type="text" name="message" v-model="myMessage" />
      <input type="submit" value="提交评论" class="submit" @click="sendEmail" />
      <p id="my-form-status">{{ myStatus }}</p>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      myEmail: "",
      myMessage: "",
      myName: "",
      myStatus: ""
    };
  },
  methods: {
    async sendEmail(ev) {
      console.log("准备发送邮件");
      ev.preventDefault();
      console.log("默认发送方式被取消了");
      console.log("准备手动发送");
      //   this.myStatus = "发送中...";
      await this.$message({
        message: "发送中...请等待...",
        type: "warning",
        offset: "100"
      });
      var data = new FormData(this.$refs.formX);
      console.log(data);
      await axios({
        url: "https://formspree.io/f/myyblyqp",
        method: "post",
        headers: {
          Accept: "application/json"
        },
        data: {
          email: this.myEmail,
          message: this.myMessage,
          name: this.myName
        }
      })
        .then(response => {
          console.log(response);
          console.log("已发送邮件");
          this.$message({
            message: "发送成功,待站长审核后显示",
            type: "success",
            duration: "3000",
            offset: "300",
            showClose: true,
          });
          //   this.myStatus = "发送完毕...";
          this.myEmail = "";
          this.myMessage = "";
          this.myName = "";
        })
        .catch(error => {
          console.log(error);
          this.$message({
            message: "发送失败,请检查信息是否正确",
            type: "error",
            duration: "3000",
            offset: "300",
            showClose: true,

          });
          //   this.myStatus = "发送失败,请检查邮箱是否正确";
          //   this.myEmail = "";
          //   this.myMessage = "";
          //   this.myName = "";
        });
    }
  }
};
</script>
<style></style>
