<template>
  <div id="ajax">
    <form id="my-form" method="POST">
      <label>Email:</label>
      <input type="email" name="email" />
      <label>Message:</label>
      <input type="text" name="message" />
      <button id="my-form-button">Submit</button>
      <p id="my-form-status"></p>
    </form>
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
      axios({
        url: "https://formspree.io/f/myyblyqp",
        method: "post",
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
<style></style>
