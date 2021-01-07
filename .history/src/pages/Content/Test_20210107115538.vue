<template>
  <div>
    <h2 style="font-family:'微软雅黑';color:#409fff;margin-bottom:30px">测试formspree用的组件</h2>
    <form id="my-form" action="https://formspree.io/f/myyblyqp" method="POST">
      <label>Email:</label>
      <input type="email" name="email" />
      <label>Name:</label>
      <input type="text" name="username" />
      <label>Message:</label>
      <input type="text" name="message" />
      <input type="submit" value="提交评论" class="submit" @click="sendEmail" />
      <p id="my-form-status"></p>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  methods: {
    sendEmail(ev) {
      console.log("准备发送action");
      ev.preventDefault();
      console.log("发送被取消了");
      console.log("准备发送Ajax");
      var data = new FormData(form);
      console.log(data);
    }
  }
};
</script>
<style></style>
