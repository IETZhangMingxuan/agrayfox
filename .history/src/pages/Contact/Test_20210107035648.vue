<template>
  <div id="ajax">
    <form id="my-form" method="POST">
      <label>Email:</label>
      <input type="email" name="email" />
      <label>Message:</label>
      <input type="text" name="message" />
      <button id="my-form-button" @click="sendEmail">Submit</button>
      <p id="my-form-status"></p>
    </form>
    <iframe src="http://www.baidu.com" frameborder="0" class="wudi"></iframe>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {};
  },
  methods: {
    sendEmail() {
      axios.post({
        url: "https://formspree.io/f/myyblyqp",
        headers: {
          Accept: "application/json"
        },
        data: {
          email: "a.visitor@email.com",
          message: "Hello!"
        }
      }).then(response => {
        console.log(response);
        alert('成功了吗')
      });
    }
  }
};
</script>
<style scoped lang="less">
#ajax{
    .wudi{
        width:1200px;
        overflow: hidden;
    }
}
</style>
