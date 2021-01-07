<template>
  <div>
    <h2 style="font-family:'微软雅黑';color:#409fff;margin-bottom:30px">测试formspree用的组件</h2>
    <form id="my-form" action="https://formspree.io/f/myyblyqp" method="POST" ref="formX">
      <label>Email:</label>
      <input type="email" name="email" v-model="myEmail" />
      <label>Name:</label>
      <input type="text" name="username" />
      <label>Message:</label>
      <input type="text" name="message"  v-model="myMessage" />
      <input type="submit" value="提交评论" class="submit" @click="sendEmail" />
      <p id="my-form-status"></p>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
        myEmail:'',
        myMessage:''
    };
  },
  methods: {
    sendEmail(ev) {
      console.log("准备发送邮件");
      ev.preventDefault();
      console.log("默认发送方式被取消了");
      console.log("准备手动发送");
      var data = new FormData(this.$refs.formX);
      console.log(data);
      axios({
        url: "https://formspree.io/f/myyblyqp",
        method: "post",
        headers: {
          Accept: "application/json"
        },
        data: {
          email: this.myEmail,
          message: this.myMessage
        }
      }).then(response => {
        console.log(response);
        console.log("已发送邮件");
        this.$message('已发送成功');
        this.myEmail='';
        this.myMessage='';

      });
    }
  }
};
</script>
<style></style>
